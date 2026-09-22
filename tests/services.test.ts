import { describe, it, expect } from 'vitest';
import golden from './fixtures/recommend.golden.json';
import { recommend, SERVICES, REEL } from '@/lib/services';
import type { Answers } from '@/lib/services';

// The golden file was generated from the recommend() that lived inside
// components/ServiceFinder.tsx before it moved to lib/services.ts. It pins
// every answer combination so the extraction cannot change the finder.
describe('recommend (pinned to the pre-extraction output)', () => {
  for (const [key, expected] of Object.entries(golden)) {
    it(key, () => {
      const [known, goal, who] = key.split('|').map((v) => (v === 'undefined' ? undefined : v));
      expect(recommend({ known, goal, who } as Answers)).toEqual(expected);
    });
  }
});

describe('SERVICES', () => {
  it('has all seven services and the reel lists each once', () => {
    expect(Object.keys(SERVICES).sort()).toEqual(
      ['authority', 'fix', 'growth', 'mcp', 'publish', 'score', 'watch'],
    );
    expect([...REEL].sort()).toEqual(Object.keys(SERVICES).sort());
  });
});
