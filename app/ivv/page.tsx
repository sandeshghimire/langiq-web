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

export const metadata = {
    title: "IV&V — Independent Verification & Validation | SoCcentric",
    description:
        "SoCcentric's IV&V platform: autonomous, evidence-generating test for embedded systems on real silicon.",
};

export default function IvvPage() {
    return (
        <div data-product="ivv">
            <Nav product="ivv" />
            <main>
                <Hero />
                <ProofStrip />
                <Problem />
                <Architecture />
                <TestModes />
                <Platforms />
                <Capabilities />
                <UseCases />
                <Evidence />
                <FaqSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
}
