# Riley Strasser — Portfolio

Vite + Bootstrap portfolio site for GitHub Pages.

**Repository:** `MyPortfolio-Main`  
**Live site:** https://rstra9564.github.io/MyPortfolio-Main/

## Local development

```bash
npm install
cp .env.example .env
# Edit .env with your EmailJS keys
npm run dev
```

## Deploy to GitHub Pages

1. Create repository **MyPortfolio-Main** on GitHub (or use the one you already created).
2. Push this project to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Add repository secrets (Settings → Secrets and variables → Actions):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Push to `main` — the workflow builds with the correct base path for your repo name.

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
