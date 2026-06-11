# SoCcentric Website — Final One-Shot Build Prompt

You are a senior frontend engineer, brand designer, and B2B copy strategist in one. Build a complete, production-quality marketing website for **SoCcentric**, an embedded systems company. This document is the full specification: strategy, structure, design, animation, and the final copy for every page. Follow it exactly. Do not simplify, do not skip animations, do not invent placeholder content — everything you need is here.

---

## 1. Marketing strategy (governs every design and copy decision)

**The buyer.** Nobody wakes up wanting a BSP. Buyers arrive trigger-driven and anxious: the platform hire fell through, the contractor shipped garbage, the silicon went EOL, the demo is in 12 weeks and the board won't boot, RPU communication is down, DMA is failing. This is a high-stakes, high-skepticism purchase made by technical people who are allergic to marketing language.

**Three buyers see every page, in this order:**
1. **The engineering lead** (gatekeeper; writes the job descriptions) — convinced only by named artifacts: FSBL, BitBake, device tree, RPMsg, PREEMPT_RT. Generic words ("solutions", "expertise") are anti-proof.
2. **The founder / product manager** — convinced by speed and risk removal: "first boot in weeks", "devices never brick."
3. **The executive / procurement** — convinced by longevity and stability: 15-year silicon, certifications, single accountable partner.

Every platform page must contain at least one line aimed at each of the three.

**The positioning wedge.** The market is chip vendors (sell silicon, not outcomes), body shops (sell hours, not ownership), and design houses (treat software as an afterthought). SoCcentric's category-of-one claim: **"We own the platform layer as a product."** Customer picks a platform; SoCcentric delivers everything between the silicon and their application — booting, updating, manufacturable, documented, handed off.

**Trust through accuracy, not adjectives.** The site itself must feel like it was built by people who write device drivers. Technically correct boot chains, real protocol names, accurate silicon detail — that accuracy IS the marketing. The signature animation (section 6) converts because an engineer can see it is *correct*.

**Keyword strategy — confident, never desperate.** Crisis buyers search exact technical phrases ("Zynq OpenAMP RPU", "i.MX SPL U-Boot", "RAUC A/B rollback", "PRU EtherCAT"). Weave this vocabulary naturally into capability copy so those searches land here — but the tone is always a company in command ("We've shipped this boot chain before. Yours will work."), never an ambulance service. No "stuck?" messaging, no rescue page, no fear-mongering headlines.

**The hiring-replacement message.** Companies spend 6–9 months trying to hire embedded Linux platform engineers (Yocto, BSP, U-Boot, OTA, CI/CD). A dedicated message speaks to that buyer: *"Everything in your embedded Linux job description — delivered as a senior team."* It appears on the Home page (slide 9) and Contact page.

**CTAs.** Primary everywhere: **"Talk to engineering"** — it promises an engineer answers, not sales. Secondary micro-asks: "Send us your schematic — we'll tell you what bring-up looks like." and "Send us your job description — we'll send back how we'd deliver it." Banned CTAs: "Learn more", "Submit", "Request a quote", "Contact us".

**Banned vocabulary (entire site):** revolutionary, seamless, unleash, cutting-edge, world-class, best-in-class, leverage, synergy, solutions (as a noun for services), robust (as filler), empower, innovative.

---

## 2. Company context

SoCcentric designs and delivers **six embedded hardware platforms**, and on every platform delivers the **complete production software stack**: BSP development and board bring-up; multi-stage bootloader customization; golden boot and failsafe recovery; initial provisioning; custom Linux kernels and device drivers (written from scratch where needed); device trees and HALs; real-time tuning and boot-time optimization; Yocto-based embedded Linux distributions; middleware (ROS, DDS, MQTT, industrial protocol stacks); custom OTA with A/B updates and rollback; SDKs and eSDKs; boot logging, boot analysis, and diagnostics; performance analysis, profiling, and optimization tools; manufacturing tools and workflows; first-boot support; cloud connectivity and device management.

### The six platforms and the unique edge of each (exploit these)

1. **Arches — NVIDIA Jetson.** Jetson SoM (ARM + CUDA GPU + DLA/vision accelerators) on a custom carrier with extended storage, sensor, and actuator I/O, plus an **STM32 real-time co-processor** for deterministic tasks. *The edge:* everyone sells Jetson AI; nobody pairs it with hard real-time control. One-liner: **"Inference on the GPU. Control loops on the MCU. One board does the whole robot."** Industries: robotics (primary), automotive (secondary).
2. **Acadia — Raspberry Pi CM4/CM5.** Compute Modules on a ruggedized industrial carrier (industrial connectors, power conditioning, EMC-aware layout), with a **Pico W (RP2040)** companion for deterministic I/O and decoupled wireless. *The edge:* the world's largest embedded ecosystem, industrialized — prototype to production with no replatforming. One-liner: **"Your prototype already runs on it. Now it survives the factory floor."** Industries: IoT / smart building (primary), medical (secondary).
3. **Zion — Xilinx Zynq.** Zynq-7000 (Cortex-A9 + fabric) and Zynq UltraScale+ MPSoC (A53 + lockstep R5 + larger fabric). ARM and FPGA on one die, nanosecond-class interconnect, field-updatable bitstreams. *The edge:* latency in clock cycles, not scheduler ticks; hardware you can update OTA. One-liner: **"When the deadline is in microseconds, software isn't enough."** Industries: defense (primary), aerospace (primary), automotive/ADAS (secondary).
4. **Pinnacle — NXP i.MX.** Industrial ARM application processors with **10–15-year guaranteed availability**, mainline Linux, rich multimedia/connectivity, functional-safety variants. *The edge:* silicon longevity plus certification path (IEC 61508 / IEC 62304). One-liner: **"Silicon that outlives your product plan. Linux that passes your audit."** Industries: medical (primary), industrial (secondary), aerospace (secondary).
5. **Joshua — TI Sitara.** Industrial ARM Linux plus the **PRU-ICSS**: 200 MHz deterministic RISC cores with direct pin access, cycle-exact execution. *The edge:* FPGA-grade timing without FPGA cost or FPGA engineers. One-liner: **"FPGA-grade timing. Microcontroller-grade cost. Linux-grade ecosystem."** Industries: industrial (primary), robotics (secondary), energy.
6. **Sequoia — Intel & AMD x86.** Highest compute, x86-only software compatibility, PCIe fan-out ARM can't match. **No companion MCU** — determinism via PREEMPT_RT, isolated cores, or hypervisor partitioning (Xen, ACRN). One-liner: **"If it only runs on x86, it runs here — with all the I/O it needs."** Industries: networking / edge (primary), defense (secondary).

### Industry → platform matching (targeted; no platform claims all industries)

| Industry | Primary | Secondary |
|---|---|---|
| Robotics | Arches | Joshua |
| Automotive / ADAS | Arches | Zion, Pinnacle |
| Defense | Zion | Sequoia |
| Aerospace | Zion | Pinnacle |
| Medical | Pinnacle | Acadia |
| Industrial automation | Joshua | Pinnacle |
| IoT / Smart building | Acadia | Pinnacle |
| Networking / Edge compute | Sequoia | Pinnacle |

---

## 3. Tech stack & site structure

- **Stack:** **Next.js 15 (App Router)**, **Node 22 compatible** (`"engines": { "node": ">=22" }`, only Node-22-compatible dependencies), TypeScript strict, Tailwind CSS, **Framer Motion** for all animation. Statically exportable (`output: 'export'`); no server actions; contact form is a client-side stub.
- **Routes (8):** `/` (Home), `/arches`, `/acadia`, `/zion`, `/pinnacle`, `/joshua`, `/sequoia`, `/contact`.
- **Architecture:** all six platform pages render one shared `<PlatformPage>` component driven by a typed `data/platforms.ts` file (name, chip family, accent, edge one-liner, industries, slides with eyebrow/heading/bullets, boot-chain steps, chip-state config). Shared `app/layout.tsx` mounts `<Nav>`, `<ProgressBar>`, `<BootRail>`, `<StatusLine>`. Components: `<Slide>`, `<SlideHeading>`, `<BulletList>`, `<LivingChip>`, `<SplitFlapCounter>`, `<TypedEyebrow>`, `<RouteWipe>`. Adding a 7th platform must be a one-data-file change.
- **Nav (fixed top, all pages):** `Home | Arches | Acadia | Zion | Pinnacle | Joshua | Sequoia | Contact`. Active item underlined in its platform accent; hovering a platform item reveals a small mono chip label beneath it ("NVIDIA Jetson", "Raspberry Pi CM5", "Xilinx Zynq", "NXP i.MX", "TI Sitara", "Intel / AMD x86").
- **SEO:** per-route metadata (title, description) using the platform one-liners and technical vocabulary; semantic headings; OpenGraph tags.

### Page anatomy

- **Home:** 9 full-viewport scroll-snap slides — hero, six platform slides, hiring-replacement slide, closing CTA.
- **Each platform page:** 9 full-viewport scroll-snap slides — Overview, BSP, Bootloader, Kernel & Drivers, Middleware, OTA & Recovery, SDK & Tools, Performance, Manufacturing & Provisioning.
- **Contact:** single screen.

### Slide layout (the core pattern)

- **Two columns.** Text column: mono eyebrow (`STAGE 03 / BOOTLOADER`), huge display heading (1–3 words), rolling `03 / 09` counter, then **4–5 bullets**, each ≤ 14 words, each prefixed by a mono `>`. Chip column: the **living chip** (section 6) in its current state.
- **Alternate** which side the chip occupies on every slide; during the transition the chip glides across the screen — the swap is part of the show.
- Generous whitespace, hairline dividers, sentence case everywhere. Bullets stay light; the chip carries the drama.
- Responsive: columns stack under 900px (chip above text, scaled down); boot rail collapses to a dot strip; scroll-snap relaxed on short viewports.

---

## 4. Visual design

- **Theme: LIGHT ONLY.** No dark theme, no dark sections, ever. Background `#fafaf8`, white cards, ink `#16181a`, muted `#6b7075`, hairlines `#e4e2dd`.
- **Per-platform accents:** Arches `#0f7a4d` green · Acadia `#c43a3a` red · Zion `#6b4fd3` purple · Pinnacle `#1f6fd6` blue · Joshua `#d4622a` orange · Sequoia `#4a6478` steel. The accent tints the progress bar, eyebrows, chip strokes, rail highlights, links, CTA fills, and heading underlines on that platform's page (and that platform's slide on Home).
- **Typography:** Display **Space Grotesk** (700/500); body **Inter** (400/500); utility **JetBrains Mono** (eyebrows, counters, boot logs, part numbers, chip labels). Google Fonts via `next/font`. Headings `clamp(3rem, 8vw, 6.5rem)`, tight tracking.
- **Texture:** sharp or barely-rounded corners (≤ 6px); no decorative gradients; no stock photography anywhere. Reference feel: NVIDIA Jetson product pages and Stripe docs, in light mode — datasheet meets premium hardware brand.
- Contrast ≥ 4.5:1 for all text; accent-on-light combinations must pass.

---

## 5. Signature chrome: boot-sequence navigation

The page behaves like a device booting:

- **Right-side boot rail** (JetBrains Mono): nine entries, e.g. `[ 0.000 ] overview`, `[ 0.412 ] bsp`, `[ 1.108 ] bootloader`… Completed slides stamp a `✓` with a tiny pop; the current entry gets a breathing accent underline; timestamps tick upward while a slide is active. Click any entry to snap to that slide.
- **Top progress bar** (2px, accent) fills with scroll like a flash write.
- **Bottom status line** (fixed, mono, small): `writing arches.img … 34%`, percentage tweened with rAF (never jumps), ending `100% — boot complete ✓ 0 errors` on the final slide.
- **Section counter** `03 / 09`: digits roll like a split-flap display with slight overshoot.

---

## 6. The centerpiece: one giant living chip (build this first)

A single huge SVG **silicon die** (~45vw, capped 640px) is the hero object of every platform page and the Home hero. Premium line-art: die outline, pin/ball grid, internal blocks (CPU cluster, accelerator, memory controller, I/O ring, boot ROM, flash), hairline interconnects. Light fills, accent strokes. It occupies the slide's chip column and **never leaves the screen — it transforms per slide** (Framer Motion orchestration, 600–900ms springs, shared layout):

1. **Overview** — the die assembles: blocks fly in and seat, pins extend, interconnects draw; then a slow idle heartbeat pulse on the power rail.
2. **BSP** — blocks light up one by one as if enumerated; mono labels stamp beside pin groups (UART, I2C, SPI, ETH, PCIe, CSI).
3. **Bootloader** — boot ROM ignites; a visible execution path traces stage-to-stage across the die, each hop flashing its stage name, using the **real chain for that platform** (listed per page below).
4. **Kernel & Drivers** — the interconnect mesh comes alive with continuous signal pulses; driver "modules" dock onto the I/O ring like fitted pieces.
5. **Middleware** — pulses organize into pub/sub: one block broadcasts, others subscribe in visible fan-out; labels ROS 2 / DDS / MQTT (industrial pages: OPC UA / EtherCAT / PROFINET).
6. **OTA & Recovery** — the die splits into A/B halves; B rebuilds line-by-line; a clean swap flips the active half; a simulated failed write flickers and visibly rolls back to A.
7. **SDK & Tools** — a probe/magnifier overlay sweeps the die; code-bracket glyphs extrude from blocks; a mini boot-log readout streams alongside.
8. **Performance** — oscilloscope traces and bar meters overlay the blocks; one hotspot glows, then cools as an optimization wave passes.
9. **Manufacturing** — camera zooms out: the die multiplies into a panel grid, each stamping `✓ PROVISIONED` in sequence; the final CTA appears over the panel.

**Per-platform internals (the product story — must be visibly different):**
- **Arches:** GPU + DLA blocks dominate; a small **STM32 satellite chip** sits beside the die, wired by an RPMsg link that pulses.
- **Acadia:** CM5-style die; a **Pico W satellite** with a tiny antenna glyph.
- **Zion:** half the die is **FPGA fabric checkerboard** that visibly reconfigures during the OTA slide (bitstream sweep); lockstep R5 pair highlighted.
- **Pinnacle:** wide peripheral ring (displays, ETH, CAN); a "15 yr" longevity seal stamps on Overview.
- **Joshua:** **twin PRU cores** with direct taps to the pin ring, firing cycle-exact pulse trains.
- **Sequoia:** large cache blocks + a **PCIe lane fan-out** spraying from one edge; **no satellite MCU**.

**Home page:** the chip assembles in the hero, then **morphs between the six platform identities** as the user scrolls through the platform slides — fabric grows in for Zion, the STM32 satellite appears for Arches, the PCIe fan-out unfolds for Sequoia. One object, six identities.

Implementation: a single `<LivingChip platform stage>` client component; states as data (block layouts + paths per platform per stage); morphs via shared layout IDs and path interpolation; **transform / opacity / stroke-dashoffset only**; idle loops pause when off-screen or tab hidden; under `prefers-reduced-motion` states swap instantly with no morphs.

---

## 7. Animation spec (implement all of it)

1. **Hero boot sequence (every page load):** typed terminal log, ~6 lines (`U-Boot 2026.01 …`, `Loading kernel …`, `Starting init …`), blinking block cursor, 1.8s total; then the page title reveals with a clip-path wipe and slight letter-spacing contraction. The chip assembles in parallel.
2. **Scroll-snap slides** with spring easing; wheel, touch, keyboard (↑/↓, PgUp/PgDn), and boot-rail click all navigate.
3. **Heading reveals:** oscilloscope-sweep clip-path wipe with a 1px accent scanline traveling ahead of the reveal.
4. **Bullets stagger** 80ms apart (translateY + fade); the `>` types first, then the text wipes in.
5. **Typed eyebrows:** `STAGE 03 / BOOTLOADER` types character-by-character on slide entry.
6. **Split-flap counter** with overshoot and a faint flip shadow.
7. **Chip column swap:** as slides alternate, the chip glides across the viewport with a spring; text column crossfades past it (FLIP-style) — never a hard jump.
8. **Hover micro-interactions:** bullet underline sweep; nav chip-label slide-down; CTA diagonal accent fill; rail entries nudge and show a timestamp tooltip.
9. **Route transitions:** clicking a platform triggers a 300ms "flash-erase" wipe in the destination accent (a mono `ERASING… OK` flashes inside the wipe); new page wipes in from the opposite side.
10. **Final slide stamp:** `boot complete ✓ 0 errors` scale-settles in; every chip pulse converges once toward the CTA. No confetti.
11. **`prefers-reduced-motion`:** disable typing, tickers, pulses, morphs, snap animation; everything appears instantly and remains fully readable.

**Performance rules:** transform / opacity / stroke-dashoffset only; IntersectionObserver for reveals; rAF for status line and counters; `will-change` only while animating; pause all loops when the tab is hidden; 60fps on a mid-range laptop; Lighthouse Performance ≥ 90.

---

## 8. Copy rules

- Voice: confident, plain, engineering-grade. Specific beats clever. Sentence case. Bullets ≤ 14 words. Headings 1–3 words.
- Every bullet states a customer outcome backed by a concrete capability — never a bare feature.
- Use the exact technical vocabulary naturally (it is also the SEO): Yocto, OpenEmbedded, BitBake, recipes, layers, machine configs, U-Boot, SPL, FSBL, device tree, HAL, remoteproc, RPMsg, OpenAMP, DMA, PREEMPT_RT, A/B updates, RAUC-style rollback, secure boot, HAB, signed updates, CI/CD image builds, reproducible builds, JTAG, EtherCAT, PROFINET, OPC UA, Modbus, TSN, CAN-FD, TensorRT, DeepStream, PetaLinux, partial reconfiguration, ACRN, SR-IOV.
- Tone check: every sentence must read as a company in command. Nothing desperate, nothing rescue-flavored.
- All copy below is final — use it verbatim (you may only fix typos).

---

## 9. FINAL COPY — all 8 pages

### 9.1 Home (`/`) — 9 slides

**Slide 1 — Hero**
- Eyebrow: `SOCCENTRIC // EMBEDDED PLATFORMS`
- Headline: **From silicon to shipped.**
- Sub: Six embedded platforms. One complete production software stack on every one.
- CTA: Explore the platforms ↓ · Talk to engineering

**Slide 2 — Arches** · `NVIDIA JETSON`
- Inference on the GPU. Control loops on the MCU. One board does the whole robot.
- Tags: Robotics · Drones · Industrial inspection — CTA: Explore Arches →

**Slide 3 — Acadia** · `RASPBERRY PI CM4/CM5`
- Your prototype already runs on it. Now it survives the factory floor.
- Tags: IoT · Smart buildings · Kiosks — CTA: Explore Acadia →

**Slide 4 — Zion** · `XILINX ZYNQ`
- When the deadline is in microseconds, software isn't enough.
- Tags: Defense · Aerospace · ADAS — CTA: Explore Zion →

**Slide 5 — Pinnacle** · `NXP i.MX`
- Silicon that outlives your product plan. Linux that passes your audit.
- Tags: Medical · Industrial gateways · Aerospace — CTA: Explore Pinnacle →

**Slide 6 — Joshua** · `TI SITARA`
- FPGA-grade timing. Microcontroller-grade cost. Linux-grade ecosystem.
- Tags: Industrial control · Motor drives · Energy — CTA: Explore Joshua →

**Slide 7 — Sequoia** · `INTEL & AMD x86`
- If it only runs on x86, it runs here — with all the I/O it needs.
- Tags: Edge servers · Networking · Defense compute — CTA: Explore Sequoia →

**Slide 8 — The platform team** · `STAGE 08 / TEAM`
- Headline: **Stop trying to hire this role.**
- > Everything in your embedded Linux job description — delivered as a senior team.
- > Yocto distributions, BSPs, U-Boot, kernel, drivers, device trees: owned end to end.
- > OTA, A/B updates, secure boot, CI/CD image builds, reproducible releases.
- > Productive on your hardware in weeks — with documented handoff, not lock-in.
- CTA: Send us your job description — we'll send back how we'd deliver it.

**Slide 9 — Closing**
- `boot complete ✓ 0 errors`
- Headline: **Pick a platform. We deliver everything between the silicon and your application.**
- CTAs: **Talk to engineering** · Send us your schematic — we'll tell you what bring-up looks like.

---

### 9.2 Arches (`/arches`) — `NVIDIA JETSON` — accent #0f7a4d
Boot-chain for chip animation: BootROM → BCT/MB1 → MB2 → UEFI → kernel.

**S1 Overview** — Headline: **Arches** — Sub: Inference on the GPU. Control loops on the MCU. One board does the whole robot.
- > Jetson SoM: ARM cores, CUDA GPU, deep-learning and vision accelerators.
- > Custom carrier adds storage, sensor interfaces, and actuator connectivity the devkit lacks.
- > STM32 co-processor runs motor loops, watchdogs, and strict-deadline I/O — jitter-free.
- > Built for robots, drones, smart cameras, and autonomous platforms.

**S2 BSP**
- > Full board support package for your carrier, not the reference devkit.
- > Bring-up and validation alongside your hardware team, from first power-on.
- > Every interface enumerated, tested, documented: CSI cameras, CAN, NVMe, Ethernet.
- > Jetson-to-STM32 link over RPMsg — defined, driven, and verified.

**S3 Bootloader**
- > Jetson boot chain customized end to end: BCT, MB1/MB2, UEFI, kernel handoff.
- > Golden boot image — a known-good state the device always recovers to.
- > Failsafe recovery from corrupted flash or interrupted updates.
- > Initial provisioning flow ready for first power-on at the factory.

**S4 Kernel & Drivers**
- > Custom kernels tuned for real-time performance and fast boot.
- > Drivers written from scratch for your sensors and actuators.
- > Device trees and HAL matched exactly to your carrier.
- > CUDA, TensorRT, and DeepStream stacks integrated and validated.

**S5 Middleware**
- > ROS 2 configured for your robot's compute and sensor graph.
- > DDS tuned for multi-node, multi-camera data flow.
- > MQTT bridging for fleet telemetry and cloud reporting.
- > Customized to your requirements — not shipped as defaults.

**S6 OTA & Recovery**
- > A/B update mechanism — devices never brick in the field.
- > Automatic rollback on failed or interrupted updates.
- > Kernel, GPU stack, and applications updated independently.
- > Fleet-wide deployment from your cloud or ours.

**S7 SDK & Tools**
- > Custom SDK and eSDK — your team builds apps, not infrastructure.
- > Boot logging and boot analysis built into every image.
- > On-device diagnostics for field troubleshooting.
- > Cross-compilation environments ready on day one.

**S8 Performance**
- > GPU and accelerator profiling for inference pipelines.
- > Boot-time analysis and optimization — measured, not guessed.
- > System tuning across CPU, GPU, memory, and I/O.
- > Analysis tooling your team keeps after handoff.

**S9 Manufacturing** — `boot complete ✓ 0 errors`
- > Factory provisioning tools and first-boot workflows.
- > Per-device identity, keys, and cloud enrollment.
- > Manufacturing test suites for the production line.
- > First boot on your hardware in weeks, not quarters.
- CTAs: **Talk to engineering** · Next platform: Acadia →

---

### 9.3 Acadia (`/acadia`) — `RASPBERRY PI CM4/CM5` — accent #c43a3a
Boot-chain: EEPROM bootloader → firmware (start.elf) → kernel.

**S1 Overview** — Headline: **Acadia** — Sub: Your prototype already runs on it. Now it survives the factory floor.
- > Raspberry Pi CM4/CM5 on a ruggedized, industrial-grade carrier.
- > Industrial connectors, power conditioning, EMC-aware layout — built for deployment.
- > Pico W (RP2040) companion: deterministic I/O plus decoupled wireless.
- > The Pi ecosystem your team already knows — production-hardened.

**S2 BSP**
- > Industrial carrier BSP, not hobbyist GPIO headers.
- > Bring-up and validation on your carrier, interface by interface.
- > Device tree overlays for every peripheral you add.
- > Linux-to-RP2040 interface defined, driven, and verified.

**S3 Bootloader**
- > Pi EEPROM boot flow configured and locked for production.
- > Golden boot image with verified fallback — recoverable from anything.
- > Failsafe recovery from corrupted storage or interrupted updates.
- > Factory provisioning baked into the first-boot sequence.

**S4 Kernel & Drivers**
- > Custom kernels tuned for boot time and your workload.
- > Drivers written for your industrial peripherals from scratch.
- > Device trees and HAL matched to your carrier exactly.
- > Mainline-tracking builds — security patches without surprises.

**S5 Middleware**
- > MQTT pipelines for sensors, telemetry, and building systems.
- > DDS or ROS 2 where coordination demands it.
- > Protocol bridges to your existing infrastructure.
- > Configured for your deployment — not generic defaults.

**S6 OTA & Recovery**
- > A/B updates across the fleet — kiosks and nodes never brick.
- > Automatic rollback on failed or interrupted updates.
- > Staged rollouts: pilot devices first, fleet second.
- > Managed from your cloud or ours.

**S7 SDK & Tools**
- > Custom SDK on the ecosystem your developers already use.
- > Boot logging, boot analysis, and diagnostics in every image.
- > Reproducible Yocto builds — or Raspberry Pi OS, hardened.
- > Cross-compilation ready on day one.

**S8 Performance**
- > Thermal and power profiling for sealed enclosures.
- > Boot-time optimization for instant-on products.
- > I/O and wireless throughput tuned and verified.
- > Tooling your team keeps after handoff.

**S9 Manufacturing** — `boot complete ✓ 0 errors`
- > Factory provisioning and per-device identity workflows.
- > Manufacturing test suites for the production line.
- > Cloud enrollment at first boot, automatically.
- > Prototype to production — no replatforming, no rewrite.
- CTAs: **Talk to engineering** · Next platform: Zion →

---

### 9.4 Zion (`/zion`) — `XILINX ZYNQ` — accent #6b4fd3
Boot-chain: BootROM → FSBL → bitstream → U-Boot → kernel (fabric sweep on bitstream step).

**S1 Overview** — Headline: **Zion** — Sub: When the deadline is in microseconds, software isn't enough.
- > Zynq-7000 and UltraScale+ MPSoC: ARM cores and FPGA fabric on one die.
- > Latency measured in clock cycles, not scheduler ticks.
- > Lockstep Cortex-R5 cores for safety-critical paths.
- > SoM-on-carrier or fully custom board — your volume decides.

**S2 BSP**
- > PetaLinux/Yocto BSP that loads your bitstream and stitches fabric into the device tree.
- > Bring-up across PS and PL together, validated as one system.
- > OpenAMP and RPMsg between A53, R5, and fabric — defined and verified.
- > AXI DMA paths characterized, not assumed.

**S3 Bootloader**
- > Full chain owned: BootROM, FSBL, bitstream load, U-Boot, kernel.
- > Golden boot with verified fallback bitstream and image.
- > Failsafe recovery from corrupted flash or failed configuration.
- > Secure boot and encrypted bitstreams where the program demands it.

**S4 Kernel & Drivers**
- > Custom drivers for your fabric IP — your hardware, addressable from Linux.
- > Device trees spanning processors and programmable logic.
- > PREEMPT_RT and core isolation where software real-time is still required.
- > Cache coherency and DMA verified under load, not on paper.

**S5 Middleware**
- > DDS tuned for deterministic, high-channel data distribution.
- > Custom protocol stacks for bespoke aerospace and defense buses.
- > ROS 2 where robotics meets programmable logic.
- > Sensor fusion pre-processing in fabric — before the CPU sees a byte.

**S6 OTA & Recovery**
- > Field-updatable hardware: bitstreams ship over the air with A/B fallback.
- > Partial reconfiguration — swap one accelerator while the rest keeps running.
- > Automatic rollback on failed bitstream or image writes.
- > Deterministic frame-to-actuation latency, preserved across updates.

**S7 SDK & Tools**
- > eSDK covering both software and fabric interfaces.
- > Boot logging and analysis across FSBL, U-Boot, and kernel.
- > Hardware-in-the-loop test rigs for PS/PL integration.
- > JTAG-deep debug workflows, documented for your team.

**S8 Performance**
- > Fabric and interconnect profiling: AXI throughput, latency, contention.
- > Sub-microsecond control-loop timing, measured and proven.
- > ADAS pipelines: provable camera-radar-lidar latency budgets.
- > Optimization across PS, PL, and the boundary between them.

**S9 Manufacturing** — `boot complete ✓ 0 errors`
- > Factory programming of fuses, keys, and golden images.
- > Per-device provisioning and secure identity.
- > Production test covering processors and fabric together.
- > ISO 26262-aligned partitioning where automotive demands it.
- CTAs: **Talk to engineering** · Next platform: Pinnacle →

---

### 9.5 Pinnacle (`/pinnacle`) — `NXP i.MX` — accent #1f6fd6
Boot-chain: BootROM → SPL → U-Boot → kernel (HAB verification flash on each hop).

**S1 Overview** — Headline: **Pinnacle** — Sub: Silicon that outlives your product plan. Linux that passes your audit.
- > NXP i.MX: industrial ARM with 10–15 years guaranteed availability.
- > Mainline Linux — clean Yocto builds, predictable updates.
- > Displays, codecs, multiple Ethernet, CAN-FD, PCIe, TSN: the industrial peripheral set.
- > SoM-on-carrier or fully custom board — your volume decides.

**S2 BSP**
- > Yocto BSP built on mainline, not a vendor fork you can't maintain.
- > Bring-up and validation with your hardware team from first power-on.
- > Custom layers, recipes, and machine configs — organized for the long haul.
- > Reproducible builds your auditors can trace.

**S3 Bootloader**
- > SPL and U-Boot customized for your board and boot media.
- > HAB secure boot: signed images from BootROM to kernel.
- > Golden boot and failsafe recovery — the device always comes back.
- > Provisioning flow designed for regulated manufacturing.

**S4 Kernel & Drivers**
- > Custom kernels with a documented patch set — auditable, upgradable.
- > Drivers from scratch for your instruments and interfaces.
- > Device trees and HAL matched to your hardware exactly.
- > PREEMPT_RT tuning where determinism is required.

**S5 Middleware**
- > MQTT and DDS pipelines for connected instruments and gateways.
- > OPC UA and Modbus where the factory floor speaks first.
- > Audio, video, and display stacks for medical HMIs.
- > Configured to your requirements — and your compliance scope.

**S6 OTA & Recovery**
- > A/B updates with signed images and automatic rollback.
- > Security patches across a 15-year deployment window.
- > Staged fleet rollouts with full audit trails.
- > Devices in the field never brick — by design.

**S7 SDK & Tools**
- > Custom SDK and eSDK for your application teams.
- > Boot logging, analysis, and diagnostics in every image.
- > CI/CD pipelines for image builds and regression testing.
- > Documentation that survives certification review.

**S8 Performance**
- > Boot-time optimization for instant-on instruments.
- > Power profiling for battery and thermal budgets.
- > Multimedia pipeline tuning: capture, codec, display.
- > Long-term performance baselines, tracked release to release.

**S9 Manufacturing** — `boot complete ✓ 0 errors`
- > Factory provisioning with per-device keys and identity.
- > Manufacturing test aligned to IEC 61508 / IEC 62304 mappings.
- > First-boot enrollment into your device cloud.
- > A platform your product can stand on for a decade.
- CTAs: **Talk to engineering** · Next platform: Joshua →

---

### 9.6 Joshua (`/joshua`) — `TI SITARA` — accent #d4622a
Boot-chain: BootROM → SPL/MLO → U-Boot → kernel (PRU cores light up at kernel stage).

**S1 Overview** — Headline: **Joshua** — Sub: FPGA-grade timing. Microcontroller-grade cost. Linux-grade ecosystem.
- > TI Sitara: industrial ARM Linux with the PRU-ICSS real-time subsystem.
- > PRUs: 200 MHz deterministic cores with direct pin access, cycle-exact.
- > The niche between general ARM Linux and full FPGA — at a fraction of the cost.
- > SoM-on-carrier or fully custom board — your volume decides.

**S2 BSP**
- > Yocto BSP covering ARM and PRU subsystems as one platform.
- > Bring-up and validation from first power-on, alongside your EEs.
- > remoteproc and RPMsg between Linux and PRUs — defined and verified.
- > Every industrial interface enumerated, tested, documented.

**S3 Bootloader**
- > BootROM, SPL, U-Boot — customized for your board and media.
- > Golden boot and failsafe recovery for unattended industrial sites.
- > Secure boot and signed images where the deployment demands it.
- > Provisioning designed for the production line, not the lab.

**S4 Kernel & Drivers**
- > PRU firmware in cycle-exact assembly or C — no Linux jitter, ever.
- > Custom drivers bridging deterministic I/O into Linux cleanly.
- > Device trees and HAL matched to your hardware exactly.
- > PREEMPT_RT tuning on the ARM side where it helps.

**S5 Middleware**
- > EtherCAT and PROFINET masters and slaves on PRU — wire-speed, deterministic.
- > OPC UA and Modbus for the rest of the plant.
- > MQTT northbound for telemetry and fleet visibility.
- > Protocol stacks configured to your network, not generic defaults.

**S6 OTA & Recovery**
- > A/B updates covering kernel, rootfs, and PRU firmware together.
- > Automatic rollback — a failed update never stops a line.
- > Staged rollouts across plants and sites.
- > Managed from your infrastructure or ours.

**S7 SDK & Tools**
- > SDK spanning Linux applications and PRU firmware development.
- > Boot logging, analysis, and diagnostics in every image.
- > Logic-analyzer-verified timing — we prove the deadlines.
- > CI/CD for reproducible, release-engineered images.

**S8 Performance**
- > Cycle-exact PWM, stepper, and encoder timing — measured, not promised.
- > Strict-deadline sensor sampling with zero scheduler jitter.
- > Control-loop latency budgets characterized end to end.
- > System tuning across ARM, PRU, and the boundary.

**S9 Manufacturing** — `boot complete ✓ 0 errors`
- > Factory provisioning and per-device identity workflows.
- > Manufacturing test for ARM, PRU, and industrial I/O together.
- > First-boot cloud enrollment for fleet management.
- > Deterministic real-time — at a cost FPGA can't match.
- CTAs: **Talk to engineering** · Next platform: Sequoia →

---

### 9.7 Sequoia (`/sequoia`) — `INTEL & AMD x86` — accent #4a6478
Boot-chain: UEFI/coreboot → bootloader → kernel (no satellite MCU anywhere on this page).

**S1 Overview** — Headline: **Sequoia** — Sub: If it only runs on x86, it runs here — with all the I/O it needs.
- > Intel and AMD: the highest single-thread and multi-core compute available.
- > PCIe lane counts and high-speed I/O that ARM SoCs don't expose.
- > Runs Windows stacks, legacy industrial software, and x86-tuned workloads natively.
- > SoM-based or fully custom board — your volume decides.

**S2 BSP**
- > Yocto or hardened distro builds for your exact board.
- > Bring-up and validation: PCIe trees, NVMe, NICs, accelerators.
- > Firmware coordination across UEFI, BMC, and platform controllers.
- > Reproducible images, release-engineered from day one.

**S3 Bootloader**
- > UEFI or coreboot — customized, hardened, and locked for production.
- > UEFI Secure Boot with your keys, measured boot with TPM.
- > Golden boot and failsafe recovery for unattended edge sites.
- > Provisioning integrated into your imaging and deployment flow.

**S4 Kernel & Drivers**
- > Custom kernels: PREEMPT_RT, isolated cores, deterministic without an MCU.
- > Drivers for your capture cards, accelerators, and custom I/O.
- > Hypervisor partitioning — Xen or ACRN — Linux and RTOS on one die.
- > SR-IOV and virtualization paths validated under load.

**S5 Middleware**
- > DDS and MQTT pipelines sized for edge-server throughput.
- > Container runtimes hardened for embedded deployment.
- > Virtualization stacks validated on your exact silicon.
- > Bridges to legacy industrial software that must keep running.

**S6 OTA & Recovery**
- > A/B image updates with automatic rollback at fleet scale.
- > Signed updates verified against your secure boot chain.
- > Staged rollouts: rack, site, fleet.
- > Edge nodes recover without a site visit.

**S7 SDK & Tools**
- > SDKs for your application and virtualization teams.
- > Boot logging and analysis across firmware and kernel.
- > CI/CD for image builds, regression, and release management.
- > Diagnostics designed for remote, lights-out operation.

**S8 Performance**
- > Real-time latency on isolated cores — measured under load.
- > PCIe and storage throughput characterized end to end.
- > GPU and accelerator integration for vision rigs.
- > Power and thermal tuning for fanless and rugged builds.

**S9 Manufacturing** — `boot complete ✓ 0 errors`
- > Factory imaging, provisioning, and per-device identity.
- > Burn-in and production test for compute-dense systems.
- > First-boot enrollment into your management plane.
- > The software runs. The I/O keeps up. The fleet stays up.
- CTAs: **Talk to engineering** · Back to platforms →

---

### 9.8 Contact (`/contact`) — single screen

- Eyebrow: `SOCCENTRIC // CONTACT`
- Headline: **Tell us what you're building.**
- Sub: An engineer reads every message — and an engineer answers it.
- Form: Name · Company · Platform (dropdown: Arches / Acadia / Zion / Pinnacle / Joshua / Sequoia / Not sure yet) · Message. Mono labels, accent submit: **Talk to engineering**.
- Side column (mono, small):
  - > Have a schematic? Send it — we'll tell you what bring-up looks like.
  - > Hiring for the platform layer? Send the job description — we'll send back how we'd deliver it.
- Boot rail shows a single entry: `[ 0.000 ] contact` → stamps `✓ message queued` on submit (client-side stub; no backend).

---

## 10. Quality bar & deliverables

- Fully responsive: stacked columns < 900px; chip scaled and placed above text; rail → dot strip; touch-friendly targets.
- Accessible: semantic landmarks, visible keyboard focus, aria-labels on rail/nav, contrast ≥ 4.5:1, `prefers-reduced-motion` fully honored, all content readable with animations disabled.
- Zero console errors, zero TypeScript errors; `npm run build` and `npm run start` pass on **Node 22**; static export works.
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- Deliver every file complete — no placeholders, no `/* ... */`, no TODOs. All 8 routes cross-linked and consistent.

Build the entire site now.