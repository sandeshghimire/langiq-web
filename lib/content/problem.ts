export const PROBLEM = {
    sectionLabel: '01 — What we build',
    headline: {
        before: 'We build the whole stack —',
        accent: 'custom,',
        after: 'per platform.',
    },
    body: [
        "We design and develop IV&V to fit your hardware. Built on 25+ years of embedded experience and six in-house platforms as building blocks — covering roughly 90% of real-world embedded devices. Where your silicon differs, we port the HAL.",
    ],
    failureModes: [
        {
            label: 'Custom OS',
            description:
                'A Yocto-based OS built for each platform, with OTA updates (A/B partitions and rollback). The same base your hardware can ship on.',
        },
        {
            label: 'Custom HAL',
            description:
                'One HAL per platform — the only platform-specific layer. It exercises and validates everything from CPU and memory to peripherals, sensors, and any module. Everything above the HAL carries forward to new silicon.',
        },
        {
            label: 'Custom Web UI',
            description:
                'Connect a device, configure and run tests, watch live, and review time-series results — the full operator console, tailored to your program.',
        },
        {
            label: 'SDK & API',
            description:
                'A Python SDK to integrate testing into your own workflow and design custom tests, plus a direct API path through the client and HAL for quick single-device checks.',
        },
        {
            label: 'AI-assisted analysis',
            description:
                'A local LLM processes test data to flag anomalies and draft reports — on-prem, no cloud required. AI accelerates; your engineers own the conclusion.',
        },
    ],
} as const;
