export const FAQ = {
    sectionLabel: '08 — FAQ',
    headline: 'Engineering questions, answered straight.',
    items: [
        {
            question: 'Do you need access to our source code?',
            answer:
                'No. The suite validates the hardware and its components from the outside via the target client and HAL adapter. We exercise peripherals, buses, compute elements, and environmental responses without reading your application code or BSP. Your IP stays with your team.',
        },
        {
            question: 'Will this interfere with our development workflow?',
            answer:
                'No. The IV&V stack runs on its own server, against its own target client on the DUT, on its own cadence. It does not share a build system, CI pipeline, or version control history with your development process. Both can run concurrently against the same hardware.',
        },
        {
            question: 'Which operating systems does the target client support?',
            answer:
                'FreeRTOS for bare-metal and RTOS targets; Yocto-based Linux for embedded Linux targets. The transport layer matches: FlatBuffers for FreeRTOS bare-metal (compact binary, no dynamic allocation); gRPC for Yocto Linux targets. Porting the target client to a new platform requires implementing the HAL adapter — typically a few weeks for a well-documented SoC.',
        },
        {
            question: 'How does environmental testing work — temperature, humidity, pressure?',
            answer:
                'Environmental conditions are authored as test parameters in the Web UI and dispatched to the server, which coordinates the run against the device inside the chamber. Monitoring mode streams telemetry continuously as conditions ramp. Event-based mode fires when a configured threshold is crossed — for example, a bus error rate that spikes above a limit during a humidity sweep. All conditions, readings, and trigger events are persisted in the evidence database.',
        },
        {
            question: 'What does the evidence trail look like for a certification review?',
            answer:
                'Every run record includes: operator identity and timestamps on every state change, firmware and schema versions snapshotted at run start, three-stamp timing on every cross-boundary measurement (origin, relay, server-ingress), and explicit drop counts so any data gap is reported numerically. The database is append-only — runs are invalidated with a recorded reason, never silently deleted. Evidence is reviewable in the Web UI and exportable as machine-readable JSON or auditor-friendly PDF.',
        },
        {
            question: 'How does evidence map to ISO 26262, DO-178C, IEC 62304, and IEC 61508?',
            answer:
                'Each framework maps to a specific artifact type the suite produces. ISO 26262: fault-injection results, coverage evidence, and test-to-requirement linkage. DO-178C / DO-254: structural test artifacts and repeatable build-and-run records. IEC 62304 / FDA: lifecycle-aligned logs and software-of-unknown-provenance mitigation evidence. IEC 61508: functional-safety integrity evidence and environmental-stress test records. We scope the evidence mapping to your program\'s specific standard before a run begins.',
        },
        {
            question: 'Our platform is not one of your six reference boards. Can you still help?',
            answer:
                'Yes. The HAL adapter is the only platform-specific component. Porting it to a new SoC typically takes a few weeks for a well-documented part. Everything above — test orchestration, server, evidence store, Web UI — carries forward unchanged. Bring us your hardware and we will scope the adapter work.',
        },
    ],
} as const;
