"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Tutorial } from '../../../../lib/tutorials';

export default function TutorialPage() {
    const params = useParams();
    const router = useRouter();
    const [tutorial, setTutorial] = useState<Tutorial | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchTutorial() {
            try {
                const slug = params.slug as string;
                const res = await fetch(`/api/tutorials?slug=${slug}`);

                if (!res.ok) {
                    throw new Error('Failed to fetch tutorial');
                }

                const data = await res.json();
                setTutorial(data.tutorial);
                setIsLoading(false);
            } catch (err) {
                setError('Error loading tutorial');
                setIsLoading(false);
            }
        }

        fetchTutorial();
    }, [params.slug]);

    if (isLoading) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="handwriting text-xl">Loading tutorial...</p>
                </div>
            </div>
        );
    }

    if (error || !tutorial) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4 handwriting">Tutorial Not Found</h1>
                    <p className="handwriting-alt mb-6">{error || "We couldn't find the tutorial you're looking for."}</p>
                    <Link href="/tutorials" className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                        Back to Tutorials
                    </Link>
                </div>
            </div>
        );
    }

    const difficultyColors = {
        'Beginner': 'green',
        'Intermediate': 'yellow',
        'Advanced': 'red'
    };

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/tutorials" className="handwriting-alt text-blue-400 hover:text-blue-300 flex items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Tutorials
                </Link>

                {/* Tutorial Header */}
                <div className="content-box p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <span className={`text-${difficultyColors[tutorial.difficulty]}-400 text-sm handwriting-alt px-2 py-0.5 bg-gray-800 rounded-full`}>
                            {tutorial.difficulty}
                        </span>
                        <span className="text-gray-400 text-sm handwriting-alt">
                            {tutorial.duration}
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold mb-3 handwriting">{tutorial.title}</h1>

                    <p className="handwriting-alt text-lg mb-4 text-gray-300">
                        {tutorial.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-4">
                        <div className="flex items-center">
                            <span className="text-gray-400 handwriting-alt">
                                By {tutorial.author}
                            </span>
                        </div>

                        {tutorial.date && (
                            <span className="text-gray-500 text-sm handwriting-alt">
                                {new Date(tutorial.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        )}
                    </div>
                </div>

                {/* Tutorial Content */}
                <div className="content-box p-6 mb-8">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <ReactMarkdown>
                            {tutorial.content}
                        </ReactMarkdown>
                    </article>
                </div>

                {/* Next Steps */}
                <div className="content-box p-6 mt-8">
                    <h2 className="text-xl font-bold mb-4 handwriting">Continue Learning</h2>
                    <div className="flex justify-between items-center">
                        <Link href="/tutorials" className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                            Browse More Tutorials
                        </Link>
                        <button className="handwriting-alt text-blue-400 hover:text-blue-300 flex items-center">
                            Share
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
