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
                    <div><strong>Comprehensive Ecosystem:</strong> Offers an end-to-end suite of tools and solutions covering the entire AI application lifecycle, from development to deployment and management.</div>
                    <div><strong>Accelerated Innovation:</strong> Significantly reduces development time and complexity through visual tools, pre-built components, and optimized libraries, enabling faster time-to-market.</div>
                    <div><strong>Enterprise-Grade Solutions:</strong> Delivers robust, scalable, and secure solutions tailored for demanding organizational needs, including options for data sovereignty (AI Box) and fine-grained control.</div>
                    <div><strong>Enhanced AI Capabilities & Accuracy:</strong> Enables the creation of highly accurate, context-aware, and specialized AI applications by grounding LLMs with proprietary data, integrating external tools, and allowing deep model customization.</div>
                    <div><strong>Flexibility and Control:</strong> Provides vendor flexibility for LLMs, customization options across the stack, and full control over AI infrastructure when using AI Box, preventing vendor lock-in.</div>
                </div>
            </motion.div>
        </motion.div>
    );
}
