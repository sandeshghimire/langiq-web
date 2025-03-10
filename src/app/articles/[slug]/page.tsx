"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

// Define the article metadata interface
interface ArticleMetadata {
    title: string;
    author: string;
    description: string;
    keywords: string[];
    date: string;
    difficultyLevel: string;
    estimatedTime: string;
    category: string;
    slug: string;
}

export default function ArticlePage() {
    const params = useParams();
    const slug = params.slug as string;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [metadata, setMetadata] = useState<ArticleMetadata | null>(null);
    const [content, setContent] = useState<string | null>(null);

    // Function to fetch article data
    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setIsLoading(true);
                setError(null);

                console.log(`Fetching article with slug: ${slug}`);
                const response = await fetch(`/api/articles/${slug}`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch article (${response.status}): ${response.statusText}`);
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                console.log("Article data received:", data);

                if (data.metadata && data.content) {
                    setMetadata(data.metadata);
                    setContent(data.content);
                } else {
                    throw new Error("Invalid article data format");
                }
            } catch (err) {
                console.error("Error fetching article:", err);
                setError(err instanceof Error ? err.message : 'Failed to load article');
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticle();
    }, [slug]);

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-4xl mx-auto">
                    <Link href="/articles" className="handwriting text-blue-400 hover:text-blue-300 mb-6 inline-block">
                        ← Back to Articles
                    </Link>
                    <div className="content-box p-8">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-700 w-3/4 mb-6 rounded"></div>
                            <div className="h-4 bg-gray-700 w-1/4 mb-8 rounded"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-700 rounded"></div>
                                <div className="h-4 bg-gray-700 rounded"></div>
                                <div className="h-4 bg-gray-700 w-5/6 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-4xl mx-auto">
                    <Link href="/articles" className="handwriting text-blue-400 hover:text-blue-300 mb-6 inline-block">
                        ← Back to Articles
                    </Link>
                    <motion.div
                        className="content-box p-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 handwriting text-red-400">Article Not Found</h2>
                        <p className="handwriting-alt mb-6">
                            We couldn't find the article you're looking for.
                        </p>
                        <Link
                            href="/articles"
                            className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md transition-all"
                        >
                            Back to Articles
                        </Link>
                    </motion.div>
                </div>
            </div>
        );
    }

    // Successful article display
    return (
        <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            <div className="max-w-4xl mx-auto">
                <Link href="/articles" className="handwriting text-blue-400 hover:text-blue-300 mb-6 inline-block">
                    ← Back to Articles
                </Link>

                {metadata && (
                    <motion.div
                        className="content-box p-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-blue-400 handwriting-alt">{metadata.category}</span>
                                <span className="text-sm text-gray-400 handwriting-alt">{metadata.date}</span>
                            </div>
                            <h1 className="text-3xl font-bold mb-3 handwriting">{metadata.title}</h1>
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <span className="handwriting text-gray-300">By {metadata.author}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-400 handwriting-alt">{metadata.difficultyLevel} Level</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-400 handwriting-alt">{metadata.estimatedTime} read</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-700 pt-6">
                            {metadata.description && (
                                <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-6">
                                    <p className="handwriting-alt text-gray-200 italic">{metadata.description}</p>
                                </div>
                            )}

                            {content && (
                                <div className="prose prose-invert prose-blue max-w-none handwriting-alt">
                                    {typeof ReactMarkdown === 'function' ? (
                                        <ReactMarkdown>{content}</ReactMarkdown>
                                    ) : (
                                        <div>
                                            {content.split('\n\n').map((paragraph, i) => (
                                                <p key={i} className="mb-4">{paragraph}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {metadata.keywords && metadata.keywords.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-gray-700">
                                <h3 className="handwriting mb-2">Topics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {metadata.keywords.map((keyword, i) => (
                                        <span key={i} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs handwriting-alt">
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}

                <div className="text-center mt-8">
                    <Link
                        href="/articles"
                        className="handwriting inline-block border border-blue-500 hover:bg-blue-500/20 text-blue-300 rounded-full px-6 py-2 transition-all"
                    >
                        Browse More Articles
                    </Link>
                </div>
            </div>
        </div>
    );
}
