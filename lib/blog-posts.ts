export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  pillar: string;
  description: string;
  readTime: string;
  content: string[];
  sections: { heading: string; paragraphs: string[] }[];
  cta: { text: string; href: string };
  schema: object;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-a-signal-score',
    title: 'What Is a Signal Score? And Why Your Business Needs One',
    date: '2026-03-14',
    author: 'Signal & Structure AI',
    pillar: 'Education',
    description:
      'A Signal Score measures how accurately AI platforms represent your business. Learn what it tests, why it matters, and what most businesses score.',
    readTime: '6 min read',
    content: [
      'AI platforms are sending referrals in your industry every day. When someone asks ChatGPT, Claude, or Perplexity for a recommendation, those platforms give direct answers with names, descriptions, and reasons to choose one business over another.',
      'The question is whether your business is one of them. And if it is, whether the information is actually correct.',
    ],
    sections: [
      {
        heading: 'A Signal Score Measures What AI Knows About You',
        paragraphs: [
          'A Signal Score\u2122 is a 0 to 100 measurement of how accurately and consistently AI platforms represent your business. It is not a vanity metric. It is a diagnostic tool that tells you exactly where you stand in the AI referral ecosystem.',
          'The score tests your business across 5 major AI platforms: ChatGPT by OpenAI, Claude by Anthropic, Perplexity AI, Google Gemini, and Microsoft Copilot. Each platform accesses and processes business information differently, which is why testing across all five matters.',
          'Most businesses score below 40 before any optimization. Many score zero. That does not mean they are bad businesses. It means their information is not set up for how AI looks for it.',
        ],
      },
      {
        heading: 'The 6 Categories That Make Up Your Score',
        paragraphs: [
          'Your Signal Score\u2122 breaks down into 6 measurable categories. Each one represents a different way AI finds and evaluates your business.',
          'Schema and Structure measures whether your website uses structured data markup that AI can parse directly. Google Business Profile checks whether your listing is claimed, complete, and consistent. NAP Consistency tracks whether your name, address, and phone number match across every platform where your business appears.',
          'Content for AI evaluates whether your website content is organized in a way AI platforms can easily extract and reference. AI Presence measures whether AI platforms actually mention your business when asked relevant questions. Technical Infrastructure looks at your website speed, mobile readiness, and overall technical health.',
          'When one of these categories scores low, it creates a specific gap in how AI understands your business. The score tells you exactly which gap to fix first.',
        ],
      },
      {
        heading: 'Why This Matters Right Now',
        paragraphs: [
          'People are not just Googling anymore. They are asking AI for direct recommendations and getting direct answers. This is not a trend that might happen in the future. It is happening right now, millions of times a day.',
          'When someone asks "Who is the best marketing agency in Durham, NC?" they are not getting a list of links. They are getting a curated answer with specific names and reasons. If your business is not in that answer, you are losing referrals you never even knew existed.',
          'The businesses that show up in AI recommendations are not necessarily the best in their field. They are the ones whose information is the most structured, consistent, and accessible to AI platforms. That is the gap a Signal Score\u2122 identifies and helps you close.',
        ],
      },
      {
        heading: 'What Happens When You Know Your Score',
        paragraphs: [
          'A Signal Score\u2122 gives you three things. First, a baseline. You know exactly where you stand today, not based on a guess, but based on real data from real AI platforms giving real answers about your business.',
          'Second, a priority list. The category breakdown shows you which areas need attention first. If your schema is at zero but your content scores well, you know where to focus.',
          'Third, a way to measure progress. After making changes, you re-test and compare. The score moves or it does not. There is no ambiguity about whether the work is having an impact.',
        ],
      },
    ],
    cta: {
      text: 'Book a free Signal Check and see your score in 30 minutes.',
      href: 'https://calendly.com/ltkenney13/30min',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'What Is a Signal Score? And Why Your Business Needs One',
      author: { '@type': 'Organization', name: 'Signal & Structure AI' },
      publisher: {
        '@type': 'Organization',
        name: 'Signal & Structure AI',
        url: 'https://signalstructure.ai',
      },
      datePublished: '2026-03-14',
      description:
        'A Signal Score measures how accurately AI platforms represent your business. Learn what it tests, why it matters, and what most businesses score.',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://signalstructure.ai/blog/what-is-a-signal-score',
      },
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
