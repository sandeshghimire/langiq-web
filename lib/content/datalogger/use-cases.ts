export const DATALOGGER_USE_CASES = {
    sectionLabel: '06 — Industries',
    headline: 'Nine industries. Purpose-built capture missions.',
    cards: [
        {
            industry: 'Automotive / ADAS',
            title: 'Road-load data collection on an ADAS ECU with synchronised CAN-FD and analog capture.',
            vignette:
                'ISO 26262 field evidence from road testing. CAN-FD traffic, IMU channels, and power rails captured simultaneously at 1 kHz GPS-disciplined to UTC. Evidence imported into IV&V and mapped to ASIL-B requirements with no post-processing toolchain.',
            subsystems: ['CAN-FD (12 nodes, passive tap)', 'Analog IMU channels', 'Power rail (3 rails)', 'GPS time reference'],
            testModes: ['Continuous logging', 'Triggered event capture'],
        },
        {
            industry: 'Aerospace',
            title: 'UAV flight data recorder with FPGA-accurate timestamps and DO-178C artifact output.',
            vignette:
                'DO-178C structural-coverage evidence from UAV flight tests. UART telemetry, analog sensors, and power rails captured at each flight phase. Records exported as DO-178C artifacts with calibration provenance on every measurement channel.',
            subsystems: ['UART telemetry (4 channels)', 'Analog sensors (8 channels)', 'Power rail monitoring', 'GPS/PTP time reference'],
            testModes: ['Continuous logging', 'Certification evidence'],
        },
        {
            industry: 'Defence',
            title: 'Tactical vehicle data bus capture under MIL-STD-810 operational profiles.',
            vignette:
                'MIL-STD-810 field evidence from deployed vehicle trials. CAN-FD and UART buses passively tapped, power-rail and IMU telemetry captured, GPS-synchronised evidence trail built for programme certification review with no vehicle integration changes.',
            subsystems: ['CAN-FD (passive tap)', 'UART bus capture', 'Power-rail telemetry', 'GPS time reference'],
            testModes: ['Continuous logging', 'Triggered event capture'],
        },
        {
            industry: 'Industrial Automation',
            title: 'Safety PLC runtime monitoring and IEC 61508 evidence capture under production shifts.',
            vignette:
                'IEC 61508 SIL-2 run-time evidence from live production operation. Ethernet safety-bus traffic, digital I/O states, and power-rail quality captured continuously at 1 kHz. Automated SIL-2 evidence reports generated at end of each production shift.',
            subsystems: ['Ethernet safety bus', 'Digital I/O states', 'Power-rail quality', 'Shift-end evidence export'],
            testModes: ['Continuous logging', 'Certification evidence'],
        },
        {
            industry: 'Robotics',
            title: 'AGV navigation data collection with multi-channel CAN-FD and encoder capture.',
            vignette:
                'IEC 61508 SIL-2 run-time evidence from AGV fleet operation. CAN-FD bus traffic, encoder analog signals, and motor power rails captured at 1 kHz with 500 ms triggered windows on motor current fault events.',
            subsystems: ['CAN-FD bus capture', 'Encoder analog channels', 'Motor power rails (3)', 'Triggered fault windows'],
            testModes: ['Continuous logging', 'Triggered event capture'],
        },
        {
            industry: 'Electric Vehicles',
            title: 'EV battery pack cell telemetry logging across charge-discharge cycles for ASIL-D evidence.',
            vignette:
                'ISO 26262 ASIL-D field evidence from battery pack endurance runs. 128 analog cell channels at 1 kHz, I2C BMS bus traffic, and pack power rails captured across 500 charge-discharge cycles. GPS-synchronised records imported directly into IV&V.',
            subsystems: ['128 analog cell channels', 'I2C BMS bus', 'Pack power rails', 'GPS time reference'],
            testModes: ['Continuous logging', 'Certification evidence'],
        },
        {
            industry: 'Rail & Transportation',
            title: 'Train control system bus monitoring and EN 50128 evidence trail generation.',
            vignette:
                'EN 50128 SIL-3 operational evidence from live railway trials. Ethernet and serial safety-bus traffic monitored passively, power-rail integrity captured, append-only evidence trail built for safety authority submission with zero impact on vital systems.',
            subsystems: ['Ethernet safety bus (passive)', 'Serial bus capture', 'Power-rail integrity', 'Append-only evidence store'],
            testModes: ['Continuous logging', 'Certification evidence'],
        },
        {
            industry: 'Space & Satellite',
            title: 'Satellite telemetry downlink capture with FPGA-accurate timestamps and ECSS provenance.',
            vignette:
                'ECSS-Q-ST-60 qualification evidence from ground-station testing. SpaceWire telemetry, power-bus monitoring, and timing reference channels captured simultaneously with GPS-synchronised calibration provenance on every measurement for ECSS review.',
            subsystems: ['SpaceWire telemetry', 'Power-bus monitoring', 'Timing reference channels', 'GPS/PTP time reference'],
            testModes: ['Continuous logging', 'Certification evidence'],
        },
        {
            industry: 'Energy & Utilities',
            title: 'Smart grid edge controller event logging and IEC 62443 evidence capture.',
            vignette:
                'IEC 62443 operational evidence from grid-edge deployment. Modbus/RTU and Ethernet traffic, power-rail quality, and digital I/O states captured with triggered windows on grid disturbance events, building a tamper-evident trail for cyber-physical security review.',
            subsystems: ['Modbus/RTU bus capture', 'Ethernet traffic', 'Digital I/O states', 'Disturbance event triggers'],
            testModes: ['Continuous logging', 'Triggered event capture'],
        },
    ],
} as const;
