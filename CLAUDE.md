# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Two-column slide layout (added 2026-06-12, diagram morph system)

Every slide is a strict 50/50 grid that **alternates** per slide:
- **Odd stages** (1, 3, 5, 7, 9): title + summary + bullets on the **left**,
  diagram on the **right**.
- **Even stages** (2, 4, 6, 8): diagram on the **left**, text on the
  **right**. This carries a visual rhythm through the scroll.
- The alternation is implemented with Tailwind `lg:order-1` /
  `lg:order-2` classes on the two grid children — both columns are
  always real grid siblings, never fixed overlays.

The left column is **strict**: title (display heading), brief summary
(stage 1 only), then 4-5 bullets prefixed with `>`. No images, no
data panels, no extra widgets.

The right column is `<SlideDiagram>` — a per-stage SVG diagram that
crossfades to a different shape on each slide.

The right-side scroll checklist (old `BootRail` with timestamps and
dot strip) is **removed** entirely.

### How the crossfade actually works (don't break this)

The diagram crossfade is the **only** animation in the system. The
diagram body is **fully static SVG** — no `motion.*` wrappers, no
`initial`/`animate`/`transition` props inside the per-stage
components. Earlier we had `BlockReveal` with `motion.g` and a pathLength
`motion.line` inside each stage, but those re-fired on every crossfade
and produced a jittery "blocks fly in again" feel instead of a smooth
morph. The current pattern:

- `SlideDiagram.tsx` keeps a persistent `<motion.div layout
  layoutId="slide-diagram-frame">` outer frame. The frame never
  re-mounts across stage changes — its `layout` prop lets
  framer-motion FLIP-interpolate if the parent reflows, but the
  wrapper has a fixed aspect ratio so it never does.
- Inside the frame, `AnimatePresence mode="popLayout" initial={false}`
  holds exactly one `<motion.div key={`diagram-${stage}`}>` at a time,
  with a plain opacity crossfade (`opacity: 0 → 1`, 0.45s, easeInOut).
  No scale, no y-shift, no rotation, no per-block stagger. The
  previous diagram fades out and the new one fades in over the same
  frame — the morph *is* the crossfade.
- The per-stage `StageN` components render plain `<g>`, `<line>`,
  `<rect>`, `<path>`, `<text>` — all static SVG. They appear in
  their final state immediately, then sit there while the crossfade
  runs.
- Under `prefers-reduced-motion`, the crossfade is disabled and the
  new diagram appears instantly.

Implementation lives in `src/components/diagrams/`:
- `shared3d.tsx` — `Iso3DBox`, `DiagramFrame`, `Iso3DFilter`.
- `stages.tsx` — 9 per-stage components (Stage1Overview, Stage2Bsp,
  Stage3Boot, Stage4Kernel, Stage5Middleware, Stage6Ota, Stage7Sdk,
  Stage8Perf, Stage9Mfg). All inner SVG is static.
- `SlideDiagram.tsx` — FLIP container + crossfade `AnimatePresence`.
- `registry.ts` — kind/title maps.

Per-platform variants: each stage reads `ctx.platform` and switches
content (e.g. `arches` boot chain = BCT/MB1/MB2/UEFI/kernel;
`zion` = BootROM/FSBL/bitstream/U-Boot/kernel). See
`PLATFORM_BLOCKS`, `PROTOCOL_SETS`, `bootChain` in `data/platforms.ts`.

The legacy `LivingChip` and `BootRail` components are no longer
imported by any page. Both files are kept for reference / re-use;
do not delete without §11 review.

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
- **Keep the diagram animations on compositor-friendly properties only** (`transform`, `opacity`, `stroke-dashoffset`, `pathLength`).
- **Keep the light-only theme** — do not add dark mode or theme toggles.
- **Reuse the shared `PlatformPage` component** for any new platform route; do not fork it.
- **Reuse `SlideDiagram` for new slide content** — pick a stage number, add a per-stage component, dispatch from `StageDiagram`. Do not embed raw SVG in page templates.
- **Use `useId()` to namespace SVG filter IDs** in `SlideDiagram` — `Iso3DFilter` would otherwise collide when multiple diagrams mount on the same page (e.g. during the FLIP morph).
- **Wire the diagram column as a single fixed-position layer, not inside the per-slide grid** — putting it inside the grid means it re-mounts on every slide change and breaks the FLIP morph. The current pattern is one fixed `<div className="fixed right-0 w-1/2">` outside the scroll container.

## Don't

- **Don't hardcode copy in components** — slide text must come from `data/platforms.ts`.
- **Don't introduce a backend, server action, or API route** — the build is `output: 'export'`, and the contact form is intentionally a client-side stub.
- **Don't use banned vocabulary** (see Copy & content rules).
- **Don't add `width`/`height`/`top`/`left` animations** to the chip or other components — animate `transform`/`opacity` only.
- **Don't commit secrets, `out/`, `.next/`, or `*.tsbuildinfo`** — already covered by `.gitignore`.
- **Don't re-introduce the floating center chip** — the right-column `SlideDiagram` is the centerpiece. `LivingChip.tsx` is reference only.
- **Don't put a `SlideVisual` data panel in the text column** — the right column already has the diagram; the text column is title + summary + bullets only.
- **Don't re-introduce `BootRail` (the right-side scroll checklist with timestamps and dots)** — it was removed by request.
- **Don't skip `popLayout` on `AnimatePresence` in `SlideDiagram`** — without it, the new and old diagrams overlap during the FLIP morph and the frame jitters.
- **Don't put `motion.*` wrappers inside the per-stage `StageN` components** — every `motion.g` / `motion.line` / `motion.path` with `initial`/`animate`/`transition` props re-fires on every crossfade and produces a "blocks flying in" jitter. The diagram body must be plain static SVG; the only animation should be the `AnimatePresence` crossfade in `SlideDiagram.tsx`.
- **Don't add unused props to `Iso3DBox`** — `cornerRadius` was added and immediately removed by lint; keep the primitive minimal.

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
- **Don't use `initial={reducedMotion ? false : { ... }}`** in framer-motion — `false` is interpreted as "no initial state, animate from current value," but the current value is the element's pre-animation state (often hidden/zeroed) and the `animate` target is the final state. Framer-motion logs "animate opacity from undefined to 1" and may bail entirely, leaving the element invisible. Use the matching animate-target values in the reducedMotion branch: `initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}`.
- **Don't put a setState inside a `useEffect` whose cleanup cancels a timer the same effect body just scheduled** without a `useRef` guard. The first setState re-triggers the effect, the cleanup `clearTimeout` cancels the timer, the body re-schedules it — infinite loop, the timer never fires, and the user sees a stuck overlay. Pattern: a `const guardRef = useRef(false)` early-return on `if (guardRef.current) return; guardRef.current = true;` makes the work idempotent.
- **Don't put literal backticks in a `git commit -m "..."` message** — bash interpolates the backticks as command substitution, strips the contents, and the commit message ends up garbled. Either use `git commit -F file.txt` with a real file, or write the message without backticks (use single quotes for code, or just say "the pattern" without quoting). `git commit --amend -m "new message"` rebuilds the same commit with a corrected message if you catch it.

### Lessons from #34 (lint unblock, merged as PR #56)

- **The `react-hooks/set-state-in-effect` rule's recommended fix isn't always the right one.** For three of the seven errors (#14 LayoutContext path reset, BootRail ticker reset, LivingChip BSP-enum reset), the call *is* a legitimate external-system sync. Use a per-line `// eslint-disable-next-line react-hooks/set-state-in-effect` with a one-line comment explaining why.
- **The other four errors were a real design smell:** SplitFlapCounter's `prev` state was dead (AnimatePresence is keyed on `current`); PlatformPage/page.tsx's `TypedEyebrow` was tracking a derived string as state. The lint rule was right to complain there. (ClientShell's lazy-initializer reading `sessionStorage` was the *wrong* call — see "Lessons from the hydration-fix run" below; the `typeof window` guard is a server/client branch and trips hydration even when wrapped in a lazy init.)
- **StatusLine's tween closure defect (#47) is a real bug, not just a lint warning.** Switching from a `displayPercent` capture in the effect to a `useRef(latestPercent)` made the tween always read the current value — also resolves the "flicker near 98% gate" reported in #16 indirectly.
- **Side-effect fixes are real fixes.** #14 (pathname trailing slash) and #47 (tween closure) both closed as side effects of #34. After every fix branch lands, grep the remaining queue for the file/area touched and close-as-side-effect anything that was really the same defect.
- **The right way to start the fix loop:** always begin with a low-risk, high-leverage issue (here, #34 lint unblock) so that every subsequent PR can pass validation. Doing a sweeping LivingChip SVG refactor first would have meant every PR afterwards has to deal with pre-existing lint failures.

### Lessons from #67 (boot blank-page regression, merged as PR #68)

- **`prefers-reduced-motion` reveals effects that re-trigger themselves.** BootTerminal's typewriter effect deps include `currentLineIndex` and `currentCharIndex`; the reducedMotion branch setStates both, which re-runs the effect, whose cleanup `clearTimeout(hold)` cancels the 200ms wipe timer that the effect body *just* scheduled. Loop forever → wipe never fires → `onComplete()` never called → `bootFinished=false` → full-screen dark overlay (z-[100]) covers the page indefinitely. **Fix:** a `useRef(false)` guard that flips to `true` on first invocation and short-circuits on every re-run. The setState calls then become idempotent on the first render, so the `react-hooks/set-state-in-effect` disable that was masking the cascading-render warning is no longer needed.
- **`initial={reducedMotion ? false : { ... }}` is a footgun, not a feature.** `false` tells framer-motion to skip the initial render and animate *from* the current value to the `animate` target. But the current value at mount is the element's pre-animation state (e.g. `opacity: 0` for hidden elements), and the `animate` target is a different value (e.g. `opacity: 1`). Framer-motion logs "You are trying to animate opacity from undefined to 1" and may bail on the update entirely, leaving the element invisible. **The right pattern is to make the `reducedMotion` branch a full target-state value matching the `animate` target** — e.g. `initial={reducedMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}` so framer-motion can interpolate from a defined initial state in both modes.
- **Audited 12 `initial={...false}` sites in LivingChip.tsx.** Fixed all of them: the S1 CoresCluster pins (line 225), the 4 high-speed interconnect lines (239, 245, 251, 257), the S8 CPU oscilloscope polyline (355), the S8 Arches oscilloscope polyline (450), the S5 protocol badges (855), the S7 code-bracket glyphs (946), the S3 boot-chain path lines (1141) and labels (1157), the S4 driver modules (1188), the S9 panel grid cells (1282) and `✓ PROVISIONED` stamps (1308). The grep regex: `initial={.*false` across all `src/components/*.tsx` and `src/app/**/*.tsx`.
- **`prefers-reduced-motion` is the right default test path for "blank page" reports.** When the user reports a blank page that isn't a 5xx or a build error, the first place to look is the chrome (BootTerminal, ClientShell, layout context) and the framer-motion initial/animate pair on top-of-fold elements. SSR HTML is correct; what isn't reaching the eye is gated by a never-resolving client condition.
- **Commit messages with literal backticks via Bash tool get stripped.** `git commit -m "fix: ... \`code\` ..."` interpolates the backticks and the shell tries to execute the contents. Either (a) avoid backticks in commit messages, (b) escape them with `\\` then strip, or (c) use a heredoc / `printf` / `git commit -F file.txt`. The amend pattern works: `git commit --amend -m "new message"` rebuilds the same commit with a corrected message; no new SHA to chase, no re-push needed if the remote is fast-forwardable.
- **Don't initialize a `useState` from `typeof window` / `sessionStorage` / `localStorage`**, even via a lazy initializer (`useState(() => ...)`). Both lazy and eager initializers run on the server AND on the client during hydration; the server has no `window` so the branch always returns the SSR default, but the client may return a different value, and React will then diff server-rendered HTML against the client tree and throw a hydration mismatch. The first-line `if (typeof window === "undefined") return sessionValue` "guard" looks safe but is not — it returns the *empty* default on the server and the *real* value on the client, which is exactly the mismatch. **The right pattern is to start the state at the SSR default (`false`, `null`, `0`, etc.) and mirror the persisted value into state in a mount-only `useEffect`**, with a per-line `eslint-disable-next-line react-hooks/set-state-in-effect` + one-line justification (this is a legitimate external-system sync, not a cascading render).

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

### Session log (post-bundle, 2026-06-12)

User reported "the page after the landing page is not visible — blank white page" while `prefers-reduced-motion: reduce` was on. Two compounding client-side bugs were the root cause:

1. **BootTerminal infinite loop** — the reducedMotion branch of the typewriter effect's `useEffect` was a classic self-re-triggering effect: setState inside the effect re-runs the effect, cleanup cancels the 200ms wipe timer that the body just scheduled, effect body re-schedules it. Loop forever → wipe never fires → `onComplete()` never called → `bootFinished` stays false in `ClientShell` → full-screen dark overlay (z-[100]) covers the page indefinitely. **Fix:** `useRef(false)` guard that flips on first invocation and short-circuits on every re-run.
2. **`initial={reducedMotion ? false : { ... }}` warnings** — 12 sites in LivingChip.tsx used the `false` initial pattern, which makes framer-motion log "You are trying to animate opacity from undefined to 1" and may bail on the update entirely. **Fix:** replaced all 12 `false` values with matching animate-target values so framer-motion can interpolate from a defined initial state in both modes.

Closed in this run: #67 (1 issue) → 1 PR merged (#68). Diff: +29 / -19 across `src/components/BootTerminal.tsx` and `src/components/LivingChip.tsx`. `make build && make lint` both clean.

| PR | Issue | Files | What it did |
|---|---|---|---|
| #68 | #67 | BootTerminal.tsx, LivingChip.tsx | reduced-motion ref-guard for BootTerminal + initial-state fixes for 12 LivingChip motion.* elements |

**Total across all autonomous runs: 47 issues closed, 7 PRs merged (#56, #57, #59, #60, #61, #62, #63, #64, #65, #66, #68).** The open queue remains at 0.

## Do (content / copy updates)

- **Treat `req.md` as the single source of truth for site copy.** When the user
  says "based on the req update the site", the work is a copy-only update —
  don't touch the layout, the diagram system, the boot terminal, the chrome,
  the visuals, or the routing. Update `src/data/platforms.ts` (per-platform
  `edgeOneLiner`, `industries`, `bootChain`, all 9 `slides[i].eyebrow /
  heading / bullets`), `src/app/page.tsx` (the 9 `homeSlides`), per-route
  `metadata` in each `src/app/<platform>/page.tsx`, `src/app/layout.tsx`
  keywords, and `src/components/Nav.tsx` chip labels. Then `make build &&
  make lint`.
- **Map the new 7–8 pages of req.md onto the existing 9-slide structure
  consistently across all 6 platforms**:
  - S1 = Intro / Overview (headline + subhead + "What it is" distilled)
  - S2 = BSP & Board Bring-Up
  - S3 = Bootloader & Golden Boot (failsafe + secure boot provisioning)
  - S4 = Kernel & Device Drivers
  - S5 = Middleware & Industry Images (one bullet per named image variant:
    `arches-robotics`, `arches-iot`, `arches-automotive`, `arches-medical`,
    `arches-vision` — and equivalents for each platform)
  - S6 = OTA & Fleet Updates
  - S7 = DevKit, SDK, Debug & Profile
  - S8 = RTOS (or RTOS & FPGA for Zion) — not "Performance"
  - S9 = Manufacturing & Provisioning
  The S5 industry-images list is the load-bearing signal that the site is
  no longer generic — each platform has 4–5 named `arches-X` / `zion-X` /
  etc. image variants. Don't drop this section.
- **Use real platform names in customer-facing copy** (NVIDIA Jetson, AMD
  Xilinx Zynq, NXP i.MX, TI Sitara, Intel & AMD x86, Raspberry Pi) per
  req.md. The previous labels ("Raspberry Pi CM5", "Xilinx Zynq") are now
  abbreviated — keep the full official names.
- **Update all four copies of a platform's name when it changes**: `chipFamily`
  in `data/platforms.ts`, the per-route `title` in the platform's
  `page.tsx`, the `chipLabel` in `Nav.tsx`, the matrix cell in
  `visuals/PlatformVisuals.tsx`, and the `keywords` array in
  `app/layout.tsx`. Forgetting any one of these leaves stale strings on
  the live site.
- **Add the cross-platform closing path** (Platform → Polaris V&V → Orion
  HIL → Vela field logging → via SiliconCentric) to the S9 home slide
  subhead when req.md §"Cross-Platform Closing Section" is updated. The
  Growth path is a deliberate signal that SoCcentric is part of a larger
  family, not a stand-alone vendor.

## Don't (content / copy updates)

- **Don't reflow the slide template, the diagram registry, the boot
  terminal, or any visual while doing a copy update.** The 9-stage
  diagram-kind catalog (`registry.ts`) and the 9-stage platform-template
  (`PlatformPage.tsx`) are stable interfaces — leave them alone. If a
  refactor is needed, file it as a separate task.
- **Don't shorten the "Why SoCcentric" growth-path closing to fit the
  S9 slide.** The cross-platform closing section is a required signal
  per req.md — keep all four bullets (methodology, customer-owns, SBOM
  / standards, growth path) and add the explicit CTA
  ("Request an evaluation image" / "30-minute platform architecture
  call") in the bullets.
- **Don't shorten bullet lines to the point that they lose their
  technical specificity.** A bullet like "RTOS" alone is the kind of
  generic statement req.md §1 explicitly bans. The bullet should name
  the RTOS family (FreeRTOS / Zephyr) and the integration mechanism
  (RPMsg / Messaging Unit / OpenAMP / remoteproc). Same rule for boot
  stages (don't write "bootloader" — write "FSBL → ATF → U-Boot → Linux").
- **Don't change the chip family label in `chipFamily` without also
  updating `bootChain`.** They are paired: Jetson uses BCT/MB1, Acadia
  uses EEPROM+start.elf, Zion needs bitstream, Pinnacle uses SPL+HAB,
  Joshua uses SPL/MLO+SYSFW, Sequoia uses UEFI/coreboot+TPM. Renaming
  a platform without verifying its boot chain is in `bootChain` is a
  correctness bug for the boot-chain diagram.

### Session log (content update, 2026-06-12)

User said "based on the req update the site" — req.md was rewritten with
the new 7–8 page structure (Intro, BSP, Kernel, Middleware & Industry
Images, OTA, DevKit/SDK, RTOS, plus FPGA for Zion) plus a new
cross-platform closing section. This was a copy-only run:

- `src/data/platforms.ts` — all 6 platforms rewritten: 9 slides each,
  new `edgeOneLiner` (the Yocto-platform subhead), expanded `industries`
  arrays, `chipFamily` updated to official names
  (NVIDIA Jetson / Raspberry Pi / AMD Xilinx Zynq / NXP i.MX / TI Sitara /
  Intel & AMD x86).
- `src/app/page.tsx` — all 9 `homeSlides` updated: S1 gets 4 bullets
  instead of 0, S2–S7 use the new subhead pattern
  "Production-Ready Embedded Linux for <vendor>", S8 mentions
  "SBOMs / ISO 26262 / IEC 62304 / IEC 61508 / DO-178C", S9 is the new
  cross-platform closing with the SiliconCentric growth path.
- `src/components/Nav.tsx` — `chipLabel` for Acadia and Zion updated to
  match the new official names.
- `src/app/<platform>/page.tsx` × 6 — every per-route `metadata`
  (title / description / openGraph / twitter) rewritten to match the
  new subhead; old marketing one-liners (e.g. "Inference on the GPU.
  Control loops on the MCU.") removed.
- `src/app/layout.tsx` — `keywords` array expanded (Raspberry Pi,
  AMD Xilinx Zynq, AMD Ryzen Embedded, PREEMPT_RT, HAB AHAB secure
  boot, bitstream OTA).
- `src/components/visuals/PlatformVisuals.tsx` — `PlatformMatrix` cell
  labels for Acadia and Zion updated.

`make build && make lint` both clean. No code-level changes — diagram
registry, slide templates, animations, boot terminal, chrome all
untouched.
