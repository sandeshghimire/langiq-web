export const HIL_PROBLEM = {
    sectionLabel: '01 — Real silicon. Real signals.',
    headline: {
        before: 'First test in minutes,',
        accent: 'not weeks.',
        after: 'On real silicon.',
    },
    body: [
        'No vendor lock-in. No proprietary RTOS. No unfamiliar toolchain. The siliconcentric HIL is built on the same Kria K26 SoM, the same Yocto BSP, and the same IV&V framework already running in your program. Your engineers already know the stack.',
        'The HIL is the seventh siliconcentric platform — a slot-based chassis with a fixed brain card, swappable platform adapter boards, and an extension-card catalog. Every interface beyond the common-denominator base is a card you choose.',
    ],
    failureModes: [
        {
            label: 'Real silicon, not simulation',
            description:
                'Your DUT runs its real firmware against real electrical signals. No SPICE model, no emulation layer, no "it works in sim" surprises on first board-bring-up.',
        },
        {
            label: 'Native IV&V integration',
            description:
                'The HIL is a peripheral of the IV&V platform, not a separate tool. Test orchestration, evidence database, and Web UI carry forward unchanged.',
        },
        {
            label: 'Calibrated and audit-ready',
            description:
                'Every measurement channel is calibrated and traceable. Certification mode — with signed, timestamped, requirement-mapped reports — is standard, not an upgrade.',
        },
    ],
} as const;
