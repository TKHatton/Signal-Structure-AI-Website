import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import ValueCard from '@/components/ValueCard';
import { BOOKING_URL } from '@/lib/constants';

export const metadata = {
  title: 'Why This Matters | Signal & Structure AI',
  description: 'People stopped Googling and started asking AI. If your business is not structured for AI, you are invisible to the new referral system. Here is why and how to fix it.',
};

export default function WhyThisMattersPage() {
  return (
    <main>
      {/* Section 1: Page Header */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">STRATEGIC CONTEXT</SectionLabel>
            <h1 className="inner-page-title text-white mb-4">
              Why This Matters
            </h1>
            <p className="inner-page-subtitle text-white/80">
              How people find and evaluate businesses has fundamentally changed.
              Most businesses have not adjusted yet.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: The Shift */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>THE NEW REFERRAL</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              People did not stop asking for recommendations. They stopped asking Google.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                People still ask friends for advice. What changed is what happens when
                they do not have a friend to ask.
              </p>
              <p>
                They used to open Google, type in a few keywords, and scroll through a
                page of links. That is not what most people do now. They ask AI. And the
                way they ask is completely different.
              </p>
              <p>
                They do not type "marketing agency Durham NC." They ask "Who is the best
                marketing agency for a small business in North Carolina and why?" That is
                not a keyword search. That is a question. And AI gives them a direct
                answer with names, descriptions, and reasons.
              </p>
              <p>
                If your business is built to show up for keywords but not built to answer
                questions, you are set up for a system that is fading.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 3: Two Problems */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn>
            <h2 className="font-display text-section-heading text-navy mb-12 text-center">
              Two things keep businesses out of the AI referral conversation.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-card border-l-4 border-copper">
                <h3 className="font-body text-2xl font-semibold text-navy mb-4">
                  You are not showing up at all.
                </h3>
                <p className="font-body text-lg text-warmgray leading-relaxed">
                  AI does not know enough about your business to feel confident
                  recommending you. So when someone asks for help in your space, AI gives
                  other names. Not because those businesses are better. Because AI could
                  find their information and could not find yours.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-card border-l-4 border-copper">
                <h3 className="font-body text-2xl font-semibold text-navy mb-4">
                  You are showing up wrong.
                </h3>
                <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
                  <p>
                    AI found some information about you but it is scattered or
                    inconsistent. So it describes your services incorrectly, gets your
                    pricing wrong, or makes you sound like a completely different company.
                  </p>
                  <p>
                    And it does not stop at the first question. When someone asks AI for a
                    recommendation, they follow up. "Tell me more." "What do they charge?"
                    "Why them over the others?" Every follow-up is another chance for AI to
                    get it wrong. One bad answer might not lose you the business. But a
                    conversation where AI gets three things wrong? That person is gone before
                    they ever visit your website.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <p className="text-center font-body text-lg text-warmgray">
              Both of these problems come from the same place.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: Why AI Gets It Wrong */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto">
          <FadeIn className="text-center mb-12">
            <SectionLabel variant="light">THE TECHNICAL REALITY</SectionLabel>
            <h2 className="font-display text-section-heading mb-6">
              This is not a mystery. Here is exactly why AI gets businesses wrong.
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              AI does not carefully research your business the way a person would.
              It scans for information it can quickly grab and structure into an
              answer. If your information is well-organized and easy to pull from,
              AI uses it. If not, AI either skips you or fills in the blanks on its
              own. When it fills in blanks, that is called hallucination.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <ValueCard
                title="Scattered information."
                description="Your details live in too many places and none of them agree. Website says one thing. LinkedIn says another. An old blog post contradicts both. AI sees all of this and picks whatever it finds first, which may not be the right version."
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <ValueCard
                title="No structured data."
                description="You have information, but it is written for humans to read, not for AI to process. AI works fastest with structured data: clear categories, consistent formatting, organized facts. Most business websites are not set up this way because they never needed to be."
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <ValueCard
                title="Outdated strategies."
                description="Your online presence was built for a keyword-based search world. It was designed to rank on Google, not to answer questions from AI. That is not a failure. It means the tools changed and the setup needs to change too."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 5: What Changes */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>THE RESULT</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              What happens when this gets fixed.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                Businesses that organize their information for AI start showing up in
                recommendations they were missing before. When someone asks "Who should
                I hire for this?" their name is in the answer.
              </p>
              <p>
                They stop finding wrong descriptions floating around. AI no longer says
                they offer things they do not or confuses their pricing.
              </p>
              <p>
                They start getting inquiries from people who say "AI recommended you" or
                "I asked ChatGPT and your name came up."
              </p>
              <p>
                And over time, they can track whether AI referrals are growing.
              </p>
              <p>
                That is the shift. Not more noise. Better information in the right places,
                working for you around the clock, across every AI tool people are using.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 6: Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-8">
              AI is giving referrals in your space every day. The question
              is whether your business is one of them.
            </h2>
            <Button href={BOOKING_URL} variant="primary">
              Book a Signal Check
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
