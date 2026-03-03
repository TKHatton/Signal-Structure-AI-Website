import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import StepCard from '@/components/StepCard';
import ValueCard from '@/components/ValueCard';
import SignalDot from '@/components/SignalDot';
import { BOOKING_URL } from '@/lib/constants';

export const metadata = {
  title: 'How It Works | Signal & Structure AI',
  description: 'Our five-step process: Discovery, Structure, Connection, Testing, and Ongoing management. We organize your business information so AI can find and recommend you.',
};

export default function HowItWorksPage() {
  return (
    <main>
      {/* Section 1: Page Header */}
      <section className="relative bg-navy text-white py-40 md:py-48">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto px-6">
          <FadeIn className="text-center">
            <SectionLabel variant="light">OUR PROCESS</SectionLabel>
            <h1 className="font-display text-4xl md:text-5xl mb-6">
              How It Works
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              A clear process for getting your business into the AI referral
              conversation and making sure the details are right when it happens.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Intro */}
      <section className="py-24 md:py-32">
        <div className="max-w-prose mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl text-navy mb-6 text-center">
              You do not need more content. You need a different kind of structure.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                The strategies that made you findable on Google do not automatically
                make you findable by AI.
              </p>
              <p>
                Google worked on keywords. You put the right words on your page, Google
                matched them to a search, and you showed up. AI does not work that way.
                AI tries to understand your entire business and then decides whether to
                mention you based on how well it can make sense of your information.
              </p>
              <p>
                Most businesses already have everything AI needs. Services, descriptions,
                policies, expertise. The information exists. It is just not set up for
                how AI looks for it.
              </p>
              <p>
                That is what our process fixes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 3: The Five Steps */}
      <section className="py-24 md:py-32 bg-stone-dark">
        <div className="max-w-content mx-auto px-6 space-y-32">
          {/* Step 1: Discovery */}
          <StepCard
            stepNumber="01"
            label="STEP 1"
            headline="We learn what your business actually does and how it really operates."
            body="We start with the real version of your business. How you actually describe your services when talking to a friend. What your customers care about most. What gets misunderstood. What you wish people knew. We also do something important here: we ask AI about your business right now. We record what it says across multiple platforms. That becomes your baseline. Your 'before' snapshot. If AI is ignoring you, we document that. If AI is getting things wrong, we document exactly what."
            visual={
              <div className="bg-stone p-8 rounded-card shadow-card">
                <div className="font-body text-sm font-semibold text-copper mb-4 uppercase tracking-wider">
                  SIGNAL CHECK RESULTS
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-navy">ChatGPT:</span>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-copper rounded"></div>
                        <div className="w-3 h-3 bg-copper rounded"></div>
                        <div className="w-3 h-3 bg-warmgray-light/30 rounded"></div>
                        <div className="w-3 h-3 bg-warmgray-light/30 rounded"></div>
                        <div className="w-3 h-3 bg-warmgray-light/30 rounded"></div>
                      </div>
                      <span className="font-mono text-navy font-bold">3.2</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-navy">Claude:</span>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-copper rounded"></div>
                        <div className="w-3 h-3 bg-warmgray-light/30 rounded"></div>
                        <div className="w-3 h-3 bg-warmgray-light/30 rounded"></div>
                        <div className="w-3 h-3 bg-warmgray-light/30 rounded"></div>
                        <div className="w-3 h-3 bg-warmgray-light/30 rounded"></div>
                      </div>
                      <span className="font-mono text-navy font-bold">1.8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-navy">Perplexity:</span>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-copper rounded"></div>
                        <div className="w-3 h-3 bg-copper rounded"></div>
                        <div className="w-3 h-3 bg-warmgray-light/30 rounded"></div>
                        <div className="w-3 h-3 bg-warmgray-light/30 rounded"></div>
                        <div className="w-3 h-3 bg-warmgray-light/30 rounded"></div>
                      </div>
                      <span className="font-mono text-navy font-bold">2.5</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-copper text-sm">
                  <SignalDot size={6} />
                  <span>Baseline captured</span>
                </div>
              </div>
            }
          />

          {/* Step 2: Structure */}
          <StepCard
            stepNumber="02"
            label="STEP 2"
            headline="We organize your information in a way AI can actually find and use."
            body="This is the core of what we do. We take everything from the discovery phase and organize it into clear categories. Services, messaging, policies, FAQs, boundaries. This is different from what most businesses have done before. You might already have a great website. But AI does not read it the way a person does. AI looks for structured, consistent information it can quickly pull from and trust. When your information is organized for AI, two things change. AI can find you when someone asks a relevant question. And AI describes you correctly when it does."
            visual={
              <div className="bg-white p-8 rounded-card shadow-card">
                <div className="font-body text-sm font-semibold text-copper mb-6 uppercase tracking-wider text-center">
                  YOUR KNOWLEDGE SYSTEM
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['Identity', 'Services', 'Messaging', 'Policies', 'FAQs', 'Guardrails'].map((category) => (
                    <div key={category} className="bg-stone p-3 rounded text-center">
                      <div className="font-body text-xs font-semibold text-navy">{category}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="w-12 h-12 bg-copper rounded-full flex items-center justify-center">
                    <SignalDot size={8} className="bg-white" />
                  </div>
                </div>
              </div>
            }
            reverse
          />

          {/* Step 3: Connection */}
          <StepCard
            stepNumber="03"
            label="STEP 3"
            headline="We connect AI directly to your organized information."
            body="Once the structure is in place, we plug AI tools into it. Instead of AI scanning the internet and piecing together a guess about your business, it pulls directly from your organized, verified information. This is where you feel the shift. AI stops talking about your business from the outside and starts speaking from the inside. Using your words. Your facts. Your boundaries. And because we build the structure to work across multiple platforms, it is not just one AI tool that can find you. It is all of them."
            visual={
              <div className="bg-white p-8 rounded-card shadow-card">
                <div className="font-body text-sm font-semibold text-copper mb-6 uppercase tracking-wider text-center">
                  AI PLATFORMS
                </div>
                <div className="flex flex-col items-center gap-6">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {['ChatGPT', 'Claude', 'Perplexity', 'Gemini'].map((platform) => (
                      <div key={platform} className="bg-stone p-4 rounded text-center font-body text-sm font-semibold text-navy">
                        {platform}
                      </div>
                    ))}
                  </div>
                  <div className="text-copper text-2xl">↓</div>
                  <div className="w-full bg-copper/10 border-2 border-copper p-4 rounded text-center">
                    <div className="font-body text-sm font-semibold text-navy">Your Knowledge System</div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Step 4: Testing */}
          <StepCard
            stepNumber="04"
            label="STEP 4"
            headline="We test every answer against what you told us is actually true."
            body="AI is known for making things up. It hallucinates. It fills in gaps with confident-sounding information that is completely wrong. That is why testing is not optional. We ask AI the same questions your customers would ask. Then we check every answer against the facts you gave us. If AI says you offer a service you do not offer, we fix it. If AI gets your pricing wrong, we fix it. If AI mentions something it should not, we add a guardrail. We also test whether AI recommends you when someone asks for a business in your category. Not just whether it knows about you, but whether it brings you up on its own. You get a scorecard. Accuracy scores. Discoverability scores. A clear picture of exactly where things improved."
            visual={
              <div className="bg-white p-8 rounded-card shadow-card">
                <div className="grid grid-cols-2 divide-x divide-stone-dark">
                  <div className="pr-4">
                    <div className="font-body text-sm font-semibold text-warmgray mb-3 uppercase tracking-wider">BEFORE</div>
                    <p className="font-body text-sm text-navy mb-3">"They offer..."</p>
                    <div className="flex items-center gap-2 text-status-red text-xs">
                      <SignalDot size={6} className="bg-status-red" />
                      <span className="font-semibold">Hallucination</span>
                    </div>
                  </div>
                  <div className="pl-4">
                    <div className="font-body text-sm font-semibold text-copper mb-3 uppercase tracking-wider">AFTER</div>
                    <p className="font-body text-sm text-navy mb-3">"They specialize in..."</p>
                    <div className="flex items-center gap-2 text-status-green text-xs">
                      <SignalDot size={6} className="bg-status-green" />
                      <span className="font-semibold">Accurate</span>
                    </div>
                  </div>
                </div>
              </div>
            }
            reverse
          />

          {/* Step 5: Ongoing */}
          <StepCard
            stepNumber="05"
            label="STEP 5"
            headline="We keep everything current as your business and AI platforms change."
            body="AI is not a set-it-and-forget-it situation. Two things are constantly changing. Your business changes. New services, pricing updates, team changes. And AI itself changes. New models come out. Platforms update how they find and rank information. Features get added every few weeks. If nobody is paying attention to both of those things, your accuracy and discoverability start slipping. For businesses that want long-term results, we manage this month to month. Updates, checks, and scorecards monthly. A full deep audit with strategy every quarter."
            visual={
              <div className="bg-white p-8 rounded-card shadow-card">
                <div className="font-body text-sm font-semibold text-copper mb-6 uppercase tracking-wider text-center">
                  TIMELINE
                </div>
                <div className="space-y-4">
                  {[
                    { month: 'Month 1', label: 'Updates + Check' },
                    { month: 'Month 2', label: 'Updates + Check' },
                    { month: 'Month 3', label: 'Updates + Check + AUDIT', highlight: true },
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
                  <div className="border-t-2 border-dashed border-stone-dark pt-4 text-center">
                    <div className="font-body text-xs text-warmgray">Repeating pattern...</div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Section 4: Why It Matters Block */}
      <section className="relative bg-navy text-white py-24 md:py-32">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl">
              What this process protects.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1}>
              <ValueCard
                title="Your referrals"
                description="AI recommends you instead of skipping you."
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <ValueCard
                title="Your accuracy"
                description="AI describes you correctly every time."
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <ValueCard
                title="Your reputation"
                description="No more wrong details floating around."
              />
            </FadeIn>
            <FadeIn delay={0.4}>
              <ValueCard
                title="Your time"
                description="We manage it so you do not have to."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 5: Best For / Not For */}
      <section className="py-24 md:py-32">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <h3 className="font-body text-2xl font-semibold text-navy mb-6">
                This works best for businesses who:
              </h3>
              <ul className="space-y-4">
                {[
                  'Know their reputation matters',
                  'Are tired of being described wrong or left out entirely',
                  'Understand that how people find businesses has changed',
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
                This is probably not the right fit if you:
              </h3>
              <ul className="space-y-4">
                {[
                  'Want overnight visibility hacks',
                  'Think keywords and a good website are still enough on their own',
                  'Are not ready to invest in something that actually works',
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

      {/* Section 6: Bottom CTA */}
      <section className="relative bg-navy text-white py-24 md:py-32">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              If referrals drive your business, AI should be sending them your way.
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
