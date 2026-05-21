export const DATALOGGER_USE_CASES = {
    sectionLabel: '06 — Use cases',
    headline: 'Four programs. Specific capture missions.',
    cards: [
        {
            industry: 'AUTOMOTIVE / ADAS',
            title: 'Road-load data collection on an ADAS ECU with synchronised CAN-FD and analog capture.',
            vignette:
                'An ADAS program required ISO 26262 field evidence from road testing. The Datalogger captured all CAN-FD traffic (12 nodes), IMU analog channels, and power-rail telemetry simultaneously at 1 kHz, GPS-disciplined to UTC. Evidence was imported directly into the IV&V dashboard and mapped to ASIL-B test requirements — no post-processing in a separate toolchain.',
            subsystems: ['CAN-FD (12 nodes · passive tap)', 'Analog IMU channels (calibrated)', 'Power rail (3 rails)', 'GPS time reference'],
            testModes: ['Continuous logging', 'Triggered event capture'],
        },
        {
            industry: 'AEROSPACE & DEFENSE',
            title: 'UAV flight data recorder with FPGA-accurate timestamps and DO-178C artifact output.',
            vignette:
                'A UAV flight-controller program required DO-178C structural-coverage evidence from flight tests. The Datalogger replaced a proprietary FDR, running on the Zion platform alongside the flight software. UART telemetry, 8 analog sensor channels, and power rails were captured at each flight phase. All records were exported as DO-178C structural-coverage artifacts with calibration provenance on every measurement channel.',
            subsystems: ['UART telemetry (4 channels)', 'Analog sensors (8 channels)', 'Power rail monitoring', 'GPS/PTP time reference'],
            testModes: ['Continuous logging', 'Certification evidence'],
        },
        {
            industry: 'INDUSTRIAL / ROBOTICS',
            title: 'AGV motor controller run-time data collection with IEC 61508 evidence trail.',
            vignette:
                'An AGV motor controller required IEC 61508 SIL-2 run-time evidence from production operation. The Datalogger was installed inline, capturing CAN-FD bus traffic, encoder analog signals, and three power rails continuously at 1 kHz with 500 ms triggered windows on motor current faults. SIL-2 evidence was generated automatically at end of each shift.',
            subsystems: ['CAN-FD bus capture', 'Encoder analog channels', 'Motor power rails (3)', 'Triggered fault windows'],
            testModes: ['Continuous logging', 'Triggered event capture'],
        },
        {
            industry: 'MEDICAL DEVICES',
            title: 'Patient-monitor sensor bus long-run endurance with IEC 62304 lifecycle evidence.',
            vignette:
                'A patient-monitor SBC required IEC 62304 §8 lifecycle evidence from a 500-hour endurance run. The Datalogger captured I²C and SPI sensor bus traffic, analog sensor channels, and supply rails continuously. The append-only store satisfied §8 software-of-unknown-provenance mitigation requirements. Evidence was imported into the IV&V dashboard at the end of the endurance run.',
            subsystems: ['I²C / SPI bus capture', 'Analog sensor channels (6)', 'Supply rail monitoring', 'Long-run append-only store'],
            testModes: ['Continuous logging', 'Certification evidence'],
        },
    ],
} as const;
