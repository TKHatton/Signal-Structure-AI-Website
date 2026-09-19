// Skool community: yearly $497 or monthly $49 with a 12-month commitment.
// Primary CTA across the site. Members get the community, weekly working
// sessions, and the shared work of becoming visible to AI together.
export const SKOOL_URL = "https://www.skool.com/signal-structure-ai-2338/about";
export const COMMUNITY_YEARLY = "$497";
export const COMMUNITY_MONTHLY = "$49";
export const COMMUNITY_COMMITMENT_MONTHS = 12;

// Signal Score Report: one-time $147. Fulfillment is automated (Stripe
// webhook -> signal-pulse-api background task -> signal-engine full audit
// -> emailed via Resend), confirmed live 2026-08-25. Real turnaround is
// minutes, not days -- keep this in sync with routes/score.py in the
// signal-pulse-api repo if that changes.
export const REPORT_PRICE = "$147";
export const REPORT_TURNAROUND = "minutes";
export const REPORT_CHECKOUT_URL = "https://buy.stripe.com/28E9AS8oAfGJ8pK5PDaAw05";

// Signal Watch: monthly subscription $26/mo, cancel anytime. Installs as
// a Claude or ChatGPT tool; access details emailed within two days.
export const WATCH_PRICE = "$26";
export const WATCH_CHECKOUT_URL = "https://buy.stripe.com/28E9AS34g0LP6hCa5TaAw06";

// Client Knowledge: the buyer's official knowledge base, delivered to
// ChatGPT and Claude as a connector so the platforms answer from real data
// instead of guessing. Monthly subscription.
export const CLIENT_KNOWLEDGE_PRICE = "$76";
// TODO Lenise: replace with the live Stripe subscription link for Client Knowledge.
export const CLIENT_KNOWLEDGE_CHECKOUT_URL = "mailto:hello@signalstructure.ai?subject=Client%20Knowledge%20subscription&body=I%27d%20like%20to%20set%20up%20Client%20Knowledge%20for%20my%20business.%20Please%20send%20me%20the%20subscription%20link%20and%20the%20intake%20questions.";


// Signal Fix: one-time technical build. Schema, sitemap, GBP setup.
export const FIX_PRICE = "$650";

// Signal Authority: one-time entity build, page-tiered. Directories,
// schema, NAP everywhere. Extends and absorbs what Fix used to cover.
export const AUTHORITY_PRICE_LOW = "$1,500";
export const AUTHORITY_PRICE_HIGH = "$3,000+";

// Signal Growth: strategy and outlines only, client writes the content.
// Recurring, six-month minimum. Offered as a downsell when Publish's
// price is a blocker.
export const GROWTH_PRICE = "$1,200";
export const GROWTH_COMMITMENT_MONTHS = 6;

// Signal Publish: full content service, SSAI writes and delivers the
// articles. Recurring, six-month minimum.
export const PUBLISH_PRICE_LOW = "$1,800";
export const PUBLISH_PRICE_HIGH = "$3,000";
export const PUBLISH_COMMITMENT_MONTHS = 6;

// MCP Setup: gets the business inside ChatGPT and Claude directly.
// One-time setup plus ongoing (not termed) monthly maintenance.
export const MCP_SETUP_PRICE_BETA = "$800";
export const MCP_SETUP_PRICE_STANDARD = "$1,200";
export const MCP_MAINTENANCE_PRICE = "$170";
// TODO Lenise: replace with the MCP Setup intake form URL once the form exists.
// Interim: opens an email so no inquiry is lost.
export const MCP_SETUP_FORM_URL = "mailto:hello@signalstructure.ai?subject=MCP%20Setup%20inquiry&body=Tell%20me%20about%20your%20business%3A%20what%20you%20do%2C%20your%20website%2C%20and%20what%20customers%20ask%20you%20most.";

// The New Word of Mouth: Lenise's business book on reputation, published
// 2026-08. Paperback sells on Amazon (ISBN 9798234163769); the book's own
// site carries the ebook and bulk orders.
export const BOOK_TITLE = "The New Word of Mouth";
export const BOOK_SUBTITLE =
  "How Fama Built Reputation for 2,000 Years, and How AI Is Its New Voice";
export const BOOK_PRICE = "$18.99";
export const BOOK_AMAZON_URL = "https://a.co/d/0b8CVCYW";
export const BOOK_SITE_URL = "https://newwordofmouth.fyi/";

export const EMAIL = "hello@signalstructure.ai";
export const PHONE = "(984) 314-3102";
export const PHONE_HREF = "tel:+19843143102";
export const LINKEDIN = "https://linkedin.com/company/signal-structure-ai";
export const PERSONAL_LINKEDIN = "https://www.linkedin.com/in/lenise-kenney/";
export const LOCATION = "Pittsboro, NC";
export const ADDRESS = "Pittsboro, NC";
export const COMPANY_NAME = "Signal & Structure AI";
export const TAGLINE = "Be found. Be accurate. Be recommended.";
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://signal-pulse-api.up.railway.app";
