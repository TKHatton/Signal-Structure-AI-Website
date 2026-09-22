import { describe, it, expect, vi, afterEach } from 'vitest';
import { syncToolSurface } from '@/lib/webmcp/register';

// A stand-in for document.modelContext that honours the abort signal the way
// the real API does: a tool registered with a signal disappears when it aborts.
function fakeModelContext() {
  const live = new Set<string>();
  return {
    live,
    registerTool: vi.fn(async (tool: { name: string }, opts?: { signal?: AbortSignal }) => {
      live.add(tool.name);
      opts?.signal?.addEventListener('abort', () => live.delete(tool.name));
    }),
  };
}

afterEach(() => vi.unstubAllGlobals());

describe('syncToolSurface', () => {
  it('does nothing and does not throw without document.modelContext or navigator.modelContext', async () => {
    vi.stubGlobal('document', {});
    vi.stubGlobal('navigator', {});
    await expect(syncToolSurface('/faq')).resolves.toMatchObject({ registered: false });
  });

  it('does not throw when document and navigator are undefined (server render)', async () => {
    vi.stubGlobal('document', undefined);
    vi.stubGlobal('navigator', undefined);
    await expect(syncToolSurface('/faq')).resolves.toMatchObject({ registered: false });
  });

  it('registers on document.modelContext', async () => {
    const mc = fakeModelContext();
    vi.stubGlobal('document', { modelContext: mc });
    const res = await syncToolSurface('/faq');
    expect(res.registered).toBe(true);
    expect([...mc.live].sort()).toEqual(['ask_advisor', 'get_business_facts', 'get_services']);
  });

  it('falls back to navigator.modelContext', async () => {
    const mc = fakeModelContext();
    vi.stubGlobal('document', {});
    vi.stubGlobal('navigator', { modelContext: mc });
    expect((await syncToolSurface('/faq')).registered).toBe(true);
    expect(mc.live.size).toBe(3);
  });

  it('a route change replaces the old registration instead of adding to it', async () => {
    const mc = fakeModelContext();
    vi.stubGlobal('document', { modelContext: mc });
    await syncToolSurface('/about');
    expect(mc.live.size).toBe(4);
    await syncToolSurface('/services');
    expect([...mc.live].sort()).toEqual([
      'ask_advisor',
      'get_business_facts',
      'get_services',
      'recommend_service',
      'start_signal_score',
    ]);
  });

  it('the last route wins when two syncs overlap', async () => {
    const mc = fakeModelContext();
    vi.stubGlobal('document', { modelContext: mc });
    await Promise.all([syncToolSurface('/services'), syncToolSurface('/faq')]);
    expect([...mc.live].sort()).toEqual(['ask_advisor', 'get_business_facts', 'get_services']);
  });

  it('swallows a registerTool failure so the page keeps working', async () => {
    vi.stubGlobal('document', {
      modelContext: {
        registerTool: async () => {
          throw new Error('nope');
        },
      },
    });
    await expect(syncToolSurface('/faq')).resolves.toMatchObject({ registered: false });
  });
});
