// lib/content.ts — All site copy as typed constants

export const NAV = {
    brand: {
        eyebrow: 'SOCCENTRIC',
        name: 'IV&V',
    },
    links: [
        { label: 'What We Do', href: '#problem' },
        { label: 'Architecture', href: '#architecture' },
        { label: 'Test Modes', href: '#test-modes' },
        { label: 'Platforms', href: '#platforms' },
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Industries', href: '#use-cases' },
        { label: 'Evidence', href: '#evidence' },
        { label: 'FAQ', href: '#faq' },
    ],
    ctas: {
        secondary: 'Read the architecture',
        primary: 'See it run',
    },
} as const;

export const HERO = {
    eyebrow: 'SOCCENTRIC / IV&V — Platform-Independent Validation',
    headline: {
        line1: 'Independent',
        accent1: 'Validation',
        line2: 'and',
        accent2: 'Verification.',
        line3: '',
        line4: '',
    },
    subhead:
        'Validates every embedded platform — Yocto Linux or FreeRTOS bare-metal — across compute, peripherals, sensors, and environmental conditions, with a complete evidence trail.',
    note: 'Our stack, our HAL, our evidence — no source-code access required.',
    ctas: {
        primary: 'See it run',
        secondary: 'Read the architecture',
    },
    stats: [
        { number: '6', label: 'Reference platforms' },
        { number: '3', label: 'Test modes' },
        { number: '5', label: 'Coverage tiers' },
    ],
    telemetry:
        'IV&V / TELEMETRY :: ACTIVE      NODE_COUNT 02 :: SAMPLES',
    telemetrySuffix: '      UPTIME 99.94%      SCHEMA v1.0.0',
} as const;

export const PROOF_STRIP = {
    items: [
        'Yocto Linux', 'FreeRTOS', 'FlatBuffers', 'gRPC',
        'I²C', 'SPI', 'UART', 'USB', 'PCIe', 'MIPI',
        'IMU', 'ADC', 'DAC', 'Camera', 'LiDAR',
    ],
} as const;

export const PROBLEM = {
    sectionLabel: '01 — Independent validation',
    headline: {
        before: 'We validate the hardware',
        accent: 'independently.',
        after: 'Your team keeps building.',
    },
    body: [
        "The Independent V&V Suite runs its own stack — our HAL, our target client, our server — against the device under test, without requiring access to your source code or touching your development workflow.",
        "The result: independent coverage across compute, peripherals, sensors, and environmental conditions, with an evidence trail your design reviews and certification submissions can use directly.",
    ],
    failureModes: [
        {
            label: 'Compute coverage',
            description:
                'Every CPU, GPU, and on-die accelerator exercised under load — independently, from outside the application stack. Results captured with timestamps and traceable to specific hardware states.',
        },
        {
            label: 'Peripherals & sensors',
            description:
                'I²C, SPI, UART, USB, PCIe, MIPI, IMU, ADC, DAC, cameras, LiDAR, radar — validated over the actual buses. Every run logs drop counts, timing, and error conditions explicitly.',
        },
        {
            label: 'Environmental conditions',
            description:
                'Test cases authored in the Web UI run the device under temperature, humidity, and pressure conditions. Monitoring and event-based modes capture exactly how hardware behaves as conditions shift.',
        },
    ],
} as const;

export const ARCHITECTURE = {
    sectionLabel: '02 — Architecture',
    headline: {
        before: 'One HAL.',
        accent: 'Any silicon.',
        after: 'Complete evidence.',
    },
    lead: 'Three layers: the target client (on the device under test, speaking FlatBuffers over FreeRTOS bare-metal or gRPC over Yocto Linux), the server (x86 Ubuntu, hosting run orchestration and the persistent evidence database), and the Web UI (Next.js + shadcn/ui, where tests are authored, scheduled, and reviewed). The only platform-specific component is the HAL adapter — everything above it carries forward unchanged when you move to new silicon.',
    components: [
        { number: '01', label: 'HAL adapter', description: 'The only platform-specific layer — maps test logic to hardware registers and drivers for each target' },
        { number: '02', label: 'Target client', description: 'On-device app on the DUT — FlatBuffers transport for FreeRTOS bare-metal; gRPC for Yocto Linux' },
        { number: '03', label: 'Server (x86 Ubuntu)', description: 'Hosts run orchestration, the persistent evidence database, and the REST/SSE operator feed' },
        { number: '04', label: 'Web UI', description: 'Next.js + shadcn/ui — author test suites, schedule runs, monitor live, review results and artifacts' },
    ],
} as const;

export const TEST_MODES = {
    sectionLabel: '03 — Test modes',
    headline: 'Standardized test modes. Every peripheral. Every condition.',
    lead: 'The same vocabulary whether you are testing an IMU, a PCIe SSD, a camera, or a motor controller. Test suites are portable across peripherals and platforms without modification. From a single boot-time health check to a 72-hour thermal soak, the framework produces the same evidence shape and the same audit trail.',
    modes: [
        {
            title: 'One-shot',
            monoLabel: 'MODE 01 / ONESHOT',
            description:
                'A single discrete test: configure, execute, capture result, return. Used for boot-time health checks, peripheral acceptance gates, and deterministic functional checks. Fast, repeatable, audit-friendly.',
            example: 'e.g., IMU self-test on boot',
        },
        {
            title: 'Monitoring',
            monoLabel: 'MODE 02 / MONITOR',
            description:
                'Continuous sampling at a configured rate, streamed live with bounded buffering and explicit drop-count reporting. Used for thermal soak, vibration sweeps, and link-quality observation under sustained load.',
            example: 'e.g., 1 kHz IMU stream under thermal cycling',
        },
        {
            title: 'Event-based',
            monoLabel: 'MODE 03 / EVENT',
            description:
                'The device fires when a configured condition is met — threshold crossing, fault, state change, or environmental trigger. Captures the exact moment with timestamps from origin, relay, and server.',
            example: 'e.g., temperature threshold crossed',
        },
        {
            title: 'Long-running',
            monoLabel: 'MODE 04 / LONGRUN',
            description:
                'Hours or days of continuous execution with periodic progress snapshots and intermediate evidence capture. Used for endurance qualification and catching faults that only surface over time.',
            example: 'e.g., 72 h thermal endurance run',
        },
    ],
} as const;

export const PLATFORMS = {
    sectionLabel: '04 — Reference platforms',
    headline: 'Dogfooded on six in-house reference test beds.',
    lead: 'We run the Independent V&V Suite against our own reference platforms before any release. Each board covers a distinct target class — automotive SoC, avionics bare-metal, robotics compute, medical SBC, industrial real-time, edge compute. If your product sits in one of these classes, validation starts in days. If your silicon differs, we port the HAL adapter.',
    cards: [
        {
            number: '01',
            name: 'Arches',
            subtitle: 'AUTOMOTIVE SOC TESTBED',
            positioning:
                'Automotive-class SoC with heterogeneous compute, camera, and radar interfaces. We validate the full peripheral stack — GPU, image processor, sensor buses, and thermal behavior — before any automotive suite release.',
            specs: [
                { key: 'CLASS', value: 'Automotive SoC' },
                { key: 'ACCEL', value: 'GPU · NPU · ISP' },
                { key: 'TRANSPORT', value: 'gRPC' },
                { key: 'OS', value: 'Yocto Linux' },
            ],
        },
        {
            number: '02',
            name: 'Acadia',
            subtitle: 'ROBOTICS COMPUTE SBC',
            positioning:
                'Robotics-class SBC with high-bandwidth peripherals, co-processor I/O, and diverse sensor interfaces. We run full peripheral coverage and environmental soak cycles against this board to qualify the suite for robotics programs.',
            specs: [
                { key: 'CLASS', value: 'Robotics SBC' },
                { key: 'I/O', value: 'I²C · SPI · UART · USB' },
                { key: 'TRANSPORT', value: 'gRPC' },
                { key: 'OS', value: 'Yocto Linux' },
            ],
        },
        {
            number: '03',
            name: 'Zion',
            subtitle: 'AVIONICS BARE-METAL TESTBED',
            positioning:
                'Avionics-class bare-metal board with a hard real-time execution environment. We validate the FlatBuffers client path, HAL adapter timing, and deterministic event capture against this board before every RTOS-target release.',
            specs: [
                { key: 'CLASS', value: 'Avionics SBC' },
                { key: 'RTOS', value: 'FreeRTOS' },
                { key: 'TRANSPORT', value: 'FlatBuffers' },
                { key: 'OS', value: 'FreeRTOS' },
            ],
        },
        {
            number: '04',
            name: 'Pinnacle',
            subtitle: 'MEDICAL DEVICE SBC',
            positioning:
                'Long-lifecycle medical SBC targeting IEC 62304 and FDA qualification programs. We run prolonged endurance, I²C sensor bus coverage, and environmental stress cycles against this board to validate the evidence trail for medical submissions.',
            specs: [
                { key: 'CLASS', value: 'Medical device SBC' },
                { key: 'BUS', value: 'I²C · SPI · UART' },
                { key: 'TRANSPORT', value: 'gRPC' },
                { key: 'OS', value: 'Yocto Linux' },
            ],
        },
        {
            number: '05',
            name: 'Joshua',
            subtitle: 'INDUSTRIAL REAL-TIME TESTBED',
            positioning:
                'Industrial real-time control board with deterministic fieldbus interfaces and FreeRTOS execution. We validate cycle-exact timing, event-based trigger accuracy, and FlatBuffers transport fidelity against this board for industrial suite releases.',
            specs: [
                { key: 'CLASS', value: 'Industrial control' },
                { key: 'RTOS', value: 'FreeRTOS' },
                { key: 'TRANSPORT', value: 'FlatBuffers' },
                { key: 'OS', value: 'FreeRTOS' },
            ],
        },
        {
            number: '06',
            name: 'Sequoia',
            subtitle: 'EDGE / DEFENSE COMPUTE',
            positioning:
                'High-compute edge board with multi-lane PCIe, high-bandwidth peripheral I/O, and Linux-based execution. We validate PCIe peripheral behavior, sustained thermal load, and gRPC transport stability against this board for defense-class programs.',
            specs: [
                { key: 'CLASS', value: 'Edge compute / defense' },
                { key: 'I/O', value: 'PCIe · USB · MIPI' },
                { key: 'TRANSPORT', value: 'gRPC' },
                { key: 'OS', value: 'Yocto Linux' },
            ],
        },
    ],
} as const;

export const CAPABILITIES = {
    sectionLabel: '05 — What we validate',
    headline: 'Five coverage tiers. Hardware-up.',
    lead: 'Independent validation from the compute layer down to the environmental chamber. Each tier has its own test logic in the HAL, its own evidence shape in the database, and its own artifact in the audit trail.',
    features: [
        {
            icon: 'CircuitBoard',
            title: 'Compute',
            description:
                'CPU, GPU, graphics processor, media processor, NPU and ISP where present — each exercised under load via the HAL, independently of the application stack. Example check: sustained GPU utilization at rated clock with thermal telemetry captured at 10 Hz throughout.',
        },
        {
            icon: 'Route',
            title: 'Peripherals & busses',
            description:
                'I²C, SPI, UART, USB, PCIe, MIPI, and similar — validated over the actual bus at operating frequency, not emulated. Drop counts reported explicitly per run. Example check: PCIe link stress at rated bandwidth with error-rate and retrain-count logged over a 30-minute window.',
        },
        {
            icon: 'Zap',
            title: 'Sensors & actuators',
            description:
                'IMU, ADC, DAC, and the long tail of on-board sensors and actuators exercised through the HAL adapter. Example check: IMU axis-alignment verification and noise-floor measurement at room temperature, followed by the same check at thermal extremes.',
        },
        {
            icon: 'Eye',
            title: 'Perception devices',
            description:
                'Cameras, LiDAR, radar, ToF — high-bandwidth devices validated for frame integrity, sync timing, and transport reliability under load. Example check: camera pipeline frame-drop count and latency distribution measured under concurrent LiDAR polling across a 60-second one-shot run.',
        },
        {
            icon: 'Thermometer',
            title: 'Environmental conditions',
            description:
                'Temperature, humidity, pressure, and thermal load — authored as test cases in the Web UI and triggered remotely. Monitoring mode streams telemetry continuously; event-based mode fires on threshold crossings. Example check: I²C bus error rate sampled at 1 kHz while the chamber ramps from 25 °C to 85 °C, with an event fired on any NACK.',
        },
    ],
} as const;

export const USE_CASES = {
    sectionLabel: '06 — Industries',
    headline: 'Four industries. Specific validation programs.',
    cards: [
        {
            industry: 'AUTOMOTIVE / ADAS',
            title: 'Forward-camera + radar fusion ECU under thermal cycling.',
            vignette:
                'An ADAS ECU integrating a MIPI camera pipeline and radar interface required ISO 26262 ASIL-B platform evidence before safety sign-off. The suite ran the camera and radar subsystems concurrently under a thermal sweep from 25 °C to 95 °C, capturing frame-drop counts, bus error rates, and thermal telemetry throughout. Evidence mapped directly to ASIL-B test-to-requirement linkage.',
            subsystems: ['MIPI camera pipeline', 'Radar interface', 'GPU / ISP', 'I²C sensor bus', 'Thermal telemetry'],
            testModes: ['Monitoring', 'Event-based'],
        },
        {
            industry: 'AEROSPACE & DEFENSE',
            title: 'UAV mission computer MIPI camera + IMU stack across pressure altitudes.',
            vignette:
                'A UAV mission computer carrying a MIPI camera array and a six-axis IMU needed DO-254 hardware artifact evidence and repeatable build-and-run records across simulated pressure altitude profiles. The suite logged IMU axis alignment, camera sync timing, and UART telemetry link quality at each altitude step. All run records were retained for DO-254 structural-coverage review.',
            subsystems: ['MIPI camera array', 'Six-axis IMU', 'UART telemetry link', 'Environmental chamber (pressure)'],
            testModes: ['One-shot', 'Monitoring'],
        },
        {
            industry: 'MEDICAL DEVICES',
            title: 'Patient-monitor SBC I²C sensor bus under continuous duty.',
            vignette:
                'A patient-monitor SBC polling multiple I²C sensors continuously required IEC 62304 lifecycle evidence and FDA software-of-unknown-provenance mitigation records. The suite ran a 72-hour long-running test sampling the I²C bus at 500 Hz, logging NACK counts, timing drift, and any anomalous sensor state transitions. The resulting artifacts satisfied the IEC 62304 lifecycle-aligned log requirement.',
            subsystems: ['I²C sensor bus', 'ADC channels', 'UART debug interface', 'Thermal sensor'],
            testModes: ['Long-running', 'Event-based'],
        },
        {
            industry: 'INDUSTRIAL / ROBOTICS',
            title: 'AGV LiDAR + motor-controller chain under vibration.',
            vignette:
                'An AGV platform combining a LiDAR unit and a motor-controller chain over SPI required IEC 61508 functional-safety evidence under operating vibration profiles. The suite ran event-based validation triggering on LiDAR scan-gap events and motor-fault signals, with monitoring mode capturing SPI bus integrity and latency distribution throughout. Environmental-stress records documented behavior at peak vibration load.',
            subsystems: ['LiDAR (scan interface)', 'Motor controller (SPI)', 'IMU', 'Environmental chamber (vibration)'],
            testModes: ['Event-based', 'Monitoring'],
        },
    ],
} as const;

export const EVIDENCE = {
    sectionLabel: '07 — Regulatory evidence',
    headline: 'Every run produces the artifacts certification programs need.',
    lead: 'Every test run, every parameter, every result — captured, time-stamped, and traceable. The evidence database is append-only: runs are never silently deleted, operator actions are logged with identity and timestamp, and schema versions are snapshotted per run.',
    principle: 'Every run, every parameter, every result — captured, time-stamped, and traceable.',
    columns: [
        {
            number: '01',
            title: 'ISO 26262',
            subtitle: 'Automotive functional safety',
            items: [
                'Fault-injection test results with pass/fail and device state at trigger',
                'Coverage evidence mapped to ASIL requirement identifiers',
                'Traceable test-to-requirement linkage per run',
                'Thermal cycling records across the rated operating range',
            ],
        },
        {
            number: '02',
            title: 'DO-178C / DO-254',
            subtitle: 'Airborne SW / HW',
            items: [
                'Structural and hardware-level test artifacts with tool qualification data',
                'Repeatable build-and-run records — same inputs produce identical artifacts',
                'Firmware and schema versions snapshotted at run start',
                'Timestamped operator log for every state-changing action',
            ],
        },
        {
            number: '03',
            title: 'IEC 62304 / FDA',
            subtitle: 'Medical device SW lifecycle',
            items: [
                'Software-of-unknown-provenance mitigation evidence per 62304 §8',
                'Lifecycle-aligned logs with operator identity and immutable timestamps',
                'Long-running endurance records for continuous-duty device qualification',
                'Append-only store — invalidations recorded with reason, never silent deletes',
            ],
        },
        {
            number: '04',
            title: 'IEC 61508',
            subtitle: 'Industrial functional safety',
            items: [
                'Functional-safety integrity evidence across SIL target tiers',
                'Environmental-stress test records: temperature, humidity, vibration',
                'Event-based trigger logs with three-stamp timing on every record',
                'Explicit drop-count reporting — "did the test miss data?" answered numerically',
            ],
        },
    ],
} as const;

export const FAQ = {
    sectionLabel: '08 — FAQ',
    headline: 'Engineering questions, answered straight.',
    items: [
        {
            question: 'Do you need access to our source code?',
            answer:
                'No. The suite validates the hardware and its components from the outside via the target client and HAL adapter. We exercise peripherals, buses, compute elements, and environmental responses without reading your application code or BSP. Your IP stays with your team.',
        },
        {
            question: 'Will this interfere with our development workflow?',
            answer:
                'No. The IV&V stack runs on its own server, against its own target client on the DUT, on its own cadence. It does not share a build system, CI pipeline, or version control history with your development process. Both can run concurrently against the same hardware.',
        },
        {
            question: 'Which operating systems does the target client support?',
            answer:
                'FreeRTOS for bare-metal and RTOS targets; Yocto-based Linux for embedded Linux targets. The transport layer matches: FlatBuffers for FreeRTOS bare-metal (compact binary, no dynamic allocation); gRPC for Yocto Linux targets. Porting the target client to a new platform requires implementing the HAL adapter — typically a few weeks for a well-documented SoC.',
        },
        {
            question: 'How does environmental testing work — temperature, humidity, pressure?',
            answer:
                'Environmental conditions are authored as test parameters in the Web UI and dispatched to the server, which coordinates the run against the device inside the chamber. Monitoring mode streams telemetry continuously as conditions ramp. Event-based mode fires when a configured threshold is crossed — for example, a bus error rate that spikes above a limit during a humidity sweep. All conditions, readings, and trigger events are persisted in the evidence database.',
        },
        {
            question: 'What does the evidence trail look like for a certification review?',
            answer:
                'Every run record includes: operator identity and timestamps on every state change, firmware and schema versions snapshotted at run start, three-stamp timing on every cross-boundary measurement (origin, relay, server-ingress), and explicit drop counts so any data gap is reported numerically. The database is append-only — runs are invalidated with a recorded reason, never silently deleted. Evidence is reviewable in the Web UI and exportable as machine-readable JSON or auditor-friendly PDF.',
        },
        {
            question: 'How does evidence map to ISO 26262, DO-178C, IEC 62304, and IEC 61508?',
            answer:
                'Each framework maps to a specific artifact type the suite produces. ISO 26262: fault-injection results, coverage evidence, and test-to-requirement linkage. DO-178C / DO-254: structural test artifacts and repeatable build-and-run records. IEC 62304 / FDA: lifecycle-aligned logs and software-of-unknown-provenance mitigation evidence. IEC 61508: functional-safety integrity evidence and environmental-stress test records. We scope the evidence mapping to your program\'s specific standard before a run begins.',
        },
        {
            question: 'Our platform is not one of your six reference boards. Can you still help?',
            answer:
                'Yes. The HAL adapter is the only platform-specific component. Porting it to a new SoC typically takes a few weeks for a well-documented part. Everything above — test orchestration, server, evidence store, Web UI — carries forward unchanged. Bring us your hardware and we will scope the adapter work.',
        },
    ],
} as const;
export const CTA = {
    headline: {
        before: 'Ready to see',
        accent: 'independent validation',
        after: 'in action?',
    },
    subhead:
        'Book a 30-minute call with our engineers. Tell us your platform, your target class, and what you need to validate. We will walk you through a live run and scope the engagement honestly.',
    ctas: {
        primary: 'See it run',
        secondary: 'Read the architecture',
    },
    disclaimer: 'NO SALES PRESSURE. NO PRICING WALL. ENGINEERS TALKING TO ENGINEERS.',
} as const;

export const FOOTER = {
    brand: {
        description:
            'SoCcentric provides the Independent V&V Suite — platform-independent validation and verification for embedded systems. Six in-house reference platforms. Three test modes. Five coverage tiers. Yocto Linux and FreeRTOS. No source-code access required.',
    },
    platforms: {
        header: 'Reference platforms',
        links: [
            { label: 'Arches', href: '#platforms' },
            { label: 'Acadia', href: '#platforms' },
            { label: 'Zion', href: '#platforms' },
            { label: 'Pinnacle', href: '#platforms' },
            { label: 'Joshua', href: '#platforms' },
            { label: 'Sequoia', href: '#platforms' },
        ],
    },
    resources: {
        header: 'Resources',
        links: [
            { label: 'See it run (demo)', href: '#cta' },
            { label: 'Architecture', href: '#architecture' },
            { label: 'Regulatory evidence', href: '#evidence' },
            { label: 'Contact engineering', href: '#cta' },
        ],
    },
    copyright: `© SOCCENTRIC ${new Date().getFullYear()} :: BUILT FOR ENGINEERS`,
} as const;
