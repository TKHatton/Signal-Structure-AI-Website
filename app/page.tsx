'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import {
  BOOK_AMAZON_URL,
  BOOK_PRICE,
  BOOK_SUBTITLE,
  BOOK_TITLE,
  CHATGPT_ADVISOR_URL,
  REPORT_CHECKOUT_URL,
  REPORT_PRICE,
  REPORT_TURNAROUND,
  WATCH_PRICE,
} from '@/lib/constants';
import Link from 'next/link';

const EVENT_HIDE_AFTER = new Date('2026-07-11T00:00:00-04:00');

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
    'Signal & Structure AI helps business owners get found, accurately represented, and recommended by AI platforms like ChatGPT, Claude, Gemini, and Perplexity, through on-demand Signal Score reports, ongoing monitoring, and a free AI visibility check.',
  foundingDate: '2025-09',
  founder: { '@id': 'https://signalstructure.ai/about#lenise-kenney' },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 1,
  },
  sameAs: [
    'https://www.linkedin.com/company/signal-structure-ai',
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
    'AI presence monitoring',
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
  priceRange: '$26 - $147',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Credit Card, Invoice',
  areaServed: [{ '@type': 'Country', name: 'United States' }],
  sameAs: [
    'https://www.linkedin.com/company/signal-structure-ai',
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
          name: 'Signal Score Report',
          description: 'A detailed report on how AI platforms describe a business, scored against the Signal Score method. Delivered within minutes.',
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
          name: 'Signal Pulse',
          description: 'A free quick check of whether AI platforms can find a business and how they describe it.',
          provider: { '@id': 'https://signalstructure.ai/#organization' },
        },
        price: '0',
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
    'AI discoverability reports, monitoring, and a free check. Help your business get found and recommended by ChatGPT, Claude, Gemini, and Perplexity.',
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
};

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://signalstructure.ai/#homepage',
  url: 'https://signalstructure.ai',
  name: 'Signal & Structure AI | Be found. Be accurate. Be recommended.',
  description:
    'AI is recommending businesses in your industry every day. Get a Signal Score Report or turn on Signal Watch and stop being invisible.',
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
  const [showEvent, setShowEvent] = useState(true);
  useEffect(() => {
    if (new Date() >= EVENT_HIDE_AFTER) setShowEvent(false);
  }, []);

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
              <Button href={REPORT_CHECKOUT_URL} variant="primary" className="text-lg px-8 py-4">
                Get Your Signal Score
              </Button>
              <Link
                href="/prompt-pack"
                className="font-body text-white/90 hover:text-copper transition-colors text-base underline underline-offset-4 decoration-copper decoration-2"
              >
                Or get the free Prompt Pack first
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming event — auto-hides after July 10 */}
      {showEvent && (
        <section className="bg-stone-dark py-8 sm:py-10">
          <div className="max-w-content mx-auto px-6">
            <FadeIn>
              <a
                href="https://bit.ly/why-ai-lies"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group"
              >
                <div className="flex flex-col sm:flex-row items-stretch">
                  <div className="relative w-full sm:w-64 md:w-80 aspect-[16/9] sm:aspect-auto flex-shrink-0 bg-navy">
                    <Image
                      src="/images/why-ai-lies-banner.png"
                      alt="Why AI Lies — live Zoom class with Lenise Kenney"
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                    <div className="font-mono text-copper text-xs font-bold tracking-widest mb-2">
                      LIVE ZOOM CLASS · THURSDAY JULY 9 · 9:00 AM ET
                    </div>
                    <p className="font-display text-xl sm:text-2xl text-navy mb-2 leading-snug">
                      Come find out what AI is saying about you.
                    </p>
                    <p className="font-body text-sm text-warmgray mb-4">
                      One hour with Lenise on why AI gets your business wrong and how to fix it. Free to attend.
                    </p>
                    <span className="font-body text-copper group-hover:text-copper-dark transition-colors inline-flex items-center gap-2 text-sm font-semibold">
                      Reserve your spot on Eventbrite <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              </a>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Free Prompt Pack */}
      <section className="bg-stone py-10 sm:py-12">
        <div className="max-w-content mx-auto px-6">
          <FadeIn>
            <Link
              href="/prompt-pack"
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
                      d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                    />
                  </svg>
                </div>
                <div className="text-center sm:text-left flex-1">
                  <p className="font-display text-lg text-navy mb-1">
                    Download the free AI Visibility Prompt Pack.
                  </p>
                  <p className="font-body text-sm text-warmgray">
                    Ten questions to run through ChatGPT, Claude, Perplexity, Gemini, and Copilot. See exactly what a buyer sees.
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


      {/* Live in ChatGPT */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionLabel variant="light">LIVE IN CHATGPT</SectionLabel>
            <h2 className="font-display text-section-heading text-white mt-2 mb-4">
              Questions about AI visibility? Ask Signal Advisor.
            </h2>
            <p className="font-body text-lg text-white/80 leading-relaxed mb-8">
              Signal Advisor is free inside ChatGPT. Ask it, in plain English, how AI finds businesses, what schema markup does, and what makes a business easy for AI to recommend. It is approved and published in OpenAI&apos;s ChatGPT directory. Want your own business in there? That&apos;s MCP Setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={CHATGPT_ADVISOR_URL} variant="primary">
                Try Signal Advisor in ChatGPT
              </Button>
              <Button href="/mcp-setup" variant="outline">
                Get your business in ChatGPT
              </Button>
            </div>
          </FadeIn>
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

      {/* The book */}
      <section className="section-padding">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,260px)_1fr] gap-10 lg:gap-14 items-center">
            <FadeIn>
              <Link href="/book" className="block group">
                <Image
                  src="/images/nwom-cover.jpg"
                  alt={`${BOOK_TITLE}: ${BOOK_SUBTITLE}, by Lenise Kenney`}
                  width={1024}
                  height={1536}
                  className="w-full max-w-[220px] mx-auto lg:max-w-none rounded-lg shadow-card group-hover:shadow-card-hover transition-shadow duration-300"
                />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <SectionLabel>THE BOOK</SectionLabel>
              <h2 className="font-display text-section-heading text-navy mb-4 mt-2">
                None of this is the first time.
              </h2>
              <div className="font-body text-lg text-warmgray leading-relaxed space-y-4 mb-8">
                <p>
                  Word of mouth has changed form six times. Spoken, written, printed,
                  promoted, reviewed, searched. Every time, the businesses that moved early
                  came out fine. AI is the seventh turn, not the end of the road.
                </p>
                <p>
                  I wrote {BOOK_TITLE} to show where this pattern comes from, why the
                  current shift feels new when it is not, and what to do about it before
                  the decision gets made without you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button href="/book" variant="secondary">
                  Read about the book
                </Button>
                <a
                  href={BOOK_AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2"
                >
                  Get it on Amazon, {BOOK_PRICE} <span>&rarr;</span>
                </a>
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
              <Button href={REPORT_CHECKOUT_URL} variant="primary">
                Get Your Signal Score
              </Button>
              <Link
                href="/prompt-pack"
                className="font-body text-white/90 hover:text-copper transition-colors text-base underline underline-offset-4 decoration-copper decoration-2"
              >
                Or get the free Prompt Pack first
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
