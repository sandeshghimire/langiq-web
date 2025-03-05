"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

// Article metadata interface
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

// Article content skeleton component
const ArticleSkeleton = () => (
    <div className="animate-pulse">
        <div className="h-8 w-3/4 bg-gray-700 mb-4 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-700 mb-8 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-3 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-3 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-700 mb-6 rounded"></div>
        <div className="h-24 w-full bg-gray-700 mb-6 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-3 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-3 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-700 mb-3 rounded"></div>
    </div>
);

export default function ArticlePage() {
    const params = useParams();
    const router = useRouter();
    const { slug } = params;

    const [articleData, setArticleData] = useState<{
        metadata: ArticleMetadata;
        content: string;
    } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchArticle() {
            if (!slug) return;

            try {
                const response = await fetch(`/api/articles/${slug}`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch article: ${response.statusText}`);
                }

                const data = await response.json();
                setArticleData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error loading article:", error);
                setError("Failed to load the article. Please try again later.");
                setLoading(false);
            }
        }

        fetchArticle();
    }, [slug]);

    // Loading state
    if (loading) {
        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-3xl mx-auto">
                    <Link href="/articles" className="text-blue-400 hover:text-blue-300 mb-6 inline-block handwriting">
                        ← Back to Articles
                    </Link>
                    <div className="content-box p-8">
                        <ArticleSkeleton />
                    </div>
                </div>
            </main>
        );
    }

    // Error state
    if (error || !articleData) {
        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-3xl mx-auto">
                    <Link href="/articles" className="text-blue-400 hover:text-blue-300 mb-6 inline-block handwriting">
                        ← Back to Articles
                    </Link>
                    <div className="content-box p-8 text-center">
                        <h2 className="text-xl handwriting mb-4 text-red-400">Error</h2>
                        <p className="handwriting-alt mb-6">{error || "Article not found"}</p>
                        <button
                            onClick={() => router.push('/articles')}
                            className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md text-sm transition-all">
                            Return to Articles
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    const { metadata, content } = articleData;

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/articles" className="text-blue-400 hover:text-blue-300 mb-6 inline-block handwriting">
                    ← Back to Articles
                </Link>

                <article className="content-box p-8">
                    {/* Article Header */}
                    <header className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-blue-400 handwriting-alt mb-2">
                            <span>{metadata.category}</span>
                            <span>•</span>
                            <span>{metadata.date}</span>
                            {metadata.estimatedTime && (
                                <>
                                    <span>•</span>
                                    <span>{metadata.estimatedTime} read</span>
                                </>
                            )}
                        </div>

                        <h1 className="text-3xl font-bold mb-4 handwriting">{metadata.title}</h1>

                        {metadata.description && (
                            <p className="text-lg text-gray-300 handwriting-alt mb-4">
                                {metadata.description}
                            </p>
                        )}

                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white mr-3">
                                {metadata.author?.charAt(0).toUpperCase() || "A"}
                            </div>
                            <div className="handwriting text-sm">
                                By <span className="text-blue-300">{metadata.author}</span>
                            </div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="prose prose-invert prose-slate max-w-none handwriting-alt">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>

                    {/* Keywords/Tags */}
                    {metadata.keywords && metadata.keywords.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-gray-700">
                            <div className="flex flex-wrap gap-2">
                                {metadata.keywords.map((keyword, index) => (
                                    <span key={index} className="bg-gray-700 text-xs px-3 py-1 rounded-full handwriting">
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </article>
            </motion.div>
        </main>
    );
}
