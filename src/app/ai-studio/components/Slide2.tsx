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
                            <p className="text-gray-600">Visual development environment for creating LLM applications through drag-and-drop interfaces</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Collaborative workspace supporting multiple team members with role-based access control</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Unified platform connecting diverse LLM models from OpenAI, Google, Anthropic, and open-source alternatives</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Integrated prompt engineering tools with version control and real-time testing capabilities</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">One-click deployment pipeline supporting cloud and on-premises infrastructure environments</p>
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
                            <rect x="120" y="80" width="160" height="120" rx="8" fill="rgba(147, 51, 234, 0.1)" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" />
                            <text x="200" y="95" textAnchor="middle" className="text-xs fill-purple-600 font-bold">AI Studio Canvas</text>

                            {/* Drag & Drop Components */}
                            <motion.rect x="140" y="110" width="40" height="25" rx="4" fill="#22c55e" variants={studioPulseVariants} />
                            <text x="160" y="125" textAnchor="middle" className="text-xs fill-white font-medium">LLM</text>

                            <motion.rect x="200" y="110" width="40" height="25" rx="4" fill="#3b82f6" variants={studioPulseVariants} />
                            <text x="220" y="125" textAnchor="middle" className="text-xs fill-white font-medium">Prompt</text>

                            <motion.rect x="140" y="150" width="40" height="25" rx="4" fill="#f59e0b" variants={studioPulseVariants} />
                            <text x="160" y="165" textAnchor="middle" className="text-xs fill-white font-medium">Data</text>

                            <motion.rect x="200" y="150" width="40" height="25" rx="4" fill="#ef4444" variants={studioPulseVariants} />
                            <text x="220" y="165" textAnchor="middle" className="text-xs fill-white font-medium">Output</text>
                        </motion.g>

                        {/* LLM Provider Ecosystem */}
                        <motion.g variants={componentVariants}>
                            {/* OpenAI */}
                            <circle cx="60" cy="140" r="20" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="60" y="135" textAnchor="middle" className="text-xs fill-emerald-600 font-bold">OpenAI</text>
                            <text x="60" y="147" textAnchor="middle" className="text-xs fill-emerald-600">GPT-4</text>

                            {/* Google */}
                            <circle cx="60" cy="200" r="20" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="60" y="195" textAnchor="middle" className="text-xs fill-green-600 font-bold">Google</text>
                            <text x="60" y="207" textAnchor="middle" className="text-xs fill-green-600">Gemini</text>

                            {/* Anthropic */}
                            <circle cx="60" cy="260" r="20" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
                            <text x="60" y="255" textAnchor="middle" className="text-xs fill-purple-600 font-bold">Anthropic</text>
                            <text x="60" y="267" textAnchor="middle" className="text-xs fill-purple-600">Claude</text>
                        </motion.g>

                        {/* Collaboration Team */}
                        <motion.g variants={collaboratorVariants}>
                            {/* Team Members */}
                            <circle cx="340" cy="120" r="12" fill="#3b82f6" />
                            <text x="340" y="125" textAnchor="middle" className="text-xs fill-white font-bold">👨‍💻</text>
                            <text x="340" y="140" textAnchor="middle" className="text-xs fill-blue-600">Developer</text>

                            <circle cx="340" cy="170" r="12" fill="#f59e0b" />
                            <text x="340" y="175" textAnchor="middle" className="text-xs fill-white font-bold">🎨</text>
                            <text x="340" y="190" textAnchor="middle" className="text-xs fill-amber-600">Designer</text>

                            <circle cx="340" cy="220" r="12" fill="#ef4444" />
                            <text x="340" y="225" textAnchor="middle" className="text-xs fill-white font-bold">📊</text>
                            <text x="340" y="240" textAnchor="middle" className="text-xs fill-red-600">Analyst</text>
                        </motion.g>

                        {/* Model Connections to Studio */}
                        <motion.path
                            d="M80 140 Q100 130 120 140"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M80 200 Q100 170 120 160"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M80 260 Q100 210 120 180"
                            stroke="#a855f7"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />

                        {/* Studio to Collaboration Connections */}
                        <motion.path
                            d="M280 130 Q310 125 328 120"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M280 150 Q310 160 328 170"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M280 170 Q310 195 328 220"
                            stroke="#ef4444"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />

                        {/* Data Flow Animation */}
                        {[...Array(6)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={90}
                                cy={160 + i * 15}
                                r="2"
                                fill={`hsl(${120 + i * 40}, 70%, 50%)`}
                                variants={{
                                    hidden: { opacity: 0, x: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        x: [0, 160, 0],
                                        transition: {
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: i * 0.3
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Deployment Animation */}
                        <motion.g variants={componentVariants}>
                            <rect x="150" y="300" width="100" height="30" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
                            <text x="200" y="320" textAnchor="middle" className="text-xs fill-emerald-600 font-bold">One-Click Deploy</text>

                            {/* Deployment targets */}
                            <circle cx="180" cy="350" r="8" fill="#0ea5e9" />
                            <text x="180" y="355" textAnchor="middle" className="text-xs fill-white">☁️</text>
                            <text x="180" y="370" textAnchor="middle" className="text-xs fill-sky-600">Cloud</text>

                            <circle cx="220" cy="350" r="8" fill="#7c3aed" />
                            <text x="220" y="355" textAnchor="middle" className="text-xs fill-white">🏢</text>
                            <text x="220" y="370" textAnchor="middle" className="text-xs fill-violet-600">On-Prem</text>
                        </motion.g>

                        {/* Deployment Connection */}
                        <motion.path
                            d="M200 200 Q200 250 200 300"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            variants={connectionVariants}
                        />
                    </svg>

                    {/* Updated Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-3 py-1.5 shadow-sm"
                        variants={itemVariants}
                    >
                        🎨 Visual Development
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-3 py-1.5 shadow-sm"
                        variants={itemVariants}
                    >
                        🚀 One-Click Deploy
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 left-2 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        🤖 LLMs
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 right-2 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        👥 Team
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
