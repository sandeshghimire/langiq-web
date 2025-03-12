"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllTutorials, Tutorial } from '../../../lib/applications';

export default function ApplicationsPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [applications, setApplications] = useState<Tutorial[]>([]);
    
    // Define our service categories
    const serviceCategories = [
        { id: 'all', name: 'All Applications', description: 'Explore all LangIQ applications across different AI capabilities.' },
        { id: 'prompt-engineering', name: 'Prompt Engineering', description: 'Applications showcasing advanced prompt design techniques to better control AI outputs.' },
        { id: 'rag', name: 'RAG', description: 'Retrieval-Augmented Generation applications that combine knowledge bases with generative AI.' },
        { id: 'tools', name: 'Tools', description: 'Applications demonstrating how LangIQ integrates with various external tools and APIs.' },
        { id: 'model-automation', name: 'Model Automation', description: 'Solutions for automating AI model deployment, monitoring, and orchestration.' },
        { id: 'fine-tuning', name: 'Fine Tuning', description: 'Examples of specialized models trained for specific domains and use cases.' },
        { id: 'agentic', name: 'Agentic Solutions', description: 'Autonomous AI agents that can perform complex tasks with minimal human supervision.' },
    ];
    
    const [categories, setCategories] = useState(serviceCategories);

    useEffect(() => {
        async function fetchApplications() {
            // In client components, we need to fetch from an API endpoint
            const response = await fetch('/api/applications');
            const data = await response.json();
            setApplications(data.tutorials);

            // Extract unique categories
            const uniqueCategories = [...new Set(data.tutorials.map(t => t.category))];
            
            // Merge our predefined service categories with any additional categories from the data
            const additionalCategories = uniqueCategories
                .filter(cat => !serviceCategories.some(sc => sc.id === cat))
                .map(cat => ({
                    id: cat,
                    name: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' '),
                    description: ''
                }));
                
            setCategories([...serviceCategories, ...additionalCategories]);
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
                <h1 className="text-4xl font-bold mb-3 handwriting text-center text-blue-100">LangIQ Applications</h1>
                <p className="handwriting-alt text-center mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
                    Explore sample applications developed by LangIQ to demonstrate its powerful AI capabilities across prompt engineering, 
                    RAG, tools integration, model automation, fine-tuning, and agentic solutions.
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`handwriting px-5 py-2 rounded-full transition-all ${activeCategory === category.id
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                                }`}
                            onClick={() => setActiveCategory(category.id)}
                            title={category.description}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Service Description */}
                {activeCategory !== 'all' && (
                    <motion.div 
                        className="mb-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="handwriting-alt text-gray-200 max-w-3xl mx-auto">
                            {categories.find(c => c.id === activeCategory)?.description}
                        </p>
                    </motion.div>
                )}

                {/* No Applications Message */}
                {filteredApplications.length === 0 && (
                    <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-xl handwriting text-gray-300">
                            No applications found in this category.
                        </p>
                    </motion.div>
                )}

                {/* Applications Grid */}
                {filteredApplications.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredApplications.map((application, index) => (
                            <motion.div
                                key={application.slug}
                                className="content-box p-6 hover:shadow-xl transition-all bg-gray-800/40"
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

                                <h2 className="text-2xl font-semibold mb-3 handwriting text-blue-200">{application.title}</h2>
                                <p className="handwriting-alt mb-5 text-gray-200 leading-relaxed">
                                    {application.description}
                                </p>

                                <div className="flex justify-between items-center mt-5 pt-3 border-t border-gray-800">
                                    <span className="text-gray-300 text-sm handwriting-alt">
                                        By {application.author}
                                    </span>
                                    <Link href={`/applications/${application.slug}`}
                                        className="handwriting bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-1.5 px-4 rounded-full flex items-center transition-all shadow-md">
                                        more
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </main>
    );
}
