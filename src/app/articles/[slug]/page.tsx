"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';

// Article metadata interface
interface ArticleMetadata {
    title: string;
    author: string;
    description: string;
    abstract: string;
    keywords: string[];
    rawDate: string;
    date: string;
    difficultyLevel: string;
    estimatedTime: string;
    category: string;
    slug: string;
    journal?: string;
    doi?: string;
}

// Article content skeleton component
const ArticleSkeleton = () => (
    <div className="animate-pulse">
        <div className="h-10 w-3/4 bg-gray-700 mb-6 rounded"></div>
        <div className="h-5 w-1/3 bg-gray-700 mb-12 rounded"></div>
        <div className="h-20 w-full bg-gray-700 mb-8 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-3 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-3 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-700 mb-8 rounded"></div>
        <div className="h-36 w-full bg-gray-700 mb-8 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-4 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-700 mb-4 rounded"></div>
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
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-black p-4 md:p-6 pt-24 md:pt-32">
                <div className="max-w-7xl mx-auto">
                    <Link href="/articles" className="text-blue-800 hover:text-blue-600 mb-6 inline-block font-serif flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Articles
                    </Link>
                    <div className="bg-white p-6 md:p-10 shadow-lg rounded-sm">
                        <ArticleSkeleton />
                    </div>
                </div>
            </main>
        );
    }

    // Error state
    if (error || !articleData) {
        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-black p-4 md:p-6 pt-24 md:pt-32">
                <div className="max-w-7xl mx-auto">
                    <Link href="/articles" className="text-blue-800 hover:text-blue-600 mb-6 inline-block font-serif flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Articles
                    </Link>
                    <div className="bg-white p-8 shadow-lg rounded-sm text-center">
                        <h2 className="text-2xl font-serif mb-4 text-red-700">Error</h2>
                        <p className="font-serif mb-8">{error || "Article not found"}</p>
                        <button
                            onClick={() => router.push('/articles')}
                            className="font-serif bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded text-sm transition-all">
                            Return to Articles
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    const { metadata, content } = articleData;

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-black p-4 md:p-6 pt-24 md:pt-32 ">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/articles" className="text-blue-800 hover:text-blue-600 mb-6 inline-block font-serif flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Articles
                </Link>

                <article className="bg-white p-6 md:p-12 shadow-lg font-serif leading-relaxed tracking-tight rounded-lg">
                    {/* Journal Info */}
                    {metadata.journal && (
                        <div className="text-center text-gray-600 mb-8 pb-4 border-b border-gray-200">
                            <div className="text-sm uppercase tracking-wider font-semibold">{metadata.journal}</div>
                            <div className="mt-2 text-sm">{metadata.date}</div>
                            {metadata.doi && <div className="mt-2 text-xs font-mono">DOI: {metadata.doi}</div>}
                        </div>
                    )}

                    {/* Article Header */}
                    <header className="mb-8 text-center handwriting font-serif">
                        <h1 className="text-3xl md:text-2xl font-bold mb-6 leading-tight">{metadata.title}</h1>

                        <div className="mb-4">
                            <div className="text-lg font-medium">
                                {metadata.author}
                            </div>
                            <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">
                                {metadata.category}
                            </div>
                        </div>
                    </header>

                    {/* Article Metadata Card */}
                    <div className="bg-gray-100 border border-gray-200 rounded-lg p-5 mb-10 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 border-b pb-2 border-gray-200 text-gray-700">Article Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Date */}
                            <div className="flex items-start">
                                <div className="text-blue-700 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-700">Publication Date</div>
                                    <div className="text-sm">{metadata.date}</div>
                                </div>
                            </div>

                            {/* Author */}
                            <div className="flex items-start">
                                <div className="text-blue-700 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-700">Author</div>
                                    <div className="text-sm">{metadata.author}</div>
                                </div>
                            </div>

                            {/* Difficulty Level */}
                            <div className="flex items-start">
                                <div className="text-blue-700 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-700">Difficulty Level</div>
                                    <div className="text-sm">{metadata.difficultyLevel}</div>
                                </div>
                            </div>

                            {/* Estimated Time */}
                            <div className="flex items-start">
                                <div className="text-blue-700 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-700">Reading Time</div>
                                    <div className="text-sm">{metadata.estimatedTime}</div>
                                </div>
                            </div>

                            {/* Category */}
                            <div className="flex items-start">
                                <div className="text-blue-700 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-700">Category</div>
                                    <div className="text-sm">{metadata.category}</div>
                                </div>
                            </div>

                            {/* Keywords */}
                            <div className="flex items-start md:col-span-2">
                                <div className="text-blue-700 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-700">Keywords</div>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {metadata.keywords && metadata.keywords.length > 0 ?
                                            metadata.keywords.map((keyword, index) => (
                                                <span key={index} className="inline-block bg-blue-50 text-blue-700 px-2 py-0.5 text-xs rounded">
                                                    {keyword}
                                                </span>
                                            )) :
                                            <span className="text-sm">No keywords specified</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Article Content */}
                    <div className="markdown-article prose prose-lg prose-blue max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                            components={{
                                h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mt-8 mb-4" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-xl font-bold mt-6 mb-3" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-lg font-bold mt-4 mb-2" {...props} />,
                                p: ({ node, ...props }) => <p className="my-4" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4" {...props} />,
                                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4" {...props} />,
                                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
                                table: ({ node, ...props }) => <div className="overflow-x-auto my-6"><table className="min-w-full border border-gray-300 rounded-lg" {...props} /></div>,
                                thead: ({ node, ...props }) => <thead className="bg-gray-200" {...props} />,
                                th: ({ node, ...props }) => <th className="border border-gray-300 px-4 py-2 text-left" {...props} />,
                                td: ({ node, ...props }) => <td className="border border-gray-300 px-4 py-2" {...props} />,
                                code: ({ node, inline, className, children, ...props }) => {
                                    if (inline) {
                                        return <code className="bg-gray-200 px-1 py-0.5 rounded font-mono text-sm" {...props}>{children}</code>
                                    }
                                    return <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto my-4"><code className="font-mono text-sm" {...props}>{children}</code></pre>
                                },
                                img: ({ node, ...props }) => <img className="max-w-full h-auto my-6 rounded-lg shadow-md" {...props} />,
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>

                    {/* Citations and References */}
                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <h2 className="text-xl font-bold mb-6">References</h2>
                        <div className="text-sm text-gray-700 bg-gray-200 p-4 rounded-lg">
                            {/* This would contain actual references in a real paper */}
                            <p className="italic text-gray-500">References will be displayed here when available</p>
                        </div>
                    </div>


                </article>
            </motion.div>
        </main>
    );
}
