export const DATALOGGER_USE_CASES = {
    sectionLabel: '06 — Industries',
    headline: 'Nine industries. Purpose-built capture missions.',
    cards: [
        {
            industry: 'Automotive / ADAS',
            title: 'Road-load data collection on an ADAS ECU — ISO 26262 ASIL-B.',
            vignette: 'CAN-FD, IMU channels, and power rails captured at 1 kHz GPS-disciplined to UTC; evidence mapped to ASIL-B requirements with no post-processing toolchain.',
        },
        {
            industry: 'Aerospace',
            title: 'UAV flight data recorder with FPGA timestamps — DO-178C.',
            vignette: 'UART telemetry, analog sensors, and power rails captured at each flight phase; exported as DO-178C artifacts with calibration provenance on every channel.',
        },
        {
            industry: 'Defence',
            title: 'Tactical vehicle data bus capture — MIL-STD-810 field evidence.',
            vignette: 'CAN-FD and UART buses passively tapped; power-rail and IMU telemetry GPS-synchronised into a tamper-evident trail with no vehicle integration changes.',
        },
        {
            industry: 'Industrial Automation',
            title: 'Safety PLC runtime monitoring — IEC 61508 SIL-2 evidence.',
            vignette: 'Ethernet safety-bus traffic, digital I/O states, and power-rail quality captured at 1 kHz; automated SIL-2 reports generated at end of each production shift.',
        },
        {
            industry: 'Robotics',
            title: 'AGV navigation data collection — IEC 61508 SIL-2 run-time.',
            vignette: 'CAN-FD traffic, encoder analog signals, and motor rails captured at 1 kHz with 500 ms triggered windows on motor current fault events.',
        },
        {
            industry: 'Electric Vehicles',
            title: 'EV battery pack cell telemetry — ISO 26262 ASIL-D endurance.',
            vignette: '128 analog cell channels, I²C BMS bus, and pack power rails captured across 500 charge–discharge cycles with GPS-synchronised records imported into IV&V.',
        },
        {
            industry: 'Rail & Transportation',
            title: 'Train control bus monitoring — EN 50128 SIL-3 evidence trail.',
            vignette: 'Ethernet and serial safety-bus traffic monitored passively; append-only evidence trail built for safety authority submission with zero impact on vital systems.',
        },
        {
            industry: 'Space & Satellite',
            title: 'Satellite telemetry downlink capture — ECSS-Q-ST-60 provenance.',
            vignette: 'SpaceWire telemetry, power-bus monitoring, and timing channels captured simultaneously with GPS-synchronised calibration provenance on every measurement.',
        },
        {
            industry: 'Energy & Utilities',
            title: 'Smart grid edge controller event logging — IEC 62443.',
            vignette: 'Modbus/RTU and Ethernet traffic, power-rail quality, and I/O states captured with triggered windows on disturbance events for cyber-physical security review.',
        },
    ],
} as const;
