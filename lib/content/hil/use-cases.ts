export const HIL_USE_CASES = {
    sectionLabel: '06 — Industries',
    headline: 'Nine industries. Purpose-built HIL test rigs.',
    cards: [
        {
            industry: 'Automotive / ADAS',
            title: 'Motor controller ECU with CAN-FD rest-of-bus emulation under thermal cycling.',
            vignette:
                'ISO 26262 ASIL-B evidence for an ADAS ECU with 12 virtual CAN-FD nodes. Fault scenarios and a 25-95 deg C thermal sweep captured bus error rates and DUT response times mapped to ASIL-B test-to-requirement linkage.',
            subsystems: ['CAN-FD (12 virtual nodes)', 'DUT power conditioning', 'DIO fault injection', 'Thermal monitoring'],
            testModes: ['Fault injection', 'Certification evidence'],
        },
        {
            industry: 'Aerospace',
            title: 'UAV flight controller GPIO and UART validation with fault injection across altitude.',
            vignette:
                'DO-254 hardware artifact evidence for a Zion platform flight controller. GPIO walk, UART telemetry quality, and stuck-line fault injection at each simulated altitude step with all run records retained for structural-coverage review.',
            subsystems: ['GPIO (DIO card)', 'UART telemetry link', 'Stuck-line fault injection', 'Pressure simulation'],
            testModes: ['Firmware bring-up', 'Certification evidence'],
        },
        {
            industry: 'Defence',
            title: 'Tactical radio SBC serial bus and power fault injection under MIL-STD profiles.',
            vignette:
                'MIL-STD-810 environment evidence with active fault injection for a deployed tactical radio SBC. UART parity errors, power brown-outs, and GPIO fault states injected under combined thermal and vibration profiles.',
            subsystems: ['UART fault injection', 'Power brown-out inject', 'GPIO fault states', 'Thermal/vibration chamber'],
            testModes: ['Fault injection', 'Certification evidence'],
        },
        {
            industry: 'Industrial Automation',
            title: 'Safety PLC digital I/O and Ethernet bus with fault injection for IEC 61508 SIL-2.',
            vignette:
                'IEC 61508 SIL-2 closed-loop rig evidence for a safety PLC DIO and Ethernet safety bus. The HIL emulated field devices, injected communication faults, and measured fault-response time and recovery latency for SIL-2 review.',
            subsystems: ['DIO field device emulation', 'Ethernet safety bus', 'Fault-response timing', 'Recovery latency'],
            testModes: ['Bus emulation', 'Fault injection'],
        },
        {
            industry: 'Robotics',
            title: 'AGV motor controller plant-in-the-loop with encoder and load emulation.',
            vignette:
                'IEC 61508 SIL-2 closed-loop evidence for an AGV motor controller at 10 kHz loop closure. Real-time motor plant model, encoder feedback emulation on the AIO card, and peak-load fault injection with integrity evidence captured per scenario.',
            subsystems: ['Motor encoder emulation (AIO)', 'Real-time plant model', 'Peak-load fault inject', 'CAN-FD status bus'],
            testModes: ['Bus emulation', 'Fault injection'],
        },
        {
            industry: 'Electric Vehicles',
            title: 'EV battery management system with full cell pack and fault emulation.',
            vignette:
                'ISO 26262 ASIL-D closed-loop evidence for an EV BMS ECU with 96 cell channels emulated on calibrated AIO cards. Cell-overvoltage and thermal-runaway faults injected with DUT fault-response latency mapped to ASIL-D test requirements.',
            subsystems: ['96-channel cell emulation (AIO)', 'Overvoltage fault inject', 'Thermal-runaway simulation', 'DUT response latency'],
            testModes: ['Synthetic injection', 'Fault injection'],
        },
        {
            industry: 'Rail & Transportation',
            title: 'Train control unit vital I/O and network validation under EN 50128 SIL-3.',
            vignette:
                'EN 50128 SIL-3 closed-loop HIL evidence for a vital train control unit. Trackside sensor network emulated, communication failures and power-cycle events injected, fault-response times captured for safety authority submission.',
            subsystems: ['Trackside sensor emulation', 'Communication fault inject', 'Power-cycle events', 'Vital I/O (DIO card)'],
            testModes: ['Bus emulation', 'Certification evidence'],
        },
        {
            industry: 'Space & Satellite',
            title: 'Satellite payload controller power-rail fault injection and recovery validation.',
            vignette:
                'ECSS evidence for a LEO satellite payload controller power-rail fault handling and recovery sequencing. Brown-out, over-voltage, and latch-up events injected on calibrated power channels with recovery timing captured across temperature.',
            subsystems: ['Power channel injection', 'Brown-out / OVP / latch-up', 'Recovery sequence capture', 'Temperature cycling'],
            testModes: ['Fault injection', 'Certification evidence'],
        },
        {
            industry: 'Energy & Utilities',
            title: 'Smart grid edge controller load step and communication fault injection.',
            vignette:
                'IEC 62443 evidence with realistic load-step and communication fault emulation for a grid-edge controller. Modbus/RTU field devices emulated, protocol errors and power transients injected, DUT response measured under worst-case disturbance scenarios.',
            subsystems: ['Modbus/RTU device emulation', 'Protocol fault injection', 'Power transients', 'DUT response timing'],
            testModes: ['Bus emulation', 'Fault injection'],
        },
    ],
} as const;
