"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TutorialsPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Tutorials' },
        { id: 'getting-started', name: 'Getting Started' },
        { id: 'rag', name: 'RAG Systems' },
        { id: 'multi-agent', name: 'Multi-Agent' },
        { id: 'fine-tuning', name: 'Fine-Tuning' }
    ];

    const tutorials = [
        {
            title: "Getting Started with LangIQ",
            description: "Learn the basics of setting up and configuring LangIQ for your first project.",
            category: "getting-started",
            difficulty: "Beginner",
            duration: "15 min",
            author: "Alex Johnson"
        },
        {
            title: "Building Your First RAG System",
            description: "Create a simple but powerful retrieval-augmented generation system with your own documents.",
            category: "rag",
            difficulty: "Intermediate",
            duration: "30 min",
            author: "Maya Patel"
        },
        {
            title: "Advanced Vector Database Integration",
            description: "Deep dive into connecting LangIQ with various vector databases for efficient knowledge retrieval.",
            category: "rag",
            difficulty: "Advanced",
            duration: "45 min",
            author: "Thomas Kim"
        },
        {
            title: "Creating Cooperative AI Agents",
            description: "Build a system of specialized AI agents that work together to solve complex tasks.",
            category: "multi-agent",
            difficulty: "Advanced",
            duration: "60 min",
            author: "Sarah Chen"
        },
        {
            title: "Fine-Tuning Models with LoRA",
            description: "Learn how to efficiently fine-tune language models for your specific use case.",
            category: "fine-tuning",
            difficulty: "Intermediate",
            duration: "40 min",
            author: "James Wilson"
        },
        {
            title: "Connecting LangIQ to External APIs",
            description: "Extend LangIQ's capabilities by connecting to external data sources and services.",
            category: "getting-started",
            difficulty: "Intermediate",
            duration: "25 min",
            author: "Elena Gonzalez"
        }
    ];

    const filteredTutorials = activeCategory === 'all'
        ? tutorials
        : tutorials.filter(tutorial => tutorial.category === activeCategory);

    const difficultyColors = {
        'Beginner': 'green',
        'Intermediate': 'yellow',
        'Advanced': 'red'
    };

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-3 handwriting text-center">Tutorials</h1>
                <p className="handwriting-alt text-center mb-8 max-w-2xl mx-auto">
                    Step-by-step guides to help you master LangIQ and build powerful AI applications.
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`handwriting px-4 py-1 rounded-full transition-all ${activeCategory === category.id
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                                }`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Tutorials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTutorials.map((tutorial, index) => (
                        <motion.div
                            key={tutorial.title}
                            className="content-box p-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <span className={`text-${difficultyColors[tutorial.difficulty]}-400 text-sm handwriting-alt px-2 py-0.5 bg-gray-800 rounded-full`}>
                                    {tutorial.difficulty}
                                </span>
                                <span className="text-gray-400 text-sm handwriting-alt">
                                    {tutorial.duration}
                                </span>
                            </div>

                            <h2 className="text-xl font-semibold mb-2 handwriting">{tutorial.title}</h2>
                            <p className="handwriting-alt mb-4 text-gray-300 text-sm">
                                {tutorial.description}
                            </p>

                            <div className="flex justify-between items-center mt-4">
                                <span className="text-gray-400 text-sm handwriting-alt">
                                    By {tutorial.author}
                                </span>
                                <button className="handwriting text-sm text-blue-400 hover:text-blue-300 flex items-center">
                                    Start Tutorial
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
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
