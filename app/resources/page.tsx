import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import NewsletterForm from '@/components/NewsletterForm';
import { SKOOL_URL, REPORT_PRICE, WATCH_PRICE, CLIENT_KNOWLEDGE_PRICE } from '@/lib/constants';

export const metadata = {
  title: 'Resources | Signal & Structure AI',
  description:
    'Free Signal Pulse checker, AI visibility quiz, and The Invisible Business white paper. Tools to understand how AI sees your business.',
  alternates: {
    canonical: '/resources',
  },
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
      name: 'Resources',
      item: 'https://signalstructure.ai/resources',
    },
  ],
};

const resourcesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://signalstructure.ai/resources/#page',
  name: 'AI Discoverability Resources | Signal & Structure AI',
  description:
    'Free tools and resources to help you understand how AI sees your business. Includes Signal Pulse checker, AI visibility quiz, and educational content.',
  url: 'https://signalstructure.ai/resources',
  isPartOf: { '@id': 'https://signalstructure.ai/#website' },
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Free AI Discoverability Tools',
    numberOfItems: 3,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Can AI Find Your Business? Quiz',
          description:
            '5-question quiz to assess your AI discoverability in 60 seconds. Get your signal strength rating instantly.',
          applicationCategory: 'Business Assessment Tool',
          url: 'https://signalstructure.ai/signal-pulse/quiz',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          provider: {
            '@type': 'Organization',
            '@id': 'https://signalstructure.ai/#organization',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Signal Pulse',
          description:
            'Free tool to check if AI systems can see your business. Enter your URL and get instant results on your AI visibility.',
          applicationCategory: 'Business Assessment Tool',
          url: 'https://signalstructure.ai/signal-pulse',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          provider: {
            '@type': 'Organization',
            '@id': 'https://signalstructure.ai/#organization',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'SoftwareApplication',
          name: 'AI Visibility Check',
          description:
            'Custom GPT that shows you how AI platforms describe your business right now. Free on ChatGPT.',
          applicationCategory: 'Business Assessment Tool',
          url: 'https://chatgpt.com/g/g-69b9417ed7d88191ad96525762c30baa-signal-check-ai-visibility-audit',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          provider: {
            '@type': 'Organization',
            '@id': 'https://signalstructure.ai/#organization',
          },
        },
      },
    ],
  },
};

export default function ResourcesPage() {
  return (
    <main>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesPageSchema) }}
      />

      {/* Page Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">RESOURCES</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Tools and insights to help you understand how AI sees your
              business.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Tools & products */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-10">
            <SectionLabel>TOOLS &amp; REPORTS</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              Find out where you stand, then keep it that way.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <Link href="/signal-score-report" className="block bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow p-8 h-full">
                <h3 className="font-display text-2xl text-navy mb-2">Signal Score Report</h3>
                <p className="font-body text-warmgray text-sm mb-4 leading-relaxed">
                  The complete picture of how AI describes you. One time, done by hand, in two business days.
                </p>
                <span className="font-mono text-navy font-bold">{REPORT_PRICE}</span>
                <span className="font-body text-warmgray text-sm"> one time</span>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/signal-watch" className="block bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow p-8 h-full">
                <h3 className="font-display text-2xl text-navy mb-2">Signal Watch</h3>
                <p className="font-body text-warmgray text-sm mb-4 leading-relaxed">
                  The quick snapshot you re-run yourself, inside ChatGPT or Claude. Track your score over time.
                </p>
                <span className="font-mono text-navy font-bold">{WATCH_PRICE}</span>
                <span className="font-body text-warmgray text-sm"> /month</span>
              </Link>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link href="/client-knowledge" className="block bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow p-8 h-full">
                <h3 className="font-display text-2xl text-navy mb-2">Client Knowledge</h3>
                <p className="font-body text-warmgray text-sm mb-4 leading-relaxed">
                  Feed AI your real information so it answers in your words, not its best guess.
                </p>
                <span className="font-mono text-navy font-bold">{CLIENT_KNOWLEDGE_PRICE}</span>
                <span className="font-body text-warmgray text-sm"> /month</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 1. Signal Quiz (Lead Magnet) */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Link
              href="/signal-pulse/quiz"
              className="block bg-white rounded-2xl shadow-card hover:shadow-card-hover overflow-hidden group transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-8 sm:p-12">
                {/* Icon */}
                <div className="w-16 h-16 bg-copper/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-copper/20 transition-colors">
                  <svg
                    className="w-8 h-8 text-copper"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                </div>
                {/* Text */}
                <div className="text-center sm:text-left flex-1">
                  <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                    <SignalDot size={6} />
                    <span className="font-body text-xs font-medium uppercase tracking-[0.08em] text-warmgray">
                      Free Quiz
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-navy mb-2">
                    Can AI Find Your Business?
                  </h2>
                  <p className="font-body text-warmgray mb-1">
                    5 questions. 60 seconds. Find out where you stand.
                  </p>
                  <p className="font-body text-sm text-warmgray/70">
                    No technical knowledge needed. Get your signal strength and a copy sent to your inbox.
                  </p>
                </div>
                {/* Arrow */}
                <svg
                  className="w-6 h-6 text-copper flex-shrink-0 hidden sm:block group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 2. Signal Pulse Checker */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Link
              href="/signal-pulse"
              className="block bg-navy rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative p-8 sm:p-12">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.03,
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-copper/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-copper"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  {/* Text */}
                  <div className="text-center sm:text-left flex-1">
                    <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                      <SignalDot size={6} />
                      <span className="font-body text-xs font-medium uppercase tracking-[0.08em] text-white/60">
                        Free Tool
                      </span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl text-white mb-2">
                      Signal Pulse
                    </h2>
                    <p className="font-body text-white/70 mb-1">
                      A quick vital sign check for your online presence.
                    </p>
                    <p className="font-body text-sm text-white/50">
                      Enter your URL and find out if AI systems can see your business. Free. Instant results.
                    </p>
                  </div>
                  {/* Arrow */}
                  <svg
                    className="w-6 h-6 text-copper flex-shrink-0 hidden sm:block group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 3. White Paper */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* White paper visual */}
              <Link
                href="/resources/the-invisible-business"
                className="bg-navy p-12 rounded-lg text-center order-2 lg:order-1 block group hover:bg-navy-light transition-colors"
              >
                <div className="inline-block">
                  <p className="font-body text-copper text-sm tracking-widest uppercase mb-3">
                    White Paper
                  </p>
                  <p className="font-body text-white/55 uppercase tracking-[0.4em] text-sm mb-1">The</p>
                  <h3 className="font-display text-4xl text-white mb-3 leading-tight">
                    Invisible<br />Business
                  </h3>
                  <p className="font-body text-white/70 text-sm mb-6">
                    Why your business exists in the real world but not in AI
                  </p>
                  <div className="w-16 h-0.5 bg-copper mx-auto mb-6" />
                  <p className="font-body text-white/50 text-xs">
                    By Lenise Kenney
                  </p>
                  <p className="font-body text-white/50 text-xs">
                    Signal &amp; Structure AI &middot; May 2026
                  </p>
                </div>
              </Link>

              <div className="order-1 lg:order-2">
                <SectionLabel>AVAILABLE NOW</SectionLabel>
                <h2 className="font-display text-section-heading text-navy mb-4">
                  The Invisible Business
                </h2>
                <p className="font-body text-lg text-warmgray mb-4">
                  A preliminary research white paper introducing the Signal Strength
                  framework and the six dimensions of AI visibility. Twenty small
                  businesses across four industries and four U.S. cities, tested against
                  ChatGPT, Claude, and Gemini.
                </p>
                <p className="font-body text-warmgray mb-6">
                  Inside: what 20 small businesses revealed about AI visibility, the
                  five causes of AI invisibility, the hallucination problem, and a
                  framework for measuring where you stand. Written for business owners
                  and leaders, not developers.
                </p>
                <div className="flex items-center gap-2 text-sm text-warmgray mb-2">
                  <svg
                    className="w-4 h-4 text-copper"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Twenty-business dataset across four industries</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-warmgray mb-2">
                  <svg
                    className="w-4 h-4 text-copper"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>The Signal Strength framework and six dimensions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-warmgray mb-6">
                  <svg
                    className="w-4 h-4 text-copper"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Written for business owners, not developers</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href="/resources/the-invisible-business" variant="primary">
                    Read the White Paper
                  </Button>
                  <a
                    href="/the-invisible-business.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-stone hover:bg-stone-dark text-navy font-body font-semibold px-6 py-3 rounded-button transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. AI Visibility Check GPT */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <a
              href="https://chatgpt.com/g/g-69b9417ed7d88191ad96525762c30baa-signal-check-ai-visibility-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-card hover:shadow-card-hover overflow-hidden group transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-8 sm:p-12">
                {/* Icon */}
                <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-navy/15 transition-colors">
                  <svg
                    className="w-8 h-8 text-navy"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </div>
                {/* Text */}
                <div className="text-center sm:text-left flex-1">
                  <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                    <SignalDot size={6} />
                    <span className="font-body text-xs font-medium uppercase tracking-[0.08em] text-warmgray">
                      Free on ChatGPT
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-navy mb-2">
                    AI Visibility Check
                  </h2>
                  <p className="font-body text-warmgray mb-1">
                    Ask ChatGPT about your business and see exactly what it says.
                  </p>
                  <p className="font-body text-sm text-warmgray/70">
                    A custom GPT that shows you how AI platforms describe your business right now. Try it yourself.
                  </p>
                </div>
                {/* Arrow */}
                <svg
                  className="w-6 h-6 text-copper flex-shrink-0 hidden sm:block group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionLabel>NEWSLETTER</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              The Signal Report Monthly
            </h2>
            <p className="font-body text-lg text-warmgray mb-4 max-w-2xl mx-auto">
              One email per month. AI visibility tips, featured businesses from
              our network, and insights on the changing landscape of how people
              find services online.
            </p>
            <p className="font-body text-warmgray mb-8 max-w-2xl mx-auto">
              We spotlight businesses that are working to become more
              discoverable. If you are on that journey too, this is your
              community.
            </p>
            <NewsletterForm source="resources-page" />
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-4 text-white">
              Want to understand this more deeply?
            </h2>
            <p className="text-white/70 text-hero-subtext mb-8">
              The community is where this work actually gets done. A year of
              weekly working sessions, shared lessons, and direct access to Lenise.
            </p>
            <Button href={SKOOL_URL} variant="primary" className="mb-4">
              Join the Community
            </Button>
            <p className="text-white/70 text-sm">
              Yearly or monthly, with a twelve-month commitment.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
