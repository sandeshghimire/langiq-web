import { motion } from "framer-motion";
import WavyBackground from "./WavyBackground";

interface Slide4Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide4({ slideVariants, itemVariants, isActive, setRef }: Slide4Props) {
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
                    <li>By offering a unified suite of interconnected tools that streamline the entire custom enterprise-grade LLM application workflow, from ideation to production with data safety and security at its core</li>
                    <li>Provides a low-code visual environment (AI Studio) to make secure AI accessible to broader teams while maintaining enterprise privacy standards</li>
                    <li>Delivers dedicated hardware solutions (AI in a Box) for organizations requiring on-premises deployment, data sovereignty, and optimized performance with complete data privacy</li>
                    <li>Offers specialized libraries that abstract complexities, enhance LLM capabilities with proprietary data (RAG), external tools (Tools & MCP), domain knowledge (Augmentation), and enable secure complex coordination (Agents)</li>
                    <li>Supports model customization (Fine-Tuning) and efficient LLM interaction (Prompt Engineering) to create highly tailored, secure, and effective enterprise AI applications</li>
                </ul>
            </motion.div>
        </motion.div>
    );
}
