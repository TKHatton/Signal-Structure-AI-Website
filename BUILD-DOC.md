# Build Documentation: Signal & Structure AI Website

**Last updated:** 2026-09-21
**Maintainer:** Lenise Kenney
**Doc version:** 1.0

---

## 1. Snapshot

- **What it is:** The public marketing site for Signal & Structure AI, plus the free Signal Pulse check, the Service Finder, and a set of WebMCP tools that browser agents can call.
- **Status:** live. The WebMCP tools are on the `webmcp` branch, waiting on manual acceptance in Chrome before they merge.
- **Type:** product / client-facing
- **Live URLs:** https://signalstructure.ai (also serves `/llms.txt`, `/robots.txt`, `/sitemap.xml`)
- **Repo:** `C:\Dev\GitHub\Signal-Structure-AI-Website`, https://github.com/TKHatton/Signal-Structure-AI-Website
- **Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind, Framer Motion. Hosted on Netlify with `@netlify/plugin-nextjs`. Tests use vitest (dev only).
- **External services:** Stripe payment links (Signal Score Report, Signal Watch), the signal-pulse-api on Railway (Signal Pulse, newsletter sign-up), Supabase (Signal Pulse leads, written server-side only), Google Fonts.

---

## 2. What it does

The site explains what Signal & Structure AI does and sells it. A visitor can run a free Signal Pulse check, answer a few questions in the Service Finder to see which service fits, buy a Signal Score Report or Signal Watch through Stripe, and read the research (the Triangle study, the white paper) and the book page.

The WebMCP tools let an AI agent working inside the visitor's browser ask the site directly: what the business is, what it sells and for how much, which service fits, general Advisor answers, and the business's own Signal Score history. The agent gets the same answer the page gives, every time.

---

## 3. Architecture

- **Pages:** `app/` (App Router). Retired pages stay in the repo with `robots: noindex` and out of the sitemap: `/services`, `/client-knowledge`, `/how-it-works`, `/our-approach`, the blog, and `/signal-report`.
- **Single source for prices and links:** `lib/constants.ts`. Every page, `llms.txt`, and every WebMCP tool reads from it. Never hardcode a price anywhere else.
- **Services and the recommendation logic:** `lib/services.ts`, shared by `components/ServiceFinder.tsx` and the `recommend_service` tool so they cannot disagree.
- **Crawler files:** `app/robots.ts`, `app/sitemap.ts`, `app/llms.txt/route.ts`.
- **Social cards:** `lib/seo.ts` (`withSocial`) builds Open Graph and Twitter tags from each page's own title, description, and canonical URL.
- **WebMCP (`lib/webmcp/`):**
  - `toolSurface.ts` maps each page to its tools. Every page gets `get_business_facts`, `get_services`, `ask_advisor`. Service pages add `recommend_service` and `start_signal_score`. Story pages add `get_our_score_history`. The home page gets all six.
  - `register.ts` finds `document.modelContext` (or the older `navigator.modelContext`), aborts the previous page's tools, and registers the new page's. Each tool registers on its own, so one failure does not drop the rest. In a browser without WebMCP it does nothing.
  - `tools/` holds one file per tool. `data/` holds the bundled content (Advisor copy, own score history, the shared `as_of` date).
  - `components/WebMcpProvider.tsx` is mounted once in `app/layout.tsx` and re-syncs on every route change.
- **Design spec:** `C:\Users\ltken\Desktop\CORE\handoffs\ssai-webmcp-build-spec-2026-09-21.md` holds the WebMCP decisions.

---

## 4. Security & Privacy

**✅ done · 🟡 partial · ⬜ not started · ➖ N/A**

### 4.1 Data & secrets
- **Secrets storage:** Netlify environment variables only (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and `NEXT_PUBLIC_API_URL`, which is public by design). The Supabase service key is read only inside the server route `app/api/pulse-lead/route.ts` and never reaches the browser. Nothing secret is committed.
- **Secret scanning:** the global git pre-commit hook runs a secret scan on every commit.
- **Personal data stored:** Signal Pulse lead capture writes first name, last name, email, business name, business URL, and the Pulse result to Supabase `pulse_leads`, so Lenise can follow up on a check the visitor asked for. Newsletter sign-ups go to the signal-pulse-api. The WebMCP tools store nothing and send nothing.
- **Tenant isolation:** ➖ N/A. There are no accounts or per-user data on the site.
- **Encryption:** TLS via Netlify with HSTS (`max-age=31536000`, verified 2026-09-21). At rest is handled by Supabase.
- **Retention & deletion:** ⬜ no written retention period for `pulse_leads`. Deletion on request is manual in Supabase.

### 4.2 Authentication & authorization
- **Authentication:** ➖ none. The site is public.
- **Authorization:** the only write path is `/api/pulse-lead`, which validates required fields and email format before inserting.
- **What a visitor or agent must never see:** Signal Engine methodology and weights, the street address, anything about Lenise's home or health, other businesses' scores. The WebMCP tools return city only ("Pittsboro, NC"), and a test fails the build if a street address or suite appears in any tool output.

### 4.3 Application hardening
- **Security headers:** 🟡 HSTS and `X-Content-Type-Options: nosniff` are present (Netlify defaults). No CSP, `X-Frame-Options`, `Referrer-Policy`, or `Permissions-Policy` yet.
- **Input validation:** `/api/pulse-lead` checks required fields and email format. WebMCP tools validate every input against its enum and reject anything else. `start_signal_score` caps the business name at 80 characters and only uses it in a confirm box.
- **Rate limiting:** ⬜ none on `/api/pulse-lead`. The WebMCP tools make no network calls and cost nothing, so they have no cost-amplification risk.
- **WebMCP action gating:** `start_signal_score` only returns the checkout link after the person in the browser says yes. It never opens a window, collects an email, starts a check, or takes payment.
- **Dependencies:** lockfile committed. 🟡 `npm audit --omit=dev` on 2026-09-21 reports 3 issues (1 critical, 2 high), all in Next.js 14.2.35 and its bundled packages. The fix is a major upgrade to Next 16. The two critical advisories need either a Windows-hosted server or AVIF enabled in Next's image optimizer, and this site is on Netlify (Linux) with default image formats (WebP only), so exposure looks low. The upgrade is still owed.

### 4.4 Security verification ladder

| # | Check | Status | Date | Evidence / notes |
|---|---|---|---|---|
| 1 | Secret scanning on commit / CI | ✅ | 2026-09-21 | Global pre-commit hook, passing on every commit |
| 2 | Self / peer code review | 🟡 | 2026-09-21 | Self-review of the WebMCP build in session |
| 3 | Dependency vulnerability scan | 🟡 | 2026-09-21 | `npm audit`: Next.js upgrade outstanding, see 4.3 |
| 4 | Static analysis (SAST) | ⬜ | | ESLint is not configured yet (`next lint` prompts) |
| 5 | Authn / authz + tenant-isolation tests | ➖ | | No accounts |
| 6 | Secrets-management review | ✅ | 2026-09-21 | Service key server-only; tests assert no network code in `lib/webmcp` |
| 7 | Security headers verified | 🟡 | 2026-09-21 | HSTS and nosniff only |
| 8 | Rate limiting & cost-amplification controls | 🟡 | 2026-09-21 | WebMCP tools are zero-cost by design; `/api/pulse-lead` unlimited |
| 9 | Input/output handling review | 🟡 | 2026-09-21 | WebMCP inputs enum-checked; pulse-lead reviewed lightly |
| 10 | Manual security review, full pass | ⬜ | | |
| 11 | DAST | ⬜ | | needs external tooling |
| 12 | **Professional penetration test** | ⬜ | | needs equipment / paid service |
| 13 | Privacy / compliance review | 🟡 | | Privacy policy published at `/privacy`; retention period not set |
| 14 | SOC 2 / ISO 27001 | ➖ | | future / on demand |
| 15 | Vulnerability disclosure path | ⬜ | | No `/.well-known/security.txt` yet |

### 4.5 Threat model

| Threat | Likelihood | Impact | Mitigation | Status |
|---|---|---|---|---|
| An agent tricks `start_signal_score` into sending someone to checkout without asking | Low | Medium | Link only returned after a human yes; tested both ways | ✅ |
| A WebMCP tool states a wrong price or claim | Medium | Medium | Prices read from `lib/constants.ts`; test fails on any price not in constants | ✅ |
| A tool reveals the street address or private details | Low | High | City only; test scans all outputs | ✅ |
| Spam or junk rows through `/api/pulse-lead` | Medium | Low | Field checks only | 🟡 rate limit owed |
| Exploit of an unpatched Next.js advisory | Low | High | Hosting and config avoid the critical paths | 🟡 upgrade owed |
| Leaked Supabase service key | Low | High | Server-only env var, secret scan on commit | ✅ |

### 4.6 Outstanding: needs external tooling or services
- DAST scan of the production site
- Professional penetration test, once client volume justifies it

### 4.7 Incident response
- **If a leak is suspected:** rotate `SUPABASE_SERVICE_ROLE_KEY` in Supabase and Netlify, redeploy, then review `pulse_leads` for anything unexpected.
- **Kill switch:** remove `<WebMcpProvider />` from `app/layout.tsx` and redeploy to turn off every WebMCP tool at once. For the whole site, roll back to the last good deploy in Netlify.
- **Who to notify:** Lenise, then any affected leads by email.

---

## 5. Run / Test / Deploy

- **Run locally:** `npm install`, then `npm run dev`. Local `npm run build` can fail on the Google Fonts SSL fetch; that is a machine certificate issue, not the code.
- **Test:** `npm test`. Green means every test file passes.
- **Deploy:** push to `main`. Netlify runs `npm test && npm run build` (see `netlify.toml`), so a failing test blocks the deploy.
- **Env vars on Netlify:** `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, optionally `NEXT_PUBLIC_API_URL`.
- **To try the WebMCP tools:** Chrome 149+ with `chrome://flags/#enable-webmcp-testing`, plus the Model Context Tool Inspector extension.

---

## 6. Testing

- **Coverage:** the Service Finder's `recommend()` for all 54 answer combinations (pinned to its output before the extraction), the page-to-tool map, registration and route changes, every tool's schema and output, the price, address, and wording rules, the checkout confirmation in both directions, and a check that no WebMCP file makes network calls.
- **Counts:** 98/98 passing (2026-09-21).
- **Manual:** the WebMCP acceptance steps in the spec (Chrome with the flag, Inspector badge counts, running each tool, declining and accepting checkout, a clean console without the flag), clicking through the Service Finder, and share cards through the LinkedIn Post Inspector.

---

## 7. Open items / known gaps

- [ ] WebMCP manual acceptance in Chrome with the flag, including Step 0 (does Gemini mode need a key)
- [ ] Next.js major upgrade (14 to 16) to clear the audit findings
- [ ] Security headers: CSP, `X-Frame-Options`, `Referrer-Policy`
- [ ] Rate limit on `/api/pulse-lead`
- [ ] Retention period for `pulse_leads`
- [ ] `security.txt` disclosure contact
- [ ] Configure ESLint so `npm run lint` works
- [ ] Confirm the Sep 21 Signal Score run: two platform calls failed that day
- [ ] About page wording: "Deleting" should be "Diluting", and the title line

---

## 8. Build history

- 2026-02-23: repo started
- 2026-03-03: first full site build
- 2026-06-29: product lineup cut to Signal Score Report, Signal Watch, free Signal Pulse; retired pages noindexed
- 2026-09-21: `llms.txt`, sitemap and robots fixes, per-page social cards, contact and quiz schema
- 2026-09-21: WebMCP tools on the `webmcp` branch, vitest added
