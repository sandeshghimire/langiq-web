export const HIL_ARCHITECTURE = {
    sectionLabel: '02 — Architecture',
    headline: {
        before: 'One chassis.',
        accent: 'Any DUT.',
        after: 'Every signal.',
    },
    lead: 'Three layers: the K26 brain card (APU running Yocto + IV&V, RPU running FreeRTOS watchdog, PL hosting FPGA I/O soft-IP), the slot backplane (six card slots sharing a high-speed HIL-Bus), and the platform adapter (DUT-specific connector and power conditioning). Swap the adapter to change the DUT. Swap the extension cards to change the interfaces.',
    components: [
        { number: '01', label: 'K26 brain card', description: 'APU runs Yocto + IV&V framework; RPU runs FreeRTOS watchdog; PL hosts FPGA I/O and timing soft-IP' },
        { number: '02', label: 'Platform adapter', description: 'DUT-specific PCB — connector, power conditioning, and signal translation. One adapter per siliconcentric platform' },
        { number: '03', label: 'Extension cards', description: 'Slot cards for DIO, AIO, CAN/CAN-FD, Ethernet bus, motor/encoder, and more — chosen for each program' },
        { number: '04', label: 'IV&V platform', description: 'The HIL connects to the IV&V server over gRPC and PTP — same test orchestration, same evidence database, same Web UI' },
    ],
} as const;
