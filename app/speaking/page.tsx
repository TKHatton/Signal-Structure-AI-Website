import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import { EMAIL, LINKEDIN, SKOOL_URL } from '@/lib/constants';

export const metadata = {
  title: 'Speaking | Signal & Structure AI',
  description: 'Lenise Kenney speaks at communities, conferences, and team events about AI discoverability: how AI describes your business, what to do about it, and how to be recommended instead of skipped.',
  alternates: {
    canonical: '/speaking',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'Speaking', item: 'https://signalstructure.ai/speaking' },
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://signalstructure.ai/about#lenise-kenney',
  name: 'Lenise Kenney',
  jobTitle: 'Founder',
  worksFor: { '@id': 'https://signalstructure.ai/#organization' },
  knowsAbout: [
    'AI discoverability',
    'AI search optimization',
    'schema markup',
    'structured data',
    'generative engine optimization',
    'local business AI visibility',
  ],
  sameAs: [
    'https://www.linkedin.com/company/signal-structure-ai',
  ],
};

const inviteHref = `mailto:${EMAIL}?subject=Speaking%20inquiry&body=Hi%20Lenise%2C%0A%0AI%27d%20like%20to%20invite%20you%20to%20speak%20at%3A%0A%0AEvent%2Fcommunity%3A%0ADate%2Frange%3A%0AFormat%20(live%2C%20virtual%2C%20panel%2C%20etc.)%3A%0AAudience%3A%0AWhat%20we%27re%20hoping%20you%27ll%20cover%3A%0A%0AThanks%2C%0A`;

const talks = [
  {
    title: 'What AI Is Saying About Your Business Behind Your Back',
    summary: 'A live look at what ChatGPT, Claude, Gemini, and Perplexity actually tell people when they ask about businesses in the room. Where they get it right. Where they make things up. What to do about it.',
  },
  {
    title: 'How to Stop AI From Making Things Up About You',
    summary: 'The five most common ways AI hallucinates about a real business, the structured fixes that actually work, and how to know in 30 seconds whether your business has the problem.',
  },
  {
    title: 'How to Be the Business AI Recommends',
    summary: 'A practical walk through the work behind being chosen when someone asks AI for a recommendation. Schema, directories, citations, original writing, and the connectors that put your truth in front of the model.',
  },
];

const audiences = [
  'Local business owner communities and chambers',
  'Founder groups, masterminds, and accelerators',
  'Conferences and summits on AI, marketing, and small business',
  'Internal team training for agencies and consultancies',
];

export default function SpeakingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">SPEAKING</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Lenise speaks at communities, conferences, and team events about how AI describes businesses, and what to do about it.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* What she covers */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-10">
            <SectionLabel>WHAT SHE COVERS</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              Plain language. Real examples. No hype.
            </h2>
            <p className="text-warmgray text-lg max-w-2xl mx-auto">
              Lenise built the engine behind Signal Score and the connectors that feed AI real business information. She talks about what she actually does, with examples your audience can hear themselves in.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {talks.map((t, i) => (
              <FadeIn key={t.title} delay={0.1 + i * 0.05}>
                <div className="bg-white rounded-card shadow-card p-6 h-full">
                  <SectionLabel>TALK</SectionLabel>
                  <h3 className="font-display text-xl text-navy mb-3 mt-2 leading-tight">
                    {t.title}
                  </h3>
                  <p className="font-body text-sm text-warmgray leading-relaxed">
                    {t.summary}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="text-center mt-8">
            <p className="font-body text-sm text-warmgray italic">
              Each talk can be tailored to your group&rsquo;s industry, format, and length.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Audiences */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel>WHO SHE SPEAKS TO</SectionLabel>
              <h2 className="font-display text-section-heading text-navy mb-6">
                Owners, teams, and rooms that have to take AI seriously now.
              </h2>
              <p className="font-body text-lg text-warmgray leading-relaxed">
                If your group is making decisions about how AI affects their business, the talk is for them. Lenise tailors the angle to whoever is in the room.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-white rounded-card shadow-card p-8">
                <h3 className="font-display text-2xl text-navy mb-4">Audiences</h3>
                <ul className="space-y-3 font-body text-warmgray">
                  {audiences.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <SignalDot size={6} className="mt-2 flex-shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Invite */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionLabel variant="light">INVITE HER</SectionLabel>
            <h2 className="font-display text-section-heading mb-6 text-white mt-2">
              Have a room she should be in? Tell her about it.
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              The easiest way is email. The next easiest is a LinkedIn DM. Tell her about the audience, the format, and what you&rsquo;d want covered, and she&rsquo;ll write back.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={inviteHref} variant="primary">
                Email Lenise
              </Button>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-white/90 hover:text-copper transition-colors underline underline-offset-4 decoration-copper decoration-2"
              >
                Or DM her on LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cross to community */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn>
            <div className="bg-white rounded-card shadow-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 justify-between">
              <div>
                <SectionLabel>WANT TO LEARN THIS YOURSELF?</SectionLabel>
                <h2 className="font-display text-2xl text-navy mb-2 mt-2">
                  The community is where the practice happens.
                </h2>
                <p className="font-body text-warmgray max-w-xl">
                  Talks introduce the work. The community is where you actually do it, week by week, alongside other owners.
                </p>
              </div>
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                Join the community <span>&rarr;</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
