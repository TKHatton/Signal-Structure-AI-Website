import { describe, it, expect } from 'vitest';
import { isPublished, todayInEastern } from '../lib/blog-posts';

// Blog posts carry the Monday they go live. The site is static, so a post
// pushed early must stay hidden until a build on or after its date.
describe('blog post publish date', () => {
  const post = { date: '2026-11-23' };

  it('hides a post before its date', () => {
    // Sunday 11-22, 11 PM Eastern (Monday 04:00 UTC)
    expect(isPublished(post, new Date('2026-11-23T04:00:00Z'))).toBe(false);
  });

  it('shows a post on its date in Eastern time', () => {
    // Monday 11-23, 5 AM Eastern (10:00 UTC), when the weekly rebuild runs
    expect(isPublished(post, new Date('2026-11-23T10:00:00Z'))).toBe(true);
  });

  it('shows a post after its date', () => {
    expect(isPublished(post, new Date('2026-12-01T12:00:00Z'))).toBe(true);
  });

  it('reads today in Eastern time, not UTC', () => {
    // 02:00 UTC on 11-23 is still 11-22 in Eastern
    expect(todayInEastern(new Date('2026-11-23T02:00:00Z'))).toBe('2026-11-22');
  });
});
