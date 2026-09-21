import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import FAQAccordion from '@/components/FAQAccordion';
import McpSetupForm from '@/components/McpSetupForm';
import {
  MCP_SETUP_PRICE_STANDARD,
  MCP_MAINTENANCE_PRICE,
  CHATGPT_PULSE_URL,
  CHATGPT_ADVISOR_URL,
} from '@/lib/constants';
import { withSocial } from '@/lib/seo';

const PAGE_URL = 'https://signalstructure.ai/mcp-setup';

const SHORT_ANSWER = `MCP Setup is a service from Signal & Structure AI that gets your business its own tool inside ChatGPT. Lenise Kenney plans what the tool should do, builds it, tests it, hosts it, and submits it to the ChatGPT directory. It costs ${MCP_SETUP_PRICE_STANDARD} one time, plus ${MCP_MAINTENANCE_PRICE} a month for hosting and maintenance.`;

export const metadata = withSocial({
  title: 'MCP Setup: Put Your Business Inside ChatGPT | Signal & Structure AI',
  description: `MCP Setup gets your business its own tool inside ChatGPT. Lenise Kenney plans, builds, tests, hosts, and submits it. ${MCP_SETUP_PRICE_STANDARD} plus ${MCP_MAINTENANCE_PRICE} a month.`,
  alternates: {
    canonical: '/mcp-setup',
  },
});

const faqItems = [
  {
    question: 'What is MCP Setup?',
    answer: 'A done-for-you service from Signal & Structure AI that puts your business\'s own tool inside ChatGPT.',
  },
  {
    question: 'How much does MCP Setup cost?',
    answer: `${MCP_SETUP_PRICE_STANDARD} one time, plus ${MCP_MAINTENANCE_PRICE} a month for hosting and maintenance.`,
  },
  {
    question: 'What if I don\'t know what my MCP should do?',
    answer: 'That is the normal starting point. You fill out a form, I suggest ideas, and we pick one together. Then I design and build it.',
  },
  {
    question: 'How long does it take?',
    answer: 'Typically about 60 days from an approved plan, if OpenAI approves it. Once we agree on the plan and I have your content, I build and test. Then OpenAI reviews it on its own schedule. If they ask for changes, that adds time.',
  },
  {
    question: 'Will my tool definitely be listed?',
    answer: 'No one can promise that, because OpenAI makes the decision. Two submission attempts are included.',
  },
  {
    question: `What does the ${MCP_MAINTENANCE_PRICE} a month cover?`,
    answer: 'Your MCP runs on servers I host and maintain. The monthly fee covers that hosting, the software it needs, storage or databases if your MCP uses them, the API costs of running it, and fixes when ChatGPT changes what it requires.',
  },
  {
    question: 'Do I own my MCP?',
    answer: 'You own your information and content, always. I host your MCP and keep it running while your maintenance plan is active. If you cancel, you take your content with you and I take the MCP down.',
  },
  {
    question: 'Can I do this myself?',
    answer: 'Some owners do. Most would rather spend their time running the business. MCP Setup is for those owners.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'MCP Setup', item: PAGE_URL },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'MCP Setup',
  serviceType: 'Custom MCP design, build, hosting, and ChatGPT directory submission',
  description: SHORT_ANSWER,
  url: PAGE_URL,
  provider: [
    { '@id': 'https://signalstructure.ai/#organization' },
    { '@id': 'https://signalstructure.ai/about#lenise-kenney' },
  ],
  offers: [
    {
      '@type': 'Offer',
      name: 'MCP Setup',
      price: MCP_SETUP_PRICE_STANDARD.replace(/[^0-9.]/g, ''),
      priceCurrency: 'USD',
      description: 'One-time price to plan, design, build, test, and submit one MCP to the ChatGPT directory. Two submission attempts included.',
    },
    {
      '@type': 'Offer',
      name: 'MCP Maintenance',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: MCP_MAINTENANCE_PRICE.replace(/[^0-9.]/g, ''),
        priceCurrency: 'USD',
        unitCode: 'MON',
      },
      description: 'Monthly hosting and maintenance: servers, software, storage, API costs, and fixes.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  url: PAGE_URL,
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

const steps = [
  {
    title: 'Plan',
    body: 'You fill out a short form. I come back with ideas for what your MCP could do, and we pick the one that fits.',
  },
  {
    title: 'Build',
    body: 'I design it, build it, and test it until it works the way it should.',
  },
  {
    title: 'Launch',
    body: 'I host it, submit it to the ChatGPT directory, and send you instructions for adding it.',
  },
];

const included = [
  'Planning to decide what your MCP should do',
  'Your MCP designed, built, and tested',
  'Hosting on my own servers',
  'Submission to the ChatGPT directory, with two attempts included',
  'Instructions for adding your MCP in ChatGPT',
  `Fixes and maintenance for ${MCP_MAINTENANCE_PRICE} a month`,
];

const examples = [
  'Answer customer questions from your actual services, hours, policies, and prices',
  'Help a customer pick the right service',
  'Let customers handle routine tasks themselves, like checking or changing a booking',
  'Check whether you serve their area',
  'Collect the details for a quote',
];

export default function McpSetupPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">MCP SETUP</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Put your business where your customers already are. Inside ChatGPT.
            </h1>
            <p className="inner-page-hero-support text-white/70 max-w-2xl mx-auto mt-4">
              MCP Setup is a done-for-you service from Signal &amp; Structure AI. You don&apos;t need to know what you want built. You just want it done.
            </p>
            <div className="mt-8">
              <Button href="#start" variant="primary" className="text-lg px-8 py-4">
                Tell me about your business
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The short answer */}
      <section className="section-padding-sm bg-stone-dark">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionLabel>THE SHORT ANSWER</SectionLabel>
            <p className="font-body text-navy text-lg leading-relaxed mt-4">{SHORT_ANSWER}</p>
          </FadeIn>
        </div>
      </section>

      {/* Why + what is an MCP */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto space-y-12">
          <FadeIn>
            <h2 className="font-display text-2xl text-navy mb-4">Your customers are already there.</h2>
            <p className="font-body text-warmgray leading-relaxed">
              They ask ChatGPT their questions, compare options, and make decisions without leaving. Every trip to find your website is a chance to lose them. MCP Setup removes the trip. Your tool lives inside the assistant they are already using.
            </p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-display text-2xl text-navy mb-4">What is an MCP?</h2>
            <p className="font-body text-warmgray leading-relaxed">
              An MCP is a small piece of software that lets ChatGPT use your business&apos;s own tools and information. Instead of guessing about you, the assistant asks your MCP and answers from what you told it.
            </p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-display text-2xl text-navy mb-4">You don&apos;t have to know what you want.</h2>
            <p className="font-body text-warmgray leading-relaxed">
              Most owners can&apos;t say what their tool should do, and that is fine. It is my job. I work out the best tools for your business, then design them, build them, test them, and run them. Whatever your business does, I will find a way to make this useful for it. You come in wanting it done. You leave with it live.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-10">
            <SectionLabel>HOW IT WORKS</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mt-2">Plan, build, launch.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={0.1 + i * 0.1}>
                <div className="bg-white rounded-card shadow-card p-8 h-full">
                  <div className="font-mono text-copper text-sm mb-2">0{i + 1}</div>
                  <h3 className="font-display text-xl text-navy mb-3">{step.title}</h3>
                  <p className="font-body text-warmgray text-sm leading-relaxed">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Included + price */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <h2 className="font-display text-2xl text-navy mb-4">What&apos;s included</h2>
                <ul className="space-y-3 font-body text-warmgray">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <SignalDot size={6} className="mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="font-display text-xl text-navy mt-8 mb-3">What could your MCP do?</h3>
                <ul className="space-y-3 font-body text-warmgray">
                  {examples.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <SignalDot size={6} className="mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-warmgray text-sm mt-4">
                  Not sure which fits? Working that out is the first step.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-navy text-white rounded-card shadow-card p-8 h-full flex flex-col">
                <SectionLabel variant="light">PRICE</SectionLabel>
                <div className="mt-4 mb-1">
                  <span className="font-mono text-5xl font-bold text-copper">{MCP_SETUP_PRICE_STANDARD}</span>
                </div>
                <p className="font-body text-white/70 text-sm mb-4">One time.</p>
                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="font-body text-sm text-white">
                    <span className="text-copper font-semibold">{MCP_MAINTENANCE_PRICE} a month</span> for hosting and maintenance.
                  </p>
                </div>
                <p className="font-body text-white/70 text-sm mb-8">
                  Larger or more complex builds are quoted after we plan.
                </p>
                <div className="mt-auto">
                  <Button href="#start" variant="primary" className="w-full text-center">
                    Tell me about your business
                  </Button>
                  <p className="text-center text-white/50 text-xs mt-3">
                    Fill out the form and I&apos;ll come back with ideas for what your MCP could do.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Proof + who it's for */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-3xl mx-auto space-y-12">
          <FadeIn>
            <h2 className="font-display text-2xl text-navy mb-4">It&apos;s already working.</h2>
            <p className="font-body text-warmgray leading-relaxed mb-4">
              Signal Advisor and Signal Pulse, two tools built by Signal &amp; Structure AI, were approved and published in OpenAI&apos;s ChatGPT directory on September 18, 2026. Search &ldquo;Signal Advisor&rdquo; inside ChatGPT and try it yourself.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={CHATGPT_ADVISOR_URL} variant="outline">Signal Advisor in ChatGPT</Button>
              <Button href={CHATGPT_PULSE_URL} variant="outline">Signal Pulse in ChatGPT</Button>
            </div>
          </FadeIn>
          <FadeIn>
            <h2 className="font-display text-2xl text-navy mb-4">Who this is for</h2>
            <p className="font-body text-warmgray leading-relaxed">
              Owners who want it handled. If you would rather learn to build MCPs yourself, this is not that service.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-10">
            <SectionLabel>QUESTIONS</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mt-2">MCP Setup, answered.</h2>
          </FadeIn>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Form */}
      <section id="start" className="relative bg-navy text-white section-padding scroll-mt-16">
        <GridTexture />
        <div className="relative z-10 max-w-2xl mx-auto">
          <FadeIn className="text-center mb-8">
            <SectionLabel variant="light">START HERE</SectionLabel>
            <h2 className="font-display text-section-heading text-white mt-2 mb-4">
              You just want it done. Tell me about your business.
            </h2>
            <p className="font-body text-white/70">
              A few quick answers is all I need to come back with ideas.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="text-navy">
              <McpSetupForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
