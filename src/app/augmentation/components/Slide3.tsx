import { motion } from "framer-motion";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide2({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
    // Animation variants for showing LLM limitations
    const errorVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: [0, 1, 0.3],
            scale: [0, 1.2, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
            }
        }
    };

    const inconsistencyVariants = {
        hidden: { opacity: 0, x: 0 },
        visible: {
            opacity: [0, 1, 0.5],
            x: [0, 10, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
            }
        }
    };

    const gapVariants = {
        hidden: { strokeDasharray: "0 10", opacity: 0 },
        visible: {
            strokeDasharray: ["0 10", "5 5", "0 10"],
            opacity: [0, 1, 0.6],
            transition: {
                duration: 2.5,
                repeat: Infinity,
            }
        }
    };

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
                        Why LLM Augmentation
                    </motion.h1>
                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Generic LLMs lack specialized domain knowledge required for industry-specific applications and expertise</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Dynamic retrieval systems may introduce inconsistency or irrelevant information during critical interactions</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Organizations need AI systems reflecting their specific terminology, processes, and operational guidelines</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Some use cases require guaranteed consistency in responses rather than dynamic, context-dependent variations</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Specialized domains demand deep expertise that general-purpose models cannot reliably provide</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - LLM Limitations Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Domain-Specific Query */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="40" width="100" height="50" rx="8" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="70" y="60" textAnchor="middle" className="text-xs fill-red-600 font-medium">Medical</text>
                            <text x="70" y="75" textAnchor="middle" className="text-xs fill-red-600 font-medium">Query</text>
                        </motion.g>

                        {/* Legal Query */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="120" width="100" height="50" rx="8" fill="rgba(245, 101, 101, 0.2)" stroke="#f56565" strokeWidth="2" />
                            <text x="70" y="140" textAnchor="middle" className="text-xs fill-red-500 font-medium">Legal</text>
                            <text x="70" y="155" textAnchor="middle" className="text-xs fill-red-500 font-medium">Query</text>
                        </motion.g>

                        {/* Technical Query */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="200" width="100" height="50" rx="8" fill="rgba(252, 165, 165, 0.2)" stroke="#fca5a5" strokeWidth="2" />
                            <text x="70" y="220" textAnchor="middle" className="text-xs fill-red-400 font-medium">Technical</text>
                            <text x="70" y="235" textAnchor="middle" className="text-xs fill-red-400 font-medium">Query</text>
                        </motion.g>

                        {/* Generic LLM with Knowledge Gaps */}
                        <motion.g variants={inconsistencyVariants}>
                            <circle cx="200" cy="150" r="45" fill="rgba(156, 163, 175, 0.3)" stroke="#9ca3af" strokeWidth="3" strokeDasharray="5 5" />
                            <text x="200" y="140" textAnchor="middle" className="text-sm fill-gray-600 font-bold">Generic</text>
                            <text x="200" y="155" textAnchor="middle" className="text-xs fill-gray-600 font-medium">LLM</text>
                            <text x="200" y="170" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Limited</text>
                        </motion.g>

                        {/* Knowledge Gap Indicators */}
                        <motion.circle cx="180" cy="130" r="8" fill="rgba(239, 68, 68, 0.6)" variants={errorVariants} />
                        <motion.circle cx="220" cy="140" r="6" fill="rgba(245, 101, 101, 0.6)" variants={errorVariants} style={{ animationDelay: "0.5s" }} />
                        <motion.circle cx="190" cy="170" r="7" fill="rgba(252, 165, 165, 0.6)" variants={errorVariants} style={{ animationDelay: "1s" }} />

                        {/* Inconsistent Outputs */}
                        <motion.g variants={itemVariants}>
                            <rect x="280" y="60" width="80" height="40" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="320" y="75" textAnchor="middle" className="text-xs fill-red-600 font-medium">Unreliable</text>
                            <text x="320" y="88" textAnchor="middle" className="text-xs fill-red-600 font-medium">Output</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="280" y="140" width="80" height="40" rx="6" fill="rgba(245, 101, 101, 0.2)" stroke="#f56565" strokeWidth="2" />
                            <text x="320" y="155" textAnchor="middle" className="text-xs fill-red-500 font-medium">Generic</text>
                            <text x="320" y="168" textAnchor="middle" className="text-xs fill-red-500 font-medium">Response</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="280" y="220" width="80" height="40" rx="6" fill="rgba(252, 165, 165, 0.2)" stroke="#fca5a5" strokeWidth="2" />
                            <text x="320" y="235" textAnchor="middle" className="text-xs fill-red-400 font-medium">Inconsistent</text>
                            <text x="320" y="248" textAnchor="middle" className="text-xs fill-red-400 font-medium">Quality</text>
                        </motion.g>

                        {/* Broken/Weak Connection Lines */}
                        <motion.path
                            d="M120 65 Q160 65 160 130"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={gapVariants}
                        />
                        <motion.path
                            d="M120 145 Q160 145 160 150"
                            stroke="#f56565"
                            strokeWidth="2"
                            fill="none"
                            variants={gapVariants}
                        />
                        <motion.path
                            d="M120 225 Q160 225 160 170"
                            stroke="#fca5a5"
                            strokeWidth="2"
                            fill="none"
                            variants={gapVariants}
                        />

                        <motion.path
                            d="M245 130 Q262 130 280 80"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="3 3"
                            variants={gapVariants}
                        />
                        <motion.path
                            d="M245 150 Q262 150 280 160"
                            stroke="#f56565"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="3 3"
                            variants={gapVariants}
                        />
                        <motion.path
                            d="M245 170 Q262 170 280 240"
                            stroke="#fca5a5"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="3 3"
                            variants={gapVariants}
                        />

                        {/* Warning Indicators */}
                        {[...Array(4)].map((_, i) => (
                            <motion.text
                                key={i}
                                x={160 + i * 20}
                                y={120 + Math.sin(i) * 20}
                                textAnchor="middle"
                                className="text-lg fill-yellow-500"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }
                                    }
                                }}
                            >
                                ⚠
                            </motion.text>
                        ))}

                        {/* Question marks for uncertainty */}
                        {[...Array(3)].map((_, i) => (
                            <motion.text
                                key={i}
                                x={300 + i * 15}
                                y={120 + i * 40}
                                textAnchor="middle"
                                className="text-sm fill-gray-500"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0.3],
                                        transition: {
                                            duration: 1.8,
                                            repeat: Infinity,
                                            delay: i * 0.6
                                        }
                                    }
                                }}
                            >
                                ?
                            </motion.text>
                        ))}
                    </svg>

                    {/* Updated Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-red-600 bg-red-50/80 backdrop-blur-sm rounded px-2 py-1 border border-red-200"
                        variants={itemVariants}
                    >
                        Domain-Specific Queries
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-red-600 bg-red-50/80 backdrop-blur-sm rounded px-2 py-1 border border-red-200"
                        variants={itemVariants}
                    >
                        Unreliable Results
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-yellow-600 bg-yellow-50/80 backdrop-blur-sm rounded px-2 py-1 border border-yellow-200"
                        variants={itemVariants}
                    >
                        Knowledge Gaps
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
