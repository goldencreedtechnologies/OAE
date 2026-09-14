# OAE cinematic prototype

A first working design prototype for Onuora Abua Enterprise. It is intentionally a single-page, media-led experience with no CMS, backend, or forms.

## Run locally

```bash
npm install
npm run dev
```

## Content map

- Replace reel files and poster paths in `data/videos.ts`. Put media in `public/media/`.
- Replace project names, descriptions, external URLs, team details, and email addresses in `data/site.ts`.
- Update page wording in `app/page.tsx` and art direction in `app/globals.css`.

Blank video `src` values intentionally activate the generated local poster fallback. Add local `/media/...` paths when the final reels arrive.

## Deploy to Vercel

Import the repository in Vercel, keep the detected framework settings, and deploy. No environment variables are required for this prototype.
