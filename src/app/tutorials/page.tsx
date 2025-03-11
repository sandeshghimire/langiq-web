"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Comprehensive interface for article/tutorial metadata
 * Contains all possible fields that might be used across different content types
 */
interface ArticleMetadata {
    title: string;           // Article headline or tutorial title
    author: string;          // Name of the content creator
    description: string;     // Brief summary of the content
    keywords: string[];      // Tags for SEO and categorization
    date: string;            // Publication date (formatted as string)
    difficultyLevel: string; // Indicates complexity (e.g., "Beginner", "Advanced")
    estimatedTime: string;   // Reading/completion time estimate
    category: string;        // Content category/section
    slug: string;            // URL-friendly identifier for routing
    duration?: string;       // Alternative time notation (e.g., "45 minutes")
    difficulty?: string;     // Alternative complexity notation
    prerequisites?: string;  // Required knowledge or setup before starting
    image?: string;          // Featured image URL
    lastUpdated?: string;    // Last modification date
}

/**
 * Tutorials Page Component
 * Displays a grid of all available tutorials with animation effects
 * Tutorials are fetched from the API and displayed with fallbacks for missing data
 */
export default function TutorialsPage() {
    // State to store the fetched tutorials
    const [tutorials, setTutorials] = useState<ArticleMetadata[]>([]);

    // Fetch tutorials on component mount
    useEffect(() => {
        /**
         * Asynchronously fetch all tutorials from the API endpoint
         * and update the local state with the retrieved data
         */
        async function fetchTutorials() {
            try {
                const response = await fetch('/api/tutorials');
                const data = await response.json();
                setTutorials(data.tutorials);
            } catch (error) {
                console.error('Failed to fetch tutorials:', error);
                // Could add error state handling here
            }
        }

        fetchTutorials();
    }, []);

    // Color mapping for different difficulty levels
    const difficultyColors = {
        'Beginner': 'emerald',     // Easy tutorials
        'Intermediate': 'amber', // Medium difficulty
        'Advanced': 'rose'        // Hard tutorials
    };

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            {/* Main content container with fade-in animation */}
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Page header section */}
                <h1 className="text-4xl font-bold mb-3 handwriting text-center text-blue-100">Tutorials</h1>
                <p className="handwriting-alt text-center mb-8 max-w-2xl mx-auto text-gray-200">
                    Step-by-step guides to help you master LangIQ and build powerful AI applications.
                </p>

                {/* Empty state message when no tutorials available */}
                {tutorials.length === 0 ? (
                    <motion.div
                        className="text-center p-10 content-box bg-gray-800/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl handwriting text-blue-200 mb-2">No Tutorials Available</h3>
                        <p className="handwriting-alt text-gray-300">
                            We're working on creating new tutorials. Please check back soon!
                        </p>
                    </motion.div>
                ) : (
                    /* Tutorials display grid - responsive layout with different columns based on screen size */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tutorials.map((tutorial, index) => (
                            /* Individual tutorial card with staggered animation */
                            <motion.div
                                key={tutorial.slug}
                                className="content-box p-5 bg-gray-800/40"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Tutorial metadata header - difficulty and duration */}
                                <div className="flex justify-between items-start mb-3">
                                    <span className={`text-${difficultyColors[tutorial.difficulty || tutorial.difficultyLevel] || 'blue'}-400 text-sm handwriting-alt px-2 py-0.5 bg-gray-800 rounded-full`}>
                                        {tutorial.difficulty || tutorial.difficultyLevel || 'General'}
                                    </span>
                                    <span className="text-gray-300 text-sm handwriting-alt">
                                        {tutorial.duration || tutorial.estimatedTime || 'Varies'}
                                    </span>
                                </div>

                                {/* Tutorial title and description with fallbacks for missing data */}
                                <h2 className="text-xl font-semibold mb-2 handwriting text-blue-200">{tutorial.title || 'Untitled Tutorial'}</h2>
                                <p className="handwriting-alt mb-4 text-gray-200 text-sm">
                                    {tutorial.description || 'No description available'}
                                </p>

                                {/* Card footer with author info and tutorial link */}
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-gray-300 text-sm handwriting-alt">
                                        By {tutorial.author || 'Unknown Author'}
                                    </span>
                                    <Link href={`/tutorials/${tutorial.slug}`} className="handwriting text-sm text-blue-300 hover:text-blue-200 flex items-center">
                                        Start Tutorial
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
