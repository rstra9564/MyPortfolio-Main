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

1. **Settings → Pages → Build and deployment**
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` → `/ (root)`
   - Save (the `gh-pages` branch is created automatically on the first successful workflow run)
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
