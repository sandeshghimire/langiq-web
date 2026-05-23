export const HIL_FAQ = {
    sectionLabel: '08 — FAQ',
    headline: 'Engineering questions, answered straight.',
    items: [
        {
            question: 'What silicon does the HIL brain card use?',
            answer:
                'The K26 SoM from AMD/Xilinx (Kria family). The APU runs a Yocto Linux image with the IV&V framework installed; the RPU runs a FreeRTOS watchdog; the PL hosts FPGA soft-IP for high-accuracy I/O and timing. This is the same silicon family as the Zion reference platform, so the BSP, toolchain, and engineering discipline are shared.',
        },
        {
            question: 'Do we need to use siliconcentric compute platforms to use the HIL?',
            answer:
                'No. Platform adapters are available for all six siliconcentric platforms (Arches, Acadia, Zion, Pinnacle, Joshua, Sequoia), but a custom adapter can be made for any DUT. Custom adapters require a brief NRE engagement to characterize the DUT connector, power envelope, and signal translation requirements.',
        },
        {
            question: 'How does the HIL connect to the IV&V platform?',
            answer:
                'The HIL connects to the IV&V server over standard Ethernet via gRPC and REST APIs. PTP is used for time synchronisation between the HIL and the IV&V server so that FPGA-stamped events and server-ingress timestamps are correlated with sub-microsecond accuracy. The HIL looks like any other networked appliance to IT.',
        },
        {
            question: 'Can the HIL run without the IV&V platform?',
            answer:
                'Yes. The HIL has a standalone Web UI accessible directly over Ethernet. Manual test execution, waveform viewing, and GPIO control are available without the IV&V server. For production CI use and certification evidence generation, the IV&V platform is required.',
        },
        {
            question: 'How many DUTs can I run in parallel?',
            answer:
                'Each HIL chassis supports one DUT at a time (one platform adapter slot). For parallel regression, deploy multiple HIL-Rack chassis on the same network and run the IV&V orchestrator in parallel across them. The IV&V server distributes test suites across the pool and aggregates results into a single dashboard.',
        },
        {
            question: 'What does calibration cover and how often is it needed?',
            answer:
                'Every analog measurement channel (AIO card) and the power conditioning card are factory-calibrated before shipment. Calibration provenance — reference standard, date, operator, and measurement chain — is stored in the evidence database and included in every certification report. Recommended calibration interval is 12 months or after any mechanical impact.',
        },
        {
            question: 'Which certification standards does the HIL evidence trail support?',
            answer:
                'ISO 26262 (automotive functional safety), DO-178C / DO-254 (airborne software and hardware), IEC 62304 / FDA (medical device software lifecycle), and IEC 61508 (industrial functional safety). The evidence artifact shapes match each standard\'s documentation requirements. Standard scope is agreed with the customer engineering team before a certification run begins.',
        },
    ],
} as const;
