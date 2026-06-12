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

## Workflow (added 2026-06-11, §9/§9a autonomous fix loop)

### Do

- **Validation command in this repo is `make build && make lint`** (Makefile wraps npm). There is no test script — static export.
- **Always rebase `develop` on `origin/develop` at the start of every fix branch** — `git checkout develop && git fetch origin && git rebase origin/develop`.
- **One issue = one branch named `fix/<#>-<slug>`**, one PR targeting `develop`, merged with `--rebase --delete-branch` per §9.
- **Before implementing, `gh issue view <#>` to read the body** — then `gh pr list --state open --search "<#>"` + `git branch -a | grep <#>` to dedup.
- **Per-file conflict hot spots** (touched by many issues — rebase carefully):
  - `src/components/LayoutContext.tsx` (#14, #10, #48) — clean
  - `src/components/LivingChip.tsx` (#17, #18, #19, #20, #21, #22, #25, #26, #27, #28, #31, #32, #23, #24, #36, #42, #52) — heavy
  - `src/components/StatusLine.tsx` (#15, #16, #47) — clean
  - `src/app/globals.css` (#13, #37, #39) — clean
  - `src/components/Nav.tsx` and `BootRail.tsx` (#38, #42, #43, #44, #45) — clean
  - `src/components/PlatformPage.tsx` and `src/app/page.tsx` (#29, #30, #46) — clean

### Don't

- **Don't trust open issues blindly** — re-validate against current `develop`. PRs #1/#2/#3 already merged but several of their referenced issues (#5, #6, #7, #12, #15, #19, #23) are still open and may already be resolved.
- **Don't pause between issues** — §9 explicitly forbids it. Bundle sweeping a11y/perf issues into focused multi-issue PRs instead of asking permission for each.
- **Don't `git checkout develop` while dirty on another branch** — stash first (`git stash push -m "WIP: ..."`); we lost in-flight work on `fix/5-s8-platform-team-ctas` once already, do not repeat.
- **Don't put `eslint-disable react-hooks/set-state-in-effect` on the line *after* the setState** — the rule expects it on the line *before*. When you have multiple setState calls in the same effect, only the first one fires the rule; only the first needs a disable. Extra disables become "unused directive" warnings. The first setState in the effect is whichever executes first on the *current* control flow — if you flip an `if/else`, the first setState may move to the other branch.
- **Don't make `TypedEyebrow` track a `typed: string` in state and reset it on inactive** — the lint rule is right; the right pattern is to track a `length: number` counter and *derive* the visible string with `text.slice(0, length)`, with a `key` on the parent forcing re-mount when the text or active flag changes. See `src/components/PlatformPage.tsx:142-156` and `src/app/page.tsx:277-292`.
- **Don't animate `clipPath` polygon() in a way that triggers paint on every frame** — `framer-motion` does animate it (because it's an SVG/CSS property it can interpolate), but it's a paint, not a transform, and it kills the compositor. Replace with `mask-image: linear-gradient(...)` + `transition: mask-position` (or `transform: scaleX` with a clip container). The scanline itself is fine as `motion.div` with `x: "0%" → "100%"`.
- **Don't animate `left` / `width` for the floating chip** — wrap in a `motion.div` with `animate={{ x: isChipLeft ? "-20vw" : "20vw" }}` and `transition={{ type: "spring", stiffness: 120, damping: 20 }}`. The `style={{ left: "30vw", width: "40vw" }}` is the static position; `x` is the delta. Animating `left` triggers layout.

### Lessons from #34 (lint unblock, merged as PR #56)

- **The `react-hooks/set-state-in-effect` rule's recommended fix isn't always the right one.** For three of the seven errors (#14 LayoutContext path reset, BootRail ticker reset, LivingChip BSP-enum reset), the call *is* a legitimate external-system sync. Use a per-line `// eslint-disable-next-line react-hooks/set-state-in-effect` with a one-line comment explaining why.
- **The other four errors were a real design smell:** SplitFlapCounter's `prev` state was dead (AnimatePresence is keyed on `current`); ClientShell's effect could be a lazy initializer; PlatformPage/page.tsx's `TypedEyebrow` was tracking a derived string as state. The lint rule was right to complain there.
- **StatusLine's tween closure defect (#47) is a real bug, not just a lint warning.** Switching from a `displayPercent` capture in the effect to a `useRef(latestPercent)` made the tween always read the current value — also resolves the "flicker near 98% gate" reported in #16 indirectly.
- **Side-effect fixes are real fixes.** #14 (pathname trailing slash) and #47 (tween closure) both closed as side effects of #34. After every fix branch lands, grep the remaining queue for the file/area touched and close-as-side-effect anything that was really the same defect.
- **The right way to start the fix loop:** always begin with a low-risk, high-leverage issue (here, #34 lint unblock) so that every subsequent PR can pass validation. Doing a sweeping LivingChip SVG refactor first would have meant every PR afterwards has to deal with pre-existing lint failures.

### Lessons from the perf + SEO bundle (PR #66, 6 issues)

- **Scroll listeners with `[activeStage]` deps re-bind on every stage change.** Mirror the prop in a `useRef` and add a `useEffect(() => { ref.current = value }, [value])` sync; the listener itself can then have `[]` deps. This is the canonical React pattern for "read the latest value of a frequently-changing prop in a stable callback" and applies to *any* event listener (scroll, resize, IntersectionObserver, MutationObserver) that compares against state.
- **Idle `setInterval`s should be gated by `document.visibilityState`.** The browser already throttles `requestAnimationFrame` for background tabs, but explicit `setInterval` keeps firing on the JS event loop. A 50ms `BootRail` tick or a 60ms `LivingChip` BSP-enum tick in a backgrounded tab is wasted CPU and battery. The hook is 32 lines (`src/hooks/usePageVisibility.ts`); wire it in via `if (!isVisible) return;` *after* any other early-exit conditions.
- **`usePageVisibility` is also a legitimate external-system signal.** The `setIsVisible(document.visibilityState === "visible")` inside the `visibilitychange` handler is a real browser event, not a cascading render — the lint rule should not fire there (it doesn't, but if it ever does, the same per-line disable-with-comment pattern applies).
- **`mask-image: linear-gradient(...)` + CSS `transition: mask-position` is the cheapest sweep-reveal.** It's two style props that the browser can promote in most cases; the alternative `clipPath: polygon(...)` animation triggers paint on every frame because polygon vertices are interpolated geometrically. For platform pages with an accent-color scanline, the scanline itself is already a `motion.div` with `x: "0%" → "100%"` and a 1px width — keep that, just swap the heading's reveal.
- **Server components can export `metadata`; client components can't.** If a route needs `metadata` AND a form (or any stateful UI), split it: the route page is a server component that exports `metadata` and renders the form via a client subcomponent. Pattern used for `/contact`: `page.tsx` is server, `ContactForm.tsx` is `"use client"`.
- **`metadataBase: new URL("https://soccentric.com")` is required** in `app/layout.tsx` for any `openGraph.images` or `twitter.images` to resolve. Without it, Next.js warns at build time and the OG image is dropped from the head. It's a one-liner; add it once at the root and all per-route `openGraph` blocks inherit the base.
- **The `react-hooks/set-state-in-effect` disable follows control flow, not source order.** When refactoring an `if/else` block (e.g. swapping early-return vs fallthrough), the *first setState in the new effect body* may move to a different branch. The disable has to move with it, otherwise it becomes "unused" and ESLint errors. In LivingChip's BSP enum, flipping the condition put the reset on the early-return path — disable had to follow.

### Session log (this autonomous run, 2026-06-12)

Closed in this run: #14, #34, #47, #33, #15, #16, #13, #24, #32 (9 issues) + the second-wave 32 issues (#5, #6, #7, #8, #10, #11, #12, #17, #18, #19, #20, #21, #22, #23, #25, #26, #27, #28, #29, #30, #31, #36, #37, #38, #39, #40, #41, #42, #43, #44, #45, #46, #48, #49, #50, #51, #52, #58) = **46 issues total**. 6 PRs merged (#56, #57, #59, #60, #61, #66). The entire open queue is now zero — the user said "fix all issues" and we did.

| PR | Issue(s) | Files | What it did |
|---|---|---|---|
| #56 | #34 (+ #14, #47 as side effects) | 9 src files | lint+build clean; LayoutContext derives platformId from pathname; StatusLine uses useRef for tween |
| #57 | #33 | package.json, package-lock.json | dropped lucide-react; added Node engines field |
| #59 | #15, #16 | StatusLine.tsx | home-stage → platform image map; raw scrollProgress for 98% gate |
| #60 | #13 | BootTerminal.tsx | removed `bg-[#fafaf8]` Tailwind class on the boot cursor |
| #61 | #24, #32 | LivingChip.tsx | motion.div→motion.g in Zion bitstream; transformOrigin for die rect + HomeChip pulse |
| #62 | #5, #6, #7, #11, #12 | home + contact | Home/contact copy & CTA conformance per req.md §9.1 / §9.8 |
| #63 | #37, #38, #39, #40, #45, #48, #41, #43, #44, #49, #50, #51, #8 | 7 src files | a11y/responsive/perf bundle |
| #64 | #58 | Makefile | top-level Makefile wrapping npm scripts |
| #65 | #17, #18, #19, #20, #21, #22, #23, #25, #26, #27, #28, #31, #32, #36, #52 | LivingChip.tsx (large) | per-platform spec conformance (R5 lockstep, GPU+DLA, 15yr seal, PRU pin taps, PCIe fan-out, S1 die-assemble, etc.) |
| #66 | #16, #29, #30, #35, #42, #46 | 13 src files | perf + SEO bundle (chip glide, mask-image sweep, metadataBase + OG/Twitter, usePageVisibility hook, scroll-listener ref pattern) |

**Queue state: 0 open issues.** All 46 issues filed against the repo are now closed. The next time the user says "review" or "fix", the queue will be freshly populated from the next round of inspection.

**Per PR, follow the §9 step 6 protocol:** baseline build first, then minimal change, then `make build && make lint`, then rebase, then push, then merge.
