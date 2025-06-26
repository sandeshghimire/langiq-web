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
                        How AI Studio Works?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Frontend GUI-based application for designing, developing, testing and verifying LLM applications</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Develops custom enterprise-grade LLM applications by integrating secure LLM workflows</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Ensures data safety and privacy with encrypted data handling and secure processing pipelines</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Provides enterprise security features with role-based access control and audit logging</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Accelerates development with visual workflow builders while maintaining compliance standards</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - AI Studio Workflow Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* GUI Design Interface */}
                        <motion.g variants={itemVariants}>
                            <rect x="30" y="40" width="80" height="60" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" strokeWidth="1.5" />
                            <text x="70" y="60" textAnchor="middle" className="text-xs fill-green-700 font-medium">GUI</text>
                            <text x="70" y="75" textAnchor="middle" className="text-xs fill-green-700 font-medium">Designer</text>
                            <text x="70" y="90" textAnchor="middle" className="text-xs fill-green-700 font-medium">Interface</text>
                        </motion.g>

                        {/* LLM Workflow Builder */}
                        <motion.g variants={itemVariants}>
                            <rect x="130" y="40" width="80" height="60" rx="6" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="1.5" />
                            <text x="170" y="60" textAnchor="middle" className="text-xs fill-blue-700 font-medium">LLM</text>
                            <text x="170" y="75" textAnchor="middle" className="text-xs fill-blue-700 font-medium">Workflow</text>
                            <text x="170" y="90" textAnchor="middle" className="text-xs fill-blue-700 font-medium">Builder</text>
                        </motion.g>

                        {/* Security & Privacy Layer */}
                        <motion.g variants={pulseVariants}>
                            <rect x="230" y="40" width="80" height="60" rx="6" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="2" />
                            <text x="270" y="60" textAnchor="middle" className="text-xs fill-red-700 font-semibold">Security</text>
                            <text x="270" y="75" textAnchor="middle" className="text-xs fill-red-700 font-semibold">& Privacy</text>
                            <text x="270" y="90" textAnchor="middle" className="text-xs fill-red-700 font-semibold">Layer</text>
                        </motion.g>

                        {/* Testing & Verification */}
                        <motion.g variants={itemVariants}>
                            <rect x="80" y="130" width="80" height="60" rx="6" fill="rgba(147, 51, 234, 0.15)" stroke="#9333ea" strokeWidth="1.5" />
                            <text x="120" y="150" textAnchor="middle" className="text-xs fill-purple-700 font-medium">Testing &</text>
                            <text x="120" y="165" textAnchor="middle" className="text-xs fill-purple-700 font-medium">Verification</text>
                            <text x="120" y="180" textAnchor="middle" className="text-xs fill-purple-700 font-medium">Engine</text>
                        </motion.g>

                        {/* Enterprise Integration */}
                        <motion.g variants={itemVariants}>
                            <rect x="180" y="130" width="80" height="60" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1.5" />
                            <text x="220" y="150" textAnchor="middle" className="text-xs fill-emerald-700 font-medium">Enterprise</text>
                            <text x="220" y="165" textAnchor="middle" className="text-xs fill-emerald-700 font-medium">Integration</text>
                            <text x="220" y="180" textAnchor="middle" className="text-xs fill-emerald-700 font-medium">Hub</text>
                        </motion.g>

                        {/* Custom LLM Applications */}
                        <motion.g variants={itemVariants}>
                            <rect x="130" y="220" width="80" height="60" rx="6" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="1.5" />
                            <text x="170" y="240" textAnchor="middle" className="text-xs fill-amber-700 font-medium">Custom LLM</text>
                            <text x="170" y="255" textAnchor="middle" className="text-xs fill-amber-700 font-medium">Applications</text>
                            <text x="170" y="270" textAnchor="middle" className="text-xs fill-amber-700 font-medium">Output</text>
                        </motion.g>

                        {/* Clean Flow Connections */}
                        <motion.path
                            d="M70 100 L120 130"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,2"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M170 100 L170 130"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,2"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M270 100 L220 130"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,2"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M120 190 L170 220"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,2"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M220 190 L170 220"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,2"
                            variants={flowVariants}
                        />

                        {/* Security Shield Icon */}
                        <motion.g variants={itemVariants}>
                            <path
                                d="M270 55 L275 50 L280 55 L280 75 L275 80 L270 75 Z"
                                fill="#ef4444"
                                opacity="0.8"
                            />
                            <circle cx="275" cy="65" r="3" fill="white" />
                        </motion.g>

                        {/* Data Flow Indicators */}
                        {[...Array(3)].map((_, i) => (
                            <motion.rect
                                key={i}
                                x={150 + i * 15}
                                y={110 + i * 5}
                                width="8"
                                height="2"
                                rx="1"
                                fill={["#22c55e", "#3b82f6", "#ef4444"][i]}
                                variants={{
                                    hidden: { opacity: 0, x: 150 + i * 15 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        x: [150 + i * 15, 200 + i * 15, 250 + i * 15],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Clean Progress Bar */}
                        <motion.rect
                            x="80"
                            y="300"
                            width="180"
                            height="3"
                            rx="1.5"
                            fill="rgba(156, 163, 175, 0.3)"
                            variants={itemVariants}
                        />
                        <motion.rect
                            x="80"
                            y="300"
                            width="0"
                            height="3"
                            rx="1.5"
                            fill="#10b981"
                            variants={{
                                hidden: { width: 0 },
                                visible: {
                                    width: [0, 180],
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 1
                                    }
                                }
                            }}
                        />
                        <text x="170" y="320" textAnchor="middle" className="text-xs fill-gray-600 font-medium">
                            LLM Application Development Progress
                        </text>
                    </svg>

                    {/* Updated Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-700 bg-white/90 backdrop-blur-sm rounded px-3 py-1.5 border border-gray-200/50"
                        variants={itemVariants}
                    >
                        GUI-Based LLM Development
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-700 bg-white/90 backdrop-blur-sm rounded px-3 py-1.5 border border-gray-200/50"
                        variants={itemVariants}
                    >
                        Secure Enterprise Applications
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}