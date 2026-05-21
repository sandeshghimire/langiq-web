export const HIL_FOOTER = {
    brand: {
        description:
            'SoCcentric HIL is a modular Hardware-in-the-Loop test platform purpose-built to validate embedded systems on SoCcentric compute platforms. Three chassis tiers. Six platform adapters. Five extension card types. Same Yocto BSP. Same IV&V framework.',
    },
    platforms: {
        header: 'Platform adapters',
        links: [
            { label: 'Arches', href: '#platforms' },
            { label: 'Acadia', href: '#platforms' },
            { label: 'Zion', href: '#platforms' },
            { label: 'Pinnacle', href: '#platforms' },
            { label: 'Joshua', href: '#platforms' },
            { label: 'Sequoia', href: '#platforms' },
        ],
    },
    resources: {
        header: 'Resources',
        links: [
            { label: 'Connect', href: '#cta' },
            { label: 'Architecture', href: '#architecture' },
            { label: 'Certification evidence', href: '#evidence' },
            { label: 'Contact engineering', href: '#cta' },
            { label: '⇌ IV&V platform', href: '/ivv' },
            { label: '⇌ Datalogger', href: '/datalogger' },
        ],
    },
    copyright: `© silicon-centric · ${new Date().getFullYear()} :: BUILT FOR ENGINEERS`,
} as const;
