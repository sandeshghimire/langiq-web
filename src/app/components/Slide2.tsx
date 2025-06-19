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
            className="flex items-center justify-center h-screen w-full snap-start bg-transparent backdrop-blur-sm px-4 md:px-12 relative border border-gray-200/20"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl w-full">
                {/* Left Column - Content */}
                <motion.div
                    className="text-center md:text-left"
                    variants={itemVariants}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        How We Solve Problems
                    </motion.h1>
                    <motion.div 
                        className="h-1 w-20 bg-gradient-to-r from-green-600 to-blue-600 mx-auto md:mx-0 mb-8"
                        variants={itemVariants}
                    />
                    
                    <div className="space-y-6">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/20" variants={itemVariants}>
                            <h3 className="font-semibold text-lg mb-2 text-blue-600">Visual AI Builder</h3>
                            <p className="text-gray-600">Low-code studio integrating multiple LLMs (OpenAI, Google, Anthropic) in one interface</p>
                        </motion.div>
                        
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/20" variants={itemVariants}>
                            <h3 className="font-semibold text-lg mb-2 text-green-600">Plug-and-Play Hardware</h3>
                            <p className="text-gray-600">Pre-configured AI Box systems with optimized software stack ready out of the box</p>
                        </motion.div>
                        
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/20" variants={itemVariants}>
                            <h3 className="font-semibold text-lg mb-2 text-purple-600">Modular Libraries</h3>
                            <p className="text-gray-600">Python/JavaScript APIs for prompting, RAG, tools, fine-tuning, and multi-agent workflows</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Empty for now */}
                <motion.div
                    className="hidden md:block"
                    variants={itemVariants}
                >
                    {/* Empty space for future content */}
                </motion.div>
            </div>
        </motion.div>
    );
}
