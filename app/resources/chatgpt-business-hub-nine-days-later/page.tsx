import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import { PAPER_CSS, PAPER_HTML } from './paper-content';

const SLUG = 'chatgpt-business-hub-nine-days-later';
const PAGE_URL = `https://signalstructure.ai/resources/${SLUG}`;
const PDF_URL = `/${SLUG}.pdf`;
const ONE_PAGER_URL = `/${SLUG}-one-pager.pdf`;
const OG_IMAGE = 'https://signalstructure.ai/og-nine-days-later.png';
const FIRST_PAPER = '/resources/chatgpt-business-hub-fine-print';

const TITLE = 'The Price of a Blue Check, Nine Days Later';
const DESCRIPTION =
  "A companion paper by Lenise Kenney comparing the November 9 and November 18, 2026 versions of OpenAI's Businesses in ChatGPT Terms, and how the new wording compares with Google, Yelp, Apple, Bing and Meta. A plain reading, not legal advice.";

export const metadata = {
  title: `${TITLE}: What Changed in ChatGPT's Business Hub Terms | Signal & Structure AI`,
  description: DESCRIPTION,
  alternates: { canonical: `/resources/${SLUG}` },
  openGraph: {
    title: `${TITLE}`,
    description: "What changed in ChatGPT's Business Hub terms between November 9 and November 18, 2026.",
    url: PAGE_URL,
    type: 'article',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${TITLE}, a companion paper by Lenise Kenney` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE}`,
    description: "What changed in ChatGPT's Business Hub terms between November 9 and November 18, 2026.",
    images: [OG_IMAGE],
  },
};

const faqs: { q: string; a: string }[] = [
  {
    q: 'When did OpenAI change the Businesses in ChatGPT Terms?',
    a: 'The earlier version is dated November 9, 2026. The current version is dated November 18, 2026. This paper compares them paragraph by paragraph. OpenAI told Digiday the earlier version was “not intended to cover this scenario.” This paper does not suggest any article caused the change.',
  },
  {
    q: 'What was removed from the ChatGPT Business Hub terms?',
    a: "The version dated November 18, 2026 no longer includes the promise not to sue (Section 10.1), the release of claims “whether known or unknown” with its waiver of California Civil Code Section 1542 (Section 10.2), or the definition of “Covered Claim,” which reached content on a business's own websites published “at any time prior to or during” the terms.",
  },
  {
    q: 'What was added to the ChatGPT Business Hub terms?',
    a: "Section 5.2 now ends: “You, on behalf of yourself and your Affiliates, irrevocably release OpenAI and its Affiliates from any claims arising from your Business Agent, including any use of Customer Data with the Business Agent.” It sits in the part of Section 5.2 that begins “If you enable or elect to publish a Business Agent.”",
  },
  {
    q: "What changed in the definition of 'Customer Data'?",
    a: "The November 9 version covered materials “you or anyone acting on your behalf submits, identifies, or makes available to OpenAI.” The November 18 version covers materials “submitted, identified, made available to, or otherwise used by OpenAI for Businesses in ChatGPT.”",
  },
  {
    q: 'How do the new terms compare with Google, Yelp, Apple, Bing and Meta?',
    a: "Of the nine compared clauses still in the terms, four also appear at other platforms, two cover or name more than the others, one works differently, and two were not found in the other platforms' posted terms: the release tied to Business Agents, and AI opt-outs that stop counting when a business sends a product feed. This compares wording only. It is not a judgment of what is legal or fair.",
  },
  {
    q: 'Is this legal advice?',
    a: 'No. The author is not a lawyer. The paper shows what the terms say and what changed. It does not say whether any term is legal, fair or enforceable. For a decision about your business, talk with your own lawyer.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  '@id': PAGE_URL + '#article',
  headline: TITLE,
  alternativeHeadline: "What changed in OpenAI's Businesses in ChatGPT Terms between November 9 and November 18, 2026",
  description: DESCRIPTION,
  about: ['ChatGPT Business Hub', 'Businesses in ChatGPT Terms', 'terms of service changes', 'AI visibility'],
  keywords:
    'ChatGPT Business Hub terms changed, Businesses in ChatGPT Terms November 18 2026, covenant not to sue removed, Business Agent release, Customer Data definition, AI visibility',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  datePublished: '2026-11-20',
  dateModified: '2026-11-20',
  version: '1.1',
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  image: OG_IMAGE,
  isBasedOn: 'https://signalstructure.ai' + FIRST_PAPER,
  encoding: {
    '@type': 'MediaObject',
    contentUrl: 'https://signalstructure.ai' + PDF_URL,
    encodingFormat: 'application/pdf',
    name: `${TITLE} (PDF)`,
  },
  author: {
    '@type': 'Person',
    '@id': 'https://signalstructure.ai/#lenise',
    name: 'Lenise Kenney',
    jobTitle: 'Founder, Signal & Structure AI',
    url: 'https://signalstructure.ai/about',
  },
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
  citation: [
    'OpenAI. Businesses in ChatGPT Terms. Last updated November 9, 2026 (Wayback Machine capture, November 13, 2026).',
    'OpenAI. Businesses in ChatGPT Terms. Last updated November 18, 2026.',
    'OpenAI. Terms of Use. Effective January 1, 2026.',
    'OpenAI Help Center. Setting up your business on ChatGPT (article 20001635).',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://signalstructure.ai/resources' },
    { '@type': 'ListItem', position: 3, name: TITLE, item: PAGE_URL },
  ],
};

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
    </svg>
  );
}

export default function NineDaysLaterPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style dangerouslySetInnerHTML={{ __html: PAPER_CSS }} />

      {/* ===== HERO ===== */}
      <section className="relative bg-navy text-white overflow-hidden">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto px-6 py-24 lg:py-32">
          <FadeIn>
            <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-firefly mb-6 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-firefly" />
              Companion paper &middot; November 2026
            </p>
            <h1 className="font-display text-5xl lg:text-7xl leading-[0.98] text-white tracking-tight mb-8">
              The Price of a <span className="text-firefly">Blue Check</span>,
              <br />
              Nine Days Later
            </h1>
            <p className="font-display text-2xl lg:text-3xl text-white/85 leading-snug max-w-3xl mb-10">
              What changed in OpenAI&rsquo;s Businesses in ChatGPT Terms between the versions dated November 9 and
              November 18, 2026, and how the new wording compares with Google, Yelp, Apple, Bing and Meta.
            </p>
            <div className="h-px bg-white/15 max-w-2xl mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl text-sm text-white/70 mb-10">
              <div>
                <span className="font-body text-xs font-bold tracking-[0.12em] uppercase text-firefly block mb-1">Author</span>
                Lenise Kenney
                <br />
                Founder, Signal &amp; Structure AI
              </div>
              <div>
                <span className="font-body text-xs font-bold tracking-[0.12em] uppercase text-firefly block mb-1">Published</span>
                November 20, 2026
              </div>
              <div>
                <span className="font-body text-xs font-bold tracking-[0.12em] uppercase text-firefly block mb-1">Terms versions compared</span>
                November 9 and November 18, 2026
                <br />
                Verified November 20, 2026
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PDF_URL}
                download
                className="inline-flex items-center gap-2 bg-firefly hover:bg-white text-navy font-body font-semibold px-6 py-3 rounded-button shadow-button transition-all"
              >
                <DownloadIcon />
                Download the paper (PDF)
              </a>
              <a
                href={ONE_PAGER_URL}
                download
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-body font-semibold px-6 py-3 rounded-button transition-all"
              >
                <DownloadIcon />
                One-page summary
              </a>
              <a
                href="#read"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-body font-semibold px-6 py-3 rounded-button transition-all"
              >
                Read on this page
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CONTEXT ===== */}
      <section className="bg-stone">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">Companion to the first paper</p>
          <p className="font-body text-ink leading-relaxed">
            The first paper,{' '}
            <Link href={FIRST_PAPER} className="text-navy font-semibold underline">
              The Fine Print of ChatGPT&rsquo;s Business Hub
            </Link>
            , describes the version dated November 9, 2026 and stays online as the record of it. Free to share with
            credit to Lenise Kenney, Signal &amp; Structure AI, and a link to this page. Corrections, press and legal
            questions: <strong className="text-navy">hello@signalstructure.ai</strong>
          </p>
        </div>
      </section>

      {/* ===== ONE-PAGE SUMMARY ===== */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <a href="/chatgpt-business-hub-nine-days-later-one-pager.pdf" download className="block shadow-lg rounded-lg overflow-hidden border border-navy/10 hover:shadow-xl transition-shadow">
            <img src="/images/nine-days-later/one-pager.png" alt="One-page summary of The Price of a Blue Check, Nine Days Later" className="w-full h-auto block" />
          </a>
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">One-Page Summary</p>
            <h2 className="font-display text-4xl text-navy leading-tight mb-4">The Whole Paper on One Page</h2>
            <p className="font-body text-ink leading-relaxed mb-6">
              The key findings, the comparison and the questions to ask, on a single page to save, print or share.
            </p>
            <a
              href="/chatgpt-business-hub-nine-days-later-one-pager.pdf"
              download
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-body font-semibold px-6 py-3 rounded-button transition-all"
            >
              Download the One-Page Summary (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ===== THE PAPER ===== */}
      <article id="read" className="nd-paper bg-white pb-20" dangerouslySetInnerHTML={{ __html: PAPER_HTML }} />

      {/* ===== FAQ ===== */}
      <section className="section-padding bg-stone">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-navy mb-3">Common questions</p>
            <h2 className="font-display text-4xl text-navy leading-tight mb-8">What changed, answered briefly</h2>
            <div className="space-y-8">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-display text-2xl text-navy mb-2">{f.q}</h3>
                  <p className="font-body text-ink leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-warmgray mt-10">
              A plain reading by a non-lawyer that compares wording only. Not legal advice. Not affiliated with OpenAI or
              any company named.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative bg-navy text-white section-padding overflow-hidden">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-4xl text-white leading-tight mb-6">Want to know what AI says about your business today?</h2>
            <p className="font-body text-white/85 leading-relaxed mb-8">
              Signal &amp; Structure AI shows how ChatGPT and other AI tools describe a business, what they get
              wrong, and what to fix first.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/signal-pulse" variant="primary">
                Try Signal Pulse (free)
              </Button>
            </div>
            <div className="mt-10 pt-8 border-t border-white/15">
              <Link href="/resources" className="font-body text-firefly hover:text-white transition-colors">
                &larr; Back to all resources
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
