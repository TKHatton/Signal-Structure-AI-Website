import { describe, it, expect } from 'vitest';
import { toolsForPath } from '@/lib/webmcp/toolSurface';

const GLOBAL = ['get_business_facts', 'get_services', 'ask_advisor'];
const ACTION = ['recommend_service', 'start_signal_score'];
const HISTORY = ['get_our_score_history'];

const sorted = (a: string[]) => [...a].sort();

describe('toolsForPath', () => {
  it('gives only the three global tools on any other path', () => {
    for (const p of ['/faq', '/contact', '/signal-watch', '/book', '/does-not-exist']) {
      expect(sorted(toolsForPath(p))).toEqual(sorted(GLOBAL));
    }
  });

  it('adds recommend and start on the service pages', () => {
    for (const p of ['/signal-services', '/mcp-setup', '/services']) {
      expect(sorted(toolsForPath(p))).toEqual(sorted([...GLOBAL, ...ACTION]));
    }
  });

  it('adds score history on the story pages', () => {
    for (const p of ['/about', '/our-approach', '/why-this-matters', '/how-it-works']) {
      expect(sorted(toolsForPath(p))).toEqual(sorted([...GLOBAL, ...HISTORY]));
    }
  });

  it('the home page gets all six', () => {
    expect(sorted(toolsForPath('/'))).toEqual(sorted([...GLOBAL, ...ACTION, ...HISTORY]));
  });

  it('ignores trailing slashes, query strings, and hashes', () => {
    expect(toolsForPath('/about/')).toEqual(toolsForPath('/about'));
    expect(toolsForPath('/about?x=1')).toEqual(toolsForPath('/about'));
    expect(toolsForPath('/about#team')).toEqual(toolsForPath('/about'));
  });

  it('matches the manual-acceptance counts: /faq 3, /services 5, /about 4', () => {
    expect(toolsForPath('/faq')).toHaveLength(3);
    expect(toolsForPath('/services')).toHaveLength(5);
    expect(toolsForPath('/about')).toHaveLength(4);
  });
});
