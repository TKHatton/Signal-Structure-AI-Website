import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { COMPANY_NAME } from '@/lib/constants';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: `The Signal Report | ${COMPANY_NAME}`,
  description: 'A bi-weekly newsletter about AI discoverability and accuracy. Games, insights, case studies, and one question that changes how you think about your online presence.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function SignalReportPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-navy text-center">
        <div className="max-w-content mx-auto">
          <FadeIn>
            <SectionLabel>Newsletter</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              The Signal Report
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              A bi-weekly newsletter about AI discoverability and accuracy.
              Games you can play, insights you can use, and one question each
              issue that changes how you think about your online presence.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm
                buttonText="Subscribe"
                placeholder="you@yourbusiness.com"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-stone">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <h2 className="font-display text-2xl sm:text-3xl text-navy mb-8 text-center">
              What every issue includes
            </h2>
            <div className="space-y-4">
              {[
                {
                  label: 'The Signal',
                  title: 'One key insight',
                  description: 'How AI discoverability is shifting for businesses like yours. What changed, what it means, and why it matters now.',
                },
                {
                  label: 'Play',
                  title: 'An interactive game',
                  description: 'Word searches, memory games, fact-or-fiction challenges. All tied to discoverability and accuracy. All playable right in your browser.',
                },
                {
                  label: 'One Stat',
                  title: 'A number that matters',
                  description: 'One concrete data point about AI visibility. No fluff, just a number and what it means for your business.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-card p-6 shadow-card">
                  <p className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-2">{item.label}</p>
                  <h3 className="font-body font-semibold text-navy text-lg mb-2">{item.title}</h3>
                  <p className="font-body text-warmgray leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-warmgray-light text-sm text-center mt-6">
              Plus rotating features: case studies, "Overheard in AI" quotes, thought-provoking questions, and reply prompts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Preview: Issue 001 */}
      <section className="section-padding bg-white">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>Preview</SectionLabel>
            <h2 className="font-display text-2xl sm:text-3xl text-navy mb-8 text-center">
              Here is what Issue 001 looks like.
            </h2>

            {/* Preview cards */}
            <div className="space-y-6">
              {/* The Signal preview */}
              <div className="bg-stone rounded-card p-6">
                <p className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-2">The Signal</p>
                <h3 className="font-body font-semibold text-navy text-lg mb-3">
                  AI is not searching for you. It is answering about you.
                </h3>
                <p className="font-body text-warmgray text-sm leading-relaxed">
                  People are not typing keywords into Google the way they used to. They are asking AI a direct question and expecting a direct answer. AI gives a name, a reason, and a recommendation. Most businesses have no idea whether they are in that answer...
                </p>
                <Link href="/signal-report/001" className="inline-block mt-3 font-body font-semibold text-copper text-sm hover:text-copper-dark transition-colors">
                  Read the full issue &rarr;
                </Link>
              </div>

              {/* Game preview */}
              <div className="bg-stone rounded-card p-6">
                <p className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-2">Play</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/signal-report/games/signal-search" className="block bg-white rounded-card p-4 hover:shadow-card transition-shadow group">
                    <h4 className="font-body font-semibold text-navy text-sm mb-1 group-hover:text-copper transition-colors">Signal Search</h4>
                    <p className="font-body text-warmgray text-xs leading-relaxed">Find 8 hidden words in a grid. Use "Boost My Signal" when you are stuck.</p>
                  </Link>
                  <Link href="/signal-report/games/signal-match" className="block bg-white rounded-card p-4 hover:shadow-card transition-shadow group">
                    <h4 className="font-body font-semibold text-navy text-sm mb-1 group-hover:text-copper transition-colors">Signal Match</h4>
                    <p className="font-body text-warmgray text-xs leading-relaxed">Match businesses to their AI responses. Some are accurate. Some are wrong.</p>
                  </Link>
                </div>
              </div>

              {/* Stat preview */}
              <div className="bg-navy rounded-card p-6 text-center">
                <p className="font-mono font-bold text-copper text-4xl mb-2">0</p>
                <p className="font-body text-white/60 text-sm">
                  The number of structured data signals on most small business websites.
                </p>
              </div>

              {/* Overheard preview */}
              <div className="bg-stone rounded-card p-6">
                <p className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-3">Overheard in AI</p>
                <div className="border-l-[3px] border-copper pl-4">
                  <p className="font-body text-navy text-sm italic leading-relaxed">
                    "We asked Claude about a local bakery in Durham. It described them as an automotive repair shop specializing in tire rotation."
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section-padding bg-stone">
        <div className="max-w-prose mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-2xl sm:text-3xl text-navy mb-4">
              Get The Signal Report in your inbox.
            </h2>
            <p className="font-body text-warmgray text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Bi-weekly. No spam. Every issue has something to play, something to learn, and one question worth thinking about.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm
                buttonText="Subscribe"
                placeholder="you@yourbusiness.com"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Archive */}
      <section className="section-padding bg-white">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <h2 className="font-display text-2xl text-navy mb-6 text-center">Past Issues</h2>
            <div className="space-y-3">
              <Link href="/signal-report/001" className="block bg-stone rounded-card p-5 hover:shadow-card transition-shadow group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body font-semibold text-navy text-sm group-hover:text-copper transition-colors">Issue 001</p>
                    <p className="font-body text-warmgray text-xs">AI is not searching for you. It is answering about you.</p>
                  </div>
                  <span className="font-body text-copper text-sm">&rarr;</span>
                </div>
              </Link>
              <Link href="/signal-report/002" className="block bg-stone rounded-card p-5 hover:shadow-card transition-shadow group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body font-semibold text-navy text-sm group-hover:text-copper transition-colors">Issue 002 &middot; April 2026</p>
                    <p className="font-body text-warmgray text-xs">AI does not fact-check itself. That is your problem now.</p>
                  </div>
                  <span className="font-body text-copper text-sm">&rarr;</span>
                </div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
