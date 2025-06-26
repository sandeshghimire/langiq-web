import { motion } from "framer-motion";
import WavyBackground from "./WavyBackground";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide3({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
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
                Why langIQ ?
            </motion.h1>
            <motion.div
                className="max-w-4xl text-center relative z-10"
                variants={itemVariants}
            >
                <ul className="text-left space-y-2 inline-block mx-auto">
                    <li>Organizations struggle with developing custom enterprise-grade LLM applications that require complex workflow integration and specialized expertise</li>
                    <li>Generic AI models often lack the specific knowledge, context, and capabilities needed for enterprise business tasks and proprietary data integration</li>
                    <li>There's a growing need for faster LLM workflow development, better collaboration, and more control over AI infrastructure, data safety, security, and privacy</li>
                    <li>Integrating diverse LLMs into cohesive workflows, managing prompts, ensuring accuracy, and enabling AI to perform enterprise-grade actions are significant challenges</li>
                    <li>Businesses require scalable, reliable, and customizable LLM applications that can evolve with their enterprise needs and provide a competitive edge</li>
                </ul>
            </motion.div>
        </motion.div>
    );
}
