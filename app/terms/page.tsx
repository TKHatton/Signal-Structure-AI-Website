import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import { EMAIL, COMPANY_NAME, ADDRESS } from '@/lib/constants';

export const metadata = {
  title: 'Terms of Service | Signal & Structure AI',
  description: 'Terms of service for Signal & Structure AI tools, MCP servers, Custom GPT, and consulting services.',
  alternates: {
    canonical: '/terms',
  },
};

const termsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://signalstructure.ai/terms/#page',
  name: 'Terms of Service | Signal & Structure AI',
  description:
    'Terms of service for Signal & Structure AI tools, MCP servers, Custom GPT, and consulting services.',
  url: 'https://signalstructure.ai/terms',
  dateModified: '2026-06-24',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://signalstructure.ai/#website' },
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
  mainEntity: {
    '@type': 'Article',
    name: 'Terms of Service',
    headline: 'Signal & Structure AI Terms of Service',
    dateModified: '2026-06-24',
    author: { '@id': 'https://signalstructure.ai/#organization' },
    about: [
      'terms of service',
      'acceptable use',
      'intellectual property',
      'liability',
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
      name: 'Terms of Service',
      item: 'https://signalstructure.ai/terms',
    },
  ],
};

export default function TermsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
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
              Terms of Service
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
              <h2 className="font-display text-navy">Agreement to Terms</h2>
              <p>
                By accessing or using the services provided by {COMPANY_NAME} (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), including our website at signalstructure.ai,
                MCP servers, Custom GPT, Signal Engine API, and related tools
                (collectively, the &quot;Services&quot;), you agree to be bound by these Terms
                of Service. If you do not agree, do not use our Services.
              </p>

              <h2 className="font-display text-navy">Description of Services</h2>
              <p>
                {COMPANY_NAME} provides AI discoverability analysis tools and consulting
                services. Our Services include:
              </p>
              <ul>
                <li><strong>AI Gossip Check:</strong> A free public tool that asks ChatGPT, Claude, and Gemini what they say about your business right now and returns the raw verbatim responses. One free check per email address. Requires your name, email, and business details so we can send the results and follow up.</li>
                <li><strong>Signal Pulse:</strong> A free AI discoverability check that scores whether AI platforms mention a business and analyzes website schema markup. Unlimited per email so you can recheck after fixing issues. Requires your name, email, and business name so we can send your results and follow up.</li>
                <li><strong>Signal Advisor:</strong> A free educational resource about AI discoverability concepts, schema markup, and platform optimization. No personal information required.</li>
                <li><strong>Signal Watch and Client Knowledge:</strong> MCP servers provided to active clients as part of their paid service. Use is governed by your service agreement with us in addition to these Terms.</li>
                <li><strong>AI Presence Program:</strong> Our paid, done-for-you service. We monitor how AI platforms describe a business across multiple platforms each month, report what we find using our proprietary Signal Score, and perform correction work. Includes a client dashboard and a monthly report.</li>
                <li><strong>Custom AI Tools, MCP Servers, and API Integrations:</strong> Optional add-on work, scoped and priced separately for program clients.</li>
                <li><strong>Talks and Workshops:</strong> Paid live sessions and presentations about AI discoverability.</li>
              </ul>

              <h2 className="font-display text-navy">Acceptable Use</h2>
              <p>You agree to use our Services only for lawful purposes. You may not:</p>
              <ul>
                <li>Use our tools to scan businesses you do not own or represent without a legitimate business purpose</li>
                <li>Attempt to reverse-engineer, decompile, or extract our proprietary scoring methodology, algorithms, or weights</li>
                <li>Exceed reasonable usage limits or attempt to overload our systems through automated or bulk requests</li>
                <li>Use our Services to harass, defame, or harm any business or individual</li>
                <li>Resell, redistribute, or sublicense access to our tools without written permission</li>
                <li>Misrepresent your affiliation with {COMPANY_NAME} or claim endorsement we have not given</li>
              </ul>

              <h2 className="font-display text-navy">Intellectual Property</h2>
              <p>
                The Signal Score methodology, scoring weights, category formulas,
                platform-checking algorithms, and all related proprietary systems are
                the exclusive intellectual property of {COMPANY_NAME}. Our tools provide
                scores, insights, and recommendations as output. The underlying
                methodology is not disclosed and may not be reproduced.
              </p>
              <p>
                All content on our website, in our tools, and in our educational
                materials is protected by copyright. You may share results from our
                tools for your own business purposes but may not republish our
                educational content or methodology documentation without permission.
              </p>

              <h2 className="font-display text-navy">MCP Servers and API Access</h2>
              <p>
                Our MCP (Model Context Protocol) servers are available for use through
                compatible AI platforms including Claude, ChatGPT, Gemini, and others.
                By connecting to our MCP servers, you agree that:
              </p>
              <ul>
                <li>Free-tier tools (AI Gossip Check, Signal Pulse, Signal Advisor) are provided as-is for informational purposes.</li>
                <li>Submitting your information through AI Gossip Check or Signal Pulse opts you in to receive our newsletter and follow-up tips. Every marketing email includes a one-click unsubscribe link.</li>
                <li>AI Gossip Check is limited to one free check per email address. Signal Pulse can be re-run as often as you like.</li>
                <li>We may implement rate limits to ensure fair access for all users.</li>
                <li>We reserve the right to modify, suspend, or discontinue any MCP server at any time.</li>
                <li>Results are generated using AI and should not be treated as professional advice without further consultation.</li>
              </ul>

              <h2 className="font-display text-navy">Paid Services</h2>
              <p>
                For paid services (the AI Presence Program, add-on work, and talks),
                the following additional terms apply:
              </p>
              <ul>
                <li>Payments are processed securely through Stripe. All prices are listed in USD.</li>
                <li>The AI Presence Program begins with a one-time setup fee that includes your first month, followed by a recurring monthly subscription. You may cancel at any time; access and monitoring continue through the end of the paid billing period.</li>
                <li>Founder-rate pricing offered during the beta is honored for as long as your subscription remains active and uninterrupted.</li>
                <li>Talks and workshops are paid per session. If a session is canceled by us, you will be refunded or rebooked.</li>
                <li>Add-on work (custom AI tools, MCP servers, and API integrations) is quoted and agreed in writing before any work begins.</li>
                <li>We reserve the right to adjust standard pricing with 30 days notice to active subscribers.</li>
              </ul>

              <h2 className="font-display text-navy">Accuracy and Disclaimers</h2>
              <p>
                Our tools query third-party AI platforms (ChatGPT, Claude,
                Gemini, and others) to check business visibility. We do
                our best to provide accurate results, but:
              </p>
              <ul>
                <li>AI platform responses change frequently and may differ from what our tools observed at the time of your check</li>
                <li>Schema markup analysis reflects the state of your website at the time of scanning</li>
                <li>Signal Scores are analytical assessments, not guarantees of AI platform behavior</li>
                <li>We are not responsible for actions taken by third-party AI platforms regarding your business</li>
              </ul>
              <p>
                <strong>Our Services are provided &quot;as is&quot; without warranties of any
                kind, express or implied.</strong> We do not guarantee that using our
                recommendations will result in specific rankings, visibility, or
                outcomes on any AI platform.
              </p>

              <h2 className="font-display text-navy">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, {COMPANY_NAME} shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of our Services. Our total
                liability for any claim shall not exceed the amount you paid us in the
                12 months preceding the claim.
              </p>

              <h2 className="font-display text-navy">Privacy</h2>
              <p>
                Your use of our Services is also governed by our{' '}
                <a href="/privacy" className="text-copper hover:underline">
                  Privacy Policy
                </a>
                , which describes how we collect, use, and protect your information.
              </p>

              <h2 className="font-display text-navy">Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. When we do,
                we will update the &quot;Last updated&quot; date at the top of this page. Your
                continued use of our Services after changes are posted constitutes
                your acceptance of the updated terms.
              </p>

              <h2 className="font-display text-navy">Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of North Carolina,
                United States, without regard to conflict of law principles. Any
                disputes arising from these Terms or your use of our Services shall be
                resolved in the courts of Chatham County, North Carolina.
              </p>

              <h2 className="font-display text-navy">Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, contact us at:
              </p>
              <ul>
                <li><strong>Email:</strong> {EMAIL}</li>
                <li><strong>Address:</strong> {ADDRESS}</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
