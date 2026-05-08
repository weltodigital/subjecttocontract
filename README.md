# Subject To Contract - landing page

Single-page Next.js 14 landing page for the Subject To Contract newsletter (Welto Media).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with custom `forest` / `cream` / `ink` palette
- Lora + Inter via `next/font`
- Heroicons for tile icons
- Beehiiv embed for the signup form (placeholder until embed code is added)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project layout

```
app/
  layout.tsx         # fonts, SEO/OG metadata
  page.tsx           # composes the page in section order
  globals.css        # Tailwind layers + base styles
  components/
    Hero.tsx
    SocialProof.tsx
    ProductPreview.tsx
    WhatsInIt.tsx
    WhoReadsThis.tsx
    HowItWorks.tsx
    FinalCTA.tsx
    Footer.tsx
    SignupForm.tsx   # reusable, used by Hero + FinalCTA
public/
  logos/             # placeholder STC + Welto SVGs (swap with finals)
  screenshots/       # drop newsletter screenshots in here
```

## Things to swap in

| What | Where |
|---|---|
| Real STC + Welto Media logos | `public/logos/*.svg` (keep filenames) |
| Newsletter screenshots | `public/screenshots/` then update `ProductPreview.tsx` to `<Image />` |
| Beehiiv embed code | `app/components/SignupForm.tsx` (replace marked block) |
| Real subscriber companies | `companies` array in `app/components/SocialProof.tsx` |
| Real OG image | `public/og-image.png` (referenced from `app/layout.tsx`) |
| Analytics | `app/layout.tsx` (add Plausible/Vercel Analytics) |

## Deploy

Push to GitHub, import in Vercel. No environment variables required.
