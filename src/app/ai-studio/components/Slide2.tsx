import { motion } from "framer-motion";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide2({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
    // Animation variants for AI concepts
    const neuronVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: [0, 1, 0.7, 1],
            scale: [0, 1.2, 0.8, 1],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const connectionVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: [0, 1, 0.6, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const brainPulseVariants = {
        hidden: { scale: 1, opacity: 0.5 },
        visible: {
            scale: [1, 1.15, 1],
            opacity: [0.5, 1, 0.8, 1],
            transition: {
                duration: 3,
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

                {/* Right Column - AI Concepts Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Data Input Layer */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="80" width="60" height="40" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="50" y="100" textAnchor="middle" className="text-xs fill-green-600 font-medium">Data</text>

                            <rect x="20" y="140" width="60" height="40" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="50" y="160" textAnchor="middle" className="text-xs fill-green-600 font-medium">Input</text>

                            <rect x="20" y="200" width="60" height="40" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="50" y="220" textAnchor="middle" className="text-xs fill-green-600 font-medium">Signal</text>
                        </motion.g>

                        {/* Neural Network Core */}
                        <motion.g variants={brainPulseVariants}>
                            {/* Main AI Brain */}
                            <ellipse cx="200" cy="160" rx="60" ry="45" fill="rgba(147, 51, 234, 0.15)" stroke="#9333ea" strokeWidth="3" />
                            <text x="200" y="155" textAnchor="middle" className="text-sm fill-purple-600 font-bold">AI</text>
                            <text x="200" y="170" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Intelligence</text>

                            {/* Neural Nodes */}
                            {[
                                { x: 170, y: 130 }, { x: 200, y: 120 }, { x: 230, y: 130 },
                                { x: 160, y: 160 }, { x: 240, y: 160 },
                                { x: 170, y: 190 }, { x: 200, y: 200 }, { x: 230, y: 190 }
                            ].map((node, i) => (
                                <motion.circle
                                    key={i}
                                    cx={node.x}
                                    cy={node.y}
                                    r="4"
                                    fill="#9333ea"
                                    variants={neuronVariants}
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                />
                            ))}
                        </motion.g>

                        {/* AI Capabilities Output */}
                        <motion.g variants={itemVariants}>
                            <rect x="320" y="60" width="70" height="35" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="355" y="80" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Learning</text>

                            <rect x="320" y="110" width="70" height="35" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="355" y="130" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Reasoning</text>

                            <rect x="320" y="160" width="70" height="35" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="355" y="180" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Problem</text>
                            <text x="355" y="190" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Solving</text>

                            <rect x="320" y="210" width="70" height="35" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
                            <text x="355" y="230" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Prediction</text>
                        </motion.g>

                        {/* Neural Connections */}
                        <motion.path
                            d="M80 100 Q140 100 140 160"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M80 160 Q140 160 140 160"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M80 220 Q140 220 140 160"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />

                        {/* Output Connections */}
                        <motion.path
                            d="M260 140 Q290 120 320 78"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M260 150 Q290 140 320 128"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M260 160 Q290 160 320 178"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />
                        <motion.path
                            d="M260 180 Q290 200 320 228"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            variants={connectionVariants}
                        />

                        {/* Animated Information Flow */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={120 + i * 25}
                                cy={140 + Math.sin(i * 0.8) * 30}
                                r="2"
                                fill={`hsl(${120 + i * 30}, 70%, 50%)`}
                                variants={{
                                    hidden: { opacity: 0, x: -10 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        x: [0, 180, 0],
                                        transition: {
                                            duration: 5,
                                            repeat: Infinity,
                                            delay: i * 0.3
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Thinking Indicators around brain */}
                        {[...Array(6)].map((_, i) => {
                            const angle = (i * 60) * Math.PI / 180;
                            const cx = 200 + Math.cos(angle) * 80;
                            const cy = 160 + Math.sin(angle) * 60;
                            return (
                                <motion.circle
                                    key={i}
                                    cx={cx}
                                    cy={cy}
                                    r="3"
                                    fill="#9333ea"
                                    variants={{
                                        hidden: { opacity: 0, scale: 0 },
                                        visible: {
                                            opacity: [0, 1, 0],
                                            scale: [0, 1.5, 0],
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.4
                                            }
                                        }
                                    }}
                                />
                            );
                        })}
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-3 py-1.5 shadow-sm"
                        variants={itemVariants}
                    >
                        🧠 Artificial Intelligence
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-3 py-1.5 shadow-sm"
                        variants={itemVariants}
                    >
                        🚀 Intelligent Automation
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 left-2 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        📊 Data
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 right-2 text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        ⚡ Results
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
