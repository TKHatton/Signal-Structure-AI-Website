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
    slug: 'free-5-minute-ai-visibility-check',
    title: 'The Free 5-Minute AI Visibility Check You Can Do Right Now',
    date: '2026-04-01',
    author: 'Signal & Structure AI',
    pillar: 'How-To',
    description:
      'Want to know what AI platforms say about your business? Here is how to check in 5 minutes using our free tool.',
    readTime: '4 min read',
    content: [
      'Most business owners have no idea what AI platforms say about their business. They assume if they have a website and good reviews, AI knows who they are. That assumption is usually wrong.',
      'The fastest way to find out where you stand is to ask AI directly. We built a free tool that does exactly that.',
    ],
    sections: [
      {
        heading: 'What the Check Does',
        paragraphs: [
          'The AI Visibility Check asks the leading AI platforms about your business and shows you what each one says. You get to see the actual responses, word for word, exactly as a potential customer would see them.',
          'It tests ChatGPT, Claude, Gemini, and other major AI platforms. Each platform accesses business information differently, which is why testing multiple platforms matters. One platform might know you exist while another has never heard of you.',
          'The tool runs the check and shows you the results in plain language. No jargon. No technical explanations. Just what AI said about your business and whether it got the facts right.',
        ],
      },
      {
        heading: 'Why This Matters',
        paragraphs: [
          'When someone asks AI for a recommendation in your industry, they are not getting a list of links to click through. They are getting a direct answer with specific business names and reasons to choose one over another.',
          'If AI does not know you exist, you are not in that answer. If AI knows you exist but gets the details wrong, you are in the answer but presenting incorrect information. Both scenarios cost you referrals.',
          'The check tells you which scenario you are in. That is the starting point for everything else.',
        ],
      },
      {
        heading: 'How to Run the Check',
        paragraphs: [
          'Go to the AI Visibility Check tool. You will need a free ChatGPT account. If you do not have one, it takes about 30 seconds to create.',
          'Once you are in the tool, it will ask for your business name and location. That is all it needs. The tool handles the rest.',
          'It queries all five AI platforms, compares the responses to what you told it about your business, and gives you a summary of what each platform knows and what it got wrong.',
          'The whole process takes about 5 minutes. You do not need to install anything. You do not need to give us your email. You just run the check and see the results.',
        ],
      },
      {
        heading: 'What You Will Learn',
        paragraphs: [
          'The check shows you three things.',
          'First, whether AI platforms know your business exists. Some businesses get recognized on all the platforms checked. Some get recognized on one or two. Many get recognized on none.',
          'Second, how accurately AI describes your business. Does it get your services right? Your location? Your hours? Or does it list services you do not offer, locations you are not at, or details that are completely wrong?',
          'Third, which platforms are the weakest for you. If ChatGPT knows you but Claude does not, that tells you where the gap is. If all five platforms are missing the same piece of information, that tells you what needs to be fixed first.',
        ],
      },
      {
        heading: 'What Happens After You Run the Check',
        paragraphs: [
          'You get the results immediately. No waiting. No follow-up calls. Just a clear breakdown of what AI knows about your business right now.',
          'If the results show gaps or inaccuracies, that is normal. Most businesses have them. The check is designed to surface those issues so you know exactly what to address.',
          'If you want help fixing what the check finds, we offer a full Signal Score audit that goes deeper. But the free check is a good starting point to see whether you even have a problem.',
        ],
      },
      {
        heading: 'Why We Built This as a Free Tool',
        paragraphs: [
          'AI visibility is a new problem. Most businesses do not know it exists yet. The fastest way to show them is to let them check their own business and see the results for themselves.',
          'We could have gated this behind an email form or required a sales call. We did not. You can run the check, see the results, and decide what to do next. No pressure. No tricks.',
          'If the results show you are in good shape, great. If they show gaps, you know what you are dealing with. Either way, you have more information than you had five minutes ago.',
        ],
      },
    ],
    cta: {
      text: 'Run the free AI Visibility Check and see what AI platforms say about your business.',
      href: 'https://chatgpt.com/g/g-69b9417ed7d88191ad96525762c30baa-signal-check-ai-visibility-audit',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        'The Free 5-Minute AI Visibility Check You Can Do Right Now',
      author: { '@type': 'Organization', name: 'Signal & Structure AI' },
      publisher: {
        '@type': 'Organization',
        name: 'Signal & Structure AI',
        url: 'https://signalstructure.ai',
      },
      datePublished: '2026-04-01',
      description:
        'Want to know what AI platforms say about your business? Here is how to check in 5 minutes using our free tool.',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://signalstructure.ai/blog/free-5-minute-ai-visibility-check',
      },
    },
  },
  {
    slug: 'five-things-ai-gets-wrong',
    title: '5 Things AI Gets Wrong About Your Business Right Now',
    date: '2026-03-05',
    author: 'Signal & Structure AI',
    pillar: 'Education',
    description:
      'AI platforms are making claims about your business right now. Here are the 5 most common errors we see and why most businesses have no idea.',
    readTime: '5 min read',
    content: [
      'Right now, someone is asking an AI platform about a business like yours. The answer they get might include the wrong address, outdated services, a competitor\'s phone number, or a description of something you have never offered. And you have no idea it is happening.',
      'AI platforms do not fact-check themselves. They assemble answers from whatever data they can find. When that data is incomplete, inconsistent, or missing entirely, the answers reflect it. Here are the five most common things we see when we audit businesses.',
    ],
    sections: [
      {
        heading: '1. AI Says You Offer Services You Do Not Provide',
        paragraphs: [
          'This is the most common hallucination. An AI platform looks at your industry, your location, and whatever fragments of data it can find, then fills in the gaps with assumptions.',
          'A marketing agency gets described as offering web development. A financial advisor gets listed as providing tax preparation. A restaurant gets credited with catering services they have never offered. The AI is not lying. It is guessing, and it is guessing wrong.',
          'The problem is not that AI is unreliable. The problem is that your actual services are not structured in a way AI can find. So it makes its best guess based on your industry. And best guesses lead to wrong answers.',
        ],
      },
      {
        heading: '2. AI Gets Your Location Wrong',
        paragraphs: [
          'AI platforms pull location data from multiple sources. When those sources disagree, AI either picks the wrong one or creates a hybrid that does not exist.',
          'We have seen a business in Durham, NC get listed in Durham, England. We have seen businesses that moved years ago still showing the old address. We have seen AI merge two different businesses at two different addresses into one listing.',
          'When a potential customer asks AI for a recommendation near them and your location is wrong, you are not just invisible. You are in the wrong place entirely.',
        ],
      },
      {
        heading: '3. AI Cannot Describe What Makes You Different',
        paragraphs: [
          'Ask an AI what your business does and you might get a generic answer that could apply to any competitor. There is no mention of your methodology, your niche, your approach, or what separates you from the other ten businesses in the same category.',
          'This is one of the most damaging issues because it turns every business into a commodity. If AI describes you the same way it describes your competitor, the customer has no reason to choose you. Your differentiation disappears.',
          'The reason this happens is that most businesses have not given AI anything specific to work with. Your differentiator might be obvious to you and your customers, but if it is not structured in a way AI can parse, it does not exist in AI\'s version of reality.',
        ],
      },
      {
        heading: '4. AI Attributes Your Work to Someone Else',
        paragraphs: [
          'This one is subtle and frustrating. You create a methodology, publish original thinking, or build a body of expertise. AI absorbs it into the general knowledge pool and attributes it to a larger competitor or a generic source.',
          'Your intellectual property gets flattened into "common knowledge" and the credit goes to whoever has the stronger entity signal. For smaller businesses competing against larger ones, this is a real threat. It is not enough to create great work. AI needs to know it belongs to you.',
        ],
      },
      {
        heading: '5. AI Does Not Know You Exist at All',
        paragraphs: [
          'This is the most common issue and the easiest to overlook. You assume AI knows about your business because you have a website. But having a website is not enough.',
          'If no AI platform mentions you by name when asked about your industry in your location, you are functionally invisible. Every day, potential customers are asking AI for recommendations and getting answers that do not include you. They are not choosing your competitor over you. They never knew you were an option.',
          'This is not a niche problem. In our audits, we see this with businesses of every size, in every industry. The majority score far lower than they expect. Many score zero.',
        ],
      },
      {
        heading: 'The Uncomfortable Truth',
        paragraphs: [
          'All five of these problems have something in common. They are invisible to the business owner. You cannot see what AI says about you unless you ask. Most business owners never think to ask.',
          'The other thing they have in common: every one of them is fixable. Not with ads, not with SEO tricks, not with shortcuts. But it does require understanding how AI finds, evaluates, and represents businesses. And that is a very different skill set from traditional marketing.',
          'If you do not know what AI is saying about your business, that is the first thing to find out. Everything else follows from there.',
        ],
      },
    ],
    cta: {
      text: 'Get your Signal Score and see what AI platforms are actually saying about your business.',
      href: '/signal-score',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        '5 Things AI Gets Wrong About Your Business Right Now',
      author: { '@type': 'Organization', name: 'Signal & Structure AI' },
      publisher: {
        '@type': 'Organization',
        name: 'Signal & Structure AI',
        url: 'https://signalstructure.ai',
      },
      datePublished: '2026-03-05',
      description:
        'AI platforms are making claims about your business right now. Here are the 5 most common errors we see and why most businesses have no idea.',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://signalstructure.ai/blog/five-things-ai-gets-wrong',
      },
    },
  },
  {
    slug: 'day-one-signal-score-zero',
    title: 'Day One: My Signal Score Is Zero. Here Is What I Am Doing About It.',
    date: '2026-02-28',
    author: 'Signal & Structure AI',
    pillar: 'Company & Culture',
    description:
      'We ran our own business through the Signal Score methodology. The result was zero. This is what it looks like when AI has no idea you exist.',
    readTime: '4 min read',
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
          'We asked ChatGPT, Claude, Gemini, and the other major AI platforms about Signal & Structure AI. None of them knew who we were. None of them could describe what we do. None of them recommended us for anything.',
          'That is what a zero looks like. It is not that AI got our information wrong. It is that AI had no information at all. We were invisible across every platform.',
          'Every single one of our six scoring categories came back at zero or near zero. The website existed, but AI could not make sense of it. There was no presence on any platform that AI pulls from. There were no signals for AI to cross-reference. Nothing.',
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
        heading: 'What Happens Next',
        paragraphs: [
          'We are giving ourselves 90 days to go from 0 to 75 or higher. We will share the results publicly. The score changes, the before-and-after comparisons, the milestones along the way.',
          'We are not going to share every step of the process. That is our methodology and it is what our clients pay for. But we are going to show what is possible when the right work gets done in the right order.',
          'If you have ever wondered whether AI knows your business exists, the answer might be the same as ours was. And if that is the case, the question is not whether to fix it. It is how long you are comfortable being invisible.',
        ],
      },
    ],
    cta: {
      text: 'Get your Signal Score and find out what AI actually says about your business.',
      href: '/signal-score',
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
      datePublished: '2026-02-28',
      description:
        'We ran our own business through the Signal Score methodology. The result was zero. This is what it looks like when AI has no idea you exist.',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://signalstructure.ai/blog/day-one-signal-score-zero',
      },
    },
  },
  {
    slug: 'what-is-a-signal-score',
    title: 'What Is a Signal Score? And Why Your Business Needs One',
    date: '2026-02-24',
    author: 'Signal & Structure AI',
    pillar: 'Education',
    description:
      'A Signal Score measures how accurately AI platforms represent your business. Learn what it tests, why it matters, and what most businesses score.',
    readTime: '6 min read',
    content: [
      'AI platforms are sending referrals in your industry every day. When someone asks ChatGPT, Claude, or Gemini for a recommendation, those platforms give direct answers with names, descriptions, and reasons to choose one business over another.',
      'The question is whether your business is one of them. And if it is, whether the information is actually correct.',
    ],
    sections: [
      {
        heading: 'A Signal Score Measures What AI Knows About You',
        paragraphs: [
          'A Signal Score\u2122 is a 0 to 100 measurement of how accurately and consistently AI platforms represent your business. It is not a vanity metric. It is a diagnostic tool that tells you exactly where you stand in the AI referral ecosystem.',
          'The score tests your business across the leading AI platforms including ChatGPT by OpenAI, Claude by Anthropic, and Google Gemini. Each platform accesses and processes business information differently, which is why testing across multiple platforms matters.',
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
      text: 'Get your Signal Score and find out where you stand.',
      href: '/signal-score',
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
      datePublished: '2026-02-24',
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
