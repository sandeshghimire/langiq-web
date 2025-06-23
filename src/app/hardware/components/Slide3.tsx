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
                        Why is AI Box Hardware Required?
                    </motion.h1>
                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Cloud-based AI processing raises data privacy and security concerns for sensitive organizational information</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">High-volume inference and training operations incur substantial ongoing costs with cloud GPU instances</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Real-time AI applications demand consistent low-latency responses unavailable through shared cloud resources</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Organizations require complete control over their AI infrastructure and computational environment customization</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Regulatory compliance in industries like healthcare and finance necessitates on-premises data processing</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Hardware Infrastructure Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Cloud Infrastructure (Left Side) */}
                        <motion.g variants={itemVariants}>
                            {/* Cloud Shape */}
                            <path d="M40 100 Q20 80 40 60 Q60 40 80 60 Q100 40 120 60 Q140 80 120 100 Q140 120 120 140 Q100 160 80 140 Q60 160 40 140 Q20 120 40 100 Z"
                                fill="rgba(156, 163, 175, 0.3)" stroke="#9ca3af" strokeWidth="2" />
                            <text x="80" y="95" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Cloud</text>
                            <text x="80" y="110" textAnchor="middle" className="text-xs fill-gray-600 font-medium">Infrastructure</text>

                            {/* Warning Icons for Cloud Issues */}
                            <motion.circle cx="60" cy="180" r="8" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2"
                                variants={{
                                    hidden: { scale: 0, opacity: 0 },
                                    visible: { scale: 1, opacity: 1, transition: { delay: 1 } }
                                }} />
                            <text x="60" y="185" textAnchor="middle" className="text-xs fill-red-600 font-bold">!</text>

                            <motion.circle cx="100" cy="180" r="8" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2"
                                variants={{
                                    hidden: { scale: 0, opacity: 0 },
                                    visible: { scale: 1, opacity: 1, transition: { delay: 1.2 } }
                                }} />
                            <text x="100" y="185" textAnchor="middle" className="text-xs fill-red-600 font-bold">$</text>
                        </motion.g>

                        {/* VS Divider */}
                        <motion.g variants={itemVariants}>
                            <line x1="200" y1="50" x2="200" y2="350" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
                            <circle cx="200" cy="200" r="20" fill="rgba(75, 85, 99, 0.1)" stroke="#6b7280" strokeWidth="2" />
                            <text x="200" y="205" textAnchor="middle" className="text-sm fill-gray-600 font-bold">VS</text>
                        </motion.g>

                        {/* On-Premises Hardware (Right Side) */}
                        <motion.g variants={itemVariants}>
                            {/* Server Rack */}
                            <rect x="280" y="80" width="60" height="100" rx="4" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />

                            {/* Server Units */}
                            {[...Array(5)].map((_, i) => (
                                <motion.rect
                                    key={i}
                                    x="285"
                                    y={90 + i * 16}
                                    width="50"
                                    height="12"
                                    rx="2"
                                    fill="rgba(34, 197, 94, 0.4)"
                                    stroke="#22c55e"
                                    strokeWidth="1"
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { delay: 0.5 + i * 0.1 }
                                        }
                                    }}
                                />
                            ))}

                            <text x="310" y="200" textAnchor="middle" className="text-xs fill-green-600 font-medium">AI Box</text>
                            <text x="310" y="215" textAnchor="middle" className="text-xs fill-green-600 font-medium">Hardware</text>
                        </motion.g>

                        {/* Security Shield */}
                        <motion.g variants={pulseVariants}>
                            <path d="M300 240 Q310 230 320 240 L320 260 Q310 270 300 260 Z"
                                fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" strokeWidth="2" />
                            <text x="310" y="252" textAnchor="middle" className="text-xs fill-green-600 font-bold">🛡</text>
                        </motion.g>

                        {/* Performance Indicators */}
                        <motion.g variants={itemVariants}>
                            {/* Low Latency Indicator */}
                            <motion.circle cx="340" cy="300" r="15" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2"
                                variants={{
                                    hidden: { scale: 0 },
                                    visible: {
                                        scale: [0, 1.2, 1],
                                        transition: { delay: 2, duration: 0.8 }
                                    }
                                }} />
                            <text x="340" y="305" textAnchor="middle" className="text-xs fill-green-600 font-bold">⚡</text>
                        </motion.g>

                        {/* Data Flow Animation */}
                        <motion.path
                            d="M150 150 Q175 150 200 150"
                            stroke="#ef4444"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="10,5"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: [0, 1, 0],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                    }
                                }
                            }}
                        />

                        <motion.path
                            d="M200 150 Q225 150 250 150"
                            stroke="#22c55e"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="10,5"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: [0, 1, 0],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 0.5
                                    }
                                }
                            }}
                        />

                        {/* Floating Problem Indicators for Cloud */}
                        {[
                            { x: 50, y: 220, text: "Privacy Risk" },
                            { x: 110, y: 220, text: "High Cost" },
                            { x: 80, y: 250, text: "Latency" }
                        ].map((item, i) => (
                            <motion.g key={i} variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 1.5 + i * 0.3 }
                                }
                            }}>
                                <rect x={item.x - 20} y={item.y - 8} width="40" height="16" rx="8"
                                    fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="1" />
                                <text x={item.x} y={item.y + 2} textAnchor="middle" className="text-xs fill-red-600 font-medium">
                                    {item.text}
                                </text>
                            </motion.g>
                        ))}

                        {/* Benefits Indicators for On-Premises */}
                        {[
                            { x: 290, y: 280, text: "Secure" },
                            { x: 330, y: 280, text: "Fast" },
                            { x: 310, y: 320, text: "Control" }
                        ].map((item, i) => (
                            <motion.g key={i} variants={{
                                hidden: { opacity: 0, y: -10 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 2 + i * 0.3 }
                                }
                            }}>
                                <rect x={item.x - 15} y={item.y - 8} width="30" height="16" rx="8"
                                    fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" />
                                <text x={item.x} y={item.y + 2} textAnchor="middle" className="text-xs fill-green-600 font-medium">
                                    {item.text}
                                </text>
                            </motion.g>
                        ))}
                    </svg>

                    {/* Floating Labels */}
                    <motion.div
                        className="absolute top-4 left-4 text-xs font-medium text-red-600 bg-red-50 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        Cloud Limitations
                    </motion.div>
                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-green-600 bg-green-50 backdrop-blur-sm rounded px-2 py-1"
                        variants={itemVariants}
                    >
                        On-Premises Benefits
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
