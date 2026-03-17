# ZOC Learnings Canada — PMP Certification Landing Page

A high-converting Google Ads landing page for ZOC Learnings Canada's PMP Certification course, built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 8** (build tool)
- **Tailwind CSS** (styling)
- **shadcn/ui** (UI components)
- **react-router-dom** (routing)

---

## Local Development

**Prerequisites:** Node.js 18+ and npm

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The app runs at `http://localhost:8080`.

Other useful scripts:

```bash
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm run test       # Run unit tests (Vitest)
```

---

## Deploy to Vercel

### Option 1: Vercel Dashboard (recommended)

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and click **Add New Project**.
3. Import your repository.
4. Vercel auto-detects Vite. Confirm the settings below and click **Deploy**.

**Build settings (auto-detected — no changes needed):**

| Setting          | Value           |
| ---------------- | --------------- |
| Framework Preset | Vite            |
| Build Command    | `npm run build` |
| Output Directory | `dist`          |
| Install Command  | `npm install`   |
| Node.js Version  | 18.x or 20.x   |

5. Your site goes live at a `*.vercel.app` URL. Add your custom domain in **Project → Settings → Domains**.

---

### Option 2: Vercel CLI

```bash
# Install the Vercel CLI globally
npm i -g vercel

# Authenticate (one-time)
vercel login

# Deploy from the project root
vercel

# Follow the prompts:
#   Set up and deploy? → Y
#   Which scope? → your team / personal account
#   Link to existing project? → N (first time) or Y (subsequent)
#   Project name → e.g. pmp-career-accelerator
#   In which directory is your code? → ./
#   Want to override settings? → N

# Deploy to production
vercel --prod
```

---

### Option 3: Git-based Auto-Deploy (CI/CD)

Once the project is linked in the Vercel dashboard, every push triggers a deployment automatically:

| Git event               | Vercel action                        |
| ----------------------- | ------------------------------------ |
| Push to `main`          | Production deployment                |
| Push to any other branch | Preview deployment (unique URL)     |
| Pull request opened     | Preview deployment linked in the PR |

No extra configuration is required — this is handled by the Vercel GitHub integration.

---

## SPA Routing

This project uses React Router for client-side routing. The included `vercel.json` rewrites all requests to `index.html` so deep links and page refreshes work correctly:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

This file is already committed to the repo — no manual step needed.

---

## Environment Variables

This project currently has no required environment variables. If you add any in the future:

1. Prefix them with `VITE_` so Vite exposes them to the browser (e.g. `VITE_API_URL`).
2. Add them in **Vercel Dashboard → Project → Settings → Environment Variables**.
3. Create a local `.env` file for development (already in `.gitignore`):

```bash
VITE_API_URL=https://api.example.com
```

---

## Project Structure

```
├── public/               # Static assets served as-is
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/           # Logo, images
│   ├── components/       # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── WhyPMPSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── CareerImpactSection.tsx
│   │   ├── FirstAttemptSection.tsx
│   │   ├── WhoShouldSection.tsx
│   │   ├── FinalSection.tsx
│   │   ├── LeadForm.tsx
│   │   ├── StickyMobileCTA.tsx
│   │   └── ui/           # shadcn/ui primitives
│   ├── pages/
│   │   └── Index.tsx     # Main landing page
│   ├── App.tsx
│   ├── App.css
│   └── index.css         # Design tokens & global styles
├── index.html
├── vite.config.ts
├── vercel.json           # SPA rewrite rule
├── tailwind.config.ts
└── package.json
```

---

## License

© ZOC Learnings Canada. All rights reserved.
