import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import { EMAIL, TALK } from '@/lib/constants';

export const metadata = {
  title: 'Speaking | Signal & Structure AI',
  description: 'Lenise Kenney speaks to teams, communities, and organizations about how AI is reshaping the way businesses get found.',
  robots: {
    index: false,
    follow: false,
  },
};

const topics = [
  {
    title: 'How AI decides who to recommend',
    body: 'People used to find businesses through search. Now they ask ChatGPT, Gemini, and Claude a question and get a single answer. This talk walks through what changed, why it matters, and how AI actually picks who it names.',
  },
  {
    title: 'What AI is saying about you right now',
    body: 'A live, plain-language look at how AI describes real businesses, including the hallucinations and gaps most owners never see. Eye-opening, practical, and specific to the room.',
  },
  {
    title: 'Protecting your reputation in the age of AI',
    body: 'For professionals and owners who have spent years building a reputation, this covers the concrete steps to make sure AI describes you accurately, without needing to become technical.',
  },
];

export default function SpeakingPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">SPEAKING</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Bring a clear, grounded conversation about AI and visibility to your group.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Next talk flyer */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="relative bg-navy text-white rounded-card shadow-card-hover overflow-hidden border-4 border-white">
              <GridTexture opacity={0.05} />
              <div className="relative z-10 p-8 sm:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-xl p-2">
                    <Image
                      src="/images/logo-light.png"
                      alt="Signal & Structure AI"
                      width={56}
                      height={56}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <p className="font-body text-copper text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Next Live Talk
                </p>
                <h2 className="font-display text-3xl sm:text-4xl mb-3 leading-tight">
                  {TALK.title}
                </h2>
                <p className="font-body text-white/70 max-w-md mx-auto mb-8">
                  {TALK.subtitle}
                </p>

                <div className="border-t border-b border-white/15 py-6 mb-8 grid grid-cols-2 gap-y-4 gap-x-6 text-left max-w-sm mx-auto">
                  <div>
                    <p className="font-body text-copper text-xs uppercase tracking-wider mb-1">Date</p>
                    <p className="font-body text-white text-sm">{TALK.date}</p>
                  </div>
                  <div>
                    <p className="font-body text-copper text-xs uppercase tracking-wider mb-1">Time</p>
                    <p className="font-body text-white text-sm">{TALK.time}</p>
                  </div>
                  <div>
                    <p className="font-body text-copper text-xs uppercase tracking-wider mb-1">Where</p>
                    <p className="font-body text-white text-sm">{TALK.platform}</p>
                  </div>
                  <div>
                    <p className="font-body text-copper text-xs uppercase tracking-wider mb-1">Length</p>
                    <p className="font-body text-white text-sm">{TALK.duration}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="font-mono text-4xl font-bold text-copper">{TALK.price}</span>
                  <span className="font-body text-white/70 ml-2">per seat</span>
                </div>

                <Button href={TALK.url} variant="primary" className="px-10">
                  Reserve your seat
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding pt-0">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel>WHO IS SPEAKING</SectionLabel>
              <h2 className="font-display text-section-heading text-navy mb-6">
                Lenise Kenney
              </h2>
              <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
                <p>
                  Lenise is the founder of Signal &amp; Structure AI and the author of{' '}
                  <em>Protect Your Genius</em>. She works with businesses on how AI platforms
                  find, describe, and recommend them.
                </p>
                <p>
                  Her talks are calm and concrete. No hype, no jargon. The goal is for everyone
                  in the room to leave understanding what is actually happening and what to do
                  next.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-stone-dark rounded-card p-8">
                <h3 className="font-display text-xl text-navy mb-4">Formats</h3>
                <ul className="space-y-3 font-body text-warmgray">
                  {[
                    '20 to 60 minute talks',
                    'Workshops and working sessions',
                    'Community sessions and guest appearances',
                    'Virtual or in person',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <SignalDot size={6} className="mt-2 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-12">
            <SectionLabel>WHAT SHE COVERS</SectionLabel>
            <h2 className="font-display text-section-heading text-navy">
              Talks that meet your audience where they are.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <FadeIn key={t.title} delay={0.1 * (i + 1)}>
                <div className="bg-white rounded-card shadow-card p-6 h-full">
                  <h3 className="font-display text-xl text-navy mb-3">{t.title}</h3>
                  <p className="font-body text-warmgray">{t.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-8 text-white">
              Have a group that should hear this?
            </h2>
            <Button href={`mailto:${EMAIL}?subject=Speaking%20inquiry`} variant="primary" className="mb-4">
              Request Lenise to speak
            </Button>
            <p className="text-white/70 text-sm">
              Email {EMAIL} with your group, date, and format, and we will take it from there.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
