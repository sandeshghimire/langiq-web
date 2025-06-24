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
                LangIQ Solutions?
            </motion.h1>
            <motion.div
                className="max-w-4xl text-center relative z-10"
                variants={itemVariants}
            >
                <ul className="text-left space-y-2 inline-block mx-auto">
                    <li>By offering a unified suite of interconnected tools that streamline the entire AI development workflow, from ideation to production</li>
                    <li>Provides a low-code visual environment (AI Studio) to make AI accessible to broader teams and speed up development</li>
                    <li>Delivers dedicated hardware solutions (AI Box) for organizations requiring on-premises deployment, data sovereignty, and optimized performance</li>
                    <li>Offers specialized libraries that abstract complexities, enhance LLM capabilities with proprietary data (RAG), external tools (Tools & MCP), domain knowledge (Augmentation), and enable complex coordination (Agents)</li>
                    <li>Supports model customization (Fine-Tuning) and efficient LLM interaction (Prompt Engineering) to create highly tailored and effective AI applications</li>
                </ul>
            </motion.div>
        </motion.div>
    );
}
