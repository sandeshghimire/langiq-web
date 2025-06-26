import { motion } from "framer-motion";

interface Slide4Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide4({ slideVariants, itemVariants, isActive, setRef }: Slide4Props) {
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
                        className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        AI Studio Solutions
                    </motion.h1>


                    <div className="space-y-3">
                        <motion.div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-gray-200/30" variants={itemVariants}>
                            <p className="text-gray-700 text-base font-medium">Frontend GUI-based application to design, develop, test and verify custom enterprise-grade LLM applications</p>
                        </motion.div>

                        <motion.div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-gray-200/30" variants={itemVariants}>
                            <p className="text-gray-700 text-base font-medium">Streamlines LLM workflow integration through visual components with built-in data safety protocols</p>
                        </motion.div>

                        <motion.div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-gray-200/30" variants={itemVariants}>
                            <p className="text-gray-700 text-base font-medium">Ensures enterprise security standards with encrypted data handling and privacy-compliant processing</p>
                        </motion.div>

                        <motion.div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-gray-200/30" variants={itemVariants}>
                            <p className="text-gray-700 text-base font-medium">Automates deployment with integrated security monitoring and compliance verification capabilities</p>
                        </motion.div>

                        <motion.div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-gray-200/30" variants={itemVariants}>
                            <p className="text-gray-700 text-base font-medium">Accelerates secure LLM development from weeks to days through validated templates and testing frameworks</p>
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
                            <rect x="20" y="30" width="120" height="60" rx="8" fill="transparent" stroke="#22c55e" strokeWidth="3" />
                            <text x="80" y="50" textAnchor="middle" className="text-sm fill-green-700 font-bold">GUI Designer</text>
                            <text x="80" y="68" textAnchor="middle" className="text-sm fill-green-700 font-semibold">Visual Interface</text>
                            <rect x="30" y="42" width="20" height="12" rx="2" fill="#22c55e" opacity="0.8" />
                            <rect x="55" y="42" width="20" height="12" rx="2" fill="#22c55e" opacity="0.6" />
                            <rect x="80" y="42" width="20" height="12" rx="2" fill="#22c55e" opacity="0.8" />
                        </motion.g>

                        {/* LLM Integration Hub */}
                        <motion.g variants={itemVariants}>
                            <rect x="180" y="30" width="120" height="60" rx="8" fill="transparent" stroke="#3b82f6" strokeWidth="3" />
                            <text x="240" y="50" textAnchor="middle" className="text-sm fill-blue-700 font-bold">LLM Integration</text>
                            <text x="240" y="68" textAnchor="middle" className="text-sm fill-blue-700 font-semibold">Workflow Hub</text>
                            <circle cx="200" cy="58" r="5" fill="#3b82f6" opacity="0.8" />
                            <circle cx="220" cy="58" r="5" fill="#3b82f6" opacity="0.6" />
                            <circle cx="240" cy="58" r="5" fill="#3b82f6" opacity="0.8" />
                            <circle cx="260" cy="58" r="5" fill="#3b82f6" opacity="0.6" />
                            <circle cx="280" cy="58" r="5" fill="#3b82f6" opacity="0.8" />
                        </motion.g>

                        {/* Security & Privacy Center */}
                        <motion.g variants={pulseVariants}>
                            <rect x="70" y="120" width="140" height="70" rx="10" fill="transparent" stroke="#9333ea" strokeWidth="3" />
                            <text x="140" y="142" textAnchor="middle" className="text-base fill-purple-700 font-bold">Security Center</text>
                            <text x="140" y="158" textAnchor="middle" className="text-sm fill-purple-700 font-semibold">Data Safety & Privacy</text>
                            <text x="140" y="174" textAnchor="middle" className="text-sm fill-purple-700 font-semibold">Compliance Monitoring</text>
                            {/* Security shield icon */}
                            <path d="M115 148 L122 142 L133 142 L140 148 L133 165 L122 165 Z" fill="#9333ea" opacity="0.8" />
                            <path d="M150 148 L157 142 L168 142 L175 148 L168 165 L157 165 Z" fill="#9333ea" opacity="0.6" />
                        </motion.g>

                        {/* Enterprise Deployment */}
                        <motion.g variants={itemVariants}>
                            <rect x="250" y="120" width="130" height="70" rx="8" fill="transparent" stroke="#10b981" strokeWidth="3" />
                            <text x="315" y="142" textAnchor="middle" className="text-sm fill-emerald-700 font-bold">Enterprise Deploy</text>
                            <text x="315" y="158" textAnchor="middle" className="text-sm fill-emerald-700 font-semibold">Secure Monitoring</text>
                            <text x="315" y="174" textAnchor="middle" className="text-sm fill-emerald-700 font-semibold">Compliance Check</text>
                            {/* Deployment boxes */}
                            <rect x="260" y="150" width="18" height="10" rx="3" fill="#10b981" opacity="0.8" />
                            <rect x="285" y="150" width="18" height="10" rx="3" fill="#10b981" opacity="0.6" />
                            <rect x="310" y="150" width="18" height="10" rx="3" fill="#10b981" opacity="0.8" />
                            <rect x="335" y="150" width="18" height="10" rx="3" fill="#10b981" opacity="0.6" />
                        </motion.g>

                        {/* Testing & Verification */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="230" width="140" height="60" rx="8" fill="transparent" stroke="#f59e0b" strokeWidth="3" />
                            <text x="90" y="252" textAnchor="middle" className="text-sm fill-amber-700 font-bold">Test & Verify</text>
                            <text x="90" y="268" textAnchor="middle" className="text-sm fill-amber-700 font-semibold">Quality Assurance</text>
                            <text x="90" y="284" textAnchor="middle" className="text-sm fill-amber-700 font-semibold">Performance Validation</text>
                            {/* Test indicators */}
                            <circle cx="40" cy="258" r="4" fill="#f59e0b" opacity="0.9" />
                            <circle cx="65" cy="258" r="4" fill="#f59e0b" opacity="0.7" />
                            <circle cx="90" cy="258" r="4" fill="#f59e0b" opacity="0.9" />
                            <circle cx="115" cy="258" r="4" fill="#f59e0b" opacity="0.7" />
                            <circle cx="140" cy="258" r="4" fill="#f59e0b" opacity="0.9" />
                        </motion.g>

                        {/* Custom LLM Applications */}
                        <motion.g variants={itemVariants}>
                            <rect x="200" y="230" width="160" height="60" rx="8" fill="transparent" stroke="#a855f7" strokeWidth="3" />
                            <text x="280" y="252" textAnchor="middle" className="text-sm fill-violet-700 font-bold">Custom LLM Apps</text>
                            <text x="280" y="268" textAnchor="middle" className="text-sm fill-violet-700 font-semibold">Enterprise Ready</text>
                            <text x="280" y="284" textAnchor="middle" className="text-sm fill-violet-700 font-semibold">Scalable Architecture</text>
                            {/* App icons */}
                            <rect x="220" y="248" width="14" height="14" rx="4" fill="#a855f7" opacity="0.8" />
                            <rect x="245" y="248" width="14" height="14" rx="4" fill="#a855f7" opacity="0.6" />
                            <rect x="270" y="248" width="14" height="14" rx="4" fill="#a855f7" opacity="0.8" />
                            <rect x="295" y="248" width="14" height="14" rx="4" fill="#a855f7" opacity="0.6" />
                            <rect x="320" y="248" width="14" height="14" rx="4" fill="#a855f7" opacity="0.8" />
                        </motion.g>

                        {/* Clean Data Flow Connections */}
                        <motion.path
                            d="M80 90 Q80 105 70 120"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,4"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M240 90 Q240 105 210 120"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,4"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M210 155 Q230 155 250 155"
                            stroke="#9333ea"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,4"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M90 190 Q90 210 90 230"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,4"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M160 260 Q180 260 200 260"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,4"
                            variants={flowVariants}
                        />

                        {/* Security Status Indicators */}
                        <motion.rect
                            x="270"
                            y="175"
                            width="90"
                            height="3"
                            rx="1.5"
                            fill="rgba(16, 185, 129, 0.2)"
                            variants={itemVariants}
                        />
                        <motion.rect
                            x="270"
                            y="175"
                            width="0"
                            height="3"
                            rx="1.5"
                            fill="#10b981"
                            variants={{
                                hidden: { width: 0 },
                                visible: {
                                    width: [0, 90, 0],
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                    }
                                }
                            }}
                        />
                    </svg>

                    {/* Clean Floating Labels */}
                    <motion.div
                        className="absolute top-3 left-3 text-sm font-bold text-gray-800 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md"
                        variants={itemVariants}
                    >
                        GUI-Based LLM Studio
                    </motion.div>
                    <motion.div
                        className="absolute bottom-3 right-3 text-sm font-bold text-gray-800 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md"
                        variants={itemVariants}
                    >
                        Enterprise Security
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
