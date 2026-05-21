export const DATALOGGER_FAQ = {
    sectionLabel: '08 — FAQ',
    headline: 'Engineering questions, answered straight.',
    items: [
        {
            question: 'What silicon does the Datalogger run on?',
            answer:
                'The K26 SoM from AMD/Xilinx (Kria family). The APU runs a Yocto Linux image with the IV&V ingest daemon; the RPU runs a FreeRTOS watchdog; the PL hosts FPGA soft-IP for channel timestamping, DIO edge-capture, and bus protocol monitoring. This is the same silicon and BSP as the rest of the SoCcentric platform family.',
        },
        {
            question: 'Can the Datalogger operate without the IV&V platform?',
            answer:
                'Yes. The Datalogger has a standalone Web UI accessible over Ethernet. Session management, channel configuration, live preview, and data export (CSV, pcap) are all available without the IV&V server. For evidence database import, requirement mapping, and certification report generation, the IV&V platform is required.',
        },
        {
            question: 'How accurate are the timestamps?',
            answer:
                'All channel events are timestamped by the PL fabric (FPGA), not the APU operating system. This eliminates Linux scheduler jitter. In PTP follower mode, timestamps are disciplined to the IEEE 1588-2019 grandmaster with sub-100 ns accuracy. In GPS mode, timestamps are disciplined to UTC with sub-microsecond accuracy after lock.',
        },
        {
            question: 'What is the maximum analog sample rate?',
            answer:
                'Continuous analog capture runs at configurable rates from 1 SPS to 100 kSPS per channel, depending on the number of active channels. Burst mode captures all analog channels simultaneously at up to 1 MSPS for a configurable window. Digital channels (DIO) capture every edge with FPGA-accurate timestamps at any rate up to the FPGA fabric clock.',
        },
        {
            question: 'How does the append-only store work?',
            answer:
                'Capture records are written to local NVMe using a Write-Once-Read-Many policy enforced at the storage-driver level. Each record is signed with the IV&V platform key at write time. If a record is later invalidated (e.g., calibration expired), the invalidation is written as a new record referencing the original — the original is never modified or deleted.',
        },
        {
            question: 'Can I synchronise multiple Dataloggers for a multi-unit campaign?',
            answer:
                'Yes. Each Datalogger operates as a PTP follower to a shared grandmaster (or to GPS UTC). Capture start/stop commands are broadcast over the IV&V gRPC bus, and the IV&V orchestrator aligns timestamps across units before importing to the evidence database. Typical multi-unit jitter after PTP alignment is under 200 ns.',
        },
        {
            question: 'Which certification standards does the Datalogger evidence trail support?',
            answer:
                'ISO 26262 (automotive functional safety), DO-178C / DO-254 (airborne software and hardware), IEC 62304 / FDA (medical device software lifecycle), and IEC 61508 (industrial functional safety). Artifact shapes are customised to each standard. Standard scope is agreed with the customer engineering team before a certification session begins.',
        },
    ],
} as const;
