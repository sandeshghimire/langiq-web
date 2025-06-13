import { motion } from "framer-motion";

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
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-transparent backdrop-blur-sm px-4 md:px-12 relative border border-gray-200/20"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-center"
                variants={itemVariants}
            >
                Why do web developers need AI?
            </motion.h1>
            <motion.div
                className="max-w-7xl text-center"
                variants={itemVariants}
            >
                <ul className="text-left list-disc space-y-2 inline-block mx-auto text-lg">
                    <li>To enhance accuracy and contextual relevance: RAG allows LLMs to generate answers that are more precise and fitting to the specific context by pulling information from a verified knowledge base.</li>
                    <li>To ground LLM responses in proprietary data: It enables organizations to leverage their own unique documents, databases, and internal information, making the LLM's output specific and valuable to their operations.</li>
                    <li>To reduce LLM "hallucinations": By providing LLMs with relevant factual data before generation, RAG helps minimize the instances where models produce incorrect or fabricated information.</li>
                    <li>To enable personalized AI interactions: Using RAG with specific datasets allows for the creation of AI experiences tailored to individual user needs or organizational contexts.</li>
                    <li>To empower data-driven applications: RAG is crucial for building applications like knowledge-base bots, Q&A systems, and context-aware assistants that require responses based on specific, retrievable information rather than just general pre-trained knowledge.</li>
                </ul>
            </motion.div>
        </motion.div>
    );
}
