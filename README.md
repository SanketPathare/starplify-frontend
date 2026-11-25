# Starplify

**Smart Casting Platform for Actors & Recruiters** — *Because your talent deserves the spotlight.*

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

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
