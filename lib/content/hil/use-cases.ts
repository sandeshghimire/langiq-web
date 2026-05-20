export const HIL_USE_CASES = {
    sectionLabel: '06 — Use cases',
    headline: 'Four programs. Specific test rigs.',
    cards: [
        {
            industry: 'AUTOMOTIVE / ADAS',
            title: 'Motor controller ECU with CAN-FD rest-of-bus emulation under thermal cycling.',
            vignette:
                'An ADAS ECU required ISO 26262 ASIL-B evidence with the full CAN-FD network present. The HIL emulated 12 CAN-FD nodes, injected fault scenarios (CAN bit errors, brown-out during arbitration), and ran a thermal sweep from 25 °C to 95 °C while the brain card captured bus error rates, DUT response times, and thermal telemetry. Evidence mapped directly to ASIL-B test-to-requirement linkage.',
            subsystems: ['CAN-FD bus (12 virtual nodes)', 'DUT power conditioning', 'DIO fault injection', 'Analog temperature monitoring'],
            testModes: ['Fault injection', 'Certification evidence'],
        },
        {
            industry: 'AEROSPACE & DEFENSE',
            title: 'UAV flight controller GPIO and UART validation with fault injection across pressure altitude.',
            vignette:
                'A UAV flight controller on the Zion platform required DO-254 hardware artifact evidence across simulated altitude profiles. The HIL ran GPIO walk, UART telemetry link quality, and fault injection (stuck GPIO, UART parity errors) at each altitude step. All run records were retained for DO-254 structural-coverage review with calibration provenance on every analog measurement channel.',
            subsystems: ['GPIO (DIO card)', 'UART telemetry link', 'Fault injection (stuck lines)', 'Environmental (pressure simulation)'],
            testModes: ['Firmware bring-up', 'Certification evidence'],
        },
        {
            industry: 'INDUSTRIAL / ROBOTICS',
            title: 'AGV motor controller plant-in-the-loop with encoder emulation.',
            vignette:
                'An AGV motor controller on the Joshua platform required IEC 61508 SIL-2 evidence with a closed-loop plant model. The HIL ran a real-time motor + load model on the K26 brain card, emulated encoder/resolver feedback on the AIO card, and drove the controller at ≥10 kHz loop closure. Fault injection triggered at peak load. IEC 61508 functional-safety integrity evidence captured for each scenario.',
            subsystems: ['Motor encoder emulation (AIO)', 'Power conditioning (fault inject)', 'CAN-FD status bus', 'Real-time plant model'],
            testModes: ['Bus emulation', 'Fault injection'],
        },
        {
            industry: 'MEDICAL DEVICES',
            title: 'Patient-monitor SBC sensor bus validation with long-running endurance.',
            vignette:
                'A patient-monitor SBC on the Pinnacle platform required IEC 62304 lifecycle evidence for its I²C and SPI sensor buses. The HIL ran a 72-hour endurance test with synthetic sensor injection on calibrated DAC channels, fault injection on the I²C bus, and continuous current monitoring. Append-only evidence log satisfied IEC 62304 §8 software-of-unknown-provenance mitigation requirements.',
            subsystems: ['Synthetic sensor injection (AIO)', 'I²C / SPI fault injection', 'Current monitoring (Power card)', 'Long-run endurance capture'],
            testModes: ['Synthetic sensor injection', 'Certification evidence'],
        },
    ],
} as const;
