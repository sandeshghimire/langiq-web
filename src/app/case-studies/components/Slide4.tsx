import { motion } from "framer-motion";

interface Slide4Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide4({ slideVariants, itemVariants, isActive, setRef }: Slide4Props) {
    return (
        <motion.div
            ref={setRef}
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-transparent backdrop-blur-sm px-4 md:px-12 relative border border-gray-200/20"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-center"
                variants={itemVariants}
            >
                Advantages
            </motion.h1>
            <motion.p
                className="text-xl md:text-lg max-w-7xl text-center"
                variants={itemVariants}
            >
                Feel free to reach out to us for any inquiries or collaboration opportunities.
            </motion.p>
        </motion.div>
    );
}
