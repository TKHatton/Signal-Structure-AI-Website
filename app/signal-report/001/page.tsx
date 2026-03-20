import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { COMPANY_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `The Signal Report - Issue 001 | ${COMPANY_NAME}`,
  description: 'AI is not searching for you. It is answering about you. The first issue of The Signal Report from Signal & Structure AI.',
};

export default function SignalReport001() {
  return (
    <main className="min-h-screen bg-stone pt-24 pb-16">
      {/* Header */}
      <div className="max-w-prose mx-auto px-6 mb-12 text-center">
        <FadeIn>
          <p className="text-copper font-body font-semibold text-sm tracking-widest uppercase mb-3">The Signal Report</p>
          <h1 className="text-navy text-3xl sm:text-4xl md:text-5xl mb-3">Issue 001</h1>
          <p className="text-warmgray-light text-sm font-body">Signal &amp; Structure AI</p>
        </FadeIn>
      </div>

      {/* The Signal */}
      <div className="max-w-prose mx-auto px-6 mb-10">
        <FadeIn>
          <div className="bg-white rounded-card p-8 shadow-card">
            <p className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-3">The Signal</p>
            <h2 className="font-display text-2xl sm:text-3xl text-navy mb-6">
              AI is not searching for you. It is answering about you.
            </h2>
            <div className="space-y-5 font-body text-warmgray text-base leading-relaxed">
              <p>
                There is a shift happening right now that most businesses have not noticed yet. People are not typing keywords into Google the way they used to. They are asking AI a direct question and expecting a direct answer. "Who is the best accountant in Durham?" "What company can help me with HR?" AI gives a name, a reason, and a recommendation. No list of links. No ten blue results. One answer.
              </p>
              <p>
                The businesses in those answers did not apply for that spot. They did not run ads to get there. They got recommended because the right information existed in the right format for AI to find, understand, and trust. The businesses not in those answers are not necessarily worse. They are just invisible. And most of them do not know it yet.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* One Stat */}
      <div className="max-w-prose mx-auto px-6 mb-10">
        <FadeIn>
          <div className="bg-navy rounded-card p-8 text-center shadow-card">
            <p className="font-mono font-bold text-copper text-5xl mb-2">0</p>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-sm mx-auto">
              The number of structured data signals on most small business websites. AI cannot recommend what it cannot read.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* The Games */}
      <div className="max-w-prose mx-auto px-6 mb-10">
        <FadeIn>
          <div className="bg-white rounded-card p-8 shadow-card">
            <p className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-3">Play</p>
            <h2 className="font-body font-semibold text-navy text-xl mb-4">
              Two games. One question: Can you find what is hidden?
            </h2>
            <p className="font-body text-warmgray text-base leading-relaxed mb-6">
              Every issue of The Signal Report comes with something to play. These are not filler. They are built to show you how discoverability and accuracy actually work, in a way that reading about it never could.
            </p>

            <div className="space-y-4">
              {/* Signal Search */}
              <Link
                href="/signal-report/games/signal-search"
                className="block bg-stone rounded-card p-6 hover:shadow-card transition-shadow group"
              >
                <h3 className="font-body font-semibold text-navy text-base mb-2 group-hover:text-copper transition-colors">
                  Signal Search
                </h3>
                <p className="font-body text-warmgray text-sm leading-relaxed mb-3">
                  8 words are hidden in a grid, just like your business might be hidden from AI. Find them all. If you get stuck, hit "Boost My Signal" and watch what happens.
                </p>
                <span className="font-body font-semibold text-copper text-sm">
                  Play now &rarr;
                </span>
              </Link>

              {/* Signal Match */}
              <Link
                href="/signal-report/games/signal-match"
                className="block bg-stone rounded-card p-6 hover:shadow-card transition-shadow group"
              >
                <h3 className="font-body font-semibold text-navy text-base mb-2 group-hover:text-copper transition-colors">
                  Signal Match
                </h3>
                <p className="font-body text-warmgray text-sm leading-relaxed mb-3">
                  Flip cards to match businesses with what AI says about them. Some responses are accurate. Some are completely wrong. Can you tell the difference?
                </p>
                <span className="font-body font-semibold text-copper text-sm">
                  Play now &rarr;
                </span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Overheard in AI */}
      <div className="max-w-prose mx-auto px-6 mb-10">
        <FadeIn>
          <div className="bg-white rounded-card p-8 shadow-card">
            <p className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-4">Overheard in AI</p>
            <div className="border-l-[3px] border-copper pl-5">
              <p className="font-body text-navy text-base italic leading-relaxed mb-3">
                "We asked Claude about a local bakery in Durham. It described them as an automotive repair shop specializing in tire rotation."
              </p>
              <p className="font-body text-warmgray-light text-sm">
                This is what happens when AI does not have the right information to work with. It fills in the blanks on its own.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* The Question */}
      <div className="max-w-prose mx-auto px-6 mb-10">
        <FadeIn>
          <div className="bg-white rounded-card p-8 shadow-card">
            <p className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-4">The Question</p>
            <p className="font-display text-navy text-xl sm:text-2xl leading-snug">
              If a potential customer asked ChatGPT about your business right now, what do you think it would say?
            </p>
          </div>
        </FadeIn>
      </div>

      {/* CTA */}
      <div className="max-w-prose mx-auto px-6 mb-10">
        <FadeIn>
          <div className="bg-navy rounded-card p-8 text-center shadow-card">
            <p className="font-body text-white/70 text-base leading-relaxed mb-6">
              Find out for real. Run a free Signal Pulse check on your website.
            </p>
            <Link
              href="/signal-pulse"
              className="inline-block bg-copper text-white px-8 py-3.5 rounded-button font-body font-semibold text-base hover:bg-copper-light transition-colors shadow-button"
            >
              Check Your Signal
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <div className="max-w-prose mx-auto px-6 text-center">
        <p className="text-warmgray-light text-sm leading-relaxed">
          The Signal Report is a bi-weekly newsletter from Signal &amp; Structure AI.
          <br />
          <Link href="/resources" className="text-copper hover:text-copper-dark transition-colors">
            Subscribe for the next issue
          </Link>
        </p>
      </div>
    </main>
  );
}
