export const ARCHITECTURE = {
    sectionLabel: '02 — Architecture',
    headline: {
        before: 'One architecture.',
        accent: 'Any silicon.',
        after: 'Every layer custom-built.',
    },
    lead: 'IV&V is a modular stack, built per platform and carried forward as your hardware evolves. A custom OS and HAL bring up the board; a client app on the target drives the tests; an x86 server orchestrates everything and stores every log and event; and the web UI, SDK, and API give your team three ways to run it. One server validates multiple boards at once. Optional cloud sync centralizes records across sites and fleets. A local LLM analyzes the results. Only the OS and HAL are platform-specific — everything above carries forward to new silicon.',
    components: [
        { number: '01', label: 'Custom OS', description: 'Yocto-based, built per platform, with OTA updates — A/B partitions and rollback. The same base your product can ship on.' },
        { number: '02', label: 'Custom HAL', description: 'One HAL per platform — the only platform-specific test layer. Exercises and validates everything from CPU and memory to peripherals, sensors, and any module.' },
        { number: '03', label: 'Target client', description: 'Runs on the device under test. Drives tests through the HAL API and relays to the server over RPC — gRPC on Yocto Linux, FlatBuffers on FreeRTOS bare-metal.' },
        { number: '04', label: 'Server (x86)', description: 'Orchestrates and executes tests on behalf of the user, configures runs, and stores every test artifact, log, and event. One server manages and validates multiple boards at the same time.' },
        { number: '05', label: 'Web UI', description: 'Connect a device, author and run tests, watch live, and review time-series results. The full operator console.' },
        { number: '06', label: 'Python SDK & API', description: 'Integrate testing into your own workflow and design custom tests with the Python SDK, or use the direct API path through the client and HAL for quick single-device checks.' },
        { number: '07', label: 'Cloud connectivity', description: 'Optional. Sync test artifacts and device records to the cloud for centralized tracking across sites and fleets — or stay fully on-prem.' },
        { number: '08', label: 'Local AI / LLM', description: 'A local LLM processes test data to detect anomalies and generate reports — on-prem, no cloud required. AI accelerates; your engineers own the conclusion.' },
    ],
} as const;
