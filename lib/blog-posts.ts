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
    slug: 'five-things-ai-gets-wrong',
    title: '5 Things AI Gets Wrong About Your Business (And How to Fix Them)',
    date: '2026-03-21',
    author: 'Signal & Structure AI',
    pillar: 'Education',
    description:
      'AI platforms are making claims about your business right now. Here are the 5 most common errors and exactly what to do about each one.',
    readTime: '7 min read',
    content: [
      'Right now, someone is asking an AI platform about a business like yours. The answer they get might include the wrong address, outdated services, a competitor\'s phone number, or a description of something you have never offered. And you have no idea it is happening.',
      'AI platforms do not fact-check themselves. They assemble answers from whatever data they can find. When that data is incomplete, inconsistent, or missing entirely, the answers reflect it.',
    ],
    sections: [
      {
        heading: '1. AI Says You Offer Services You Do Not Provide',
        paragraphs: [
          'This is the most common hallucination. An AI platform looks at your industry, your location, and whatever fragments of data it can find, then fills in the gaps with assumptions.',
          'A marketing agency might get described as offering web development. A financial advisor might be listed as providing tax preparation. The AI is not lying. It is guessing, and it is guessing wrong.',
          'How to fix it: Create a dedicated Services page on your website with Service schema markup. List exactly what you offer and, just as importantly, what your specialties are. The more specific your structured data, the less room AI has to improvise. Your Google Business Profile should list the same services with the same language.',
        ],
      },
      {
        heading: '2. AI Gets Your Location Wrong',
        paragraphs: [
          'AI platforms pull location data from multiple sources. When those sources disagree, AI either picks the wrong one or creates a hybrid that does not exist. A business in Durham, NC might get listed in Durham, England. A business that moved two years ago might still show the old address.',
          'How to fix it: Lock in your NAP (Name, Address, Phone) and make sure it is identical everywhere. Your website, your Google Business Profile, Bing Places, Apple Business Connect, Yelp, and any other directory should all show the exact same address in the exact same format. Schema markup on your website should include your full address in Organization schema. Consistency across sources is what AI uses to confirm accuracy.',
        ],
      },
      {
        heading: '3. AI Cannot Describe What Makes You Different',
        paragraphs: [
          'Ask an AI what your business does and you might get a generic answer that could apply to any competitor. There is no mention of your methodology, your niche, your approach, or what separates you from the other ten businesses in the same category.',
          'How to fix it: Publish content that explains your unique approach. Blog posts, FAQ pages, and About pages that describe your methodology in plain language give AI specific material to reference. If your differentiator is a proprietary process, a niche specialization, or a unique framework, write about it on your website. AI cannot reference what does not exist in text form.',
        ],
      },
      {
        heading: '4. AI Attributes Your Information to Someone Else',
        paragraphs: [
          'This one is subtle and frustrating. You create a blog post or develop a methodology, and AI attributes it to a larger competitor or a generic source. Your intellectual property gets absorbed into the general knowledge pool without credit.',
          'How to fix it: Use Author and Publisher schema on every piece of content. Make sure your Organization schema is on every page of your site. Link your content to your business entity with structured data. When AI sees the same author consistently attached to a body of work through schema markup, it builds an entity profile that connects the content to you specifically.',
        ],
      },
      {
        heading: '5. AI Does Not Know You Exist at All',
        paragraphs: [
          'This is the most common issue and the easiest to overlook. You assume AI knows about your business because you have a website. But having a website is not enough. If no AI platform mentions you by name when asked about your industry in your location, you are functionally invisible.',
          'How to fix it: This requires the full approach. Schema markup tells AI what you are. Google Business Profile tells AI where you are. Directory listings confirm you are real. Content gives AI something to learn from. A Custom GPT on the ChatGPT platform puts you directly into one AI ecosystem. Each step adds a signal. Enough signals, and AI starts including you in its answers.',
        ],
      },
      {
        heading: 'The Common Thread',
        paragraphs: [
          'All five of these problems have the same root cause: the information is either missing, inconsistent, or unstructured. AI platforms are not biased against your business. They simply work with what they can find. When what they find is incomplete, the results reflect it.',
          'The good news is that every one of these issues is fixable. Not with ads, not with SEO tricks, and not with shortcuts. With structured data, consistent listings, and content that AI can actually parse and reference.',
        ],
      },
    ],
    cta: {
      text: 'Book a free Signal Check and see what AI platforms are saying about your business right now.',
      href: 'https://calendly.com/ltkenney13/30min',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        '5 Things AI Gets Wrong About Your Business (And How to Fix Them)',
      author: { '@type': 'Organization', name: 'Signal & Structure AI' },
      publisher: {
        '@type': 'Organization',
        name: 'Signal & Structure AI',
        url: 'https://signalstructure.ai',
      },
      datePublished: '2026-03-21',
      description:
        'AI platforms are making claims about your business right now. Here are the 5 most common errors and exactly what to do about each one.',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://signalstructure.ai/blog/five-things-ai-gets-wrong',
      },
    },
  },
  {
    slug: 'day-one-signal-score-zero',
    title: 'Day One: My Signal Score Is Zero. Here Is What I Am Doing About It.',
    date: '2026-03-16',
    author: 'Signal & Structure AI',
    pillar: 'Company & Culture',
    description:
      'We ran our own business through the Signal Score methodology. The result was zero. This is the full story of what we found and the 90-day plan to fix it.',
    readTime: '5 min read',
    content: [
      'We built a system that measures how well AI platforms know about a business. Then we ran ourselves through it. The result was zero out of 100.',
      'Not low. Not concerning. Zero.',
    ],
    sections: [
      {
        heading: 'Why We Tested Ourselves',
        paragraphs: [
          'Signal & Structure AI exists to help businesses become discoverable by AI. We built the methodology, defined the scoring system, and created the tools to measure it. Before we could credibly tell another business what their score means, we needed to know our own.',
          'So we ran the full audit. Five AI platforms. Six scoring categories. No shortcuts, no special treatment, no rounding up. The same exact process we use with clients.',
          'The result was honest and uncomfortable.',
        ],
      },
      {
        heading: 'What the Audit Found',
        paragraphs: [
          'We asked ChatGPT, Claude, Perplexity, Gemini, and Copilot about Signal & Structure AI. None of them knew who we were. None of them could describe what we do. None of them recommended us for anything.',
          'That is what a zero looks like. It is not that AI got our information wrong. It is that AI had no information at all. We were invisible across every platform.',
          'Schema and Structure: zero. Our website existed, but it had no structured data markup. Google Business Profile: zero. We had not claimed one. NAP Consistency: zero. Our business name appeared in exactly one place. Content for AI: zero. No blog, no FAQ, no educational material. AI Presence: zero. No platform mentioned us by name. Technical Infrastructure: partial. The site loaded and was mobile-friendly, but without schema it was only half complete.',
        ],
      },
      {
        heading: 'Why This Actually Matters',
        paragraphs: [
          'If a company that specializes in AI discoverability starts at zero, what does that tell you about the average local business?',
          'It tells you this problem is structural, not reputational. Our business is real. Our methodology works. Our services deliver results. But none of that matters if the information is not set up in a way AI platforms can find and process.',
          'A zero score does not mean a bad business. It means the signals are missing. And signals are fixable.',
        ],
      },
      {
        heading: 'The 90-Day Plan',
        paragraphs: [
          'We are giving ourselves 90 days to go from 0 to 75 or higher. Every step will be documented. Every score change will be recorded. The whole process will be public.',
          'Week one: claim the territory. Domain, email, Google Business Profile, LinkedIn. Weeks one through two: build the home base. Schema markup on every page, FAQ page, blog launch. Weeks two through four: start talking. Blog posts, LinkedIn cadence, sitemap submissions. Weeks three through five: spread the signal. Directory submissions across Bing Places, Apple Business Connect, and more. Weeks four through eight: go deeper. Custom GPT, case studies, guest posts. Week twelve: re-test everything.',
        ],
      },
      {
        heading: 'Why We Are Sharing This',
        paragraphs: [
          'This is not a marketing stunt. This is the actual work.',
          'Every business that hires us will go through a version of this same process. We want them to see what it looks like from day one. The starting point, the messy middle, and the measurable results.',
          'If you are a business owner and you have no idea what AI says about you, you are probably in the same position we were. The difference is that now you know it is fixable, because you are going to watch us fix it.',
        ],
      },
    ],
    cta: {
      text: 'Book a free Signal Check and see where your business stands today.',
      href: 'https://calendly.com/ltkenney13/30min',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        'Day One: My Signal Score Is Zero. Here Is What I Am Doing About It.',
      author: { '@type': 'Organization', name: 'Signal & Structure AI' },
      publisher: {
        '@type': 'Organization',
        name: 'Signal & Structure AI',
        url: 'https://signalstructure.ai',
      },
      datePublished: '2026-03-16',
      description:
        'We ran our own business through the Signal Score methodology. The result was zero. This is the full story of what we found and the 90-day plan to fix it.',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://signalstructure.ai/blog/day-one-signal-score-zero',
      },
    },
  },
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
