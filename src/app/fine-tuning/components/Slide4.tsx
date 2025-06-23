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
                ease: "easeInOut"
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
                ease: "easeInOut"
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
                ease: "easeInOut"
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
                        How Does Fine-Tuning Solve These Problems?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Creates specialized models deeply trained on organization-specific data and use cases</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Develops AI systems that naturally understand company terminology, processes, and quality requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Achieves superior accuracy on specialized tasks through dedicated model training rather than generic responses</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Enables development of proprietary AI capabilities providing competitive advantage and unique value proposition</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Provides complete control over model behavior, capabilities, and performance characteristics</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Fine-Tuning Process Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Generic Model Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="60" width="80" height="50" rx="8" fill="rgba(156, 163, 175, 0.2)" stroke="#9ca3af" strokeWidth="2" />
                            <text x="60" y="80" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Generic</text>
                            <text x="60" y="95" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Model</text>
                        </motion.g>

                        {/* Organization Data */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="140" width="80" height="50" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="60" y="160" textAnchor="middle" className="text-xs fill-green-600 font-medium">Company</text>
                            <text x="60" y="175" textAnchor="middle" className="text-xs fill-green-600 font-medium">Data</text>
                        </motion.g>

                        {/* Fine-Tuning Process */}
                        <motion.g variants={pulseVariants}>
                            <rect x="150" y="100" width="100" height="80" rx="12" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="125" textAnchor="middle" className="text-sm fill-purple-600 font-bold">Fine-Tuning</text>
                            <text x="200" y="140" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Process</text>
                            <text x="200" y="155" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Training</text>
                            <text x="200" y="170" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Optimization</text>
                        </motion.g>

                        {/* Specialized Model Output */}
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="100" width="80" height="80" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="340" y="125" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Specialized</text>
                            <text x="340" y="140" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Model</text>
                            <text x="340" y="155" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Domain</text>
                            <text x="340" y="170" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Expert</text>
                        </motion.g>

                        {/* Data Flow Lines with Arrows */}
                        <motion.path
                            d="M100 85 L150 120"
                            stroke="#9ca3af"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrowhead-gray)"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M100 165 L150 160"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrowhead-green)"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M250 140 L300 140"
                            stroke="#10b981"
                            strokeWidth="3"
                            fill="none"
                            markerEnd="url(#arrowhead-emerald)"
                            variants={flowVariants}
                        />

                        {/* Arrow Markers */}
                        <defs>
                            <marker id="arrowhead-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
                            </marker>
                            <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
                            </marker>
                            <marker id="arrowhead-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                            </marker>
                        </defs>

                        {/* Training Data Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={120 + i * 15}
                                cy={140 + Math.sin(i * 0.8) * 20}
                                r="2"
                                fill="#22c55e"
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        x: [0, 130, 0],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Improvement Indicators */}
                        {[...Array(4)].map((_, i) => (
                            <motion.g key={i}>
                                <motion.circle
                                    cx={320 + (i % 2) * 20}
                                    cy={120 + Math.floor(i / 2) * 40}
                                    r="3"
                                    fill="#10b981"
                                    variants={{
                                        hidden: { scale: 0, opacity: 0 },
                                        visible: {
                                            scale: [0, 1.2, 1],
                                            opacity: [0, 1, 0.8],
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.5
                                            }
                                        }
                                    }}
                                />
                                <motion.text
                                    x={320 + (i % 2) * 20}
                                    y={115 + Math.floor(i / 2) * 40}
                                    textAnchor="middle"
                                    className="text-xs fill-emerald-600 font-bold"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: [0, 1, 0],
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.5
                                            }
                                        }
                                    }}
                                >
                                    ✓
                                </motion.text>
                            </motion.g>
                        ))}

                        {/* Process Gears */}
                        <motion.g
                            variants={{
                                hidden: { rotate: 0 },
                                visible: {
                                    rotate: 360,
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }
                            }}
                            style={{ transformOrigin: "180px 140px" }}
                        >
                            <circle cx="180" cy="140" r="8" fill="none" stroke="#9333ea" strokeWidth="2" />
                            <circle cx="180" cy="140" r="4" fill="#9333ea" />
                        </motion.g>

                        <motion.g
                            variants={{
                                hidden: { rotate: 0 },
                                visible: {
                                    rotate: -360,
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }
                            }}
                            style={{ transformOrigin: "220px 140px" }}
                        >
                            <circle cx="220" cy="140" r="6" fill="none" stroke="#9333ea" strokeWidth="2" />
                            <circle cx="220" cy="140" r="3" fill="#9333ea" />
                        </motion.g>
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Base + Training Data
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Domain-Specific AI
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-12 text-xs font-medium text-purple-600 bg-purple-50/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Transformation
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
