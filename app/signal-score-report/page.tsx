import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import {
  REPORT_PRICE,
  REPORT_TURNAROUND,
  REPORT_CHECKOUT_URL,
} from '@/lib/constants';

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
    body: 'ChatGPT, Claude, Gemini, Perplexity, Copilot, and more. The exact responses they give about your business when someone asks. Side by side, so you can see where they agree, where they differ, and where they are flat-out wrong.',
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
    title: 'Every hallucination and gap, spelled out',
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
              The complete picture of how AI describes your business.
            </h1>
            <p className="inner-page-hero-support text-white/70 max-w-2xl mx-auto mt-4">
              Every major AI assistant, scored and explained, in {REPORT_TURNAROUND}.
            </p>
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
                </div>
                <p className="font-body text-white/70 text-sm mb-6">
                  No subscription. One detailed report on where your business stands with AI, delivered to your inbox.
                </p>

                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="font-body text-sm text-white">
                    <span className="text-copper font-semibold">Delivered as a PDF within {REPORT_TURNAROUND} via email.</span>
                  </p>
                </div>

                <ul className="space-y-2 font-body text-white/80 text-sm mb-8">
                  <li className="flex items-start gap-2">
                    <SignalDot size={5} className="mt-2 flex-shrink-0" />
                    <span>Live responses from ChatGPT, Claude, Gemini, Perplexity, Copilot, and more</span>
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

      {/* Report vs Watch */}
      <section className="relative bg-navy text-white section-padding-sm">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel variant="light">REPORT OR WATCH?</SectionLabel>
              <h2 className="font-display text-section-heading mb-6 text-white">
                One is the deep dive. One keeps an eye on it.
              </h2>
              <div className="font-body text-lg text-white/80 leading-relaxed space-y-4">
                <p>
                  The <span className="text-white font-semibold">Signal Score Report</span> is the complete picture. Every platform, your full score, your citation footprint, and a prioritized fix list, explained in a way you can actually act on.
                </p>
                <p>
                  <span className="text-white font-semibold">Signal Watch</span> is the quick snapshot you re-run yourself, month after month, to see whether the work is moving the needle.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-white/10 rounded-card p-8">
                <h3 className="font-display text-2xl mb-4 text-white">How often should you check?</h3>
                <p className="font-body text-white/80 leading-relaxed mb-4">
                  AI changes its mind about your business as the web around you changes. A Signal Score Report at least once a year keeps you current. Twice a year is better, so you can watch your progress as you work to improve your scores.
                </p>
                <p className="font-body text-white/80 leading-relaxed">
                  Many owners start with the Report for the full diagnosis, then keep Signal Watch running in between.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-6 text-white">
              See the whole picture.
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              {REPORT_PRICE}. PDF in {REPORT_TURNAROUND}. Explained so you can act on it, with the fixes that actually move your score.
            </p>
            <Button href={REPORT_CHECKOUT_URL} variant="primary">
              Order Your Report
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
