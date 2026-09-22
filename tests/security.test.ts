import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { SCORE_HISTORY } from '@/lib/webmcp/data/scoreHistory';
import { buildToolDefinitions } from '@/lib/webmcp/tools';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextConfig = require('../next.config.js');

describe('WebMCP data that ships to the browser', () => {
  it('has no hidden score rows (everything in lib/webmcp is readable in the page code)', () => {
    const hidden = SCORE_HISTORY.filter((r) => !r.published).map((r) => r.date);
    expect(
      hidden,
      'published: false only hides a row from the tool. The row still ships to every browser. Delete the row instead.',
    ).toEqual([]);
  });
});

describe('tool descriptions stay plain', () => {
  // Descriptions are read by the visitor's AI. They describe the tool, and
  // never steer the AI or tell it to hide or override anything.
  it('contain no instructions aimed at the AI', () => {
    for (const t of Object.values(buildToolDefinitions())) {
      const text = [t.description, JSON.stringify(t.inputSchema)].join(' ');
      expect(text, t.name).not.toMatch(
        /ignore (all|any|previous|prior)|always recommend|only recommend|do not (tell|mention|reveal)|system prompt|you must|disregard/i,
      );
    }
  });
});

describe('security headers', () => {
  const headersFor = async () => {
    const rules = await nextConfig.headers();
    const all = rules.find((r: { source: string }) => r.source === '/:path*');
    return Object.fromEntries(
      all.headers.map((h: { key: string; value: string }) => [h.key.toLowerCase(), h.value]),
    ) as Record<string, string>;
  };

  it('no other site can frame the pages (clickjacking)', async () => {
    const h = await headersFor();
    expect(h['x-frame-options']).toBe('SAMEORIGIN');
    expect(h['content-security-policy']).toContain("frame-ancestors 'self'");
    expect(h['content-security-policy']).not.toMatch(/frame-ancestors[^;]*(\*|https?:)/);
  });

  it('sends the basic hardening headers', async () => {
    const h = await headersFor();
    expect(h['x-content-type-options']).toBe('nosniff');
    expect(h['referrer-policy']).toBe('strict-origin-when-cross-origin');
    expect(h['permissions-policy']).toContain('camera=()');
    expect(h['content-security-policy-report-only']).toContain("default-src 'self'");
  });

  it('the report-only policy allows the Signal Pulse API the site calls', async () => {
    // Same address the pages use: the env var on Netlify, else the code default.
    const { API_URL } = await import('@/lib/constants');
    const h = await headersFor();
    expect(h['content-security-policy-report-only']).toContain(new URL(API_URL).origin);
  });
});

describe('security.txt', () => {
  const file = readFileSync(path.resolve(__dirname, '../public/.well-known/security.txt'), 'utf8');

  it('has a contact and an expiry', () => {
    expect(file).toMatch(/^Contact: mailto:hello@signalstructure\.ai$/m);
    expect(file).toMatch(/^Expires: \d{4}-\d{2}-\d{2}T/m);
  });
});
