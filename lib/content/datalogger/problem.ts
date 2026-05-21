export const DATALOGGER_PROBLEM = {
    sectionLabel: '01 — Real signals. Real timestamps.',
    headline: {
        before: 'Capture every signal.',
        accent: 'Miss nothing.',
        after: 'Prove it.',
    },
    body: [
        'Data loggers that miss signals under load, lose timestamps across reboots, or require proprietary readers for exported files are not acceptable in safety-critical programs. The SoCcentric Datalogger runs on the same Kria K26 SoM, the same Yocto BSP, and the same IV&V evidence framework as the rest of the platform family.',
        'FPGA-accurate edge timestamps. Calibrated analog channels. Append-only evidence database. Every capture session signed, every artefact traceable to a requirement. And when you need to validate the data, the Datalogger connects directly to the IV&V framework — no intermediate toolchain.',
    ],
    failureModes: [
        {
            label: 'FPGA-accurate timestamping',
            description:
                'Every captured edge, sample, and bus message is stamped by the PL fabric — not the APU OS. No timestamp jitter from Linux scheduling. Sub-microsecond accuracy, aligned to a PTP grandmaster or GPS UTC reference.',
        },
        {
            label: 'Calibrated analog channels',
            description:
                'Each analog input channel is factory-calibrated with a traceable reference standard. Calibration provenance — reference, date, operator, and measurement chain — is stored in the evidence database and included in every certification report.',
        },
        {
            label: 'Append-only evidence store',
            description:
                'Capture records are written to a Write-Once-Read-Many NVMe store. No record can be modified or silently deleted. Invalidations are written as new records referencing the original, with reason and operator identity.',
        },
    ],
} as const;
