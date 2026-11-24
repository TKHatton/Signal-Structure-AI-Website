import {
  REPORT_PRICE,
  WATCH_PRICE,
  MCP_SETUP_PRICE_STANDARD,
  MCP_MAINTENANCE_PRICE,
  BOOK_TITLE,
  BOOK_SUBTITLE,
  EMAIL,
  LOCATION,
  CHATGPT_PULSE_URL,
  CHATGPT_ADVISOR_URL,
} from '@/lib/constants';

const BASE = 'https://signalstructure.ai';

// Served at /llms.txt. Built from lib/constants so prices never drift from
// the pages. Only list pages that are indexable (matches app/sitemap.ts).
const body = `# Signal & Structure AI

> Signal & Structure AI helps small and mid-size businesses be found, be accurate, and be recommended in AI-generated answers. We check how AI assistants like ChatGPT, Claude, Gemini, Perplexity, and Copilot describe a business, score it on a 0-100 scale, and show what to fix. Founded by Lenise Kenney. Based in ${LOCATION}, working with businesses anywhere.

Scores are on a 0-100 scale. Signal Pulse is a quick scan (schema and AI presence only), so its scores run lower than the full Signal Score Report, which covers all six categories.

## Products

- [Signal Pulse](${BASE}/signal-pulse): Free quick check of how visible a business is to AI systems. Also available in ChatGPT: ${CHATGPT_PULSE_URL.split('?')[0]}
- [Signal Score Report](${BASE}/signal-score-report): Full AI discoverability scorecard as a PDF, ${REPORT_PRICE}. Measures what major AI platforms say about the business, scores structured data and citations, and lists prioritized fixes.
- [Signal Watch](${BASE}/signal-watch): Ongoing monitoring, ${WATCH_PRICE} per month, cancel anytime. Runs inside Claude or ChatGPT and tracks the score over time.
- [Signal Advisor](${CHATGPT_ADVISOR_URL}): Free educational Q&A tool in ChatGPT about AI discoverability and schema markup. General answers only, not personalized.
- [MCP Setup](${BASE}/mcp-setup): Done-for-you service that puts a business's own tool inside ChatGPT. ${MCP_SETUP_PRICE_STANDARD} setup plus ${MCP_MAINTENANCE_PRICE} per month for hosting and maintenance.
- [Signal Services](${BASE}/signal-services): Technical builds, entity builds, and ongoing content services beyond the Signal Score.

## Research and reading

- [Terms of Visibility](${BASE}/terms-of-visibility): Plain-language readings of platform terms that decide which businesses AI recommends, by Lenise Kenney. A dated list of terms changes (Google Workspace AI Tools Addendum and Google Cloud Section 17 on AI agents, November 24, 2026; OpenAI's Businesses in ChatGPT Terms, November 18, 2026), the platforms being read, and the papers. Not legal advice.

- [The Price of a Blue Check, Nine Days Later (companion paper)](${BASE}/resources/chatgpt-business-hub-nine-days-later): November 20, 2026 comparison by Lenise Kenney of the November 9 and November 18, 2026 versions of OpenAI's Businesses in ChatGPT Terms. The November 18 version removed the promise not to sue, the release of claims known or unknown and the Covered Claim definition, added a release tied to Business Agents and widened Customer Data. Includes a comparison with Google, Yelp, Apple, Bing and Meta.
- [The Fine Print of ChatGPT's Business Hub (white paper)](${BASE}/resources/chatgpt-business-hub-fine-print): November 2026 plain-language reading by Lenise Kenney of the version of OpenAI's Businesses in ChatGPT Terms dated November 9, 2026, compared with Google, Yelp, Apple, Bing and Meta. OpenAI updated the terms on November 18, 2026; this paper stays online as the record of the earlier version.
- [The 2026 Triangle AI Visibility Study](${BASE}/resources/triangle-ai-visibility-study): July 2026 benchmark of how four AI platforms describe 52 small businesses across the NC Triangle.
- [The Invisible Business (white paper)](${BASE}/resources/the-invisible-business): Why a business can exist in the real world but not in AI, and a six-dimension framework for AI visibility.
- [${BOOK_TITLE}](${BASE}/book): ${BOOK_SUBTITLE}. Business book by Lenise Kenney.
- [Why This Matters](${BASE}/why-this-matters): The case for structuring a business for AI referrals.
- [Resources](${BASE}/resources): Free guides and downloads.

## Company

- [About](${BASE}/about): Who we are and how we work.
- [FAQ](${BASE}/faq): Common questions on AI discoverability, scores, and pricing.
- [Speaking](${BASE}/speaking): Talks on AI discoverability for communities, conferences, and teams.
- [Contact](${BASE}/contact): ${EMAIL}
- [Privacy](${BASE}/privacy)
- [Terms](${BASE}/terms)
`;

export function GET() {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
