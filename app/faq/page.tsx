import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import FAQAccordion from '@/components/FAQAccordion';
import { BOOKING_URL } from '@/lib/constants';

export const metadata = {
  title: 'Frequently Asked Questions | Signal & Structure AI',
  description: 'Common questions about AI discoverability, Signal Scores, schema markup, pricing, and how Signal & Structure AI helps businesses get found and recommended by AI platforms.',
};

const faqItems = [
  {
    question: 'What is a Signal Score?',
    answer:
      'A Signal Score is a 0 to 100 measurement of how accurately AI platforms represent your business. It tests across 5 major AI platforms (ChatGPT, Claude, Perplexity, Gemini, and Copilot) and 6 categories: Schema and Structure, Google Business Profile, NAP Consistency, Content for AI, AI Presence, and Technical Infrastructure. Most businesses score below 40 before optimization.',
  },
  {
    question: 'What is a Signal Check?',
    answer:
      'A Signal Check is a free 30-minute consultation where we test your business on live AI platforms and show you exactly what they say. We ask AI the same questions your potential customers are asking, and you see the results in real time. There is no cost and no obligation.',
  },
  {
    question: 'How much does Signal & Structure AI cost?',
    answer:
      'Signal & Structure AI offers three core packages. The AI Business Profile starts at $750 and organizes your information for AI. The AI Knowledge System starts at $3,000 and builds a complete structured knowledge base. AI Presence Management starts at $1,500 per month with a 3-month minimum for ongoing monitoring and updates. Add-on services range from $500 to $2,000.',
  },
  {
    question: 'What is AI discoverability?',
    answer:
      'AI discoverability is how easily AI platforms like ChatGPT, Claude, and Perplexity can find, understand, and accurately recommend your business. When someone asks AI for a recommendation in your industry, AI discoverability determines whether your business appears in the answer and whether the information is correct.',
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
    question: 'Do you work with businesses outside of Durham, NC?',
    answer:
      'Yes. Signal & Structure AI is based in Durham, North Carolina, but we serve businesses nationwide. All of our work is done remotely, and our services apply to any business that wants to be accurately represented by AI platforms regardless of location.',
  },
  {
    question: 'What is the difference between AI discoverability and SEO?',
    answer:
      'Traditional SEO optimizes your website for Google keyword rankings. AI discoverability optimizes your entire digital presence for AI platforms that answer questions directly. Google matches keywords to web pages. AI platforms like ChatGPT try to understand your entire business and recommend you in conversation. The strategies overlap in some areas like schema markup, but AI discoverability requires structured knowledge systems, consistent business information across platforms, and direct AI platform integration.',
  },
  {
    question: 'What AI platforms do you test?',
    answer:
      'We test across five major AI platforms: ChatGPT by OpenAI, Claude by Anthropic, Perplexity AI, Google Gemini, and Microsoft Copilot. These platforms represent the majority of AI-driven search and recommendation traffic. Each platform accesses and processes business information differently, which is why testing across all five is important.',
  },
  {
    question: 'What happens after my Signal Score improves?',
    answer:
      'After reaching your target Signal Score, you have two options. You can continue with AI Presence Management for ongoing monitoring and updates as your business and AI platforms change. Or you can maintain things independently using the documentation and guides we provide. We build toward your independence, not your dependency. Either path is a success.',
  },
];

// JSON-LD structured data for FAQPage
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <main>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section 1: Page Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">COMMON QUESTIONS</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Everything you need to know about AI discoverability and how
              Signal & Structure AI helps your business get found.
            </h1>
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
              If you do not see your question here, book a free Signal Check
              and we will answer it live.
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
              The fastest way to get answers is to see it in action. In a free
              30-minute Signal Check, we test your business on live AI platforms
              and show you exactly what they say. No sales pitch. Just your
              results.
            </p>
            <Button href={BOOKING_URL} variant="primary">
              Book a Free Signal Check
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
            <Button href={BOOKING_URL} variant="primary">
              Book a Signal Check
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
