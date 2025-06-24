import { motion } from "framer-motion";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide5({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
    // Animation variants for the data processing
    const particleVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
            }
        }
    };

    const flowVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                repeat: Infinity,
            }
        }
    };

    const pulseVariants = {
        hidden: { scale: 1, opacity: 0.7 },
        visible: {
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
            transition: {
                duration: 2,
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
                        Advantages
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Enhanced Accuracy: Dramatically reduces AI hallucinations by grounding responses in verified organizational knowledge</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Real-time Knowledge: Provides access to latest information and updates without model retraining requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Compliance Ready: Complete source attribution and citation tracking meets regulatory and audit requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Scalable Integration: Supports diverse document formats and database systems for comprehensive knowledge access</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Contextual Intelligence: Semantic search delivers more relevant results than traditional keyword-based retrieval systems</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - RAG Advantages Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Knowledge Sources */}
                        <motion.g variants={itemVariants}>
                            <rect x="10" y="40" width="70" height="40" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="45" y="58" textAnchor="middle" className="text-xs fill-green-600 font-medium">Documents</text>
                            <text x="45" y="70" textAnchor="middle" className="text-xs fill-green-600 font-medium">Database</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="10" y="100" width="70" height="40" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="45" y="118" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Real-time</text>
                            <text x="45" y="130" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Updates</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="10" y="160" width="70" height="40" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
                            <text x="45" y="178" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Compliance</text>
                            <text x="45" y="190" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Sources</text>
                        </motion.g>

                        {/* RAG Core System */}
                        <motion.g variants={pulseVariants}>
                            <rect x="150" y="100" width="100" height="80" rx="12" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="125" textAnchor="middle" className="text-sm fill-purple-600 font-bold">RAG</text>
                            <text x="200" y="140" textAnchor="middle" className="text-xs fill-purple-600 font-medium">System</text>
                            <text x="200" y="155" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Retrieval +</text>
                            <text x="200" y="170" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Generation</text>
                        </motion.g>

                        {/* Enhanced Outputs */}
                        <motion.g variants={itemVariants}>
                            <rect x="320" y="50" width="70" height="35" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="355" y="68" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Accurate</text>
                            <text x="355" y="78" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Responses</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="320" y="100" width="70" height="35" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="355" y="118" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Contextual</text>
                            <text x="355" y="128" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Intelligence</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="320" y="150" width="70" height="35" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="355" y="168" textAnchor="middle" className="text-xs fill-red-600 font-medium">Cited</text>
                            <text x="355" y="178" textAnchor="middle" className="text-xs fill-red-600 font-medium">Sources</text>
                        </motion.g>

                        {/* Knowledge Flow Lines */}
                        <motion.path
                            d="M80 60 Q115 60 150 120"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M80 120 Q115 120 150 140"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M80 180 Q115 180 150 160"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Output Flow Lines */}
                        <motion.path
                            d="M250 120 Q285 100 320 67"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M250 140 Q285 130 320 117"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M250 160 Q285 160 320 167"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Knowledge Particles */}
                        {[...Array(5)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={100 + i * 25}
                                cy={120 + Math.sin(i * 0.5) * 30}
                                r="2"
                                fill={["#22c55e", "#3b82f6", "#a855f7", "#10b981", "#f59e0b"][i]}
                                variants={particleVariants}
                                style={{ animationDelay: `${i * 0.4}s` }}
                            />
                        ))}

                        {/* Processing Indicators */}
                        {[...Array(4)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={170 + i * 15}
                                cy={140}
                                r="1.5"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        scale: [0.5, 1.2, 0.5],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.3
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Quality Indicators */}
                        <motion.g
                            variants={{
                                hidden: { opacity: 0, scale: 0 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 1,
                                        delay: 1.5
                                    }
                                }
                            }}
                        >
                            <circle cx="200" cy="90" r="8" fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" strokeWidth="1" />
                            <text x="200" y="94" textAnchor="middle" className="text-xs fill-green-600 font-bold">✓</text>
                        </motion.g>
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-2 left-2 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Knowledge Sources
                    </motion.div>
                    <motion.div
                        className="absolute bottom-2 right-2 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Enhanced AI Output
                    </motion.div>
                    <motion.div
                        className="absolute top-20 right-20 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Quality Verified
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
