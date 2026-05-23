export const CAPABILITIES = {
    sectionLabel: '05 — Capabilities',
    headline: 'Built for real test programs, not just bench checks.',
    lead: 'Beyond what it validates, IV&V is built to run real programs — many boards at once, three ways to drive it, records that never go missing, and AI to make sense of it all.',
    features: [
        {
            icon: 'Cpu',
            title: 'Multi-board orchestration',
            description:
                'One server manages and runs validation on many target devices at once — qualify a whole production batch or a set of board variants in parallel, from a single console.',
        },
        {
            icon: 'Monitor',
            title: 'Three ways to drive it',
            description:
                'The web UI for full operator control, the Python SDK to build testing into your own workflow, and a direct API path through the client and HAL for quick single-device checks.',
        },
        {
            icon: 'Database',
            title: 'Complete record capture',
            description:
                'Every test, log, and event is captured to the server — timestamped, operator-attributed, append-only. Runs are never silently deleted; invalidations are recorded with a reason. Every cross-boundary record carries three timestamps — origin, relay, server — so timing analysis is a query, not an investigation.',
        },
        {
            icon: 'Zap',
            title: 'OTA with rollback',
            description:
                'The Yocto-based OS updates over the air with A/B partitions and rollback — keep fielded and long-lifecycle units current without risking a bad flash.',
        },
        {
            icon: 'Shield',
            title: 'Cloud-connected, or fully on-prem',
            description:
                'Optional cloud sync centralizes records and device history across sites and fleets — or stay entirely on-prem for cert and defense programs.',
        },
        {
            icon: 'Activity',
            title: 'Local AI analysis',
            description:
                'A local LLM processes results to flag anomalies and draft reports — on-prem, no cloud. AI accelerates; your engineers own the conclusion.',
        },
    ],
} as const;
