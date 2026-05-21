# Next Session Prompt — Phase 1 Frontend: Show the Findings

## What this is, why it exists, and where it fits (read first)

The Signal Engine scoring system gives a discoverability score but historically
did not "show its work." Phase 1 of the Signal Score Output Upgrade fixed that
for the **Schema** category: the engine API now returns `evidence` (what was
checked and found) and `findings` (a ranked list of specific problems with
developer fix instructions) alongside the existing score.

The data already flows all the way to this website:

- **Signal Engine API** (separate repo `signal-engine`): returns the new fields. SHIPPED to production on main 2026-05-21.
- **Website backend** (`signal-pulse-api`): forwards them through the pulse
  response as `schema_findings` and `schema_evidence`. MERGED to main 2026-05-21.
- **This frontend**: receives those fields but does NOT render them yet. That is
  the only remaining gap. This session closes it.

This is the last step of Phase 1. After this, Phase 1 is fully done end to end,
and the project moves on to Phase 2 (NAP + Content + Technical upgrades, a
separate effort scoped in the `signal-engine` repo's `PROPOSAL.md`).

## The exact gap

The free Pulse result card (`components/pulse/PulseResultCard.tsx`) currently
shows: business name, a signal-strength badge, a headline, an explanation, and
two summary boxes ("Structured Data" and "Content Readability") each with a
Strong/Weak/Low dot and one vague sentence. It tells the visitor THAT schema is
weak, never WHAT is weak.

The backend now sends a `schema_findings` array. Each finding is an object:

```json
{
  "id": "schema.localbusiness.missing_geo",
  "severity": "high | medium | low",
  "title": "LocalBusiness schema is missing geo coordinates",
  "what_we_checked": "The LocalBusiness JSON-LD block for a geo property...",
  "what_we_found": "LocalBusiness present but no geo coordinates declared.",
  "fix_for_developer": "Add a geo object with latitude and longitude..."
}
```

It also sends `schema_evidence` (a small summary object: page counts, which
schema types were found). The free tier does not need the full evidence; the
findings are the payoff.

## What to build this session

1. In `components/pulse/PulseResultCard.tsx`:
   - Extend the `PulseResultData` interface to include
     `schema_findings?: Finding[]` and optionally `schema_evidence?: object`.
     Make them optional so the card never crashes if they are absent.
   - Add a new "What to fix first" section BELOW the two sub-score boxes and
     ABOVE the footer.
   - Render the findings as a list. For the FREE Pulse tier, show only
     `severity` of "high" or "medium" (hide "low"). Cap at the top 3 to 5 so
     the free result stays a teaser, not the full audit.
   - Each finding row: a severity badge, the `title`, and the `what_we_found`
     line. Keep `fix_for_developer` for the paid surfaces, or show it collapsed.
   - If `schema_findings` is empty or absent, hide the section entirely (do not
     render an empty heading).

2. Severity badge colors, using the existing brand tokens in this repo's
   Tailwind config (confirm the exact token names in `tailwind.config.*`):
   - high = status-red (#C4423C)
   - medium = amber (#D4920B) — confirm the token name; the card today uses
     `copper` for "weak", so you may need to add an amber/status-amber token.
   - low = warmgray (#6B7280) — not shown on the free tier anyway.

3. Match the existing card style: `font-display` for headings, `font-body` for
   text, rounded corners, the `bg-stone` block treatment used by the sub-score
   boxes. Stay one-page. Do not over-build; this is the free teaser surface.

## How to do it

- Open this repo in a fresh Claude Code session. Create a branch
  (`phase-1-frontend-findings`). Do NOT work on main.
- The dev server is Next.js. Run it locally and test against the
  live backend so you see real findings. The backend pulse endpoint is at
  `signal-pulse-api-production.up.railway.app` (the page already knows how to
  call it; see `app/signal-pulse/page.tsx`).
- A real test business that returns findings: `sheisai.ai` (business name
  "She Is AI"). It currently returns ~6 medium-and-up schema findings.
- When it looks right locally, commit and push the branch. Do NOT merge to main
  without LT's explicit "merge it." Merging auto-deploys the live website.

## Constraints (from CORE/rules.md)

- No em dashes anywhere, ever. No words from the AI-avoidance list.
- Brand system lives in `signal-engine/CLAUDE.md`: Navy #1B2B4B, Copper #C17A3A,
  Stone #F5F0EB, Warm Gray #6B7280, status Green #2D8A5E / Red #C4423C /
  Amber #D4920B. Headlines DM Serif Display, body DM Sans, data JetBrains Mono.
- Branch only. Nothing merges to main without LT's explicit say-so.

## Definition of done

A visitor running a free Pulse check on a site with schema gaps sees a
"What to fix first" list of specific, plain-language problems (e.g. "LocalBusiness
schema is missing geo coordinates") with severity badges, instead of only a
vague "Structured Data: Weak." Phase 1 is then complete end to end.
