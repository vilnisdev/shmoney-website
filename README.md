# Shmoney Web Design — Website

Marketing site for a Baltimore-based web design agency. Built with Astro + Tailwind CSS v4.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — auto-generates sitemap.xml
- [@fontsource-variable/inter](https://fontsource.org/fonts/inter) + [@fontsource/fraunces](https://fontsource.org/fonts/fraunces) — self-hosted fonts, no CDN
- [Web3Forms](https://web3forms.com) — form submissions (free tier works fine)

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file and fill in values
cp .env.example .env

# 3. Start dev server
npm run dev
# → http://localhost:4321
```

## Build and preview

```bash
npm run build    # outputs to dist/
npm run preview  # serve the built site locally
```

---

## TODO: Required before launch

Search the source files for `TODO:` to find all locations. Complete every item below before publishing.

### Identity & contact
- [ ] Replace `[Your Name]` in `src/pages/about.astro`
- [ ] Replace `[Phone]` with your real phone number — in `src/pages/contact.astro`, `src/components/Footer.astro`, and the JSON-LD schema in `src/pages/index.astro`
- [ ] Replace `[Email]` with your real email — in `src/pages/contact.astro` and `src/pages/audit.astro` error message
- [ ] Replace `https://calendly.com/TODO` with your real Calendly link — in `src/pages/index.astro`, `src/pages/about.astro`, and `src/pages/contact.astro`

### Domain & config
- [ ] Update `site` in `astro.config.mjs` with your real domain (e.g., `https://shmoneywebdesign.com`)
- [ ] Add `PUBLIC_FORM_ENDPOINT` (Web3Forms access key) to `.env` and to Vercel/Netlify environment variables

### Analytics
- [ ] Once you have a Plausible or Umami account, uncomment and configure the analytics script in `src/layouts/Layout.astro`

### Content
- [ ] Replace the three placeholder paragraphs in `src/pages/about.astro` with your real founder story
- [ ] Add founder headshot to `src/pages/about.astro` (replace the gray placeholder box)

### Photos
- [ ] Replace the Baltimore photo placeholder in the hero section of `src/pages/index.astro` with a real photo
- [ ] When adding `<img>` tags, always include `width`, `height`, and descriptive `alt` text

### Branding
- [ ] Replace `public/favicon.svg` and `public/favicon.ico` with your real logo/icon
- [ ] Create `public/og-default.png` (1200x630px) for Open Graph social sharing previews

### Legal
- [ ] Create a `/privacy` page (use [Termly](https://termly.io) to generate the content)
- [ ] Create a `/terms` page
- [ ] Uncomment the privacy/terms links in `src/components/Footer.astro`

### Pricing
- [ ] Confirm pricing tiers (currently: Starter $1,500 + $99/mo, Standard $2,500 + $179/mo)
- [ ] Remove the "Founding client pricing" badge in `src/pages/index.astro` when that offer closes

### Pre-launch tests
- [ ] Submit the audit form and confirm you receive the notification email
- [ ] Submit the contact form and confirm you receive the notification email
- [ ] Click the Calendly link and confirm it opens correctly
- [ ] Test the site on a real phone (not just browser resize)
- [ ] Run Lighthouse in Chrome DevTools → Mobile → target 95+ on all four scores
- [ ] After `npm run build`: verify `dist/sitemap-index.xml` exists and `dist/robots.txt` references correct domain
- [ ] Set up Google Business Profile for the agency itself

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → select your repo
3. Build settings are auto-detected (Astro / `npm run build` / `dist`)
4. Add environment variable in **Settings → Environment Variables**: `PUBLIC_FORM_ENDPOINT` = your Web3Forms key
5. Deploy

## Deploy to Netlify

1. Push this repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → Add new site → Import from Git
3. Build command: `npm run build` / Publish directory: `dist`
4. Add `PUBLIC_FORM_ENDPOINT` in **Site Settings → Environment variables**
5. Deploy

---

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_FORM_ENDPOINT` | Yes (for forms) | Web3Forms access key — free at https://web3forms.com |
| `PUBLIC_ANALYTICS_DOMAIN` | No | Domain for Plausible/Umami analytics script |

## Setting up Web3Forms

1. Go to [web3forms.com](https://web3forms.com) and create a free account
2. Create a new form — copy the access key
3. Paste into `.env` as `PUBLIC_FORM_ENDPOINT=your_key_here`
4. Add the same variable to your Vercel or Netlify environment settings
5. Submit a test form to confirm the email comes through
