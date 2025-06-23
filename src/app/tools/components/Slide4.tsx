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
                        How Do Tools & MCP Solve These Problems?
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

                {/* Right Column - LLM Processing Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Structured Data Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="50" width="80" height="60" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="60" y="75" textAnchor="middle" className="text-xs fill-green-600 font-medium">Structured</text>
                            <text x="60" y="90" textAnchor="middle" className="text-xs fill-green-600 font-medium">Data</text>
                        </motion.g>

                        {/* Unstructured Data Input */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="150" width="80" height="60" rx="8" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="60" y="175" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Unstructured</text>
                            <text x="60" y="190" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Data</text>
                        </motion.g>

                        {/* LLM Processing Core */}
                        <motion.g variants={pulseVariants}>
                            <circle cx="200" cy="150" r="50" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="145" textAnchor="middle" className="text-sm fill-purple-600 font-bold">LLM</text>
                            <text x="200" y="160" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Processing</text>
                        </motion.g>

                        {/* Output */}
                        <motion.g variants={itemVariants}>
                            <rect x="300" y="120" width="80" height="60" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="340" y="145" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Processed</text>
                            <text x="340" y="160" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Output</text>
                        </motion.g>

                        {/* Data Flow Lines */}
                        <motion.path
                            d="M100 80 Q150 80 150 150"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M100 180 Q150 180 150 150"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M250 150 Q275 150 300 150"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Animated Data Particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={120 + i * 30}
                                cy={130 + Math.sin(i) * 40}
                                r="3"
                                fill={i % 2 === 0 ? "#22c55e" : "#3b82f6"}
                                variants={particleVariants}
                                style={{ animationDelay: `${i * 0.5}s` }}
                            />
                        ))}

                        {/* Processing Indicators */}
                        {[...Array(3)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={180 + i * 20}
                                cy={150}
                                r="2"
                                fill="#9333ea"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.3
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
                        Multi-Modal Input
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Intelligent Output
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
