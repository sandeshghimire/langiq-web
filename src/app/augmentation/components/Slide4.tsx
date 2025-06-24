import { motion } from "framer-motion";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide2({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
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
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
            transition: {
                duration: 2.5,
                repeat: Infinity,
            }
        }
    };

    const knowledgeVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: [0, 1, 0.8],
            y: [20, 0, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
            }
        }
    };

    const problemSolveVariants = {
        hidden: { scale: 0, rotate: 0 },
        visible: {
            scale: [0, 1, 1],
            rotate: [0, 360, 360],
            transition: {
                duration: 4,
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
                        LLM Augmentation Solutions
                    </motion.h1>

                    <div className="space-y-4">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-0 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Embeds essential domain knowledge directly into model context ensuring consistent access and application</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-0 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Provides stable, predictable responses by incorporating fixed knowledge rather than dynamic retrieval results</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-0 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Customizes AI behavior and expertise to match organizational requirements and industry standards</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-0 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Delivers specialized performance without requiring expensive full model retraining or large computational resources</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-0 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Enables rapid deployment of domain-specific AI solutions through template-based knowledge integration</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Augmentation Problem-Solving Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Domain Knowledge Sources */}
                        <motion.g variants={knowledgeVariants}>
                            <rect x="20" y="30" width="70" height="40" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="55" y="50" textAnchor="middle" className="text-xs fill-green-600 font-medium">Domain</text>
                            <text x="55" y="62" textAnchor="middle" className="text-xs fill-green-600 font-medium">Knowledge</text>
                        </motion.g>

                        <motion.g variants={knowledgeVariants} style={{ animationDelay: "0.5s" }}>
                            <rect x="20" y="90" width="70" height="40" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="55" y="110" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Industry</text>
                            <text x="55" y="122" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Standards</text>
                        </motion.g>

                        <motion.g variants={knowledgeVariants} style={{ animationDelay: "1s" }}>
                            <rect x="20" y="150" width="70" height="40" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
                            <text x="55" y="170" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Best</text>
                            <text x="55" y="182" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Practices</text>
                        </motion.g>

                        {/* Augmented LLM Core */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="150" r="55" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="140" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Augmented</text>
                            <text x="200" y="155" textAnchor="middle" className="text-sm fill-purple-600 font-bold">LLM</text>
                            <text x="200" y="170" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Problem Solver</text>
                        </motion.g>

                        {/* Solution Outputs */}
                        <motion.g variants={problemSolveVariants}>
                            <rect x="310" y="50" width="70" height="40" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="345" y="70" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Consistent</text>
                            <text x="345" y="82" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Solutions</text>
                        </motion.g>

                        <motion.g variants={problemSolveVariants} style={{ animationDelay: "1s" }}>
                            <rect x="310" y="110" width="70" height="40" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="345" y="130" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Specialized</text>
                            <text x="345" y="142" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Responses</text>
                        </motion.g>

                        <motion.g variants={problemSolveVariants} style={{ animationDelay: "1.5s" }}>
                            <rect x="310" y="170" width="70" height="40" rx="6" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="345" y="190" textAnchor="middle" className="text-xs fill-red-600 font-medium">Rapid</text>
                            <text x="345" y="202" textAnchor="middle" className="text-xs fill-red-600 font-medium">Deployment</text>
                        </motion.g>

                        {/* Knowledge Embedding Flow */}
                        <motion.path
                            d="M90 50 Q140 50 145 100"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M90 110 Q140 110 145 130"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M90 170 Q140 170 145 160"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Solution Output Flow */}
                        <motion.path
                            d="M255 130 Q280 70 310 70"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M255 150 Q280 130 310 130"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M255 170 Q280 190 310 190"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Knowledge Integration Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={110 + i * 15}
                                cy={120 + Math.sin(i * 0.5) * 30}
                                r="2"
                                fill={["#22c55e", "#3b82f6", "#a855f7"][i % 3]}
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        scale: [0, 1.5, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Problem-Solving Gears */}
                        {[...Array(4)].map((_, i) => (
                            <motion.circle
                                key={`gear-${i}`}
                                cx={180 + i * 10}
                                cy={150}
                                r="3"
                                fill="#9333ea"
                                variants={{
                                    hidden: { rotate: 0 },
                                    visible: {
                                        rotate: 360,
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,

                                            delay: i * 0.2
                                        }
                                    }
                                }}
                                style={{ transformOrigin: `${180 + i * 10}px 150px` }}
                            />
                        ))}
                    </svg>

                    {/* Enhanced Labels */}
                    <motion.div
                        className="absolute top-2 left-2 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-3 py-1 border"
                        variants={itemVariants}
                    >
                        Knowledge Embedding
                    </motion.div>
                    <motion.div
                        className="absolute top-2 right-2 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-3 py-1 border"
                        variants={itemVariants}
                    >
                        Problem Solutions
                    </motion.div>
                    <motion.div
                        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-3 py-1 border"
                        variants={itemVariants}
                    >
                        Augmented Intelligence
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
