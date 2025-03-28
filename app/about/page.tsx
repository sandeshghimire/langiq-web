"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
    };

    const slideUp = {
        hidden: { opacity: 0, y: 30 },
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

    // Add new animation variant matching main page
    const cardVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <motion.h1
                            className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
                            variants={slideUp}
                        >
                            About LangIQ
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-300 mb-10"
                            variants={slideUp}
                        >
                            Pioneering the future of language AI technologies and applications
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={slideUp}>
                            <h2 className="font-handwritten text-3xl text-purple-400 mb-6">Our Story</h2>
                            <p className="text-gray-300 mb-4">
                                LangIQ was founded by a team of AI researchers, engineers, and industry experts
                                who recognized the transformative potential of large language models across industries.
                            </p>
                            <p className="text-gray-300 mb-4">
                                We observed that while powerful AI models were becoming increasingly accessible,
                                organizations struggled to effectively implement and optimize these technologies for
                                their specific needs. This gap between potential and practical application became our focus.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Today, LangIQ stands at the forefront of AI innovation, helping enterprises and startups
                                harness the full capabilities of language models through expert consulting, advanced
                                techniques, and custom application development.
                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                            variants={slideUp}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
                                borderColor: "#a78bfa",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <h3 className="font-handwritten text-2xl text-purple-400 mb-4">Our Mission</h3>
                            <p className="text-gray-300 mb-6">
                                To empower organizations with the expertise, tools, and applications needed to transform
                                their operations and customer experiences through state-of-the-art AI language technologies.
                            </p>
                            <h3 className="font-handwritten text-2xl text-purple-400 mb-4">Our Vision</h3>
                            <p className="text-gray-300">
                                A world where AI language technologies are seamlessly integrated into every organization,
                                enhancing human capabilities, driving innovation, and creating unprecedented value across
                                all sectors of the economy.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="font-handwritten text-3xl text-purple-400 mb-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            Our Core Values
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {[
                                {
                                    title: "Innovation",
                                    description: "We constantly push the boundaries of what's possible with AI language technologies."
                                },
                                {
                                    title: "Excellence",
                                    description: "We maintain the highest standards in our research, development, and client solutions."
                                },
                                {
                                    title: "Responsibility",
                                    description: "We prioritize ethical AI practices and sustainable technological advancement."
                                },
                                {
                                    title: "Collaboration",
                                    description: "We work closely with clients and partners to achieve shared objectives."
                                },
                                {
                                    title: "Education",
                                    description: "We believe in democratizing AI knowledge and empowering through learning."
                                },
                                {
                                    title: "Impact",
                                    description: "We measure our success by the tangible value we create for our clients and society."
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-800 p-6 rounded-xl border border-gray-700"
                                    variants={cardVariant}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
                                        borderColor: "#a78bfa",
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <h3 className="font-handwritten text-2xl text-purple-400 mb-3">{value.title}</h3>
                                    <p className="text-gray-300">{value.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Team section (placeholder) */}
            <section className="py-16 bg-gray-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        className="font-handwritten text-3xl text-purple-400 mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Our Leadership Team
                    </motion.h2>
                    <motion.p
                        className="text-gray-300 text-xl mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        LangIQ is led by renowned experts in artificial intelligence,
                        natural language processing, and enterprise technology.
                    </motion.p>
                    {/* Team grid would go here in a real implementation */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/team"
                            className="inline-block bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg text-white font-medium transition-all"
                        >
                            Meet Our Team
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-16 bg-gradient-to-br from-gray-900 to-violet-950">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="font-handwritten text-4xl mb-6 text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Join Us on Our Journey
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-300 mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Whether as a client, partner, or team member, be part of the AI revolution with LangIQ
                        </motion.p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                            >
                                <Link
                                    href="/contact"
                                    className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/30"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                            >
                                <Link
                                    href="/careers"
                                    className="inline-block bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all"
                                >
                                    Careers
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
