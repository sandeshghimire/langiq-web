'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulating API call for newsletter subscription
        setTimeout(() => {
            setSubscribed(true);
            setEmail('');
        }, 500);
    };

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            {/* Top footer section with multiple columns */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company info column */}
                    <div>
                        <Link href="/" className="inline-block">
                            <h2 className="font-handwritten text-3xl text-purple-400 mb-4">LangIQ</h2>
                        </Link>
                        <p className="text-gray-400 mb-4">
                            Pioneering the future of AI language technologies for innovative enterprises.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {[
                                { name: 'Twitter', icon: 'X', href: '#' },
                                { name: 'LinkedIn', icon: 'in', href: '#' },
                                { name: 'GitHub', icon: '<>', href: '#' },
                                { name: 'YouTube', icon: '▶', href: '#' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services column */}
                    <div>
                        <h3 className="font-handwritten text-xl text-white mb-4">Our Services</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Prompt Engineering', path: '/prompt-engineering' },
                                { name: 'RAG', path: '/rag' },
                                { name: 'Tools & MCP', path: '/tools-mcp' },
                                { name: 'Model Augmentation', path: '/model-augmentation' },
                                { name: 'Fine Tuning', path: '/fine-tuning' },
                                { name: 'AI Agents', path: '/agents' },
                                { name: 'App Development', path: '/app-dev' },
                                { name: 'Consulting', path: '/consulting' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-gray-400 hover:text-purple-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company links column */}
                    <div>
                        <h3 className="font-handwritten text-xl text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Team', path: '/team' },
                                { name: 'Careers', path: '/careers' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'Case Studies', path: '/case-studies' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-gray-400 hover:text-purple-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter signup */}
                    <div>
                        <h3 className="font-handwritten text-xl text-white mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest AI insights and company updates.
                        </p>
                        {subscribed ? (
                            <div className="p-4 bg-purple-900/30 border border-purple-500 rounded-lg">
                                <p className="text-purple-300">
                                    Thanks for subscribing! You'll hear from us soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="mt-2">
                                <div className="flex flex-col space-y-2">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Contact information */}
            <div className="border-t border-gray-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
                        <div className="mb-4 md:mb-0">
                            <p className="text-center md:text-left">
                                101 Innovation Drive, San Francisco, CA 94105
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="tel:+14155550123" className="hover:text-purple-400 transition-colors">
                                +1 (415) 555-0123
                            </a>
                            <a href="mailto:info@langiq.ai" className="hover:text-purple-400 transition-colors">
                                info@langiq.ai
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom copyright section */}
            <div className="border-t border-gray-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="font-handwritten text-xl text-gray-400 mb-4 md:mb-0">
                            LangIQ © {new Date().getFullYear()}
                        </p>
                        <div className="flex space-x-6 text-sm text-gray-500">
                            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-gray-300 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="hover:text-gray-300 transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
