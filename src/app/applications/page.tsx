"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllTutorials, Tutorial } from '../../../lib/applications';

export default function ApplicationsPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [applications, setApplications] = useState<Tutorial[]>([]);
    const [categories, setCategories] = useState([
        { id: 'all', name: 'All Applications' }
    ]);

    useEffect(() => {
        async function fetchApplications() {
            // In client components, we need to fetch from an API endpoint
            const response = await fetch('/api/applications');
            const data = await response.json();
            setApplications(data.tutorials);

            // Extract unique categories
            const uniqueCategories = [...new Set(data.tutorials.map(t => t.category))];
            setCategories([
                { id: 'all', name: 'All Applications' },
                ...uniqueCategories.map(cat => ({
                    id: cat,
                    name: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' ')
                }))
            ]);
        }

        fetchApplications();
    }, []);

    const filteredApplications = activeCategory === 'all'
        ? applications
        : applications.filter(app => app.category === activeCategory);

    const complexityColors = {
        'Beginner': 'emerald',
        'Intermediate': 'amber',
        'Advanced': 'rose'
    };

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-3 handwriting text-center">LangIQ Applications</h1>
                <p className="handwriting-alt text-center mb-8 max-w-2xl mx-auto leading-relaxed">
                    Explore sample applications developed by LangIQ to demonstrate its powerful AI capabilities.
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`handwriting px-5 py-2 rounded-full transition-all ${activeCategory === category.id
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                                }`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Applications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredApplications.map((application, index) => (
                        <motion.div
                            key={application.slug}
                            className="content-box p-6 hover:shadow-xl transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className={`text-${complexityColors[application.difficulty]}-400 text-sm handwriting-alt px-3 py-1 bg-gray-800 rounded-full`}>
                                    {application.difficulty}
                                </span>
                                <span className="text-gray-300 text-sm handwriting-alt">
                                    {application.duration}
                                </span>
                            </div>

                            <h2 className="text-2xl font-semibold mb-3 handwriting">{application.title}</h2>
                            <p className="handwriting-alt mb-5 text-gray-200 leading-relaxed">
                                {application.description}
                            </p>

                            <div className="flex justify-between items-center mt-5 pt-3 border-t border-gray-800">
                                <span className="text-gray-300 text-sm handwriting-alt">
                                    By {application.author}
                                </span>
                                <Link href={`/applications/${application.slug}`}
                                    className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 rounded-full flex items-center transition-all">
                                    more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Request Application Box */}
                <motion.div
                    className="content-box p-8 mt-14 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold mb-4 handwriting text-center">
                        Have an idea for a LangIQ application?
                    </h2>
                    <p className="handwriting-alt text-center mb-6 text-gray-200 leading-relaxed">
                        We're always looking to expand our gallery of examples.
                        Submit your idea and our team may develop it as a showcase application.
                    </p>
                    <div className="flex justify-center">
                        <button className="handwriting bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-full shadow-lg transition-all">
                            Suggest an Application
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </main>
    );
}
