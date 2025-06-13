import { motion } from "framer-motion";

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
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-transparent backdrop-blur-sm px-4 md:px-12 relative border border-gray-200/20"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-center"
                variants={itemVariants}
            >
                Advantages of Our Approach
            </motion.h1>
            <motion.div
                className="max-w-7xl text-center"
                variants={itemVariants}
            >
                <ul className="text-left list-disc space-y-2 inline-block mx-auto text-lg text-xl">
                    <li>Enhances Platform Value for Clients: By incorporating RAG, LangIQ.ai provides its clients with tools to build more accurate, reliable, and trustworthy LLM applications, directly addressing common concerns like hallucinations and making their overall platform more attractive.</li>
                    <li>Caters to Critical Enterprise Needs: RAG allows organizations to securely leverage their own proprietary data, which is a key requirement for many businesses wanting to personalize AI or use it for internal knowledge management. LangIQ.ai facilitates this directly.</li>
                    <li>Expands Solution Capabilities: Offering RAG enables LangIQ.ai to support a broader range of practical, high-value applications for its users, such as sophisticated knowledge-base bots, data-driven Q&A systems, and context-aware customer support.</li>
                    <li>Strengthens Integrated Ecosystem: Having a dedicated RAG library and RAG features within the AI Studio makes LangIQ.ai's ecosystem more comprehensive, providing users with a crucial building block for developing advanced AI solutions within a unified framework.</li>
                    <li>Positions LangIQ as a Comprehensive Solution Provider: By offering robust RAG capabilities, LangIQ.ai positions itself as a provider that understands and addresses the complexities of real-world LLM deployment, moving beyond basic LLM access to enabling more sophisticated, data-grounded AI.</li>
                </ul>
            </motion.div>
        </motion.div>
    );
}
