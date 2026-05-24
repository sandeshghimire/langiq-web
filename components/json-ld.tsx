/**
 * JSON-LD structured data injected into <head> via layout.tsx.
 * Schemas: Organization, WebSite (with SearchAction), WebPage,
 *          SoftwareApplication, and FAQPage.
 */

const SITE_URL = "https://soccentric.com";

const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "SoCcentric",
    url: SITE_URL,
    logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
    },
    description:
        "SoCcentric builds embedded validation platforms: IV&V for independent test on real silicon, HIL for hardware-in-the-loop with real-world fault injection, and Datalogger for field capture. One BSP, one data format, one audit-survivable records store across all three.",
    sameAs: [] as string[],
};

const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "SoCcentric",
    description:
        "Independent validation, hardware-in-the-loop, and field capture for embedded systems — on one shared platform.",
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
    name: "SoCcentric — IV&V, HIL & Datalogger for embedded validation",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    description:
        "Validate every part of your board — and walk into the audit with the records to prove it. Independent V&V, HIL with bit-level fault injection, and field capture that replays as a HIL stimulus. Records mapped to ISO 26262, DO-178C, IEC 62304, IEC 61508.",
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
    name: "SoCcentric Platform Suite",
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
        "Independent V&V, hardware-in-the-loop, and field data capture for embedded systems. Validates compute, memory, peripherals, busses, sensors, perception, power, and environmental conditions. Audit-survivable records for ISO 26262, DO-178C, IEC 62304, IEC 61508.",
    featureList: [
        "Independent by construction — our own OS and HAL, no source-code access",
        "Six home-grown reference platforms covering ~90% of embedded silicon families",
        "Four test modes including long-running endurance soaks",
        "Hardware-in-the-loop with bit-level fault injection and microsecond timing",
        "Field capture that replays as a HIL stimulus at original timing",
        "One BSP, one protocol library, one data format, one records store, one console",
        "Append-only test records with three-stamp timing and operator attribution",
        "Records mapped to ISO 26262, DO-178C, IEC 62304, IEC 61508",
        "On-prem AI assist — anomaly flagging and report drafts; engineers own conclusions",
        "Configure-to-order — pay for the channels and protocols you use",
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
                text: "No. Our OS and HAL form a neutral stack that exercises your hardware from the outside. We test peripherals, busses, compute, sensors, and environmental response without reading your application code or BSP. The independence cert regimes require is built in by construction.",
            },
        },
        {
            "@type": "Question",
            name: "Will this interfere with our development workflow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. The validation stack runs on its own server, against its own neutral client on the board, on its own cadence. It does not share a build system, CI pipeline, or version control history with your development process. Both can run concurrently against the same hardware.",
            },
        },
        {
            "@type": "Question",
            name: "What does the audit trail look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Every run record includes operator identity and timestamps on every state change, firmware and schema versions snapshotted at run start, three-stamp timing on every cross-boundary measurement, and explicit drop counts. The store is append-only — invalidations are recorded with reason, never silent deletes. Records are reviewable in the console and exportable as machine-readable JSON or auditor-friendly PDF.",
            },
        },
        {
            "@type": "Question",
            name: "How do records map to ISO 26262, DO-178C, IEC 62304, and IEC 61508?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ISO 26262: fault-injection results, coverage records, and test-to-requirement linkage. DO-178C / DO-254: structural test artifacts and repeatable build-and-run records. IEC 62304 / FDA: lifecycle-aligned logs and software-of-unknown-provenance mitigation artifacts. IEC 61508: functional-safety integrity records and environmental-stress test artifacts.",
            },
        },
        {
            "@type": "Question",
            name: "Our board is not one of your six platforms. Can you still help?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Almost certainly yes. Our six platforms span the silicon families behind roughly 90% of embedded designs, so your board is very likely a derivative of one. The HAL is the only platform-specific component; porting it to your exact part is a short step, not a rebuild. Everything above — test orchestration, server, records store, console — carries forward unchanged.",
            },
        },
        {
            "@type": "Question",
            name: "Can the AI assist run fully on-prem?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The LLM that flags anomalies and drafts reports runs locally — no cloud required — so the platform is suitable for classified, regulated, and air-gapped programs. The AI assists the engineer; the engineer owns every conclusion that goes into a certification submission.",
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
