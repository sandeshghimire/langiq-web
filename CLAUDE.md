# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Next.js Version Warning

This is **not** the Next.js you know. `next@16.2.9` is installed and has breaking changes from prior versions — APIs, conventions, and file structure may differ from training data. Before writing or reviewing any Next.js code, **read the relevant guide in `node_modules/next/dist/docs/`** (e.g. `01-app/01-getting-started/`). Heed deprecation notices in those docs.

`react@19.2.4` and `framer-motion@12` are likewise current-major; check their docs when in doubt.

## Commands

All commands run from the repo root. The package manager is `npm` (a `package-lock.json` is committed).

| Action | Command |
| --- | --- |
| Dev server (with raised watch limit) | `npm run dev` |
| Production build (static export) | `npm run build` |
| Serve the built static output | `npm start` |
| Lint (ESLint 9 flat config) | `npm run lint` |

There is **no test script** — the project is a static marketing site. The build itself is the primary correctness check (TypeScript via `tsc` runs as part of `next build`).

`next.config.ts` is set to `output: 'export'`, so the production build writes fully static HTML/CSS/JS to `out/` (already gitignored). No server runtime, no API routes, no server actions.

## Architecture

A static Next.js 16 (App Router) marketing site for **SoCcentric**, an embedded-systems company that ships a complete production software stack across six hardware platforms. The "device is booting" metaphor is load-bearing: every page is a 9-slide scroll-snap sequence framed as a boot log, and the centerpiece on every slide is a single hand-drawn SVG silicon die (`<LivingChip>`) that morphs its internals per slide.

### High-level layout

```
src/
├── app/                       # Next.js App Router routes
│   ├── layout.tsx             # Root layout: fonts, body, <ClientShell>
│   ├── page.tsx               # / — Home (9 hero/platform/team/closing slides)
│   ├── arches/page.tsx        # /<platform> — one thin file per platform
│   ├── acadia/page.tsx
│   ├── zion/page.tsx
│   ├── pinnacle/page.tsx
│   ├── joshua/page.tsx
│   ├── sequoia/page.tsx
│   ├── contact/page.tsx       # Client-side contact form (stub — no backend)
│   └── globals.css            # Tailwind v4 @theme tokens + a few raw keyframes
├── components/
│   ├── ClientShell.tsx        # Wraps app in <LayoutProvider> + boot + chrome
│   ├── LayoutContext.tsx      # Shared client state (activeStage, scrollProgress, platformId, …)
│   ├── Nav.tsx                # Fixed top nav with per-platform accent underline
│   ├── ProgressBar.tsx        # 2px top bar = scroll progress
│   ├── BootTerminal.tsx       # One-shot typed U-Boot boot log on first visit
│   ├── BootRail.tsx           # Right-rail scroll-snap nav with ticking timestamps
│   ├── StatusLine.tsx         # Bottom mono status: "writing <platform>.img … N%"
│   ├── LivingChip.tsx         # The signature SVG silicon die (morphs per stage)
│   ├── SplitFlapCounter.tsx   # The 03 / 09 stage counter
│   └── PlatformPage.tsx       # Shared scroll-snap slide renderer for all 6 platform pages
└── data/
    └── platforms.ts           # Single source of truth for all 6 platforms + 9 slides each
```

### State flow

`<LayoutProvider>` (in `LayoutContext.tsx`) is the only state container. It exposes `{ activeStage, scrollProgress, platformId, isContactSubmitted, … }` and auto-derives `platformId` from `usePathname()`. Every chrome component (`ProgressBar`, `BootRail`, `StatusLine`, `Nav`) and both page templates (`page.tsx`, `PlatformPage.tsx`) consume this context — there is no other global state.

### Adding a 7th platform

Everything is data-driven. To add a platform you only need to:

1. Append a `PlatformData` entry to `src/data/platforms.ts` (mirror the schema, fill 9 slides, set `accent` and `bootChain`).
2. Add a thin `src/app/<platform>/page.tsx` that calls `getPlatformById("<platform>")` and renders `<PlatformPage platform={...} />`.
3. Add the item to the `navItems` array at the top of `Nav.tsx`.

The chip animation (`LivingChip.tsx`) currently has hard-coded branches per `isArches | isAcadia | isZion | isPinnacle | isJoshua | isSequoia` — a new platform will get the "no platform" fallback (Home chip) until a branch is added.

### The LivingChip pattern

`LivingChip` is a single ~700-line SVG client component keyed on `(platformId, stage)`. The `stage` prop (1–9) selects which "scene" to render — BSP enumeration, bootloader path trace, OTA A/B split, magnifier sweep, etc. The `platformId` selects per-platform internals (STM32 satellite for Arches, Pico W for Acadia, FPGA fabric for Zion, PRU cores for Joshua, PCIe fan-out for Sequoia, longevity seal for Pinnacle). On the Home page it morphs between all six identities as the user scrolls.

Animation is Framer Motion only — `transform`, `opacity`, `stroke-dashoffset`, and `pathLength` are the allowed properties. No animated `width`/`height`/`top`/`left` (per project rules in `web/performance.md`).

### Boot sequence

`ClientShell` plays `BootTerminal` once per session (gated by `sessionStorage["soccentric_booted"]`). The terminal types ~6 lines of U-Boot output, holds, then a clip-path wipe reveals the rest of the page.

### Design tokens (Tailwind v4)

Defined as CSS custom properties in `src/app/globals.css` under `@theme`:

- Colors: `--color-bg-base` (`#fafaf8`), `--color-ink` (`#16181a`), `--color-muted-text` (`#6b7075`), `--color-hairline` (`#e4e2dd`), plus `--color-accent-<platform>` for each of the six.
- Fonts: `--font-display` (Space Grotesk), `--font-sans` (Inter), `--font-mono` (JetBrains Mono) — all loaded via `next/font` in `app/layout.tsx`.

There is no dark mode by design (per the project requirements). Hardcoded light surfaces (`bg-[#fafaf8]`, etc.) appear throughout; do not introduce a dark variant.

### Copy & content rules

All final copy lives in `req.md` and is authoritative — do not invent new copy. Banned vocabulary includes "revolutionary", "seamless", "leverage", "synergy", "solutions", "robust", "empower", "innovative". Banned CTAs: "Learn more", "Submit", "Request a quote", "Contact us". Use "Talk to engineering" as the primary CTA.

### Allowed dev origins

`next.config.ts` whitelists `108.247.124.144` and `192.168.86.49` in `allowedDevOrigins` so the dev server can be hit from those LAN addresses. Add new origins there, not in a `.env` file.

## Do

- **Read `node_modules/next/dist/docs/` before writing Next.js code** (16.x has breaking changes from older majors).
- **Preserve the data-driven pattern**: new content goes in `data/platforms.ts`, not in JSX strings.
- **Keep the LivingChip on compositor-friendly properties only** (`transform`, `opacity`, `stroke-dashoffset`, `pathLength`).
- **Keep the light-only theme** — do not add dark mode or theme toggles.
- **Reuse the shared `PlatformPage` component** for any new platform route; do not fork it.

## Don't

- **Don't hardcode copy in components** — slide text must come from `data/platforms.ts`.
- **Don't introduce a backend, server action, or API route** — the build is `output: 'export'`, and the contact form is intentionally a client-side stub.
- **Don't use banned vocabulary** (see Copy & content rules).
- **Don't add `width`/`height`/`top`/`left` animations** to the chip or other components — animate `transform`/`opacity` only.
- **Don't commit secrets, `out/`, `.next/`, or `*.tsbuildinfo`** — already covered by `.gitignore`.
