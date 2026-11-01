# Alliance Worklink — Website

A React (Vite) website for a staffing/recruitment company placing helpers,
machine operators, technicians, warehouse staff and office staff across
industries.

## 1. Update your contact details (do this first)

Everything — phone number, WhatsApp number, email, address, office hours,
social links — lives in one file:

```
src/data/siteConfig.js
```

Open it and replace the placeholder values with your real ones. The WhatsApp
number must be digits only, with country code, no `+` and no spaces
(e.g. `919876543210`). Every button on the site (header, hero, job cards,
"For Employers" section, contact page, floating button) reads from this file.

Job categories, process steps, employer pitch points, "why us" points, and
the industries list are in `src/data/content.js` — edit the text there to
match your actual openings and coverage.

## 2. Run it locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## 3. Build for production

```bash
npm run build
```

This creates a `dist/` folder with the finished static site.

## 4. Deploy

The `dist/` folder is a plain static site — it can be hosted anywhere.

**Vercel** (recommended, free tier, auto-deploys from GitHub)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
4. Deploy.

**Netlify**
1. Push to GitHub, or drag-and-drop the `dist/` folder at app.netlify.com/drop.
2. If connecting a repo: Build command `npm run build`, publish directory `dist`.

**Any static host (GitHub Pages, Hostinger, cPanel, etc.)**
1. Run `npm run build`.
2. Upload the contents of `dist/` to your host's public/www folder.

## Project structure

```
src/
  data/
    siteConfig.js     ← your contact details (edit this)
    content.js         ← job categories, steps, industries (edit this)
  components/          ← one file per section of the page
  App.jsx              ← assembles all sections
  index.css            ← all styling (design tokens at the top)
```

## Notes

- The contact form opens WhatsApp with the enquiry pre-filled instead of
  emailing anywhere — no backend required. If you'd rather collect leads by
  email or into a spreadsheet, swap the `handleSubmit` function in
  `src/components/Contact.jsx` for a call to a form service (e.g. Formspree)
  or your own API.
- Fonts (Barlow Condensed, Inter, JetBrains Mono) load from Google Fonts via
  `index.html` — no extra setup needed.
- Fully responsive down to small mobile screens, with visible keyboard focus
  states and reduced-motion support built in.
