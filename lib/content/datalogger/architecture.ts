export const DATALOGGER_ARCHITECTURE = {
    sectionLabel: '02 — Architecture',
    headline: {
        before: 'One unit.',
        accent: 'Every signal.',
        after: 'All the evidence.',
    },
    lead: 'Three layers: the K26 brain (APU runs Yocto + IV&V ingest daemon, RPU runs FreeRTOS watchdog, PL hosts FPGA timestamping and protocol-capture soft-IP), the channel front-end (calibrated analog ADCs, DIO capture, and bus monitor engines behind individual channel isolation), and the append-only storage layer (NVMe with optional cloud replication, signed at write time).',
    components: [
        {
            number: '01',
            label: 'K26 brain',
            description: 'APU runs Yocto + IV&V ingest daemon; RPU runs FreeRTOS watchdog and safe power-cycle; PL hosts FPGA timestamping, DIO edge-capture, and bus-monitor soft-IP',
        },
        {
            number: '02',
            label: 'Channel front-end',
            description: 'Calibrated 24-bit differential ADCs, configurable DIO, and passive protocol monitors for CAN-FD, UART, SPI, I²C, and Ethernet — individually isolated to prevent ground loops',
        },
        {
            number: '03',
            label: 'Append-only store',
            description: 'Local NVMe with Write-Once-Read-Many policy enforced at the driver level. Each record signed with the IV&V platform key at write time. Optional cloud replication over TLS',
        },
        {
            number: '04',
            label: 'IV&V integration',
            description: 'Native gRPC and REST API into the IV&V evidence database — same dashboard, same evidence query, same requirement-linkage and certification-report generation',
        },
    ],
} as const;
