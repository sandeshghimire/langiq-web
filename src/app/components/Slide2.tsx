import { motion } from "framer-motion";
import WavyBackground from "./WavyBackground";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide2({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
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
                How we solve promblems
            </motion.h1>
            <motion.div
                className="max-w-4xl text-center relative z-10"
                variants={itemVariants}
            >
                <ul className="text-left list-disc space-y-2 inline-block mx-auto">
                    <li>A provider of an end-to-end ecosystem for building and deploying AI solutions, centered around LLMs</li>
                    <li>The creator of AI Studio (low-code development), AI Box (on-premises hardware), and specialized libraries (Prompt Engineering, RAG, Tools & MCP, LLM Augmentation, Fine-Tuning, Agents Orchestration)</li>
                    <li>A company focused on democratizing AI development while offering powerful tools for specialization and enterprise-grade deployment</li>
                    <li>A platform designed to accelerate AI innovation, ensure data sovereignty, and enhance the capabilities of LLMs for specific business needs</li>
                    <li>A partner for organizations seeking to integrate advanced AI into their operations with flexibility and control</li>
                </ul>
            </motion.div>
        </motion.div>
    );
}
