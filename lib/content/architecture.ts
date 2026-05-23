export const ARCHITECTURE = {
    sectionLabel: '02 — Architecture',
    headline: {
        before: 'One HAL.',
        accent: 'Any silicon.',
        after: 'Complete evidence.',
    },
    lead: 'Three layers: the target client (on the device under test, speaking FlatBuffers over FreeRTOS bare-metal or gRPC over Yocto Linux), the server (x86 Ubuntu, hosting run orchestration and the persistent evidence database), and the Web UI (Next.js + shadcn/ui, where tests are authored, scheduled, and reviewed). The only platform-specific component is the HAL adapter — everything above it carries forward unchanged when you move to new silicon. The siliconcentric HIL attaches to the same server and evidence database — adding physical fault injection, bus emulation, and synthetic sensor injection without changing the stack.',
    components: [
        { number: '01', label: 'HAL adapter', description: 'The only platform-specific layer — maps test logic to hardware registers and drivers for each target' },
        { number: '02', label: 'Target client', description: 'On-device app on the DUT — FlatBuffers transport for FreeRTOS bare-metal; gRPC for Yocto Linux' },
        { number: '03', label: 'Server (x86 Ubuntu)', description: 'Hosts run orchestration, the persistent evidence database, and the REST/SSE operator feed' },
        { number: '04', label: 'Web UI', description: 'Next.js + shadcn/ui — author test suites, schedule runs, monitor live, review results and artifacts' },
    ],
} as const;
