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

    const agentVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "backOut"
            }
        }
    };

    const communicationVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1]
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
                        Advantages of AI Studio
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>

                            <p className="text-gray-600"> Multi-agent framework enabling specialized AI agents to collaborate on complex, multi-step problem-solving workflows</p>
                        </motion.div>


                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>

                            <p className="text-gray-600">  Agent role definition system allowing customization of individual agent capabilities, tools, and expertise areas</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600"> Multi-Agent Collaboration Protocol (MACP) managing communication, coordination, and workflow execution</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>

                            <p className="text-gray-600">  Flexible execution patterns supporting sequential, parallel, and conditional agent interactions based on workflow requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">  Shared memory and context management ensuring seamless information flow between agents throughout complex processes</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Multi-Agent Collaboration Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Shared Memory/Context Center */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="200" r="40" fill="rgba(147, 51, 234, 0.1)" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" />
                            <text x="200" y="195" textAnchor="middle" className="text-xs fill-purple-600 font-bold">Shared</text>
                            <text x="200" y="208" textAnchor="middle" className="text-xs fill-purple-600 font-bold">Memory</text>
                        </motion.g>

                        {/* Agent 1 - Research Agent */}
                        <motion.g variants={agentVariants}>
                            <circle cx="120" cy="120" r="25" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="120" y="118" textAnchor="middle" className="text-xs fill-green-600 font-medium">Research</text>
                            <text x="120" y="130" textAnchor="middle" className="text-xs fill-green-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Agent 2 - Analysis Agent */}
                        <motion.g variants={agentVariants}>
                            <circle cx="280" cy="120" r="25" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="280" y="118" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Analysis</text>
                            <text x="280" y="130" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Agent 3 - Coordination Agent */}
                        <motion.g variants={agentVariants}>
                            <circle cx="120" cy="280" r="25" fill="rgba(251, 146, 60, 0.2)" stroke="#fb923c" strokeWidth="2" />
                            <text x="120" y="278" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Coordinator</text>
                            <text x="120" y="290" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Agent 4 - Execution Agent */}
                        <motion.g variants={agentVariants}>
                            <circle cx="280" cy="280" r="25" fill="rgba(236, 72, 153, 0.2)" stroke="#ec4899" strokeWidth="2" />
                            <text x="280" y="278" textAnchor="middle" className="text-xs fill-pink-600 font-medium">Execution</text>
                            <text x="280" y="290" textAnchor="middle" className="text-xs fill-pink-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Communication Lines between Agents */}
                        <motion.path
                            d="M145 120 L175 180"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={communicationVariants}
                            style={{ animationDelay: "0s" }}
                        />
                        <motion.path
                            d="M255 120 L225 180"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={communicationVariants}
                            style={{ animationDelay: "0.5s" }}
                        />
                        <motion.path
                            d="M145 280 L175 220"
                            stroke="#fb923c"
                            strokeWidth="2"
                            fill="none"
                            variants={communicationVariants}
                            style={{ animationDelay: "1s" }}
                        />
                        <motion.path
                            d="M255 280 L225 220"
                            stroke="#ec4899"
                            strokeWidth="2"
                            fill="none"
                            variants={communicationVariants}
                            style={{ animationDelay: "1.5s" }}
                        />

                        {/* Cross-Agent Communication */}
                        <motion.path
                            d="M145 120 L255 120"
                            stroke="#10b981"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="3,3"
                            variants={communicationVariants}
                            style={{ animationDelay: "2s" }}
                        />
                        <motion.path
                            d="M145 280 L255 280"
                            stroke="#10b981"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="3,3"
                            variants={communicationVariants}
                            style={{ animationDelay: "2.5s" }}
                        />

                        {/* Workflow Data Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={150 + (i % 4) * 25}
                                cy={150 + Math.floor(i / 4) * 100}
                                r="2"
                                fill={["#22c55e", "#3b82f6", "#fb923c", "#ec4899"][i % 4]}
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        scale: [0, 1.5, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.25
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* MACP Protocol Indicators */}
                        <motion.g variants={itemVariants}>
                            <rect x="320" y="20" width="60" height="30" rx="4" fill="rgba(168, 85, 247, 0.1)" stroke="#a855f7" strokeWidth="1" />
                            <text x="350" y="32" textAnchor="middle" className="text-xs fill-purple-600 font-medium">MACP</text>
                            <text x="350" y="44" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Protocol</text>
                        </motion.g>

                        {/* Workflow Status */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="350" width="80" height="30" rx="4" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="1" />
                            <text x="60" y="362" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Workflow</text>
                            <text x="60" y="374" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Active</text>
                        </motion.g>
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Multi-Agent Framework
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Collaborative Intelligence
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
