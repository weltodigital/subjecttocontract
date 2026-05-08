# Build: High-Converting Landing Page for Subject To Contract

I want to build a high-converting landing page for my newsletter, Subject To Contract. The current page (default Beehiiv template) converts at 1-3% from cold paid traffic — I need to get to 15-30% by giving visitors enough to actually convince them to subscribe.

The site will be hosted on Vercel. The signup form is a Beehiiv embed.

## Context

**Subject To Contract** is a weekly newsletter for UK property professionals (estate agency owners, lettings directors, branch managers, proptech founders, surveyors, conveyancers). Sent every Tuesday at 7am. Six-minute read. Free.

**Parent company:** Welto Media

**Brand colour:** Forest green `#1B4332`
**Secondary:** Off-white `#FAF7F2` for backgrounds, deep charcoal `#1A1A1A` for body text
**Logo:** Already designed — STC monogram (white "STC" on green box) plus letterspaced wordmark "SUBJECT TO CONTRACT". Logo files will be supplied as SVG in `/public/logos/`.

**Voice:** Confident, slightly irreverent, British, editorial — Morning Brew tone but more reserved. Short sentences. Direct. Trusts the reader.

**Target audience (Meta ad traffic):** Mostly mobile. Property professionals in their 30s-50s. Time-poor. Sceptical. Need to feel "this is for people like me" within 3 seconds.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel
- No CMS — content is hardcoded in the page (this is a single landing page, not a multi-page site)
- Use `next/image` for image optimisation
- Use `next/font` for proper font loading
- Beehiiv signup embed (I'll provide the embed code separately, but build placeholder signup components for now)

## Folder structure

```
subjecttocontract-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/
│       ├── Hero.tsx
│       ├── SocialProof.tsx
│       ├── ProductPreview.tsx
│       ├── WhatsInIt.tsx
│       ├── WhoReadsThis.tsx
│       ├── HowItWorks.tsx
│       ├── FinalCTA.tsx
│       ├── Footer.tsx
│       └── SignupForm.tsx
├── public/
│   ├── logos/
│   │   ├── stc-mark.svg
│   │   ├── stc-horizontal.svg
│   │   └── welto-media.svg
│   └── screenshots/
│       └── (placeholder — I'll add actual newsletter screenshots later)
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md
```

## Page structure

The page is a single scrollable page with these sections in order. Each section is a separate component for easy iteration.

### 1. Hero (above the fold)

This is the most important section — it has 3 seconds to convince visitors to keep scrolling.

**Layout:**
- STC mark in top-left corner (small, ~48px)
- "A Welto Media publication" text in top-right (small, charcoal, low opacity)
- Centred content:
  - **Eyebrow text** (small, all caps, letterspaced): "UK PROPERTY · WEEKLY · FREE"
  - **Headline** (massive serif): "The newsletter UK property reads on Tuesday mornings."
  - **Subhead** (medium, sans, charcoal): "The week's biggest property stories, distilled. Sharp takes. Real sources. Six minutes, every Tuesday at 7am."
  - **Signup form** — single email field + green "Subscribe Free" button, side-by-side on desktop, stacked on mobile
  - **Trust line** under the form (small, charcoal): "Free forever · Unsubscribe anytime · No spam, ever"

**Design notes:**
- Background: off-white (`#FAF7F2`)
- Headline uses a serif font (specifically: Lora from Google Fonts, weight 500). Should feel like an editorial masthead, not a SaaS landing page.
- Body text uses Inter from Google Fonts.
- Headline should be GENEROUSLY sized — at least 4rem on desktop, 2.5rem on mobile.
- Generous whitespace above and below.
- The signup form button should be `#1B4332` (forest green) with white text.

### 2. Social Proof Strip

A horizontal strip immediately below the hero, full-width.

**Content:**
- Small all-caps eyebrow: "READ BY PROPERTY PROFESSIONALS AT"
- Below: a row of 6-8 placeholder company name "logos" — for now, render them as italic serif text (e.g., "Foxtons", "Savills", "Hamptons", "Knight Frank", "Connells", "Hunters", "Belvoir") in muted grey. These are PLACEHOLDERS until I confirm subscribers from those companies. Build them as a `companies` array I can edit easily.
- On mobile, this should scroll horizontally (subtle, no scrollbar visible).

**Design notes:**
- Background: forest green `#1B4332`
- Text: off-white, slightly muted opacity
- Heights compact — this is a thin strip, not a full section

### 3. Product Preview (the screenshots)

This is THE most important conversion driver. People need to SEE what they're signing up for.

**Layout:**
- Section heading (centred): "What you'll actually get"
- Subhead (centred): "A real example of last week's issue."
- Below: a stylised "phone mockup" frame (or laptop frame) showing screenshots of the newsletter. For now, build placeholder image slots — I'll provide actual screenshots later.

**Specifically build:**
- A central iPhone-style frame (use CSS to create the device frame, no image needed) showing one main screenshot.
- Either side, two smaller "preview cards" showing different sections (Big Story, Numbers, Movers & Shakers).
- Each preview card has a small caption above it: "THE BIG STORY", "THE NUMBERS", "MOVERS & SHAKERS".
- On mobile: stack vertically, with the iPhone frame first.

**Design notes:**
- Background: off-white
- Use real-looking layout — even with placeholder images, the framing should look polished
- Add subtle drop shadows to the device frame and preview cards
- Build it so I can swap in real PNG screenshots into `/public/screenshots/` later without changing the layout

### 4. What's In It

A clean 4-column grid (2 cols on tablet, 1 col on mobile) showing what readers get each week.

**Content:**

Each tile has an icon (use Heroicons via `@heroicons/react`), a heading, and 1-2 sentences of body.

| Heading | Body |
|---|---|
| The biggest stories | The week's most important property news, distilled into one sharp take per story. |
| The numbers | Halifax, Nationwide, Rightmove, BoE — all the data that's moving the market, with one line of context. |
| Movers & shakers | The acquisitions, branch openings, and people moves shaping who runs UK property. |
| One thing worth trying | A tactical tip you can use this week — marketing, ops, sales, or tech. |
| Sharp signals | Trends others miss. The pattern across the week's stories that explains where the market's heading. |
| The watercooler | A weekly serving of property's stranger stories, weird listings, and industry gossip. |

**Design notes:**
- Background: off-white
- Section heading: "Six minutes. Six things you'll actually want to read."
- Each tile: white background, very subtle border, 16px padding, slight rounded corners
- Icons in forest green
- Headings in serif, body in sans

### 5. Who Reads This

A trust-building section that names roles (since we can't yet name companies).

**Layout:**
- Section heading: "Built for the people who run UK property"
- Below: a clean two-column block (single column mobile)

**Left column:** Body copy:
> *Subject To Contract is read by estate agency owners, lettings directors, branch managers, proptech founders, surveyors, conveyancers, and the people who actually move the UK property market. If your week starts on Monday morning with "what did I miss?" — this is for you.*

**Right column:** A vertical list of roles with small dots/bullets:
- Estate agency owners & directors
- Lettings directors & managers
- Branch managers
- Proptech founders & employees
- Surveyors & valuers
- Conveyancers & property lawyers
- Mortgage & finance professionals
- Investors & landlords

**Design notes:**
- Background: subtle off-white tinted slightly green (like `#F4F1EA` or similar)
- Generous padding top and bottom

### 6. How It Works

Reassurance section — what to expect after signup.

**Layout:**
A 3-step horizontal layout (vertical stack on mobile):

1. **Subscribe in 10 seconds** — Free, forever. We'll never sell your email or spam you with junk.
2. **Get the first issue Tuesday at 7am** — Six minutes of reading, with everything you need to know about the week.
3. **Read it. Forward it. Or unsubscribe.** — No hard feelings if it's not for you. One click and you're out.

Each step has a number badge (large, serif, forest green), a heading, and 1 line of body.

**Design notes:**
- Background: forest green `#1B4332`
- Text: off-white
- Number badges: off-white circle with green number inside

### 7. Final CTA

A repeated signup form at the bottom.

**Layout:**
- Centred content
- Headline (serif, large): "Read by the sharpest people in UK property."
- Subhead: "Your inbox catches up every Tuesday morning. Free."
- Signup form (same as hero — email field + green button)
- Trust line below: "Free forever · Unsubscribe anytime"

**Design notes:**
- Background: off-white
- Lots of whitespace
- Make the headline genuinely big — this is the last chance to convert

### 8. Footer

Minimal.

**Layout:**
- Left: STC mark + small text "Subject To Contract — A Welto Media publication"
- Right: small text links: "Privacy · Contact · Twitter · LinkedIn"

**Design notes:**
- Background: forest green `#1B4332`, text off-white
- Compact — single row on desktop, two rows on mobile

## SignupForm component

Build a reusable `<SignupForm />` component used in Hero and FinalCTA.

**Props:**
- `variant`: 'hero' | 'footer' (controls sizing)
- `placeholder`: optional override for the email field placeholder

**Behaviour:**
- Single email input with placeholder "your@email.com"
- Submit button: green background, white text, "Subscribe Free"
- For now, on submit: log to console and show a placeholder "Thanks! Check your email." message. Later, I'll replace the form action with the Beehiiv embed.

**Design:**
- Email field and button on one line on desktop (flex row)
- Stacked on mobile (flex column)
- Email field has a subtle border, 12-16px padding, rounded corners
- Button matches the field height exactly
- On focus, the email field border becomes forest green

Add a comment in the component file showing where to swap in the Beehiiv embed code:

```tsx
{/* TODO: Replace this form with Beehiiv embed code from beehiiv dashboard */}
```

## Typography rules

- **Serif headings:** Lora (Google Fonts), weights 400, 500, and 600
- **Sans body:** Inter (Google Fonts), weights 400, 500, 600
- Set up via `next/font` in `app/layout.tsx`
- Body text: 16px on mobile, 17px on desktop
- Headings: H1 4rem desktop / 2.5rem mobile; H2 2.5rem / 2rem; H3 1.5rem / 1.25rem
- Line heights: tight for headings (1.1), generous for body (1.6)

## Colour system in Tailwind

In `tailwind.config.ts`, set up custom colours:

```ts
colors: {
  forest: {
    DEFAULT: '#1B4332',
    light: '#2D5A3D',
    dark: '#0F3D2E',
  },
  cream: '#FAF7F2',
  ink: '#1A1A1A',
  inkLight: '#4A4A4A',
}
```

Use these throughout — never hardcode hex values in components.

## Responsive design priorities

This is a mobile-first build. Most Meta traffic is mobile. Specifically:

- Test layouts at 375px wide (iPhone SE) and 390px (iPhone 14)
- Hero on mobile: headline must fit in viewport without scrolling on a 6.1" phone
- Signup form on mobile: stacked, full-width button
- Body text on mobile: minimum 16px (never smaller)
- Generous tap targets — buttons minimum 48px tall

## Performance requirements

- Lighthouse performance score: target 95+
- Use `next/image` for all images
- Lazy-load images below the fold
- Total JavaScript bundle: under 100KB (this is a static landing page, should be tiny)
- LCP under 1.5s
- Add appropriate meta tags for SEO and social sharing in `app/layout.tsx`

## SEO and social meta

In `app/layout.tsx`, set up:

- `<title>`: "Subject To Contract — UK property's weekly intelligence briefing"
- `<meta name="description">`: "The week's biggest UK property stories, distilled. Sharp takes. Real sources. Free, every Tuesday morning. Read by estate agency owners, lettings directors, and proptech founders."
- Open Graph tags for social sharing — title, description, image (placeholder URL for now, I'll add a real OG image later)
- Twitter card tags
- Favicon: use `/public/logos/stc-favicon.svg`

## What I'll add manually after the build

These are placeholder for now — build the structure but I'll fill in real content:

1. **Real screenshots** of the newsletter — add to `/public/screenshots/`
2. **Beehiiv embed code** for the signup form — replace the placeholder form
3. **Real company names** in the social proof strip — once I have confirmed subscribers from named companies
4. **Welto Media logo** — replace placeholder
5. **Real OG image** for social sharing
6. **Analytics** — I'll add Plausible or Vercel Analytics myself

## Build order

1. Scaffold Next.js project with TypeScript and Tailwind
2. Set up fonts (Lora + Inter via `next/font`)
3. Set up Tailwind config with custom colours
4. Build `Hero` component
5. Build `SignupForm` component (reusable)
6. Build `SocialProof` strip
7. Build `ProductPreview` with placeholder screenshots
8. Build `WhatsInIt` grid
9. Build `WhoReadsThis` section
10. Build `HowItWorks` section
11. Build `FinalCTA` section
12. Build `Footer`
13. Wire it all together in `app/page.tsx`
14. Test on mobile breakpoints (375px, 390px, 768px, 1024px, 1440px)
15. Run Lighthouse audit and optimise
16. Set up `vercel.json` for deployment

## Quality requirements

- All sections feel polished — no awkward spacing, no text overflow, no weird wraps
- Mobile-first responsive design that genuinely looks beautiful at 375px
- Generous whitespace — this is an editorial publication, not a tech SaaS
- Real attention to typography — kerning, line height, weight contrast
- The serif headlines should feel like a respected publication's masthead, not a generic landing page
- The forest green should be used confidently and consistently — it's the brand
- No emojis on the landing page (the newsletter uses them, but the landing page is more formal)
- No stock photos. The product preview uses real newsletter screenshots (placeholders for now)
- No clichéd landing page tropes (countdown timers, fake urgency, "limited time" anything)

## A note on tone

This isn't a typical SaaS landing page. It's a publication's home. The reference points are:

- The Mill (themill.co.uk) — UK editorial newsletter
- Stratechery (stratechery.com) — confident, minimal
- The Browser (thebrowser.com) — editorial-flavoured

NOT:
- Generic SaaS landing pages
- Marketing automation aesthetics
- Anything with too many gradients, animated backgrounds, or floating elements

The page should feel calm, confident, and editorially serious. Generous whitespace. Strong typography. The newsletter is the hero — the page is a frame for it.

## Begin

Walk me through your build plan first before writing code. Confirm:
1. The Next.js setup approach
2. How you'll handle the Tailwind config and colour system
3. How you'll structure the components
4. Any decisions on the iPhone mockup frame in ProductPreview (CSS-only or library?)
5. Anything in this brief that's unclear

Then start building, section by section, showing me each component as you go so I can iterate.
