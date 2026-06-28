import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import {
  SKOOL_URL,
  COMMUNITY_YEARLY,
  COMMUNITY_MONTHLY,
  COMMUNITY_COMMITMENT_MONTHS,
  REPORT_PRICE,
  WATCH_PRICE,
  CLIENT_KNOWLEDGE_PRICE,
} from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: 'The Community | Signal & Structure AI',
  description: 'A members-only community for business owners learning AI discoverability together. Yearly or monthly with a twelve-month commitment. Weekly working sessions on Skool.',
  alternates: {
    canonical: '/services',
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
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'Community', item: 'https://signalstructure.ai/services' },
  ],
};

const communitySchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://signalstructure.ai/services#community',
  name: 'Signal & Structure AI Community',
  provider: { '@id': 'https://signalstructure.ai/#organization' },
  description: 'A members-only community for business owners learning AI discoverability together. Weekly working sessions, a shared library of fixes and templates, and direct access to Lenise Kenney. Twelve-month commitment.',
  serviceType: 'AI discoverability community',
  offers: [
    {
      '@type': 'Offer',
      price: '497',
      priceCurrency: 'USD',
      description: 'Yearly membership. One payment, covers twelve months.',
    },
    {
      '@type': 'Offer',
      price: '49',
      priceCurrency: 'USD',
      description: 'Monthly membership with a twelve-month commitment. $49 per month for twelve months.',
    },
  ],
  areaServed: { '@type': 'Country', name: 'United States' },
};

const yearMap = [
  {
    label: 'Month 1',
    title: 'You meet your baseline.',
    body: 'Run your free Signal Pulse, set your goals, and meet the rest of the cohort. We map what AI is already saying about you.',
  },
  {
    label: 'Months 2 to 3',
    title: 'Foundations go in.',
    body: 'Schema, citations, the directories that matter, the Google Business Profile work. We do these together, week by week.',
  },
  {
    label: 'Months 4 to 6',
    title: 'AI starts to notice.',
    body: 'You see your name appear in places it did not before. We compare notes, share what worked, and tune what did not.',
  },
  {
    label: 'Months 7 to 9',
    title: 'You become a source.',
    body: 'Original writing, original answers, original points of view. AI quotes you because nobody else is saying it this way.',
  },
  {
    label: 'Months 10 to 12',
    title: 'You hold ground.',
    body: 'You know what to monitor, what to update, and what to leave alone. You finish the year fluent in the work.',
  },
];

export default function CommunityPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(communitySchema) }} />

      {/* Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">THE COMMUNITY</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Learn to make AI describe your business right, then keep it that way. A members-only community where owners do the work together, week by week, for a full year.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* What it is + pricing */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* What you get */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <h2 className="font-display text-2xl text-navy mb-2">What you get</h2>
                <p className="font-body text-sm text-warmgray mb-6">
                  Hosted on Skool. Open whenever you are.
                </p>
                <ul className="space-y-3 font-body text-warmgray">
                  {[
                    'Weekly working sessions where we do the discoverability work live, together',
                    'A shared library of schema, templates, and scripts that grows with the group',
                    'Posts and threads where you ask, share, and learn from other owners',
                    'Direct answers from Lenise inside the community',
                    'The Signal Score method explained, taught, and applied to your business',
                    'A network of owners learning the same thing at the same time',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <SignalDot size={6} className="mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Pricing */}
            <FadeIn delay={0.2} direction="left">
              <div className="bg-navy text-white rounded-card shadow-card p-8 h-full flex flex-col">
                <SectionLabel variant="light">JOIN</SectionLabel>
                <p className="font-body text-white/80 mb-6 mt-2">
                  Pick the way you want to pay. Both come with the same twelve-month commitment.
                </p>

                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-mono text-4xl font-bold text-copper">{COMMUNITY_YEARLY}</span>
                    <span className="font-body text-white/70">per year</span>
                  </div>
                  <p className="font-body text-white/70 text-sm">
                    One payment. Covers all {COMMUNITY_COMMITMENT_MONTHS} months. Simplest option.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-6 mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-mono text-4xl font-bold text-white">{COMMUNITY_MONTHLY}</span>
                    <span className="font-body text-white/70">per month</span>
                  </div>
                  <p className="font-body text-white/70 text-sm">
                    Spread it out. {COMMUNITY_COMMITMENT_MONTHS}-month commitment so the community stays steady.
                  </p>
                </div>

                <div className="mt-auto">
                  <Button href={SKOOL_URL} variant="primary" className="w-full text-center">
                    Join on Skool
                  </Button>
                  <p className="text-center text-white/50 text-xs mt-3">
                    Membership is handled on Skool. You will land on the about page to choose your plan.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why a year */}
      <section className="relative bg-navy text-white section-padding-sm">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel variant="light">WHY A YEAR</SectionLabel>
              <h2 className="font-display text-section-heading mb-6">
                Because AI does not change its mind about you in a week.
              </h2>
              <div className="font-body text-lg text-white/80 leading-relaxed space-y-4">
                <p>
                  Becoming visible to AI is the long version of becoming known. Schema goes in. Directories get cleaned up. Original writing gets published. Reviews accumulate. Citations link back. Each piece takes time, and the platforms take more time to notice.
                </p>
                <p>
                  A weekend is not enough. A single month barely starts. A year is enough time to do the work, see AI respond to it, and adjust. That is why the community is built around a twelve-month commitment.
                </p>
                <p>
                  We tried it as a short engagement. It did not help enough people. The slow, shared version helps more.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-white/10 rounded-card p-8">
                <h3 className="font-display text-2xl mb-4">A note on the commitment</h3>
                <p className="font-body text-white/80 leading-relaxed mb-4">
                  The yearly plan is one payment for all twelve months. The monthly plan is twelve consecutive monthly payments.
                </p>
                <p className="font-body text-white/80 leading-relaxed">
                  If something changes for you mid-year, write to Lenise. We will handle it like adults. The commitment is real because the work is real, not because we want to trap anyone.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The year, month by month */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-10">
            <SectionLabel>HOW THE YEAR UNFOLDS</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              What twelve months together actually looks like.
            </h2>
            <p className="text-warmgray text-lg max-w-2xl mx-auto">
              A rough arc, not a rigid plan. The pace bends to the people in the room.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {yearMap.map((stage, i) => (
              <FadeIn key={stage.label} delay={0.1 + i * 0.05}>
                <div className="bg-white rounded-card shadow-card p-6 h-full">
                  <div className="text-copper font-body font-semibold text-xs tracking-widest uppercase mb-2">
                    {stage.label}
                  </div>
                  <h3 className="font-display text-lg text-navy mb-2 leading-tight">
                    {stage.title}
                  </h3>
                  <p className="font-body text-sm text-warmgray leading-relaxed">
                    {stage.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Companion offers */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <FadeIn className="text-center mb-10">
            <SectionLabel>NOT READY FOR A YEAR?</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              Start smaller. Come back when you want the room.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-stone-dark rounded-card p-8 h-full flex flex-col">
                <h3 className="font-display text-2xl text-navy mb-2">Signal Score Report</h3>
                <p className="font-body text-warmgray mb-6 flex-1">
                  A one-time, detailed report on how AI describes your business right now. Every platform. Every gap. Delivered within 48 hours.
                </p>
                <div className="mb-4">
                  <span className="font-mono text-3xl font-bold text-navy">{REPORT_PRICE}</span>
                  <span className="font-body text-warmgray ml-2 text-sm">one time</span>
                </div>
                <Link
                  href="/signal-score-report"
                  className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2"
                >
                  See the report <span>&rarr;</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-stone-dark rounded-card p-8 h-full flex flex-col">
                <h3 className="font-display text-2xl text-navy mb-2">Signal Watch</h3>
                <p className="font-body text-warmgray mb-6 flex-1">
                  Ongoing monitoring you check from inside ChatGPT or Claude. Ask, see your score, see what changed. Cancel any time.
                </p>
                <div className="mb-4">
                  <span className="font-mono text-3xl font-bold text-navy">{WATCH_PRICE}</span>
                  <span className="font-body text-warmgray ml-2 text-sm">per month</span>
                </div>
                <Link
                  href="/signal-watch"
                  className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2"
                >
                  See Signal Watch <span>&rarr;</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-stone-dark rounded-card p-8 h-full flex flex-col">
                <h3 className="font-display text-2xl text-navy mb-2">Client Knowledge</h3>
                <p className="font-body text-warmgray mb-6 flex-1">
                  A private knowledge connector for ChatGPT and Claude. AI answers from your real business info, in your words, not its best guess.
                </p>
                <div className="mb-4">
                  <span className="font-mono text-3xl font-bold text-navy">{CLIENT_KNOWLEDGE_PRICE}</span>
                  <span className="font-body text-warmgray ml-2 text-sm">per month</span>
                </div>
                <Link
                  href="/client-knowledge"
                  className="font-body text-copper hover:text-copper-dark transition-colors inline-flex items-center gap-2"
                >
                  See Client Knowledge <span>&rarr;</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-6 text-white">
              Spend a year doing the work.
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              We will be there every week. You will leave fluent in something most owners do not know exists yet.
            </p>
            <Button href={SKOOL_URL} variant="primary">
              Join on Skool
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
