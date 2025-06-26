import { motion } from "framer-motion";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide2({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
    // Animation variants for AI Studio concepts
    const componentVariants = {
        hidden: { opacity: 0, scale: 0, y: 20 },
        visible: {
            opacity: 1,
            scale: [0, 1.1, 1],
            y: 0,
            transition: {
                duration: 0.8,

            }
        }
    };

    const connectionVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,

            }
        }
    };

    const studioPulseVariants = {
        hidden: { scale: 1, opacity: 0.7 },
        visible: {
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.9, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
            }
        }
    };

    const collaboratorVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: [0, 1, 0.8, 1],
            x: [0, 5, 0],
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
                        What is AI Studio ?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Frontend GUI-based application for designing, developing, testing and verifying enterprise-grade LLM applications</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Secure collaborative workspace with role-based access control, data encryption, and comprehensive audit trails</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Privacy-first platform integrating LLM workflows with data residency controls and zero-trust security architecture</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Enterprise-grade prompt engineering tools with version control, compliance monitoring, and sensitive data protection</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Secure deployment pipeline with end-to-end encryption, SOC2 compliance, and private cloud infrastructure options</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - AI Studio Environment Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Visual Development Environment */}
                        <motion.g variants={componentVariants}>
                            {/* Main Studio Canvas */}
                            <rect x="120" y="80" width="160" height="120" rx="8" fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" strokeWidth="2" />
                            <text x="200" y="95" textAnchor="middle" className="text-xs fill-indigo-600 font-medium">AI Studio</text>

                            {/* Clean Component Blocks */}
                            <motion.rect x="140" y="110" width="35" height="20" rx="4" fill="#10b981" variants={studioPulseVariants} />
                            <text x="157" y="122" textAnchor="middle" className="text-xs fill-white font-medium">LLM</text>

                            <motion.rect x="185" y="110" width="35" height="20" rx="4" fill="#3b82f6" variants={studioPulseVariants} />
                            <text x="202" y="122" textAnchor="middle" className="text-xs fill-white font-medium">Prompt</text>

                            <motion.rect x="230" y="110" width="35" height="20" rx="4" fill="#f59e0b" variants={studioPulseVariants} />
                            <text x="247" y="122" textAnchor="middle" className="text-xs fill-white font-medium">Data</text>

                            <motion.rect x="140" y="150" width="35" height="20" rx="4" fill="#ef4444" variants={studioPulseVariants} />
                            <text x="157" y="162" textAnchor="middle" className="text-xs fill-white font-medium">Test</text>

                            <motion.rect x="185" y="150" width="35" height="20" rx="4" fill="#8b5cf6" variants={studioPulseVariants} />
                            <text x="202" y="162" textAnchor="middle" className="text-xs fill-white font-medium">Deploy</text>

                            <motion.rect x="230" y="150" width="35" height="20" rx="4" fill="#06b6d4" variants={studioPulseVariants} />
                            <text x="247" y="162" textAnchor="middle" className="text-xs fill-white font-medium">Monitor</text>
                        </motion.g>

                        {/* LLM Provider Ecosystem */}
                        <motion.g variants={componentVariants}>
                            {/* Provider Nodes */}
                            <rect x="40" y="120" width="40" height="40" rx="8" fill="#10b981" />
                            <text x="60" y="138" textAnchor="middle" className="text-xs fill-white font-medium">OpenAI</text>
                            <text x="60" y="150" textAnchor="middle" className="text-xs fill-white opacity-80">GPT-4</text>

                            <rect x="40" y="180" width="40" height="40" rx="8" fill="#22c55e" />
                            <text x="60" y="198" textAnchor="middle" className="text-xs fill-white font-medium">Google</text>
                            <text x="60" y="210" textAnchor="middle" className="text-xs fill-white opacity-80">Gemini</text>

                            <rect x="40" y="240" width="40" height="40" rx="8" fill="#a855f7" />
                            <text x="60" y="258" textAnchor="middle" className="text-xs fill-white font-medium">Claude</text>
                            <text x="60" y="270" textAnchor="middle" className="text-xs fill-white opacity-80">3.5</text>
                        </motion.g>

                        {/* Team Collaboration */}
                        <motion.g variants={collaboratorVariants}>
                            {/* Team Member Nodes */}
                            <rect x="320" y="100" width="40" height="40" rx="8" fill="#3b82f6" />
                            <text x="340" y="118" textAnchor="middle" className="text-xs fill-white font-medium">Dev</text>
                            <text x="340" y="130" textAnchor="middle" className="text-xs fill-white opacity-80">Admin</text>

                            <rect x="320" y="150" width="40" height="40" rx="8" fill="#f59e0b" />
                            <text x="340" y="168" textAnchor="middle" className="text-xs fill-white font-medium">Design</text>
                            <text x="340" y="180" textAnchor="middle" className="text-xs fill-white opacity-80">Editor</text>

                            <rect x="320" y="200" width="40" height="40" rx="8" fill="#ef4444" />
                            <text x="340" y="218" textAnchor="middle" className="text-xs fill-white font-medium">Data</text>
                            <text x="340" y="230" textAnchor="middle" className="text-xs fill-white opacity-80">Viewer</text>
                        </motion.g>

                        {/* Clean Connection Lines */}
                        <motion.path
                            d="M80 140 L120 140"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M80 200 L120 160"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M80 260 L120 180"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />

                        <motion.path
                            d="M280 120 L320 120"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M280 140 L320 170"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M280 160 L320 220"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />

                        {/* Simple Data Flow */}
                        {[...Array(3)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={100}
                                cy={160 + i * 20}
                                r="3"
                                fill="#6366f1"
                                variants={{
                                    hidden: { opacity: 0, x: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        x: [0, 120, 0],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Security & Compliance */}
                        <motion.g variants={componentVariants}>
                            <rect x="50" y="320" width="60" height="30" rx="6" fill="#10b981" />
                            <text x="80" y="338" textAnchor="middle" className="text-xs fill-white font-medium">Security</text>

                            <rect x="130" y="320" width="60" height="30" rx="6" fill="#6366f1" />
                            <text x="160" y="338" textAnchor="middle" className="text-xs fill-white font-medium">Privacy</text>

                            <rect x="210" y="320" width="60" height="30" rx="6" fill="#8b5cf6" />
                            <text x="240" y="338" textAnchor="middle" className="text-xs fill-white font-medium">Compliance</text>
                        </motion.g>

                        {/* Deployment */}
                        <motion.g variants={componentVariants}>
                            <rect x="290" y="320" width="70" height="30" rx="6" fill="#06b6d4" />
                            <text x="325" y="338" textAnchor="middle" className="text-xs fill-white font-medium">Deploy</text>

                            <circle cx="310" cy="370" r="8" fill="#0ea5e9" />
                            <text x="310" y="374" textAnchor="middle" className="text-xs fill-white font-medium">Cloud</text>

                            <circle cx="340" cy="370" r="8" fill="#7c3aed" />
                            <text x="340" y="374" textAnchor="middle" className="text-xs fill-white font-medium">Local</text>
                        </motion.g>

                        {/* Connection from Studio to Deployment */}
                        <motion.path
                            d="M200 200 Q250 260 325 320"
                            stroke="#06b6d4"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                    </svg>

                    {/* Clean Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/95 rounded-md px-2 py-1 shadow-sm"
                        variants={itemVariants}
                    >
                        Visual Studio
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/95 rounded-md px-2 py-1 shadow-sm"
                        variants={itemVariants}
                    >
                        Secure Deploy
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 left-2 text-xs font-medium text-gray-600 bg-white/95 rounded-md px-2 py-1 shadow-sm"
                        variants={itemVariants}
                    >
                        LLM Models
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 right-2 text-xs font-medium text-gray-600 bg-white/95 rounded-md px-2 py-1 shadow-sm"
                        variants={itemVariants}
                    >
                        Team Access
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
