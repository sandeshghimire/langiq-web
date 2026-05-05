// lib/content.ts — All site copy as typed constants

export const NAV = {
    brand: {
        eyebrow: 'SOCCENTRIC',
        name: 'IV&V',
    },
    links: [
        { label: 'What We Do', href: '#problem' },
        { label: 'Test Modes', href: '#test-modes' },
        { label: 'Platforms', href: '#platforms' },
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Industries', href: '#use-cases' },
        { label: 'FAQ', href: '#faq' },
    ],
    ctas: {
        secondary: 'Download brief',
        primary: 'Book demo',
    },
} as const;

export const HERO = {
    eyebrow: 'Independent Validation & Verification — Works on Any Platform',
    headline: {
        line1: 'Find the bugs,',
        accent1: 'failures,',
        line2: 'and',
        accent2: 'electrical issues',
        line3: 'before your',
        line4: 'product ships.',
    },
    subhead:
        'We independently validate every aspect of your embedded platform — electrical behavior, PCB anomalies, software bugs, extreme temperature and humidity performance, full CPU/GPU/peripheral coverage, corner cases, and regulatory evidence. Your engineers stay focused on the application. We find what would have failed in the field.',
    note: 'Works on any hardware platform — Linux SBCs, microcontrollers, FPGAs, and x86 SoCs alike. Same workflows, same evidence, same console regardless of silicon. Engineered by the team that builds the carrier boards and BSPs. Production-proven on six families. Trusted by Fortune 500 medical, robotics, automotive, and defense programs.',
    ctas: {
        primary: 'Book a technical demo',
        secondary: 'Download technical brief',
    },
    stats: [
        { number: '6', label: 'Platforms in production' },
        { number: '4', label: 'Test modes' },
        { number: 'F500', label: 'Medical, robotics & defense' },
    ],
    telemetry:
        'IV&V / TELEMETRY :: ACTIVE      NODE_COUNT 02 :: SAMPLES',
    telemetrySuffix: '      UPTIME 99.94%      SCHEMA v1.0.0',
} as const;

export const PROBLEM = {
    sectionLabel: '01 — The validation gap',
    headline: {
        before: 'Your engineers are building the application.',
        accent: 'Nobody is stress-testing',
        after: 'the platform under it.',
    },
    body: [
        "Electrical issues, PCB layout problems, thermal runaway, humidity-induced failures, software bugs in the BSP, peripheral edge cases, corner cases — none of these get caught by the team that built the product. They need independent eyes, systematic coverage, and tests that run long enough and hard enough to expose what a lab bench never will.",
        'That is precisely what IV&V is. Not a QA checklist. A systematic, independent discipline that validates everything from silicon to software — and produces evidence that survives regulatory review.',
    ],
    failureModes: [
        {
            label: 'Electrical & PCB issues',
            description:
                'Trace impedance, power rail noise, signal integrity under load, decoupling gaps, ground bounce — issues invisible during bench bringup that surface as intermittent field failures. We find them first.',
        },
        {
            label: 'Thermal & humidity failure',
            description:
                'Your PCB behaves differently at −40 °C than at 25 °C. Components drift. Solder joints crack. Seals fail. We run prolonged soak cycles under extreme temperature and humidity and capture exactly what changes.',
        },
        {
            label: 'Software bugs & corner cases',
            description:
                "The bugs that escape development are the ones that require a specific sequence of events, a specific peripheral state, or a specific thermal condition to trigger. We exercise those corners — systematically.",
        },
    ],
} as const;

export const ARCHITECTURE = {
    sectionLabel: '02 — How it works',
    headline: {
        before: 'Platform-independent.',
        accent: 'Adapts to any hardware',
        after: 'you build on.',
    },
    lead: 'The framework has one platform-specific layer: the HAL adapter. Migrating from one silicon family to another is a HAL re-implementation — years of test definitions, evidence, and tooling carry forward unchanged. All wire schemas live in a single versioned contracts repository with semantic versioning, never-reused field IDs, and CI-enforced alignment checks. gRPC + protobuf for application-class clients; FlatBuffers for microcontroller clients — translated in exactly one auditable place. We customize the adapter; you keep full IV&V coverage.',
    components: [
        { number: '01', label: 'ivv-contracts', description: 'Shared schemas — one source of truth across every platform we touch' },
        { number: '02', label: 'HAL adapter', description: 'The only platform-specific layer — customized by us to your hardware' },
        { number: '03', label: 'Client apps', description: 'On-device bridge between your hardware and the framework' },
        { number: '04', label: 'Server + UI', description: 'Evidence capture, audit trail, and real-time operator visibility' },
    ],
} as const;

export const TEST_MODES = {
    sectionLabel: '03 — Test modes',
    headline: 'Four test modes. Every peripheral. Every condition.',
    lead: 'Four standardized modes — the same vocabulary whether you\'re exercising an IMU, a PCIe SSD, an Ethernet interface, or a GPU. Test plans are portable across peripherals and platforms without modification. From a single boot-time health check to a 72-hour endurance run — the same framework, the same evidence shape, the same audit trail.',
    modes: [
        {
            title: 'One-shot',
            monoLabel: 'MODE 01 / ONESHOT',
            description:
                'A single discrete test. Configure, fire, capture the result, return. Used for boot-time self-tests, peripheral health checks, and acceptance gates. Deterministic, fast, audit-friendly.',
            example: 'e.g., self-test on boot',
        },
        {
            title: 'Monitoring',
            monoLabel: 'MODE 02 / MONITOR',
            description:
                'Continuous sampling at a configured rate, streamed live with bounded buffering and explicit drop-count reporting. Used for thermal soak, vibration sweeps, link-quality watching.',
            example: 'e.g., 1 kHz IMU stream',
        },
        {
            title: 'Event-based',
            monoLabel: 'MODE 03 / EVENT',
            description:
                'The peripheral fires when a configured condition is met — threshold crossing, fault, state change. Captures the precise moment with timestamps from origin, relay, and server.',
            example: 'e.g., over-temperature trigger',
        },
        {
            title: 'Long-running',
            monoLabel: 'MODE 04 / LONGRUN',
            description:
                'Hours or days of execution with periodic progress reports and intermediate evidence. The mode that catches the failures unit tests cannot.',
            example: 'e.g., 72 h endurance run',
        },
    ],
} as const;

export const PLATFORMS = {
    sectionLabel: '04 — Platforms',
    headline: 'Already in production on six leading platforms.',
    lead: 'The IV&V framework is customized and running in production on six platform families — with 100% peripheral coverage on each. Every CPU, every memory subsystem, every storage device, every bus, every sensor, every camera, every display exposed through a single uniform test interface. If your product is built on one of these, we can begin validation in days. If your platform is different, we customize the HAL adapter for it.',
    cards: [
        {
            number: '01',
            name: 'Arches',
            subtitle: 'NVIDIA JETSON',
            positioning:
                'Building on NVIDIA Jetson for robotics, drones, smart cameras, or on-device ML? We validate the full platform — GPU peripherals, STM32 co-processor, all buses — independently, so your team stays focused on the application.',
            specs: [
                { key: 'APP CORES', value: 'ARM (Jetson)' },
                { key: 'ACCEL', value: 'CUDA + DLA + PVA' },
                { key: 'RT CO-PROC', value: 'STM32' },
                { key: 'OS', value: 'Linux for Tegra' },
            ],
        },
        {
            number: '02',
            name: 'Acadia',
            subtitle: 'RASPBERRY PI CM',
            positioning:
                'Deploying Raspberry Pi CM4 or CM5 in a production product? We validate the full carrier platform including the RP2040 co-processor, industrial I/O, and every peripheral — to the standard your program demands.',
            specs: [
                { key: 'APP CORES', value: 'ARM Cortex-A72/A76' },
                { key: 'RT CO-PROC', value: 'RP2040 (Pico W)' },
                { key: 'I/O', value: 'industrial connectors' },
                { key: 'OS', value: 'Raspberry Pi OS / Yocto' },
            ],
        },
        {
            number: '03',
            name: 'Zion',
            subtitle: 'XILINX ZYNQ',
            positioning:
                'Using Xilinx Zynq for SDR, high-channel DAQ, or custom real-time protocols? We validate both the ARM application side and the programmable logic fabric — independently and with full evidence.',
            specs: [
                { key: 'APP CORES', value: 'Cortex-A9 / A53+R5' },
                { key: 'FABRIC', value: 'Zynq PL' },
                { key: 'FORM', value: 'SoM-on-carrier or custom SoC' },
                { key: 'OS', value: 'PetaLinux' },
            ],
        },
        {
            number: '04',
            name: 'Pinnacle',
            subtitle: 'NXP i.MX',
            positioning:
                'Building a long-lifecycle product on NXP i.MX? We provide the independent validation that IEC 61508 / 62304 programs require — boot, peripherals, thermal, and long-duration endurance testing.',
            specs: [
                { key: 'APP CORES', value: 'Cortex-A53/A55/A72' },
                { key: 'OS', value: 'Yocto / mainline Linux' },
                { key: 'SAFETY', value: 'IEC 61508 / 62304 mappings' },
                { key: 'FORM', value: 'SoM or custom SoC' },
            ],
        },
        {
            number: '05',
            name: 'Joshua',
            subtitle: 'TI SITARA',
            positioning:
                'Running deterministic real-time control on TI Sitara with PRU? We validate cycle-exact timing, EtherCAT/PROFINET fieldbus behavior, and motor control peripherals — independently, not in-house.',
            specs: [
                { key: 'APP CORES', value: 'Cortex-A53/A72' },
                { key: 'RT', value: 'PRU @ 200 MHz' },
                { key: 'FIELDBUS', value: 'EtherCAT / PROFINET' },
                { key: 'FORM', value: 'SoM or custom SoC' },
            ],
        },
        {
            number: '06',
            name: 'Sequoia',
            subtitle: 'INTEL / AMD x86',
            positioning:
                'Using Intel or AMD x86 SBCs for high-compute or high-PCIe-lane applications? We validate PREEMPT_RT determinism, PCIe peripheral behavior, and platform reliability — independently, with full evidence capture.',
            specs: [
                { key: 'CPU', value: 'Intel / AMD x86' },
                { key: 'DETERMINISM', value: 'PREEMPT_RT / hypervisor' },
                { key: 'I/O', value: 'high-lane PCIe' },
                { key: 'FORM', value: 'SoM or custom SoC' },
            ],
        },
    ],
} as const;

export const CAPABILITIES = {
    sectionLabel: '05 — What we validate',
    headline: 'From silicon to audit trail — every layer covered.',
    lead: 'Independent validation spanning electrical failures, environmental extremes, software corner cases, and real-hardware fidelity — built on an architecture engineered for decade-long programs, regulatory evidence, and drop-count transparency.',
    features: [
        {
            icon: 'Zap',
            title: 'Electrical issues, caught early',
            description:
                'Power rail noise, signal integrity under load, decoupling gaps, trace impedance, and EMI susceptibility. We exercise the platform electrically — not just functionally — and flag issues before they become field escapes.',
        },
        {
            icon: 'FileSearch',
            title: 'Software bugs in the platform layer',
            description:
                'BSP code, driver logic, firmware edge cases, and boot-path assumptions. Independent code review and systematic runtime exercising catches the bugs invisible to engineers who wrote the code.',
        },
        {
            icon: 'Thermometer',
            title: 'PCB behavior at extreme temperature',
            description:
                'Prolonged soak at your platform\'s rated temperature limits — cold start at −40 °C, soak at +85 °C, thermal cycling between extremes. We measure and document exactly how your PCB behaves as it heats and cools.',
        },
        {
            icon: 'Droplets',
            title: 'PCB behavior at extreme humidity',
            description:
                'Accelerated humidity and condensation exposure to identify corrosion paths, seal failures, leakage currents, and component sensitivity that room-condition bench testing will never expose.',
        },
        {
            icon: 'Clock',
            title: 'Prolonged endurance under real conditions',
            description:
                'Hours or days of continuous operation — thermal stress, vibration, combined environments — with periodic evidence capture. The mode that catches thermal drift, memory creep, bus degradation, and intermittent faults that short tests miss entirely.',
        },
        {
            icon: 'CircuitBoard',
            title: 'Every CPU, GPU, and peripheral validated',
            description:
                'Every compute element and peripheral on the platform exercised — not just the ones your application uses. Peripherals advertise what they support through a runtime capability bitmask; the console renders only what each peripheral can actually do. New peripherals surface automatically — no UI changes required.',
        },
        {
            icon: 'Shield',
            title: 'Regulatory evidence — FDA, ISO 26262, DO-178, MIL-STD',
            description:
                'Evidence structured for your regulatory requirement. IEC 62304 / FDA for medical. ISO 26262 for automotive ADAS. DO-178C for aerospace. MIL-STD-810 for defense. We produce the artifacts your program office needs — not just test logs.',
        },
        {
            icon: 'Eye',
            title: 'Corner cases exercised',
            description:
                'Boundary conditions, out-of-sequence events, simultaneous peripheral contention, power transitions mid-operation, watchdog race conditions. We deliberately exercise the cases the dev team never had time to reach.',
        },
        {
            icon: 'Database',
            title: 'Append-only evidence database',
            description:
                'Every sample, every event, every operator action, every status change persisted with full audit fidelity. Runs are never deleted — only invalidated with a recorded reason. Reproducing a run from three years ago is a first-class operation. The same database serves lab bring-up, factory acceptance, customer-site validation, and field RMA debugging.',
        },
        {
            icon: 'Monitor',
            title: 'Real-time operator console',
            description:
                'Streaming charts, live event tail, and run-progress dashboards delivered through Server-Sent Events. Watch a 72-hour endurance run in motion or replay a fault from three months ago — same interface, same data source.',
        },
        {
            icon: 'Timer',
            title: 'Three-stamp timing on every message',
            description:
                'Origin, relay, and server-ingress timestamps preserved on every cross-boundary record. Forensic timing analysis becomes a query — not a debugging excavation through logs scattered across three systems.',
        },
        {
            icon: 'Route',
            title: 'Path-aware test parameters',
            description:
                'For peripherals reachable over multiple transports, the path is part of the test definition. No silent failover, no path-flapping during tests, no masked transport faults. Drop counts are reported explicitly at every layer — "did the test miss data?" is answered with a number, not a guess.',
        },
        {
            icon: 'Plug',
            title: 'REST + SSE API for pipeline integration',
            description:
                'A documented HTTP API with Server-Sent Event streams lets the IV&V suite plug into existing CI pipelines, dashboards, and monitoring stacks without vendor lock-in to the operator console. The same API that powers the UI is available for programmatic integration.',
        },
    ],
} as const;

export const USE_CASES = {
    sectionLabel: '06 — Industries',
    headline: 'Trusted by Fortune 500 medical, robotics, automotive, defense and aerospace.',
    cards: [
        {
            industry: 'MEDICAL DEVICES',
            title: 'IEC 62304 / FDA evidence — produced independently.',
            vignette:
                'FDA and IEC 62304 require validation that the development team cannot self-certify. We run thermal soak, humidity stress, electrical testing, and full peripheral coverage — and deliver evidence structured for your regulatory submission.',
            platform: 'NXP i.MX / NVIDIA Jetson',
        },
        {
            industry: 'INDUSTRIAL ROBOTICS & UAV',
            title: 'Find the electrical and software failures before the robot ships.',
            vignette:
                'Robots and UAVs carry power electronics, custom buses, and real-time co-processors that nobody fully stress-tests before deployment. We validate the platform under thermal load, vibration, and long-duration endurance — not just on the bench.',
            platform: 'NVIDIA Jetson / Raspberry Pi',
        },
        {
            industry: 'AEROSPACE & DEFENSE',
            title: 'DO-178C / MIL-STD-810 evidence the program office accepts.',
            vignette:
                'Defense programs require independent validation that is demonstrably separate from development. We exercise corner cases, run prolonged endurance under MIL-STD-810 conditions, and produce evidence in the format your contracting officer requires.',
            platform: 'Xilinx Zynq / Intel x86',
        },
        {
            industry: 'AUTOMOTIVE ADAS',
            title: 'ISO 26262 platform IV&V — independent from your dev team.',
            vignette:
                'ISO 26262 demands independence. Your ADAS engineers are building the perception and control stack. We validate the compute platform beneath it — electrical integrity, thermal cycling, peripheral coverage, and ASIL-mapped evidence.',
            platform: 'NXP i.MX / TI Sitara',
        },
        {
            industry: 'INDUSTRIAL AUTOMATION',
            title: 'Cycle-exact timing validated under real operating conditions.',
            vignette:
                'Industrial systems face temperature swings, humidity, and prolonged continuous operation. We validate deterministic timing, fieldbus behavior, and platform endurance under the actual environmental conditions your product will face.',
            platform: 'TI Sitara',
        },
        {
            industry: 'EDGE COMPUTE & AI',
            title: 'GPU, PCIe, and high-bandwidth peripherals — fully exercised.',
            vignette:
                'AI compute platforms run hot, hard, and continuously. We validate thermal management, PCIe integrity, GPU peripheral behavior, and corner-case stability under sustained load — with real-time telemetry throughout every run.',
            platform: 'Intel x86 / NVIDIA Jetson',
        },
    ],
} as const;

export const EVIDENCE = {
    sectionLabel: '07 — Regulatory evidence',
    headline: 'Evidence structured for your regulatory requirement.',
    lead: 'IV&V is only as useful as the evidence it produces. Every run generates artifacts structured for the specific standard your program is subject to — not generic test logs.',
    columns: [
        {
            number: '01',
            title: 'Standards supported',
            items: [
                'FDA / IEC 62304 — medical devices',
                'ISO 26262 — automotive ADAS',
                'DO-178C / DO-254 — aerospace',
                'MIL-STD-810 / MIL-STD-461 — defense',
                'IEC 61508 — industrial safety',
                'DoD / DoE program requirements',
            ],
        },
        {
            number: '02',
            title: 'Evidence properties',
            items: [
                'Append-only — runs invalidated with recorded reason, never silently deleted',
                'Firmware and schema versions snapshotted per run',
                'Operator identity and timestamp on every state-changing action',
                'Three-stamp timing — origin, relay, and server-ingress on every cross-boundary record',
                'Drop counts reported explicitly — "did the test miss data?" answered with a number',
                'Reproducibility first-class — "reproduce this run" works years after original execution',
            ],
        },
        {
            number: '03',
            title: 'Delivered formats',
            items: [
                'Structured PDF run reports',
                'JSON / CSV for tool ingestion',
                'SQLite archive — source of truth',
                'Custom formats for regulatory submissions on request',
            ],
        },
    ],
} as const;

export const FAQ = {
    sectionLabel: '08 — FAQ',
    headline: 'Engineering questions, answered straight.',
    items: [
        {
            question: 'What exactly do you find that our own engineers would miss?',
            answer:
                "Electrical issues (power rail noise, signal integrity, decoupling gaps) that only appear under load. PCB behaviors at temperature extremes that differ from bench conditions. Software bugs that require a specific combination of peripheral state and thermal condition to trigger. Corner cases nobody had time to write a test for. These are systematic gaps — not failures of skill.",
        },
        {
            question: 'What does extreme temperature testing cover?',
            answer:
                "Cold start at the rated minimum, thermal soak at maximum operating temperature, thermal cycling between extremes, and monitoring of peripheral behavior, timing, and software stability throughout. We measure what actually changes as your PCB heats and cools — not just whether it boots at room temperature.",
        },
        {
            question: 'What does humidity testing cover?',
            answer:
                "Accelerated moisture exposure to identify corrosion on exposed traces, seal and conformal-coating effectiveness, leakage currents, and component sensitivity to condensation. Field failures caused by humidity are almost never caught by bench testing.",
        },
        {
            question: 'How long do your endurance runs last?',
            answer:
                "Depends on the program requirement. Typical runs are 24–72 hours continuous operation under combined thermal, humidity, and functional load. Long-running modes capture thermal drift, memory creep, bus degradation, and intermittent fault accumulation with periodic evidence snapshots throughout.",
        },
        {
            question: 'Which regulatory standards can you produce evidence for?',
            answer:
                "FDA / IEC 62304 for medical. ISO 26262 for automotive ADAS. DO-178C / DO-254 for aerospace. MIL-STD-810 / MIL-STD-461 for defense. IEC 61508 for industrial safety. DoD and DoE program-specific requirements are a services engagement.",
        },
        {
            question: 'Our platform isn\'t on your list of six. Can you still help?',
            answer:
                "Yes. The HAL adapter is the only platform-specific layer. For a new platform, customization typically takes weeks — everything above (test orchestration, server, evidence store, UI) is unchanged. Bring us your hardware and we scope the engagement.",
        },
        {
            question: 'How is this different from our internal QA process?',
            answer:
                "Internal QA validates that the product does what it is supposed to do. IV&V validates the platform beneath it — including electrical behavior, environmental stress, peripheral coverage, and regulatory evidence — independently of the team that built it. Both are necessary. Neither replaces the other.",
        },
        {
            question: 'Where does IV&V NOT belong?',
            answer:
                "Pure application-layer software validation (use a normal CI pipeline). Developer bench smoke tests. Anywhere the independence requirement, regulatory evidence, and environmental stress properties are not worth the engagement cost.",
        }, {
            question: 'Do you test on real hardware or simulated environments?',
            answer:
                'Real hardware, real transports, real peripherals — always. Tests run against the actual devices over the actual buses your product will use in deployment. This is what catches the failures that unit tests, simulators, and bench-top instruments miss. Synthetic environments cannot reproduce the class of faults IV&V is designed to surface.',
        },
        {
            question: 'Can the IV&V suite integrate with our existing CI pipeline or dashboards?',
            answer:
                'Yes. A documented HTTP API with Server-Sent Event streams lets the IV&V suite plug into existing CI pipelines, dashboards, and monitoring stacks without vendor lock-in to the operator console. The same API that powers the operator console is available for programmatic integration.',
        },
        {
            question: 'Can the same suite work in our lab, at the factory, and at customer sites?',
            answer:
                'That is the design intent. Lab bring-up, factory acceptance testing, customer-site validation, and field RMA debugging all run the same suite, produce the same evidence shape, and write to the same database schema. Lessons from one phase carry into the next without reformatting or re-instrumentation.',
        },],
} as const;

export const CTA = {
    headline: {
        before: 'Find the failures',
        accent: 'before',
        after: 'your product reaches the field.',
    },
    subhead:
        'Book a 30-minute technical call. Tell us your platform, your regulatory requirement, and what you are trying to validate. We will tell you exactly what we would find and how long it takes.',

    ctas: {
        primary: 'Book a technical demo',
        secondary: 'Download technical brief',
    },
    disclaimer: 'NO SALES PRESSURE. NO PRICING WALL. ENGINEERS TALKING TO ENGINEERS.',
} as const;

export const FOOTER = {
    brand: {
        description:
            'SoCcentric provides Independent Validation & Verification for embedded platforms. Production-proven on NVIDIA Jetson, Raspberry Pi, Xilinx Zynq, NXP i.MX, TI Sitara, and Intel/AMD x86. Platform-independent — customizable for any hardware.',
    },
    platforms: {
        header: 'Platforms',
        links: [
            { label: 'NVIDIA Jetson', href: '#platforms' },
            { label: 'Raspberry Pi CM', href: '#platforms' },
            { label: 'Xilinx Zynq', href: '#platforms' },
            { label: 'NXP i.MX', href: '#platforms' },
            { label: 'TI Sitara', href: '#platforms' },
            { label: 'Intel / AMD x86', href: '#platforms' },
        ],
    },
    resources: {
        header: 'Resources',
        links: [
            { label: 'Technical brief', href: '#cta' },
            { label: 'Architecture diagram (PDF)', href: '#architecture' },
            { label: 'Schema repo (ivv-contracts)', href: '#architecture' },
            { label: 'Contact engineering', href: '#cta' },
        ],
    },
    copyright: `© SOCCENTRIC ${new Date().getFullYear()} :: ALL HARDWARE TRADEMARKS BELONG TO RESPECTIVE OWNERS :: BUILT FOR ENGINEERS`,
} as const;
