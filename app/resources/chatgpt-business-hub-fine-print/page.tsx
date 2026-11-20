import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import { PAPER_CSS, PAPER_HTML } from './paper-content';

const SLUG = 'chatgpt-business-hub-fine-print';
const PAGE_URL = `https://signalstructure.ai/resources/${SLUG}`;
const PDF_URL = `/${SLUG}.pdf`;
const ONE_PAGER_URL = `/${SLUG}-one-pager.pdf`;
const OG_IMAGE = 'https://signalstructure.ai/og-fine-print.png';

const TITLE = "The Fine Print of ChatGPT's Business Hub";
const DESCRIPTION =
  "A plain-language white paper by Lenise Kenney on what businesses agree to under OpenAI's Businesses in ChatGPT Terms, the terms behind ChatGPT's Business Hub, compared with Google, Yelp, Apple, Bing and Meta.";

export const metadata = {
  title: `${TITLE}: A White Paper | Signal & Structure AI`,
  description: DESCRIPTION,
  alternates: { canonical: `/resources/${SLUG}` },
  openGraph: {
    title: `${TITLE}: A White Paper`,
    description: 'What businesses agree to when they claim a profile in ChatGPT, compared with five other platforms.',
    url: PAGE_URL,
    type: 'article',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${TITLE}, a white paper by Lenise Kenney` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE}: A White Paper`,
    description: 'What businesses agree to when they claim a profile in ChatGPT, compared with five other platforms.',
    images: [OG_IMAGE],
  },
};

const faqs: { q: string; a: string }[] = [
  {
    q: 'Did OpenAI change the Businesses in ChatGPT Terms?',
    a: "Yes. OpenAI posted a version dated November 18, 2026. It no longer includes the promise not to sue (Section 10.1), the release of claims known or unknown (Section 10.2) or the definition of “Covered Claim.” It adds a narrower release tied to Business Agents and widens the definition of “Customer Data.” This white paper describes the version dated November 9, 2026. The companion paper, The Price of a Blue Check, Nine Days Later, compares the two versions.",
  },
  {
    q: 'What did the November 9 version ask businesses to agree to?',
    a: "The version dated November 9, 2026 included a promise not to sue over “Covered Claims” (Section 10.1), a release of those claims, known or unknown, with a waiver of California Civil Code Section 1542 (Section 10.2), and a section that survives after the terms end (Section 10.3). A Covered Claim included claims about content on the business's own websites, published “at any time prior to or during” the terms.",
  },
  {
    q: 'What is the website release this paper describes?',
    a: "The website release is the name this white paper by Lenise Kenney of Signal & Structure AI gives to Sections 10.1 and 10.2 of the version dated November 9, 2026. Those sections are not in the version dated November 18, 2026.",
  },
  {
    q: 'Can I delete my ChatGPT business profile?',
    a: "OpenAI's help center says only unpublished draft profiles can be deleted. As read on November 20, 2026, it says support is “unable to delete, unpublish, or hide a published profile as part of a business setup or ownership request.” Section 4.1 lets OpenAI keep a listing “regardless of whether you claim, manage, or cease managing it.”",
  },
  {
    q: "Does 'Affiliates' in the ChatGPT Business Hub terms include my affiliate marketers?",
    a: "On the terms' own definition, no. Section 11 defines an Affiliate as an entity that “directly or indirectly controls, is controlled by, or is under common control with” the business, such as a parent, subsidiary or sister company. People in an affiliate or referral program are not controlled by the business.",
  },
  {
    q: 'Does a product feed override my AI opt-outs?',
    a: "In both the November 9 and November 18 versions, Section 3(c) says that if a business provides a Product Feed and has reserved text and data mining rights, “such rights will have no effect with respect to OpenAI or its Affiliates.” The clause names the business's websites and its Affiliates' websites.",
  },
  {
    q: 'Should I claim my business in ChatGPT?',
    a: "This paper does not tell anyone to claim or not to claim. It gives questions to ask first. It is a plain reading by a non-lawyer and is not legal advice.",
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  '@id': PAGE_URL + '#article',
  headline: TITLE,
  alternativeHeadline: "A plain-language reading of OpenAI's Businesses in ChatGPT Terms, compared with Google, Yelp, Apple, Bing and Meta",
  description: DESCRIPTION,
  about: ['ChatGPT Business Hub', 'Businesses in ChatGPT Terms', 'covenant not to sue', 'website release', 'AI visibility', 'terms of service'],
  keywords: 'ChatGPT Business Hub, Businesses in ChatGPT Terms, claim your business on ChatGPT, website release, covenant not to sue, Google Business Profile, AI visibility, AEO',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  datePublished: '2026-11-15',
  dateModified: '2026-11-20',
  version: '1.1',
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  image: OG_IMAGE,
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
    'OpenAI. Businesses in ChatGPT Terms. Last updated November 9, 2026.',
    'OpenAI Help Center. Setting up your business on ChatGPT (article 20001635).',
    'Google. Google Business Profile Additional Terms of Service. Last modified July 17, 2025.',
    'Yelp. Terms of Service and Additional Terms for Business Accounts. Effective January 1, 2026.',
    'Apple. Apple Business Connect Terms of Use. Effective October 15, 2024.',
    'Microsoft. Microsoft Services Agreement. Effective September 30, 2026.',
    'Meta. Meta Commercial Terms. Effective March 6, 2024.',
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

export default function FinePrintPage() {
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
              White Paper &middot; November 2026 edition
            </p>
            <h1 className="font-display text-5xl lg:text-7xl leading-[0.98] text-white tracking-tight mb-8">
              <span className="text-firefly">The fine print</span>
              <br />
              of ChatGPT&rsquo;s Business Hub
            </h1>
            <p className="font-display text-2xl lg:text-3xl text-white/85 leading-snug max-w-3xl mb-10">
              A plain-language reading of OpenAI&rsquo;s Businesses in ChatGPT Terms, set beside Google, Yelp,
              Apple, Bing and Meta.
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
                November 15, 2026
              </div>
              <div>
                <span className="font-body text-xs font-bold tracking-[0.12em] uppercase text-firefly block mb-1">Terms version read</span>
                Last updated November 9, 2026
                <br />
                Verified November 15, 2026
              </div>
            </div>
            <div className="max-w-3xl bg-firefly text-navy rounded-lg px-5 py-4 mb-8">
              <p className="font-body text-xs font-bold uppercase tracking-[0.18em] mb-1">Update &middot; November 20, 2026</p>
              <p className="font-body text-sm leading-relaxed">
                OpenAI updated these terms on November 18, 2026. This paper describes the November 9 version and
                stays online as the record of it.{' '}
                <Link href="/resources/chatgpt-business-hub-nine-days-later" className="font-semibold underline">
                  Read what changed
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PDF_URL}
                download
                className="inline-flex items-center gap-2 bg-firefly hover:bg-white text-navy font-body font-semibold px-6 py-3 rounded-button shadow-button transition-all"
              >
                <DownloadIcon />
                Download the white paper (PDF)
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

      {/* ===== FOR WRITERS ===== */}
      <section className="bg-stone">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-navy mb-2">For writers, creators and lawyers</p>
          <p className="font-body text-ink leading-relaxed">
            The figures, the one-page summary and the findings are free to share with credit to Lenise Kenney,
            Signal &amp; Structure AI, and a link to this page. Corrections, press and legal questions:{' '}
            <strong className="text-navy">hello@signalstructure.ai</strong>
          </p>
        </div>
      </section>

      {/* ===== THE PAPER ===== */}
      <article id="read" className="fp-paper bg-white pb-20" dangerouslySetInnerHTML={{ __html: PAPER_HTML }} />

      {/* ===== FAQ ===== */}
      <section className="section-padding bg-stone">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-navy mb-3">Common questions</p>
            <h2 className="font-display text-4xl text-navy leading-tight mb-8">ChatGPT Business Hub terms, answered briefly</h2>
            <div className="space-y-8">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-display text-2xl text-navy mb-2">{f.q}</h3>
                  <p className="font-body text-ink leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-warmgray mt-10">A plain reading by a non-lawyer. Not legal advice.</p>
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
