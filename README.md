# MyPortfolio-Main

Riley Strasser's Dev Portfolio — Vite + Bootstrap site for GitHub Pages.

**Live site:** https://rstra9564.github.io/MyPortfolio-Main/

## Local development

```bash
npm install
cp .env.example .env
# Edit .env with your EmailJS keys
npm run dev
```

## Deploy to GitHub Pages

1. **Settings → Pages → Build and deployment** (required for styling to work)
   - **Source:** Deploy from a branch
   - **Branch:** **`gh-pages`** → **`/ (root)`**
   - Do **not** use `main` — that serves raw source files without CSS/JS.
   - Save, then wait 1–2 minutes and hard-refresh the site (Ctrl+F5).
2. Add repository secrets (**Settings → Secrets and variables → Actions**):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Push to `main` — the workflow builds with the correct base path for this repo.

## Project structure

```
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── index.js
│   ├── styles.scss
│   └── static/
│       └── images/
└── .github/workflows/deploy.yml
```
