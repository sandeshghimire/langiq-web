import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProofStrip } from "@/components/proof-strip";
import { Problem } from "@/components/problem";
import { Architecture } from "@/components/architecture";
import { TestModes } from "@/components/test-modes";
import { Platforms } from "@/components/platforms";
import { Capabilities } from "@/components/capabilities";
import { UseCases } from "@/components/use-cases";
import { Evidence } from "@/components/evidence";
import { FaqSection } from "@/components/faq";
import { CtaSection } from "@/components/cta";
import { Footer } from "@/components/footer";
import {
    DATALOGGER_NAV,
    DATALOGGER_HERO,
    DATALOGGER_PROOF_STRIP,
    DATALOGGER_PROBLEM,
    DATALOGGER_ARCHITECTURE,
    DATALOGGER_TEST_MODES,
    DATALOGGER_PLATFORMS,
    DATALOGGER_CAPABILITIES,
    DATALOGGER_USE_CASES,
    DATALOGGER_EVIDENCE,
    DATALOGGER_FAQ,
    DATALOGGER_CTA,
    DATALOGGER_FOOTER,
} from "@/lib/content/datalogger";

export const metadata = {
    title: "Datalogger — Silicon-Native Data Acquisition | SoCcentric",
    description:
        "SoCcentric's Datalogger: multi-channel, FPGA-accurate data acquisition and logging for embedded systems. Calibrated, append-only, certification-ready evidence.",
};

export default function DataloggerPage() {
    return (
        <div data-product="datalogger">
            <Nav product="datalogger" content={DATALOGGER_NAV} />
            <main>
                <Hero content={DATALOGGER_HERO} />
                <ProofStrip content={DATALOGGER_PROOF_STRIP} />
                <Problem content={DATALOGGER_PROBLEM} />
                <Architecture content={DATALOGGER_ARCHITECTURE} />
                <TestModes content={DATALOGGER_TEST_MODES} />
                <Platforms content={DATALOGGER_PLATFORMS} />
                <Capabilities content={DATALOGGER_CAPABILITIES} />
                <UseCases content={DATALOGGER_USE_CASES} />
                <Evidence content={DATALOGGER_EVIDENCE} />
                <FaqSection content={DATALOGGER_FAQ} />
                <CtaSection content={DATALOGGER_CTA} />
            </main>
            <Footer content={DATALOGGER_FOOTER} productName="Datalogger" />
        </div>
    );
}
