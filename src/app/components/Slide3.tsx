import { motion } from "framer-motion";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide3({ slideVariants, itemVariants, isActive, setRef }: Slide2Props) {
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
                    className="space-y-6 order-2 md:order-1"
                    variants={itemVariants}
                >
                    <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/20" variants={itemVariants}>
                        <h3 className="font-semibold text-lg mb-2 text-orange-600">Efficiency & Speed</h3>
                        <p className="text-gray-600">AI accelerates development cycles and automates repetitive tasks</p>
                    </motion.div>
                    
                    <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/20" variants={itemVariants}>
                        <h3 className="font-semibold text-lg mb-2 text-teal-600">Enhanced User Experience</h3>
                        <p className="text-gray-600">Create intelligent, personalized applications that adapt to user needs</p>
                    </motion.div>
                    
                    <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/20" variants={itemVariants}>
                        <h3 className="font-semibold text-lg mb-2 text-indigo-600">Competitive Advantage</h3>
                        <p className="text-gray-600">Stay ahead with cutting-edge AI-powered solutions and features</p>
                    </motion.div>
                </motion.div>

                {/* Right Column - Title */}
                <motion.div
                    className="text-center md:text-right order-1 md:order-2"
                    variants={itemVariants}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        Why Do Web Developers Need AI?
                    </motion.h1>
                    <motion.div 
                        className="h-1 w-20 bg-gradient-to-r from-orange-600 to-pink-600 mx-auto md:ml-auto"
                        variants={itemVariants}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}
