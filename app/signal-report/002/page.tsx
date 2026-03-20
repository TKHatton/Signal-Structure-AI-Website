import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { COMPANY_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `The Signal Report - Issue 002 | ${COMPANY_NAME}`,
  description: 'AI does not fact-check itself. That is your problem now. Issue 002 of The Signal Report from Signal & Structure AI.',
};

export default function SignalReport002() {
  return (
    <main className="min-h-screen bg-stone pt-24 pb-16">
      {/* Header */}
      <div className="max-w-prose mx-auto px-6 mb-12 text-center">
        <FadeIn>
          <p className="text-copper font-body font-semibold text-sm tracking-widest uppercase mb-3">The Signal Report</p>
          <h1 className="text-navy text-3xl sm:text-4xl md:text-5xl mb-3">Issue 002</h1>
          <p className="text-warmgray-light text-sm font-body">Signal &amp; Structure AI &middot; April 2026</p>
        </FadeIn>
      </div>

      {/* The Signal */}
      <div className="max-w-prose mx-auto px-6 mb-10">
        <FadeIn>
          <div className="bg-white rounded-card p-8 shadow-card">
            <p className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-3">The Signal</p>
            <h2 className="font-display text-2xl sm:text-3xl text-navy mb-6">
              AI does not fact-check itself. That is your problem now.
            </h2>
            <div className="space-y-5 font-body text-warmgray text-base leading-relaxed">
              <p>
                When ChatGPT tells someone your business closed in 2022, it does not pause and think "let me verify that." It does not check your website. It does not call your office. It delivers the answer with the same confident tone it uses when it gets everything right. And the person asking has no reason to doubt it.
              </p>
              <p>
                This is the part of AI that most business owners have not caught up with yet. It is not that AI is malicious. It is that AI is confidently incomplete. It works with whatever information it can find, and when it cannot find enough, it fills in the gaps with whatever seems plausible. A bakery becomes an auto shop. An open business becomes permanently closed. A Charlotte company gets placed in Atlanta.
              </p>
              <p>
                The fix is not to wait for AI to get smarter. The fix is to give AI something reliable to work with. The businesses getting accurate AI responses right now are not the biggest or the most well-known. They are the ones that made their information structured, current, and findable.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* One Stat */}
      <div className="max-w-prose mx-auto px-6 mb-10">
        <FadeIn>
          <div className="bg-navy rounded-card p-8 text-center shadow-card">
            <p className="font-mono font-bold text-copper text-5xl mb-2">4 out of 5</p>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-sm mx-auto">
              businesses we tested had at least one significant inaccuracy in how AI describes them. Wrong location, wrong services, wrong status. All delivered with full confidence.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* The Game */}
      <div className="max-w-prose mx-auto px-6 mb-10">
        <FadeIn>
          <div className="bg-white rounded-card p-8 shadow-card">
            <p className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-3">Play</p>
            <h2 className="font-body font-semibold text-navy text-xl mb-4">
              Can you spot the truth?
            </h2>
            <p className="font-body text-warmgray text-base leading-relaxed mb-6">
              Eight statements about real businesses and their AI presence. Some actually happened. Some are made up. You decide which is which. It is harder than you think.
            </p>

            <Link
              href="/signal-report/games/fact-or-fiction"
              className="block bg-stone rounded-card p-6 hover:shadow-card transition-shadow group"
            >
              <h3 className="font-body font-semibold text-navy text-base mb-2 group-hover:text-copper transition-colors">
                Fact or Fiction
              </h3>
              <p className="font-body text-warmgray text-sm leading-relaxed mb-3">
                Read each statement and decide: did this really happen, or is it made up? Tap your answer and the card reveals the truth. 8 statements, and the line between fact and fiction is thinner than you expect.
              </p>
              <span className="font-body font-semibold text-copper text-sm">
                Play now &rarr;
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Signal Spotlight (Case Study) */}
      <div className="max-w-prose mx-auto px-6 mb-10">
        <FadeIn>
          <div className="bg-white rounded-card p-8 shadow-card">
            <p className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-4">Signal Spotlight</p>
            <h3 className="font-body font-semibold text-navy text-lg mb-4">
              SHE IS AI: Building the world's largest female-led AI ecosystem.
            </h3>
            <div className="space-y-4 font-body text-warmgray text-base leading-relaxed">
              <p>
                SHE IS AI is a women-led global AI ecosystem operating across 28 countries. They build pathways for women and underrepresented leaders to learn and lead in artificial intelligence through education, consulting, and their digital magazine. Their mission: build one million AI leaders by 2030.
              </p>
              <p>
                When we tested their AI presence across major platforms, we found something that many purpose-driven organizations face. The work they are doing is significant and award-winning (Global Recognition Award 2025, Stevie Award for Startup of the Year), but AI platforms had gaps in how they described the organization. Some details were outdated. Some were incomplete. The depth of their global impact was not reflected in what AI was telling people who asked about them.
              </p>
              <p>
                This is common for organizations doing innovative work. AI has not caught up with what they actually do because the structured information AI needs to work with does not match the scale of their real-world presence. The recognition is there. The global programs are there. The AI representation is where the gap lives.
              </p>
            </div>
            <div className="mt-6 bg-stone rounded-card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-warmgray-light text-xs uppercase tracking-wider font-semibold mb-1">Organization</p>
                  <p className="font-body font-bold text-navy text-sm">SHE IS AI</p>
                </div>
                <div className="text-center">
                  <p className="font-body text-warmgray-light text-xs uppercase tracking-wider font-semibold mb-1">Global Reach</p>
                  <p className="font-mono font-bold text-navy text-sm">28+ countries</p>
                </div>
                <div className="text-right">
                  <p className="font-body text-warmgray-light text-xs uppercase tracking-wider font-semibold mb-1">Website</p>
                  <a href="https://sheisai.ai" target="_blank" rel="noopener noreferrer" className="font-body font-semibold text-copper text-sm hover:text-copper-dark transition-colors">sheisai.ai</a>
                </div>
              </div>
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
              If AI is wrong about your business today, and you do nothing, what will it be saying about you in a year?
            </p>
          </div>
        </FadeIn>
      </div>

      {/* CTA */}
      <div className="max-w-prose mx-auto px-6 mb-10">
        <FadeIn>
          <div className="bg-navy rounded-card p-8 text-center shadow-card">
            <p className="font-body text-white/70 text-base leading-relaxed mb-6">
              Find out what AI is saying about your business right now. Free, takes less than a minute.
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
