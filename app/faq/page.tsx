import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = {
  title: 'Frequently Asked Questions | Signal & Structure AI',
  description: 'Common questions about AI discoverability, Signal Scores, schema markup, pricing, and how Signal & Structure AI helps businesses get found and recommended by AI platforms.',
  alternates: {
    canonical: '/faq',
  },
};

const faqItems = [
  {
    question: 'What is a Signal Score?',
    answer:
      'Your Signal Score is our 0 to 100 measurement of how accurately and consistently AI represents your business. It looks across the leading AI platforms and 6 categories: Schema and Structure, Google Business Profile, NAP Consistency, Content for AI, AI Presence, and Technical Infrastructure. It is the headline number in your Signal Score Report, so you can see exactly where you stand and, when you re-run the report later, whether AI is describing you better. Most businesses score below 40 before any work is done.',
  },
  {
    question: 'How much does Signal & Structure AI cost?',
    answer:
      'There are two paid products and one free tool. The Signal Score Report is a one-time $147 and gives you a full, detailed picture of how AI describes your business, delivered as a PDF within two business days. Signal Watch is $26 per month and lets you re-check how AI describes you any time, right inside ChatGPT or Claude. Signal Pulse is a free quick check you can run on this site in about a minute.',
  },
  {
    question: 'What is AI discoverability?',
    answer:
      'AI discoverability is how easily AI platforms like ChatGPT, Claude, and Gemini can find, understand, and accurately recommend your business. When someone asks AI for a recommendation in your industry, AI discoverability determines whether your business appears in the answer and whether the information is correct.',
  },
  {
    question: 'What is schema markup?',
    answer:
      'Schema markup is invisible code added to your website that labels your business information in a way AI and search engines can understand. It tells AI systems which text is your business name, which is your address, which describes a service, and what the price is. Without schema, AI has to guess what your content means. With it, AI can read your information accurately.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Most clients see measurable improvement within 30 to 60 days after implementation. Schema markup and Google Business Profile changes can be picked up by AI within weeks. Content and directory submissions typically take 30 to 90 days to fully propagate across all platforms. We measure progress with before-and-after Signal Score comparisons.',
  },
  {
    question: 'Do you work with businesses outside of North Carolina?',
    answer:
      'Yes. Signal & Structure AI is based in Pittsboro, North Carolina, but we serve businesses nationwide. All of our work is done remotely, and our services apply to any business that wants to be accurately represented by AI platforms regardless of location.',
  },
  {
    question: 'What is the difference between AI discoverability and SEO?',
    answer:
      'Traditional SEO optimizes your website for Google keyword rankings. AI discoverability optimizes your entire digital presence for AI platforms that answer questions directly. Google matches keywords to web pages. AI platforms like ChatGPT try to understand your entire business and recommend you in conversation. The strategies overlap in some areas like schema markup, but AI discoverability requires structured knowledge systems, consistent business information across platforms, and direct AI platform integration.',
  },
  {
    question: 'What AI platforms do you check?',
    answer:
      'Your Signal Score Report checks the major AI assistants people actually use to find and evaluate businesses, including ChatGPT, Google Gemini, Microsoft Copilot, Perplexity, and Claude. Each platform accesses and processes business information differently, which is why looking across several of them matters rather than checking just one. We add new platforms as the landscape evolves.',
  },
  {
    question: 'How often should I check my Signal Score?',
    answer:
      'AI keeps changing, and so does how it describes you. We recommend re-running your Signal Score Report at least once a year, and twice a year if you want to watch your progress closely, so you can see your score move as you make changes. In between, Signal Watch lets you check in any time from inside ChatGPT or Claude. The goal is your independence: you can see what is working and keep AI accurate over time.',
  },
];

// JSON-LD structured data for FAQPage
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://signalstructure.ai/faq/#page',
  name: 'Frequently Asked Questions | Signal & Structure AI',
  description: 'Common questions about AI discoverability, Signal Scores, schema markup, pricing, and how Signal & Structure AI helps businesses get found and recommended by AI platforms.',
  url: 'https://signalstructure.ai/faq',
  isPartOf: { '@id': 'https://signalstructure.ai/#website' },
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://signalstructure.ai/#organization',
  name: 'Signal & Structure AI',
  url: 'https://signalstructure.ai',
  sameAs: [
    'https://www.linkedin.com/company/signal-structure-ai',
    'https://share.google/5Ci2LRrbmjYiQpkCp',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://signalstructure.ai',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'FAQ',
      item: 'https://signalstructure.ai/faq',
    },
  ],
};

export default function FAQPage() {
  return (
    <main>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Section 1: Page Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">COMMON QUESTIONS</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Everything you need to know.
            </h1>
            <p className="inner-page-hero-support text-white/70 max-w-2xl mx-auto mt-4">
              About AI discoverability, and how Signal & Structure AI helps your business get found.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: FAQ Accordion */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <h2 className="font-display text-section-heading text-navy mb-4 text-center">
              Frequently asked questions.
            </h2>
            <p className="font-body text-lg text-warmgray text-center mb-12">
              If you do not see your question here, email us and we will answer it.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <FAQAccordion items={faqItems} />
          </FadeIn>
        </div>
      </section>

      {/* Section 3: Still Have Questions */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-prose mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading text-navy mb-6">
              Still have questions?
            </h2>
            <p className="font-body text-lg text-warmgray leading-relaxed mb-8">
              The fastest way to get answers is to see it in action. Run a free
              Signal Pulse check on your site to see how AI describes your business
              right now. Lenise also speaks at communities and events about how AI
              describes businesses; if you run a group that should hear it, the <a className="text-copper hover:text-copper-dark underline underline-offset-2" href="/speaking">speaking page</a> has the details.
            </p>
            <Button href="/signal-pulse" variant="primary">
              Run the Free Signal Pulse
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-8 text-white">
              AI is already talking about businesses like yours. Make sure it
              is saying the right things.
            </h2>
            <Button href="/signal-score-report" variant="primary">
              Get Your Signal Score
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
