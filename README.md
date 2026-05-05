# IV&V Marketing Site

Production-grade marketing site for the SoCcentric Independent Validation & Verification (IV&V) suite.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

## Project map

| What | Where |
|---|---|
| All section copy | `lib/content.ts` — edit copy here; no need to touch JSX |
| Color variables | `app/globals.css` — all CSS custom properties at the top |
| Brand fonts | `app/layout.tsx` — loaded via `next/font/google` |
| Nav | `components/nav.tsx` |
| Hero + topology diagram | `components/hero.tsx`, `components/hero-diagram.tsx` |
| Architecture + diagram | `components/architecture.tsx`, `components/architecture-diagram.tsx` |
| Test mode animations | `components/test-mode-anims/` |
| Platform cards (light section) | `components/platforms.tsx`, `components/platform-card.tsx` |
| Capabilities grid | `components/capabilities.tsx` |
| Use cases | `components/use-cases.tsx` |
| Evidence columns | `components/evidence.tsx` |
| FAQ accordion | `components/faq.tsx` |
| CTA section | `components/cta.tsx` |
| Footer | `components/footer.tsx` |
| Lead API route | `app/api/lead/route.ts` — logs body, returns `{ ok: true }` |
| Shared UI (Reveal, SectionLabel) | `components/ui/` |

## OG image

TODO: add a real OG image at `public/og.png` and update the `metadata` in `app/layout.tsx`.

## Fonts

Three fonts loaded via `next/font/google` with `display: 'swap'`:

- **Instrument Serif** — display/headlines (`var(--font-instrument-serif)`)
- **Geist** — body/UI (`var(--font-geist)`)
- **JetBrains Mono** — monospace labels, telemetry (`var(--font-jetbrains)`)

## Colors

All colors are CSS custom properties defined in `app/globals.css`. Key brand colors:

- `--accent` (#00D9C0) — cyan-teal, primary brand color
- `--warm` (#FFB547) — amber, used only for live/active indicators
- `--bg-deep` / `--bg-mid` — dark section backgrounds
- `--bg-light` — the one light section (Platforms)

## Deployment

Deploy to Vercel with zero configuration. Push to main, connect the repo in Vercel dashboard.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
