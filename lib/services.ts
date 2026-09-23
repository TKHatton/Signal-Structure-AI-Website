// The seven Signal services and the logic that picks one. Shared by the
// ServiceFinder component and the WebMCP tools so the two can never disagree.
// Prices and links come from lib/constants.ts.
import {
  EMAIL,
  REPORT_PRICE,
  REPORT_CHECKOUT_URL,
  WATCH_PRICE,
  WATCH_CHECKOUT_URL,
  FIX_PRICE,
  AUTHORITY_PRICE_LOW,
  GROWTH_PRICE,
  GROWTH_COMMITMENT_MONTHS,
  PUBLISH_PRICE_LOW,
  PUBLISH_PRICE_HIGH,
  PUBLISH_COMMITMENT_MONTHS,
  MCP_SETUP_PRICE_STANDARD,
  MCP_MAINTENANCE_PRICE,
} from '@/lib/constants';

export type ServiceKey = 'score' | 'watch' | 'fix' | 'authority' | 'growth' | 'publish' | 'mcp';
export type Known = 'no' | 'yes';
export type Goal = 'know' | 'fix' | 'content' | 'chat' | 'track';
export type Who = 'me' | 'you';

export interface Answers {
  known?: Known;
  goal?: Goal;
  who?: Who;
}

export interface Service {
  name: string;
  price: string;
  term: string;
  why: string;
  cta: string;
  href: string;
}

const mailto = (name: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(name)}%20inquiry`;

export const SERVICES: Record<ServiceKey, Service> = {
  score: {
    name: 'Signal Score Report',
    price: REPORT_PRICE,
    term: 'one time',
    why: 'It shows what the major AI assistants say about your business, what they get wrong, and what to fix first. Every other step builds on it.',
    cta: 'Get your Signal Score',
    href: REPORT_CHECKOUT_URL,
  },
  watch: {
    name: 'Signal Watch',
    price: `${WATCH_PRICE}/mo`,
    term: 'cancel anytime',
    why: 'It lets you check your progress as you go, so you can see whether the changes you make are moving what AI says about you.',
    cta: 'Start Signal Watch',
    href: WATCH_CHECKOUT_URL,
  },
  fix: {
    name: 'Signal Fix',
    price: FIX_PRICE,
    term: 'one time',
    why: 'The technical foundation AI needs to read your business correctly: schema markup, a clean sitemap, and your Google Business Profile set up right. Done for you.',
    cta: 'Ask about Signal Fix',
    href: mailto('Signal Fix'),
  },
  authority: {
    name: 'Signal Authority',
    price: `from ${AUTHORITY_PRICE_LOW}`,
    term: 'one time, priced by site size',
    why: 'A full entity build: your business listed correctly across the directories AI checks, schema throughout your site, and your details consistent everywhere.',
    cta: 'Ask about Signal Authority',
    href: mailto('Signal Authority'),
  },
  growth: {
    name: 'Signal Growth',
    price: `${GROWTH_PRICE}/mo`,
    term: `${GROWTH_COMMITMENT_MONTHS}-month minimum`,
    why: 'Monthly content strategy and detailed outlines built for AI visibility. You or your team write the pieces.',
    cta: 'Tell me what you need',
    href: mailto('Signal Growth'),
  },
  publish: {
    name: 'Signal Publish',
    price: `${PUBLISH_PRICE_LOW} to ${PUBLISH_PRICE_HIGH}/mo`,
    term: `${PUBLISH_COMMITMENT_MONTHS}-month minimum`,
    why: 'Everything in Signal Growth, and I write it. Original articles built to become the source AI quotes, delivered ready to publish.',
    cta: 'Tell me what you need',
    href: mailto('Signal Publish'),
  },
  mcp: {
    name: 'MCP Setup',
    price: MCP_SETUP_PRICE_STANDARD,
    term: `one time, plus ${MCP_MAINTENANCE_PRICE}/mo`,
    why: 'Your business gets its own tool inside ChatGPT, so customers can get answers and get things done without leaving the app they already use.',
    cta: 'See how MCP Setup works',
    href: '/mcp-setup',
  },
};

export const REEL: ServiceKey[] = ['score', 'watch', 'fix', 'authority', 'growth', 'publish', 'mcp'];

export function recommend(a: Answers): { best: ServiceKey; next: ServiceKey | null } {
  const { known, goal, who } = a;

  if (goal === 'chat') return { best: 'mcp', next: known === 'no' ? 'score' : null };

  // No Signal Score yet: that is always the first step.
  if (known === 'no') {
    let next: ServiceKey = 'watch';
    if (goal === 'fix') next = who === 'me' ? 'watch' : 'fix';
    if (goal === 'content') next = who === 'me' ? 'growth' : 'publish';
    return { best: 'score', next };
  }

  if (goal === 'fix') {
    return who === 'me' ? { best: 'watch', next: 'fix' } : { best: 'fix', next: 'authority' };
  }
  if (goal === 'content') {
    return who === 'me' ? { best: 'growth', next: 'publish' } : { best: 'publish', next: 'growth' };
  }
  // know or track: they already have a score, so the next step is fixing what it found
  return { best: 'watch', next: 'fix' };
}
