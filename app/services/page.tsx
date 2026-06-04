import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import AddOnCard from '@/components/AddOnCard';
import SignalDot from '@/components/SignalDot';
import { RESERVE_URL, BETA_SETUP, BETA_MONTHLY, FULL_SETUP, FULL_MONTHLY, BETA_SPOTS } from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: 'The AI Presence Program | Signal & Structure AI',
  description: 'Done-for-you AI presence management. We monitor ChatGPT, Claude, Gemini, Perplexity, and more every month, show you what they say about your business, and fix what is wrong. Beta founder rate: $797 to start, then $297/month.',
  alternates: {
    canonical: '/services',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://signalstructure.ai/#organization',
  name: 'Signal & Structure AI',
  url: 'https://signalstructure.ai',
  sameAs: [
    'https://www.linkedin.com/company/signal-structure-ai',
    'https://chatgpt.com/g/g-69b9417ed7d88191ad96525762c30baa-signal-check-ai-visibility-audit',
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
      name: 'Services',
      item: 'https://signalstructure.ai/services',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://signalstructure.ai/services#ai-presence-program',
  name: 'AI Presence Program',
  provider: { '@id': 'https://signalstructure.ai/#organization' },
  description: 'Done-for-you monitoring, reporting, and correction of how AI platforms describe your business. We monitor ChatGPT, Claude, Gemini, Perplexity, and more every month, surface what is being said, and do the work to fix hallucinations and gaps. Includes a live dashboard, monthly report, and your Signal Score with trend tracking.',
  serviceType: 'AI Presence Management',
  offers: {
    '@type': 'Offer',
    price: '797',
    priceCurrency: 'USD',
    description: 'Beta founder rate: $797 to start (build plus first month), then $297/month for as long as you stay in the program.',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
};

const addOnSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom AI Tools, MCP Servers, and API Integrations',
  description: 'Custom-built AI tools, Model Context Protocol (MCP) servers, and API integrations that put your business data directly inside the AI platforms your customers use. Priced by scope. Available to program clients as an add-on, not part of the standard package.',
  provider: { '@id': 'https://signalstructure.ai/#organization' },
};

const platforms = [
  'ChatGPT', 'Claude', 'Google Gemini', 'Perplexity',
];

export default function ServicesPage() {
  return (
    <main>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(addOnSchema) }}
      />

      {/* Section 1: Page Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">THE AI PRESENCE PROGRAM</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              One program. We monitor how AI describes your business across ChatGPT, Claude,
              Gemini, Perplexity, and more — show you what is being said, and fix what is wrong,
              every month.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Program detail + pricing */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* What you get */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <h2 className="font-display text-2xl text-navy mb-2">Month one</h2>
                <p className="font-body text-sm text-warmgray mb-6">Your foundation report.</p>
                <ul className="space-y-3 font-body text-warmgray mb-8">
                  {[
                    'Full AI presence audit across ChatGPT, Claude, Gemini, Perplexity, and more',
                    'Your Signal Score, my proprietary 0 to 100 measure, with a category breakdown',
                    'A plain-language summary of what AI is saying about you',
                    'Every hallucination and gap identified',
                    'A prioritized fix list',
                    'A walkthrough call to review it together',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <SignalDot size={6} className="mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <h2 className="font-display text-2xl text-navy mb-2">Every month after</h2>
                <p className="font-body text-sm text-warmgray mb-6">Monitoring, fixing, and proof.</p>
                <ul className="space-y-3 font-body text-warmgray">
                  {[
                    'Re-scan across all monitored platforms',
                    'A live dashboard you can check any time',
                    'Updated Signal Score with trend tracking',
                    'New findings flagged since last month',
                    'Active correction work, not just a report',
                    'A monthly report that links back to your dashboard',
                    'Direct access to Lenise for questions',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <SignalDot size={6} className="mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Founder pricing */}
            <FadeIn delay={0.2} direction="left">
              <div className="bg-navy text-white rounded-card shadow-card p-8 h-full flex flex-col">
                <div className="inline-flex self-start items-center gap-2 bg-copper/20 text-copper rounded-full px-3 py-1 text-xs font-body font-semibold uppercase tracking-wider mb-6">
                  Beta Founder Offer · {BETA_SPOTS} spots
                </div>

                <div className="mb-2">
                  <span className="font-mono text-5xl font-bold text-copper">{BETA_SETUP}</span>
                  <span className="font-body text-white/70 ml-2">to start</span>
                </div>
                <p className="font-body text-white/70 text-sm mb-6">
                  Your first payment covers the build and your first month.
                </p>

                <div className="mb-2">
                  <span className="font-mono text-4xl font-bold text-white">{BETA_MONTHLY}</span>
                  <span className="font-body text-white/70 ml-2">/month after</span>
                </div>
                <p className="font-body text-white/70 text-sm mb-6">
                  Your recurring service begins after month one.
                </p>

                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="font-body text-sm text-white">
                    <span className="text-copper font-semibold">Founder rate, locked for life.</span>{' '}
                    You keep {BETA_MONTHLY}/month for as long as you stay in the program, even when
                    the price rises to {FULL_SETUP} setup and {FULL_MONTHLY}/month.
                  </p>
                </div>

                <p className="font-body text-white/60 text-sm mb-8">
                  Our promise: if your Signal Score does not improve by at least 10 points in your
                  first 90 days, month three is free.
                </p>

                <div className="mt-auto">
                  <Button href={RESERVE_URL} variant="primary" className="w-full text-center">
                    Reserve Your Beta Founder Spot
                  </Button>
                  <p className="text-center text-white/50 text-xs mt-3">
                    {BETA_SPOTS} founding spots. Once they fill, the founder rate is gone.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section: What this is worth */}
      <section className="relative bg-navy text-white section-padding-sm">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel variant="light">WHAT THIS IS WORTH</SectionLabel>
              <h2 className="font-display text-section-heading mb-6">
                One referral you never knew you lost costs more than this.
              </h2>
              <div className="font-body text-lg text-white/80 leading-relaxed space-y-4">
                <p>
                  Every day, someone asks AI who to trust in your field. If your name does not
                  come up, or comes up wrong, that referral goes to someone else. Quietly. You
                  never see it happen.
                </p>
                <p>
                  Being found and described accurately by AI is worth far more than what this
                  program costs. The price reflects the founding beta, not the value.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-white/10 rounded-card p-8">
                <h3 className="font-display text-2xl mb-4">A method, not a guess.</h3>
                <p className="font-body text-white/80 leading-relaxed mb-4">
                  Signal Score is my proprietary method. I have been building the engine behind
                  it since early 2026, and I keep refining it. You are not paying for a generic
                  report you could get anywhere.
                </p>
                <p className="font-body text-white/80 leading-relaxed">
                  You are getting a system I built, run personally, and stand behind.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 3: Platforms */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-10">
            <SectionLabel>WHERE WE LOOK</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              The platforms that matter right now.
            </h2>
            <p className="text-warmgray text-lg max-w-2xl mx-auto">
              We focus on the AI platforms your customers are actually using today — and we
              are adding more as the landscape grows.
            </p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {platforms.map((p) => (
              <span
                key={p}
                className="bg-white rounded-full px-4 py-2 font-body text-sm text-navy shadow-card"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Premium add-on */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <FadeIn className="mb-10">
            <h2 className="font-display text-section-heading text-navy mb-4 text-center">
              Optional add-on
            </h2>
            <p className="text-warmgray text-lg text-center max-w-2xl mx-auto">
              For program clients who want to go further. Priced by scope, not part of the
              standard package.
            </p>
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            <FadeIn delay={0.1}>
              <AddOnCard
                title="Custom AI Tools, MCP Servers, and API Integrations"
                price="By quote"
                description="Custom-built tools, Model Context Protocol (MCP) servers, and API integrations that put your business data directly inside the AI platforms your customers use. This is the deep, technical work that goes beyond monitoring and correction. Available as an add-on for clients who want it."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 5: Speaking callout */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn>
            <div className="bg-white rounded-card shadow-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 justify-between">
              <div>
                <h2 className="font-display text-2xl text-navy mb-2">
                  Want this explained to your group?
                </h2>
                <p className="font-body text-warmgray max-w-xl">
                  Lenise speaks to teams, communities, and organizations about how AI is
                  reshaping the way businesses get found, and what to do about it.
                </p>
              </div>
              <Link
                href="/speaking"
                className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                See speaking
                <span>→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 6: Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-8 text-white">
              Protect how AI describes your business.
            </h2>
            <Button href={RESERVE_URL} variant="primary" className="mb-4">
              Reserve Your Beta Founder Spot
            </Button>
            <p className="text-white/70 text-sm max-w-2xl mx-auto">
              {BETA_SPOTS} founding spots, capped because Lenise personally runs every account.
              Once they fill, the founder rate is gone.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
