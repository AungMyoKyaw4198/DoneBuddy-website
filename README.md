# DoneBuddy Website

Marketing site for [DoneBuddy](https://donebuddy.app) — a cozy habit tracker with a virtual pet companion.

Built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**, deployed to **GitHub Pages** with the custom domain `donebuddy.app`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push to the `main` branch — the [deploy workflow](.github/workflows/deploy.yml) builds and publishes automatically.
2. In your GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. In **Settings → Pages → Custom domain**, enter `donebuddy.app`.
4. Configure DNS at your registrar:
   - **A records** for the apex domain (`donebuddy.app`) pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **OR** a **CNAME** for `www` pointing to `<your-username>.github.io`
5. Enable **Enforce HTTPS** once DNS has propagated.

The [`public/CNAME`](public/CNAME) file is included in the build output so GitHub Pages keeps the custom domain configured.

## Replace app screenshots

Drop your real screenshots into `public/assets/screenshots/` using these filenames:

| File | Used in |
|------|---------|
| `today-tasks.png` (or update component to `.png`) | Hero phone mockup |
| `streak.png` | How It Works phone mockup |

Current placeholders are SVG files (`today-tasks.svg`, `streak.svg`). To swap in PNGs:

1. Add your PNG files to `public/assets/screenshots/`.
2. Update the `screenshotSrc` paths in:
   - [`src/components/sections/Hero.tsx`](src/components/sections/Hero.tsx)
   - [`src/components/sections/HowItWorks.tsx`](src/components/sections/HowItWorks.tsx)

No other code changes are required.

## App logo

The DoneBuddy app logo lives at [`public/applogo.png`](public/applogo.png). It is used in the header, footer, bottom CTA, and browser favicon. Replace that file to update the logo sitewide.

## Replace mascot illustrations

Generated mascot images live in `public/assets/mascot/`:

- `hero-corgi.png` — hero section
- `corgi-heart.png` — “Why You'll Love DoneBuddy” section

Replace these files directly to update the artwork sitewide.

## Configure store links

Update App Store and Google Play URLs in [`src/lib/constants.ts`](src/lib/constants.ts):

```ts
export const APP_STORE_URL = 'https://apps.apple.com/us/app/donebuddy-habit-tracker-pet/id6764769357'
export const SHOW_GOOGLE_PLAY = false // set true and add GOOGLE_PLAY_URL when Android launches
```

## Project structure

```
src/
  components/
    layout/       Header, Footer
    sections/     Hero, Features, HowItWorks, WhyLove, Testimonials, BottomCTA
    ui/           Shared UI primitives
  pages/          Home, About, Privacy, Terms
  lib/constants.ts
public/
  assets/
    mascot/
    screenshots/
    badges/
  CNAME
```

## Legal pages

Privacy Policy and Terms content is sourced from markdown at the repo root:

- [`PRIVACY_POLICY.md`](PRIVACY_POLICY.md) → `/privacy`
- [`TERMS_OF_SERVICE.md`](TERMS_OF_SERVICE.md) → `/terms`

Edit those files and rebuild — the site renders them automatically via `react-markdown`.

## Routes

- `/` — Landing page
- `/about` — About DoneBuddy
- `/privacy` — Privacy Policy (rendered from [`PRIVACY_POLICY.md`](PRIVACY_POLICY.md))
- `/terms` — Terms & Conditions (rendered from [`TERMS_OF_SERVICE.md`](TERMS_OF_SERVICE.md))
