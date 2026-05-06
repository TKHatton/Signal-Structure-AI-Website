import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { COMPANY_NAME, EMAIL } from '@/lib/constants';

const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/bJedR934sh2TbV367k87K05';

export const metadata: Metadata = {
  title: `Signal Score Session | ${COMPANY_NAME}`,
  description: 'Get your full AI visibility and accuracy report. Find out what AI platforms say about your business, what they get wrong, and what they cannot find.',
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
            <SectionLabel>Available Now</SectionLabel>
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
            <a
              href={STRIPE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-copper text-white font-body font-semibold rounded-button shadow-button hover:shadow-button-hover hover:bg-copper-light transition-all"
            >
              Get Your Signal Score
            </a>
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

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="max-w-prose mx-auto text-center">
          <FadeIn>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="font-display text-2xl sm:text-3xl text-navy mb-8">
              From purchase to delivered report.
            </h2>
            <ol className="font-body text-warmgray text-lg max-w-xl mx-auto mb-10 leading-relaxed text-left space-y-4">
              <li>
                <strong className="text-navy">1. Click the button.</strong>{' '}
                Pay $97 securely through Stripe.
              </li>
              <li>
                <strong className="text-navy">2. Reply to your receipt</strong>{' '}
                with your business name and website URL.
              </li>
              <li>
                <strong className="text-navy">3. Get your report</strong>{' '}
                in your inbox within 48 hours.
              </li>
              <li>
                <strong className="text-navy">4. Schedule your walkthrough.</strong>{' '}
                Use the link in your delivery email to book your 30-minute
                results call.
              </li>
            </ol>
            <a
              href={STRIPE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-copper text-white font-body font-semibold rounded-button shadow-button hover:shadow-button-hover hover:bg-copper-light transition-all"
            >
              Get Your Signal Score
            </a>
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
