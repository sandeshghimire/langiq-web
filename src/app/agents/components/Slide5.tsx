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
                        Advantages of Agents Orchestration
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Complex Problem Solving: Handle sophisticated, multi-step processes requiring diverse skills and coordination</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Process Automation: Automate entire business workflows from initiation to completion without human intervention</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Scalable Architecture: Support both simple task coordination and enterprise-level process orchestration requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Intelligent Coordination: Advanced protocol ensures optimal agent collaboration and workflow execution</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Operational Efficiency: Dramatically reduce manual work through autonomous execution of complex business processes</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Agent Orchestration Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Central Orchestrator */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="200" r="35" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="195" textAnchor="middle" className="text-xs fill-purple-600 font-bold">Orchestrator</text>
                            <text x="200" y="208" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Planning Agent */}
                        <motion.g variants={itemVariants}>
                            <circle cx="120" cy="120" r="25" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="120" y="118" textAnchor="middle" className="text-xs fill-green-600 font-medium">Planning</text>
                            <text x="120" y="128" textAnchor="middle" className="text-xs fill-green-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Research Agent */}
                        <motion.g variants={itemVariants}>
                            <circle cx="280" cy="120" r="25" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="280" y="118" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Research</text>
                            <text x="280" y="128" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Analysis Agent */}
                        <motion.g variants={itemVariants}>
                            <circle cx="120" cy="280" r="25" fill="rgba(251, 146, 60, 0.2)" stroke="#fb923c" strokeWidth="2" />
                            <text x="120" y="278" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Analysis</text>
                            <text x="120" y="288" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Execution Agent */}
                        <motion.g variants={itemVariants}>
                            <circle cx="280" cy="280" r="25" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="280" y="278" textAnchor="middle" className="text-xs fill-red-600 font-medium">Execution</text>
                            <text x="280" y="288" textAnchor="middle" className="text-xs fill-red-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Quality Check Agent */}
                        <motion.g variants={itemVariants}>
                            <circle cx="200" cy="80" r="20" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="200" y="78" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Quality</text>
                            <text x="200" y="88" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Check</text>
                        </motion.g>

                        {/* Orchestration Flow Lines */}
                        <motion.path
                            d="M200 165 L145 145"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M200 165 L255 145"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M200 235 L145 255"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M200 235 L255 255"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M200 165 L200 100"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Task Distribution Particles */}
                        {[...Array(5)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={200 + Math.cos(i * 72 * Math.PI / 180) * 45}
                                cy={200 + Math.sin(i * 72 * Math.PI / 180) * 45}
                                r="2"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        scale: [0, 1.5, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Coordination Indicators */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={200 + Math.cos(i * 45 * Math.PI / 180) * 60}
                                cy={200 + Math.sin(i * 45 * Math.PI / 180) * 60}
                                r="1.5"
                                fill="#a855f7"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 0.8, 0],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Agent Status Indicators */}
                        <motion.circle
                            cx="105"
                            cy="105"
                            r="3"
                            fill="#22c55e"
                            variants={{
                                hidden: { opacity: 0.3 },
                                visible: {
                                    opacity: [0.3, 1, 0.3],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 0.5
                                    }
                                }
                            }}
                        />
                        <motion.circle
                            cx="295"
                            cy="105"
                            r="3"
                            fill="#3b82f6"
                            variants={{
                                hidden: { opacity: 0.3 },
                                visible: {
                                    opacity: [0.3, 1, 0.3],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 1
                                    }
                                }
                            }}
                        />
                        <motion.circle
                            cx="105"
                            cy="295"
                            r="3"
                            fill="#fb923c"
                            variants={{
                                hidden: { opacity: 0.3 },
                                visible: {
                                    opacity: [0.3, 1, 0.3],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 1.5
                                    }
                                }
                            }}
                        />
                        <motion.circle
                            cx="295"
                            cy="295"
                            r="3"
                            fill="#ef4444"
                            variants={{
                                hidden: { opacity: 0.3 },
                                visible: {
                                    opacity: [0.3, 1, 0.3],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 2
                                    }
                                }
                            }}
                        />
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Agent Coordination
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Workflow Automation
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
