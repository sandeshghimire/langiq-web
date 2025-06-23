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
                        How Agents Orchestration Solve Problems
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Enables sophisticated problem-solving by combining multiple specialized agents with complementary capabilities</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Provides intelligent coordination ensuring proper sequencing, decision-making, and information sharing between agents</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Automates complex, multi-step business processes reducing manual intervention and increasing operational efficiency</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Offers scalable architecture supporting both simple workflows and enterprise-level process automation requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Delivers autonomous execution capability with built-in monitoring, error handling, and workflow management</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Agent Orchestration Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Problem Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="40" width="80" height="50" rx="8" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
                            <text x="60" y="60" textAnchor="middle" className="text-xs fill-red-600 font-medium">Complex</text>
                            <text x="60" y="75" textAnchor="middle" className="text-xs fill-red-600 font-medium">Problem</text>
                        </motion.g>

                        {/* Orchestration Hub */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="120" r="40" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="115" textAnchor="middle" className="text-xs fill-purple-600 font-bold">Orchestration</text>
                            <text x="200" y="130" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Hub</text>
                        </motion.g>

                        {/* Specialized Agents */}
                        <motion.g variants={itemVariants}>
                            <circle cx="120" cy="220" r="25" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="120" y="215" textAnchor="middle" className="text-xs fill-green-600 font-medium">Data</text>
                            <text x="120" y="228" textAnchor="middle" className="text-xs fill-green-600 font-medium">Agent</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <circle cx="200" cy="260" r="25" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="200" y="255" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Analysis</text>
                            <text x="200" y="268" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Agent</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <circle cx="280" cy="220" r="25" fill="rgba(251, 146, 60, 0.2)" stroke="#fb923c" strokeWidth="2" />
                            <text x="280" y="215" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Action</text>
                            <text x="280" y="228" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Agent</text>
                        </motion.g>

                        {/* Solution Output */}
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="40" width="80" height="50" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="340" y="60" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Automated</text>
                            <text x="340" y="75" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Solution</text>
                        </motion.g>

                        {/* Workflow Management */}
                        <motion.g variants={itemVariants}>
                            <rect x="150" y="340" width="100" height="30" rx="15" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="1" />
                            <text x="200" y="358" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Workflow Manager</text>
                        </motion.g>

                        {/* Data Flow Lines */}
                        <motion.path
                            d="M100 65 Q150 65 160 120"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M240 120 Q270 65 300 65"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Agent Communication Lines */}
                        <motion.path
                            d="M175 140 Q145 180 145 195"
                            stroke="#9333ea"
                            strokeWidth="1.5"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="3,3"
                        />
                        <motion.path
                            d="M200 160 Q200 200 200 235"
                            stroke="#9333ea"
                            strokeWidth="1.5"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="3,3"
                        />
                        <motion.path
                            d="M225 140 Q255 180 255 195"
                            stroke="#9333ea"
                            strokeWidth="1.5"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="3,3"
                        />

                        {/* Workflow Management Lines */}
                        <motion.path
                            d="M145 245 Q145 290 175 340"
                            stroke="#a855f7"
                            strokeWidth="1"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="2,2"
                        />
                        <motion.path
                            d="M200 285 Q200 315 200 340"
                            stroke="#a855f7"
                            strokeWidth="1"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="2,2"
                        />
                        <motion.path
                            d="M255 245 Q255 290 225 340"
                            stroke="#a855f7"
                            strokeWidth="1"
                            fill="none"
                            variants={flowVariants}
                            strokeDasharray="2,2"
                        />

                        {/* Coordination Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={160 + Math.cos(i * Math.PI / 4) * 30}
                                cy={120 + Math.sin(i * Math.PI / 4) * 30}
                                r="2"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.25
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Agent Activity Indicators */}
                        {[0, 1, 2].map((i) => (
                            <motion.circle
                                key={i}
                                cx={[120, 200, 280][i]}
                                cy={[220, 260, 220][i]}
                                r="4"
                                fill="none"
                                stroke={["#22c55e", "#3b82f6", "#fb923c"][i]}
                                strokeWidth="2"
                                variants={{
                                    hidden: { scale: 0, opacity: 0 },
                                    visible: {
                                        scale: [0, 1.5, 0],
                                        opacity: [0, 0.8, 0],
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.5
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
                        Multi-Agent System
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Automated Workflow
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-purple-600 bg-purple-100/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Intelligent Coordination
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
