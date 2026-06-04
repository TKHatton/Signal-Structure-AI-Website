'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import { BOOKING_URL, WEBINAR_PRICE } from '@/lib/constants';
import Link from 'next/link';

// Organization schema - the core entity for cross-referencing across the site
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://signalstructure.ai/#organization',
  name: 'Signal & Structure AI',
  alternateName: ['Signal and Structure AI', 'S&S AI', 'SNS AI'],
  url: 'https://signalstructure.ai',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://signalstructure.ai/#logo',
    url: 'https://signalstructure.ai/images/logo.png',
    width: 512,
    height: 512,
    caption: 'Signal & Structure AI Logo',
  },
  image: 'https://signalstructure.ai/og-image.png',
  description:
    'Signal & Structure AI helps local businesses get found, accurately represented, and recommended by AI platforms like ChatGPT, Claude, Gemini, and Perplexity. We build structured knowledge systems that make your business visible to AI-powered search and referral tools.',
  foundingDate: '2025-09',
  founder: { '@id': 'https://signalstructure.ai/about#lenise-kenney' },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 2,
  },
  sameAs: [
    'https://www.linkedin.com/company/signal-structure-ai',
    'https://chatgpt.com/g/g-69b9417ed7d88191ad96525762c30baa-signal-check-ai-visibility-audit',
    'https://share.google/5Ci2LRrbmjYiQpkCp',
  ],
  // Reflects Google Business Profile review state. Update reviewCount + ratingValue
  // as new reviews accumulate on GBP. Re-average ratingValue when reviewCount > 1.
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '1',
    bestRating: '5',
    worstRating: '1',
  },
  knowsAbout: [
    'AI discoverability',
    'AI search optimization',
    'schema markup',
    'structured data',
    'generative engine optimization',
    'local business AI visibility',
    'ChatGPT business recommendations',
    'AI referral optimization',
    'AI presence management',
    'entity authority',
  ],
  slogan: 'Be found. Be accurate. Be recommended.',
  brand: {
    '@type': 'Brand',
    name: 'Signal & Structure AI',
    slogan: 'Be found. Be accurate. Be recommended.',
    logo: { '@id': 'https://signalstructure.ai/#logo' },
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+19843143102',
    email: 'hello@signalstructure.ai',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    '@id': 'https://signalstructure.ai/#address',
    streetAddress: '506 Ramseur St, Unit 108',
    addressLocality: 'Durham',
    addressRegion: 'NC',
    postalCode: '27701',
    addressCountry: 'US',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Durham',
      sameAs: 'https://en.wikipedia.org/wiki/Durham,_North_Carolina',
    },
    {
      '@type': 'State',
      name: 'North Carolina',
    },
    {
      '@type': 'Country',
      name: 'United States',
    },
  ],
};

// LocalBusiness schema - for local search and maps integration
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://signalstructure.ai/#localbusiness',
  name: 'Signal & Structure AI',
  alternateName: ['Signal and Structure AI', 'S&S AI', 'SNS AI'],
  url: 'https://signalstructure.ai',
  logo: { '@id': 'https://signalstructure.ai/#logo' },
  image: 'https://signalstructure.ai/og-image.png',
  description:
    'Signal & Structure AI helps local businesses get found, accurately represented, and recommended by AI platforms like ChatGPT, Claude, Gemini, and Perplexity. We build structured knowledge systems that make your business visible to AI-powered search and referral tools.',
  telephone: '+19843143102',
  email: 'hello@signalstructure.ai',
  address: { '@id': 'https://signalstructure.ai/#address' },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.9907,
    longitude: -78.8986,
  },
  hasMap: 'https://maps.google.com/?cid=506+Ramseur+St,+Unit+108,+Durham,+NC+27701',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday'],
      opens: '11:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Thursday'],
      opens: '11:00',
      closes: '16:00',
    },
  ],
  priceRange: '$297 - $797',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card, Invoice',
  areaServed: [
    {
      '@type': 'City',
      name: 'Durham',
      sameAs: 'https://en.wikipedia.org/wiki/Durham,_North_Carolina',
    },
    {
      '@type': 'State',
      name: 'North Carolina',
    },
    {
      '@type': 'Country',
      name: 'United States',
    },
  ],
  sameAs: ['https://www.linkedin.com/company/signal-structure-ai'],
  // Reflects current Google Business Profile review state (1 review, 5 stars).
  // Update reviewCount and re-average ratingValue as new reviews accumulate.
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '1',
    bestRating: '5',
    worstRating: '1',
  },
  // Individual Review entries can be added below when reviewer name + text
  // are available to publish. Pulling them from GBP requires the reviewer's
  // explicit consent or fair-use judgment. Currently empty.
  // review: [
  //   {
  //     '@type': 'Review',
  //     author: { '@type': 'Person', name: 'Reviewer Name' },
  //     datePublished: '2026-01-01',
  //     reviewBody: 'Review text here...',
  //     reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  //   },
  // ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Presence Management',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': 'https://signalstructure.ai/services#ai-presence-program',
          name: 'AI Presence Program',
          description: 'Done-for-you monitoring, reporting, and correction of how AI platforms describe your business. We monitor ChatGPT, Claude, Gemini, Perplexity, and more every month, show you what is being said, and fix what is wrong. Includes a live dashboard and a monthly report.',
          provider: { '@id': 'https://signalstructure.ai/#organization' },
          serviceType: 'AI Presence Management',
        },
        price: '797',
        priceCurrency: 'USD',
        description: 'Beta founder rate: $797 to start (build plus first month), then $297/month.',
      },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://signalstructure.ai/#website',
  name: 'Signal & Structure AI',
  url: 'https://signalstructure.ai',
  description:
    'AI discoverability services for local businesses. Get found, accurately represented, and recommended by ChatGPT, Claude, Gemini, and other AI platforms.',
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
};

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://signalstructure.ai/#homepage',
  url: 'https://signalstructure.ai',
  name: 'Signal & Structure AI | Be found. Be accurate. Be recommended.',
  description:
    'AI is sending referrals in your industry every day. Signal & Structure AI helps your business get found and recommended by ChatGPT, Claude, Gemini, and other AI platforms.',
  isPartOf: { '@id': 'https://signalstructure.ai/#website' },
  about: { '@id': 'https://signalstructure.ai/#organization' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.hero-headline-main', '.font-display.text-section-heading'],
  },
};

// BreadcrumbList for homepage (single item - Home)
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
  ],
};

export default function HomePage() {
  return (
    <main>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Section 1: Hero */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn delay={0.1}>
            <h1 className="hero-headline-main text-white mb-8">
              AI is sending referrals in your industry every day. Is it sending them to you?
            </h1>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col items-center gap-4">
              <Button href={BOOKING_URL} variant="primary" className="text-lg px-8 py-4">
                Reserve a Spot at My Next Talk
              </Button>
              <p className="text-white/70 text-sm">
                A live session on how AI is describing businesses, and what to do about it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Signal Pulse CTA */}
      <section className="bg-stone py-10 sm:py-12">
        <div className="max-w-content mx-auto px-6">
          <FadeIn>
            <Link
              href="/signal-pulse"
              className="block bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8">
                {/* Icon */}
                <div className="w-14 h-14 bg-copper/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-copper/20 transition-colors">
                  <svg
                    className="w-7 h-7 text-copper"
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
                  <p className="font-display text-lg text-navy mb-1">
                    Check your signal right now, for free.
                  </p>
                  <p className="font-body text-sm text-warmgray">
                    Enter your URL and find out if AI can see your business. Takes 10 seconds.
                  </p>
                </div>
                {/* Arrow */}
                <svg
                  className="w-5 h-5 text-copper flex-shrink-0 hidden sm:block group-hover:translate-x-1 transition-transform"
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

      {/* Section 2: The Shift */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text */}
            <FadeIn>
              <SectionLabel>WHAT CHANGED</SectionLabel>
              <h2 className="font-display text-section-heading text-navy mb-6">
                Google used to be the middleman. Now AI is.
              </h2>
              <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
                <p>
                  For years, the playbook was simple. Pick the right keywords. Show up on
                  the first page. Wait for clicks.
                </p>
                <p>
                  That is not how people find businesses anymore.
                </p>
                <p>
                  Now they open ChatGPT, Claude, or Gemini and ask a full
                  question. "Who is the best company for this in my area?" AI does not give
                  them a list of links. It gives them a direct answer. Names, descriptions,
                  reasons to choose one business over another.
                </p>
                <p>
                  This is a referral. It happens millions of times a day. And most
                  businesses are invisible to it because they are still set up for the old
                  way of being found.
                </p>
              </div>
            </FadeIn>

            {/* Right column - AI Conversation Card */}
            <FadeIn delay={0.2} direction="left">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="bg-navy rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-warmgray-light text-xs mb-4">ChatGPT</div>

                {/* User message */}
                <div className="bg-stone rounded-lg p-4 mb-4">
                  <p className="font-body text-sm text-navy">
                    "Who should I hire for marketing in Durham, NC?"
                  </p>
                </div>

                {/* AI response */}
                <div className="bg-navy-light rounded-lg p-4 mb-4 relative">
                  <p className="font-body text-sm text-white mb-2">
                    "Based on available information, I'd recommend
                    considering these options..."
                  </p>
                  <div className="space-y-1 relative">
                    <div className="h-2 bg-white/10 rounded w-full"></div>
                    <div className="h-2 bg-white/10 rounded w-4/5"></div>
                    <div className="h-2 bg-white/10 rounded w-3/4"></div>
                  </div>
                  {/* Gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-navy-light to-transparent"></div>
                </div>

                {/* Pulsing dot */}
                <motion.div
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="flex justify-end"
                >
                  <SignalDot size={8} />
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 3: Learn deeper — the talks */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel>LEARN HOW THIS WORKS</SectionLabel>
              <h2 className="font-display text-section-heading text-navy mb-6">
                It is here. It is already happening. It is just not easy to understand yet.
              </h2>
              <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
                <p>
                  Let me break it down for you. I run live talks that walk through how AI is
                  deciding who to recommend, what it is already saying about businesses, and the
                  concrete steps to be described accurately.
                </p>
                <p>
                  No jargon. No hype. Just a clear, honest look at what changed and what to do
                  about it.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-navy text-white rounded-card shadow-card p-8">
                <h3 className="font-display text-2xl mb-2">Reserve a spot at my next talk</h3>
                <p className="font-body text-white/70 mb-6">
                  Pick a date that works for you. Live, on video, and built to make this make
                  sense.
                </p>
                <div className="mb-6">
                  <span className="font-mono text-4xl font-bold text-copper">{WEBINAR_PRICE}</span>
                  <span className="font-body text-white/70 ml-2">per session</span>
                </div>
                <div className="flex flex-col gap-3">
                  <Button href={BOOKING_URL} variant="primary" className="w-full text-center">
                    See the schedule and reserve
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 4: What makes this different */}
      <section className="relative bg-navy text-white section-padding-sm">
        <GridTexture />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn className="text-center mb-8">
            <SectionLabel variant="light">WHAT MAKES THIS DIFFERENT</SectionLabel>
            <h2 className="font-display text-section-heading mb-4">
              We do not just tell you what is wrong. We fix it.
            </h2>
            <p className="text-white/70 text-hero-subtext max-w-3xl mx-auto">
              Most tools check ChatGPT and maybe one or two others, then hand you a report and
              wish you luck. We check ChatGPT, Claude, Gemini, Perplexity, and more every month
              and do the correction work ourselves.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <FadeIn delay={0.3}>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-copper text-xs font-body font-semibold uppercase tracking-wider mb-2">
                  COVERAGE
                </div>
                <div className="font-mono text-4xl font-bold text-white mb-1">4+</div>
                <div className="text-white/50 text-sm">AI platforms monitored monthly</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-copper text-xs font-body font-semibold uppercase tracking-wider mb-2">
                  THE WORK
                </div>
                <div className="font-mono text-4xl font-bold text-white mb-1">Done</div>
                <div className="text-white/50 text-sm">we fix it, you do not lift a finger</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-copper text-xs font-body font-semibold uppercase tracking-wider mb-2">
                  PROOF
                </div>
                <div className="font-mono text-4xl font-bold text-white mb-1">Monthly</div>
                <div className="text-white/50 text-sm">report plus a live dashboard</div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6} className="text-center mt-8">
            <Link
              href="/services"
              className="font-body text-copper hover:text-copper-light transition-colors inline-flex items-center gap-2"
            >
              See how the program works
              <span>→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Beacon tease */}
      <section className="section-padding-sm">
        <div className="max-w-content mx-auto">
          <FadeIn>
            <div className="bg-stone-dark rounded-card p-8 md:p-10 text-center">
              <SectionLabel>COMING SOON</SectionLabel>
              <h2 className="font-display text-2xl md:text-3xl text-navy mb-3">
                Beacon is on the way.
              </h2>
              <p className="font-body text-warmgray max-w-2xl mx-auto">
                A simpler, self-serve way to keep your business described accurately by AI.
                Same thinking, built so you can run it yourself. More soon.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Expertise Block */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel>WHY IT HAPPENS</SectionLabel>
              <h2 className="font-display text-section-heading text-navy mb-6">
                Here is what most people do not realize about how AI works.
              </h2>
              <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
                <p>
                  AI does not carefully research your business the way a person would. It
                  scans for structured information it can quickly pull from. If your
                  information is scattered across different pages, inconsistent between
                  platforms, or not organized in a way AI can parse, it does one of two
                  things.
                </p>
                <p>
                  It skips you entirely. Or it guesses. And when AI guesses, it
                  hallucinates. It makes up details, confuses you with someone else, or
                  describes services you do not even offer.
                </p>
                <p>
                  This is not a flaw you can wait out. The only fix is giving AI something
                  structured, clear, and reliable to work with.
                </p>
                <p className="font-semibold text-navy">
                  That is what we build.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              {/* Optional decorative element */}
              <div className="bg-stone-dark rounded-card p-12 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="font-display text-6xl text-copper mb-4">∞</div>
                  <p className="font-body text-navy text-sm">
                    Structured knowledge,<br />infinite applications
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 6: Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl mb-8 text-white">
              AI is giving referrals in your space every day. Make sure yours is
              one of them.
            </h2>
            <Button href={BOOKING_URL} variant="primary" className="mb-4">
              Reserve a Spot at My Next Talk
            </Button>
            <p className="text-white/70 text-sm">
              Come learn how AI is describing businesses, and what to do about it.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
