export const TOOL_NAMES = [
  'get_business_facts',
  'get_services',
  'ask_advisor',
  'recommend_service',
  'start_signal_score',
  'get_our_score_history',
] as const;

export type ToolName = (typeof TOOL_NAMES)[number];

const EVERY_PAGE: ToolName[] = ['get_business_facts', 'get_services', 'ask_advisor'];

// Extra tools by page. Anything not listed gets only the three above.
const BY_PAGE: Record<string, ToolName[]> = {
  '/': ['recommend_service', 'start_signal_score', 'get_our_score_history'],
  '/services': ['recommend_service', 'start_signal_score'],
  '/signal-services': ['recommend_service', 'start_signal_score'],
  '/mcp-setup': ['recommend_service', 'start_signal_score'],
  '/about': ['get_our_score_history'],
  '/our-approach': ['get_our_score_history'],
  '/why-this-matters': ['get_our_score_history'],
  '/how-it-works': ['get_our_score_history'],
};

function normalize(pathname: string): string {
  const bare = pathname.split(/[?#]/)[0];
  return bare.length > 1 ? bare.replace(/\/+$/, '') : bare || '/';
}

/** The tool names a page exposes. Pure, so it is testable without a browser. */
export function toolsForPath(pathname: string): ToolName[] {
  return [...EVERY_PAGE, ...(BY_PAGE[normalize(pathname)] ?? [])];
}
