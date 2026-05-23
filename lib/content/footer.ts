export const FOOTER = {
    brand: {
        tagline: 'embedded platforms, engineered honestly.',
        description:
            'SoCcentric provides the Independent V&V Suite — platform-independent validation and verification for embedded systems. Six in-house reference platforms. Four test modes. No source-code access required.',
    },
    platforms: {
        header: 'Reference platforms',
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
            { label: 'Compliance records', href: '#evidence' },
            { label: 'Contact engineering', href: '#cta' },
            { label: '⇌ HIL platform', href: '/hil' },
            { label: '⇌ Datalogger', href: '/datalogger' },
        ],
    },
    copyright: `© SoCcentric · ${new Date().getFullYear()} :: embedded platforms, engineered honestly.`,
} as const;
