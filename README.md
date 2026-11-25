# Starplify

**Smart Casting Platform for Actors & Recruiters** — *Because your talent deserves the spotlight.*

From auditions to final casting — Starplify streamlines the casting journey for actors building their portfolios and casting directors/recruiters discovering talent.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## Website Overview & Features

- **Navigation (`#hero`, `#about`, `#explore-talent`, `#how-it-works`, `#success-stories`, `#for-casting-directors`):** Fixed responsive header with the Starplify brand logo, section links, user account icon, and mobile drawer menu.
- **Hero & Platform Metrics (`Hero.tsx`):** Full-bleed audition set video background (`hero_video.mp4` with `hero_audition_bg.png` fallback), dual CTAs (**JOIN AS ACTOR** and **BROWSE AUDITIONS**), and platform highlights (`10,000+` Actors Building Their Portfolio, `500+` New Roles Every Month, `1,000+` Successful Castings).
- **35mm Film Strip Genre Reel (`FilmStrip.tsx`):** Interactive 2×2 genre showcase (**Drama**, **Film**, **Web Series**, **Music**) framed by 35mm film sprocket strips, with a detail preview modal for each category.
- **Talent Discovery (`Discovery.tsx`):** Radiant violet spotlight backdrop with floating actor portraits on desktop and a responsive 2/3-column actor gallery on mobile and tablet.
- **Success Stories (`Testimonials.tsx`):** Staggered 3-column masonry testimonials with an **ACTOR / RECRUITER** toggle switch and studio headshot avatars.
- **Recruiter CTA Banner (`CtaBanner.tsx`):** Behind-the-scenes filmmaking video banner (`cta_video.mp4` with `cta_video_poster.png` fallback) and 35mm film perforation divider.
- **Footer (`Footer.tsx`):** Brand mission, social media links (Facebook, Instagram, X, YouTube), categorized navigation (**Company**, **For Recruiters**, **For Applicants**), and legal links.

### Routes & Visual Theme

- **Routes:** `/` (`src/app/page.tsx`), `/starplify` (`src/app/starplify/page.tsx`), and `/manifest.webmanifest` (`src/app/manifest.ts`)
- **Theme:** Dark canvas (`#080808` / `#000000`) with violet accents (`#8233FF` / `#9353FF`), architectural 3-column grid lines, `Space Grotesk` headings, and monospace body copy.

---

## Tech Stack

- **Framework:** Next.js `^16.4.6` (App Router)
- **UI:** React `19.2.4`, Tailwind CSS v4 (`@tailwindcss/postcss`), `lucide-react`, `react-icons`
- **State & Motion:** `zustand`, `framer-motion`, `react-hot-toast`
- **Backend / Auth SDK:** `@supabase/supabase-js`
- **Language:** TypeScript `^5`

---

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or `/starplify`) in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server |
| `npm run build` | Builds the production bundle |
| `npm run start` | Starts the production Next.js server |
| `npm run lint` | Runs ESLint across the project |

---

## Project Structure

```text
src/
├── app/
│   ├── globals.css          # Global styles & architectural grid rules
│   ├── layout.tsx           # Root layout, Space Grotesk font, metadata & favicons
│   ├── manifest.ts          # Web App Manifest (PWA icons & theme)
│   ├── page.tsx             # Main Starplify landing page (/)
│   └── starplify/
│       ├── layout.tsx
│       └── page.tsx         # Starplify route (/starplify)
└── components/
    └── starplify/
        ├── Navbar.tsx           # Responsive fixed header & mobile drawer
        ├── StarplifyLogo.tsx    # Brand logo component
        ├── Hero.tsx             # Video hero section, CTAs & platform stats
        ├── FilmStrip.tsx        # 35mm film strip genre reel & preview modal
        ├── Discovery.tsx        # Talent discovery showcase & mobile portrait grid
        ├── Testimonials.tsx     # Actor / Recruiter masonry testimonials
        ├── CtaBanner.tsx        # Pre-footer behind-the-scenes video CTA
        ├── FilmPerforations.tsx # 35mm film sprocket strip divider
        └── Footer.tsx           # Footer links, social icons & legal bar
```

---

## Favicons & PWA Assets

Located in `public/` and configured via `src/app/layout.tsx` and `src/app/manifest.ts`:

- `public/favicon.ico` — Multi-size ICO (`16x16`, `32x32`, `48x48`)
- `public/icon.svg` — Vector SVG icon
- `public/icon-192.png` — `192x192` PNG icon
- `public/icon.png` — `512x512` PNG icon
- `public/apple-icon.png` — `180x180` Apple Touch icon
