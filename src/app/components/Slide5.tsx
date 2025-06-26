import { motion } from "framer-motion";
import WavyBackground from "./WavyBackground";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide4({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
    return (
        <motion.div
            ref={setRef}
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-transparent backdrop-blur-sm px-4 md:px-12 relative border border-gray-200/10"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <WavyBackground />
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-center relative z-10"
                variants={itemVariants}
            >
                LangIQ Advantages
            </motion.h1>
            <motion.div
                className="max-w-4xl text-center relative z-10"
                variants={itemVariants}
            >
                <div className="text-left space-y-2 inline-block mx-auto">
                    <div><strong>Comprehensive Ecosystem:</strong> Offers an end-to-end suite of tools and solutions for developing custom enterprise-grade LLM applications through integrated workflows, from development to secure deployment and management.</div>
                    <div><strong>Accelerated Innovation:</strong> Significantly reduces development time and complexity through visual tools, pre-built secure components, and optimized libraries, enabling faster time-to-market with built-in privacy safeguards.</div>
                    <div><strong>Enterprise-Grade Security:</strong> Delivers robust, scalable, and secure solutions with advanced data protection, encryption, and privacy controls for demanding organizational needs, including data sovereignty (AI in a Box).</div>
                    <div><strong>Enhanced AI with Data Safety:</strong> Enables creation of highly accurate, context-aware AI applications by securely grounding LLMs with proprietary data, ensuring data privacy, compliance, and allowing deep model customization without data exposure.</div>
                    <div><strong>Privacy-First Flexibility:</strong> Provides vendor flexibility for LLMs with zero-trust security architecture, full data control, and complete privacy protection when using AI in a Box, preventing vendor lock-in and data breaches.</div>
                </div>
            </motion.div>
        </motion.div>
    );
}
