// Skool community: yearly $497 or monthly $49 with a 12-month commitment.
// Primary CTA across the site. Members get the community, weekly working
// sessions, and the shared work of becoming visible to AI together.
export const SKOOL_URL = "https://www.skool.com/signal-structure-ai-2338/about";
export const COMMUNITY_YEARLY = "$497";
export const COMMUNITY_MONTHLY = "$49";
export const COMMUNITY_COMMITMENT_MONTHS = 12;

// Signal Score Report: a one-time $147 detailed report on how AI describes
// a business. 48-hour turnaround while Lenise still QAs every one by hand.
export const REPORT_PRICE = "$147";
export const REPORT_TURNAROUND = "48 hours";
// TODO Lenise: replace with the live Stripe payment link for the report.
// Until then this falls back to email so no one is left without a way to pay.
export const REPORT_CHECKOUT_URL = "mailto:hello@signalstructure.ai?subject=Signal%20Score%20Report%20order&body=I%27d%20like%20to%20order%20a%20Signal%20Score%20Report.%20Please%20send%20me%20the%20payment%20link.";

// Signal Watch: ongoing monthly monitoring. Cancel any time. Sits on top of
// the connectors the buyer already has (ChatGPT or Claude).
export const WATCH_PRICE = "$26";
// TODO Lenise: replace with the live Stripe subscription link for Signal Watch.
export const WATCH_CHECKOUT_URL = "mailto:hello@signalstructure.ai?subject=Signal%20Watch%20subscription&body=I%27d%20like%20to%20start%20Signal%20Watch.%20Please%20send%20me%20the%20subscription%20link.";

// Client Knowledge: the buyer's official knowledge base, delivered to
// ChatGPT and Claude as a connector so the platforms answer from real data
// instead of guessing. Monthly subscription.
export const CLIENT_KNOWLEDGE_PRICE = "$76";
// TODO Lenise: replace with the live Stripe subscription link for Client Knowledge.
export const CLIENT_KNOWLEDGE_CHECKOUT_URL = "mailto:hello@signalstructure.ai?subject=Client%20Knowledge%20subscription&body=I%27d%20like%20to%20set%20up%20Client%20Knowledge%20for%20my%20business.%20Please%20send%20me%20the%20subscription%20link%20and%20the%20intake%20questions.";

// Legacy beta link. Kept so old emails or saved links keep resolving; not
// promoted anywhere on the new site.
export const RESERVE_URL = "https://buy.stripe.com/cNi14m5codyBgWgfqdaAw00";

// Beta AI Presence Program pricing
export const BETA_SETUP = "$797";
export const BETA_MONTHLY = "$297";
export const FULL_SETUP = "$997";
export const FULL_MONTHLY = "$497";
export const BETA_SPOTS = 10;

export const EMAIL = "hello@signalstructure.ai";
export const PHONE = "(984) 314-3102";
export const PHONE_HREF = "tel:+19843143102";
export const LINKEDIN = "https://linkedin.com/company/signal-structure-ai";
export const LOCATION = "Pittsboro, NC";
export const ADDRESS = "Pittsboro, NC";
export const COMPANY_NAME = "Signal & Structure AI";
export const TAGLINE = "Be found. Be accurate. Be recommended.";
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://signal-pulse-api.up.railway.app";
