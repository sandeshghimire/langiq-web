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

    const agentVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,

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
                        Advantages
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Frontend GUI-based application for designing, developing, testing and verifying custom enterprise-grade LLM applications</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Visual development environment with integrated LLM workflow builder and comprehensive verification testing tools</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Enterprise-grade data safety protocols with end-to-end encryption and privacy-compliant processing pipelines</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Advanced security framework featuring secure model deployment, encrypted API channels and comprehensive data protection</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Role-based access control with audit logging and privacy standards ensuring secure collaboration and data governance</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - AI Studio GUI Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* GUI Interface Frame */}
                        <motion.g variants={itemVariants}>
                            <rect x="50" y="50" width="300" height="200" rx="8" fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" strokeWidth="2" />
                            <rect x="50" y="50" width="300" height="30" rx="8" fill="rgba(59, 130, 246, 0.1)" />
                            <circle cx="70" cy="65" r="4" fill="#ef4444" />
                            <circle cx="85" cy="65" r="4" fill="#f59e0b" />
                            <circle cx="100" cy="65" r="4" fill="#10b981" />
                            <text x="200" y="70" textAnchor="middle" className="text-xs fill-blue-600 font-medium">AI Studio GUI</text>
                        </motion.g>

                        {/* Design Canvas */}
                        <motion.g variants={itemVariants}>
                            <rect x="70" y="100" width="120" height="80" rx="4" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />
                            <text x="130" y="135" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Design</text>
                            <text x="130" y="150" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Canvas</text>
                        </motion.g>

                        {/* Workflow Nodes */}
                        <motion.g variants={agentVariants}>
                            <rect x="210" y="100" width="50" height="25" rx="4" fill="rgba(147, 51, 234, 0.1)" stroke="#9333ea" strokeWidth="1" />
                            <text x="235" y="116" textAnchor="middle" className="text-xs fill-purple-600 font-medium">LLM</text>
                        </motion.g>

                        <motion.g variants={agentVariants}>
                            <rect x="280" y="100" width="50" height="25" rx="4" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" />
                            <text x="305" y="116" textAnchor="middle" className="text-xs fill-green-600 font-medium">Test</text>
                        </motion.g>

                        <motion.g variants={agentVariants}>
                            <rect x="210" y="140" width="50" height="25" rx="4" fill="rgba(251, 146, 60, 0.1)" stroke="#fb923c" strokeWidth="1" />
                            <text x="235" y="156" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Verify</text>
                        </motion.g>

                        <motion.g variants={agentVariants}>
                            <rect x="280" y="140" width="50" height="25" rx="4" fill="rgba(236, 72, 153, 0.1)" stroke="#ec4899" strokeWidth="1" />
                            <text x="305" y="156" textAnchor="middle" className="text-xs fill-pink-600 font-medium">Deploy</text>
                        </motion.g>

                        {/* Connection Lines */}
                        <motion.path
                            d="M190 140 L210 112"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={communicationVariants}
                        />
                        <motion.path
                            d="M260 112 L280 112"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={communicationVariants}
                        />
                        <motion.path
                            d="M260 152 L280 152"
                            stroke="#fb923c"
                            strokeWidth="2"
                            fill="none"
                            variants={communicationVariants}
                        />

                        {/* Security Shield */}
                        <motion.g variants={pulseVariants}>
                            <path d="M80 270 L80 300 Q80 310 90 310 L110 310 Q120 310 120 300 L120 285 Q120 275 110 275 L100 275 L100 270 Q100 260 90 260 Q80 260 80 270 Z"
                                fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="1.5" />
                            <text x="100" y="295" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Security</text>
                        </motion.g>

                        {/* Data Privacy Icon */}
                        <motion.g variants={pulseVariants}>
                            <rect x="160" y="270" width="40" height="30" rx="4" fill="rgba(147, 51, 234, 0.1)" stroke="#9333ea" strokeWidth="1.5" />
                            <circle cx="180" cy="278" r="3" fill="none" stroke="#9333ea" strokeWidth="1" />
                            <rect x="177" y="282" width="6" height="8" rx="1" fill="rgba(147, 51, 234, 0.2)" />
                            <text x="180" y="295" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Privacy</text>
                        </motion.g>

                        {/* Encryption Badge */}
                        <motion.g variants={pulseVariants}>
                            <rect x="250" y="270" width="50" height="30" rx="4" fill="rgba(251, 146, 60, 0.1)" stroke="#fb923c" strokeWidth="1.5" />
                            <path d="M265 280 L275 275 L285 280 L285 290 L275 295 L265 290 Z"
                                fill="none" stroke="#fb923c" strokeWidth="1" />
                            <text x="275" y="295" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Encrypted</text>
                        </motion.g>

                        {/* Data Flow Particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={80 + i * 40}
                                cy={320}
                                r="2"
                                fill={["#10b981", "#3b82f6", "#9333ea"][i % 3]}
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        x: [0, 20, 40],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.3
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Status Indicators */}
                        <motion.g variants={itemVariants}>
                            <rect x="320" y="20" width="60" height="25" rx="4" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="1" />
                            <circle cx="330" cy="32" r="3" fill="#10b981" />
                            <text x="345" y="37" className="text-xs fill-emerald-600 font-medium">Active</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="20" y="350" width="70" height="25" rx="4" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1" />
                            <text x="55" y="367" textAnchor="middle" className="text-xs fill-blue-600 font-medium">GUI Studio</text>
                        </motion.g>
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-2 py-1 border border-gray-200/30"
                        variants={itemVariants}
                    >
                        Visual Development
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-2 py-1 border border-gray-200/30"
                        variants={itemVariants}
                    >
                        Enterprise Security
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
