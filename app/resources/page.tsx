import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import ChecklistForm from '@/components/ChecklistForm';
import SignalDot from '@/components/SignalDot';
import { BOOKING_URL, COMPANY_NAME } from '@/lib/constants';

export const metadata = {
  title: 'Resources | Signal & Structure AI',
  description:
    'Free AI visibility checklist, The AI Discoverability Playbook ebook, and The Signal Report Monthly newsletter. Tools to understand your AI presence.',
};

export default function ResourcesPage() {
  return (
    <main>
      {/* Section 1: Page Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">RESOURCES</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Tools and insights to help you understand how AI sees your
              business.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Signal Pulse Checker */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Link
              href="/signal-pulse"
              className="block bg-navy rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative p-8 sm:p-12">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.03,
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-copper/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-copper"
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
                    <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                      <SignalDot size={6} />
                      <span className="font-body text-xs font-medium uppercase tracking-[0.08em] text-white/60">
                        Free Tool
                      </span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl text-white mb-2">
                      Signal Pulse
                    </h2>
                    <p className="font-body text-white/70 mb-1">
                      A quick vital sign check for your online presence.
                    </p>
                    <p className="font-body text-sm text-white/50">
                      Enter your URL and find out if AI systems can see your business. Free. Instant results.
                    </p>
                  </div>
                  {/* Arrow */}
                  <svg
                    className="w-6 h-6 text-copper flex-shrink-0 hidden sm:block group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Free Lead Magnet */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel>FREE DOWNLOAD</SectionLabel>
                <h2 className="font-display text-section-heading text-navy mb-4">
                  Is AI Ignoring Your Business?
                </h2>
                <p className="font-body text-lg text-warmgray mb-4">
                  A 10-question checklist you can run in 5 minutes. Ask real AI
                  platforms real questions about your business and find out
                  whether they know you exist, get your information right, or
                  have no idea who you are.
                </p>
                <p className="font-body text-warmgray mb-6">
                  Most business owners have never checked what AI says about
                  them. This checklist changes that. No technical skills
                  required. Just an honest look at where you stand.
                </p>
                <div className="flex items-center gap-2 text-sm text-warmgray mb-2">
                  <svg
                    className="w-4 h-4 text-copper"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>10 questions to ask any AI platform</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-warmgray mb-2">
                  <svg
                    className="w-4 h-4 text-copper"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Score your results instantly</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-warmgray mb-6">
                  <svg
                    className="w-4 h-4 text-copper"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Know exactly where you stand in under 5 minutes</span>
                </div>
              </div>

              {/* Checklist Signup Form */}
              <div className="bg-stone-dark p-8 rounded-lg border border-stone-dark">
                <ChecklistForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 3: Paid Ebook */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Ebook visual placeholder */}
              <div className="bg-navy p-12 rounded-lg text-center order-2 lg:order-1">
                <div className="inline-block">
                  <p className="font-body text-copper text-sm tracking-widest uppercase mb-3">
                    Ebook
                  </p>
                  <h3 className="font-display text-3xl text-white mb-3 max-w-xs">
                    The Invisible Shift
                  </h3>
                  <p className="font-body text-white/70 text-sm mb-6">
                    How AI Changed Who Gets Found
                  </p>
                  <div className="w-16 h-0.5 bg-copper mx-auto mb-6" />
                  <p className="font-body text-white/50 text-xs">
                    By Lenise Kenney
                  </p>
                  <p className="font-body text-white/50 text-xs">
                    Signal & Structure AI
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <SectionLabel>COMING SOON</SectionLabel>
                <h2 className="font-display text-section-heading text-navy mb-4">
                  The Invisible Shift
                </h2>
                <p className="font-body text-lg text-warmgray mb-4">
                  A deeper look at how AI changed who gets found online and what
                  it means for your business. This is not a technical manual. It
                  is a strategic guide to understanding the landscape that is
                  reshaping how customers discover businesses.
                </p>
                <p className="font-body text-warmgray mb-6">
                  Inside you will find real examples of what AI gets wrong, why
                  traditional marketing no longer covers it, what
                  &ldquo;discoverable&rdquo; actually looks like, and how to
                  think about measuring your AI presence. Written for business
                  owners and leaders, not developers.
                </p>
                <div className="flex items-center gap-2 text-sm text-warmgray mb-2">
                  <svg
                    className="w-4 h-4 text-copper"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>8 chapters on the new AI discovery landscape</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-warmgray mb-2">
                  <svg
                    className="w-4 h-4 text-copper"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Real examples of AI errors affecting businesses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-warmgray mb-6">
                  <svg
                    className="w-4 h-4 text-copper"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Includes the free AI Visibility Checklist in the appendix
                  </span>
                </div>
                <p className="font-body text-navy font-semibold mb-4">
                  Available soon. Join the newsletter to be first to know.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: Newsletter */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionLabel>NEWSLETTER</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              The Signal Report Monthly
            </h2>
            <p className="font-body text-lg text-warmgray mb-4 max-w-2xl mx-auto">
              One email per month. AI visibility tips, featured businesses from
              our network, and insights on the changing landscape of how people
              find services online.
            </p>
            <p className="font-body text-warmgray mb-8 max-w-2xl mx-auto">
              We spotlight businesses that are working to become more
              discoverable. If you are on that journey too, this is your
              community.
            </p>
            <form
              className="max-w-md mx-auto flex gap-3"
              action="https://signalstructure.ai/api/subscribe"
              method="POST"
            >
              <input type="hidden" name="source" value="newsletter" />
              <input
                type="email"
                name="email"
                required
                placeholder="you@yourbusiness.com"
                className="flex-1 px-4 py-3 rounded-lg border border-warmgray/30 font-body text-navy focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-copper text-white font-body font-semibold py-3 px-6 rounded-lg hover:bg-copper/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-warmgray mt-3">
              No spam. Unsubscribe anytime. You will also receive the free AI
              Visibility Checklist.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-4 text-white">
              Want answers now?
            </h2>
            <p className="text-white/70 text-hero-subtext mb-8">
              Skip the checklist and get a full Signal Score in 30 minutes. We
              test your business on live AI platforms and show you exactly what
              they say.
            </p>
            <Button href={BOOKING_URL} variant="primary" className="mb-4">
              Book a Signal Check
            </Button>
            <p className="text-white/70 text-sm">
              No cost. No pressure. Just clarity.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
