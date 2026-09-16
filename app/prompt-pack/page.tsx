import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import NewsletterForm from '@/components/NewsletterForm';
import { REPORT_CHECKOUT_URL, REPORT_PRICE, REPORT_TURNAROUND } from '@/lib/constants';

const PDF_URL = '/ai-visibility-prompt-pack.pdf';
const PAGE_URL = 'https://signalstructure.ai/prompt-pack';

export const metadata = {
  title: 'The AI Visibility Prompt Pack | Signal & Structure AI',
  description:
    'Ten questions to run through ChatGPT, Claude, Perplexity, Gemini, and Copilot, so you can see exactly what a buyer sees when they ask AI about your business. Free download.',
  alternates: {
    canonical: '/prompt-pack',
  },
  openGraph: {
    title: 'The AI Visibility Prompt Pack',
    description: 'Ten questions. Five AI platforms. Fifty answers about what AI is really saying about your business.',
    url: PAGE_URL,
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'AI Visibility Prompt Pack', item: PAGE_URL },
  ],
};

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'DigitalDocument',
  '@id': PAGE_URL + '#document',
  name: 'The AI Visibility Prompt Pack',
  description:
    'Ten questions to run through every major AI platform, so a business owner can see exactly what a buyer sees when they ask AI about the company.',
  url: PAGE_URL,
  isAccessibleForFree: true,
  encodingFormat: 'application/pdf',
  contentUrl: 'https://signalstructure.ai' + PDF_URL,
  author: {
    '@type': 'Person',
    '@id': 'https://signalstructure.ai/#lenise',
    name: 'Lenise Kenney',
    jobTitle: 'Founder, Signal & Structure AI',
  },
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
};

const platforms = ['ChatGPT', 'Claude', 'Perplexity', 'Gemini', 'Microsoft Copilot'];

const categories = [
  { n: '01', t: 'What AI knows at all', b: 'Does it know your company exists, what you do, and where you are?' },
  { n: '02', t: 'How AI describes you to a buyer', b: 'What a buyer reads right before deciding whether you are worth a meeting.' },
  { n: '03', t: 'How AI positions you against competitors', b: 'Who AI plays matchmaker with, whether you asked it to or not.' },
  { n: '04', t: 'How AI reads leadership and reputation', b: 'Where old news quietly becomes today’s answer.' },
  { n: '05', t: 'Details AI gets wrong most often', b: 'Services, hours, addresses. Small facts, first thing a buyer notices.' },
];

export default function PromptPackPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }} />

      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto px-6 py-20 lg:py-28 text-center">
          <FadeIn>
            <SectionLabel variant="light">FREE DOWNLOAD</SectionLabel>
            <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] text-white tracking-tight mb-6 mt-2">
              The AI Visibility<br />Prompt Pack
            </h1>
            <p className="font-body text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Ten questions to run through every major AI platform, so you can see exactly
              what a buyer sees when they search for your company. No sign-up required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PDF_URL}
                download
                className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-white font-body font-semibold px-8 py-4 rounded-button shadow-button hover:shadow-button-hover transition-all text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                Download the Prompt Pack
              </a>
            </div>
            <p className="font-body text-xs text-white/50 mt-4">PDF, 10 pages. Opens directly, nothing to sign up for.</p>
          </FadeIn>
        </div>
      </section>

      {/* What's inside */}
      <section className="section-padding bg-stone">
        <div className="max-w-content mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <SectionLabel>WHAT&rsquo;S INSIDE</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              Five categories. Ten prompts. Fifty answers.
            </h2>
            <p className="font-body text-warmgray text-lg max-w-2xl mx-auto">
              Run every prompt through every platform below. The pattern lives in the
              comparison, not in any single answer.
            </p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {platforms.map((p) => (
              <span
                key={p}
                className="bg-white rounded-full px-5 py-2 font-body text-sm font-semibold text-navy shadow-card"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {categories.map((c) => (
              <FadeIn key={c.n}>
                <div className="grid grid-cols-[auto_1fr] gap-5 bg-white rounded-card shadow-card p-6">
                  <div className="font-display text-3xl text-copper leading-none">{c.n}</div>
                  <div>
                    <h3 className="font-display text-xl text-navy mb-1">{c.t}</h3>
                    <p className="font-body text-warmgray text-sm leading-relaxed">{c.b}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="section-padding">
        <div className="max-w-content mx-auto px-6 text-center">
          <FadeIn>
            <SectionLabel>WANT IT EMAILED TOO</SectionLabel>
            <h2 className="font-display text-3xl text-navy mb-4 mt-2">
              Send yourself a copy and get The Weekly Signal.
            </h2>
            <p className="font-body text-warmgray max-w-xl mx-auto mb-8">
              Optional. The download above works on its own, this just gets a copy into
              your inbox and adds you to our short, honest weekly email about AI visibility.
            </p>
            <NewsletterForm source="talk-prompt-pack" buttonText="Email it to me" />
          </FadeIn>
        </div>
      </section>

      {/* What to look for */}
      <section className="section-padding bg-stone">
        <div className="max-w-prose mx-auto px-6">
          <FadeIn>
            <SectionLabel>READING THE RESULTS</SectionLabel>
            <h2 className="font-display text-3xl text-navy mb-6 mt-2">
              Five patterns worth catching.
            </h2>
            <ul className="space-y-4 font-body text-ink">
              <li className="flex items-start gap-3">
                <SignalDot size={6} className="mt-2 flex-shrink-0" />
                <span><strong className="text-navy">Contradictions between platforms.</strong> A sign your underlying data is fragmented.</span>
              </li>
              <li className="flex items-start gap-3">
                <SignalDot size={6} className="mt-2 flex-shrink-0" />
                <span><strong className="text-navy">Outdated facts.</strong> Old leadership, retired services, an address you left years ago.</span>
              </li>
              <li className="flex items-start gap-3">
                <SignalDot size={6} className="mt-2 flex-shrink-0" />
                <span><strong className="text-navy">Invented facts.</strong> Anything AI states with confidence that simply is not true.</span>
              </li>
              <li className="flex items-start gap-3">
                <SignalDot size={6} className="mt-2 flex-shrink-0" />
                <span><strong className="text-navy">Silence.</strong> &ldquo;I don&rsquo;t have information about this company.&rdquo; That absence is its own finding.</span>
              </li>
              <li className="flex items-start gap-3">
                <SignalDot size={6} className="mt-2 flex-shrink-0" />
                <span><strong className="text-navy">Wrong competitors.</strong> Companies AI compares you to that are not your peers.</span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* CTA to Signal Score */}
      <section className="relative bg-navy text-white section-padding overflow-hidden">
        <GridTexture />
        <div className="relative z-10 max-w-prose mx-auto px-6 text-center">
          <FadeIn>
            <SectionLabel variant="light">WHAT&rsquo;S NEXT</SectionLabel>
            <h2 className="font-display text-3xl lg:text-4xl text-white leading-tight mb-6 mt-2">
              Fifty answers is the start. The Signal Score is the full diagnostic.
            </h2>
            <p className="font-body text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              If anything you found surprised you, the Signal Score tests dozens of prompts
              across all five platforms and scores the accuracy, completeness, and consistency
              of what AI says about you, delivered as a PDF within {REPORT_TURNAROUND}.
            </p>
            <Button href={REPORT_CHECKOUT_URL} variant="primary" className="text-lg px-8 py-4">
              Get Your Signal Score, {REPORT_PRICE}
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
