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
                        How Does AI Box Solve These Problems?
                    </motion.h1>


                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Provides complete data sovereignty by processing all AI workloads within organizational premises</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Delivers cost-effective long-term solution for organizations with consistent high-volume AI requirements</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Ensures predictable, low-latency performance through dedicated hardware resources and optimized configurations</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Offers full customization control over hardware specifications, software configurations, and security protocols</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Enables immediate deployment with pre-configured software stack eliminating complex setup procedures</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - AI Box Solution Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* AI Box Container - Secure Boundary */}
                        <motion.g variants={pulseVariants}>
                            <rect x="80" y="60" width="240" height="200" rx="15"
                                fill="rgba(34, 197, 94, 0.1)"
                                stroke="#22c55e"
                                strokeWidth="3"
                                strokeDasharray="8,4" />
                            <text x="200" y="50" textAnchor="middle" className="text-sm fill-green-600 font-bold">AI Box - Secure Environment</text>
                        </motion.g>

                        {/* Data Input Sources */}
                        <motion.g variants={itemVariants}>
                            <circle cx="40" cy="100" r="15" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" strokeWidth="2" />
                            <text x="40" y="105" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Data</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <circle cx="40" cy="150" r="15" fill="rgba(147, 51, 234, 0.3)" stroke="#9333ea" strokeWidth="2" />
                            <text x="40" y="155" textAnchor="middle" className="text-xs fill-purple-600 font-medium">Files</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <circle cx="40" cy="200" r="15" fill="rgba(245, 158, 11, 0.3)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="40" y="205" textAnchor="middle" className="text-xs fill-amber-600 font-medium">API</text>
                        </motion.g>

                        {/* AI Processing Core */}
                        <motion.g variants={pulseVariants}>
                            <rect x="140" y="120" width="120" height="80" rx="10"
                                fill="rgba(16, 185, 129, 0.2)"
                                stroke="#10b981"
                                strokeWidth="2" />
                            <text x="200" y="150" textAnchor="middle" className="text-sm fill-emerald-600 font-bold">AI Processing</text>
                            <text x="200" y="170" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">On-Premise</text>
                        </motion.g>

                        {/* Cost Indicator */}
                        <motion.g variants={itemVariants}>
                            <circle cx="120" cy="90" r="12" fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" strokeWidth="2" />
                            <text x="120" y="95" textAnchor="middle" className="text-xs fill-green-600 font-bold">$</text>
                        </motion.g>

                        {/* Performance Indicator */}
                        <motion.g variants={itemVariants}>
                            <polygon points="280,90 292,100 280,110 268,100"
                                fill="rgba(239, 68, 68, 0.3)"
                                stroke="#ef4444"
                                strokeWidth="2" />
                            <text x="280" y="85" textAnchor="middle" className="text-xs fill-red-600 font-medium">Fast</text>
                        </motion.g>

                        {/* Security Shield */}
                        <motion.g variants={pulseVariants}>
                            <path d="M200 280 L190 290 L200 305 L210 290 Z"
                                fill="rgba(59, 130, 246, 0.3)"
                                stroke="#3b82f6"
                                strokeWidth="2" />
                            <text x="200" y="325" textAnchor="middle" className="text-xs fill-blue-600 font-medium">Secure</text>
                        </motion.g>

                        {/* Data Flow Lines with Security */}
                        <motion.path
                            d="M55 100 Q90 100 100 120"
                            stroke="#22c55e"
                            strokeWidth="3"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M55 150 Q90 150 120 140"
                            stroke="#22c55e"
                            strokeWidth="3"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M55 200 Q90 200 100 180"
                            stroke="#22c55e"
                            strokeWidth="3"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Output Arrows */}
                        <motion.path
                            d="M260 160 Q300 160 340 140"
                            stroke="#10b981"
                            strokeWidth="3"
                            fill="none"
                            variants={flowVariants}
                        />
                        <motion.path
                            d="M260 160 Q300 160 340 180"
                            stroke="#10b981"
                            strokeWidth="3"
                            fill="none"
                            variants={flowVariants}
                        />

                        {/* Output Results */}
                        <motion.g variants={itemVariants}>
                            <rect x="340" y="125" width="50" height="30" rx="5"
                                fill="rgba(16, 185, 129, 0.2)"
                                stroke="#10b981"
                                strokeWidth="2" />
                            <text x="365" y="145" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Results</text>
                        </motion.g>

                        <motion.g variants={itemVariants}>
                            <rect x="340" y="165" width="50" height="30" rx="5"
                                fill="rgba(16, 185, 129, 0.2)"
                                stroke="#10b981"
                                strokeWidth="2" />
                            <text x="365" y="185" textAnchor="middle" className="text-xs fill-emerald-600 font-medium">Insights</text>
                        </motion.g>

                        {/* Animated Security Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={90 + (i % 4) * 60}
                                cy={70 + Math.floor(i / 4) * 180}
                                r="2"
                                fill="#22c55e"
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        scale: [0, 1.5, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.25
                                            
                                        }
                                    }
                                }}
                            />
                        ))}

                        {/* Cost Efficiency Indicators */}
                        {[...Array(3)].map((_, i) => (
                            <motion.text
                                key={i}
                                x={150 + i * 30}
                                y={240}
                                textAnchor="middle"
                                className="text-xs fill-green-600 font-bold"
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: {
                                        opacity: [0, 1, 0],
                                        y: [10, 0, -10],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                            
                                        }
                                    }
                                }}
                            >
                                $
                            </motion.text>
                        ))}
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Data Sovereignty
                    </motion.div>
                    <motion.div
                        className="absolute top-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Cost Effective
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 left-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Low Latency
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Ready to Deploy
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
