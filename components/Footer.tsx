'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
    FaPencilAlt, FaDatabase, FaTools, FaRobot, FaCode, FaMagic, FaCogs,
    FaInfoCircle, FaUsers, FaBriefcase, FaBookOpen, FaChartBar, FaEnvelope
} from 'react-icons/fa';

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
                                { name: 'Prompt Engineering', path: '/prompt-engineering', icon: <FaPencilAlt className="text-purple-400" /> },
                                { name: 'RAG', path: '/rag', icon: <FaDatabase className="text-purple-400" /> },
                                { name: 'Tools & MCP', path: '/tools-mcp', icon: <FaTools className="text-purple-400" /> },
                                { name: 'Model Augmentation', path: '/model-augmentation', icon: <FaMagic className="text-purple-400" /> },
                                { name: 'Fine Tuning', path: '/fine-tuning', icon: <FaCogs className="text-purple-400" /> },
                                { name: 'AI Agents', path: '/agents', icon: <FaRobot className="text-purple-400" /> },
                                { name: 'App Development', path: '/app-dev', icon: <FaCode className="text-purple-400" /> }
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                                    >
                                        <span className="mr-2">{link.icon}</span>
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
                                { name: 'About Us', path: '/about', icon: <FaInfoCircle className="text-purple-400" /> },
                                { name: 'Team', path: '/team', icon: <FaUsers className="text-purple-400" /> },
                                { name: 'Careers', path: '/careers', icon: <FaBriefcase className="text-purple-400" /> },
                                { name: 'Blog', path: '/blog', icon: <FaBookOpen className="text-purple-400" /> },
                                { name: 'Case Studies', path: '/case-studies', icon: <FaChartBar className="text-purple-400" /> },
                                { name: 'Contact', path: '/contact', icon: <FaEnvelope className="text-purple-400" /> },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                                    >
                                        <span className="mr-2">{link.icon}</span>
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
                                1333 Trailside Ct, San Jose, CA 95131, USA
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
