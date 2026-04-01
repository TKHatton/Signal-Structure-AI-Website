import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import { BOOKING_URL, COMPANY_NAME, TAGLINE } from '@/lib/constants';

export const metadata = {
  title: 'Our Approach | Signal & Structure AI',
  description: 'We build toward your independence, not your dependency. Signal & Structure AI organizes your business information for AI with structure, accuracy, and long-term thinking.',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Our Approach | Signal & Structure AI',
  description:
    'Signal & Structure AI builds the foundation that makes AI referrals possible. We organize existing business knowledge so AI platforms can find it, understand it, and recommend you accurately.',
  url: 'https://signalstructure.ai/our-approach',
  isPartOf: { '@type': 'WebSite', name: 'Signal & Structure AI', url: 'https://signalstructure.ai' },
  publisher: { '@type': 'Organization', name: 'Signal & Structure AI', url: 'https://signalstructure.ai' },
};

export default function OurApproachPage() {
  return (
    <main>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Section 1: Page Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">PHILOSOPHY</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              We build the foundation that makes AI referrals possible and keeps
              them coming.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Philosophy */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>HOW WE THINK</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              Smart shortcuts come from understanding the system, not gaming it.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                {COMPANY_NAME} exists because we believe the best shortcut is
                knowing a system well enough to move through it the right way. Not by
                breaking things. Not by tricking an algorithm. By understanding what
                actually works and building for that.
              </p>
              <p>
                Speed without structure creates chaos. Automation without clear
                information creates noise. AI without organized knowledge creates wrong
                answers and missed opportunities.
              </p>
              <p>
                We build the structure first. Then everything that sits on top of it
                works the way it should.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 3: The Real Problem */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>PERSPECTIVE</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              Your current setup is not broken. It was built for a different system.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                Most businesses have invested real time and money into their online
                presence. Websites, SEO, social media, Google Business listings, content
                marketing. None of that was wasted. It worked for the system it was
                designed for.
              </p>
              <p>
                But the system changed.
              </p>
              <p>
                AI does not find businesses the way Google does. It does not match
                keywords. It does not rank pages. It looks for structured, consistent
                information and uses that to decide who to mention and how to describe
                them.
              </p>
              <p>
                The tools that made you visible on Google do not automatically make you
                visible to AI. That does not mean they were wrong. It means they are no
                longer enough on their own.
              </p>
              <p>
                That is the gap we fill.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: Core Assumption Block */}
      <section className="relative bg-navy text-white section-padding-sm">
        <GridTexture />
        <div className="relative z-10 max-w-prose mx-auto text-center">
          <FadeIn>
            <SectionLabel variant="light">CORE ASSUMPTION</SectionLabel>
            <h2 className="font-display text-section-heading text-white mb-6 max-w-3xl mx-auto">
              Your business already knows what it does. AI just needs to be able to
              find that and make sense of it.
            </h2>
            <p className="text-white/70 text-hero-subtext">
              We do not reinvent your business for AI. We take what is already true
              about what you do and organize it so AI can find it, trust it, and share
              it with the people asking.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Independence Philosophy */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>OUR PROMISE</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              We build toward your independence, not your dependency.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4 mb-8">
              <p>
                Our goal is to get your AI presence to a place where it works for you.
                Some clients choose ongoing management because their business changes
                often. Others reach their goals and maintain things on their own or with
                quarterly checkups. Either path is a success.
              </p>
              <p>
                We do not hide how this works to make you need us longer. We document
                everything. We explain everything. We build systems you can understand
                and, if you choose to, eventually manage yourself.
              </p>
              <p>
                If you stay, it is because the value is clear. Not because we made it
                impossible to leave.
              </p>
            </div>

            {/* Highlight card */}
            <div className="bg-stone-dark p-8 rounded-lg border-l-4 border-copper">
              <p className="font-body text-lg text-navy italic">
                "Every client receives full documentation of their knowledge system,
                expansion guides for adding new information, and clear explanations of
                how everything works. Your AI presence belongs to you."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 6: AI Changes Constantly */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>THE LANDSCAPE</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              This is not a one-time fix. AI changes every week.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                AI platforms do not sit still. OpenAI releases updates to ChatGPT
                regularly. Anthropic improves Claude. Google changes how Gemini processes
                information. Each platform updates how it surfaces sources.
              </p>
              <p>
                Every one of those changes can affect how your business shows up, how it
                gets described, and whether it gets recommended.
              </p>
              <p>
                This is one of the reasons ongoing management matters. It is not just
                that your business changes over time. AI itself changes. Staying current
                means watching both sides and adjusting before things drift.
              </p>
              <p>
                We track these changes as part of our work. It is one of the things that
                separates what we do from someone who sets up a profile and walks away.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 7: Why Signal & Structure AI */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>WHY US</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              Why {COMPANY_NAME}
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4 mb-8">
              <p>
                We built this company because we saw something most businesses have not
                noticed yet. AI is becoming one of the primary ways people find, evaluate,
                and choose businesses. And almost nobody is set up for it.
              </p>
              <p>
                We work at the intersection of strategy, structure, and AI. We are
                careful. We are thorough. We think about what works long-term, not just
                what looks good this week.
              </p>
              <p>
                Our role is not to impress you. It is to make sure AI knows your business,
                describes it correctly, and recommends it to the people who are asking.
              </p>
            </div>

            <p className="font-display text-3xl text-copper text-center">
              {TAGLINE}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 8: Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-8 text-white">
              The next step is a 30-minute conversation. We will show you
              exactly where you stand and talk about what it would take to change it.
            </h2>
            <Button href={BOOKING_URL} variant="primary" className="mb-4">
              Get Your Signal Score
            </Button>
            <p className="text-white/70 text-sm">
              No pressure. Just clarity.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
