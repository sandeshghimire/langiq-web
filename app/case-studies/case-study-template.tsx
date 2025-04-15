"use client";

import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-montserrat',
});

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
            ease: "easeOut"
        }
    }
};

const sectionContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

interface CaseStudyProps {
    title: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
}

export default function CaseStudyTemplate({
    title,
    description,
    challenge,
    solution,
    results,
    technologies,
    testimonial
}: CaseStudyProps) {
    return (
        <div className={`min-h-screen bg-gray-900 ${montserrat.className}`}>
            {/* Hero section */}
            <section className="py-20 relative overflow-hidden">
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
                            className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
                            variants={fadeIn}
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-300 mb-10"
                            variants={fadeIn}
                        >
                            {description}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Case Study Content */}
            <section className="py-16">
                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionContainer}
                >
                    {/* Challenge */}
                    <motion.div
                        className="mb-12"
                        variants={slideIn}
                    >
                        <motion.h2
                            className="text-3xl font-semibold mb-6 text-purple-400"
                            variants={fadeIn}
                        >
                            The Challenge
                        </motion.h2>
                        <motion.div
                            className="bg-gray-800/80 p-6 rounded-xl"
                            variants={fadeIn}
                        >
                            <p className="text-gray-300">{challenge}</p>
                        </motion.div>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        className="mb-12"
                        variants={slideIn}
                    >
                        <motion.h2
                            className="text-3xl font-semibold mb-6 text-purple-400"
                            variants={fadeIn}
                        >
                            Our Solution
                        </motion.h2>
                        <motion.div
                            className="bg-gray-800/80 p-6 rounded-xl"
                            variants={fadeIn}
                        >
                            <p className="text-gray-300">{solution}</p>
                        </motion.div>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        className="mb-12"
                        variants={slideIn}
                    >
                        <motion.h2
                            className="text-3xl font-semibold mb-6 text-purple-400"
                            variants={fadeIn}
                        >
                            Results
                        </motion.h2>
                        <motion.div
                            className="bg-gray-800/80 p-6 rounded-xl"
                            variants={fadeIn}
                        >
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {results.map((result, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        {result}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Technologies Used */}
                    <motion.div
                        className="mb-12"
                        variants={slideIn}
                    >
                        <motion.h2
                            className="text-3xl font-semibold mb-6 text-purple-400"
                            variants={fadeIn}
                        >
                            Technologies Used
                        </motion.h2>
                        <motion.div
                            className="flex flex-wrap gap-3"
                            variants={staggerContainer}
                        >
                            {technologies.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-full"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 * index }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Testimonial (if available) */}
                    {testimonial && (
                        <motion.div
                            className="mb-12"
                            variants={fadeIn}
                        >
                            <motion.div
                                className="bg-gradient-to-br from-purple-900/30 to-gray-800/80 p-8 rounded-xl border border-purple-500/30"
                                whileHover={{
                                    boxShadow: "0 0 25px rgba(168, 85, 247, 0.15)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.p
                                    className="text-gray-300 italic text-xl mb-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    "{testimonial.quote}"
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <p className="text-purple-400 font-semibold">{testimonial.author}</p>
                                    <p className="text-gray-400">{testimonial.role}</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </section>

            {/* CTA section */}
            <section className="py-20 bg-gradient-to-br from-gray-900/95 to-violet-950/95">
                <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            className="text-3xl font-semibold mb-6 text-white"
                            variants={fadeIn}
                        >
                            Ready to achieve similar results?
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-300 mb-10"
                            variants={fadeIn}
                        >
                            Let us show you how langiq can transform your organization with AI-powered solutions.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            variants={staggerContainer}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variants={fadeIn}
                            >
                                <Link
                                    href="/contact"
                                    className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/30"
                                >
                                    Schedule a Demo
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variants={fadeIn}
                            >
                                <Link
                                    href="/ai-studio"
                                    className="inline-block bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-colors"
                                >
                                    Explore AI Studio
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}







