/**
 * JSON-LD structured data injected into <head> via layout.tsx.
 * Schemas: Organization, WebSite (with SearchAction), WebPage,
 *          SoftwareApplication, and FAQPage.
 */

const SITE_URL = "https://ivv.siliconcentric.com";

const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "siliconcentric",
    url: SITE_URL,
    logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
    },
    description:
        "Siliconcentric builds silicon-native test platforms for embedded systems: IV&V for autonomous evidence-generating validation, HIL for modular hardware-in-the-loop testing, and Datalogger for multi-channel FPGA-accurate data acquisition.",
    sameAs: [] as string[],
};

const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "siliconcentric",
    description:
        "Platform-independent validation and verification for embedded systems.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
    },
};

const webpage = {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Independent Validation & Verification for Embedded Systems — siliconcentric",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    description:
        "The Independent V&V Suite validates every embedded platform — Yocto Linux or FreeRTOS bare-metal — across compute, peripherals, sensors, and environmental conditions. No source-code access required. Evidence for ISO 26262, DO-178C, IEC 62304, and IEC 61508.",
    inLanguage: "en-US",
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
            },
        ],
    },
};

const softwareApplication = {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: "Siliconcentric Platform Suite",
    applicationCategory: "DeveloperApplication",
    operatingSystem: ["Linux", "FreeRTOS", "Yocto"],
    offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "USD",
        url: `${SITE_URL}/#cta`,
    },
    provider: { "@id": `${SITE_URL}/#organization` },
    description:
        "Platform-independent V&V suite for embedded systems. Validates compute, peripherals, sensors, perception, and environmental conditions. FlatBuffers and gRPC transports. Evidence for ISO 26262, DO-178C, IEC 62304, IEC 61508.",
    featureList: [
        "Yocto Linux and FreeRTOS bare-metal support",
        "FlatBuffers transport for bare-metal targets",
        "gRPC transport for Linux targets",
        "Six in-house reference platforms",
        "Three test modes: one-shot, monitoring, event-based",
        "Five coverage tiers: compute, peripherals, sensors, perception, environmental",
        "No source-code access required",
        "Evidence for ISO 26262, DO-178C, IEC 62304, IEC 61508",
        "Append-only evidence database",
        "Machine-readable JSON and PDF export",
    ],
};

const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you need access to our source code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. The suite validates the hardware and its components from the outside via the target client and HAL adapter. We exercise peripherals, buses, compute elements, and environmental responses without reading your application code or BSP. Your IP stays with your team.",
            },
        },
        {
            "@type": "Question",
            name: "Will this interfere with our development workflow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. The IV&V stack runs on its own server, against its own target client on the DUT, on its own cadence. It does not share a build system, CI pipeline, or version control history with your development process. Both can run concurrently against the same hardware.",
            },
        },
        {
            "@type": "Question",
            name: "Which operating systems does the target client support?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "FreeRTOS for bare-metal and RTOS targets; Yocto-based Linux for embedded Linux targets. The transport layer matches: FlatBuffers for FreeRTOS bare-metal; gRPC for Yocto Linux targets. Porting the target client to a new platform requires implementing the HAL adapter — typically a few weeks for a well-documented SoC.",
            },
        },
        {
            "@type": "Question",
            name: "How does environmental testing work — temperature, humidity, pressure?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Environmental conditions are authored as test parameters in the Web UI and dispatched to the server, which coordinates the run against the device inside the chamber. Monitoring mode streams telemetry continuously as conditions ramp. Event-based mode fires when a configured threshold is crossed. All conditions, readings, and trigger events are persisted in the evidence database.",
            },
        },
        {
            "@type": "Question",
            name: "What does the evidence trail look like for a certification review?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Every run record includes: operator identity and timestamps on every state change, firmware and schema versions snapshotted at run start, three-stamp timing on every cross-boundary measurement, and explicit drop counts. The database is append-only. Evidence is reviewable in the Web UI and exportable as machine-readable JSON or auditor-friendly PDF.",
            },
        },
        {
            "@type": "Question",
            name: "How does evidence map to ISO 26262, DO-178C, IEC 62304, and IEC 61508?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ISO 26262: fault-injection results, coverage evidence, and test-to-requirement linkage. DO-178C / DO-254: structural test artifacts and repeatable build-and-run records. IEC 62304 / FDA: lifecycle-aligned logs and software-of-unknown-provenance mitigation evidence. IEC 61508: functional-safety integrity evidence and environmental-stress test records.",
            },
        },
        {
            "@type": "Question",
            name: "Our platform is not one of your six reference boards. Can you still help?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The HAL adapter is the only platform-specific component. Porting it to a new SoC typically takes a few weeks for a well-documented part. Everything above — test orchestration, server, evidence store, Web UI — carries forward unchanged. Bring us your hardware and we will scope the adapter work.",
            },
        },
    ],
};

const graph = [organization, website, webpage, softwareApplication, faqPage];

export function JsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
            }}
        />
    );
}
