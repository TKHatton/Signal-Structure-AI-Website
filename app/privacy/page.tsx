import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import { EMAIL, COMPANY_NAME, ADDRESS } from '@/lib/constants';

export const metadata = {
  title: 'Privacy Policy | Signal & Structure AI',
  description: 'How Signal & Structure AI collects, uses, and protects your information when you use our AI discoverability tools and services.',
  alternates: {
    canonical: '/privacy',
  },
};

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://signalstructure.ai/privacy/#page',
  name: 'Privacy Policy | Signal & Structure AI',
  description:
    'How Signal & Structure AI collects, uses, and protects your information when you use our AI discoverability tools and services.',
  url: 'https://signalstructure.ai/privacy',
  dateModified: '2026-06-24',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://signalstructure.ai/#website' },
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
  mainEntity: {
    '@type': 'Article',
    name: 'Privacy Policy',
    headline: 'Signal & Structure AI Privacy Policy',
    dateModified: '2026-06-24',
    author: { '@id': 'https://signalstructure.ai/#organization' },
    about: [
      'data collection',
      'data privacy',
      'information security',
      'user rights',
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://signalstructure.ai',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Privacy Policy',
      item: 'https://signalstructure.ai/privacy',
    },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-navy text-white section-padding overflow-hidden">
        <GridTexture />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionLabel variant="light">LEGAL</SectionLabel>
            <h1 className="font-display text-page-heading mb-4">
              Privacy Policy
            </h1>
            <p className="font-body text-lg text-white/70">
              Last updated: June 24, 2026
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="prose prose-lg max-w-none font-body text-warmgray">
              <h2 className="font-display text-navy">Overview</h2>
              <p>
                {COMPANY_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
                at signalstructure.ai and related AI discoverability tools including
                our Custom GPT, MCP servers, and Signal Engine API. This Privacy Policy
                explains what information we collect, how we use it, and your choices.
              </p>

              <h2 className="font-display text-navy">What We Collect</h2>
              <h3 className="font-display text-navy">Information You Provide</h3>
              <ul>
                <li><strong>AI Gossip Check and Signal Pulse (free MCP tools):</strong> To run a check we ask for your first name, last name, email address, business name, business website URL, industry, city, and state. Submitting one of these tools means you are also opting in to receive our newsletter and follow-up tips from Signal &amp; Structure AI. Every marketing email includes a one-click unsubscribe link.</li>
                <li><strong>Signal Advisor (free MCP tool):</strong> Educational Q&amp;A only. No personal information is collected.</li>
                <li><strong>Signal Watch and Client Knowledge (paid client MCPs):</strong> Used by active clients under a separate service agreement. Information collected during onboarding is governed by that agreement.</li>
                <li><strong>Contact information:</strong> When you sign up for our newsletter directly, book a consultation, or purchase a service, you provide your name and email address.</li>
                <li><strong>Event registration:</strong> When you register for one of our talks or workshops, our scheduling provider collects your name, email, and the session you selected so we can send you the meeting link and reminders.</li>
                <li><strong>Payment information:</strong> Payments are processed by Stripe. We do not store credit card numbers or bank account details on our servers.</li>
              </ul>

              <h3 className="font-display text-navy">Information Collected Automatically</h3>
              <ul>
                <li><strong>Usage data:</strong> We collect anonymous usage metrics such as which tools are used and how often, to improve our services.</li>
                <li><strong>Standard web analytics:</strong> Our website may use cookies or similar technologies for basic analytics (page views, traffic sources).</li>
              </ul>

              <h2 className="font-display text-navy">How We Use Your Information</h2>
              <ul>
                <li>To run AI discoverability checks you request</li>
                <li>To deliver Signal Score reports and consulting services</li>
                <li>To send our newsletter (only if you subscribe)</li>
                <li>To improve our tools and services</li>
                <li>To respond to your inquiries</li>
              </ul>

              <h2 className="font-display text-navy">What We Do NOT Do</h2>
              <ul>
                <li>We do not sell your personal information to third parties</li>
                <li>We do not store the content of AI platform responses about your business</li>
                <li>We do not use your business data to train AI models</li>
                <li>We do not share your contact information with other companies for marketing</li>
              </ul>

              <h2 className="font-display text-navy">Third-Party Services</h2>
              <p>We use the following third-party services that may process data on our behalf. All data storage and processing happens on US-based infrastructure.</p>
              <ul>
                <li><strong>Stripe</strong> for payment processing.</li>
                <li><strong>Supabase</strong> for data storage of leads, scores, and client records.</li>
                <li><strong>Resend</strong> for sending result emails and newsletter messages.</li>
                <li><strong>Railway</strong> for application hosting.</li>
                <li><strong>Netlify</strong> for website hosting.</li>
                <li><strong>OpenAI, Anthropic, and Google</strong> for the AI platform queries that power our discoverability checks. These platforms receive only your business name and industry so they can answer the questions we ask on your behalf. They never receive your personal name, email address, or any other personal contact information.</li>
              </ul>
              <p>Each of these services has its own privacy policy governing how they handle data.</p>

              <h2 className="font-display text-navy">Data Retention</h2>
              <p>
                Leads collected through AI Gossip Check and Signal Pulse are kept for
                24 months from the date of your last activity, then automatically
                deleted. Active paying clients are exempt from auto-deletion for the
                duration of their service agreement. You may request earlier deletion
                at any time by emailing us at the address below.
              </p>

              <h2 className="font-display text-navy">Aggregate Research</h2>
              <p>
                Signal &amp; Structure AI may use anonymized, aggregated data with no
                personal identifiers to publish research, reports, and educational
                content about AI visibility trends across industries. If a specific
                business is ever named in such a report, we ask that business first.
              </p>

              <h2 className="font-display text-navy">Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to the data we hold about you or your business.</li>
                <li>Request correction or full deletion of your data by emailing us at the address below.</li>
                <li>Unsubscribe from our newsletter at any time using the one-click link included in every marketing email. No reply required.</li>
                <li>Opt out of non-essential cookies.</li>
              </ul>

              <h2 className="font-display text-navy">Children&apos;s Privacy</h2>
              <p>
                Our tools are for business owners and are not intended for users under
                the age of 18. We do not direct marketing toward children and do not
                knowingly collect personal information from anyone under 18.
              </p>

              <h2 className="font-display text-navy">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be
                posted on this page with an updated date. Continued use of our services
                after changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="font-display text-navy">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or your data, contact us at:
              </p>
              <p>
                {COMPANY_NAME}<br />
                {ADDRESS}<br />
                <a href={`mailto:${EMAIL}`} className="text-copper hover:underline">{EMAIL}</a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
