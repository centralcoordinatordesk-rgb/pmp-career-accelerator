# ZOC Learnings Canada — PMP Certification Landing Page

A high-converting Google Ads landing page for ZOC Learnings Canada's PMP Certification course, built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **shadcn/ui** (UI components)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The app runs at `http://localhost:8080`.

## Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: Via Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Vite — no config changes needed
5. Click **Deploy**

### Build Settings (auto-detected)

| Setting           | Value     |
| ----------------- | --------- |
| Framework Preset  | Vite      |
| Build Command     | `npm run build` |
| Output Directory  | `dist`    |
| Install Command   | `npm install`   |

### SPA Routing

Create a `vercel.json` in the project root (already included):

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

## Project Structure

```
src/
├── assets/              # Logo, images
├── components/          # Landing page sections
│   ├── HeroSection.tsx
│   ├── WhyPMPSection.tsx
│   ├── FeaturesSection.tsx
│   ├── CareerImpactSection.tsx
│   ├── FirstAttemptSection.tsx
│   ├── WhoShouldSection.tsx
│   ├── FinalSection.tsx
│   ├── LeadForm.tsx
│   ├── StickyMobileCTA.tsx
│   └── ui/              # shadcn/ui components
├── pages/
│   └── Index.tsx        # Main landing page
└── index.css            # Design tokens & global styles
```

## License

© ZOC Learnings Canada. All rights reserved.
