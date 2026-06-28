import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import {
  REPORT_PRICE,
  REPORT_TURNAROUND,
  REPORT_CHECKOUT_URL,
  SKOOL_URL,
} from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: 'Signal Score Report | Signal & Structure AI',
  description: 'Your full AI discoverability scorecard. We measure how ChatGPT, Claude, Gemini, Perplexity, and Copilot describe your business right now, score your structured data and citation footprint, and hand back a prioritized list of fixes. PDF in two business days. $147.',
  alternates: {
    canonical: '/signal-score-report',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'Signal Score Report', item: 'https://signalstructure.ai/signal-score-report' },
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://signalstructure.ai/signal-score-report#service',
  name: 'Signal Score Report',
  provider: { '@id': 'https://signalstructure.ai/#organization' },
  description: 'Your full AI discoverability scorecard. We measure how ChatGPT, Claude, Gemini, Perplexity, and Copilot describe your business right now, score your website\'s structured data and citation footprint, and hand back a prioritized list of what to fix first. Delivered as a PDF within two business days via email.',
  serviceType: 'AI discoverability audit',
  offers: {
    '@type': 'Offer',
    price: '147',
    priceCurrency: 'USD',
    description: 'One-time payment. PDF delivered within two business days via email.',
  },
};

const reportSections = [
  {
    title: 'How AI sees you, platform by platform',
    body: 'ChatGPT, Claude, Gemini, Perplexity, and Copilot. The exact responses they give about your business when someone asks. Side by side, so you can see where they agree, where they differ, and where they are flat-out wrong.',
  },
  {
    title: 'Your Signal Score, with the breakdown',
    body: 'A 0 to 100 score based on the method Lenise has been refining since early 2026. You see the total and the category scores, so you know which lever moves the most.',
  },
  {
    title: 'Your structured data and citation footprint',
    body: 'What schema your site has now, what is missing, and how your business is cited across the directories and sources AI reads from. The pieces that decide whether AI quotes you accurately.',
  },
  {
    title: 'Every hallucination and gap, listed plainly',
    body: 'Every time AI made something up about you. Every time it confused you with someone else. Every time it skipped a service you actually offer. With where each one came from, when we can find it.',
  },
  {
    title: 'A prioritized list of what to fix first',
    body: 'Not a hundred-item to-do list. A short list ranked by impact, so the work you do this month actually changes what AI says next month.',
  },
];

export default function SignalScoreReportPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">SIGNAL SCORE REPORT</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Find out exactly what AI is saying about your business behind your back. The full picture, in plain language, in {REPORT_TURNAROUND}.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Buy box + what it is */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* What it is */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <h2 className="font-display text-2xl text-navy mb-4">What you get back</h2>
                <ul className="space-y-5 font-body text-warmgray">
                  {reportSections.map((s) => (
                    <li key={s.title} className="flex items-start gap-3">
                      <SignalDot size={6} className="mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-navy mb-1">{s.title}</div>
                        <p className="text-sm leading-relaxed">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Order */}
            <FadeIn delay={0.2} direction="left">
              <div className="bg-navy text-white rounded-card shadow-card p-8 h-full flex flex-col">
                <SectionLabel variant="light">ORDER</SectionLabel>
                <div className="mt-4 mb-2">
                  <span className="font-mono text-5xl font-bold text-copper">{REPORT_PRICE}</span>
                  <span className="font-body text-white/70 ml-2">one time</span>
                </div>
                <p className="font-body text-white/70 text-sm mb-6">
                  No subscription. No upsell. One detailed report, delivered to your inbox.
                </p>

                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="font-body text-sm text-white">
                    <span className="text-copper font-semibold">Delivered as a PDF within {REPORT_TURNAROUND} via email.</span>{' '}
                    Every report is reviewed by Lenise before it goes out. Once that QA pass is consistent, delivery moves to immediate.
                  </p>
                </div>

                <ul className="space-y-2 font-body text-white/80 text-sm mb-8">
                  <li className="flex items-start gap-2">
                    <SignalDot size={5} className="mt-2 flex-shrink-0" />
                    <span>Live responses from ChatGPT, Claude, Gemini, Perplexity, and Copilot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SignalDot size={5} className="mt-2 flex-shrink-0" />
                    <span>Your Signal Score, with the full breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SignalDot size={5} className="mt-2 flex-shrink-0" />
                    <span>Your structured data and citation footprint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SignalDot size={5} className="mt-2 flex-shrink-0" />
                    <span>A short, prioritized list of what to fix first</span>
                  </li>
                </ul>

                <div className="mt-auto">
                  <Button href={REPORT_CHECKOUT_URL} variant="primary" className="w-full text-center">
                    Order Your Report
                  </Button>
                  <p className="text-center text-white/50 text-xs mt-3">
                    Secure checkout on Stripe. PDF arrives by email.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why a person reviews it */}
      <section className="relative bg-navy text-white section-padding-sm">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel variant="light">WHY TWO BUSINESS DAYS</SectionLabel>
              <h2 className="font-display text-section-heading mb-6">
                Every report is checked by a person right now.
              </h2>
              <div className="font-body text-lg text-white/80 leading-relaxed space-y-4">
                <p>
                  The engine pulls the data. Lenise reads it before it leaves the building. AI platforms move fast and sometimes return confusing or contradictory answers, and a person catching those before they hit your inbox keeps the reports accurate and consistent.
                </p>
                <p>
                  As confidence grows, delivery will move to immediate. Until then, two business days is the honest number.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-white/10 rounded-card p-8">
                <h3 className="font-display text-2xl mb-4">Consistent on purpose</h3>
                <p className="font-body text-white/80 leading-relaxed mb-4">
                  Reports inside the community all look the same. Same method. Same format. Same scoring. So owners can compare notes, share what worked, and learn from each other.
                </p>
                <p className="font-body text-white/80 leading-relaxed">
                  Yours will look the same as theirs. That is the point.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cross-sell to community */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn>
            <div className="bg-white rounded-card shadow-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 justify-between">
              <div>
                <SectionLabel>WANT THE FIX, NOT JUST THE REPORT?</SectionLabel>
                <h2 className="font-display text-2xl text-navy mb-2 mt-2">
                  The community runs through the fixes together.
                </h2>
                <p className="font-body text-warmgray max-w-xl">
                  A report tells you where you stand. The community walks through the work with you, week by week, for a full year.
                </p>
              </div>
              <Link
                href="/services"
                className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                See the community <span>&rarr;</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-6 text-white">
              Find out what AI is saying about your business.
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              {REPORT_PRICE}. PDF delivered within {REPORT_TURNAROUND} via email. Plain language. Real fixes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={REPORT_CHECKOUT_URL} variant="primary">
                Order Your Report
              </Button>
              <Link
                href={SKOOL_URL}
                className="font-body text-white/90 hover:text-copper transition-colors underline underline-offset-4 decoration-copper decoration-2"
              >
                Or join the community
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
