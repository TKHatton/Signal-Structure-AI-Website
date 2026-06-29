import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import {
  CLIENT_KNOWLEDGE_PRICE,
  CLIENT_KNOWLEDGE_CHECKOUT_URL,
  REPORT_PRICE,
  WATCH_PRICE,
  SKOOL_URL,
} from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: 'Client Knowledge | Signal & Structure AI',
  description: 'Feed AI the real story about your business. A private knowledge connector for ChatGPT and Claude so the platforms answer accurately when someone asks about you. $76 per month.',
  alternates: {
    canonical: '/client-knowledge',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'Client Knowledge', item: 'https://signalstructure.ai/client-knowledge' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://signalstructure.ai/client-knowledge#service',
  name: 'Client Knowledge',
  provider: { '@id': 'https://signalstructure.ai/#organization' },
  description: 'A private knowledge connector for ChatGPT and Claude. The buyer\'s verified business information (services, hours, locations, policies, FAQs) lives in the connector so the AI platforms answer accurately when someone asks about the business. Monthly subscription, cancel any time.',
  serviceType: 'AI knowledge base',
  offers: {
    '@type': 'Offer',
    price: '76',
    priceCurrency: 'USD',
    description: '$76 per month. Cancel any time.',
  },
};

export default function ClientKnowledgePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">CLIENT KNOWLEDGE</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Stop letting AI make things up about you.
            </h1>
            <p className="inner-page-hero-support text-white/70 max-w-2xl mx-auto mt-4">
              Tell it the truth, in your own words, and let it read from there.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Buy box + what it does */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <h2 className="font-display text-2xl text-navy mb-4">What lives inside the connector</h2>
                <ul className="space-y-3 font-body text-warmgray">
                  {[
                    'Your services and what makes each one different',
                    'Your hours, locations, and contact details',
                    'Your policies, your prices, and the answers to the questions you get asked most',
                    'The story of your business in your own words',
                    'Anything else AI keeps getting wrong about you',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <SignalDot size={6} className="mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-stone-dark">
                  <h3 className="font-display text-lg text-navy mb-2">How it works</h3>
                  <p className="font-body text-sm text-warmgray leading-relaxed">
                    We build the connector from your intake. You add it to your ChatGPT or Claude once. From then on, when those platforms get a question about your business, they read from your knowledge base before they answer. You stay in control of the words.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-navy text-white rounded-card shadow-card p-8 h-full flex flex-col">
                <SectionLabel variant="light">SUBSCRIBE</SectionLabel>
                <div className="mt-4 mb-2">
                  <span className="font-mono text-5xl font-bold text-copper">{CLIENT_KNOWLEDGE_PRICE}</span>
                  <span className="font-body text-white/70 ml-2">per month</span>
                </div>
                <p className="font-body text-white/70 text-sm mb-6">
                  Cancel any time. Updates included as your business changes.
                </p>

                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="font-body text-sm text-white mb-2">
                    <span className="text-copper font-semibold">A short intake gets you started.</span>
                  </p>
                  <p className="font-body text-sm text-white/80">
                    After you subscribe we send a structured intake. You fill it in once. We build the connector and send setup instructions for ChatGPT or Claude.
                  </p>
                </div>

                <p className="font-body text-white/60 text-sm mb-8">
                  Already running Signal Watch? Client Knowledge plugs into the same setup. One connector reads, the other answers.
                </p>

                <div className="mt-auto">
                  <Button href={CLIENT_KNOWLEDGE_CHECKOUT_URL} variant="primary" className="w-full text-center">
                    Start Client Knowledge
                  </Button>
                  <p className="text-center text-white/50 text-xs mt-3">
                    You will receive a subscription link, the intake, and setup instructions by email.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="relative bg-navy text-white section-padding-sm">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel variant="light">WHY IT MATTERS</SectionLabel>
              <h2 className="font-display text-section-heading mb-6">
                The fastest way to stop AI from guessing about you.
              </h2>
              <div className="font-body text-lg text-white/80 leading-relaxed space-y-4">
                <p>
                  AI makes things up when it does not have a clean source to read from. Schema and directories help, and they take time to land. A direct knowledge connector is the shortest path from your real information to the AI answer someone sees.
                </p>
                <p>
                  Client Knowledge is the connector. You give us the truth once. AI quotes it from then on.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-white/10 rounded-card p-8">
                <h3 className="font-display text-2xl mb-4">Reads from your words</h3>
                <p className="font-body text-white/80 leading-relaxed mb-4">
                  The connector returns your information when AI asks. Not a paraphrase. Not a guess. Your sentences.
                </p>
                <p className="font-body text-white/80 leading-relaxed">
                  When the business changes (new service, new hours, new policy), we update the connector and the answers update with it.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Companion offers */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-10">
            <SectionLabel>WHERE THIS FITS</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              Client Knowledge pairs well with the other tools.
            </h2>
            <p className="text-warmgray text-lg max-w-2xl mx-auto">
              Use it on its own, or stack it with Signal Watch and the Signal Score Report.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-card p-8 h-full flex flex-col">
                <h3 className="font-display text-xl text-navy mb-2">Signal Score Report</h3>
                <p className="font-body text-warmgray mb-6 text-sm flex-1">
                  See where you stand before you change anything. The report tells you what AI is saying and where the gaps are.
                </p>
                <div className="mb-4">
                  <span className="font-mono text-2xl font-bold text-navy">{REPORT_PRICE}</span>
                  <span className="font-body text-warmgray ml-2 text-sm">one time</span>
                </div>
                <Link href="/signal-score-report" className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2">
                  See the report <span>&rarr;</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-card p-8 h-full flex flex-col">
                <h3 className="font-display text-xl text-navy mb-2">Signal Watch</h3>
                <p className="font-body text-warmgray mb-6 text-sm flex-1">
                  See what AI is saying month to month. Watch reads, Client Knowledge answers. Use them together for full coverage.
                </p>
                <div className="mb-4">
                  <span className="font-mono text-2xl font-bold text-navy">{WATCH_PRICE}</span>
                  <span className="font-body text-warmgray ml-2 text-sm">per month</span>
                </div>
                <Link href="/signal-watch" className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2">
                  See Signal Watch <span>&rarr;</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-card p-8 h-full flex flex-col">
                <h3 className="font-display text-xl text-navy mb-2">The Community</h3>
                <p className="font-body text-warmgray mb-6 text-sm flex-1">
                  Learn the discoverability work alongside other owners. A year of practice, with shared lessons and direct access to Lenise.
                </p>
                <div className="mb-4">
                  <span className="font-body text-warmgray text-sm">From $49 a month</span>
                </div>
                <Link href={SKOOL_URL} className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2">
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
              Stop letting AI guess. Tell it the truth.
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              {CLIENT_KNOWLEDGE_PRICE} a month. Cancel any time. Your information, your words, on the platforms your customers are already using.
            </p>
            <Button href={CLIENT_KNOWLEDGE_CHECKOUT_URL} variant="primary">
              Start Client Knowledge
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
