"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function HeroSection() {
    return (
        <section className="h-screen flex flex-col justify-center py-10 relative overflow-hidden snap-start" id="hero">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 to-gray-900/90"></div>
            <div className="grid-bg absolute inset-0 opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1
                        className="font-handwritten text-5xl md:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
                        variants={fadeIn}
                    >
                        LangIQ.ai: Your Expert Partner for Migrating to AI LLM-Powered Workflows
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-10"
                        variants={fadeIn}
                    >
                        Our Core Mission: To Seamlessly Transition Your Business to the Future of Work with LLMs. At LangIQ.ai, we empower your organization to migrate from traditional operations to intelligent, LLM-based workflows, ensuring you unlock transformative efficiencies and achieve measurable business impact.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        variants={fadeIn}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/contact"
                                className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-purple-500/30 inline-block">
                                Consult Our Experts
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/about"
                                className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg text-white font-medium transition-colors inline-block">
                                Learn More
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
