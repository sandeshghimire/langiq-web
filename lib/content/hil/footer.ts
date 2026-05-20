export const HIL_FOOTER = {
    brand: {
        description:
            'SoCcentric HIL is a modular Hardware-in-the-Loop test platform purpose-built to validate embedded systems on SoCcentric compute platforms. Three chassis tiers. Six platform adapters. Five extension card types. Same Yocto BSP. Same IV&V framework.',
    },
    platforms: {
        header: 'Platform adapters',
        links: [
            { label: 'Arches (NVIDIA Jetson)', href: '#platforms' },
            { label: 'Acadia (RPi CM)', href: '#platforms' },
            { label: 'Zion (Zynq)', href: '#platforms' },
            { label: 'Pinnacle (NXP i.MX)', href: '#platforms' },
            { label: 'Joshua (TI Sitara)', href: '#platforms' },
            { label: 'Sequoia (x86)', href: '#platforms' },
        ],
    },
    resources: {
        header: 'Resources',
        links: [
            { label: 'Connect', href: '#cta' },
            { label: 'Architecture', href: '#architecture' },
            { label: 'Certification evidence', href: '#evidence' },
            { label: 'Contact engineering', href: '#cta' },
        ],
    },
    copyright: `© silicon-centric${new Date().getFullYear()} :: BUILT FOR ENGINEERS`,
} as const;
