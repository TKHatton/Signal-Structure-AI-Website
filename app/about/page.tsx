import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import { BOOKING_URL, COMPANY_NAME, TAGLINE, ADDRESS } from '@/lib/constants';

export const metadata = {
  title: 'About | Signal & Structure AI',
  description:
    'Signal & Structure AI was founded by Lenise Kenney and Julian Bass to help businesses become discoverable by AI platforms. Based in Durham, NC.',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lenise Kenney',
  jobTitle: 'Co-Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Signal & Structure AI',
    url: 'https://signalstructure.ai',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '506 Ramseur St, Unit 108',
      addressLocality: 'Durham',
      addressRegion: 'NC',
      postalCode: '27701',
      addressCountry: 'US',
    },
  },
  knowsAbout: [
    'AI Discoverability',
    'Structured Data',
    'Business Visibility',
    'AI Systems',
    'Education',
  ],
  image: 'https://signalstructure.ai/lenise-kenney.jpg',
  description:
    'Co-Founder of Signal & Structure AI. Nearly 20 years as an educator. Author of Protect Your Genius: Using AI Without Diluting Your Voice.',
  sameAs: [],
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Signal & Structure AI',
  description:
    'Signal & Structure AI was founded by Lenise Kenney and Julian Bass to help businesses become discoverable by AI platforms.',
  url: 'https://signalstructure.ai/about',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Signal & Structure AI',
    url: 'https://signalstructure.ai',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Signal & Structure AI',
    url: 'https://signalstructure.ai',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Section 1: Page Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">OUR STORY</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              We saw a shift that most businesses have not noticed yet. So we
              built a company around fixing it.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: The Shift */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>THE SHIFT</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              People stopped searching. They started asking.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                For years, being found online meant showing up in search results.
                You optimized for Google, built a website, claimed your listings,
                and waited for people to click through. That system made sense
                because that was how people looked for things.
              </p>
              <p>
                Then the behavior changed. People stopped typing keywords into
                search engines and started asking AI direct questions. They went
                from seeking resources to seeking answers. And AI does not give
                ten blue links. It gives one answer with a name attached.
              </p>
              <p>
                We noticed that shift early. And we noticed something else: most
                businesses had no idea it was happening.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 3: Why This Exists */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>WHY WE BUILT THIS</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              Because when businesses disappear, communities feel it.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                This is not an abstract problem. When a business cannot be found,
                it loses customers. When it loses enough customers, people lose
                jobs. When people lose jobs, families struggle. When families
                struggle, communities suffer.
              </p>
              <p>
                We care about that chain reaction. Especially for small
                businesses, Black-owned businesses, women-owned businesses, and
                businesses run by non-binary individuals who already face enough
                barriers to visibility without AI adding another one.
              </p>
              <p>
                {COMPANY_NAME} exists to make sure good businesses do not get
                lost just because the system changed and nobody told them.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: The Name */}
      <section className="relative bg-navy text-white section-padding-sm">
        <GridTexture />
        <div className="relative z-10 max-w-prose mx-auto text-center">
          <FadeIn>
            <SectionLabel variant="light">THE NAME</SectionLabel>
            <h2 className="font-display text-section-heading text-white mb-6 max-w-3xl mx-auto">
              Signal is what people send when they search. Structure is what you
              need for AI to receive it.
            </h2>
            <p className="text-white/70 text-hero-subtext">
              Think of it like a lock and key. The signal is the question
              someone is asking. The structure is what makes your business the
              answer. Without both working together, nothing connects. We are
              the bridge that makes them fit.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: The Founders */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>THE FOUNDERS</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-8">
              Built by Lenise Kenney and Julian Bass.
            </h2>

            {/* Lenise */}
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="shrink-0">
                  <Image
                    src="/lenise-kenney.jpg"
                    alt="Lenise Kenney, Co-Founder of Signal & Structure AI"
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-[200px] h-[200px]"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy mb-2">
                    Lenise Kenney
                  </h3>
                  <p className="font-body text-copper text-sm font-semibold uppercase tracking-wider">
                    Co-Founder &amp; Chief Strategist
                  </p>
                </div>
              </div>
              <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
                <p>
                  Lenise brings nearly 20 years of experience as an educator
                  and a systematic thinker who builds with intention. She noticed
                  the shift from search engines to AI-driven answers and
                  recognized that most businesses were not prepared for it. That
                  observation became {COMPANY_NAME}.
                </p>
                <p>
                  She designs the systems, methodologies, and strategies that
                  power the Signal Score and the work behind it. Her approach
                  comes from a belief that technology should make people more
                  independent, not more dependent. Every engagement is designed
                  to leave clients stronger than when they started.
                </p>
                <p>
                  Lenise is also the author of{' '}
                  <em>Protect Your Genius: Using AI Without Diluting Your Voice</em>,
                  available April 2026. She writes about AI, discoverability,
                  and the building process on her personal blog, Always In Beta.
                </p>
              </div>
            </div>

            {/* Julian */}
            <div className="mb-8">
              <h3 className="font-display text-2xl text-navy mb-4">
                Julian Bass
              </h3>
              <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
                <p>
                  Julian brings the perspective of a new generation of builders
                  who grew up with AI as a natural part of how things work. His
                  understanding of emerging tools and platforms helps ensure that
                  everything {COMPANY_NAME} builds is forward-looking and
                  grounded in how technology actually moves.
                </p>
              </div>
            </div>

            {/* Digital Jaywalking callout */}
            <div className="bg-stone-dark p-8 rounded-lg border-l-4 border-copper">
              <p className="font-body text-lg text-navy mb-3">
                {COMPANY_NAME} operates under{' '}
                <strong>Digital Jaywalking</strong>, a company founded by Lenise
                and Julian dedicated to helping people get their ideas from paper
                to production.
              </p>
              <p className="font-body text-sm text-warmgray">
                {ADDRESS}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 6: Building in Public */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>BUILDING IN PUBLIC</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              We show the results, not just the pitch.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                We ran our own business through the Signal Score methodology
                before we ever asked a client to trust it. Our starting score
                was zero. We are documenting the journey from invisible to
                discoverable because we believe accountability matters more than
                promises.
              </p>
              <p>
                You can follow that journey in{' '}
                <a
                  href="/blog"
                  className="text-copper underline hover:text-navy transition-colors"
                >
                  The Signal Report
                </a>
                , our blog, and on LinkedIn. We share what changes, what improves,
                and what the numbers look like along the way.
              </p>
              <p>
                We do not share every step of the methodology. That is
                proprietary and it is what our clients invest in. But we share
                enough to prove that the work is real and the results are
                measurable.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 7: What Drives Us */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>WHAT DRIVES US</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              Community is the whole point.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4 mb-8">
              <p>
                At the core of everything we do is a simple idea: if we can use
                AI to help businesses run more efficiently, the people behind
                those businesses get something back. Time with their families.
                Energy for their communities. Space to focus on the work that
                actually matters.
              </p>
              <p>
                We are not interested in creating dependency. We build toward
                independence. Monthly support when there is a lot to build.
                Quarterly check-ins once things are stable. The goal is always to
                get you to a place where your AI presence works for you with
                minimal effort.
              </p>
              <p>
                Discoverability is not just a business metric. It is how
                communities find the people who serve them. That is worth
                protecting.
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
              Want to know where your business stands with AI? The first step is
              a 30-minute conversation.
            </h2>
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
