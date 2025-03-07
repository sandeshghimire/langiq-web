"use client";

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Tutorial } from '../../../../lib/applications';

export default function TutorialPage() {
    const params = useParams();
    const router = useRouter();
    const [tutorial, setTutorial] = useState<Tutorial | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTocItem, setActiveTocItem] = useState('');
    const contentRef = useRef<HTMLDivElement>(null);
    const [headings, setHeadings] = useState<{ id: string, text: string, level: number }[]>([]);

    useEffect(() => {
        async function fetchTutorial() {
            try {
                const slug = params.slug as string;
                const res = await fetch(`/api/applications?slug=${slug}`);

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

    // Extract headings from content for table of contents
    useEffect(() => {
        if (tutorial?.content) {
            const headingRegex = /^(#{1,6})\s+(.+)$/gm;
            const extractedHeadings: { id: string, text: string, level: number }[] = [];

            let match;
            while ((match = headingRegex.exec(tutorial.content)) !== null) {
                const level = match[1].length;
                const text = match[2];
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                extractedHeadings.push({ id, text, level });
            }

            setHeadings(extractedHeadings);
        }
    }, [tutorial?.content]);

    // Track active heading on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current && headings.length > 0) {
                const headingElements = headings.map(h =>
                    document.getElementById(h.id)
                ).filter(Boolean);

                for (let i = headingElements.length - 1; i >= 0; i--) {
                    const element = headingElements[i];
                    if (element && element.getBoundingClientRect().top <= 100) {
                        setActiveTocItem(element.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    // Custom renderers for markdown elements
    const MarkdownComponents = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-md my-4"
                    showLineNumbers
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={`bg-gray-800 px-1.5 py-0.5 rounded text-sm ${className}`} {...props}>
                    {children}
                </code>
            );
        },
        h1: ({ children, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 pb-2 border-b border-gray-700" {...props}>{children}</h1>,
        h2: ({ children, ...props }) => <h2 className="text-2xl font-bold mt-8 mb-3 pb-1 border-b border-gray-800" {...props}>{children}</h2>,
        h3: ({ children, ...props }) => <h3 className="text-xl font-bold mt-6 mb-2" {...props}>{children}</h3>,
        h4: ({ children, ...props }) => <h4 className="text-lg font-bold mt-4 mb-2" {...props}>{children}</h4>,
        p: ({ children, ...props }) => <p className="my-4 leading-relaxed" {...props}>{children}</p>,
        ul: ({ children, ...props }) => <ul className="list-disc pl-6 my-4 space-y-2" {...props}>{children}</ul>,
        ol: ({ children, ...props }) => <ol className="list-decimal pl-6 my-4 space-y-2" {...props}>{children}</ol>,
        li: ({ children, ...props }) => <li className="pl-1" {...props}>{children}</li>,
        a: ({ children, href, ...props }) => (
            <a
                href={href}
                className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                {...props}
            >
                {children}
            </a>
        ),
        blockquote: ({ children, ...props }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-1 my-4 bg-gray-800 bg-opacity-50 rounded" {...props}>
                {children}
            </blockquote>
        ),
        img: ({ src, alt, ...props }) => (
            <div className="my-6">
                <img
                    src={src}
                    alt={alt || ''}
                    className="rounded-lg max-w-full mx-auto shadow-lg"
                    loading="lazy"
                    {...props}
                />
                {alt && <p className="text-center text-sm text-gray-400 mt-2">{alt}</p>}
            </div>
        ),
        table: ({ children, ...props }) => (
            <div className="my-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700 border border-gray-700 rounded" {...props}>
                    {children}
                </table>
            </div>
        ),
        thead: ({ children, ...props }) => <thead className="bg-gray-800" {...props}>{children}</thead>,
        th: ({ children, ...props }) => <th className="px-4 py-2 text-left font-medium text-gray-300" {...props}>{children}</th>,
        td: ({ children, ...props }) => <td className="px-4 py-2 border-t border-gray-700" {...props}>{children}</td>,
        hr: (props) => <hr className="my-6 border-gray-700" {...props} />,
    };

    if (isLoading) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="handwriting text-xl">Loading tutorial...</p>
                </div>
            </div>
        );
    }

    if (error || !tutorial) {
        return (
            <div className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-7xl mx-auto text-center">
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
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/applications" className="handwriting-alt text-blue-400 hover:text-blue-300 flex items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Applications
                </Link>

                {/* Tutorial Header */}
                <div className="content-box p-6 mb-8 ">
                    <div className="flex items-center justify-between mb-4">
                        <span className={`text-${difficultyColors[tutorial.difficulty]}-400 text-sm handwriting-alt px-2 py-0.5 bg-gray-800 rounded-full`}>
                            {tutorial.difficulty}
                        </span>
                        <span className="text-gray-400 text-sm handwriting-alt">
                            {tutorial.duration}
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold mb-3 handwriting text-center ">{tutorial.title}</h1>

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

                {/* Tutorial Layout with Table of Contents */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Table of Contents - Sidebar */}
                    {headings.length > 0 && (
                        <div className="md:w-1/4">
                            <div className="content-box p-4 sticky top-32">
                                <h3 className="text-xl font-bold mb-4 handwriting border-b border-gray-700 pb-2">Contents</h3>
                                <nav className="toc">
                                    <ul className="space-y-2">
                                        {headings.map((heading) => (
                                            <li
                                                key={heading.id}
                                                style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
                                            >
                                                <a
                                                    href={`#${heading.id}`}
                                                    className={`block py-1 hover:text-blue-300 transition-colors duration-200 text-sm ${activeTocItem === heading.id ? 'text-blue-400 font-medium' : 'text-gray-300'
                                                        }`}
                                                >
                                                    {heading.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                                <div className="mt-6 pt-4 border-t border-gray-700">
                                    <button
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                        Back to top
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tutorial Content */}
                    <div className={`${headings.length > 0 ? 'w-full' : 'w-full'}`}>
                        <div className="content-box p-6 mb-8" ref={contentRef}>
                            <article className="">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
                                    components={MarkdownComponents}
                                >
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
                                <div className="flex space-x-4">
                                    <button className="handwriting-alt text-blue-400 hover:text-blue-300 flex items-center" onClick={() => { navigator.clipboard.writeText(window.location.href) }}>
                                        Copy Link
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                    <button className="handwriting-alt text-blue-400 hover:text-blue-300 flex items-center">
                                        Share
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
