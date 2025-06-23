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
                        Why Agents Orchestration ?
                    </motion.h1>
                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Complex business processes require diverse skills and capabilities that single AI models cannot effectively handle</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Multi-step workflows demand coordination, decision-making, and handoffs between different specialized functions</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Organizations need AI systems capable of autonomous execution of sophisticated processes without human intervention</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Traditional single-agent approaches lack the specialization and coordination required for enterprise-level automation</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Business efficiency demands AI solutions that can handle end-to-end processes rather than individual tasks</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Agent Orchestration Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Input Data */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="180" width="60" height="40" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="50" y="200" textAnchor="middle" className="text-xs fill-green-600 font-medium">Input</text>
                            <text x="50" y="212" textAnchor="middle" className="text-xs fill-green-600 font-medium">Data</text>
                        </motion.g>

                        {/* Central Orchestrator */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="200" r="35" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="195" textAnchor="middle" className="text-xs fill-purple-600 font-bold">Orchestrator</text>
                            <text x="200" y="208" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Engine</text>
                        </motion.g>

                        {/* Specialized Agents */}
                        <motion.g variants={itemVariants}>
                            <rect x="130" y="80" width="70" height="35" rx="5" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="165" y="100" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Analysis Agent</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="280" y="120" width="70" height="35" rx="5" fill="rgba(236, 72, 153, 0.2)" stroke="#ec4899" strokeWidth="2" />
                            <text x="315" y="140" textAnchor="middle" className="text-xs fill-pink-600 font-medium">Decision Agent</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="280" y="250" width="70" height="35" rx="5" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="315" y="270" textAnchor="middle" className="text-xs fill-amber-600 font-medium">Action Agent</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="130" y="290" width="70" height="35" rx="5" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="165" y="310" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Output Agent</text>
                        </motion.g>

                        {/* Workflow Connections */}
                        <motion.path
                            d="M80 200 Q120 200 165 180"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M165 200 Q182 140 200 165"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M235 185 Q260 155 280 140"
                            stroke="#ec4899"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M235 215 Q260 245 280 265"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M200 235 Q180 265 165 290"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Data Flow Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={90 + i * 25}
                                cy={190 + Math.sin(i * 0.8) * 30}
                                r="2"
                                fill={["#22c55e", "#9333ea", "#3b82f6", "#ec4899", "#f59e0b", "#10b981"][i % 6]}
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0],
                                        transition: {
                                            duration: 2.5,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                            ease: "easeInOut"
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Coordination Signals */}
                        {[...Array(4)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={200 + Math.cos(i * Math.PI / 2) * 25}
                                cy={200 + Math.sin(i * Math.PI / 2) * 25}
                                r="1.5"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        transition: {
                                            duration: 1.8,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }
                                    }
                                }}
                            />
                        ))}
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Multi-Agent Workflow
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Coordinated Execution
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
