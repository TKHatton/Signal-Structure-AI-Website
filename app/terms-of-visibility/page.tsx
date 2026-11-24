import Link from 'next/link';
import { Montserrat, Source_Serif_4 } from 'next/font/google';
import { withSocial } from '@/lib/seo';

// Terms of Visibility: the channel's own section of signalstructure.ai.
// Its look (night blues plus streetlight gold, Montserrat, a serif for quotes)
// comes from the channel brand sheet in the Terms-Of-Visibility repo, brand/site-sketch/.

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const serif = Source_Serif_4({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = withSocial({
  title: 'Terms of Visibility: The Fine Print That Decides Who AI Recommends | Signal & Structure AI',
  description:
    'Platform terms read in plain words. What changed, which platforms are being read, and the papers, with every quote taken from the platform’s own page and dated. A plain reading, not legal advice.',
  alternates: { canonical: '/terms-of-visibility' },
});

type Change = {
  date: string;
  kind: 'Changed' | 'First read';
  platform: string;
  text: string;
  link?: { href: string; label: string; external?: boolean };
};

const CHANGES: Change[] = [
  {
    date: 'Nov 24, 2026',
    kind: 'Changed',
    platform: 'Google Cloud',
    text: 'adds Section 17 to its Service Specific Terms: rules for AI agents that connect to your cloud account. Google says it is not responsible for what an outside agent does. Starts January 1, 2027.',
    link: { href: 'https://cloud.google.com/terms/service-terms', label: 'Google’s terms', external: true },
  },
  {
    date: 'Nov 22, 2026',
    kind: 'First read',
    platform: 'Substack',
    text: 'terms of use, privacy policy, publisher agreement, content guidelines, robots.txt and AI help pages saved as the starting point.',
  },
  {
    date: 'Nov 18, 2026',
    kind: 'Changed',
    platform: 'OpenAI Business Hub',
    text: 'the Businesses in ChatGPT Terms drop the promise not to sue and the release of claims “whether known or unknown” (Sections 10.1 and 10.2), and add a release tied to Business Agents (Section 5.2).',
    link: { href: '/resources/chatgpt-business-hub-nine-days-later', label: 'Read the paper' },
  },
];

const PLATFORMS = [
  { name: 'OpenAI Business Hub', group: 'Where AI describes a business', checked: 'Nov 22, 2026' },
  { name: 'Substack', group: 'Where creators publish', checked: 'Nov 22, 2026' },
  { name: 'Google Cloud', group: 'The engines', checked: 'Nov 24, 2026' },
];

const PAPERS = [
  {
    href: '/resources/chatgpt-business-hub-fine-print',
    label: 'White paper · November 2026 edition',
    title: 'The Fine Print of ChatGPT’s Business Hub',
  },
  {
    href: '/resources/chatgpt-business-hub-nine-days-later',
    label: 'Companion paper · November 20, 2026',
    title: 'The Price of a Blue Check, Nine Days Later',
  },
];

// The site's global h1/h2 rule sets navy DM Serif Display; these classes override it for this dark page.
const heading = `${montserrat.className} font-black italic uppercase text-[#EEF0FA]`;

export default function TermsOfVisibilityPage() {
  return (
    <main className={`${montserrat.className} bg-[#0B0E26] text-[#EEF0FA]`}>
      {/* Hero */}
      <section className="bg-[#12153A] border-b border-[#262C66] pt-32">
        <div className="max-w-6xl mx-auto px-6 pb-20 flex flex-wrap gap-12 items-center">
          <div className="flex-[999_1_560px] min-w-0 flex flex-col gap-6">
            <p className="m-0 text-sm font-bold tracking-[0.12em] uppercase text-[#9BA2D6]">
              Terms of Visibility · platform terms, read in plain words
            </p>
            <h1 className={`${heading} m-0 text-[40px] md:text-[64px] leading-[1.02]`}>
              The fine print that decides <span className="text-[#FFC61A]">who AI recommends.</span>
            </h1>
            <p className="m-0 text-lg leading-relaxed text-[#C5CAEC] max-w-2xl">
              Every quote comes from the platform’s own page, with the date it was read. A plain reading, not legal
              advice.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#changed"
                className="bg-[#FFC61A] text-[#0B0E26] font-bold px-6 py-3.5 rounded-lg hover:bg-[#FFE066] transition-colors"
              >
                See what changed
              </a>
              <a
                href="#papers"
                className="border border-[#9BA2D6] text-[#EEF0FA] font-semibold px-6 py-3.5 rounded-lg hover:border-[#EEF0FA] transition-colors"
              >
                Read the papers
              </a>
            </div>
          </div>
          <figure className="flex-[1_1_320px] m-0 bg-[#EEF0FA] text-[#161A3F] rounded-xl p-7 flex flex-col gap-3.5">
            <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#262C66]">The text says</span>
            <blockquote className={`${serif.className} m-0 text-xl leading-normal`}>
              “Customer agrees that Google will have no responsibility or liability for or from these or any other
              acts or omissions of a Third-Party Access Tool.”
            </blockquote>
            <figcaption className="text-[13px] text-[#4A5190]">
              Google Cloud Service Specific Terms, Section 17(b)(ii). Read November 24, 2026.
            </figcaption>
            <div className="h-[3px] w-[120px] bg-[#FFC61A] rounded-sm" aria-hidden="true" />
          </figure>
        </div>
      </section>

      {/* What changed */}
      <section id="changed" className="max-w-6xl mx-auto px-6 pt-20 pb-6 scroll-mt-24">
        <div className="flex flex-wrap justify-between items-baseline gap-3 mb-6">
          <h2 className={`${heading} m-0 text-[32px]`}>What changed</h2>
          <span className="text-sm text-[#9BA2D6]">Newest first.</span>
        </div>
        <ul className="list-none m-0 p-0 flex flex-col gap-3">
          {CHANGES.map((c) => (
            <li
              key={c.date + c.platform}
              className="bg-[#161A3F] border border-[#262C66] rounded-xl px-6 py-5 flex flex-wrap gap-x-6 gap-y-3 items-center"
            >
              <span className="text-sm font-semibold text-[#9BA2D6] min-w-[110px]">{c.date}</span>
              <span
                className={
                  c.kind === 'Changed'
                    ? 'text-xs font-bold uppercase tracking-[0.08em] bg-[#FFC61A] text-[#0B0E26] px-2.5 py-1 rounded-full'
                    : 'text-xs font-bold uppercase tracking-[0.08em] bg-[#262C66] text-[#EEF0FA] px-2.5 py-1 rounded-full'
                }
              >
                {c.kind}
              </span>
              <span className="flex-[999_1_420px] min-w-0 text-[17px] leading-normal">
                <strong>{c.platform}</strong>: {c.text}
              </span>
              {c.link &&
                (c.link.external ? (
                  <a
                    href={c.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-semibold text-[#FFC61A] hover:text-[#FFE066] py-2.5"
                  >
                    {c.link.label}
                  </a>
                ) : (
                  <Link href={c.link.href} className="text-[15px] font-semibold text-[#FFC61A] hover:text-[#FFE066] py-2.5">
                    {c.link.label}
                  </Link>
                ))}
            </li>
          ))}
        </ul>
      </section>

      {/* Platforms */}
      <section id="platforms" className="max-w-6xl mx-auto px-6 pt-16 pb-6 scroll-mt-24">
        <h2 className={`${heading} m-0 mb-2 text-[32px]`}>Platforms</h2>
        <p className="m-0 mb-6 text-base text-[#C5CAEC]">
          Each platform is read against the same 10 questions, so any two can be compared side by side.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="bg-[#161A3F] border border-[#262C66] rounded-xl p-6 flex flex-col gap-2.5">
              <span className="text-xl font-bold">{p.name}</span>
              <span className="text-sm text-[#9BA2D6]">{p.group}</span>
              <span className="text-[13px] text-[#FFC61A] font-semibold">Last checked {p.checked}</span>
            </div>
          ))}
          <div className="border border-dashed border-[#4A5190] text-[#9BA2D6] rounded-xl p-6 flex flex-col gap-2.5">
            <span className="text-xl font-bold">Coming next</span>
            <span className="text-sm leading-relaxed">
              Google Business Profile, Apple Business Connect, Yelp, LinkedIn, YouTube
            </span>
          </div>
        </div>
      </section>

      {/* Papers */}
      <section id="papers" className="max-w-6xl mx-auto px-6 pt-16 pb-20 scroll-mt-24">
        <h2 className={`${heading} m-0 mb-6 text-[32px]`}>Papers</h2>
        <div className="flex flex-col gap-4">
          {PAPERS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="bg-[#EEF0FA] text-[#161A3F] rounded-xl p-8 flex flex-wrap gap-x-8 gap-y-4 items-center hover:bg-white transition-colors"
            >
              <span className="flex-[999_1_420px] min-w-0 flex flex-col gap-2">
                <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#4A5190]">{p.label}</span>
                <span className={`${serif.className} text-[28px] leading-snug`}>{p.title}</span>
                <span className="text-[15px] text-[#4A5190]">By Lenise Kenney</span>
              </span>
              <span className="bg-[#161A3F] text-[#FFC61A] font-bold text-[15px] px-5 py-3.5 rounded-lg">
                Read the paper
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Back to Signal & Structure AI */}
      <section className="bg-[#12153A] border-t border-[#262C66]">
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex-[999_1_480px] min-w-0">
            <p className="m-0 mb-2 text-2xl font-bold">Want to know what AI says about your business?</p>
            <p className="m-0 text-base text-[#C5CAEC]">A Signal Score checks how AI tools see and describe you.</p>
          </div>
          <Link
            href="/signal-score-report"
            className="bg-[#FFC61A] text-[#0B0E26] font-bold px-6 py-3.5 rounded-lg hover:bg-[#FFE066] transition-colors"
          >
            Get your Signal Score
          </Link>
        </div>
      </section>

      <div className="border-t border-[#262C66]">
        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#9BA2D6]">
          <span>Terms of Visibility is made by Signal &amp; Structure AI.</span>
          <span>A plain reading, not legal advice.</span>
          <span>
            Found an error?{' '}
            <Link href="/contact" className="text-[#FFC61A] hover:text-[#FFE066]">
              Send a correction
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}
