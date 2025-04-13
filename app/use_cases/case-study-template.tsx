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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Challenge */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-purple-400">The Challenge</h2>
                        <div className="bg-gray-800/80 p-6 rounded-xl">
                            <p className="text-gray-300">{challenge}</p>
                        </div>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-purple-400">Our Solution</h2>
                        <div className="bg-gray-800/80 p-6 rounded-xl">
                            <p className="text-gray-300">{solution}</p>
                        </div>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-purple-400">Results</h2>
                        <div className="bg-gray-800/80 p-6 rounded-xl">
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {results.map((result, index) => (
                                    <li key={index}>{result}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Technologies Used */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-purple-400">Technologies Used</h2>
                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech, index) => (
                                <span key={index} className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Testimonial (if available) */}
                    {testimonial && (
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="bg-gradient-to-br from-purple-900/30 to-gray-800/80 p-8 rounded-xl border border-purple-500/30">
                                <p className="text-gray-300 italic text-xl mb-4">"{testimonial.quote}"</p>
                                <div>
                                    <p className="text-purple-400 font-semibold">{testimonial.author}</p>
                                    <p className="text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA section */}
            <section className="py-20 bg-gradient-to-br from-gray-900/95 to-violet-950/95">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-white">Ready to achieve similar results?</h2>
                        <p className="text-xl text-gray-300 mb-10">
                            Let us show you how langiq can transform your organization with AI-powered solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/30"
                                >
                                    Schedule a Demo
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/ai-studio"
                                    className="inline-block bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-colors"
                                >
                                    Explore AI Studio
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
