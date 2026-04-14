import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import AddOnCard from '@/components/AddOnCard';
import { BOOKING_URL } from '@/lib/constants';

export const metadata = {
  title: 'Services & Pricing | Signal & Structure AI',
  description: 'AI Business Profile starting at $750. AI Knowledge System starting at $3,000. AI Presence Management starting at $1,500/mo. Clear pricing for AI knowledge services.',
  alternates: {
    canonical: '/services',
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
      name: 'Services',
      item: 'https://signalstructure.ai/services',
    },
  ],
};

const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://signalstructure.ai/services#ai-business-profile',
    name: 'AI Business Profile',
    provider: { '@id': 'https://signalstructure.ai/#organization' },
    description: 'Organizes your business information so AI platforms can find and describe your company correctly. Includes guided intake, custom AI assistant, brand guardrails, structured formatting, and before-and-after Signal Score measurement.',
    serviceType: 'AI Discoverability',
    offers: { '@type': 'Offer', price: '750', priceCurrency: 'USD', priceSpecification: { '@type': 'PriceSpecification', price: '750', priceCurrency: 'USD', description: 'Starting price' } },
    areaServed: { '@type': 'Country', name: 'United States' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://signalstructure.ai/services#ai-knowledge-system',
    name: 'AI Knowledge System',
    provider: { '@id': 'https://signalstructure.ai/#organization' },
    description: 'Transforms all business documents, pages, policies, and content into one organized knowledge system that AI platforms pull from directly. Includes deep discovery, centralized knowledge structure, schema markup, custom AI assistant, and detailed Signal Score by category.',
    serviceType: 'AI Discoverability',
    offers: { '@type': 'Offer', price: '3000', priceCurrency: 'USD', priceSpecification: { '@type': 'PriceSpecification', price: '3000', priceCurrency: 'USD', description: 'Starting price' } },
    areaServed: { '@type': 'Country', name: 'United States' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://signalstructure.ai/services#ai-presence-management',
    name: 'AI Presence Management',
    provider: { '@id': 'https://signalstructure.ai/#organization' },
    description: 'Ongoing management of your AI presence as your business and AI platforms evolve. Includes monthly updates, monthly accuracy checks, quarterly audits, strategy calls, platform monitoring, discoverability tracking, and priority support.',
    serviceType: 'AI Discoverability Management',
    offers: { '@type': 'Offer', price: '1500', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', price: '1500', priceCurrency: 'USD', unitText: 'MONTH', description: 'Starting monthly price with 3-month minimum' } },
    areaServed: { '@type': 'Country', name: 'United States' },
  },
];

const addOnsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Signal & Structure AI Add-On Services',
  itemListElement: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Internal Team AI Assistant', description: 'Private AI assistant trained on your internal processes, SOPs, and team documentation.', offers: { '@type': 'Offer', price: '500', priceCurrency: 'USD' }, provider: { '@id': 'https://signalstructure.ai/#organization' } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Website AI Chat', description: 'Customer-facing AI chat widget connected to your knowledge system, embedded on your website.', offers: { '@type': 'Offer', price: '750', priceCurrency: 'USD' }, provider: { '@id': 'https://signalstructure.ai/#organization' } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Multi-Platform AI Readiness', description: 'Business information structured and optimized for ChatGPT, Claude, Gemini, and other leading AI platforms.', offers: { '@type': 'Offer', price: '1000', priceCurrency: 'USD' }, provider: { '@id': 'https://signalstructure.ai/#organization' } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'Custom GPTs and AI Apps', description: 'Purpose-built AI tools like intake assistants, proposal generators, or customer service bots.', offers: { '@type': 'Offer', price: '2000', priceCurrency: 'USD' }, provider: { '@id': 'https://signalstructure.ai/#organization' } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'AI Workflow Automation', description: 'Automated workflows connecting your existing tools with AI-powered processes.', offers: { '@type': 'Offer', price: '1500', priceCurrency: 'USD' }, provider: { '@id': 'https://signalstructure.ai/#organization' } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'Service', name: 'Compliance and Tone Guardrails', description: 'Rules and boundaries ensuring AI represents your brand consistently and avoids risk.', offers: { '@type': 'Offer', price: '500', priceCurrency: 'USD' }, provider: { '@id': 'https://signalstructure.ai/#organization' } } },
    { '@type': 'ListItem', position: 7, item: { '@type': 'Service', name: 'Quarterly AI Accuracy Audit', description: '90-day checkup testing AI platforms against your ground truth with scorecards and recommendations.', offers: { '@type': 'Offer', price: '750', priceCurrency: 'USD' }, provider: { '@id': 'https://signalstructure.ai/#organization' } } },
  ],
};

export default function ServicesPage() {
  return (
    <main>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {servicesSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(addOnsSchema) }}
      />

      {/* Section 1: Page Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">PRICING & PACKAGES</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Clear pricing for two things that matter: making sure AI can find
              your business, and making sure it describes you correctly when it does.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Three Service Tiers */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <ServiceCard
                badge="BEST FOR GETTING STARTED"
                title="AI Business Profile"
                description="Your starting point. We take your real business information and organize it so AI can find you and describe you correctly. Right now AI is either ignoring your business or filling in blanks with wrong information. This fixes both."
                price="Starting at $750"
                features={[
                  'Guided intake to learn your business',
                  'Organized business information for AI',
                  'Custom AI assistant trained on your actual data',
                  'Brand and tone guardrails',
                  'Clear rules for what AI should not say',
                  'Structured formatting for AI platforms',
                  'A shareable AI experience',
                  'Before and after Signal Score™',
                ]}
                ctaText="Get Started"
                ctaHref={BOOKING_URL}
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <ServiceCard
                badge="MOST POPULAR"
                title="AI Knowledge System"
                description="This goes deeper. We take everything your business has, every document, page, policy, FAQ, and piece of content, and turn it into one organized system that AI pulls from directly. This is how you go from AI occasionally mentioning you to AI confidently recommending you with the right details."
                price="Starting at $3,000"
                features={[
                  'Deep discovery and knowledge mapping',
                  'Centralized AI-ready knowledge structure',
                  'Organized categories (Services, Messaging, Policies, FAQs)',
                  'AI connected directly to your source of truth',
                  'Multi-platform formatting for different AI tools',
                  'Schema markup and structured data',
                  'Custom AI assistant on your knowledge system',
                  'Thorough testing and accuracy refinement',
                  'Expansion documentation for future growth',
                  'Detailed before and after Signal Score™',
                ]}
                ctaText="Build Your System"
                ctaHref={BOOKING_URL}
                featured
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <ServiceCard
                badge="ONGOING MANAGEMENT"
                title="AI Presence Management"
                description="Your business changes. AI changes. New services get launched. Pricing shifts. AI platforms release updates every week. If nobody is managing this, your referrals and accuracy start drifting within months."
                price="Starting at $1,500/mo"
                priceNote="3 month minimum"
                features={[
                  'Monthly knowledge updates and content integration',
                  'Monthly accuracy checks across AI platforms',
                  'Monthly Signal Score™ updates',
                  'Quarterly deep audit with full platform comparison',
                  'Quarterly strategy call',
                  'AI platform change monitoring',
                  'Discoverability tracking',
                  'AI referral tracking setup and reporting',
                  'Strategic guidance as AI evolves',
                  'Priority support',
                ]}
                ctaText="Start a Conversation"
                ctaHref={BOOKING_URL}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 3: Add-Ons */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="mb-12">
            <h2 className="font-display text-section-heading text-navy mb-4 text-center">
              Add-Ons
            </h2>
            <p className="text-warmgray text-lg text-center max-w-2xl mx-auto">
              Available with any service. Each one extends what AI can do for your business.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <AddOnCard
                title="Internal Team AI Assistant"
                price="Starting at $500"
                description="A private AI assistant trained on your internal processes and documentation. Everyone gets the same right answer every time. Onboarding gets faster. Senior staff stop being the company encyclopedia."
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <AddOnCard
                title="Website AI Chat"
                price="Starting at $750"
                description="A customer-facing AI chat on your website that actually knows your business. Connected to your knowledge system so it answers with real information. Not generic chatbot responses."
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <AddOnCard
                title="Multi-Platform AI Readiness"
                price="Starting at $1,000"
                description="Your knowledge structured to work across every AI tool, not just one. ChatGPT, Claude, Gemini, website chat, internal tools. One structure that feeds all of them."
              />
            </FadeIn>

            <FadeIn delay={0.4}>
              <AddOnCard
                title="Custom GPTs and AI Apps"
                price="Starting at $2,000"
                description="Purpose-built AI tools for your specific business. A customer intake assistant. A proposal generator. A product recommender. Built on your knowledge system so it knows what it is talking about."
              />
            </FadeIn>

            <FadeIn delay={0.5}>
              <AddOnCard
                title="AI Workflow Automation"
                price="Starting at $1,500"
                description="Automated workflows connecting your existing tools with AI. Blog posts become social content. Form submissions get analyzed and routed. Hours saved every week with visible results."
              />
            </FadeIn>

            <FadeIn delay={0.6}>
              <AddOnCard
                title="Compliance and Tone Guardrails"
                price="Starting at $500"
                description="Clear rules for what AI should and should not say on your behalf. Protects your brand, reduces risk, and keeps every AI response consistent. Essential for regulated industries."
              />
            </FadeIn>

            <FadeIn delay={0.7}>
              <AddOnCard
                title="Quarterly AI Accuracy Audit"
                price="Starting at $750 per audit"
                description="A structured checkup every 90 days. We test how AI tools describe and recommend your business across multiple platforms. You get a scorecard with scores and specific things to fix."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 4: Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-8 text-white">
              Ready to start getting the referrals you have been missing?
            </h2>
            <Button href={BOOKING_URL} variant="primary" className="mb-4">
              Get Your Signal Score
            </Button>
            <p className="text-white/70 text-sm max-w-2xl mx-auto">
              30 minutes. We look at what AI currently says about your business
              and whether it recommends you at all. No pressure. Just a clear picture.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
