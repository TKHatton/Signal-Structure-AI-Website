import Link from 'next/link';
import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';

const PDF_URL = '/the-2026-triangle-ai-visibility-study.pdf';
const PAGE_URL = 'https://signalstructure.ai/resources/triangle-ai-visibility-study';

export const metadata = {
  title: 'The 2026 Triangle AI Visibility Study | Signal & Structure AI',
  description:
    'A July 2026 benchmark of how ChatGPT, Claude, Gemini, and Perplexity identify and describe 52 small businesses across Durham, Raleigh, Cary, Chapel Hill, Morrisville, and Apex. None reached the top visibility tier.',
  alternates: { canonical: '/resources/triangle-ai-visibility-study' },
  openGraph: {
    title: 'The 2026 Triangle AI Visibility Study',
    description:
      'We asked ChatGPT, Claude, Gemini, and Perplexity about 52 Triangle small businesses. Not one came through clearly.',
    url: PAGE_URL,
    type: 'article',
    images: [
      {
        url: 'https://signalstructure.ai/triangle-study/figure-1-signal-distribution.png',
        width: 1200,
        height: 630,
        alt: 'Visibility tier distribution across 52 Triangle businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 2026 Triangle AI Visibility Study',
    description: 'We tested 52 Triangle small businesses against 4 AI platforms. Not one came through clearly.',
    images: ['https://signalstructure.ai/triangle-study/figure-1-signal-distribution.png'],
  },
};

const scholarlyArticleSchema = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  '@id': PAGE_URL + '#article',
  headline: 'The 2026 Triangle AI Visibility Study',
  alternativeHeadline: 'How 52 Triangle-area small businesses show up when people ask AI about them',
  description:
    'A July 2026 benchmark of how ChatGPT, Claude, Gemini, and Perplexity identify and describe 52 small businesses across Durham, Raleigh, Cary, Chapel Hill, Morrisville, and Apex.',
  about: [
    'AI visibility',
    'AI discoverability',
    'small business',
    'benchmark study',
    'ChatGPT',
    'Claude',
    'Gemini',
    'Perplexity',
    'Research Triangle',
  ],
  keywords:
    'AI visibility, AI discoverability, benchmark study, Triangle, Durham, Raleigh, ChatGPT, Claude, Gemini, Perplexity, small business, hallucination, Signal Score',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  datePublished: '2026-07-22',
  dateModified: '2026-07-22',
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  spatialCoverage: {
    '@type': 'Place',
    name: 'Research Triangle, North Carolina',
  },
  encoding: {
    '@type': 'MediaObject',
    contentUrl: 'https://signalstructure.ai' + PDF_URL,
    encodingFormat: 'application/pdf',
    name: 'The 2026 Triangle AI Visibility Study (PDF)',
  },
  author: {
    '@type': 'Person',
    '@id': 'https://signalstructure.ai/#lenise',
    name: 'Lenise Kenney',
    jobTitle: 'Founder, Signal & Structure AI',
    url: 'https://signalstructure.ai/about',
  },
  publisher: {
    '@id': 'https://signalstructure.ai/#organization',
  },
  hasPart: {
    '@type': 'WebPageElement',
    name: 'Dataset',
    description: '52 small businesses across six Triangle communities, tested against four AI platforms, producing 208 platform responses.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://signalstructure.ai/resources' },
    { '@type': 'ListItem', position: 3, name: 'The 2026 Triangle AI Visibility Study', item: PAGE_URL },
  ],
};

/* ===== Reusable bits ===== */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-copper mb-3 flex items-center gap-2">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-copper" />
      {children}
    </p>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="bg-stone p-6 border-l-2 border-copper">
      <div className="font-display text-4xl text-navy leading-none mb-2">{n}</div>
      <div className="font-body text-sm text-warmgray leading-snug">{l}</div>
    </div>
  );
}

const tiers = [
  { name: 'Strong Signal', band: '7.5 and above', count: '0', share: '0%', meaning: 'Platforms find the business and describe it accurately.' },
  { name: 'Weak Signal', band: '5.0 to 7.4', count: '11', share: '21%', meaning: 'Platforms find the business but with gaps or errors.' },
  { name: 'Low Signal', band: '2.5 to 4.9', count: '31', share: '60%', meaning: 'Platforms have little correct to say about the business.' },
  { name: 'No Signal', band: 'Below 2.5', count: '10', share: '19%', meaning: 'Platforms cannot identify the business, or describe a different one.' },
];

const platforms = [
  { name: 'Perplexity', accuracy: '2.48', median: '2.0', hallRate: '71%', hallCount: '37 of 52' },
  { name: 'Claude', accuracy: '2.29', median: '2.0', hallRate: '87%', hallCount: '45 of 52' },
  { name: 'Gemini', accuracy: '0.90', median: '0.0', hallRate: '37%', hallCount: '19 of 52' },
  { name: 'ChatGPT', accuracy: '0.65', median: '0.0', hallRate: '15%', hallCount: '8 of 52' },
];

const industries = [
  { name: 'Dental', n: 14, score: '4.77' },
  { name: 'Home Services', n: 14, score: '3.96' },
  { name: 'Beauty', n: 3, score: '3.70' },
  { name: 'Financial Services', n: 3, score: '3.33' },
  { name: 'Restaurant', n: 7, score: '1.49' },
];

export default function TriangleStudyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ===== HERO ===== */}
      <section className="relative bg-navy text-white overflow-hidden">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto px-6 py-24 lg:py-32">
          <FadeIn>
            <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-copper mb-6 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-copper" />
              Benchmark Study &middot; First Edition
            </p>
            <p className="font-body uppercase tracking-[0.4em] text-white/55 mb-2">The 2026</p>
            <h1 className="font-display text-6xl lg:text-8xl leading-[0.95] text-white tracking-tight mb-8">
              Triangle AI<br />Visibility Study
            </h1>
            <p className="font-display text-2xl lg:text-3xl text-white/85 leading-snug max-w-3xl mb-10">
              How 52 Triangle-area small businesses show up when people ask AI about them.
            </p>
            <div className="h-px bg-white/15 max-w-2xl mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl text-sm text-white/70 mb-10">
              <div>
                <span className="font-body text-xs font-bold tracking-[0.12em] uppercase text-copper block mb-1">Author</span>
                Lenise Kenney<br />Founder
              </div>
              <div>
                <span className="font-body text-xs font-bold tracking-[0.12em] uppercase text-copper block mb-1">Published</span>
                July 22, 2026<br />Data collected July 20 and 21
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PDF_URL}
                download
                className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-white font-body font-semibold px-6 py-3 rounded-button shadow-button hover:shadow-button-hover transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                Download PDF
              </a>
              <a
                href="#read"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-body font-semibold px-6 py-3 rounded-button transition-all"
              >
                Read on this page
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== PDF EMBED ===== */}
      <section className="section-padding bg-stone-dark">
        <div className="max-w-content mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <SectionLabel>The Document</SectionLabel>
              <h2 className="font-display text-section-heading text-navy mb-3">
                Read the full study.
              </h2>
              <p className="font-body text-warmgray max-w-2xl mx-auto">
                Embedded below for direct reading. Use the download button above to save a copy,
                or scroll past for the full text rendered in the browser.
              </p>
            </div>
            <div className="bg-white rounded-card shadow-card-hover overflow-hidden border border-stone-dark">
              <object
                data={PDF_URL + '#view=FitH'}
                type="application/pdf"
                className="w-full"
                style={{ height: '85vh', minHeight: '720px' }}
              >
                <div className="p-12 text-center">
                  <p className="text-warmgray mb-4">
                    Your browser cannot display PDFs inline.
                  </p>
                  <a href={PDF_URL} download className="text-copper font-semibold underline">
                    Download the PDF instead
                  </a>
                </div>
              </object>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== HTML READING VERSION ===== */}
      <article id="read" className="bg-white">

        {/* Key findings */}
        <section className="section-padding">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>Key Findings</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl text-navy leading-tight mb-6">
                Not one of 52 came through clearly.
              </h2>
              <p className="font-body text-lg text-ink leading-relaxed mb-5">
                In July 2026 we asked four major AI platforms, ChatGPT, Claude, Gemini, and Perplexity, about
                52 small businesses across the Triangle. We scored every answer against each business&rsquo;s own
                published information. The results were consistent, and they were poor.
              </p>
            </FadeIn>

            <FadeIn>
              <Eyebrow>At a glance</Eyebrow>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-10">
                <Stat n="0 of 52" l="Businesses that reached the top visibility tier on any platform" />
                <Stat n="79%" l="Landed in the two lowest visibility tiers (41 of 52 businesses)" />
                <Stat n="2.48/10" l="Mean accuracy of the best-performing platform, Perplexity" />
                <Stat n="45 of 52" l="Claude responses that included a fabricated fact" />
              </div>
            </FadeIn>

            <FadeIn>
              <ul className="space-y-4 mb-8">
                <li className="font-body text-ink leading-relaxed">
                  <strong className="text-navy">Not one of the 52 businesses came through clearly.</strong>{' '}
                  Zero reached the top visibility tier. Across four AI platforms, every business had gaps.
                </li>
                <li className="font-body text-ink leading-relaxed">
                  <strong className="text-navy">Ten businesses (19%) were absent entirely.</strong>{' '}
                  No platform could identify them at all, or the platforms described a different business.
                </li>
                <li className="font-body text-ink leading-relaxed">
                  <strong className="text-navy">The platforms failed in two different ways.</strong>{' '}
                  ChatGPT and Gemini more often said nothing. Claude and Perplexity more often filled the
                  gap with invented details.
                </li>
                <li className="font-body text-ink leading-relaxed">
                  <strong className="text-navy">The businesses that did best had done ordinary web work.</strong>{' '}
                  Those with structured data and fuller website content scored higher, even though none had
                  set out to prepare for AI.
                </li>
              </ul>

              <blockquote className="relative font-display text-2xl lg:text-3xl text-navy leading-snug pl-10 pr-6 py-6 border-l-2 border-copper my-12">
                <span className="absolute left-3 top-2 text-5xl text-copper leading-none">&ldquo;</span>
                Not one of the 52 Triangle small businesses we tested came through clearly to AI. The
                best-performing platform still got most of them wrong.
              </blockquote>
            </FadeIn>
          </div>
        </section>

        {/* What we tested */}
        <section className="section-padding bg-stone">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>The Test</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                Four platforms, three questions, 208 answers.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-4">
                In July 2026, Signal &amp; Structure AI checked how 52 small businesses across the Triangle
                appear to four AI platforms: ChatGPT, Claude, Gemini, and Perplexity. The businesses span
                six communities and eleven industries. Durham accounted for 24 of them, Cary 11, Raleigh 9,
                Chapel Hill 5, Morrisville 2, and Apex 1.
              </p>
              <p className="font-body text-ink leading-relaxed mb-4">
                For each business, we asked the four platforms the kinds of questions a customer would ask
                before choosing a local service: what the business is, what it offers, and whether it would
                be recommended. We then measured two things. First, accuracy: how correctly each platform
                described the business against verified facts, on a 0 to 10 scale. Second, hallucination:
                how often a platform stated something false as if it were true. That produced 208 platform
                responses in total, four for each business.
              </p>
              <p className="font-body text-ink leading-relaxed">
                The result is a snapshot of one moment in time for one region. It is not a forecast, and it
                does not name any business. Every number below is aggregate.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Finding 1 */}
        <section className="section-padding">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>Finding 1</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                Nobody reached the top.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-8">
                We sort each business into one of four visibility tiers based on how well the four platforms
                find and describe it. The figure below shows where the 52 businesses fell.
              </p>

              <div className="my-8">
                <Image
                  src="/triangle-study/figure-1-signal-distribution.png"
                  alt="Donut chart of visibility tier distribution across 52 businesses"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-card border border-stone-dark"
                />
                <p className="font-body text-sm text-warmgray mt-3">
                  <span className="font-bold uppercase tracking-[0.1em] text-copper text-xs mr-2">Figure 1</span>
                  Most Triangle businesses tested landed in the two lowest visibility tiers. None reached the top.
                </p>
              </div>

              <div className="overflow-x-auto rounded-card border border-stone-dark shadow-card my-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white text-left">
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Visibility Tier</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Businesses</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Share</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {tiers.map((t, i) => (
                      <tr key={t.name} className={i % 2 === 1 ? 'bg-stone/30' : ''}>
                        <td className="px-4 py-3 text-ink font-semibold text-navy">{t.name}</td>
                        <td className="px-4 py-3 font-mono text-navy font-semibold">{t.count}</td>
                        <td className="px-4 py-3 font-mono text-navy font-semibold">{t.share}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="font-body text-ink leading-relaxed mb-4">
                Zero businesses reached Strong. Eleven reached Weak, meaning a platform could find them but
                described them with gaps or errors. The other 41 were either barely visible or not visible at
                all. The ten in the No Signal tier were the starkest case: when we asked about them, the
                platforms could not identify them, or described a different business entirely.
              </p>
              <p className="font-body text-ink leading-relaxed">
                This is the headline of the study. A customer who asks an AI platform about businesses in
                these categories is unlikely to hear any of these 52 named correctly, and for ten of them,
                is unlikely to hear them named at all.
              </p>

              <blockquote className="relative font-display text-2xl lg:text-3xl text-navy leading-snug pl-10 pr-6 py-6 border-l-2 border-copper my-12">
                <span className="absolute left-3 top-2 text-5xl text-copper leading-none">&ldquo;</span>
                For ten of the 52 businesses, AI platforms could not identify them at all, or described a
                different business entirely.
              </blockquote>
            </FadeIn>
          </div>
        </section>

        {/* Finding 2 */}
        <section className="section-padding bg-stone">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>Finding 2</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                Even the best platform got most things wrong.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-8">
                Accuracy was low across all four platforms. The figure below shows the average score each
                platform earned against verified facts.
              </p>

              <div className="my-8">
                <Image
                  src="/triangle-study/figure-2-platform-accuracy.png"
                  alt="Bar chart of mean accuracy by AI platform"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-card border border-stone-dark bg-white"
                />
                <p className="font-body text-sm text-warmgray mt-3">
                  <span className="font-bold uppercase tracking-[0.1em] text-copper text-xs mr-2">Figure 2</span>
                  Every platform averaged under 2.5 out of 10 on accuracy. Perplexity led, ChatGPT trailed.
                </p>
              </div>

              <div className="overflow-x-auto rounded-card border border-stone-dark shadow-card my-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white text-left">
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Platform</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Mean Accuracy (0-10)</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Median</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Hallucination Rate</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {platforms.map((p, i) => (
                      <tr key={p.name} className={i % 2 === 1 ? 'bg-stone/30' : ''}>
                        <td className="px-4 py-3 text-ink font-semibold text-navy">{p.name}</td>
                        <td className="px-4 py-3 font-mono text-navy font-semibold">{p.accuracy}</td>
                        <td className="px-4 py-3 font-mono text-navy font-semibold">{p.median}</td>
                        <td className="px-4 py-3 font-mono text-navy font-semibold">{p.hallRate} <span className="text-warmgray text-xs">({p.hallCount})</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="font-body text-ink leading-relaxed mb-4">
                Perplexity scored highest and still averaged under a quarter of the available points. ChatGPT
                and Gemini both had a median of zero, which means at least half of their responses earned no
                accuracy credit at all.
              </p>
              <p className="font-body text-ink leading-relaxed mb-8">
                The hallucination numbers tell the other half of the story and look contradictory at first.
              </p>

              <div className="my-8">
                <Image
                  src="/triangle-study/figure-3-hallucination-rates.png"
                  alt="Bar chart of hallucination rate by AI platform"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-card border border-stone-dark bg-white"
                />
                <p className="font-body text-sm text-warmgray mt-3">
                  <span className="font-bold uppercase tracking-[0.1em] text-copper text-xs mr-2">Figure 3</span>
                  The platforms with higher accuracy also invented the most. Claude produced a false statement
                  in 45 of 52 responses.
                </p>
              </div>

              <p className="font-body text-ink leading-relaxed mb-4">
                Claude and Perplexity earned the best accuracy scores, yet they also invented the most. ChatGPT
                and Gemini invented the least, yet scored lowest on accuracy. The two sets of numbers fit
                together once you see that the platforms failed in two different ways.
              </p>
              <p className="font-body text-ink leading-relaxed mb-4">
                When ChatGPT and Gemini did not have solid information about a business, they more often
                returned little or nothing. That keeps their hallucination rate low, but it leaves the business
                invisible. Claude and Perplexity more often attempted a full answer. Sometimes that produced a
                correct detail, which lifted their accuracy score. More often it produced a confident
                description of the wrong business, wrong services, or wrong location.
              </p>
              <p className="font-body text-ink leading-relaxed">
                For a business owner, neither failure mode is good. One means a customer hears nothing about
                you. The other means a customer hears something false about you and has no way to know it is
                false.
              </p>

              <blockquote className="relative font-display text-2xl lg:text-3xl text-navy leading-snug pl-10 pr-6 py-6 border-l-2 border-copper my-12">
                <span className="absolute left-3 top-2 text-5xl text-copper leading-none">&ldquo;</span>
                The platforms that tried hardest to answer were also the ones most likely to make things up.
              </blockquote>
            </FadeIn>
          </div>
        </section>

        {/* Finding 3 */}
        <section className="section-padding">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>Finding 3</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                Dental practices led, restaurants trailed.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-8">
                Visibility varied by industry. Each business in the study receives a single combined visibility
                score from 0 to 10, which blends how accurately the four platforms describe it with the quality
                of the machine-readable information the business publishes about itself. The appendix defines
                this score and the tier bands built on it.
              </p>

              <div className="overflow-x-auto rounded-card border border-stone-dark shadow-card my-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white text-left">
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Industry</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Businesses</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Mean Visibility Score (0-10)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {industries.map((ind, i) => (
                      <tr key={ind.name} className={i % 2 === 1 ? 'bg-stone/30' : ''}>
                        <td className="px-4 py-3 text-ink font-semibold text-navy">{ind.name}</td>
                        <td className="px-4 py-3 font-mono text-navy font-semibold">{ind.n}</td>
                        <td className="px-4 py-3 font-mono text-navy font-semibold">{ind.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="font-body text-ink leading-relaxed mb-4">
                Dental practices came out ahead of every other category. They tend to keep detailed, consistent
                listings and structured websites, which gives AI platforms more to work with. Home services
                businesses, the other large group in the sample, sat in the middle.
              </p>
              <p className="font-body text-ink leading-relaxed">
                Restaurants scored worst by a wide margin, at 1.49. Many rely on third-party platforms and
                social media rather than their own detailed websites, so the information an AI platform can
                read directly about them is thin. Several other industries appeared in the sample in smaller
                numbers, including legal, fitness, healthcare, real estate, and consulting. Those groups were
                too small to report on their own, so we have left them out of the industry comparison rather
                than draw conclusions from two or three businesses.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Finding 4 */}
        <section className="section-padding bg-stone">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>Finding 4</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                Ordinary web work carried over.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-4">
                None of the 52 businesses had set out to prepare for AI. Yet some were easier for AI platforms
                to read than others, and the reason was ordinary website quality.
              </p>
              <p className="font-body text-ink leading-relaxed mb-4">
                Businesses with structured data on their sites scored higher on accuracy than those without.
                Businesses with fuller, more complete website content also scored higher than those with thin
                content. Neither group had done anything AI-specific. They had built solid websites for regular
                search reasons, and that work carried over to how AI platforms understood them.
              </p>
              <p className="font-body text-ink leading-relaxed">
                This is a correlation, not proof of cause, and the sample is small. But the direction is
                consistent with what we see in individual audits. AI platforms read the open web. A business
                that has published clear, structured, complete information about itself gives those platforms
                something accurate to repeat. A business that has not leaves the platforms to guess, and the
                guesses are often wrong.
              </p>

              <blockquote className="relative font-display text-2xl lg:text-3xl text-navy leading-snug pl-10 pr-6 py-6 border-l-2 border-copper my-12">
                <span className="absolute left-3 top-2 text-5xl text-copper leading-none">&ldquo;</span>
                The businesses that did best had never done AI optimization. They had built solid websites for
                regular search, and that work carried over.
              </blockquote>
            </FadeIn>
          </div>
        </section>

        {/* What this means */}
        <section className="section-padding">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>What This Means</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                Three observations for Triangle businesses.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-8">
                More people now ask AI platforms for local recommendations before they open a search engine or
                a map. This study measured what the platforms say when asked directly about 52 Triangle
                businesses, and the answer is: very little, and much of it wrong.
              </p>

              <div className="grid grid-cols-[auto_1fr] gap-6 mb-8">
                <div className="font-display text-5xl text-copper leading-none">01</div>
                <div>
                  <h4 className="font-display text-xl text-navy mb-2">Being invisible to AI is not a sign of a failing business.</h4>
                  <p className="font-body text-ink leading-relaxed">
                    Several of the businesses in the lowest tiers are established and well run. They simply
                    have not published their information in a way AI platforms can read cleanly, and most
                    owners do not yet know the gap exists.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-6 mb-8">
                <div className="font-display text-5xl text-copper leading-none">02</div>
                <div>
                  <h4 className="font-display text-xl text-navy mb-2">A good review profile is not enough on its own.</h4>
                  <p className="font-body text-ink leading-relaxed">
                    AI platforms build their answers from what they can read across the open web, not from a
                    single strong listing. When the underlying website information is thin or inconsistent,
                    even a business with strong reviews can come through as No Signal.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-6 mb-10">
                <div className="font-display text-5xl text-copper leading-none">03</div>
                <div>
                  <h4 className="font-display text-xl text-navy mb-2">The work that correlated with better results is not exotic.</h4>
                  <p className="font-body text-ink leading-relaxed">
                    Clear website content and structured, consistent business information are the same things
                    that help with ordinary search. The businesses that scored best in this study got there
                    without any AI strategy at all.
                  </p>
                </div>
              </div>

              <div className="bg-stone p-8 border-l-2 border-copper my-8">
                <p className="font-display text-xl lg:text-2xl text-navy leading-snug">
                  The businesses that scored best had no AI strategy at all. They published clear, complete,
                  consistent information, and the platforms repeated it.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Appendix / Methodology */}
        <section className="section-padding bg-stone">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>Appendix</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-8">
                How this study was done.
              </h2>

              <h3 className="font-display text-xl text-navy mb-2 mt-6">Who ran it</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                This study was conducted by Signal &amp; Structure AI, a Durham company that works on AI
                visibility for businesses. We are naming that up front because it matters when reading a
                vendor-produced benchmark. The aggregated dataset behind every figure in this study is
                available to journalists and researchers on request.
              </p>

              <h3 className="font-display text-xl text-navy mb-2 mt-6">When</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                All platform queries were run July 20 and 21, 2026. Every business was tested in the same
                window, so no business was measured against a different version of any platform.
              </p>

              <h3 className="font-display text-xl text-navy mb-2 mt-6">The sample</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                52 small businesses across Durham (24), Cary (11), Raleigh (9), Chapel Hill (5), Morrisville
                (2), and Apex (1), spanning eleven industry categories. Businesses were identified through
                public business directory searches, not drawn from our client list, and none is a client. Each
                business needed a working public website to be included. A small number of businesses whose
                checks failed to complete for technical reasons were excluded before analysis rather than
                scored incomplete.
              </p>

              <h3 className="font-display text-xl text-navy mb-2 mt-6">The platforms</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                Four AI platforms were queried through their standard interfaces: ChatGPT (GPT-4o), Claude
                (Claude Sonnet 4), Gemini (Gemini 2.0 Flash), and Perplexity (Sonar). Model versions are
                listed so the snapshot can be compared fairly against future editions.
              </p>

              <h3 className="font-display text-xl text-navy mb-2 mt-6">The questions</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                Each platform was asked the same three kinds of questions about every business: what the
                business is, what it offers, and whether the platform would recommend it. These mirror what
                a prospective customer asks before choosing a local service. Illustrative phrasings, not the
                exact wording used: &ldquo;Tell me about [business name],&rdquo; &ldquo;What services does
                [business name] offer?,&rdquo; &ldquo;Would you recommend [business name]?&rdquo; We do not
                publish the exact wording, for one reason: this is a recurring benchmark, and keeping the
                question set fixed and unpublished is what lets future editions be compared honestly against
                this one.
              </p>

              <h3 className="font-display text-xl text-navy mb-2 mt-6">Scoring</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                Each platform response was scored 0 to 10 for factual accuracy against the business&rsquo;s
                own published information: its website and its public listings. The same rubric was applied
                to every response, every platform, every business. One boundary case matters for reading the
                numbers: a statement the published record could not confirm earned no accuracy credit, but it
                was only counted as a fabrication when it conflicted with that record or described a different
                business. So the accuracy scores measure agreement with what the business has published, and
                the hallucination flags mark active contradiction, not mere absence.
              </p>

              <h3 className="font-display text-xl text-navy mb-2 mt-6">Why silence scores low</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                A platform that returns nothing about a business, or declines to answer, earns a low accuracy
                score. This is deliberate, and it is why the median accuracy for ChatGPT and Gemini is zero.
                The study measures what a customer actually learns when they ask, and a customer who gets no
                answer learns nothing. A skeptic could argue this is unfair to cautious platforms, and we
                would agree it penalizes caution. From the business&rsquo;s point of view, though, the outcome
                is identical: the customer moves on. We report hallucination rates separately for exactly this
                reason, so silence and fabrication are visible as different failures.
              </p>

              <h3 className="font-display text-xl text-navy mb-2 mt-6">The combined score and the tiers</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                Beyond per-response accuracy, each business receives one combined visibility score from 0 to
                10. It blends two things: how accurately the four platforms describe the business, and the
                quality and completeness of the machine-readable information the business publishes about
                itself, which is what the platforms have to work from. The exact weighting inside that score
                is proprietary. The tier bands applied to it are not, and they were fixed before any Triangle
                business was tested, not drawn afterward.
              </p>

              <div className="overflow-x-auto rounded-card border border-stone-dark shadow-card my-6">
                <table className="w-full text-sm">
                  <tbody className="bg-white">
                    {tiers.map((t, i) => (
                      <tr key={t.name} className={i < tiers.length - 1 ? 'border-b border-stone-dark' : ''}>
                        <td className="px-4 py-3 align-top w-40">
                          <span className="font-body font-bold uppercase tracking-[0.08em] text-copper text-xs">
                            {t.name}
                          </span>
                        </td>
                        <td className="px-4 py-3 align-top w-32 font-mono text-navy font-semibold">{t.band}</td>
                        <td className="px-4 py-3 align-top text-ink text-sm leading-relaxed">{t.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-display text-xl text-navy mb-2 mt-6">Limitations</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                This is a one-time snapshot of one region, not a trend line. AI platform answers vary between
                runs, so any individual response may differ on a later date. Several industries appear in
                numbers too small to report separately. One class of business-listing signal was set aside for
                this edition because of a data-collection issue on our side, so this study reports on website
                content and platform-response signals only. Business names are not disclosed, and all figures
                are aggregate.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* CTA + about */}
        <section className="relative bg-navy text-white section-padding overflow-hidden">
          <GridTexture />
          <div className="relative z-10 max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>Media &amp; Data Requests</Eyebrow>
              <h2 className="font-display text-4xl text-white leading-tight mb-6">
                Journalists and researchers, welcome.
              </h2>
              <p className="font-body text-white/85 leading-relaxed mb-4">
                We can share the aggregated dataset behind every figure in this study, industry-level
                breakdowns, or a walkthrough of the methodology. No individual business results are shared
                with anyone, including the press.
              </p>
              <p className="font-body text-white/85 leading-relaxed mb-10">
                Contact <a href="mailto:hello@signalstructure.ai" className="text-copper hover:text-copper-light underline">hello@signalstructure.ai</a>.
              </p>

              <div className="bg-white/10 p-8 border-l-2 border-copper rounded-r-card mb-10">
                <p className="font-display text-2xl lg:text-3xl text-white leading-snug">
                  The Triangle AI Visibility Study is the first edition of a recurring benchmark. Future
                  editions will track how these numbers change and extend to other cities.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/signal-pulse" variant="primary">
                  Try Signal Pulse (free)
                </Button>
                <Button href="/resources" variant="secondary">
                  All Resources
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About */}
        <section className="section-padding bg-stone">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>About</Eyebrow>
              <h2 className="font-display text-3xl text-navy leading-tight mb-6">
                Signal &amp; Structure AI.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-4">
                Signal &amp; Structure AI is a Durham, NC company that measures how AI platforms find and
                describe businesses. Founded by Lenise Kenney and Julian Bass.
              </p>
              <p className="font-body text-xs text-warmgray mt-10">
                The 2026 Triangle AI Visibility Study. Signal &amp; Structure AI. Data collected July 20 and
                21, 2026. n=52 businesses, 208 platform responses across ChatGPT, Claude, Gemini, and
                Perplexity. Published July 22, 2026.
              </p>
              <div className="mt-8 pt-8 border-t border-stone-dark">
                <Link href="/resources" className="font-body text-copper hover:text-copper-dark transition-colors">
                  &larr; Back to all resources
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </article>
    </main>
  );
}
