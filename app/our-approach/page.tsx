import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import { SKOOL_URL, COMPANY_NAME, TAGLINE } from '@/lib/constants';

export const metadata = {
  title: 'Our Approach | Signal & Structure AI',
  description: 'We teach AI discoverability instead of hiding it behind a service. The community is where the work gets done, together, over a full year.',
  alternates: {
    canonical: '/our-approach',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://signalstructure.ai/#organization',
  name: 'Signal & Structure AI',
  url: 'https://signalstructure.ai',
  sameAs: [
    'https://www.linkedin.com/company/signal-structure-ai',
    'https://www.skool.com/signal-structure-ai-2338/about',
    'https://share.google/5Ci2LRrbmjYiQpkCp',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'Our Approach', item: 'https://signalstructure.ai/our-approach' },
  ],
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://signalstructure.ai/our-approach/#page',
  name: 'Our Approach | Signal & Structure AI',
  description:
    'How we think about AI discoverability: teach it, do it together, build owners who can hold ground on their own.',
  url: 'https://signalstructure.ai/our-approach',
  isPartOf: { '@id': 'https://signalstructure.ai/#website' },
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.inner-page-hero-subtitle', '.font-display.text-section-heading'],
  },
};

export default function OurApproachPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">PHILOSOPHY</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              We teach this work. We do it with you.
            </h1>
            <p className="inner-page-hero-support text-white/70 max-w-2xl mx-auto mt-4">
              We do not hide it behind a service so you stay dependent.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why we changed */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>WHY WE CHANGED</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              We tried a high-touch service. It helped a few. It left too many out.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                The first version of {COMPANY_NAME} was a done-for-you service. It worked, for the people we could reach. The price kept the room small. The pace was tied to how fast one person could deliver.
              </p>
              <p>
                The community is the bigger room. The same work, taught and done together, with the tools running underneath. You learn it. You apply it. You leave the year fluent in something most owners do not know exists yet.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The real problem */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>PERSPECTIVE</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              Your current setup is not broken. It was built for a different system.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                Websites, SEO, social media, Google Business listings, content marketing. None of that was wasted. It worked for the system it was designed for.
              </p>
              <p>But the system changed.</p>
              <p>
                AI does not find businesses the way Google does. It does not match keywords. It does not rank pages. It looks for structured, consistent information and uses that to decide who to mention and how to describe them.
              </p>
              <p>
                The tools that made you visible on Google do not automatically make you visible to AI. That does not mean they were wrong. It means they are no longer enough on their own.
              </p>
              <p>That is the gap we close, together.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core assumption */}
      <section className="relative bg-navy text-white section-padding-sm">
        <GridTexture />
        <div className="relative z-10 max-w-prose mx-auto text-center">
          <FadeIn>
            <SectionLabel variant="light">CORE ASSUMPTION</SectionLabel>
            <h2 className="font-display text-section-heading text-white mb-6 max-w-3xl mx-auto">
              Your business already knows what it does. AI just needs help reading it.
            </h2>
            <p className="text-white/70 text-hero-subtext">
              We do not reinvent your business for AI. We take what is already true and organize it so AI can find it, trust it, and pass it on to the people asking.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Independence */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>OUR PROMISE</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              We build toward your independence, not your dependency.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4 mb-8">
              <p>
                The whole point of teaching this in a community is that you can do it. We explain everything. Show the work. Hand you the templates and scripts. No black box. No artificial gatekeeping.
              </p>
              <p>
                Some owners stay for a second year because they like the room and want to keep practicing. Others finish the year, hold ground on their own, and use Signal Watch or Client Knowledge to keep AI honest. Both paths are wins.
              </p>
              <p>
                If you stay, it is because the room is worth being in. Not because we made it impossible to leave.
              </p>
            </div>

            <div className="bg-stone-dark p-8 rounded-lg border-l-4 border-copper">
              <p className="font-body text-lg text-navy italic">
                &ldquo;Everything we teach lives inside the community. Templates, schema, scripts, the Signal Score method. Your AI presence belongs to you.&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AI changes constantly */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>THE LANDSCAPE</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              This is not a one-time fix. AI changes every week.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                OpenAI ships changes to ChatGPT regularly. Anthropic improves Claude. Google changes how Gemini processes information. Every one of those changes can shift how your business shows up, how it gets described, and whether it gets recommended.
              </p>
              <p>
                Inside the community, this is what we watch together. Nobody is keeping up with this alone. That is the point.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why us */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <SectionLabel>WHY US</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-6">
              Why {COMPANY_NAME}
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4 mb-8">
              <p>
                We saw something most businesses have not noticed yet. AI is becoming one of the primary ways people find, evaluate, and choose businesses. Almost nobody is set up for it.
              </p>
              <p>
                We built the engine that scores AI discoverability. We built the connectors that feed AI real information. We teach the work inside a community where owners can practice it without doing it alone.
              </p>
              <p>
                Careful. Thorough. Honest about what works and what does not. That is the room.
              </p>
            </div>

            <p className="font-display text-3xl text-copper text-center">
              {TAGLINE}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-8 text-white">
              Come learn it with us.
            </h2>
            <Button href={SKOOL_URL} variant="primary" className="mb-4">
              Join the Community
            </Button>
            <p className="text-white/70 text-sm">
              Yearly or monthly, with a twelve-month commitment.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
