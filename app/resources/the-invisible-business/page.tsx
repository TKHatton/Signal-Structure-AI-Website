import { Fragment } from 'react';
import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import { RESERVE_URL } from '@/lib/constants';

const PDF_URL = '/the-invisible-business.pdf';
const PAGE_URL = 'https://signalstructure.ai/resources/the-invisible-business';

export const metadata = {
  title: 'The Invisible Business — A White Paper | Signal & Structure AI',
  description:
    'A preliminary research white paper from Signal & Structure AI. Why your business exists in the real world but not in AI — and a framework for understanding AI visibility across six dimensions.',
  alternates: { canonical: '/resources/the-invisible-business' },
  openGraph: {
    title: 'The Invisible Business — A White Paper',
    description:
      'Why your business exists in the real world but not in AI. Twenty businesses tested. Not one reached Strong Signal.',
    url: PAGE_URL,
    type: 'article',
  },
};

const scholarlyArticleSchema = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  '@id': PAGE_URL + '#article',
  headline: 'The Invisible Business: Why Your Business Exists in the Real World But Not in AI',
  alternativeHeadline: 'A Framework for Understanding AI Visibility',
  description:
    'A preliminary research white paper introducing the Signal Strength framework and the six dimensions of AI visibility. Includes a dataset of twenty small businesses across four industries and four U.S. cities, evaluated against ChatGPT, Claude, and Gemini.',
  about: [
    'AI visibility',
    'AI discoverability',
    'small business',
    'structured data',
    'schema markup',
    'generative engine optimization',
  ],
  keywords:
    'AI visibility, AI discoverability, Signal Score, Signal Strength, schema markup, ChatGPT, Claude, Gemini, small business marketing, generative engine optimization, GEO',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  encoding: {
    '@type': 'MediaObject',
    contentUrl: 'https://signalstructure.ai' + PDF_URL,
    encodingFormat: 'application/pdf',
    name: 'The Invisible Business (PDF)',
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
  citation: [
    'Gartner. (2026). Gartner Predicts Search Engine Volume Will Drop 25% by 2026, Due to AI Chatbots and Virtual Agents.',
    'Google. (2026). AI Overviews: Expanding Access and Improving the Search Experience.',
    'OpenAI. (2026). ChatGPT Reaches 800 Million Weekly Active Users.',
    'Previsible. (2025–2026). AI Referral Traffic Conversion Rates.',
    'Princeton University, Georgia Tech, & IIT Delhi. (2024). GEO: Generative Engine Optimization.',
    'Search Engine Land. (2025). The Overlap Between Google Rankings and AI Citations.',
    'Semrush. (2025). The State of LLM Referral Traffic.',
  ],
  hasPart: {
    '@type': 'WebPageElement',
    name: 'Dataset',
    description: 'Twenty small businesses across four industries and four U.S. cities, scored on a 0–100 scale across Structured Data, Business Identity, and AI Presence.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://signalstructure.ai/resources' },
    { '@type': 'ListItem', position: 3, name: 'The Invisible Business', item: PAGE_URL },
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

const dataset = [
  { cat: 'Chiropractic Practices', rows: [
    ['Chiropractic practice', 'Atlanta', 56, 20, 60, 100],
    ['Chiropractic practice', 'Atlanta', 33, 25, 30, 100],
    ['Chiropractic practice', 'Austin', 51, 10, 35, 100],
    ['Chiropractic practice', 'Raleigh', 50, 25, 25, 100],
    ['Chiropractic practice', 'Chicago', 54, 25, 50, 100],
  ]},
  { cat: 'Pilates Studios', rows: [
    ['Pilates studio', 'Atlanta', 39, 10, 35, 56],
    ['Pilates studio', 'Raleigh', 57, 25, 70, 100],
    ['Pilates studio', 'Raleigh', 56, 25, 70, 100],
    ['Pilates studio', 'Chicago', 55, 35, 40, 100],
    ['Pilates studio', 'Austin', 49, 45, 30, 83],
  ]},
  { cat: 'Independent Realtors', rows: [
    ['Independent realtor', 'Atlanta', 48, 48, 5, 70],
    ['Independent realtor', 'Raleigh', 42, 25, 10, 100],
    ['Independent realtor', 'Austin', 52, 38, 35, 100],
    ['Independent realtor', 'Austin', 49, 28, 45, 100],
    ['Independent realtor', 'Chicago', 47, 38, 5, 70],
  ]},
  { cat: 'Bed & Breakfasts', rows: [
    ['Bed & breakfast', 'Atlanta', 53, 38, 70, 83],
    ['Bed & breakfast', 'Raleigh', 41, 0, 25, 100],
    ['Bed & breakfast', 'Austin', 40, 0, 30, 100],
    ['Bed & breakfast', 'Chicago', 43, 10, 35, 80],
    ['Bed & breakfast', 'Chicago', 55, 35, 100, 67],
  ]},
];

const levels = [
  { name: 'No Signal', meaning: 'AI cannot find or describe the business. Responses are blank, generic, or entirely fabricated.', feel: '"I don’t understand why nobody finds us online."' },
  { name: 'Low Signal', meaning: 'AI mentions the business but gets major details wrong. Wrong services, wrong location, fabricated information presented as fact.', feel: '"People keep asking about services we don’t even offer."' },
  { name: 'Weak Signal', meaning: 'AI has basic information correct but significant gaps exist. Some platforms know you, others don’t. Differentiators are missing.', feel: '"The basics are there but it doesn’t capture what makes us different."' },
  { name: 'Strong Signal', meaning: 'AI accurately represents the business across platforms. Identity, services, positioning, and differentiators are correct and consistent.', feel: '"When someone asks AI about us, they get the truth."' },
];

const dimensions = [
  { n: '01', name: 'Identity', q: 'Does AI know who you are?', body: 'If AI cannot correctly name your business, describe what you do, or distinguish you from competitors, every other dimension fails. Identity is the foundation.' },
  { n: '02', name: 'Services', q: 'Does AI know what you do?', body: 'Misrepresented services mean mismatched referrals. When AI tells a customer you offer something you don’t, or omits the service they need, the opportunity is lost before it starts.' },
  { n: '03', name: 'Positioning', q: 'Does AI know what makes you different?', body: 'A correct but generic description makes you interchangeable with every competitor. AI needs to understand your differentiators, not just your category.' },
  { n: '04', name: 'Location', q: 'Does AI know where you are?', body: 'For service-area and brick-and-mortar businesses, location accuracy directly determines whether AI refers local customers to you or to a competitor across town.' },
  { n: '05', name: 'Reputation', q: 'Does AI know what others say about you?', body: 'Reviews, awards, professional recognitions, and third-party endorsements carry disproportionate weight in AI’s decision-making. Without them, you lack the social proof AI uses to rank recommendations.' },
  { n: '06', name: 'Discoverability', q: 'Does AI recommend you when someone asks?', body: 'The ultimate test. When a potential customer asks AI for a recommendation in your category and location, are you in the answer? This dimension measures whether all other signals combine into actual visibility.' },
];

const causes = [
  { n: '01', t: 'No structured data.', b: 'Your website speaks human, not machine. Most small business websites are built for people to read: compelling copy, clean navigation, beautiful photography. But AI platforms don’t read websites the way humans do. They look for structured data: schema markup, metadata, clearly labeled information in formats machines can parse. Without it, your website is a book written in a language AI does not speak.' },
  { n: '02', t: 'Inconsistent information.', b: 'Conflicting details across the web create noise AI cannot resolve. If your Google Business Profile lists one address, your Yelp page shows another, and your website mentions a third set of services, AI faces a conflict it cannot untangle. It either picks one version (which may be wrong), tries to average them (which produces nonsense), or simply skips you.' },
  { n: '03', t: 'No third-party validation.', b: 'AI trusts what others say about you more than what you say about yourself. AI weighs third-party mentions, reviews, directory listings, press coverage, and professional citations heavily. If the only source of information about your business is your own website, AI has limited confidence in representing you.' },
  { n: '04', t: 'Thin or outdated content.', b: 'AI favors substantive, recent, well-organized information. A five-page website last updated in 2022 sends a weak signal. A business that regularly publishes detailed service descriptions, answers common questions, and maintains current information across platforms sends a much stronger one.' },
  { n: '05', t: 'No AI-specific optimization.', b: 'The rules for being found by Google are not the same as the rules for being represented by AI. Traditional SEO focuses on keywords, backlinks, and page authority. AI visibility depends on entity clarity, content extractability, and multi-platform presence.' },
];

export default function InvisibleBusinessPage() {
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
              A Signal &amp; Structure AI White Paper
            </p>
            <p className="font-body uppercase tracking-[0.4em] text-white/55 mb-2">The</p>
            <h1 className="font-display text-6xl lg:text-8xl leading-[0.95] text-white tracking-tight mb-8">
              Invisible<br />Business
            </h1>
            <p className="font-display text-2xl lg:text-3xl text-white/85 leading-snug max-w-3xl mb-10">
              Why your business exists in the real world but not in AI &mdash; and a framework
              for understanding AI visibility.
            </p>
            <div className="h-px bg-white/15 max-w-2xl mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl text-sm text-white/70 mb-10">
              <div>
                <span className="font-body text-xs font-bold tracking-[0.12em] uppercase text-copper block mb-1">Author</span>
                Lenise Kenney<br />Founder, Signal &amp; Structure AI
              </div>
              <div>
                <span className="font-body text-xs font-bold tracking-[0.12em] uppercase text-copper block mb-1">Published</span>
                May 2026<br />Preliminary Edition
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
                Read the full white paper.
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

        {/* Executive summary */}
        <section className="section-padding">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>Executive Summary</Eyebrow>
              <h2 className="font-display text-4xl lg:text-5xl text-navy leading-tight mb-6">
                Most small businesses are invisible to AI.
              </h2>
              <p className="font-body text-lg text-ink leading-relaxed mb-5">
                Not because they lack quality, reputation, or customers, but because AI platforms cannot find,
                parse, or accurately represent them. As AI-powered tools like ChatGPT, Claude, and Gemini become
                the primary way consumers and professionals discover businesses, a gap has opened between who
                your business actually is and what AI says about you.
              </p>
              <p className="font-body text-ink leading-relaxed mb-5">
                For the majority of small businesses, AI either says nothing at all or says something wrong.
                Both outcomes cost you customers.
              </p>
              <p className="font-body text-ink leading-relaxed mb-10">
                This paper introduces the <strong className="text-navy">Signal Strength framework</strong> and
                the <strong className="text-navy">six dimensions of AI visibility</strong>, a diagnostic lens for
                understanding where your business stands and what&rsquo;s at stake.
              </p>
            </FadeIn>

            <FadeIn>
              <Eyebrow>At a glance</Eyebrow>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Stat n="800M" l="Weekly active users on ChatGPT (OpenAI, 2026)" />
                <Stat n="25%" l="Projected decline in traditional search engine volume by end of 2026 (Gartner, 2026)" />
                <Stat n="800%" l="Year-over-year growth in AI referral traffic (Semrush, 2025)" />
                <Stat n="14%" l="Average conversion rate from AI-referred traffic, vs ~3% for traditional organic search (Previsible, 2025–26)" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Preliminary research */}
        <section className="section-padding bg-stone">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>Preliminary Research Findings</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                What 20 small businesses revealed about AI visibility.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-4">
                To test the Signal Strength framework against real-world conditions, Signal &amp; Structure AI
                analyzed 20 small businesses across four industries and four U.S. cities. Businesses represent
                common local service categories: chiropractic practices, pilates studios, independent realtors,
                and bed and breakfasts. Cities included Atlanta, Raleigh, Austin, and Chicago.
              </p>
              <p className="font-body text-ink leading-relaxed mb-8">
                Each business was evaluated against three major AI platforms: ChatGPT, Claude, and Gemini.
                Businesses are presented without identifying information to protect their privacy; none were
                clients of Signal &amp; Structure AI at the time of evaluation.
              </p>

              <h3 className="font-display text-2xl text-navy mb-3 mt-10">What the data showed</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                <strong className="text-navy">Not one business in the study reached Strong Signal.</strong> The
                highest score recorded was 57 out of 100. The lowest was 33. The mean across all 20 businesses
                was 49.7, placing the group at the boundary between Low Signal and Weak Signal.
              </p>
              <p className="font-body text-ink leading-relaxed mb-4">
                That result holds across industry and geography. The pattern is not industry-specific or
                location-specific. It is structural.
              </p>

              <h3 className="font-display text-2xl text-navy mb-3 mt-10">The Technical Health paradox</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                Most businesses scored near-perfect on Technical Health, the category that measures how
                accessible a website is to AI crawlers. Yet overall scores remained in the 33 to 57 range.
                <strong className="text-navy"> Technical accessibility is not AI discoverability.</strong>
              </p>

              <h3 className="font-display text-2xl text-navy mb-3 mt-10">Structured Data: the universal weakness</h3>
              <p className="font-body text-ink leading-relaxed">
                Across all 20 businesses and all four industries, Structured Data was the lowest-scoring
                category without exception. No business scored above 48 out of 100 on this dimension, and the
                category average was 25. This is the markup that tells AI exactly what a business is. Without
                it, AI has to infer. Most of the time, it infers wrong or says nothing.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Dataset table */}
        <section className="section-padding">
          <div className="max-w-content mx-auto px-6">
            <FadeIn>
              <div className="max-w-prose mx-auto mb-8">
                <Eyebrow>The Dataset</Eyebrow>
                <h2 className="font-display text-4xl text-navy leading-tight mb-4">
                  Twenty businesses, four industries, four cities.
                </h2>
                <p className="font-body text-warmgray">
                  Scores are on a 0&ndash;100 scale. Structured Data measures schema markup quality. Business
                  Identity measures name, address, and phone consistency. AI Presence measures whether AI
                  platforms found and accurately described the business.
                </p>
              </div>

              <div className="overflow-x-auto rounded-card border border-stone-dark shadow-card">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white text-left">
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Business Type</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">City</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Score</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Structured Data</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">Business Identity</th>
                      <th className="px-4 py-3 font-body font-bold uppercase tracking-wider text-xs">AI Presence</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {dataset.map((group) => (
                      <Fragment key={group.cat}>
                        <tr className="bg-stone">
                          <td colSpan={6} className="px-4 py-2 text-copper font-body font-bold uppercase tracking-[0.1em] text-xs">
                            {group.cat}
                          </td>
                        </tr>
                        {group.rows.map((r, i) => (
                          <tr key={`${group.cat}-${i}`} className={i % 2 === 1 ? 'bg-stone/30' : ''}>
                            <td className="px-4 py-3 text-ink">{r[0]}</td>
                            <td className="px-4 py-3 text-ink">{r[1]}</td>
                            <td className="px-4 py-3 font-mono text-navy font-semibold">{r[2]}</td>
                            <td className="px-4 py-3 font-mono text-navy font-semibold">{r[3]}</td>
                            <td className="px-4 py-3 font-mono text-navy font-semibold">{r[4]}</td>
                            <td className="px-4 py-3 font-mono text-navy font-semibold">{r[5]}</td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="font-body text-warmgray text-sm max-w-prose mx-auto mt-6">
                By industry: pilates studios averaged 51, chiropractic practices 49, independent realtors 48,
                bed and breakfasts 46. <strong className="text-navy">The spread within each industry was as wide
                as the spread across industries.</strong> The difference was not the industry or the city. It was
                the degree to which each business had structured its information in ways AI can read.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* The problem */}
        <section className="section-padding bg-stone">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>The Problem Nobody Told You About</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                Your firm has 15 years of experience. AI doesn&rsquo;t mention you.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-4">
                A potential customer opens ChatGPT and types: <em>&ldquo;Recommend a good accountant in Austin
                that specializes in small business taxes.&rdquo;</em> The AI responds instantly. It names three
                firms. It describes their specialties, their locations, their reputations. Your firm, the one
                with 15 years of experience, a 4.9-star Google rating, and a waiting list of clients, is not
                mentioned. Not ranked low. Not described poorly.{' '}
                <strong className="text-navy">Simply absent.</strong>
              </p>
              <p className="font-body text-ink leading-relaxed mb-4">
                As far as AI is concerned, your business does not exist. This is already happening millions of
                times a day, to businesses that have done everything right by traditional standards.
              </p>

              <h3 className="font-display text-2xl text-navy mb-3 mt-10">The gap</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                The core problem is a disconnect between who your business actually is and what AI platforms say
                about you. For most small businesses, this gap takes one of two forms.
              </p>
              <p className="font-body text-ink leading-relaxed mb-4">
                <strong className="text-navy">Invisibility.</strong> AI has no information about your business
                and returns nothing, or returns generic responses that omit you entirely.
              </p>
              <p className="font-body text-ink leading-relaxed">
                <strong className="text-navy">Hallucination.</strong> AI presents fabricated information about
                your business with complete confidence. Wrong services, wrong location, invented specialties.
                The customer believes it. You never see the conversation.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Why invisible + pull quote */}
        <section className="section-padding">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>Why Businesses Become Invisible</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                AI doesn&rsquo;t search the way you do.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-4">
                You already know how Google works: type in keywords, browse a list of links, click through,
                decide. AI platforms work nothing like that. They scan for structured signals across the entire
                web: metadata, schema markup, directory listings, review platforms, and third-party mentions.
                They piece together a portrait of your business from fragments scattered across dozens of
                sources.
              </p>
              <p className="font-body text-ink leading-relaxed mb-8">
                This is a different game than SEO. The overlap between Google search rankings and AI citations
                has dropped from approximately <strong className="text-navy">70% to 20%</strong> (Search Engine
                Land, 2025). Ranking well on Google does not mean AI knows you exist.
              </p>

              <blockquote className="relative font-display text-2xl lg:text-3xl text-navy leading-snug pl-10 pr-6 py-6 border-l-2 border-copper my-12">
                <span className="absolute left-3 top-2 text-5xl text-copper leading-none">&ldquo;</span>
                Without structured data, your website is a book written in a language AI does not speak.
              </blockquote>
            </FadeIn>

            <FadeIn>
              <h3 className="font-display text-2xl text-navy mb-6 mt-10">The five causes of AI invisibility</h3>
              {causes.map((c) => (
                <div key={c.n} className="grid grid-cols-[auto_1fr] gap-6 mb-8">
                  <div className="font-display text-5xl text-copper leading-none">{c.n}</div>
                  <div>
                    <h4 className="font-display text-xl text-navy mb-2">{c.t}</h4>
                    <p className="font-body text-ink leading-relaxed">{c.b}</p>
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* Hallucination + founder callout */}
        <section className="section-padding bg-stone">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>The Hallucination Problem</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                Worse than invisibility is inaccuracy.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-4">
                When AI cannot find reliable information about a business, it does not always stay silent. In
                many cases, it fills the gap with fabricated details presented as fact.
              </p>
              <p className="font-body text-ink leading-relaxed mb-4">
                We tested a dental practice in a mid-size Texas city. The practice has operated for twelve years
                and focuses exclusively on general and cosmetic dentistry. When we asked ChatGPT what services
                this practice offers, it listed <strong className="text-navy">orthodontics and oral surgery</strong>.
                The practice has never offered either. When we asked Gemini, it invented a specialty in{' '}
                <strong className="text-navy">pediatric dentistry</strong> the practice does not provide.
              </p>
              <p className="font-body text-ink leading-relaxed mb-10">
                The practice owner had no idea this was happening. There is no notification, no dashboard, no
                alert. The misinformation circulates in private conversations between AI and potential patients,
                and the business never sees it.
              </p>

              <div className="bg-navy text-white p-8 lg:p-10 rounded-card my-8">
                <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-copper mb-4">
                  From the Founder
                </p>
                <p className="font-body text-white/90 leading-relaxed mb-3">
                  When we launched Signal &amp; Structure AI and tested our own AI presence using our proprietary
                  Signal Score methodology, we scored <strong className="text-white">0 out of 100</strong>.
                </p>
                <p className="font-body text-white/90 leading-relaxed mb-3">
                  Over the next 60 days, as we applied the same framework we use with clients, our score
                  climbed: <strong className="text-white">0, then 6, then 76, then 75, and most recently 80 out
                  of 100</strong>, reaching Strong Signal. AI platforms now mention us accurately.
                </p>
                <p className="font-body text-white/90 leading-relaxed">
                  We were a new business, so a zero on day one was not surprising. What is surprising is that
                  businesses with ten, fifteen, twenty years of operation, hundreds of reviews, and strong local
                  reputations score the same way.{' '}
                  <strong className="text-white">Our zero was a starting point. Theirs is an invisible crisis
                  they do not know they have.</strong>
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Signal Strength framework */}
        <section className="section-padding">
          <div className="max-w-content mx-auto px-6">
            <FadeIn>
              <div className="max-w-prose mx-auto mb-10">
                <Eyebrow>The Signal Strength Framework</Eyebrow>
                <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                  A thermometer for AI visibility.
                </h2>
                <p className="font-body text-ink leading-relaxed mb-4">
                  To fix a problem, you first need a way to measure it. Most business owners are trying to solve
                  AI visibility without a thermometer. <strong className="text-navy">Signal Strength</strong> is
                  a measure of how accurately and completely AI can represent who you are, what you do, and why
                  you matter.
                </p>
              </div>

              <div className="rounded-card overflow-hidden border border-stone-dark shadow-card max-w-4xl mx-auto">
                <table className="w-full">
                  <tbody>
                    {levels.map((l, i) => (
                      <tr key={l.name} className={i < levels.length - 1 ? 'border-b border-stone-dark' : ''}>
                        <td className="px-6 py-5 align-top w-44">
                          <span className="font-body font-bold uppercase tracking-[0.08em] text-copper text-sm">
                            {l.name}
                          </span>
                        </td>
                        <td className="px-6 py-5 align-top font-body text-ink text-sm leading-relaxed">
                          {l.meaning}
                        </td>
                        <td className="px-6 py-5 align-top font-display italic text-navy text-base w-64">
                          {l.feel}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="font-body text-warmgray text-sm max-w-prose mx-auto mt-6">
                In our preliminary testing, most small businesses fall in the No Signal or Low Signal
                categories. <strong className="text-navy">Strong Signal is not theoretical.</strong> It is the
                difference between a potential customer asking AI for a recommendation and hearing your name,
                or hearing your competitor&rsquo;s.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Six dimensions */}
        <section className="section-padding bg-stone">
          <div className="max-w-content mx-auto px-6">
            <FadeIn>
              <div className="max-w-prose mx-auto mb-10">
                <Eyebrow>Six Dimensions</Eyebrow>
                <h2 className="font-display text-4xl text-navy leading-tight mb-4">
                  What we measure when we measure your signal.
                </h2>
                <p className="font-body text-ink leading-relaxed">
                  Signal Strength is not a single measurement. It is the combined result of how well your
                  business performs across six distinct dimensions, tested across ChatGPT, Claude, and Gemini.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                {dimensions.map((d, i) => (
                  <div
                    key={d.n}
                    className={`grid grid-cols-[auto_minmax(0,200px)_1fr] gap-6 px-2 py-6 ${
                      i < dimensions.length - 1 ? 'border-b border-stone-dark' : ''
                    }`}
                  >
                    <div className="font-display text-4xl text-copper leading-none">{d.n}</div>
                    <div>
                      <div className="font-body font-bold text-navy text-lg mb-1">{d.name}</div>
                      <div className="font-display italic text-warmgray">{d.q}</div>
                    </div>
                    <p className="font-body text-ink leading-relaxed">{d.body}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Cost / First-mover */}
        <section className="section-padding">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>What This Means for Your Business</Eyebrow>
              <h2 className="font-display text-4xl text-navy leading-tight mb-6">
                The cost of invisibility.
              </h2>
              <p className="font-body text-ink leading-relaxed mb-4">
                AI invisibility is not an abstract technical problem. It creates three specific, measurable
                impacts on your business.
              </p>

              <h3 className="font-display text-2xl text-navy mb-3 mt-8">The compounding referral gap.</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                Every week that your business is absent from AI recommendations, potential customers are being
                routed to competitors. If AI handles even five recommendation conversations per week in your
                category, that is <strong className="text-navy">260 missed opportunities per year</strong>.
                Unlike a bad Google ranking, which you can see and track, these losses are completely invisible
                to you.
              </p>

              <h3 className="font-display text-2xl text-navy mb-3 mt-8">The silent customer loss.</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                When AI fabricates details about your business, the damage happens quietly. A customer reads
                that you offer a service you do not provide, visits your website, sees no mention of it, and
                moves on. They do not call to ask. They simply disappear.
              </p>

              <h3 className="font-display text-2xl text-navy mb-3 mt-8">Competitive displacement that accelerates.</h3>
              <p className="font-body text-ink leading-relaxed mb-8">
                AI platforms learn and reinforce over time. A competitor that appears in AI answers today will
                appear more frequently tomorrow.{' '}
                <strong className="text-navy">The gap between visible and invisible businesses does not stay
                constant. It widens.</strong> Waiting is not neutral. It is falling behind.
              </p>

              <hr className="border-stone-dark my-10" />

              <h3 className="font-display text-2xl text-navy mb-3">The first-mover advantage.</h3>
              <p className="font-body text-ink leading-relaxed mb-4">
                Here is the good news: this is early. Most businesses have never asked &ldquo;What does AI say
                about me?&rdquo; The concept of AI visibility is new enough that the playing field has not yet
                been defined.
              </p>
              <p className="font-body text-ink leading-relaxed">
                Research from Princeton, Georgia Tech, and IIT Delhi found that adding citations, statistics,
                and expert context can <strong className="text-navy">improve AI search visibility by
                30&ndash;40%</strong> (2024). The window for first-mover advantage will not stay open
                indefinitely. The time to act is before your competitors realize they need to.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* CTA + about */}
        <section className="relative bg-navy text-white section-padding overflow-hidden">
          <GridTexture />
          <div className="relative z-10 max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>Finding Out Where You Stand</Eyebrow>
              <h2 className="font-display text-4xl text-white leading-tight mb-6">
                Two ways to start.
              </h2>
              <p className="font-body text-white/85 leading-relaxed mb-4">
                <strong className="text-white">Signal Pulse</strong> is a free quick check available at
                signalstructure.ai. It evaluates two of the six dimensions &mdash; enough to tell you whether
                you are broadcasting or invisible. It takes minutes and costs nothing.
              </p>
              <p className="font-body text-white/85 leading-relaxed mb-10">
                For the complete picture, the <strong className="text-white">founding beta</strong> is where
                Signal &amp; Structure AI evaluates your business across all three major AI platforms and all
                six dimensions. You receive your score, the story AI is telling about you, what&rsquo;s
                accurate, what&rsquo;s wrong, what&rsquo;s missing, and a clear path to improve it.
              </p>

              <div className="bg-white/10 p-8 border-l-2 border-copper rounded-r-card mb-10">
                <p className="font-display text-2xl lg:text-3xl text-white leading-snug">
                  You&rsquo;re not broken. You&rsquo;re just not broadcasting. That&rsquo;s fixable.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/signal-pulse" variant="primary">
                  Try Signal Pulse (free)
                </Button>
                <Button href={RESERVE_URL} variant="secondary">
                  Reserve a Founding Spot
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* References */}
        <section className="section-padding bg-stone">
          <div className="max-w-prose mx-auto px-6">
            <FadeIn>
              <Eyebrow>References</Eyebrow>
              <h2 className="font-display text-3xl text-navy leading-tight mb-8">
                Sources cited in this paper.
              </h2>
              <ul className="space-y-4 font-body text-sm text-warmgray leading-relaxed">
                <li><strong className="text-navy">Gartner.</strong> (2026). &ldquo;Gartner Predicts Search Engine Volume Will Drop 25% by 2026, Due to AI Chatbots and Virtual Agents.&rdquo; Gartner Press Release.</li>
                <li><strong className="text-navy">Google.</strong> (2026). &ldquo;AI Overviews: Expanding Access and Improving the Search Experience.&rdquo; Google Blog, The Keyword.</li>
                <li><strong className="text-navy">OpenAI.</strong> (2026). &ldquo;ChatGPT Reaches 800 Million Weekly Active Users.&rdquo; OpenAI Blog.</li>
                <li><strong className="text-navy">Previsible.</strong> (2025&ndash;2026). &ldquo;AI Referral Traffic Conversion Rates: How LLM-Driven Visits Compare to Organic Search.&rdquo;</li>
                <li><strong className="text-navy">Princeton University, Georgia Tech, &amp; IIT Delhi.</strong> (2024). &ldquo;GEO: Generative Engine Optimization.&rdquo; Research Paper.</li>
                <li><strong className="text-navy">Search Engine Land.</strong> (2025). &ldquo;The Overlap Between Google Rankings and AI Citations Has Dropped from 70% to 20%.&rdquo;</li>
                <li><strong className="text-navy">Semrush.</strong> (2025). &ldquo;The State of LLM Referral Traffic: 800% Year-Over-Year Growth in AI-Driven Website Visits.&rdquo;</li>
              </ul>
              <p className="font-body text-xs text-warmgray mt-10">
                Signal Score is a proprietary methodology of Signal &amp; Structure AI. This is a preliminary
                edition; methodology, dataset, and findings will be updated as additional businesses are added
                to the study.
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
