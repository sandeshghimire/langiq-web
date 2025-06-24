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
                Why do web developers need AI?
            </motion.h1>
            <motion.div
                className="max-w-4xl text-center relative z-10"
                variants={itemVariants}
            >
                <ul className="text-left list-disc space-y-2 inline-block mx-auto">
                    <li>Visual AI Builder: Low-code studio integrating multiple LLMs (OpenAI, Google, Anthropic) in one interface</li>
                    <li>Plug-and-Play Hardware: Pre-configured AI Box systems with optimized software stack ready out of the box</li>
                    <li>Modular Libraries: Python/JavaScript APIs for prompting, RAG, tools, fine-tuning, and multi-agent workflows</li>
                    <li>Data Integration: Converts documents to vector databases, generates synthetic data, fine-tunes on proprietary data</li>
                    <li>Auto App Generation: Scaffolds complete AI applications with backend, UI, and deployment from configuration settings</li>
                </ul>
            </motion.div>
        </motion.div>
    );
}
