// Educational answers for the ask_advisor tool.
//
// Bundled copy of the free Signal Advisor content, so the tool has no network
// dependency and cannot fail during a demo. Source:
//   signal-engine/mcp/signal-advisor/src/content.ts
// Trimmed to the summaries and key points. Audience-size statistics were left
// out because the public site does not state them. Keep this in step with the
// Advisor if that content changes.

export const ADVISOR_TOPICS = [
  'what_is_ai_discoverability',
  'how_to_improve',
  'how_ai_platforms_find_businesses',
  'how_the_signal_score_works',
] as const;

export type AdvisorTopic = (typeof ADVISOR_TOPICS)[number];

export interface AdvisorEntry {
  title: string;
  summary: string;
  points: { heading: string; text: string }[];
}

export const ADVISOR_CONTENT: Record<AdvisorTopic, AdvisorEntry> = {
  what_is_ai_discoverability: {
    title: 'What Is AI Discoverability?',
    summary:
      'AI discoverability is whether AI assistants like ChatGPT, Claude, Gemini, and Copilot can find, understand, and accurately recommend your business when people ask relevant questions.',
    points: [
      {
        heading: 'The three pillars',
        text: 'Structured data (machine-readable facts AI can parse directly), content authority (consistent, high-quality content across your website, directories, and citations), and platform recognition (whether AI platforms can already surface your business).',
      },
      {
        heading: 'How it differs from SEO',
        text: 'SEO helps you rank in search results. AI discoverability decides whether an assistant mentions your business at all when it answers a question, and whether what it says is accurate. There are no ads in those answers. The AI either knows about your business or it does not.',
      },
    ],
  },

  how_to_improve: {
    title: 'How to Improve Your AI Signal',
    summary:
      'The highest-impact actions for making a business more discoverable by AI platforms, in priority order.',
    points: [
      {
        heading: '1. Add schema markup (JSON-LD)',
        text: 'Include Organization or LocalBusiness schema with your name, address, phone, hours, and description. It gives AI platforms machine-readable facts about your business.',
      },
      {
        heading: '2. Claim and complete your Google Business Profile',
        text: 'It is one of the main data sources AI platforms use. Keep your name, address, phone, hours, categories, and description complete and accurate.',
      },
      {
        heading: '3. Keep your name, address, and phone identical everywhere',
        text: 'Your website, Google, Yelp, Facebook, and every directory should match. Inconsistencies lower an AI platform’s confidence in recommending you.',
      },
      {
        heading: '4. Build quality citations',
        text: 'List the business on major and industry-specific directories with the same details. AI platforms cross-check them.',
      },
      {
        heading: '5. Publish clear content about what you do',
        text: 'FAQ, service, and about pages give AI platforms text they can quote when describing businesses like yours.',
      },
      {
        heading: '6. Add FAQ schema',
        text: 'FAQPage markup with your most common questions is often pulled directly into AI answers.',
      },
      {
        heading: '7. Check what AI says about you, and correct it',
        text: 'Look for wrong, missing, or out-of-date details. Fix the source data (website, Google profile, directories) and the platforms will eventually reflect it.',
      },
    ],
  },

  how_ai_platforms_find_businesses: {
    title: 'How AI Platforms Discover Businesses',
    summary:
      'Each AI platform draws on different sources, so no single fix works for all of them. The businesses that score highest are consistent everywhere.',
    points: [
      {
        heading: 'ChatGPT',
        text: 'Uses web browsing, training data, and connected tools. Clear, factual content on a fast site helps, because it often summarizes the homepage and about page.',
      },
      {
        heading: 'Claude',
        text: 'Relies on training data and web search, and tends to say it does not know rather than guess. Consistent details across directories help it find you.',
      },
      {
        heading: 'Gemini',
        text: 'Draws heavily on Google Search, Google Maps, and the Google Business Profile, so the profile comes first.',
      },
      {
        heading: 'Perplexity',
        text: 'Searches the web live and cites its sources. Well-structured pages with clear answers get cited.',
      },
      {
        heading: 'Microsoft Copilot',
        text: 'Uses Bing, LinkedIn, and Microsoft’s web index. Being indexed by Bing matters, and Bing Places and LinkedIn company pages feed it directly.',
      },
    ],
  },

  how_the_signal_score_works: {
    title: 'The Signal Score: How It Works',
    summary:
      'The Signal Score is a 0 to 100 rating of how discoverable a business is across AI platforms. It combines a review of the website’s signals with direct testing of how AI platforms actually describe the business.',
    points: [
      { heading: '75 to 100: Strong Signal', text: 'Highly discoverable across AI platforms.' },
      { heading: '50 to 74: Weak Signal', text: 'Found by some platforms, with room to improve.' },
      { heading: '25 to 49: Low Signal', text: 'Limited discoverability and significant gaps.' },
      { heading: '0 to 24: No Signal', text: 'Mostly invisible to AI platforms.' },
    ],
  },
};
