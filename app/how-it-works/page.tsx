import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import StepCard from '@/components/StepCard';
import ValueCard from '@/components/ValueCard';
import SignalDot from '@/components/SignalDot';
import { SKOOL_URL, REPORT_PRICE, WATCH_PRICE, CLIENT_KNOWLEDGE_PRICE } from '@/lib/constants';

export const metadata = {
  title: 'How It Works | Signal & Structure AI',
  description: 'How the community works, how the Signal Score Report is built, how Signal Watch and Client Knowledge plug into ChatGPT and Claude. A clear, plain-language walk-through.',
  alternates: {
    canonical: '/how-it-works',
  },
  robots: {
    index: false,
    follow: false,
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
    { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://signalstructure.ai/how-it-works' },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': 'https://signalstructure.ai/how-it-works/#howto',
  name: 'How Signal & Structure AI Improves Your AI Discoverability',
  description:
    'A clear path from invisible to recommended: join the community, see where you stand, do the work each week, and let the AI tools carry the answer back.',
  totalTime: 'P365D',
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Pick a door', text: 'Join the community, order a Signal Score Report, or turn on Signal Watch. Each is a real way in, no wrong order.' },
    { '@type': 'HowToStep', position: 2, name: 'See where you stand', text: 'Use the Signal Score Report or a community working session to map what AI is already saying about your business across ChatGPT, Claude, Gemini, and Perplexity.' },
    { '@type': 'HowToStep', position: 3, name: 'Do the work, week by week', text: 'Inside the community we work through schema, directories, citations, and original writing together. Small, real steps that AI can read.' },
    { '@type': 'HowToStep', position: 4, name: 'Plug the AI tools in', text: 'Signal Watch monitors how AI is describing you. Client Knowledge feeds AI your real information so it stops guessing. Both run inside ChatGPT or Claude.' },
    { '@type': 'HowToStep', position: 5, name: 'Hold ground', text: 'Re-check, refine, repeat. AI changes constantly. So does your business. Staying visible is a practice, not a finish line.' },
  ],
};

export default function HowItWorksPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">HOW IT WORKS</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              The community is where the work happens.
            </h1>
            <p className="inner-page-hero-support text-white/70 max-w-2xl mx-auto mt-4">
              The tools carry the result. Here is how it fits together.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <h2 className="font-display text-section-heading text-navy mb-6 text-center">
              We used to deliver this as a high-touch service. Now we do it together.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                The first version of this work was a done-for-you service. It helped the people we could reach. It also kept the room small.
              </p>
              <p>
                The community is the bigger room. You learn the discoverability work, you do it on your own business, and there are other owners doing the exact same thing alongside you. The tools, the report, the schema, the citations, the connectors. We work through them together.
              </p>
              <p>
                You leave a year fluent in something most owners do not even know exists yet.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The five steps */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto space-y-32">
          {/* Step 1 */}
          <StepCard
            stepNumber="01"
            label="STEP 1"
            headline="Pick a door. They all lead to the same room."
            body="The community is the main door. A one-time Signal Score Report is the second. Signal Watch and Client Knowledge are tools you can run on their own. Most owners start with the report or the community. The rest gets added when it makes sense. Nobody is gatekeeping anything."
            visual={
              <div className="bg-white p-6 rounded-card shadow-card">
                <div className="font-body text-sm font-semibold text-copper mb-4 uppercase tracking-wider">FOUR WAYS IN</div>
                <div className="space-y-3">
                  {[
                    { label: 'Community', sub: '$497/year or $49/mo' },
                    { label: 'Signal Score Report', sub: `${REPORT_PRICE} one time` },
                    { label: 'Signal Watch', sub: `${WATCH_PRICE}/month` },
                    { label: 'Client Knowledge', sub: `${CLIENT_KNOWLEDGE_PRICE}/month` },
                  ].map((d) => (
                    <div key={d.label} className="flex items-center justify-between bg-stone rounded p-3">
                      <div className="font-body text-sm font-semibold text-navy">{d.label}</div>
                      <div className="font-mono text-xs text-warmgray">{d.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          {/* Step 2 */}
          <StepCard
            stepNumber="02"
            label="STEP 2"
            headline="See where you actually stand."
            body="Before you change anything, you have to know what AI is currently saying about you. A Signal Score Report gives you the full picture in one place: ChatGPT, Claude, Gemini, Perplexity, hallucinations, gaps, schema check, prioritized fix list. Community members can also walk through this together in a working session. You leave with a baseline you can measure against."
            visual={
              <div className="bg-stone p-8 rounded-card shadow-card">
                <div className="font-body text-sm font-semibold text-copper mb-4 uppercase tracking-wider">SIGNAL SCORE</div>
                <div className="space-y-3">
                  {[
                    { p: 'ChatGPT', dots: 2, score: '3.2' },
                    { p: 'Claude', dots: 1, score: '1.8' },
                    { p: 'Gemini', dots: 2, score: '2.5' },
                    { p: 'Perplexity', dots: 3, score: '4.1' },
                  ].map((r) => (
                    <div key={r.p} className="flex items-center justify-between">
                      <span className="font-body text-navy">{r.p}</span>
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className={`w-3 h-3 rounded ${i <= r.dots ? 'bg-copper' : 'bg-warmgray-light/30'}`}></div>
                          ))}
                        </div>
                        <span className="font-mono text-navy font-bold">{r.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-copper text-sm">
                  <SignalDot size={6} />
                  <span>Baseline captured</span>
                </div>
              </div>
            }
            reverse
          />

          {/* Step 3 */}
          <StepCard
            stepNumber="03"
            label="STEP 3"
            headline="Do the work, week by week."
            body="The community runs weekly working sessions. Schema goes in. Directories get cleaned up. Original writing gets published. Reviews accumulate. Citations link back. We share scripts, templates, and lessons as we go. You are not stuck doing this alone with a long document and a Loom video. Other owners are in the room. So is Lenise."
            visual={
              <div className="bg-white p-8 rounded-card shadow-card">
                <div className="font-body text-sm font-semibold text-copper mb-6 uppercase tracking-wider text-center">WHAT WE WORK ON</div>
                <div className="grid grid-cols-2 gap-3">
                  {['Schema', 'Directories', 'Citations', 'GBP', 'Original writing', 'Reviews', 'Site structure', 'Connectors'].map((category) => (
                    <div key={category} className="bg-stone p-3 rounded text-center">
                      <div className="font-body text-xs font-semibold text-navy">{category}</div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          {/* Step 4 */}
          <StepCard
            stepNumber="04"
            label="STEP 4"
            headline="Plug the AI tools in so the work shows up where it counts."
            body="Signal Watch sits inside your ChatGPT or Claude and tells you how AI is describing you, month over month. Client Knowledge sits next to it and feeds AI your real business information so it stops guessing. One reads. One answers. Run either alone or stack them. Cancel any time."
            visual={
              <div className="bg-white p-8 rounded-card shadow-card">
                <div className="font-body text-sm font-semibold text-copper mb-6 uppercase tracking-wider text-center">INSIDE CHATGPT OR CLAUDE</div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full bg-navy text-white p-4 rounded text-center">
                    <div className="font-body text-xs uppercase tracking-widest text-copper mb-1">Signal Watch</div>
                    <div className="font-body text-sm">Reads what AI is saying</div>
                  </div>
                  <div className="text-copper text-2xl">+</div>
                  <div className="w-full bg-copper/10 border-2 border-copper p-4 rounded text-center">
                    <div className="font-body text-xs uppercase tracking-widest text-copper mb-1">Client Knowledge</div>
                    <div className="font-body text-sm text-navy">Tells AI what to say</div>
                  </div>
                </div>
              </div>
            }
            reverse
          />

          {/* Step 5 */}
          <StepCard
            stepNumber="05"
            label="STEP 5"
            headline="Hold ground. AI keeps changing. So does your business."
            body="No version of this is one-and-done. New AI models arrive. Platforms change how they read sources. Your business adds a service, moves locations, sunsets an offer. The community is where you keep doing the work. The tools are where the work shows up. Together, they keep you visible for the long run."
            visual={
              <div className="bg-white p-8 rounded-card shadow-card">
                <div className="font-body text-sm font-semibold text-copper mb-6 uppercase tracking-wider text-center">THE YEAR</div>
                <div className="space-y-4">
                  {[
                    { month: 'Month 1', label: 'Baseline + onboarding' },
                    { month: 'Months 2 to 3', label: 'Foundations' },
                    { month: 'Months 4 to 9', label: 'Practice + measure', highlight: true },
                    { month: 'Months 10 to 12', label: 'Hold ground' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <SignalDot size={8} className={item.highlight ? 'bg-copper' : 'bg-navy'} />
                      <div className="flex-1">
                        <div className={`font-body text-sm ${item.highlight ? 'font-bold text-copper' : 'font-medium text-navy'}`}>
                          {item.month}
                        </div>
                        <div className="font-body text-xs text-warmgray">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Value */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-section-heading">
              What this protects.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1}>
              <ValueCard title="Your referrals" description="AI recommends you instead of skipping you." />
            </FadeIn>
            <FadeIn delay={0.2}>
              <ValueCard title="Your accuracy" description="AI describes you correctly, in your own words." />
            </FadeIn>
            <FadeIn delay={0.3}>
              <ValueCard title="Your time" description="You learn it once, with other owners doing it too." />
            </FadeIn>
            <FadeIn delay={0.4}>
              <ValueCard title="Your edge" description="A year of practice most of your competitors will never do." />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Best for / not for */}
      <section className="section-padding">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <h3 className="font-body text-2xl font-semibold text-navy mb-6">
                The community works best for owners who:
              </h3>
              <ul className="space-y-4">
                {[
                  'Want to actually learn this, not just buy a result',
                  'Are tired of being described wrong or left out',
                  'Will show up for weekly working sessions for a year',
                  'Want a long-term advantage, not a quick trick',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <SignalDot size={7} className="mt-1.5 flex-shrink-0 bg-status-green" />
                    <span className="font-body text-lg text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="font-body text-2xl font-semibold text-navy mb-6">
                It is probably not the right fit if you:
              </h3>
              <ul className="space-y-4">
                {[
                  'Want a one-week visibility hack',
                  'Will not show up for the work',
                  'Want someone to do every keystroke for you (we do that for clients separately, contact Lenise)',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <SignalDot size={7} className="mt-1.5 flex-shrink-0 bg-warmgray" />
                    <span className="font-body text-lg text-warmgray">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-8 text-white">
              If referrals drive your business, AI should be sending them your way.
            </h2>
            <Button href={SKOOL_URL} variant="primary">
              Join the Community
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
