# SIGNAL & STRUCTURE AI — WEBSITE BUILD SPECIFICATION
# For Claude Code Execution
# Version 1.0

---

## PROJECT OVERVIEW

Build a complete marketing website for Signal & Structure AI, an AI
knowledge services company. The site has 5 pages plus a shared nav
and footer. It must feel premium, intentional, and distinctive. It
should NOT look like a generic AI company website.

The site sells three core services (AI Business Profile, AI Knowledge
System, AI Presence Management) and uses a proprietary scoring system
called Signal Score to demonstrate value.

The primary conversion action is booking a Signal Check (discovery call).

---

## TECH STACK

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (DM Serif Display, DM Sans, JetBrains Mono)
- **Deployment**: Netlify (or Vercel)
- **No CMS needed** — all content is hardcoded
- **No database needed**
- **No authentication needed**

---

## FILE STRUCTURE

```
signal-structure-ai/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Home page
│   ├── services/
│   │   └── page.tsx            # Services & Pricing page
│   ├── how-it-works/
│   │   └── page.tsx            # How It Works page
│   ├── why-this-matters/
│   │   └── page.tsx            # Why This Matters page
│   ├── our-approach/
│   │   └── page.tsx            # Our Approach page
│   └── globals.css             # Global styles
├── components/
│   ├── Nav.tsx                 # Navigation
│   ├── Footer.tsx              # Footer
│   ├── Button.tsx              # CTA button component
│   ├── SectionLabel.tsx        # Uppercase label with dot
│   ├── SignalDot.tsx           # The copper dot brand element
│   ├── ServiceCard.tsx         # Service tier card
│   ├── StepCard.tsx            # How It Works step
│   ├── AddOnCard.tsx           # Add-on service card
│   ├── ValueCard.tsx           # Small value proposition card
│   ├── SignalScoreDemo.tsx     # Animated score counter
│   ├── GridTexture.tsx         # Background dot grid pattern
│   └── FadeIn.tsx              # Scroll-triggered fade animation
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## DESIGN SYSTEM

### Colors (add to tailwind.config.ts)

```js
colors: {
  navy: {
    DEFAULT: '#1B2B4B',
    light: '#243660',
    dark: '#131F37',
  },
  copper: {
    DEFAULT: '#C17A3A',
    light: '#D4923F',
    dark: '#A66830',
  },
  stone: {
    DEFAULT: '#F5F0EB',
    dark: '#E5E0DB',
  },
  warmgray: {
    DEFAULT: '#6B7280',
    light: '#9CA3AF',
  },
  status: {
    green: '#2D8A5E',
    red: '#C4423C',
    amber: '#D4920B',
  },
}
```

### Typography

```js
fontFamily: {
  display: ['DM Serif Display', 'serif'],
  body: ['DM Sans', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Typography Rules (CRITICAL — follow these exactly)
- `font-display` (DM Serif Display): Page headings (h1, h2) ONLY
- `font-body` (DM Sans): Everything else — nav, body text, buttons, labels, cards
- `font-mono` (JetBrains Mono): Signal Scores, pricing numbers, data/stats only
- Headlines use navy color
- Body text uses warmgray color
- Never use italic for emphasis — use bold or copper color
- Section labels: uppercase, letter-spacing 0.08em, font-body, warmgray or copper

### Spacing
- Base unit: 8px (use multiples: 16, 24, 32, 48, 64, 80, 96, 120)
- Section vertical padding: 96px top/bottom (mobile: 64px)
- Max content width: 1200px
- Body text max-width: 680px
- Card padding: 32px
- Card border-radius: 12px

### The Signal Dot
A small filled copper circle used as a brand signature element.
- Size: 6-8px diameter
- Color: copper (#C17A3A)
- Usage: Next to section labels, replacing bullet points in lists,
  next to data labels, as a decorative accent
- Implementation: A small component that renders a copper circle

### Grid Texture
A subtle dot grid background pattern used on dark (navy) sections.
- Dots: 1px circles at 3-5% opacity (white on navy, navy on stone)
- Grid spacing: 24px
- Applied as a CSS background-image or SVG pattern
- Used on: Hero section background, dark expertise blocks, footer

### Shadows
- Cards: `0 1px 3px rgba(27, 43, 75, 0.06), 0 1px 2px rgba(27, 43, 75, 0.04)`
- Hover cards: `0 8px 25px rgba(27, 43, 75, 0.08), 0 4px 10px rgba(27, 43, 75, 0.04)`
- Buttons on hover: `0 4px 12px rgba(193, 122, 58, 0.3)`

---

## ANIMATION RULES (Framer Motion)

### Page Load
- Hero headline: Fade up from 20px below, 0.6s duration, 0.1s delay
- Hero subheadline: Fade up, 0.6s duration, 0.3s delay
- Hero CTA: Fade up, 0.6s duration, 0.5s delay

### Scroll-triggered (FadeIn component)
- All section headings: Fade up 20px on scroll into view
- Cards: Stagger fade-up with 0.1s delay between each
- Stats/numbers: Count-up animation when scrolled into view
- Trigger: when element is 20% visible in viewport
- Duration: 0.5-0.7s
- Easing: [0.25, 0.1, 0.25, 1] (smooth ease-out)

### Hover Effects
- Buttons: Scale 1.02, shadow increase, 0.2s transition
- Service cards: Translate Y -4px, shadow increase, 0.3s transition
- Nav links: Copper underline slides in from left, 0.2s

### WHAT NOT TO DO
- No parallax scrolling
- No background video
- No particle effects
- No floating elements
- No typewriter text effects
- No loading spinners or page transitions
- Keep it refined and intentional, not flashy

---

## COMPONENT SPECIFICATIONS

### Nav.tsx
- Fixed to top on scroll (sticky)
- Background: white with subtle bottom border (stone-dark)
- On scroll past 50px: add subtle shadow
- Left: "S&S" mark (text in a small bordered box) + "Signal & Structure AI" wordmark
- Right: Page links + CTA button
- Mobile: Hamburger menu that slides in from right
- Links: Home, Services, How It Works, Why This Matters, Our Approach
- CTA: "Book a Signal Check" (copper background, white text)
- Active page: copper underline on the nav link
- Font: font-body, 14px, medium weight

### Footer.tsx
- Background: navy with grid texture overlay
- Three columns:
  - Col 1: S&S mark + company name + tagline "Be found. Be accurate. Be recommended."
  - Col 2: Navigation links (same as nav) + "Book a Signal Check"
  - Col 3: "Durham, NC" + email link + LinkedIn link
- Bottom bar: Copyright + "Signal Score is a trademark of Signal & Structure AI"
- All text: white or white/50 opacity
- Signal dot before "Signal Score" in the trademark line
- Padding: 80px top, 40px bottom

### Button.tsx
- Two variants: "primary" (copper bg, white text) and "secondary" (navy bg, white text)
- One outline variant: "outline" (transparent bg, navy border, navy text)
- Padding: 14px 28px
- Border-radius: 8px
- Font: font-body, 14px, semibold
- Hover: scale 1.02 + shadow
- Transition: all 0.2s ease

### SectionLabel.tsx
- Renders: Signal Dot + uppercase text
- Font: font-body, 12px, medium weight, letter-spacing 0.08em
- Color: copper (on light backgrounds) or copper (on dark backgrounds)
- Margin-bottom: 16px

### SignalDot.tsx
- A 7px copper circle, inline-block
- Used inside SectionLabel, before list items, next to data points

### FadeIn.tsx
- Wrapper component using Framer Motion
- Props: direction ('up' | 'left' | 'right'), delay (number), children
- Uses IntersectionObserver (whileInView)
- Default: fade up 20px, 0.6s duration

### SignalScoreDemo.tsx
- An animated counter that counts from a "before" number to an "after" number
- Displays in JetBrains Mono, large size (48-64px)
- Before number in warmgray, arrow, after number in navy
- Counts up when scrolled into view
- Duration: 1.5s with easeOut
- Below the numbers: small label "Signal Score Improvement"

### GridTexture.tsx
- An absolutely positioned overlay that renders a dot grid pattern
- SVG-based or CSS background-image
- Dots: 1px radius circles
- Spacing: 24px grid
- Opacity: 4% (adjustable via prop)
- pointer-events: none

---

## GLOBAL CSS (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #F5F0EB;
  color: #6B7280;
  -webkit-font-smoothing: antialiased;
}

h1, h2 {
  color: #1B2B4B;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
}

h3, h4, h5, h6 {
  color: #1B2B4B;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
}

::selection {
  background-color: rgba(193, 122, 58, 0.2);
  color: #1B2B4B;
}

/* Smooth scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #F5F0EB;
}
::-webkit-scrollbar-thumb {
  background: #C17A3A;
  border-radius: 4px;
}
```
# PAGE COPY AND STRUCTURE — PART 2
# Home + Services Pages

---
---

# PAGE 1: HOME (app/page.tsx)

## Section 1: Hero
- **Background**: Navy with GridTexture overlay
- **Layout**: Centered text, max-width 800px
- **Padding**: 160px top (to account for nav), 120px bottom

### Content:

**Section Label**: (none for hero)

**Headline** (h1, font-display, white, 56px desktop / 36px mobile):
AI is sending referrals in your industry every day.
Is it sending them to you?

**Subheadline** (font-body, white/70 opacity, 20px, max-width 640px):
People stopped Googling and started asking AI. When someone asks
"Who should I hire for this?" AI gives a direct answer. If it does
not know your business exists, or gets the details wrong, that
referral goes to someone else.

**CTA Button** (primary, copper):
Book a Signal Check

**Sub-CTA text** (white/40, 13px):
30 minutes. See exactly how AI describes your business today.

---

## Section 2: The Shift
- **Background**: Stone (default page background)
- **Layout**: Two columns on desktop (text left, visual right). Stack on mobile.
- **Left column**: max-width 560px

### Content:

**Section Label**: WHAT CHANGED

**Headline** (h2, navy, 40px):
Google used to be the middleman. Now AI is.

**Body** (font-body, warmgray, 17px, line-height 1.7):
For years, the playbook was simple. Pick the right keywords. Show up on
the first page. Wait for clicks.

That is not how people find businesses anymore.

Now they open ChatGPT, Claude, Perplexity, or Gemini and ask a full
question. "Who is the best company for this in my area?" AI does not give
them a list of links. It gives them a direct answer. Names, descriptions,
reasons to choose one business over another.

This is a referral. It happens millions of times a day. And most
businesses are invisible to it because they are still set up for the old
way of being found.

**Right column visual**: A stylized card showing a mock AI conversation.
Build this as a styled div, NOT an image:

```
[Card with navy background, rounded corners, subtle shadow]
  [Small gray text]: "ChatGPT"
  [User message bubble - stone bg]:
    "Who should I hire for marketing in Durham, NC?"
  [AI response bubble - navy-light bg, white text]:
    "Based on available information, I'd recommend
     considering these options..."
  [Blurred/faded lines suggesting more text]
  [Small copper dot pulsing gently]
```

This card should have a subtle float animation (translateY 0 to -4px
and back, 4s duration, infinite, ease-in-out).

---

## Section 3: Service Cards
- **Background**: Stone
- **Layout**: Section heading centered, then 3 cards in a row (stack on mobile)
- **Card style**: White background, 32px padding, 12px border-radius, subtle shadow

### Content:

**Section Label**: SERVICES

**Headline** (h2, navy, 36px, centered):
Three ways to get into the AI referral conversation.

**Card 1: AI Business Profile**
- Copper top border (3px)
- **Tag**: (none)
- **Title** (h3, navy, 22px): AI Business Profile
- **Description** (warmgray, 16px): AI learns who you are and what you actually do. Your starting point for showing up correctly.
- **Price** (font-mono, navy, 24px): Starting at $750
- **CTA**: View Details → (links to /services)
- **Included list** (3 items with signal dots):
  - Structured business information for AI
  - Custom AI assistant on your data
  - Before and after Signal Score

**Card 2: AI Knowledge System** (featured — slightly larger, copper border)
- Copper left border (3px) OR a "Most Popular" badge in copper
- **Badge**: MOST POPULAR (copper bg, white text, small pill shape)
- **Title**: AI Knowledge System
- **Description**: AI pulls from your real information instead of guessing. A complete knowledge system AI references directly.
- **Price**: Starting at $3,000
- **CTA**: Build Your System →
- **Included list**:
  - Full knowledge mapping and structure
  - Multi-platform AI formatting
  - Detailed Signal Score by category

**Card 3: AI Presence Management**
- Copper top border (3px)
- **Title**: AI Presence Management
- **Description**: AI keeps referring you correctly as your business and AI platforms change. Ongoing monitoring and optimization.
- **Price**: Starting at $1,500/mo
- **Tag below price** (warmgray, 13px): 3 month minimum
- **CTA**: Learn More →
- **Included list**:
  - Monthly accuracy checks and updates
  - Quarterly deep audit and strategy
  - AI referral tracking and reporting

**Below cards** (centered):
See All Services and Pricing → (links to /services)

---

## Section 4: Signal Score Demo
- **Background**: Navy with GridTexture
- **Layout**: Centered, max-width 900px

### Content:

**Section Label**: SIGNAL SCORE (copper text on navy)

**Headline** (h2, white, 40px):
We do not just fix it. We prove it.

**Body** (white/70, 17px, max-width 640px, centered):
Every engagement starts with a baseline and ends with proof. Our
Signal Score measures how accurately and consistently AI represents
your business across every major platform.

**Signal Score Demo Component** (centered):
[Before: 2.8] → [After: 7.4]
(Use SignalScoreDemo.tsx — count-up animation on scroll)

**Below the demo** (three small stat cards in a row):

| Card 1 | Card 2 | Card 3 |
|--------|--------|--------|
| Label: ACCURACY | Label: DISCOVERABILITY | Label: HALLUCINATION |
| Value: +4.6 | Value: 1 → 4 | Value: 82% → 12% |
| Sub: avg improvement | Sub: platforms | Sub: reduction |

Stat cards: semi-transparent white background (white/10), 16px padding,
8px border-radius. Labels uppercase, 11px, copper. Values in font-mono,
28px, white. Sub text in white/50, 13px.

**CTA Button** (primary, copper):
See How Your Business Scores

---

## Section 5: Expertise Block
- **Background**: Stone
- **Layout**: Text left (max-width 600px), decorative element right

### Content:

**Section Label**: WHY IT HAPPENS

**Headline** (h2, navy, 36px):
Here is what most people do not realize about how AI works.

**Body** (warmgray, 17px):
AI does not carefully research your business the way a person would. It
scans for structured information it can quickly pull from. If your
information is scattered across different pages, inconsistent between
platforms, or not organized in a way AI can parse, it does one of two
things.

It skips you entirely. Or it guesses. And when AI guesses, it
hallucinates. It makes up details, confuses you with someone else, or
describes services you do not even offer.

This is not a flaw you can wait out. The only fix is giving AI something
structured, clear, and reliable to work with.

That is what we build.

---

## Section 6: Bottom CTA
- **Background**: Navy with GridTexture
- **Layout**: Centered text
- **Padding**: 96px top/bottom

### Content:

**Headline** (h2, white, 40px, max-width 700px):
AI is giving referrals in your space every day. Make sure yours is
one of them.

**CTA Button** (primary, copper):
Book a Signal Check

**Sub-text** (white/40, 14px):
30 minutes. No pressure. Just clarity.

---
---

# PAGE 2: SERVICES (app/services/page.tsx)

## Section 1: Page Header
- **Background**: Navy with GridTexture
- **Layout**: Centered text
- **Padding**: 160px top (nav clearance), 80px bottom

### Content:

**Section Label**: PRICING & PACKAGES

**Headline** (h1, white, 48px):
AI Knowledge Services

**Subheadline** (white/70, 18px, max-width 600px):
Clear pricing for two things that matter: making sure AI can find
your business, and making sure it describes you correctly when it does.

---

## Section 2: Three Service Tiers
- **Background**: Stone
- **Layout**: Three cards side by side (stack on mobile)
- **Each card**: White background, 32px padding, 12px radius

### Service 1: AI Business Profile

**Tag** (small copper badge): BEST FOR GETTING STARTED
**Title** (h3, 24px): AI Business Profile
**Price** (font-mono, 36px, navy): Starting at $750

**What This Is** (warmgray, 16px):
Your starting point. We take your real business information and organize
it so AI can find you and describe you correctly. Right now AI is either
ignoring your business or filling in blanks with wrong information. This
fixes both.

**How It Works** (warmgray, 16px):
We learn what your business actually does, who it serves, and how you
want to be talked about. Then we organize that into a format AI tools
can use. We build a custom AI assistant trained on your real data so you
can see the difference right away. And we run a before-and-after test so
you have proof of what changed.

**What is Included** (list with signal dots):
- Guided intake to learn your business
- Organized business information for AI
- Custom AI assistant trained on your actual data
- Brand and tone guardrails
- Clear rules for what AI should not say
- Structured formatting for AI platforms
- A shareable AI experience
- Before and after Signal Score

**CTA**: Get Started (primary button)

---

### Service 2: AI Knowledge System

**Tag**: MOST POPULAR (copper badge, slightly larger)
**Title**: AI Knowledge System
**Price**: Starting at $3,000

**What This Is**:
This goes deeper. We take everything your business has, every document,
page, policy, FAQ, and piece of content, and turn it into one organized
system that AI pulls from directly. This is how you go from AI
occasionally mentioning you to AI confidently recommending you with the
right details.

**How It Works**:
We map out all the knowledge your business has. We find what is scattered,
what is missing, and what is outdated. Then we build a structured
knowledge system organized by category: services, messaging, policies,
FAQs, and more. We test until the answers are right. And we format
everything to work across multiple AI platforms.

**What is Included**:
- Deep discovery and knowledge mapping
- Centralized AI-ready knowledge structure
- Organized categories (Services, Messaging, Policies, FAQs)
- AI connected directly to your source of truth
- Multi-platform formatting for different AI tools
- Schema markup and structured data
- Custom AI assistant on your knowledge system
- Thorough testing and accuracy refinement
- Expansion documentation for future growth
- Detailed before and after Signal Score

**CTA**: Build Your System (primary button)

---

### Service 3: AI Presence Management

**Tag**: ONGOING MANAGEMENT
**Title**: AI Presence Management
**Price**: Starting at $1,500/mo
**Sub-price**: 3 month minimum

**What This Is**:
Your business changes. AI changes. New services get launched. Pricing
shifts. AI platforms release updates every week. If nobody is managing
this, your referrals and accuracy start drifting within months.

**How It Works**:
Every month, we integrate your latest content, update your knowledge
system, and run accuracy checks across AI platforms. Every quarter, we
do a deep audit covering discoverability, accuracy by category, and
platform-by-platform comparison. You get monthly scorecard updates and
a quarterly strategy call.

**What is Included**:
- Monthly knowledge updates and content integration
- Monthly accuracy checks across AI platforms
- Monthly Signal Score updates
- Quarterly deep audit with full platform comparison
- Quarterly strategy call
- AI platform change monitoring
- Discoverability tracking
- AI referral tracking setup and reporting
- Strategic guidance as AI evolves
- Priority support

**CTA**: Start a Conversation (secondary button)

---

## Section 3: Add-Ons
- **Background**: Stone (slightly different shade or subtle top border)
- **Layout**: Section header + 2-column grid of add-on cards

### Content:

**Headline** (h2, 36px): Add-Ons
**Subheadline** (warmgray, 17px):
Available with any service. Each one extends what AI can do for your business.

**Add-on cards** (use AddOnCard component — white bg, 24px padding, 12px radius):

**1. Internal Team AI Assistant**
Price: Starting at $500
Description: A private AI assistant trained on your internal processes and documentation. Everyone gets the same right answer every time. Onboarding gets faster. Senior staff stop being the company encyclopedia.

**2. Website AI Chat**
Price: Starting at $750
Description: A customer-facing AI chat on your website that actually knows your business. Connected to your knowledge system so it answers with real information. Not generic chatbot responses.

**3. Multi-Platform AI Readiness**
Price: Starting at $1,000
Description: Your knowledge structured to work across every AI tool, not just one. ChatGPT, Claude, Perplexity, website chat, internal tools. One structure that feeds all of them.

**4. Custom GPTs and AI Apps**
Price: Starting at $2,000
Description: Purpose-built AI tools for your specific business. A customer intake assistant. A proposal generator. A product recommender. Built on your knowledge system so it knows what it is talking about.

**5. AI Workflow Automation**
Price: Starting at $1,500
Description: Automated workflows connecting your existing tools with AI. Blog posts become social content. Form submissions get analyzed and routed. Hours saved every week with visible results.

**6. Compliance and Tone Guardrails**
Price: Starting at $500
Description: Clear rules for what AI should and should not say on your behalf. Protects your brand, reduces risk, and keeps every AI response consistent. Essential for regulated industries.

**7. Quarterly AI Accuracy Audit**
Price: Starting at $750 per audit
Description: A structured checkup every 90 days. We test how AI tools describe and recommend your business across multiple platforms. You get a scorecard with scores and specific things to fix.

---

## Section 4: Bottom CTA
- **Background**: Navy with GridTexture
- **Layout**: Centered
- **Padding**: 96px top/bottom

### Content:

**Headline** (h2, white, 36px):
Ready to start getting the referrals you have been missing?

**CTA**: Book a Signal Check (copper button)

**Sub-text** (white/40, 14px):
30 minutes. We look at what AI currently says about your business
and whether it recommends you at all. No pressure. Just a clear picture.
# PAGE COPY AND STRUCTURE — PART 3
# How It Works + Why This Matters + Our Approach

---
---

# PAGE 3: HOW IT WORKS (app/how-it-works/page.tsx)

## Section 1: Page Header
- **Background**: Navy with GridTexture
- **Layout**: Centered
- **Padding**: 160px top, 80px bottom

### Content:

**Section Label**: OUR PROCESS

**Headline** (h1, white, 48px):
How It Works

**Subheadline** (white/70, 18px, max-width 640px):
A clear process for getting your business into the AI referral
conversation and making sure the details are right when it happens.

---

## Section 2: Intro
- **Background**: Stone
- **Layout**: Centered text, max-width 720px

### Content:

**Headline** (h2, navy, 36px):
You do not need more content. You need a different kind of structure.

**Body** (warmgray, 17px):
The strategies that made you findable on Google do not automatically
make you findable by AI.

Google worked on keywords. You put the right words on your page, Google
matched them to a search, and you showed up. AI does not work that way.
AI tries to understand your entire business and then decides whether to
mention you based on how well it can make sense of your information.

Most businesses already have everything AI needs. Services, descriptions,
policies, expertise. The information exists. It is just not set up for
how AI looks for it.

That is what our process fixes.

---

## Section 3: The Five Steps
- **Background**: Stone
- **Layout**: Alternating left-right layout for each step (step number
  and visual on one side, text on the other). Stack on mobile.
- **Each step**: Large step number in font-mono (120px, navy/10 opacity)
  behind the content as a watermark

### Step 1: Discovery

**Section Label**: STEP 1

**Headline** (h2, navy, 32px):
We learn what your business actually does and how it really operates.

**Body** (warmgray, 17px):
We start with the real version of your business. How you actually
describe your services when talking to a friend. What your customers
care about most. What gets misunderstood. What you wish people knew.

We also do something important here: we ask AI about your business right
now. We record what it says across multiple platforms. That becomes your
baseline. Your "before" snapshot. If AI is ignoring you, we document
that. If AI is getting things wrong, we document exactly what.

**Visual element** (right side): A stylized "baseline card" showing:
```
[Card - stone-dark bg, rounded]
  SIGNAL CHECK RESULTS
  [Row] ChatGPT:    ██░░░░░░░░  3.2
  [Row] Claude:     █░░░░░░░░░  1.8
  [Row] Perplexity: ██░░░░░░░░  2.5
  [Small copper dot] "Baseline captured"
```

---

### Step 2: Structure

**Section Label**: STEP 2

**Headline**:
We organize your information in a way AI can actually find and use.

**Body**:
This is the core of what we do. We take everything from the discovery
phase and organize it into clear categories. Services, messaging,
policies, FAQs, boundaries.

This is different from what most businesses have done before. You might
already have a great website. But AI does not read it the way a person
does. AI looks for structured, consistent information it can quickly
pull from and trust.

When your information is organized for AI, two things change. AI can find
you when someone asks a relevant question. And AI describes you correctly
when it does.

**Visual element**: A stylized "structure diagram" showing:
```
[Card - white bg, rounded]
  YOUR KNOWLEDGE SYSTEM
  [Grid of 6 small category cards]:
  Identity | Services | Messaging
  Policies | FAQs     | Guardrails
  [Copper line connecting them all to a center node]
```

---

### Step 3: Connection

**Section Label**: STEP 3

**Headline**:
We connect AI directly to your organized information.

**Body**:
Once the structure is in place, we plug AI tools into it. Instead of AI
scanning the internet and piecing together a guess about your business,
it pulls directly from your organized, verified information.

This is where you feel the shift. AI stops talking about your business
from the outside and starts speaking from the inside. Using your words.
Your facts. Your boundaries. And because we build the structure to work
across multiple platforms, it is not just one AI tool that can find you.
It is all of them.

**Visual element**: Icons or logos of 5 platforms (ChatGPT, Claude,
Perplexity, Gemini, Copilot) with lines connecting to a central
"knowledge system" icon. Keep this simple and branded, not clipart.

---

### Step 4: Testing

**Section Label**: STEP 4

**Headline**:
We test every answer against what you told us is actually true.

**Body**:
AI is known for making things up. It hallucinates. It fills in gaps
with confident-sounding information that is completely wrong. That is
why testing is not optional.

We ask AI the same questions your customers would ask. Then we check
every answer against the facts you gave us. If AI says you offer a
service you do not offer, we fix it. If AI gets your pricing wrong, we
fix it. If AI mentions something it should not, we add a guardrail.

We also test whether AI recommends you when someone asks for a business
in your category. Not just whether it knows about you, but whether it
brings you up on its own.

You get a scorecard. Accuracy scores. Discoverability scores. A clear
picture of exactly where things improved.

**Visual element**: A before/after comparison card:
```
[Card split in half]
  BEFORE          |  AFTER
  "They offer..." |  "They specialize in..."
  [Red text]      |  [Green text]
  Hallucination ● |  Accurate ●
```

---

### Step 5: Ongoing

**Section Label**: STEP 5

**Headline**:
We keep everything current as your business and AI platforms change.

**Body**:
AI is not a set-it-and-forget-it situation. Two things are constantly
changing.

Your business changes. New services, pricing updates, team changes.

And AI itself changes. New models come out. Platforms update how they
find and rank information. Features get added every few weeks.

If nobody is paying attention to both of those things, your accuracy and
discoverability start slipping. For businesses that want long-term
results, we manage this month to month. Updates, checks, and scorecards
monthly. A full deep audit with strategy every quarter.

**Visual element**: A simple timeline showing:
```
[Horizontal timeline with dots]
  Month 1: Updates + Check
  Month 2: Updates + Check
  Month 3: Updates + Check + QUARTERLY AUDIT
  [Repeating pattern...]
```

---

## Section 4: Why It Matters Block
- **Background**: Navy with GridTexture
- **Layout**: Headline centered, then 4 value cards in a row

### Content:

**Headline** (h2, white, 36px):
What this process protects.

**Four value cards** (semi-transparent white bg, 24px padding, centered text):

Card 1: **Your referrals** — AI recommends you instead of skipping you.
Card 2: **Your accuracy** — AI describes you correctly every time.
Card 3: **Your reputation** — No more wrong details floating around.
Card 4: **Your time** — We manage it so you do not have to.

---

## Section 5: Best For / Not For
- **Background**: Stone
- **Layout**: Two columns

### Content:

**Left column** (positive — with green signal dots):
**Headline** (h3, navy, 24px): This works best for businesses who:
- Know their reputation matters
- Are tired of being described wrong or left out entirely
- Understand that how people find businesses has changed
- Want a long-term advantage, not a quick trick

**Right column** (neutral — with warmgray signal dots):
**Headline** (h3, navy, 24px): This is probably not the right fit if you:
- Want overnight visibility hacks
- Think keywords and a good website are still enough on their own
- Are not ready to invest in something that actually works

---

## Section 6: Bottom CTA (same pattern as other pages)

**Headline** (h2, white, 36px):
If referrals drive your business, AI should be sending them your way.

**CTA**: Book a Signal Check

---
---

# PAGE 4: WHY THIS MATTERS (app/why-this-matters/page.tsx)

## Section 1: Page Header
- **Background**: Navy with GridTexture
- **Padding**: 160px top, 80px bottom

### Content:

**Section Label**: STRATEGIC CONTEXT

**Headline** (h1, white, 48px):
Why This Matters

**Subheadline** (white/70, 18px):
How people find and evaluate businesses has fundamentally changed.
Most businesses have not adjusted yet.

---

## Section 2: The Shift
- **Background**: Stone
- **Layout**: Full-width text, max-width 720px centered

### Content:

**Section Label**: THE NEW REFERRAL

**Headline** (h2, navy, 36px):
People did not stop asking for recommendations. They stopped asking Google.

**Body** (warmgray, 17px):
People still ask friends for advice. What changed is what happens when
they do not have a friend to ask.

They used to open Google, type in a few keywords, and scroll through a
page of links. That is not what most people do now. They ask AI. And the
way they ask is completely different.

They do not type "marketing agency Durham NC." They ask "Who is the best
marketing agency for a small business in North Carolina and why?" That is
not a keyword search. That is a question. And AI gives them a direct
answer with names, descriptions, and reasons.

If your business is built to show up for keywords but not built to answer
questions, you are set up for a system that is fading.

---

## Section 3: Two Problems
- **Background**: Stone
- **Layout**: Two cards side by side (stack on mobile)

### Content:

**Headline** (h2, navy, 36px, centered):
Two things keep businesses out of the AI referral conversation.

**Card 1** (white bg, red/copper left border):
**Title** (h3, 22px): You are not showing up at all.
**Body**: AI does not know enough about your business to feel confident
recommending you. So when someone asks for help in your space, AI gives
other names. Not because those businesses are better. Because AI could
find their information and could not find yours.

**Card 2** (white bg, red/copper left border):
**Title**: You are showing up wrong.
**Body**: AI found some information about you but it is scattered or
inconsistent. So it describes your services incorrectly, gets your
pricing wrong, or makes you sound like a completely different company.

And it does not stop at the first question. When someone asks AI for a
recommendation, they follow up. "Tell me more." "What do they charge?"
"Why them over the others?" Every follow-up is another chance for AI to
get it wrong. One bad answer might not lose you the business. But a
conversation where AI gets three things wrong? That person is gone before
they ever visit your website.

**Below both cards** (centered, warmgray, 17px):
Both of these problems come from the same place.

---

## Section 4: Why AI Gets It Wrong
- **Background**: Navy with GridTexture
- **Layout**: Centered headline, then 3 explanation blocks

### Content:

**Section Label**: THE TECHNICAL REALITY

**Headline** (h2, white, 36px):
This is not a mystery. Here is exactly why AI gets businesses wrong.

**Intro** (white/70, 17px, max-width 680px):
AI does not carefully research your business the way a person would.
It scans for information it can quickly grab and structure into an
answer. If your information is well-organized and easy to pull from,
AI uses it. If not, AI either skips you or fills in the blanks on its
own. When it fills in blanks, that is called hallucination.

**Three explanation blocks** (semi-transparent white cards):

**Block 1**: Scattered information.
Your details live in too many places and none of them agree. Website says
one thing. LinkedIn says another. An old blog post contradicts both. AI
sees all of this and picks whatever it finds first, which may not be the
right version.

**Block 2**: No structured data.
You have information, but it is written for humans to read, not for AI
to process. AI works fastest with structured data: clear categories,
consistent formatting, organized facts. Most business websites are not
set up this way because they never needed to be.

**Block 3**: Outdated strategies.
Your online presence was built for a keyword-based search world. It was
designed to rank on Google, not to answer questions from AI. That is not
a failure. It means the tools changed and the setup needs to change too.

---

## Section 5: What Changes
- **Background**: Stone
- **Layout**: Centered text + optional subtle visual

### Content:

**Section Label**: THE RESULT

**Headline** (h2, navy, 36px):
What happens when this gets fixed.

**Body** (warmgray, 17px, max-width 680px):
Businesses that organize their information for AI start showing up in
recommendations they were missing before. When someone asks "Who should
I hire for this?" their name is in the answer.

They stop finding wrong descriptions floating around. AI no longer says
they offer things they do not or confuses their pricing.

They start getting inquiries from people who say "AI recommended you" or
"I asked ChatGPT and your name came up."

And over time, they can track whether AI referrals are growing.

That is the shift. Not more noise. Better information in the right places,
working for you around the clock, across every AI tool people are using.

---

## Section 6: Bottom CTA

**Headline**: AI is giving referrals in your space every day. The question
is whether your business is one of them.

**CTA**: Book a Signal Check

---
---

# PAGE 5: OUR APPROACH (app/our-approach/page.tsx)

## Section 1: Page Header
- **Background**: Navy with GridTexture
- **Padding**: 160px top, 80px bottom

### Content:

**Section Label**: PHILOSOPHY

**Headline** (h1, white, 48px):
Our Approach

**Subheadline** (white/70, 18px):
We build the foundation that makes AI referrals possible and keeps
them coming.

---

## Section 2: Philosophy
- **Background**: Stone
- **Layout**: Full-width text, max-width 720px

### Content:

**Section Label**: HOW WE THINK

**Headline** (h2, navy, 36px):
Smart shortcuts come from understanding the system, not gaming it.

**Body** (warmgray, 17px):
Signal & Structure AI exists because we believe the best shortcut is
knowing a system well enough to move through it the right way. Not by
breaking things. Not by tricking an algorithm. By understanding what
actually works and building for that.

Speed without structure creates chaos. Automation without clear
information creates noise. AI without organized knowledge creates wrong
answers and missed opportunities.

We build the structure first. Then everything that sits on top of it
works the way it should.

---

## Section 3: The Real Problem
- **Background**: Stone

### Content:

**Section Label**: PERSPECTIVE

**Headline** (h2, navy, 36px):
Your current setup is not broken. It was built for a different system.

**Body**:
Most businesses have invested real time and money into their online
presence. Websites, SEO, social media, Google Business listings, content
marketing. None of that was wasted. It worked for the system it was
designed for.

But the system changed.

AI does not find businesses the way Google does. It does not match
keywords. It does not rank pages. It looks for structured, consistent
information and uses that to decide who to mention and how to describe
them.

The tools that made you visible on Google do not automatically make you
visible to AI. That does not mean they were wrong. It means they are no
longer enough on their own.

That is the gap we fill.

---

## Section 4: Core Assumption Block
- **Background**: Navy with GridTexture (a narrow highlight band)
- **Layout**: Centered text
- **Padding**: 64px top/bottom

### Content:

**Section Label**: CORE ASSUMPTION

**Headline** (h2, white, 32px, max-width 700px):
Your business already knows what it does. AI just needs to be able to
find that and make sense of it.

**Body** (white/70, 17px):
We do not reinvent your business for AI. We take what is already true
about what you do and organize it so AI can find it, trust it, and share
it with the people asking.

---

## Section 5: Independence Philosophy
- **Background**: Stone
- **Layout**: Text with a subtle highlight card

### Content:

**Section Label**: OUR PROMISE

**Headline** (h2, navy, 36px):
We build toward your independence, not your dependency.

**Body** (warmgray, 17px):
Our goal is to get your AI presence to a place where it works for you.
Some clients choose ongoing management because their business changes
often. Others reach their goals and maintain things on their own or with
quarterly checkups. Either path is a success.

We do not hide how this works to make you need us longer. We document
everything. We explain everything. We build systems you can understand
and, if you choose to, eventually manage yourself.

If you stay, it is because the value is clear. Not because we made it
impossible to leave.

**Highlight card** (stone-dark bg, 32px padding, copper left border):
"Every client receives full documentation of their knowledge system,
expansion guides for adding new information, and clear explanations of
how everything works. Your AI presence belongs to you."

---

## Section 6: AI Changes Constantly
- **Background**: Stone

### Content:

**Section Label**: THE LANDSCAPE

**Headline** (h2, navy, 36px):
This is not a one-time fix. AI changes every week.

**Body**:
AI platforms do not sit still. OpenAI releases updates to ChatGPT
regularly. Anthropic improves Claude. Google changes how Gemini processes
information. Perplexity updates how it surfaces sources.

Every one of those changes can affect how your business shows up, how it
gets described, and whether it gets recommended.

This is one of the reasons ongoing management matters. It is not just
that your business changes over time. AI itself changes. Staying current
means watching both sides and adjusting before things drift.

We track these changes as part of our work. It is one of the things that
separates what we do from someone who sets up a profile and walks away.

---

## Section 7: Why Signal & Structure AI
- **Background**: Stone
- **Layout**: Text section

### Content:

**Section Label**: WHY US

**Headline** (h2, navy, 36px):
Why Signal & Structure AI

**Body**:
We built this company because we saw something most businesses have not
noticed yet. AI is becoming one of the primary ways people find, evaluate,
and choose businesses. And almost nobody is set up for it.

We work at the intersection of strategy, structure, and AI. We are
careful. We are thorough. We think about what works long-term, not just
what looks good this week.

Our role is not to impress you. It is to make sure AI knows your business,
describes it correctly, and recommends it to the people who are asking.

**Tagline** (font-display, copper, 28px, italic: NO, just regular weight):
Be found. Be accurate. Be recommended.

---

## Section 8: Bottom CTA

**Headline**: The next step is a 30-minute conversation. We will show you
exactly where you stand and talk about what it would take to change it.

**CTA**: Book a Signal Check

**Sub-text**: No pressure. Just clarity.
# IMPLEMENTATION NOTES — PART 4
# Responsive, SEO, Performance, and Execution Guide

---

## RESPONSIVE BREAKPOINTS

```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

### Mobile Rules
- All multi-column layouts stack to single column
- Hero headline: 36px (down from 56px)
- Section headlines: 28px (down from 36-40px)
- Section padding: 64px top/bottom (down from 96px)
- Hero padding: 120px top (down from 160px)
- Card grids: single column with 16px gap
- Nav: Hamburger menu, slide-in panel from right
- Body text: 16px (same as desktop)
- Max-width containers: 100% with 20px horizontal padding

### Tablet Rules
- Service cards: 2-column grid (third card full width below)
- Add-on cards: 2-column grid
- Step sections: Stack (no alternating left-right)
- Nav: Can remain horizontal if it fits, otherwise hamburger

### Desktop Rules
- Max-width container: 1200px, centered
- Service cards: 3-column grid
- Add-on cards: 2-column grid
- Step sections: Alternating left-right layout
- All hover effects active

---

## SEO METADATA

### Home (app/page.tsx)
```
title: "Signal & Structure AI | Make Your Business Findable by AI"
description: "AI is referring businesses every day. We make sure yours is one of them. AI knowledge services that improve how AI finds, describes, and recommends your business."
```

### Services (app/services/page.tsx)
```
title: "Services & Pricing | Signal & Structure AI"
description: "AI Business Profile starting at $750. AI Knowledge System starting at $3,000. AI Presence Management starting at $1,500/mo. Clear pricing for AI knowledge services."
```

### How It Works (app/how-it-works/page.tsx)
```
title: "How It Works | Signal & Structure AI"
description: "Our five-step process: Discovery, Structure, Connection, Testing, and Ongoing management. We organize your business information so AI can find and recommend you."
```

### Why This Matters (app/why-this-matters/page.tsx)
```
title: "Why This Matters | Signal & Structure AI"
description: "People stopped Googling and started asking AI. If your business is not structured for AI, you are invisible to the new referral system. Here is why and how to fix it."
```

### Our Approach (app/our-approach/page.tsx)
```
title: "Our Approach | Signal & Structure AI"
description: "We build toward your independence, not your dependency. Signal & Structure AI organizes your business information for AI with structure, accuracy, and long-term thinking."
```

### Additional SEO
- Add Open Graph tags for each page (og:title, og:description, og:image)
- Add canonical URLs
- Add robots.txt allowing all
- Add sitemap.xml with all 5 pages
- Favicon: Use a simple S&S text mark or copper dot as placeholder

---

## PERFORMANCE RULES

- All images: Use next/image with lazy loading
- Fonts: Use next/font/google for DM Serif Display, DM Sans, JetBrains Mono
- Load fonts with `display: swap`
- No external scripts except analytics (add later)
- Minimize client-side JavaScript — use server components where possible
- Framer Motion: Only import motion components where animations are used
- Target: Lighthouse score 90+ on all categories

---

## ACCESSIBILITY

- All interactive elements must be keyboard-navigable
- Color contrast: Navy on Stone passes AAA. White on Navy passes AAA.
- Copper on Stone passes AA for large text only — never use for small body text
- All buttons have aria-labels
- Skip-to-content link (hidden, visible on focus)
- Mobile nav: Focus trap when open
- Alt text: Add descriptive alt text to any images (the visual cards are divs, not images, so no alt needed but use aria-labels where helpful)

---

## BOOKING LINK

The "Book a Signal Check" CTA button should link to:
**https://calendly.com/PLACEHOLDER**

Use a placeholder URL. The user will replace this with their actual
Calendly or Cal.com link. Make it easy to find and replace — use a
constant defined in one place:

```tsx
// lib/constants.ts
export const BOOKING_URL = "https://calendly.com/PLACEHOLDER";
export const EMAIL = "hello@signalstructureai.com";
export const LINKEDIN = "https://linkedin.com/company/signal-structure-ai";
```

---

## WRITING RULES (for any text Claude Code generates or adjusts)

- No em dashes anywhere. Use periods or commas instead.
- No exclamation marks.
- 7th-8th grade reading level.
- No jargon without immediate explanation.
- Avoid: navigate, leverage, utilize, foster, delve, landscape, realm,
  game-changer, genuinely, honestly, straightforward
- Never say "and the truth is"
- Use "Signal Score" with the TM symbol on first mention per page only:
  Signal Score™ (first mention), then Signal Score (subsequent)
- Company name is always "Signal & Structure AI" — never abbreviated
  to "S&S AI" in body copy (only the logo mark uses S&S)

---

## IMPORTANT DESIGN DETAILS

### The AI Conversation Card (Homepage Section 2)
This is a key visual moment. Build it as a real div/component, not an
image. It should look like a real AI chat interface:
- Navy background card with rounded corners (16px radius)
- Subtle inner shadow for depth
- "ChatGPT" label in top-left in small gray text
- User message: Stone background bubble with navy text
- AI response: Slightly lighter navy bubble with white text
- The response text should be partially visible and fade to transparent
  at the bottom (gradient mask), implying there is more
- A small copper dot in the bottom-right, gently pulsing (opacity 0.6
  to 1.0, 2s loop)
- The whole card floats gently (translateY animation)
- On mobile: This goes below the text, full-width

### Visual Cards in How It Works Steps
Each step has a companion visual described in Part 3. These are styled
divs, not images. Keep them simple, clean, and on-brand:
- Use navy, copper, stone, and white only
- Monospace font for any data/scores shown
- Signal dots where appropriate
- Subtle rounded corners and shadows
- These should look polished but not over-designed

### The Signal Score Demo (Homepage Section 4)
- Two large numbers side by side with an arrow between them
- "Before" number starts at 0 and counts up to 2.8 (warmgray color)
- Arrow or separator in copper
- "After" number starts at 0 and counts up to 7.4 (white, slightly larger)
- Count-up triggers when the section scrolls into view
- Duration: 1.5s with easeOut
- Below the numbers: "Signal Score™ Improvement" in copper, 13px uppercase
- Use requestAnimationFrame or Framer Motion for the count

### Grid Texture Pattern
The subtle dot grid that appears on navy backgrounds:
```css
background-image: radial-gradient(
  circle,
  rgba(255, 255, 255, 0.04) 1px,
  transparent 1px
);
background-size: 24px 24px;
```

### Copper Accent Lines
Several sections use a thin copper accent:
- Service cards: 3px copper top border on non-featured, copper left
  border on featured
- Problem cards (Why This Matters): 3px copper left border
- Highlight quote card (Our Approach): 3px copper left border
- These are subtle but consistent. They are the Signal Dot principle
  applied to layout: small, repeated, recognizable.

---

## EXECUTION INSTRUCTIONS FOR CLAUDE CODE

### Step 1: Initialize the project
```bash
npx create-next-app@latest signal-structure-ai --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
cd signal-structure-ai
npm install framer-motion
```

### Step 2: Configure tailwind.config.ts
Add the custom colors, fonts, and any extended values from Part 1.

### Step 3: Configure fonts in app/layout.tsx
```tsx
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';

const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-display' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-mono' });
```

### Step 4: Build shared components first
Build in this order:
1. SignalDot.tsx
2. SectionLabel.tsx
3. Button.tsx
4. GridTexture.tsx
5. FadeIn.tsx
6. Nav.tsx
7. Footer.tsx

### Step 5: Build pages
Build in this order:
1. Home (page.tsx) — includes SignalScoreDemo
2. Services (services/page.tsx) — includes ServiceCard, AddOnCard
3. How It Works (how-it-works/page.tsx) — includes StepCard
4. Why This Matters (why-this-matters/page.tsx)
5. Our Approach (our-approach/page.tsx)

### Step 6: Add constants
Create lib/constants.ts with booking URL, email, LinkedIn URL.

### Step 7: Test
- Check all pages render
- Check responsive at 375px, 768px, 1024px, 1440px
- Check all animations trigger on scroll
- Check nav works on mobile
- Check all CTAs link to booking URL
- Check Signal Score demo counts up on scroll

### Step 8: Deploy
Push to GitHub. Connect to Netlify or Vercel. Deploy.

---

## WHAT NOT TO DO

- Do NOT use stock photography anywhere
- Do NOT use AI-generated images anywhere
- Do NOT use purple, bright blue, or neon colors
- Do NOT use Inter, Roboto, Arial, or system fonts
- Do NOT add a blog page (will be added later)
- Do NOT add a contact form (Signal Check booking replaces this)
- Do NOT add testimonials (none exist yet — will be added later)
- Do NOT add case studies (none exist yet — will be added later)
- Do NOT add a chat widget
- Do NOT add cookie banners (will be added with legal docs later)
- Do NOT use em dashes in any text whatsoever
- Do NOT use lorem ipsum or placeholder text — all copy is provided
- Do NOT add features not specified in this document

---

## SUMMARY OF DELIVERABLES

When complete, the project should have:
- 5 fully built pages with all copy from Parts 2-3
- Shared navigation and footer
- All components listed in the file structure
- Responsive design at all breakpoints
- Scroll-triggered animations via Framer Motion
- Signal Score count-up demo
- AI conversation card visual
- Grid texture on dark sections
- Signal dots throughout
- All CTAs linking to the booking URL constant
- SEO metadata on every page
- Clean, production-ready code

Total estimated Claude Code calls: This should be achievable in 3-5
focused sessions if each session builds a specific set of components
and pages. The specification is complete — no creative decisions or
copy writing should be needed during execution.

---

## QUICK REFERENCE: PAGE STRUCTURE

```
HOME:
  Hero (navy bg) → The Shift (stone, 2-col) → Service Cards (stone, 3-col) →
  Signal Score Demo (navy bg) → Expertise Block (stone) → Bottom CTA (navy bg)

SERVICES:
  Header (navy bg) → Three Tiers (stone, 3-col) → Add-Ons (stone, 2-col grid) →
  Bottom CTA (navy bg)

HOW IT WORKS:
  Header (navy bg) → Intro (stone) → 5 Steps (stone, alternating) →
  Value Cards (navy bg, 4-col) → Best For / Not For (stone, 2-col) →
  Bottom CTA (navy bg)

WHY THIS MATTERS:
  Header (navy bg) → The Shift (stone) → Two Problems (stone, 2-col cards) →
  Why AI Gets It Wrong (navy bg, 3 blocks) → What Changes (stone) →
  Bottom CTA (navy bg)

OUR APPROACH:
  Header (navy bg) → Philosophy (stone) → The Real Problem (stone) →
  Core Assumption (navy bg, narrow band) → Independence (stone) →
  AI Changes (stone) → Why S&S (stone) → Bottom CTA (navy bg)
```

Every page alternates between stone and navy background sections,
creating visual rhythm. Navy sections always have the GridTexture overlay.
Stone sections are the warm off-white default. This alternation is
intentional and consistent across the entire site.
