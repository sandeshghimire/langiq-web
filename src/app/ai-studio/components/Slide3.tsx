import { motion } from "framer-motion";

interface Slide3Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide3({ slideVariants, itemVariants, isActive, setRef }: Slide3Props) {
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
                        Why AI Studio?
                    </motion.h1>
                    <div className="space-y-0  ">
                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Traditional AI development requires extensive coding expertise, limiting accessibility to specialized developers</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Complex prompt engineering and model integration create significant barriers for rapid prototyping</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Enterprise data security and privacy compliance requirements add complexity to LLM application deployment</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Team collaboration on AI projects often lacks centralized coordination, version management, and secure workflows</p>
                        </motion.div>

                        <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg pt-2 border border-gray-200/20" variants={itemVariants}>
                            <p className="text-gray-600">Organizations need secure, privacy-compliant AI solutions with faster time-to-market without compromising quality</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Problem/Solution Animation */}
                <motion.div
                    className="hidden md:block relative h-96"
                    variants={itemVariants}
                >
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                        {/* Traditional Development - Complex Code */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="30" width="100" height="80" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
                            <text x="70" y="50" textAnchor="middle" className="text-xs fill-red-600 font-medium">Manual</text>
                            <text x="70" y="65" textAnchor="middle" className="text-xs fill-red-600 font-medium">Development</text>

                            {/* Code lines */}
                            {[...Array(6)].map((_, i) => (
                                <motion.rect
                                    key={i}
                                    x="30"
                                    y={75 + i * 4}
                                    width={50 + (i % 3) * 10}
                                    height="2"
                                    fill="#ef4444"
                                    opacity="0.6"
                                    variants={{
                                        hidden: { scaleX: 0 },
                                        visible: {
                                            scaleX: 1,
                                            transition: { delay: i * 0.1, duration: 0.5 }
                                        }
                                    }}
                                />
                            ))}
                        </motion.g>

                        {/* Security Issues */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="130" width="100" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                            <text x="70" y="150" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Security</text>
                            <text x="70" y="165" textAnchor="middle" className="text-xs fill-orange-600 font-medium">Concerns</text>

                            {/* Security shield icon */}
                            <motion.path
                                d="M65 175 L75 175 L75 185 L70 188 L65 185 Z"
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="2"
                                variants={{
                                    hidden: { pathLength: 0 },
                                    visible: {
                                        pathLength: 1,
                                        transition: { delay: 0.5, duration: 0.8 }
                                    }
                                }}
                            />
                            <motion.line
                                x1="67"
                                y1="180"
                                x2="73"
                                y2="180"
                                stroke="#f59e0b"
                                strokeWidth="2"
                                strokeDasharray="2,2"
                                variants={{
                                    hidden: { pathLength: 0 },
                                    visible: {
                                        pathLength: 1,
                                        transition: { delay: 1, duration: 0.5 }
                                    }
                                }}
                            />
                        </motion.g>

                        {/* Complex Deployment */}
                        <motion.g variants={itemVariants}>
                            <rect x="20" y="210" width="100" height="60" rx="8" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" />
                            <text x="70" y="230" textAnchor="middle" className="text-xs fill-pink-600 font-medium">Complex</text>
                            <text x="70" y="245" textAnchor="middle" className="text-xs fill-pink-600 font-medium">Deployment</text>

                            {/* Complexity indicators */}
                            {[...Array(4)].map((_, i) => (
                                <motion.circle
                                    key={i}
                                    cx={45 + i * 10}
                                    cy="255"
                                    r="3"
                                    fill="#ec4899"
                                    opacity="0.7"
                                    variants={{
                                        hidden: { scale: 0 },
                                        visible: {
                                            scale: [0, 1.2, 1],
                                            transition: { delay: i * 0.2, duration: 0.5 }
                                        }
                                    }}
                                />
                            ))}
                        </motion.g>

                        {/* Arrow pointing to solution */}
                        <motion.path
                            d="M140 200 L250 200"
                            stroke="#10b981"
                            strokeWidth="3"
                            fill="none"
                            markerEnd="url(#arrowhead)"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { delay: 1.5, duration: 1 }
                                }
                            }}
                        />

                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7"
                                refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                            </marker>
                        </defs>

                        {/* AI Studio GUI Solution */}
                        <motion.g variants={itemVariants}>
                            <rect x="270" y="60" width="110" height="280" rx="12" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
                            <text x="325" y="80" textAnchor="middle" className="text-sm fill-green-600 font-bold">AI Studio GUI</text>

                            {/* GUI Window Header */}
                            <rect x="280" y="90" width="90" height="20" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
                            <circle cx="290" cy="100" r="2" fill="#16a34a" />
                            <circle cx="300" cy="100" r="2" fill="#16a34a" />
                            <circle cx="310" cy="100" r="2" fill="#16a34a" />

                            {/* Design Feature */}
                            <motion.rect
                                x="280" y="120" width="90" height="25" rx="4"
                                fill="rgba(16, 185, 129, 0.1)"
                                stroke="#10b981"
                                strokeWidth="1"
                                variants={pulseVariants}
                            />
                            <text x="325" y="135" textAnchor="middle" className="text-xs fill-green-700">Visual Design</text>

                            {/* Develop Feature */}
                            <motion.rect
                                x="280" y="155" width="90" height="25" rx="4"
                                fill="rgba(16, 185, 129, 0.1)"
                                stroke="#10b981"
                                strokeWidth="1"
                                variants={pulseVariants}
                            />
                            <text x="325" y="170" textAnchor="middle" className="text-xs fill-green-700">Drag & Drop Dev</text>

                            {/* Test Feature */}
                            <motion.rect
                                x="280" y="190" width="90" height="25" rx="4"
                                fill="rgba(16, 185, 129, 0.1)"
                                stroke="#10b981"
                                strokeWidth="1"
                                variants={pulseVariants}
                            />
                            <text x="325" y="205" textAnchor="middle" className="text-xs fill-green-700">Auto Testing</text>

                            {/* Security Feature */}
                            <motion.rect
                                x="280" y="225" width="90" height="25" rx="4"
                                fill="rgba(16, 185, 129, 0.1)"
                                stroke="#10b981"
                                strokeWidth="1"
                                variants={pulseVariants}
                            />
                            <text x="325" y="240" textAnchor="middle" className="text-xs fill-green-700">Secure Privacy</text>

                            {/* Verify Feature */}
                            <motion.rect
                                x="280" y="260" width="90" height="25" rx="4"
                                fill="rgba(16, 185, 129, 0.1)"
                                stroke="#10b981"
                                strokeWidth="1"
                                variants={pulseVariants}
                            />
                            <text x="325" y="275" textAnchor="middle" className="text-xs fill-green-700">LLM Verification</text>

                            {/* Deploy Feature */}
                            <motion.rect
                                x="280" y="295" width="90" height="25" rx="4"
                                fill="rgba(16, 185, 129, 0.1)"
                                stroke="#10b981"
                                strokeWidth="1"
                                variants={pulseVariants}
                            />
                            <text x="325" y="310" textAnchor="middle" className="text-xs fill-green-700">1-Click Deploy</text>

                            {/* Success checkmark */}
                            <motion.circle
                                cx="325"
                                cy="330"
                                r="8"
                                fill="#10b981"
                                variants={{
                                    hidden: { scale: 0 },
                                    visible: {
                                        scale: [0, 1.1, 1],
                                        transition: { delay: 2.5, duration: 0.6 }
                                    }
                                }}
                            />
                            <motion.path
                                d="M321 330 L324 333 L329 327"
                                stroke="white"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                variants={{
                                    hidden: { pathLength: 0 },
                                    visible: {
                                        pathLength: 1,
                                        transition: { delay: 3, duration: 0.5 }
                                    }
                                }}
                            />
                        </motion.g>
                    </svg>

                    <motion.div
                        className="absolute bottom-4 right-4 text-xs font-medium text-green-700 bg-green-50/90 backdrop-blur-sm rounded px-3 py-2 border border-green-200"
                        variants={itemVariants}
                    >
                        GUI-Based AI Development
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
