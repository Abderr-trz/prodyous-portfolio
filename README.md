# PRODYOUS portfolio

A production audiovisual portfolio built with the Next.js App Router, strict TypeScript, Server Components by default, and on-demand fullscreen video playback.

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Portfolio categories

All category and film metadata lives in `lib/categories.ts`. Adding a category there creates its homepage card, `/work/[slug]` route, metadata, and sitemap entry. Current collections are Cinematic, Immobilier, and Social Media.

Poster images are committed under `public/videos/<category>/posters`. Optimized MP4 delivery files are stored in the public Vercel Blob store and are deliberately excluded from Git. `lib/media.ts` resolves each `/videos/...` path against `NEXT_PUBLIC_VIDEO_BASE_URL`.

Original production masters remain in the local `cinematic`, `Immobilier`, and `soc media` folders. They are ignored by Git and must never be moved into `public` or committed.

## Environment

Copy `.env.example` to `.env.local` when running outside the linked Vercel project:

```text
NEXT_PUBLIC_SITE_URL=https://prodyous.co
NEXT_PUBLIC_VIDEO_BASE_URL=https://7a83mn90ichgitng.public.blob.vercel-storage.com
```

Vercel automatically provides the private Blob write credentials. Never commit `.env.local` or any token.

## Contact delivery

The current form opens the visitor’s email application and never claims a server submission succeeded. Its transport contract lives in `lib/contact.ts`, ready for a future Resend, Formspree, or server-action adapter.
