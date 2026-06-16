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

## App & pet assets

App screens and pet characters are in `public/assets/`:

| Asset | Section |
|-------|---------|
| `TaskPage/` | Hero, App Showcase |
| `PetPage/` | How It Works |
| `ProfilePage/` | Why You'll Love |
| `pets/*.png` | Meet Your Buddies, hero accents |

Update paths in [`src/lib/constants.ts`](src/lib/constants.ts) (`ASSETS`, `appScreens`, `petBuddies`).

## App logo

The DoneBuddy app logo lives at [`public/applogo.png`](public/applogo.png). It is used in the header, footer, bottom CTA, and browser favicon. Replace that file to update the logo sitewide.

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

## Analytics, search, and AI indexing

### Google Analytics

1. Create a GA4 property at [Google Analytics](https://analytics.google.com/).
2. Add a **Web** data stream for `https://donebuddy.app`.
3. Copy the **Measurement ID** (`G-XXXXXXXXXX`).

For local dev, copy [`.env.example`](.env.example) to `.env` and set:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

For production (GitHub Pages), optionally add the same value as a repo secret:

- **Settings → Secrets and variables → Actions → New repository secret**
- Name: `VITE_GA_MEASUREMENT_ID`

The deploy workflow passes it into the build. A default measurement ID is also baked into the site if the secret is not set.

### Google Search indexing

After deploy, set up [Google Search Console](https://search.google.com/search-console):

1. Add property: `https://donebuddy.app`
2. Verify ownership (DNS via Cloudflare is fine — no HTML tag needed).
3. Submit the sitemap: `https://donebuddy.app/sitemap.xml`

Static SEO files in `public/`:

| File | Purpose |
|------|---------|
| `robots.txt` | Allows search engines and AI crawlers |
| `sitemap.xml` | Lists all public pages for Google |
| `llms.txt` | Short summary for AI assistants |
| `llms-full.txt` | Detailed summary for AI citation |

Per-page titles, descriptions, Open Graph tags, and JSON-LD are managed in [`src/lib/site.ts`](src/lib/site.ts) and [`src/components/Seo.tsx`](src/components/Seo.tsx).

### AI crawlers (ChatGPT, Gemini, Claude, etc.)

`robots.txt` explicitly allows common AI bots (GPTBot, Google-Extended, ClaudeBot, PerplexityBot, DeepSeekBot, and others). `llms.txt` gives models a concise, citable summary of DoneBuddy.

**Note:** Allowing crawlers in `robots.txt` does not guarantee inclusion in AI answers — it only permits access. Actual citations depend on each platform’s indexing policy.
