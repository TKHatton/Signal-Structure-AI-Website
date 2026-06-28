import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import {
  WATCH_PRICE,
  WATCH_CHECKOUT_URL,
  REPORT_PRICE,
  CLIENT_KNOWLEDGE_PRICE,
  SKOOL_URL,
} from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: 'Signal Watch | Signal & Structure AI',
  description: 'Ongoing monitoring of how AI describes your business. Check your score and what changed from inside ChatGPT or Claude. $26 per month. Cancel any time.',
  alternates: {
    canonical: '/signal-watch',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'Signal Watch', item: 'https://signalstructure.ai/signal-watch' },
  ],
};

const watchSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://signalstructure.ai/signal-watch#service',
  name: 'Signal Watch',
  provider: { '@id': 'https://signalstructure.ai/#organization' },
  description: 'Ongoing monitoring of how AI describes a business. Delivered through a Model Context Protocol connector the buyer adds to their ChatGPT or Claude account. Monthly subscription, cancel any time.',
  serviceType: 'AI discoverability monitoring',
  offers: {
    '@type': 'Offer',
    price: '26',
    priceCurrency: 'USD',
    description: '$26 per month. Cancel any time.',
  },
};

export default function SignalWatchPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(watchSchema) }} />

      {/* Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">SIGNAL WATCH</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Quiet monthly monitoring of how AI describes you. Check it from inside ChatGPT or Claude, the same way you already ask them anything else.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Buy box + what it does */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* What it does */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <h2 className="font-display text-2xl text-navy mb-4">What Signal Watch does</h2>
                <ul className="space-y-3 font-body text-warmgray">
                  {[
                    'Tracks your Signal Score on a regular cadence so you can see it move',
                    'Tells you when AI starts saying something different about your business',
                    'Shows what changed since last month, plainly',
                    'Lives inside ChatGPT or Claude as a connector you add once',
                    'Replies to plain questions like "How is my signal?" or "What did AI say about us this month?"',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <SignalDot size={6} className="mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-stone-dark">
                  <h3 className="font-display text-lg text-navy mb-2">How you use it</h3>
                  <p className="font-body text-sm text-warmgray leading-relaxed">
                    You add the Signal Watch connector to your ChatGPT or Claude account once. From then on, you ask in plain language. The answer comes from your real data, not the model guessing.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Subscribe */}
            <FadeIn delay={0.2} direction="left">
              <div className="bg-navy text-white rounded-card shadow-card p-8 h-full flex flex-col">
                <SectionLabel variant="light">SUBSCRIBE</SectionLabel>
                <div className="mt-4 mb-2">
                  <span className="font-mono text-5xl font-bold text-copper">{WATCH_PRICE}</span>
                  <span className="font-body text-white/70 ml-2">per month</span>
                </div>
                <p className="font-body text-white/70 text-sm mb-6">
                  Cancel any time. Nothing locked. You stay because it is useful.
                </p>

                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="font-body text-sm text-white mb-2">
                    <span className="text-copper font-semibold">Works with what you already use.</span>
                  </p>
                  <p className="font-body text-sm text-white/80">
                    You need a ChatGPT account (any plan that allows connectors) or a Claude account. Setup takes a few minutes and we walk you through it.
                  </p>
                </div>

                <p className="font-body text-white/60 text-sm mb-8">
                  Other connectors are on the way. If a tool you use is missing, write to Lenise and tell her which one.
                </p>

                <div className="mt-auto">
                  <Button href={WATCH_CHECKOUT_URL} variant="primary" className="w-full text-center">
                    Start Signal Watch
                  </Button>
                  <p className="text-center text-white/50 text-xs mt-3">
                    You will receive a subscription link and the connector setup instructions by email.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Where this fits */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-10">
            <SectionLabel>WHERE THIS FITS</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              Signal Watch reads. Client Knowledge answers.
            </h2>
            <p className="text-warmgray text-lg max-w-2xl mx-auto">
              Use them together for full coverage. Watch tells you what AI is saying. Client Knowledge tells AI what to say. Start with whichever you need first.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-card p-8 h-full flex flex-col">
                <h3 className="font-display text-xl text-navy mb-2">Signal Score Report</h3>
                <p className="font-body text-warmgray mb-6 text-sm flex-1">
                  The one-time, detailed picture. Most people start here, then turn on Signal Watch.
                </p>
                <div className="mb-4">
                  <span className="font-mono text-2xl font-bold text-navy">{REPORT_PRICE}</span>
                  <span className="font-body text-warmgray ml-2 text-sm">one time</span>
                </div>
                <Link
                  href="/signal-score-report"
                  className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2"
                >
                  See the report <span>&rarr;</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-card p-8 h-full flex flex-col">
                <h3 className="font-display text-xl text-navy mb-2">Client Knowledge</h3>
                <p className="font-body text-warmgray mb-6 text-sm flex-1">
                  Stop AI from guessing. Give it your real business info to read from when it answers questions about you.
                </p>
                <div className="mb-4">
                  <span className="font-mono text-2xl font-bold text-navy">{CLIENT_KNOWLEDGE_PRICE}</span>
                  <span className="font-body text-warmgray ml-2 text-sm">per month</span>
                </div>
                <Link
                  href="/client-knowledge"
                  className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2"
                >
                  See Client Knowledge <span>&rarr;</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-card p-8 h-full flex flex-col">
                <h3 className="font-display text-xl text-navy mb-2">The Community</h3>
                <p className="font-body text-warmgray mb-6 text-sm flex-1">
                  Learn the discoverability work alongside other owners. A year of practice, with direct access to Lenise.
                </p>
                <div className="mb-4">
                  <span className="font-body text-warmgray text-sm">From $49 a month</span>
                </div>
                <Link
                  href={SKOOL_URL}
                  className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2"
                >
                  See the community <span>&rarr;</span>
                </Link>
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
              A quiet way to keep an eye on it.
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              {WATCH_PRICE} a month. Cancel any time. Lives where you already ask questions.
            </p>
            <Button href={WATCH_CHECKOUT_URL} variant="primary">
              Start Signal Watch
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
