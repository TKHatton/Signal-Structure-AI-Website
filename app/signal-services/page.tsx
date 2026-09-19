import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import {
  REPORT_PRICE,
  FIX_PRICE,
  AUTHORITY_PRICE_LOW,
  AUTHORITY_PRICE_HIGH,
  GROWTH_PRICE,
  GROWTH_COMMITMENT_MONTHS,
  PUBLISH_PRICE_LOW,
  PUBLISH_PRICE_HIGH,
  PUBLISH_COMMITMENT_MONTHS,
  MCP_SETUP_PRICE_STANDARD,
  MCP_MAINTENANCE_PRICE,
  EMAIL,
} from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: 'Signal Services | Signal & Structure AI',
  description: 'Beyond the Signal Score: technical builds, entity builds, ongoing content, and MCP setup to get an AI-accurate, AI-visible business built and kept that way.',
  alternates: {
    canonical: '/signal-services',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://signalstructure.ai/#organization',
  name: 'Signal & Structure AI',
  url: 'https://signalstructure.ai',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'Signal Services', item: 'https://signalstructure.ai/signal-services' },
  ],
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://signalstructure.ai/signal-services#services',
  provider: { '@id': 'https://signalstructure.ai/#organization' },
  name: 'Signal & Structure AI Services',
  serviceType: 'AI discoverability build and content services',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Signal Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Signal Fix',
        price: '650',
        priceCurrency: 'USD',
        description: 'One-time technical build: schema, sitemap, Google Business Profile setup.',
      },
      {
        '@type': 'Offer',
        name: 'Signal Authority',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '1500',
          priceCurrency: 'USD',
        },
        description: 'One-time entity build: directories, schema, and NAP consistency everywhere.',
      },
      {
        '@type': 'Offer',
        name: 'Signal Growth',
        price: '1200',
        priceCurrency: 'USD',
        description: 'Monthly strategy and content outlines. Six-month minimum.',
      },
      {
        '@type': 'Offer',
        name: 'Signal Publish',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '1800',
          maxPrice: '3000',
          priceCurrency: 'USD',
        },
        description: 'Monthly full content service, written and delivered. Six-month minimum.',
      },
      {
        '@type': 'Offer',
        name: 'MCP Setup',
        price: '1200',
        priceCurrency: 'USD',
        description: 'One-time setup to get the business inside ChatGPT directly, plus ongoing maintenance.',
      },
    ],
  },
};

const services = [
  {
    id: 'signal-fix',
    label: 'SIGNAL FIX',
    name: 'Signal Fix',
    tagline: 'The technical build.',
    price: FIX_PRICE,
    term: 'one time',
    description: 'The technical foundation AI needs to read your business correctly: schema markup, a clean sitemap, and your Google Business Profile set up right. The entry point if the Signal Score turned up technical gaps.',
    items: [
      'Schema markup built and installed for your site',
      'Sitemap cleaned up and submitted',
      'Google Business Profile set up or corrected',
    ],
  },
  {
    id: 'signal-authority',
    label: 'SIGNAL AUTHORITY',
    name: 'Signal Authority',
    tagline: 'The full entity build.',
    price: `${AUTHORITY_PRICE_LOW} to ${AUTHORITY_PRICE_HIGH}`,
    term: 'one time, priced by site size',
    description: 'Everything Signal Fix covers, extended into a full entity build: your business listed correctly across the directories that matter, schema throughout the site, and your name, address, and phone number consistent everywhere AI looks.',
    items: [
      'Directory listings built and corrected across the sources AI checks',
      'Schema markup across the full site',
      'NAP consistency audit and cleanup everywhere your business appears',
      'Priced by page count and site complexity',
    ],
  },
  {
    id: 'signal-growth',
    label: 'SIGNAL GROWTH',
    name: 'Signal Growth',
    tagline: 'Strategy and outlines, you write it.',
    price: `${GROWTH_PRICE}/mo`,
    term: `${GROWTH_COMMITMENT_MONTHS}-month minimum`,
    description: 'Monthly content strategy and detailed outlines built for AI visibility. You or your team write the pieces. The lighter option when Signal Publish is more than the budget allows right now.',
    items: [
      'Monthly content strategy built around what AI is missing about you',
      'Detailed outlines ready to hand to a writer',
      'Topics chosen for what AI needs to hear, not just what ranks',
    ],
  },
  {
    id: 'signal-publish',
    label: 'SIGNAL PUBLISH',
    name: 'Signal Publish',
    tagline: 'The full content service.',
    price: `${PUBLISH_PRICE_LOW} to ${PUBLISH_PRICE_HIGH}/mo`,
    term: `${PUBLISH_COMMITMENT_MONTHS}-month minimum`,
    description: 'Everything Signal Growth covers, and we write it. Original articles built to become the source AI quotes, researched, written, and delivered ready to publish.',
    items: [
      'Monthly content strategy and outlines',
      'Articles written and delivered ready to publish',
      'Built to be the original source AI can cite, not another summary',
    ],
  },
  {
    id: 'mcp-setup',
    label: 'MCP SETUP',
    name: 'MCP Setup',
    // TODO Lenise: Claude comes back here (tagline, description, items) as soon as the
    // Claude directory submission is funded. Copy is ChatGPT only until then.
    tagline: 'Live inside ChatGPT.',
    href: '/mcp-setup',
    cta: 'See how MCP Setup works',
    price: MCP_SETUP_PRICE_STANDARD,
    term: `one time, plus ${MCP_MAINTENANCE_PRICE}/mo maintenance`,
    description: 'Gets your business set up as a direct connector inside ChatGPT, so it can answer from your real information instead of guessing.',
    items: [
      'MCP connector built and configured for your business',
      'Set up inside ChatGPT directly',
      `${MCP_MAINTENANCE_PRICE} per month ongoing maintenance, not termed`,
    ],
  },
];

export default function SignalServicesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      {/* Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">SIGNAL SERVICES</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Once you know what AI gets wrong, this is how it gets fixed.
            </h1>
            <p className="inner-page-hero-support text-white/70 max-w-2xl mx-auto mt-4">
              The Signal Score tells you what AI is missing. These are the builds and the ongoing work that close the gap.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Where this starts */}
      <section className="section-padding-sm bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center">
            <p className="font-body text-warmgray max-w-2xl mx-auto">
              Most people start with a <Link href="/signal-score-report" className="text-copper hover:text-copper-dark underline underline-offset-2">Signal Score Report</Link> ({REPORT_PRICE}) to see what AI is getting wrong first. Everything below is the work that fixes it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-content mx-auto space-y-6">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={0.1 + i * 0.05}>
              <div id={service.id} className="bg-white rounded-card shadow-card p-8 scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <SectionLabel>{service.label}</SectionLabel>
                    <h2 className="font-display text-2xl text-navy mt-2 mb-1">{service.name}</h2>
                    <p className="font-body text-copper font-medium mb-4">{service.tagline}</p>
                    <p className="font-body text-warmgray mb-5 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 font-body text-warmgray">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <SignalDot size={6} className="mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-stone-dark rounded-lg p-6 flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-3xl font-bold text-navy mb-1">{service.price}</div>
                      <p className="font-body text-sm text-warmgray mb-6">{service.term}</p>
                    </div>
                    <Button href={service.href ?? `mailto:${EMAIL}?subject=${encodeURIComponent(service.name)}%20inquiry`} variant="outline" className="w-full text-center">
                      {service.cta ?? `Ask about ${service.name}`}
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Growth vs Publish note */}
      <section className="relative bg-navy text-white section-padding-sm">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionLabel variant="light">GROWTH OR PUBLISH?</SectionLabel>
            <p className="font-body text-white/80 leading-relaxed mt-4">
              Signal Publish is the full service: we write and deliver the content. Signal Growth is the lighter, lower-cost version, strategy and outlines, and you or your team write it. If Publish is more than the budget allows right now, start with Growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-6 text-navy">
              Not sure which one fits.
            </h2>
            <p className="text-warmgray mb-8 max-w-2xl mx-auto">
              Send Lenise your Signal Score results, or just tell her what you are trying to fix. She will point you at the right one.
            </p>
            <Button href={`mailto:${EMAIL}?subject=Which%20Signal%20service%20is%20right%20for%20me`} variant="primary">
              Ask which one fits
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
