export const DATALOGGER_FOOTER = {
    brand: {
        description:
            'SoCcentric Datalogger is a silicon-native data acquisition and logging platform purpose-built for embedded systems evidence. Multi-channel analog, digital, and bus capture. FPGA-accurate timestamps. Append-only evidence. Same IV&V framework.',
    },
    platforms: {
        header: 'Channel interfaces',
        links: [
            { label: 'Analog In', href: '#platforms' },
            { label: 'Digital In', href: '#platforms' },
            { label: 'Bus Capture', href: '#platforms' },
            { label: 'Power Monitor', href: '#platforms' },
            { label: 'GPS / PTP', href: '#platforms' },
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
            { label: '⇌ HIL platform', href: '/hil' },
        ],
    },
    copyright: `© silicon-centric · ${new Date().getFullYear()} :: BUILT FOR ENGINEERS`,
} as const;
