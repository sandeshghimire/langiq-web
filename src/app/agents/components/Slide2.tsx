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
                        What is Agent Orchestration?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Multi-agent framework enabling specialized AI agents to collaborate on complex, multi-step problem-solving workflows</p>
                        </motion.div>


                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Agent role definition system allowing customization of individual agent capabilities, tools, and expertise areas</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Proprietary Multi-Agent Collaboration Protocol (MACP) managing communication, coordination, and workflow execution</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Flexible execution patterns supporting sequential, parallel, and conditional agent interactions based on workflow requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Shared memory and context management ensuring seamless information flow between agents throughout complex processes</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Agent Orchestration Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Input Task */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="180" width="80" height="40" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="60" y="195" textAnchor="middle" className="text-xs fill-green-600 font-medium">Complex</text>
                            <text x="60" y="207" textAnchor="middle" className="text-xs fill-green-600 font-medium">Task</text>
                        </motion.g>

                        {/* Research Agent */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="160" cy="80" r="25" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="160" y="77" textAnchor="middle" className="text-xs fill-blue-600 font-bold">Research</text>
                            <text x="160" y="88" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Analysis Agent */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="240" cy="120" r="25" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="2" />
                            <text x="240" y="117" textAnchor="middle" className="text-xs fill-purple-600 font-bold">Analysis</text>
                            <text x="240" y="128" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Coordination Hub - MACP */}
                        <motion.g variants={pulseVariants}>
                            <rect x="170" y="170" width="60" height="60" rx="12" fill="rgba(245, 101, 101, 0.2)" stroke="#f56565" strokeWidth="3" />
                            <text x="200" y="190" textAnchor="middle" className="text-xs fill-red-600 font-bold">MACP</text>
                            <text x="200" y="202" textAnchor="middle" className="text-xs fill-red-600 font-medium">Protocol</text>
                            <text x="200" y="214" textAnchor="middle" className="text-xs fill-red-600 font-medium">Hub</text>
                        </motion.g>

                        {/* Writing Agent */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="160" cy="280" r="25" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="160" y="277" textAnchor="middle" className="text-xs fill-emerald-600 font-bold">Writing</text>
                            <text x="160" y="288" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Review Agent */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="240" cy="240" r="25" fill="rgba(251, 146, 60, 0.2)" stroke="#fb923c" strokeWidth="2" />
                            <text x="240" y="237" textAnchor="middle" className="text-xs fill-orange-600 font-bold">Review</text>
                            <text x="240" y="248" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Final Output */}
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="180" width="80" height="40" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="340" y="195" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Coordinated</text>
                            <text x="340" y="207" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Solution</text>
                        </motion.g>

                        {/* Communication Flow Lines */}
                        <motion.path
                            d="M100 200 Q130 140 135 80"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M185 80 Q212 100 215 120"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M170 200 Q140 240 135 280"
                            stroke="#f56565"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M185 280 Q212 260 215 240"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M230 200 Q265 200 300 200"
                            stroke="#fb923c"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Coordination Lines to MACP Hub */}
                        <motion.path
                            d="M160 105 Q165 140 175 170"
                            stroke="#f56565"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M240 145 Q235 160 225 170"
                            stroke="#f56565"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M160 255 Q165 240 175 230"
                            stroke="#f56565"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M240 215 Q235 205 225 230"
                            stroke="#f56565"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Animated Data Particles flowing between agents */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={120 + i * 25}
                                cy={150 + Math.sin(i * 2) * 60}
                                r="2"
                                fill={["#3b82f6", "#9333ea", "#10b981", "#fb923c"][i % 4]}
                                variants={particleVariants}
                                style={{ animationDelay: `${i * 0.4}s` }}
                            />
                        ))}

                        {/* Shared Memory Indicators */}
                        {[...Array(4)].map((_, i) => (
                            <motion.rect
                                key={i}
                                x={190 + i * 5}
                                y={195 + i * 2}
                                width="2"
                                height="8"
                                fill="#f56565"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.2
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
                        Coordinated Results
                    </motion.div>
                    <motion.div
                        className="absolute top-16 right-8 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        MACP Protocol
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
