"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

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

// Interface for table of contents item
interface TocItem {
    id: string;
    text: string;
    level: number;
}

// Progress Bar Component
const ReadingProgressBar = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            // Get scroll progress as percentage
            const currentProgress = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', updateScrollCompletion);

        // Cleanup
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50">
            <div
                className="h-full bg-blue-500"
                style={{ width: `${completion}%`, transition: 'width 0.1s' }}
            />
        </div>
    );
};

// Function to extract headings from markdown content
const extractHeadings = (content: string): TocItem[] => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: TocItem[] = [];
    let match;
    const idCounts: Record<string, number> = {};

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        // Create an ID from the heading text - replace spaces with dashes and remove special chars
        let id = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-');

        // Check if this ID already exists and make it unique if needed
        if (idCounts[id]) {
            idCounts[id]++;
            id = `${id}-${idCounts[id]}`;
        } else {
            idCounts[id] = 1;
        }

        headings.push({ id, text, level });
    }

    return headings;
};

// Custom component to render markdown with anchored headings
const MarkdownWithAnchors = ({ content }: { content: string }) => {
    const headings = extractHeadings(content);
    const idCounts: Record<string, number> = {};

    return (
        <div className="markdown-content handwriting-alt" style={{ color: 'white' }}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ node, ...props }) => {
                        const text = props.children?.toString() || '';
                        let id = text
                            .toLowerCase()
                            .replace(/[^a-z0-9\s-]/g, '')
                            .replace(/\s+/g, '-');

                        // Ensure ID uniqueness
                        if (idCounts[id]) {
                            idCounts[id]++;
                            id = `${id}-${idCounts[id]}`;
                        } else {
                            idCounts[id] = 1;
                        }

                        return (
                            <div style={{ margin: '2rem 0 1rem 0' }}>
                                <h1
                                    id={id}
                                    style={{
                                        color: 'white !important',
                                        fontSize: '2.25rem !important',
                                        fontWeight: 'bold !important',
                                        lineHeight: '1.2 !important',
                                        background: 'transparent !important',
                                        display: 'block !important',
                                        margin: '0 !important',
                                        padding: '0 !important'
                                    }}
                                >
                                    {props.children}
                                </h1>
                            </div>
                        );
                    },
                    h2: ({ node, ...props }) => {
                        const text = props.children?.toString() || '';
                        let id = text
                            .toLowerCase()
                            .replace(/[^a-z0-9\s-]/g, '')
                            .replace(/\s+/g, '-');

                        // Ensure ID uniqueness
                        if (idCounts[id]) {
                            idCounts[id]++;
                            id = `${id}-${idCounts[id]}`;
                        } else {
                            idCounts[id] = 1;
                        }

                        return (
                            <div style={{ margin: '1.75rem 0 0.75rem 0' }}>
                                <h2
                                    id={id}
                                    style={{
                                        color: 'white !important',
                                        fontSize: '1.75rem !important',
                                        fontWeight: 'bold !important',
                                        lineHeight: '1.3 !important',
                                        background: 'transparent !important',
                                        display: 'block !important',
                                        margin: '0 !important',
                                        padding: '0 !important'
                                    }}
                                >
                                    {props.children}
                                </h2>
                            </div>
                        );
                    },
                    h3: ({ node, ...props }) => {
                        const text = props.children?.toString() || '';
                        let id = text
                            .toLowerCase()
                            .replace(/[^a-z0-9\s-]/g, '')
                            .replace(/\s+/g, '-');

                        // Ensure ID uniqueness
                        if (idCounts[id]) {
                            idCounts[id]++;
                            id = `${id}-${idCounts[id]}`;
                        } else {
                            idCounts[id] = 1;
                        }

                        return (
                            <div style={{ margin: '1.5rem 0 0.75rem 0' }}>
                                <h3
                                    id={id}
                                    style={{
                                        color: 'white !important',
                                        fontSize: '1.5rem !important',
                                        fontWeight: 'bold !important',
                                        lineHeight: '1.4 !important',
                                        background: 'transparent !important',
                                        display: 'block !important',
                                        margin: '0 !important',
                                        padding: '0 !important'
                                    }}
                                >
                                    {props.children}
                                </h3>
                            </div>
                        );
                    },
                    h4: ({ node, ...props }) => {
                        const text = props.children?.toString() || '';
                        let id = text
                            .toLowerCase()
                            .replace(/[^a-z0-9\s-]/g, '')
                            .replace(/\s+/g, '-');

                        // Ensure ID uniqueness
                        if (idCounts[id]) {
                            idCounts[id]++;
                            id = `${id}-${idCounts[id]}`;
                        } else {
                            idCounts[id] = 1;
                        }

                        return (
                            <div style={{ margin: '1.25rem 0 0.5rem 0' }}>
                                <h4
                                    id={id}
                                    style={{
                                        color: 'white !important',
                                        fontSize: '1.25rem !important',
                                        fontWeight: 'bold !important',
                                        lineHeight: '1.5 !important',
                                        background: 'transparent !important',
                                        display: 'block !important',
                                        margin: '0 !important',
                                        padding: '0 !important'
                                    }}
                                >
                                    {props.children}
                                </h4>
                            </div>
                        );
                    },
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <div className="rounded-lg overflow-hidden my-4 bg-gray-900/50">
                                <SyntaxHighlighter
                                    style={atomDark}
                                    language={match[1]}
                                    PreTag="div"
                                    className="!bg-transparent !m-0 rounded-lg text-sm"
                                    showLineNumbers
                                    wrapLongLines
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            </div>
                        ) : (
                            <code className="bg-gray-800 px-1 py-0.5 rounded text-blue-300" {...props}>
                                {children}
                            </code>
                        );
                    },
                    blockquote({ node, children, ...props }) {
                        return (
                            <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-300 bg-blue-900/10 p-2 rounded-r" {...props}>
                                {children}
                            </blockquote>
                        );
                    },
                    a({ node, children, href, ...props }) {
                        return (
                            <a
                                href={href}
                                className="no-underline"
                                target={href?.startsWith('http') ? '_blank' : undefined}
                                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                {...props}
                            >
                                {children}
                            </a>
                        );
                    },
                    table({ node, children, ...props }) {
                        return (
                            <div className="overflow-x-auto my-4">
                                <table className="min-w-full border-collapse border border-gray-700" {...props}>
                                    {children}
                                </table>
                            </div>
                        );
                    },
                    tr({ node, children, ...props }) {
                        return (
                            <tr className="border-b border-gray-700" {...props}>
                                {children}
                            </tr>
                        );
                    },
                    th({ node, children, ...props }) {
                        return (
                            <th className="px-4 py-2 bg-gray-800 text-left text-sm font-semibold text-white" {...props}>
                                {children}
                            </th>
                        );
                    },
                    td({ node, children, ...props }) {
                        return (
                            <td className="px-4 py-2 bg-gray-900/50 text-sm" {...props}>
                                {children}
                            </td>
                        );
                    },
                    ul({ node, children, ...props }) {
                        return (
                            <ul className="list-disc pl-6 my-4 space-y-2" {...props}>
                                {children}
                            </ul>
                        );
                    },
                    ol({ node, children, ...props }) {
                        return (
                            <ol className="list-decimal pl-6 my-4 space-y-2" {...props}>
                                {children}
                            </ol>
                        );
                    },
                    hr({ node, ...props }) {
                        return <hr className="my-8 border-gray-700" {...props} />;
                    },
                    img({ node, ...props }) {
                        return (
                            <div className="flex justify-center my-6">
                                <img
                                    {...props}
                                    className="max-w-full h-auto rounded-lg shadow-lg"
                                    alt={props.alt || 'Article image'}
                                />
                            </div>
                        );
                    }
                }}
            >
                {content}
            </ReactMarkdown>

            <style jsx global>{`
                .markdown-content h1,
                .markdown-content h2,
                .markdown-content h3,
                .markdown-content h4,
                .markdown-content h5,
                .markdown-content h6 {
                    color: #ffffff !important;
                    font-weight: bold !important;
                    margin-top: 1.5rem !important;
                    margin-bottom: 1rem !important;
                }

                .markdown-content h1 {
                    font-size: 2.25rem !important;
                }

                .markdown-content h2 {
                    font-size: 1.75rem !important;
                }

                .markdown-content h3 {
                    font-size: 1.5rem !important;
                }

                .markdown-content h4 {
                    font-size: 1.25rem !important;
                }

                /* Force text color for all elements */
                .markdown-content {
                    color: white !important;
                }

                .markdown-content * {
                    color: inherit !important;
                }

                .markdown-content h1 *,
                .markdown-content h2 *,
                .markdown-content h3 *,
                .markdown-content h4 * {
                    color: white !important;
                }
            `}</style>
        </div>
    );
};

// Updated Article Info Header Component
const ArticleHeader = ({ metadata }: { metadata: ArticleMetadata }) => {
    return (
        <div className="mb-8 border-b border-gray-700 pb-6">
            <div className="flex items-center mb-3">
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full handwriting-alt">
                    {metadata.category}
                </span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-sm text-gray-400 handwriting-alt">{metadata.date}</span>
            </div>

            <h1 className="text-4xl font-bold mb-4 handwriting text-white">{metadata.title}</h1>

            <p className="handwriting-alt text-gray-300 mb-6">{metadata.description}</p>

            <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-semibold">
                        {metadata.author.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-3">
                        <p className="handwriting text-sm text-white">By {metadata.author}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="handwriting-alt">{metadata.estimatedTime} read</span>
                    </span>

                    <span className="flex items-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="handwriting-alt">{metadata.difficultyLevel} Level</span>
                    </span>
                </div>
            </div>

            {metadata.keywords && metadata.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                    {metadata.keywords.map((keyword, i) => (
                        <span key={i} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-xs handwriting-alt">
                            #{keyword}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

// Article Actions Component
const ArticleActions = () => {
    return (
        <div className="sticky top-2 z-10 flex justify-end space-x-2 mb-6">
            <button
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all"
                title="Share article"
                onClick={() => navigator.share?.({
                    title: document.title,
                    url: window.location.href
                }).catch(() => { })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            </button>
            <button
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all"
                title="Print article"
                onClick={() => window.print()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
            </button>
        </div>
    );
};

export default function ArticlePage() {
    const params = useParams();
    const slug = params.slug as string;
    const articleRef = useRef<HTMLDivElement>(null);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [metadata, setMetadata] = useState<ArticleMetadata | null>(null);
    const [content, setContent] = useState<string | null>(null);
    const [tocItems, setTocItems] = useState<TocItem[]>([]);

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

                    // Extract table of contents items from the content
                    const headings = extractHeadings(data.content);
                    setTocItems(headings);
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
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-24">
                <div className="max-w-7xl mx-auto">
                    <Link href="/articles" className="handwriting text-blue-400 hover:text-blue-300 mb-6 inline-block">
                        ← Back to Articles
                    </Link>
                    <div className="content-box p-8 backdrop-blur-sm border border-blue-900/30">
                        <div className="animate-pulse">
                            <div className="h-5 bg-blue-900/50 w-1/4 mb-4 rounded"></div>
                            <div className="h-10 bg-blue-900/50 w-3/4 mb-6 rounded"></div>
                            <div className="h-4 bg-blue-900/50 w-full mb-8 rounded"></div>
                            <div className="flex space-x-3 mb-6">
                                <div className="h-10 w-10 bg-blue-900/50 rounded-full"></div>
                                <div className="h-10 bg-blue-900/50 w-1/4 rounded"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-4 bg-blue-900/50 rounded"></div>
                                <div className="h-4 bg-blue-900/50 rounded"></div>
                                <div className="h-4 bg-blue-900/50 w-5/6 rounded"></div>
                                <div className="h-40 bg-blue-900/50 rounded"></div>
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
                <div className="max-w-7xl mx-auto">
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

    // Successful article display - updated with enhanced layout
    return (
        <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white pt-24" ref={articleRef}>
            <ReadingProgressBar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center mb-6">
                    <Link href="/articles" className="handwriting text-gray-300 flex items-center group no-underline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Articles
                    </Link>
                </div>

                {metadata && (
                    <motion.div
                        className="content-box p-8 w-full rounded-lg backdrop-blur-sm border border-blue-900/30 shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ArticleActions />
                        <ArticleHeader metadata={metadata} />

                        <div className="border-t border-gray-700 pt-6">
                            {content && <MarkdownWithAnchors content={content} />}
                        </div>

                        <div className="mt-12 pt-6 border-t border-gray-700">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                <div className="mb-4 md:mb-0">
                                    <h3 className="handwriting text-lg mb-1">Written by {metadata.author}</h3>
                                    <p className="text-sm text-gray-400 handwriting-alt">
                                        Published on {metadata.date} • {metadata.estimatedTime} read
                                    </p>
                                </div>
                                <div className="flex space-x-3">
                                    <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full transition-all text-sm">
                                        Share Article
                                    </button>
                                    <button className="border border-gray-700 hover:bg-gray-800 text-gray-300 rounded-full px-4 py-2 transition-all text-sm">
                                        Print
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                <div className="text-center mt-12 mb-8">
                    <Link
                        href="/articles"
                        className="handwriting inline-block bg-gray-800 hover:bg-gray-700 text-white rounded-full px-6 py-3 shadow-lg transition-all no-underline"
                    >
                        Browse More Articles
                    </Link>
                </div>
            </div>

            {/* Add some CSS for styling anchor links and smooth scroll */}
            <style jsx global>{`
                html {
                    scroll-behavior: smooth;
                }
                
                .anchor {
                    position: relative;
                    text-decoration: none;
                    color: inherit;
                }
                
                .anchor:hover::after {
                    content: "";
                }
                
                h1 .anchor, h2 .anchor, h3 .anchor, h4 .anchor, h5 .anchor, h6 .anchor {
                    scroll-margin-top: 6rem;
                    display: inline-block;
                }
                
                /* Enhanced markdown styling */
                .prose pre {
                    margin: 0;
                    padding: 0;
                }
                
                .prose p {
                    margin-top: 1.25em;
                    margin-bottom: 1.25em;
                    line-height: 1.7;
                }
                
                .prose strong {
                    color: rgb(240, 246, 255);
                    font-weight: 600;
                }
                
                .prose em {
                    font-style: italic;
                }
                
                .prose code {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                }
                
                /* Ensure heading styles are visible */
                .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
                    color: white;
                    font-weight: 700;
                }
                
                .prose h1 {
                    font-size: 2.25rem;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }
                
                .prose h2 {
                    font-size: 1.875rem;
                    margin-top: 1.75rem;
                    margin-bottom: 0.75rem;
                }
                
                /* Heading link styling */
                .prose h1 a, .prose h2 a, .prose h3 a, .prose h4 a {
                    color: white !important;
                    text-decoration: none !important;
                }
                
                .prose h1 a:hover, .prose h2 a:hover, .prose h3 a:hover, .prose h4 a:hover {
                    color: #3b82f6 !important; /* blue-500 for hover state */
                }
                
                /* Remove all link styling */
                .prose a {
                    text-decoration: none;
                    color: #3b82f6 !important; /* Changed from white to blue */
                }
                
                .prose a:hover {
                    color: #60a5fa !important; /* Lighter blue on hover */
                    text-decoration: none;
                }

                /* Remove link underlines and hover effects */
                a {
                    text-decoration: none !important;
                }
                
                a:hover {
                    color: inherit !important;
                }

                /* Print styles */
                @media print {
                    .math-paper-bg::before, nav, footer {
                        display: none !important;
                    }
                    
                    body, .math-paper-bg {
                        background: black  !important;
                        color: white !important;
                    }
                    
                    .content-box {
                        box-shadow: none !important;
                        border: none !important;
                        padding: 0 !important;
                    }
                    
                    h1, h2, h3, h4, h5, h6, p {
                        color: white !important;
                    }
                    
                    a {
                        color: white !important;
                        text-decoration: none !important;
                    }
                }
            `}</style>
        </div>
    );
}
