export const HIL_USE_CASES = {
    sectionLabel: '06 — Industries',
    headline: 'Nine industries. Purpose-built HIL test rigs.',
    cards: [
        {
            industry: 'Automotive / ADAS',
            title: 'Motor controller ECU with CAN-FD rest-of-bus emulation — ASIL-B.',
            vignette: '12 virtual CAN-FD nodes emulated with fault injection and a 25–95 °C thermal sweep; bus error rates and DUT response times mapped to ASIL-B linkage.',
        },
        {
            industry: 'Aerospace',
            title: 'UAV flight controller GPIO and UART — DO-254 fault injection.',
            vignette: 'GPIO walk, UART telemetry quality, and stuck-line faults injected at each simulated altitude step; all run records retained for structural-coverage review.',
        },
        {
            industry: 'Defence',
            title: 'Tactical radio SBC — MIL-STD-810 with active fault injection.',
            vignette: 'UART parity errors, power brown-outs, and GPIO fault states injected under combined thermal and vibration profiles for tamper-evident programme records.',
        },
        {
            industry: 'Industrial Automation',
            title: 'Safety PLC DIO and Ethernet — IEC 61508 SIL-2 closed-loop.',
            vignette: 'Field devices emulated, communication faults injected, fault-response time and recovery latency measured and captured for SIL-2 functional-safety review.',
        },
        {
            industry: 'Robotics',
            title: 'AGV motor controller plant-in-the-loop — IEC 61508 SIL-2.',
            vignette: 'Real-time motor plant model on K26 brain card with encoder emulation on AIO, peak-load fault injection, and integrity evidence captured per scenario.',
        },
        {
            industry: 'Electric Vehicles',
            title: 'EV BMS full cell pack and fault emulation — ASIL-D.',
            vignette: '96 cell channels emulated on calibrated AIO cards; overvoltage and thermal-runaway faults injected with DUT fault-response latency mapped to ASIL-D requirements.',
        },
        {
            industry: 'Rail & Transportation',
            title: 'Train control unit vital I/O and network — EN 50128 SIL-3.',
            vignette: 'Trackside sensor network emulated; communication failures and power-cycle events injected with fault-response times captured for safety authority submission.',
        },
        {
            industry: 'Space & Satellite',
            title: 'Satellite payload controller power-rail fault injection — ECSS.',
            vignette: 'Brown-out, over-voltage, and latch-up events injected on calibrated power channels; recovery timing and state-machine integrity captured across temperature.',
        },
        {
            industry: 'Energy & Utilities',
            title: 'Smart grid edge controller load step and fault injection — IEC 62443.',
            vignette: 'Modbus/RTU field devices emulated; protocol errors and power transients injected with DUT response measured under worst-case disturbance scenarios.',
        },
    ],
} as const;
