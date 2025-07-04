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
                What is Lang-IQ ?
            </motion.h1>
            <motion.div
                className="max-w-4xl text-center relative z-10"
                variants={itemVariants}
            >
                <div className="text-left space-y-4 inline-block mx-auto">
                    <p>We provide an end-to-end ecosystem for building and deploying AI solutions, centered around LLMs, with a strong emphasis on data safety, security, and privacy.</p>
                    <p>We created AI Studio (low-code development), AI in a Box (on-premises hardware), and specialized libraries (Prompt Engineering, RAG, Tools & MCP, LLM Augmentation, Fine-Tuning, LLM Agents & Agentic Solutions ).</p>
                    <p>We focus on democratizing AI development while offering powerful tools for specialization and enterprise-grade deployment, ensuring your data remains protected at every stage.</p>
                    <p>Our platform is designed to accelerate AI innovation, ensure data sovereignty, and enhance the capabilities of LLMs for specific business needs, all while maintaining strict privacy and security standards.</p>
                    <p>We partner with organizations seeking to integrate advanced AI into their operations with flexibility, control, and confidence in the safety of their information.</p>
                </div>
            </motion.div>
        </motion.div>
    );
}
