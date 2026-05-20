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
import { HilArchitectureDiagram } from "@/components/hil-architecture-diagram";
import {
    HIL_NAV,
    HIL_HERO,
    HIL_PROOF_STRIP,
    HIL_PROBLEM,
    HIL_ARCHITECTURE,
    HIL_TEST_MODES,
    HIL_PLATFORMS,
    HIL_CAPABILITIES,
    HIL_USE_CASES,
    HIL_EVIDENCE,
    HIL_FAQ,
    HIL_CTA,
    HIL_FOOTER,
} from "@/lib/content/hil";

export const metadata = {
    title: "HIL — Hardware-in-the-Loop Test Platform | SoCcentric",
    description:
        "SoCcentric's HIL platform: modular, slot-based hardware-in-the-loop testing on real silicon with native IV&V integration.",
};

export default function HilPage() {
    return (
        <>
            <Nav product="hil" content={HIL_NAV} />
            <main>
                <Hero content={HIL_HERO} />
                <ProofStrip content={HIL_PROOF_STRIP} />
                <Problem content={HIL_PROBLEM} />
                <Architecture content={HIL_ARCHITECTURE} diagram={<HilArchitectureDiagram />} />
                <TestModes content={HIL_TEST_MODES} />
                <Platforms content={HIL_PLATFORMS} />
                <Capabilities content={HIL_CAPABILITIES} />
                <UseCases content={HIL_USE_CASES} />
                <Evidence content={HIL_EVIDENCE} />
                <FaqSection content={HIL_FAQ} />
                <CtaSection content={HIL_CTA} />
            </main>
            <Footer content={HIL_FOOTER} productName="HIL" />
        </>
    );
}
