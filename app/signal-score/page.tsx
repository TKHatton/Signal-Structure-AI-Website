import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { COMPANY_NAME, EMAIL } from '@/lib/constants';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: `Signal Score Session | ${COMPANY_NAME}`,
  description: 'Get your full AI visibility and accuracy report. Find out what AI platforms say about your business, what they get wrong, and what they cannot find. Opening soon.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/signal-score',
  },
};

export default function SignalScorePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-navy text-center">
        <div className="max-w-content mx-auto">
          <FadeIn>
            <SectionLabel>Coming Soon</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              Signal Score Session
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
              Your full AI visibility and accuracy report. We test your business
              across major AI platforms and show you exactly what they know,
              what they get wrong, and what they cannot find at all.
            </p>
            <p className="font-body text-copper text-lg font-semibold mb-8">
              $97 &middot; Includes a 30-minute results walkthrough
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-stone">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <h2 className="font-display text-2xl sm:text-3xl text-navy mb-8 text-center">
              What you receive
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Your Signal Score Report',
                  description: 'A detailed breakdown of your AI visibility and accuracy across major platforms. You will see exactly where you stand and what needs attention.',
                },
                {
                  title: '30-Minute Results Walkthrough',
                  description: 'A live session to walk through your report, answer your questions, and make sure you understand every finding.',
                },
                {
                  title: 'Clear Next Steps',
                  description: 'A prioritized view of what matters most for your business. No jargon, no pressure. Just clarity on where to go from here.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-card p-6 shadow-card">
                  <h3 className="font-body font-semibold text-navy text-lg mb-2">{item.title}</h3>
                  <p className="font-body text-warmgray leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Early Access */}
      <section className="section-padding bg-white">
        <div className="max-w-prose mx-auto text-center">
          <FadeIn>
            <SectionLabel>Be First</SectionLabel>
            <h2 className="font-display text-2xl sm:text-3xl text-navy mb-4">
              Signal Score sessions are opening soon.
            </h2>
            <p className="font-body text-warmgray text-lg max-w-xl mx-auto mb-3 leading-relaxed">
              Join the early access list and get 15% off your Signal Score Session
              when we go live. You will receive a one-time code valid for 30 days.
            </p>
            <p className="font-body text-warmgray-light text-sm mb-8">
              No spam. Just one email when sessions open.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm
                buttonText="Join Early Access"
                placeholder="Enter your email"
                source="signal-score-early-access"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Try Free First */}
      <section className="section-padding bg-stone">
        <div className="max-w-prose mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-2xl sm:text-3xl text-navy mb-4">
              Not ready to commit? Try the free tools first.
            </h2>
            <p className="font-body text-warmgray text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Run a quick Signal Pulse check on your website or take the Signal Quiz.
              Both are free, take less than a minute, and give you an instant read
              on where you stand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signal-pulse"
                className="inline-block px-6 py-3 bg-copper text-white font-body font-medium rounded-button shadow-button hover:shadow-button-hover hover:bg-copper-light transition-all"
              >
                Run Signal Pulse
              </Link>
              <Link
                href="/signal-pulse/quiz"
                className="inline-block px-6 py-3 bg-navy text-white font-body font-medium rounded-button shadow-button hover:shadow-button-hover hover:bg-navy-light transition-all"
              >
                Take the Quiz
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-white">
        <div className="max-w-prose mx-auto text-center">
          <FadeIn>
            <p className="font-body text-warmgray text-base leading-relaxed">
              Questions? Reach out at{' '}
              <a href={`mailto:${EMAIL}`} className="text-copper hover:text-copper-dark transition-colors">
                {EMAIL}
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
