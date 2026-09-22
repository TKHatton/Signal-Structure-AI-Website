import { describe, it, expect, vi } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { buildToolDefinitions } from '@/lib/webmcp/tools';
import { TOOL_NAMES } from '@/lib/webmcp/toolSurface';
import { recommend, SERVICES } from '@/lib/services';
import type { Answers } from '@/lib/services';
import * as C from '@/lib/constants';

const tools = buildToolDefinitions();

const client = (accept: boolean) =>
  ({
    requestUserInteraction: vi.fn(async (cb: () => unknown) => {
      void cb;
      return accept;
    }),
  }) as unknown as ModelContextClient;

const SAMPLE_INPUT: Record<string, Record<string, unknown>> = {
  get_business_facts: {},
  get_services: {},
  ask_advisor: { topic: 'what_is_ai_discoverability' },
  recommend_service: { known: 'no', goal: 'know' },
  get_our_score_history: {},
  start_signal_score: {},
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Out = Record<string, any>;

async function run(name: string, input: Record<string, unknown> = SAMPLE_INPUT[name]): Promise<Out> {
  return (await tools[name as keyof typeof tools].execute(input, client(true))) as Out;
}

describe('tool definitions', () => {
  it('defines exactly the tools the surface names', () => {
    expect(Object.keys(tools).sort()).toEqual([...TOOL_NAMES].sort());
  });

  for (const name of TOOL_NAMES) {
    it(`${name}: name, description, valid JSON Schema, sourced output`, async () => {
      const t = tools[name];
      expect(t.name).toBe(name);
      expect(t.description.length).toBeGreaterThan(20);
      expect(t.inputSchema.type).toBe('object');
      const props = t.inputSchema.properties as Record<string, { type: string; enum?: string[] }>;
      expect(typeof props).toBe('object');
      for (const prop of Object.values(props)) {
        expect(['string', 'number', 'boolean', 'object', 'array']).toContain(prop.type);
        if (prop.enum) expect(prop.enum.length).toBeGreaterThan(0);
      }
      for (const req of (t.inputSchema.required as string[] | undefined) ?? []) {
        expect(Object.keys(props)).toContain(req);
      }
      const out = await run(name);
      expect(out.source_url).toMatch(/^https:\/\//);
      expect(out.as_of).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  }

  it('read-only tools declare readOnlyHint, the action tool does not', () => {
    for (const name of TOOL_NAMES) {
      const hint = tools[name].annotations?.readOnlyHint;
      expect(hint).toBe(name === 'start_signal_score' ? false : true);
    }
  });
});

describe('ground rules on output', () => {
  const allOutputs = async () => {
    const outs: unknown[] = [];
    for (const name of TOOL_NAMES) outs.push(await run(name));
    for (const s of Object.keys(SERVICES)) outs.push(await run('get_services', { service: s }));
    const topics = (tools.ask_advisor.inputSchema.properties as { topic: { enum: string[] } }).topic.enum;
    for (const topic of topics) outs.push(await run('ask_advisor', { topic }));
    return JSON.stringify(outs);
  };

  it('never returns a street address (city only)', async () => {
    const text = await allOutputs();
    expect(text).not.toMatch(/honeysuckle/i);
    expect(text).not.toMatch(/suite/i);
    expect(text).not.toMatch(/\b\d{2,5}\s+[A-Z][a-z]+\s+(Drive|Dr|Street|St|Avenue|Ave|Road|Rd|Lane|Ln)\b/);
    expect(text).toContain(C.LOCATION);
  });

  it('every dollar figure in any output comes from lib/constants.ts', async () => {
    const digits = (p: string) => p.replace(/[^\d]/g, '');
    const allowed = new Set(
      [
        C.REPORT_PRICE,
        C.WATCH_PRICE,
        C.FIX_PRICE,
        C.AUTHORITY_PRICE_LOW,
        C.GROWTH_PRICE,
        C.PUBLISH_PRICE_LOW,
        C.PUBLISH_PRICE_HIGH,
        C.MCP_SETUP_PRICE_STANDARD,
        C.MCP_MAINTENANCE_PRICE,
      ].map(digits),
    );
    const text = await allOutputs();
    const found = text.match(/\$[\d,]+/g) ?? [];
    expect(found.length).toBeGreaterThan(0);
    for (const f of found) expect(allowed.has(digits(f))).toBe(true);
  });

  it('get_services returns the SERVICES prices and names exactly', async () => {
    const out = await run('get_services');
    expect(out.services).toHaveLength(7);
    for (const s of out.services) {
      const svc = SERVICES[s.key as keyof typeof SERVICES];
      expect(s.price).toBe(svc.price);
      expect(s.name).toBe(svc.name);
    }
  });

  it('get_services can return a single service', async () => {
    const out = await run('get_services', { service: 'watch' });
    expect(out.services).toHaveLength(1);
    expect(out.services[0].price).toBe(SERVICES.watch.price);
  });

  it('Signal Score is always two capitalized words', async () => {
    const text = await allOutputs();
    expect(text).not.toMatch(/SignalScore|Signal score|signal score/);
  });
});

describe('recommend_service', () => {
  it('matches recommend() for every answer combination', async () => {
    for (const known of ['no', 'yes'] as const)
      for (const goal of ['know', 'fix', 'content', 'chat', 'track'] as const)
        for (const who of [undefined, 'me', 'you'] as const) {
          const out = await run('recommend_service', { known, goal, ...(who ? { who } : {}) });
          const expected = recommend({ known, goal, who } as Answers);
          expect(out.best.key).toBe(expected.best);
          expect(out.next?.key ?? null).toBe(expected.next);
        }
  });

  it('Signal Score is the first step when known is no (except the chat goal)', async () => {
    for (const goal of ['know', 'fix', 'content', 'track']) {
      expect((await run('recommend_service', { known: 'no', goal })).best.key).toBe('score');
    }
  });

  it('rejects input outside the enums', async () => {
    await expect(run('recommend_service', { known: 'maybe', goal: 'know' })).rejects.toThrow();
    await expect(run('recommend_service', { known: 'no' })).rejects.toThrow();
  });
});

describe('ask_advisor', () => {
  it('rejects an unknown topic', async () => {
    await expect(run('ask_advisor', { topic: 'my_own_business' })).rejects.toThrow();
  });

  it('is educational only and says so', async () => {
    expect((await run('ask_advisor')).note).toMatch(/general|educational/i);
  });
});

describe('get_our_score_history', () => {
  it('lists the published rows, oldest first, with the engine caveat', async () => {
    const out = await run('get_our_score_history');
    expect(out.history.map((r: { date: string }) => r.date)).toEqual([
      '2026-03-10',
      '2026-03-17',
      '2026-03-23',
      '2026-04-04',
      '2026-04-06',
      '2026-05-05',
      '2026-05-11',
      '2026-09-21',
    ]);
    expect(out.caveat).toMatch(/engine changed/i);
    const sep = out.history[out.history.length - 1];
    expect(sep.score).toBe(67);
    expect(sep.note).toMatch(/re-verified after an address change/i);
  });

  it('omits any row with published: false', async () => {
    vi.resetModules();
    vi.doMock('@/lib/webmcp/data/scoreHistory', async () => {
      const real = await vi.importActual<typeof import('@/lib/webmcp/data/scoreHistory')>(
        '@/lib/webmcp/data/scoreHistory',
      );
      return {
        ...real,
        SCORE_HISTORY: real.SCORE_HISTORY.map((r) =>
          r.date === '2026-09-21' ? { ...r, published: false } : r,
        ),
      };
    });
    const fresh = await import('@/lib/webmcp/tools');
    const out = (await fresh
      .buildToolDefinitions()
      .get_our_score_history.execute({}, client(true))) as Out;
    expect(out.history.some((r: { date: string }) => r.date === '2026-09-21')).toBe(false);
    expect(out.history).toHaveLength(7);
    vi.doUnmock('@/lib/webmcp/data/scoreHistory');
  });

  it('says nothing about health, mobility, or why verification is hard', async () => {
    const text = JSON.stringify(await run('get_our_score_history'));
    expect(text).not.toMatch(/health|mobility|disab|video|film|home address/i);
  });
});

describe('start_signal_score', () => {
  it('returns cancelled and never the URL when the user declines', async () => {
    const out = (await tools.start_signal_score.execute({}, client(false))) as Out;
    expect(out).toEqual({ cancelled: true });
    expect(JSON.stringify(out)).not.toContain(C.REPORT_CHECKOUT_URL);
  });

  it('returns the checkout URL only after the user accepts', async () => {
    const c = client(true);
    const out = (await tools.start_signal_score.execute({ business_name: 'Acme' }, c)) as Out;
    expect(vi.mocked(c.requestUserInteraction)).toHaveBeenCalledTimes(1);
    expect(out.checkout_url).toBe(C.REPORT_CHECKOUT_URL);
    expect(out.price).toBe(C.REPORT_PRICE);
  });

  it('asks with the price and the business name in the question', async () => {
    let asked = '';
    const c = {
      requestUserInteraction: async (cb: () => unknown) => {
        vi.stubGlobal('window', {
          confirm: (m: string) => {
            asked = m;
            return true;
          },
        });
        return cb();
      },
    } as unknown as ModelContextClient;
    await tools.start_signal_score.execute({ business_name: 'Acme' }, c);
    vi.unstubAllGlobals();
    expect(asked).toContain(C.REPORT_PRICE);
    expect(asked).toContain('Acme');
  });
});

describe('start_signal_score without requestUserInteraction', () => {
  it('falls back to a plain confirm and still gates the URL', async () => {
    vi.stubGlobal('window', { confirm: () => false });
    const declined = (await tools.start_signal_score.execute({}, {} as ModelContextClient)) as Out;
    vi.stubGlobal('window', { confirm: () => true });
    const accepted = (await tools.start_signal_score.execute({}, undefined as unknown as ModelContextClient)) as Out;
    vi.unstubAllGlobals();
    expect(declined).toEqual({ cancelled: true });
    expect(accepted.checkout_url).toBe(C.REPORT_CHECKOUT_URL);
  });

  it('caps a long business name in the question', async () => {
    let asked = '';
    vi.stubGlobal('window', { confirm: (m: string) => ((asked = m), true) });
    await tools.start_signal_score.execute({ business_name: 'x'.repeat(500) }, {} as ModelContextClient);
    vi.unstubAllGlobals();
    expect(asked.length).toBeLessThan(140);
  });
});

describe('recommend_service reason', () => {
  it('explains the pick using the answers given', async () => {
    const noScore = await run('recommend_service', { known: 'no', goal: 'fix', who: 'you' });
    expect(noScore.reason).toMatch(/do not have a Signal Score yet/);
    expect(noScore.reason).toMatch(/Signal Fix/);

    const diy = await run('recommend_service', { known: 'yes', goal: 'content', who: 'me' });
    expect(diy.reason).toMatch(/yourself/);
    expect(diy.reason).toMatch(/Signal Growth/);

    const chat = await run('recommend_service', { known: 'yes', goal: 'chat' });
    expect(chat.reason).toMatch(/ChatGPT/);
  });

  it('gives a reason for every combination', async () => {
    for (const known of ['no', 'yes'])
      for (const goal of ['know', 'fix', 'content', 'chat', 'track'])
        for (const who of [undefined, 'me', 'you']) {
          const out = await run('recommend_service', { known, goal, ...(who ? { who } : {}) });
          expect(out.reason.length).toBeGreaterThan(30);
          expect(out.reason).toContain(out.best.name);
        }
  });
});

describe('no paid API or network in tool modules', () => {
  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = path.join(dir, f);
      return statSync(p).isDirectory() ? walk(p) : [p];
    });

  it('has no fetch, API_URL, or signal-pulse-api anywhere in lib/webmcp', () => {
    const files = walk(path.resolve(__dirname, '../lib/webmcp')).filter((f) => /\.tsx?$/.test(f));
    expect(files.length).toBeGreaterThan(5);
    for (const f of files) {
      const src = readFileSync(f, 'utf8');
      expect(src, f).not.toMatch(/\bfetch\b|API_URL|signal-pulse-api|XMLHttpRequest|sendBeacon/);
    }
  });
});
