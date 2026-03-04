'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import SignalScoreDemo from '@/components/SignalScoreDemo';
import SignalDot from '@/components/SignalDot';
import { BOOKING_URL } from '@/lib/constants';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn delay={0.1}>
            <h1 className="hero-headline-main text-white mb-8">
              People stopped Googling and started asking AI. When someone asks
              "Who should I hire for this?" AI gives a direct answer. If it does
              not know your business exists, or gets the details wrong, that
              referral goes to someone else.
            </h1>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col items-center gap-4">
              <Button href={BOOKING_URL} variant="primary" className="text-lg px-8 py-4">
                Book a Signal Check
              </Button>
              <p className="text-white/40 text-sm">
                30 minutes. See exactly how AI describes your business today.
              </p>
            </div>
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
                  Now they open ChatGPT, Claude, Perplexity, or Gemini and ask a full
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

      {/* Section 3: Service Cards */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-12">
            <SectionLabel>SERVICES</SectionLabel>
            <h2 className="font-display text-section-heading text-navy">
              Three ways to get into the AI referral conversation.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-stretch">
            <FadeIn delay={0.1}>
              <ServiceCard
                title="AI Business Profile"
                description="AI learns who you are and what you actually do. Your starting point for showing up correctly."
                price="Starting at $750"
                features={[
                  'Structured business information for AI',
                  'Custom AI assistant on your data',
                  'Before and after Signal Score™',
                ]}
                ctaText="View Details"
                ctaHref="/services"
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <ServiceCard
                badge="MOST POPULAR"
                title="AI Knowledge System"
                description="AI pulls from your real information instead of guessing. A complete knowledge system AI references directly."
                price="Starting at $3,000"
                features={[
                  'Full knowledge mapping and structure',
                  'Multi-platform AI formatting',
                  'Detailed Signal Score™ by category',
                ]}
                ctaText="Build Your System"
                ctaHref="/services"
                featured
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <ServiceCard
                title="AI Presence Management"
                description="AI keeps referring you correctly as your business and AI platforms change. Ongoing monitoring and optimization."
                price="Starting at $1,500/mo"
                priceNote="3 month minimum"
                features={[
                  'Monthly accuracy checks and updates',
                  'Quarterly deep audit and strategy',
                  'AI referral tracking and reporting',
                ]}
                ctaText="Learn More"
                ctaHref="/services"
              />
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="text-center">
            <Link
              href="/services"
              className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2"
            >
              See All Services and Pricing
              <span>→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: Signal Score Demo */}
      <section className="relative bg-navy text-white section-padding-sm">
        <GridTexture />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn className="text-center mb-8">
            <SectionLabel variant="light">SIGNAL SCORE</SectionLabel>
            <h2 className="font-display text-section-heading mb-4">
              We do not just fix it. We prove it.
            </h2>
            <p className="text-white/70 text-hero-subtext max-w-3xl mx-auto">
              Every engagement starts with a baseline and ends with proof. Our
              Signal Score™ measures how accurately and consistently AI represents
              your business across every major platform.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <SignalScoreDemo before={2.8} after={7.4} />
          </FadeIn>

          {/* Three stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <FadeIn delay={0.3}>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-copper text-xs font-body font-semibold uppercase tracking-wider mb-2">
                  ACCURACY
                </div>
                <div className="font-mono text-4xl font-bold text-white mb-1">+4.6</div>
                <div className="text-white/50 text-sm">avg improvement</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-copper text-xs font-body font-semibold uppercase tracking-wider mb-2">
                  DISCOVERABILITY
                </div>
                <div className="font-mono text-4xl font-bold text-white mb-1">1 → 4</div>
                <div className="text-white/50 text-sm">platforms</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-copper text-xs font-body font-semibold uppercase tracking-wider mb-2">
                  HALLUCINATION
                </div>
                <div className="font-mono text-4xl font-bold text-white mb-1">82% → 12%</div>
                <div className="text-white/50 text-sm">reduction</div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6} className="text-center mt-8">
            <Button href={BOOKING_URL} variant="primary">
              See How Your Business Scores
            </Button>
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
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              AI is giving referrals in your space every day. Make sure yours is
              one of them.
            </h2>
            <Button href={BOOKING_URL} variant="primary" className="mb-4">
              Book a Signal Check
            </Button>
            <p className="text-white/40 text-sm">
              30 minutes. No pressure. Just clarity.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
