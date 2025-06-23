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

    const serverVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [0.6, 1, 0.6],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const gpuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [0.3, 1, 0.3],
            transition: {
                duration: 1.8,
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
                        What is AI Box Hardware?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Dedicated on-premises servers engineered specifically for high-performance AI computation and inference</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Pre-installed Ubuntu-based OS with LangIQ's complete software ecosystem and development tools</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Four distinct hardware configurations featuring NVIDIA Blackwell Ultra GPUs and AMD Threadripper processors</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Comprehensive development environment including Jupyter notebooks, VSCode, and PyCharm pre-configured</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">GPU-accelerated libraries like CUDA, cuDNN, and TensorRT optimized for maximum computational throughput</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - AI Hardware Processing Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Data Input Sources */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="60" width="70" height="50" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                            <text x="55" y="80" textAnchor="middle" className="text-xs fill-green-600 font-medium">Training</text>
                            <text x="55" y="95" textAnchor="middle" className="text-xs fill-green-600 font-medium">Data</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="20" y="150" width="70" height="50" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="55" y="170" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Model</text>
                            <text x="55" y="185" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Inference</text>
                        </motion.g>

                        {/* AI Server Rack */}
                        <motion.g variants={serverVariants}>
                            <rect x="150" y="50" width="100" height="200" rx="8" fill="rgba(75, 85, 99, 0.8)" stroke="#4b5563" strokeWidth="3" />

                            {/* Server Units */}
                            {[...Array(6)].map((_, i) => (
                                <g key={i}>
                                    <rect x="160" y={70 + i * 28} width="80" height="20" rx="2" fill="rgba(156, 163, 175, 0.9)" stroke="#6b7280" strokeWidth="1" />
                                    {/* GPU Indicators */}
                                    <motion.rect
                                        x="165" y={75 + i * 28}
                                        width="10" height="10"
                                        rx="1"
                                        fill="#10b981"
                                        variants={gpuVariants}
                                        style={{ animationDelay: `${i * 0.2}s` }}
                                    />
                                    <motion.rect
                                        x="180" y={75 + i * 28}
                                        width="10" height="10"
                                        rx="1"
                                        fill="#10b981"
                                        variants={gpuVariants}
                                        style={{ animationDelay: `${i * 0.2 + 0.1}s` }}
                                    />
                                    <motion.rect
                                        x="195" y={75 + i * 28}
                                        width="10" height="10"
                                        rx="1"
                                        fill="#10b981"
                                        variants={gpuVariants}
                                        style={{ animationDelay: `${i * 0.2 + 0.2}s` }}
                                    />
                                    <motion.rect
                                        x="210" y={75 + i * 28}
                                        width="10" height="10"
                                        rx="1"
                                        fill="#10b981"
                                        variants={gpuVariants}
                                        style={{ animationDelay: `${i * 0.2 + 0.3}s` }}
                                    />
                                </g>
                            ))}

                            {/* Server Label */}
                            <text x="200" y="270" textAnchor="middle" className="text-xs fill-gray-300 font-bold">AI BOX</text>
                            <text x="200" y="285" textAnchor="middle" className="text-xs fill-gray-400 font-medium">HARDWARE</text>
                        </motion.g>

                        {/* Output */}
                        <motion.g variants={itemVariants}>
                            <rect x="310" y="120" width="70" height="60" rx="6" fill="rgba(147, 51, 234, 0.2)" stroke="#9333ea" strokeWidth="2" />
                            <text x="345" y="140" textAnchor="middle" className="text-xs fill-purple-600 font-medium">AI Model</text>
                            <text x="345" y="155" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Outputs</text>
                        </motion.g>

                        {/* Data Flow Lines */}
                        <motion.path
                            d="M90 85 Q120 85 150 120"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M90 175 Q120 175 150 180"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M250 150 Q280 150 310 150"
                            stroke="#9333ea"
                            strokeWidth="3"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Data Packets */}
                        {[...Array(8)].map((_, i) => (
                            <motion.rect
                                key={i}
                                x={110 + i * 25}
                                y={140 + Math.sin(i) * 20}
                                width="6"
                                height="6"
                                rx="1"
                                fill={i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#3b82f6" : "#9333ea"}
                                variants={particleVariants}
                                style={{ animationDelay: `${i * 0.4}s` }}
                            />
                        ))}

                        {/* Processing Heat Indicators */}
                        {[...Array(12)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={170 + (i % 4) * 20}
                                cy={80 + Math.floor(i / 4) * 40}
                                r="1.5"
                                fill="#ef4444"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: [0, 0.8, 0],
                                        y: [0, -10, -20],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* GPU Activity Bars */}
                        <motion.g variants={itemVariants}>
                            <rect x="260" y="80" width="20" height="4" rx="2" fill="rgba(16, 185, 129, 0.3)" />
                            <motion.rect
                                x="260" y="80"
                                width="20" height="4"
                                rx="2"
                                fill="#10b981"
                                variants={{
                                    hidden: { scaleX: 0 },
                                    visible: {
                                        scaleX: [0, 1, 0.3, 1, 0.7],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }
                                }}
                                style={{ transformOrigin: "left" }}
                            />
                            <text x="290" y="82" className="text-xs fill-emerald-600 font-medium">GPU</text>
                        </motion.g>
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Data Input
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        AI Processing
                    </motion.div>
                    <motion.div
                        className="absolute top-16 right-16 text-xs font-medium text-emerald-600 bg-emerald-50/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        NVIDIA Blackwell Ultra
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
