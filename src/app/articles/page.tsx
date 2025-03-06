"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
/**
 * Interface representing the metadata structure for articles
 * Contains all essential information about an article that's displayed in listings
 */
interface ArticleMetadata {
    title: string;       // Article headline
    author: string;      // Name of the article's author
    description: string; // Brief summary of the article's content
    keywords: string[];  // Tags for SEO and categorization
    date: string;        // Publication date (formatted as string)
    difficultyLevel: string; // Indicates complexity (e.g., "Beginner", "Advanced")
    estimatedTime: string;   // Reading time estimate (e.g., "5 min")
    category: string;    // Article category/section
    slug: string;        // URL-friendly identifier for routing
}

/**
 * Skeleton loading component for article placeholders
 * Displays animated gray blocks to indicate content is loading
 * @returns JSX element with placeholder UI
 */
const ArticleSkeleton = () => (
    <div className="content-box p-5 animate-pulse">
        {/* Category and date placeholder */}
        <div className="h-4 w-20 bg-gray-700 mb-2 rounded"></div>
        {/* Title placeholder */}
        <div className="h-6 w-3/4 bg-gray-700 mb-3 rounded"></div>
        {/* Description placeholders - two lines */}
        <div className="h-4 w-full bg-gray-700 mb-2 rounded"></div>
        <div className="h-4 w-full bg-gray-700 mb-4 rounded"></div>
        {/* Author and read more link placeholders */}
        <div className="flex justify-between">
            <div className="h-4 w-24 bg-gray-700 rounded"></div>
            <div className="h-4 w-20 bg-gray-700 rounded"></div>
        </div>
    </div>
);

/**
 * Articles Page Component
 * Displays a collection of articles with a featured article section
 * Includes loading states, error handling, and responsive layout
 * @returns JSX element for the articles page
 */
export default function ArticlesPage() {
    // State for the highlighted/featured article
    const [featuredArticle, setFeaturedArticle] = useState<ArticleMetadata | null>(null);

    // State for the collection of regular articles
    const [articles, setArticles] = useState<ArticleMetadata[]>([]);

    // Loading state to manage UI during data fetch
    const [loading, setLoading] = useState(true);

    // Error state to capture and display any API failures
    const [error, setError] = useState<string | null>(null);

    /**
     * Effect hook to fetch article data when component mounts
     * Makes API call to retrieve featured and regular articles
     */
    useEffect(() => {
        /**
         * Asynchronous function to load articles from the API
         * Sets appropriate state values based on API response
         */
        async function loadArticles() {
            try {
                // Fetch articles from the API endpoint
                const response = await fetch('/api/articles');
                const data = await response.json();

                // Process regular articles data if available
                if (data.articles) {
                    setArticles(data.articles.slice(0, 100)); // Limit to first 100 articles
                } else {
                    // Set empty array if no articles found
                    setArticles([]);
                }

                // Process featured article if available
                if (data.featured) {
                    setFeaturedArticle(data.featured);
                } else {
                    // Set to null if no featured article exists
                    setFeaturedArticle(null);
                }

                // Mark loading as complete
                setLoading(false);
            } catch (error) {
                // Handle errors during API call
                console.error("Error loading articles:", error);
                setLoading(false);
                setError("Failed to load articles. Please try again later.");
                // Reset article states on error
                setArticles([]);
                setFeaturedArticle(null);
            }
        }

        // Execute the fetch function
        loadArticles();
    }, []); // Empty dependency array ensures this runs once on component mount

    /**
     * Loading state view
     * Displays skeleton UI while data is being fetched
     */
    if (loading) {
        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-5xl mx-auto">
                    {/* Page title during loading */}
                    <h1 className="text-4xl font-bold mb-3 handwriting text-center">LangIQ Articles</h1>
                    <p className="handwriting-alt text-center mb-10 max-w-2xl mx-auto">
                        Loading articles...
                    </p>

                    {/* Skeleton UI for featured article section */}
                    <div className="content-box p-6 mb-10 animate-pulse">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Featured article image placeholder */}
                            <div className="w-full md:w-1/2 bg-gray-700 h-64 rounded-lg"></div>
                            <div className="w-full md:w-1/2">
                                {/* Featured article metadata placeholders */}
                                <div className="h-4 w-24 bg-gray-700 mb-2 rounded"></div>
                                <div className="h-8 w-3/4 bg-gray-700 mb-3 rounded"></div>
                                <div className="h-4 w-full bg-gray-700 mb-2 rounded"></div>
                                <div className="h-4 w-full bg-gray-700 mb-4 rounded"></div>
                                <div className="h-4 w-32 bg-gray-700 mb-4 rounded"></div>
                                <div className="h-10 w-32 bg-gray-700 rounded"></div>
                            </div>
                        </div>
                    </div>

                    {/* Skeleton grid for regular articles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Generate 4 article skeletons */}
                        {[1, 2, 3, 4].map(i => <ArticleSkeleton key={i} />)}
                    </div>
                </div>
            </main>
        );
    }

    /**
     * Error state view
     * Displays error message and retry button when API fails
     */
    if (error) {
        return (
            <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Page title during error */}
                    <h1 className="text-4xl font-bold mb-3 handwriting text-center">LangIQ Articles</h1>
                    <div className="content-box p-8 mt-10">
                        {/* Error message display */}
                        <h2 className="text-xl handwriting mb-4 text-red-400">Error</h2>
                        <p className="handwriting-alt mb-6">{error}</p>
                        {/* Retry button - reloads the page */}
                        <button
                            onClick={() => window.location.reload()}
                            className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md text-sm transition-all">
                            Try Again
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    /**
     * Main component view - displays when articles are successfully loaded
     * Shows featured article and article grid with animation effects
     */
    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            {/* Main container with fade-in animation */}
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Page header */}
                <h1 className="text-4xl font-bold mb-3 handwriting text-center">LangIQ Articles</h1>
                <p className="handwriting-alt text-center mb-10 max-w-2xl mx-auto">
                    Insights, tutorials, and research on the latest developments in AI and language models.
                </p>

                {/* Featured Article Section - Conditionally rendered */}
                {featuredArticle && (
                    <motion.div
                        className="content-box p-6 mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Featured article image/placeholder */}
                            <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-700  rounded-lg overflow-hidden">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src="/logo.jpg"
                                        alt="LangIQ Logo"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover rounded-none"
                                        priority
                                    />
                                </motion.div>
                            </div>
                            <div className="w-full md:w-1/2">
                                {/* Featured article metadata */}
                                <span className="text-sm text-blue-400 handwriting-alt">{featuredArticle.category} • {featuredArticle.date}</span>
                                <h2 className="text-2xl font-bold mb-3 handwriting">{featuredArticle.title}</h2>
                                <p className="handwriting-alt mb-4 text-gray-300">{featuredArticle.description}</p>
                                <p className="handwriting text-gray-400 mb-4">By {featuredArticle.author}</p>
                                {/* Link to the full article */}
                                <Link href={`/articles/${featuredArticle.slug}`} className="handwriting bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md text-sm transition-all inline-block">
                                    Read Article
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Regular Articles Grid Section */}
                {articles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Map through articles and render each with staggered animation */}
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.slug}
                                className="content-box p-5"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }} // Staggered animation effect
                            >
                                {/* Article category and date */}
                                <span className="text-sm text-blue-400 handwriting-alt">{article.category} • {article.date}</span>
                                {/* Article title */}
                                <h2 className="text-xl font-semibold mb-2 handwriting">{article.title}</h2>
                                {/* Article description */}
                                <p className="handwriting-alt mb-4 text-gray-300 text-sm">{article.description}</p>
                                <div className="flex justify-between items-center">
                                    {/* Article author */}
                                    <span className="handwriting text-gray-400 text-sm">By {article.author}</span>
                                    {/* Link to full article */}
                                    <Link href={`/articles/${article.slug}`} className="handwriting text-sm text-blue-400 hover:text-blue-300">
                                        Read More →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    // No articles found state
                    <div className="content-box p-8 text-center">
                        <p className="handwriting-alt mb-3">No articles found.</p>
                        <p className="text-sm text-gray-400">Check back later for new content!</p>
                    </div>
                )}

                {/* View All Articles button - only shown when articles exist */}
                {articles.length > 0 && (
                    <div className="mt-10 text-center">
                        <button className="handwriting border border-blue-500 hover:bg-blue-500/20 text-blue-300 rounded-full px-6 py-2 transition-all">
                            View All Articles
                        </button>
                    </div>
                )}
            </motion.div>
        </main>
    );
}
