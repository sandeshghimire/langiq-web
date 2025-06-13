import { motion } from "framer-motion";

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
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-transparent backdrop-blur-sm px-4 md:px-12 relative border border-gray-200/20"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-center"
                variants={itemVariants}
            >
                How we solve promblems
            </motion.h1>
            <motion.div
                className="max-w-7xl text-center"
                variants={itemVariants}
            >
                <ul className="text-left list-disc space-y-2 inline-block mx-auto text-lg">
                    <li>Dedicated RAG Library: LangIQ.ai offers a specific "LangIQ RAG Library" providing tools to build robust vector search and retrieval pipelines, enabling LLMs to access external knowledge.</li>
                    <li>Integrated AI Studio Capability: Its AI Studio Platform features "Vector Database & Knowledge Management" to ingest diverse data into optimized vector databases, directly facilitating RAG for contextually relevant answers.</li>
                    <li>Visual RAG Pipeline Construction: Within the AI Studio, users can employ graphical workflow tools to visually construct and implement RAG pipelines without extensive manual coding.</li>
                    <li>Data Ingestion and Vectorization: The platform supports ingesting various data formats (documents, PDFs, databases) and converts them into vector embeddings, making them searchable for RAG applications through connectors to vector and traditional databases.</li>
                    <li>Semantic Search for Augmentation: LangIQ's RAG systems perform semantic searches on these vectorized knowledge bases to retrieve relevant information, which is then used to augment LLM responses, enhancing accuracy and reducing hallucinations.</li>
                </ul>
            </motion.div>
        </motion.div>
    );
}
