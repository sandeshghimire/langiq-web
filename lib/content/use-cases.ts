export const USE_CASES = {
    sectionLabel: '06 — Industries',
    headline: 'Nine industries. Purpose-built validation programs.',
    cards: [
        {
            industry: 'Automotive / ADAS',
            title: 'Camera and radar fusion ECU — ISO 26262 ASIL-B.',
            vignette: 'Thermal sweep from 25–95 °C with concurrent MIPI and radar capture, frame-drop counts, and bus error rates mapped to ASIL-B test-to-requirement linkage.',
        },
        {
            industry: 'Aerospace',
            title: 'UAV mission computer — DO-254 hardware artifact evidence.',
            vignette: 'MIPI camera array and six-axis IMU logged across simulated altitude profiles, with all run records retained for DO-254 structural-coverage review.',
        },
        {
            industry: 'Defence',
            title: 'Tactical edge compute — MIL-STD-810 / MIL-STD-461 compliance.',
            vignette: 'GPIO walk, CAN telemetry, and power-rail monitoring under combined vibration and EMI stress, producing tamper-evident records for programme certification.',
        },
        {
            industry: 'Industrial Automation',
            title: 'Safety PLC I/O and Ethernet bus — IEC 61508 SIL-2.',
            vignette: 'Event-triggered and long-run tests captured Ethernet latency distributions and fault-response times for SIL-2 functional-safety review.',
        },
        {
            industry: 'Robotics',
            title: 'AGV navigation stack LiDAR and motor controller — ISO 10218.',
            vignette: 'Event-based validation triggered on scan-gap and motor-fault signals; monitoring captured SPI bus integrity and latency under peak vibration profiles.',
        },
        {
            industry: 'Electric Vehicles',
            title: 'BMS cell monitoring across charge–discharge cycling — ASIL-D.',
            vignette: '500-cycle charge–discharge runs captured I²C sensor bus integrity, analog accuracy, and fault-response timing across temperature extremes.',
        },
        {
            industry: 'Rail & Transportation',
            title: 'Train control SBC vital software — EN 50128 SIL-3.',
            vignette: 'Long-run and one-shot test modes captured Ethernet latency, UART fault-injection response, and power-cycle recovery for safety authority submission.',
        },
        {
            industry: 'Space & Satellite',
            title: 'Satellite payload compute — ECSS-Q-ST-60 hardware evidence.',
            vignette: 'SpaceWire transaction rates, error flags, and power-rail transients logged across temperature and SEU conditions with calibration provenance on every channel.',
        },
        {
            industry: 'Energy & Utilities',
            title: 'Smart grid edge controller — IEC 62443 evidence program.',
            vignette: 'Protocol deviations, timing anomalies, and power-rail integrity captured over UART, Ethernet, and digital I/O under simulated grid disturbance profiles.',
        },
    ],
} as const;
