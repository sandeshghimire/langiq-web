export const DATALOGGER_FOOTER = {
    brand: {
        description:
            'SoCcentric develops custom dataloggers for long-term data collection across many industries. 11 sensors standard. 15 verticals. One data format. Native IV&V node — bench to field and back.',
    },
    platforms: {
        header: 'Interfaces',
        links: [
            { label: 'Web UI', href: '#platforms' },
            { label: 'NFC quick-connect', href: '#platforms' },
            { label: 'loggerLib SDK', href: '#platforms' },
            { label: 'Cross-platform GUI', href: '#platforms' },
            { label: 'Cloud connectivity', href: '#platforms' },
        ],
    },
    resources: {
        header: 'Resources',
        links: [
            { label: 'Connect', href: '#cta' },
            { label: 'Architecture', href: '#architecture' },
            { label: 'Compliance', href: '#evidence' },
            { label: 'Contact engineering', href: '#cta' },
            { label: '⇌ IV&V platform', href: '/ivv' },
            { label: '⇌ HIL platform', href: '/hil' },
        ],
    },
    copyright: `© SoCcentric · ${new Date().getFullYear()} :: BUILT FOR ENGINEERS`,
} as const;
