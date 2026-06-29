'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import {
  REPORT_PRICE,
  REPORT_TURNAROUND,
  WATCH_PRICE,
} from '@/lib/constants';
import Link from 'next/link';

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
    'Signal & Structure AI helps business owners get found, accurately represented, and recommended by AI platforms like ChatGPT, Claude, Gemini, and Perplexity. We run a community where owners learn AI discoverability together, plus on-demand reports and ongoing monitoring.',
  foundingDate: '2025-09',
  founder: { '@id': 'https://signalstructure.ai/about#lenise-kenney' },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 2,
  },
  sameAs: [
    'https://www.linkedin.com/company/signal-structure-ai',
    'https://www.skool.com/signal-structure-ai-2338/about',
    'https://share.google/5Ci2LRrbmjYiQpkCp',
  ],
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
    addressLocality: 'Pittsboro',
    addressRegion: 'NC',
    postalCode: '27312',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
  ],
};

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
    'Signal & Structure AI helps business owners get found, accurately represented, and recommended by AI platforms like ChatGPT, Claude, Gemini, and Perplexity.',
  telephone: '+19843143102',
  email: 'hello@signalstructure.ai',
  address: { '@id': 'https://signalstructure.ai/#address' },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.7215,
    longitude: -79.1770,
  },
  priceRange: '$26 - $497',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card, Invoice',
  areaServed: [{ '@type': 'Country', name: 'United States' }],
  sameAs: [
    'https://www.linkedin.com/company/signal-structure-ai',
    'https://www.skool.com/signal-structure-ai-2338/about',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '1',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Discoverability',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Signal & Structure AI Community',
          description: 'A members-only community for business owners learning AI discoverability together. Yearly or monthly with a twelve-month commitment.',
          provider: { '@id': 'https://signalstructure.ai/#organization' },
        },
        price: '497',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Signal Score Report',
          description: 'A detailed report on how AI platforms describe a business, scored against the Signal Score method. Delivered within 48 hours.',
          provider: { '@id': 'https://signalstructure.ai/#organization' },
        },
        price: '147',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Signal Watch',
          description: 'Ongoing monitoring of how AI describes a business, delivered through the buyer’s ChatGPT or Claude.',
          provider: { '@id': 'https://signalstructure.ai/#organization' },
        },
        price: '26',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Client Knowledge',
          description: 'A private knowledge connector for ChatGPT and Claude. AI answers from the buyer\'s verified business information instead of guessing.',
          provider: { '@id': 'https://signalstructure.ai/#organization' },
        },
        price: '76',
        priceCurrency: 'USD',
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
    'AI discoverability community, reports, and monitoring. Help your business get found and recommended by ChatGPT, Claude, Gemini, and Perplexity.',
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
};

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://signalstructure.ai/#homepage',
  url: 'https://signalstructure.ai',
  name: 'Signal & Structure AI | Be found. Be accurate. Be recommended.',
  description:
    'AI is recommending businesses in your industry every day. Join the community, get a Signal Score Report, or turn on Signal Watch and stop being invisible.',
  isPartOf: { '@id': 'https://signalstructure.ai/#website' },
  about: { '@id': 'https://signalstructure.ai/#organization' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.hero-headline-main', '.font-display.text-section-heading'],
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
  ],
};

export default function HomePage() {
  return (
    <main>
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

      {/* Hero */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn delay={0.1}>
            <h1 className="hero-headline-main text-white mb-6">
              AI is the biggest{' '}
              <span className="text-[1.3em] leading-none inline-block">GOSSIP</span>
              {' '}online.
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white/80 text-hero-subtext max-w-3xl mx-auto mb-4">
              It talks about you behind your back constantly, and you have no idea what it&rsquo;s saying or who&rsquo;s hearing it.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-white/60 font-body text-base max-w-2xl mx-auto mb-10">
              Find out what it&rsquo;s saying about you. Don&rsquo;t get left in the dark about your own business.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/signal-score-report" variant="primary" className="text-lg px-8 py-4">
                Get Your Signal Score
              </Button>
              <Link
                href="/signal-pulse"
                className="font-body text-white/90 hover:text-copper transition-colors text-base underline underline-offset-4 decoration-copper decoration-2"
              >
                Or run a free Signal Pulse first
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Free Signal Pulse */}
      <section className="bg-stone py-10 sm:py-12">
        <div className="max-w-content mx-auto px-6">
          <FadeIn>
            <Link
              href="/signal-pulse"
              className="block bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8">
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
                <div className="text-center sm:text-left flex-1">
                  <p className="font-display text-lg text-navy mb-1">
                    Check your signal right now, for free.
                  </p>
                  <p className="font-body text-sm text-warmgray">
                    Enter your URL and see what AI knows about your business. Takes ten seconds.
                  </p>
                </div>
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

      {/* The Shift */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel>WHAT CHANGED</SectionLabel>
              <h2 className="font-display text-section-heading text-navy mb-6">
                Google used to be the middleman. Now AI is.
              </h2>
              <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
                <p>
                  People do not scroll a page of links anymore. They ask AI a question and get one answer: a name, a reason, a recommendation.
                </p>
                <p>
                  That is a referral. It happens millions of times a day. And most businesses are invisible to it, because they were built for the old way of being found.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-navy rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-warmgray-light text-xs mb-4">ChatGPT</div>
                <div className="bg-stone rounded-lg p-4 mb-4">
                  <p className="font-body text-sm text-navy">
                    &ldquo;Who should I hire for marketing in Durham, NC?&rdquo;
                  </p>
                </div>
                <div className="bg-navy-light rounded-lg p-4 mb-4 relative">
                  <p className="font-body text-sm text-white mb-2">
                    &ldquo;Based on available information, I&rsquo;d recommend considering these options...&rdquo;
                  </p>
                  <div className="space-y-1 relative">
                    <div className="h-2 bg-white/10 rounded w-full"></div>
                    <div className="h-2 bg-white/10 rounded w-4/5"></div>
                    <div className="h-2 bg-white/10 rounded w-3/4"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-navy-light to-transparent"></div>
                </div>
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex justify-end"
                >
                  <SignalDot size={8} />
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Four ways to work with us */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-12">
            <SectionLabel>WAYS TO WORK TOGETHER</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              Two ways to work with me.
            </h2>
            <p className="text-warmgray text-lg max-w-2xl mx-auto">
              Different starting points. Same goal. Pick the one that fits you right now.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Report */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-card shadow-card p-8 h-full flex flex-col">
                <SectionLabel>THE REPORT</SectionLabel>
                <h3 className="font-display text-2xl text-navy mb-3 mt-2">See what AI is saying.</h3>
                <p className="font-body text-warmgray mb-6 leading-relaxed flex-1">
                  Your full AI discoverability scorecard. Every platform. Every gap. Every hallucination. PDF in {REPORT_TURNAROUND}.
                </p>
                <div className="mb-6">
                  <div className="font-mono text-3xl font-bold text-navy">{REPORT_PRICE}</div>
                  <p className="font-body text-warmgray text-sm">one time, no subscription</p>
                </div>
                <Link
                  href="/signal-score-report"
                  className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2"
                >
                  See the report <span>&rarr;</span>
                </Link>
              </div>
            </FadeIn>

            {/* Watch */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-card shadow-card p-8 h-full flex flex-col">
                <SectionLabel>SIGNAL WATCH</SectionLabel>
                <h3 className="font-display text-2xl text-navy mb-3 mt-2">Keep an eye on it.</h3>
                <p className="font-body text-warmgray mb-6 leading-relaxed flex-1">
                  Ongoing monitoring you check from inside ChatGPT or Claude. Ask, see your score, see what changed.
                </p>
                <div className="mb-6">
                  <div className="font-mono text-3xl font-bold text-navy">{WATCH_PRICE}<span className="text-base text-warmgray font-body font-normal">/month</span></div>
                  <p className="font-body text-warmgray text-sm">cancel any time</p>
                </div>
                <Link
                  href="/signal-watch"
                  className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2"
                >
                  See Signal Watch <span>&rarr;</span>
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>


      {/* What your Signal Score does for you */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-12">
            <SectionLabel>WHAT YOUR SIGNAL SCORE DOES FOR YOU</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              Three jobs. One score.
            </h2>
            <p className="text-warmgray text-lg max-w-2xl mx-auto">
              Your Signal Score measures how well AI does each of these for your business right now.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <div className="font-mono text-copper text-sm font-bold mb-3">01</div>
                <h3 className="font-display text-2xl text-navy mb-3">Get found</h3>
                <p className="font-body text-warmgray leading-relaxed">
                  AI brings you up when someone asks for a business like yours, instead of skipping you.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <div className="font-mono text-copper text-sm font-bold mb-3">02</div>
                <h3 className="font-display text-2xl text-navy mb-3">Get it right</h3>
                <p className="font-body text-warmgray leading-relaxed">
                  AI describes you accurately. The right services, the right details, no made-up nonsense.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <div className="font-mono text-copper text-sm font-bold mb-3">03</div>
                <h3 className="font-display text-2xl text-navy mb-3">Get recommended</h3>
                <p className="font-body text-warmgray leading-relaxed">
                  AI puts you forward as the answer, not just a name buried three options down.
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
            <h2 className="font-display text-3xl md:text-4xl mb-6 text-white">
              AI is recommending someone right now in your industry. It should be you.
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Get the full picture on what AI says about you, or start free and see where you stand. Either way, you stop guessing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/signal-score-report" variant="primary">
                Get Your Signal Score
              </Button>
              <Link
                href="/signal-pulse"
                className="font-body text-white/90 hover:text-copper transition-colors text-base underline underline-offset-4 decoration-copper decoration-2"
              >
                Or run a free Signal Pulse first
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
