"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tutorial } from '../../../lib/tutorials';

export default function TutorialsPage() {
    const [tutorials, setTutorials] = useState<Tutorial[]>([]);

    useEffect(() => {
        async function fetchTutorials() {
            // In client components, we need to fetch from an API endpoint
            const response = await fetch('/api/tutorials');
            const data = await response.json();
            setTutorials(data.tutorials);
        }

        fetchTutorials();
    }, []);

    const difficultyColors = {
        'Beginner': 'green',
        'Intermediate': 'yellow',
        'Advanced': 'red'
    };

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-3 handwriting text-center">Tutorials</h1>
                <p className="handwriting-alt text-center mb-8 max-w-2xl mx-auto">
                    Step-by-step guides to help you master LangIQ and build powerful AI applications.
                </p>

                {/* Tutorials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tutorials.map((tutorial, index) => (
                        <motion.div
                            key={tutorial.slug}
                            className="content-box p-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <span className={`text-${difficultyColors[tutorial.difficulty] || 'blue'}-400 text-sm handwriting-alt px-2 py-0.5 bg-gray-800 rounded-full`}>
                                    {tutorial.difficulty || 'General'}
                                </span>
                                <span className="text-gray-400 text-sm handwriting-alt">
                                    {tutorial.duration || 'Varies'}
                                </span>
                            </div>

                            <h2 className="text-xl font-semibold mb-2 handwriting">{tutorial.title || 'Untitled Tutorial'}</h2>
                            <p className="handwriting-alt mb-4 text-gray-300 text-sm">
                                {tutorial.description || 'No description available'}
                            </p>

                            <div className="flex justify-between items-center mt-4">
                                <span className="text-gray-400 text-sm handwriting-alt">
                                    By {tutorial.author || 'Unknown Author'}
                                </span>
                                <Link href={`/tutorials/${tutorial.slug}`} className="handwriting text-sm text-blue-400 hover:text-blue-300 flex items-center">
                                    Start Tutorial
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Request Tutorial Box */}
                <motion.div
                    className="content-box p-6 mt-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold mb-4 handwriting text-center">
                        Can't find what you're looking for?
                    </h2>
                    <p className="handwriting-alt text-center mb-4">
                        Request a specific tutorial and our team will consider creating it for the community.
                    </p>
                    <div className="flex justify-center">
                        <button className="handwriting bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-6 rounded-full shadow-lg transition-all">
                            Request a Tutorial
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </main>
    );
}
