'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
    FaPencilAlt, FaDatabase, FaTools, FaRobot, FaCode, FaMagic, FaCogs,
    FaInfoCircle, FaUsers, FaBriefcase, FaBookOpen, FaChartBar, FaEnvelope,
    FaTwitter, FaLinkedinIn, FaGithub, FaYoutube, FaMapMarkerAlt, FaPhone
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
        <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
            {/* Top footer section with multiple columns */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company info column */}
                    <div className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl border border-gray-800">
                        <Link href="/" className="inline-block group">
                            <h2 className="font-handwritten text-3xl text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">LangIQ</h2>
                        </Link>
                        <p className="text-gray-400 mb-4">
                            Pioneering the future of AI language technologies for innovative enterprises.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {[
                                { name: 'Twitter', icon: <FaTwitter size={18} />, href: '#' },
                                { name: 'LinkedIn', icon: <FaLinkedinIn size={18} />, href: '#' },
                                { name: 'GitHub', icon: <FaGithub size={18} />, href: '#' },
                                { name: 'YouTube', icon: <FaYoutube size={18} />, href: '#' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="bg-gray-800 text-gray-400 hover:text-white hover:bg-purple-600 hover:scale-110 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services column */}
                    <div>
                        <h3 className="font-handwritten text-xl text-white mb-4 relative">
                            <span className="inline-block relative">
                                Our Services
                                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
                            </span>
                        </h3>
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
                                        className="text-gray-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-200 flex items-center group"
                                    >
                                        <span className="mr-2 group-hover:scale-110 transition-transform">{link.icon}</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company links column */}
                    <div>
                        <h3 className="font-handwritten text-xl text-white mb-4 relative">
                            <span className="inline-block relative">
                                Company
                                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
                            </span>
                        </h3>
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
                                        className="text-gray-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-200 flex items-center group"
                                    >
                                        <span className="mr-2 group-hover:scale-110 transition-transform">{link.icon}</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter signup */}
                    <div className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl border border-gray-800">
                        <h3 className="font-handwritten text-xl text-white mb-4 relative">
                            <span className="inline-block relative">
                                Stay Updated
                                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
                            </span>
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest AI insights and company updates.
                        </p>
                        {subscribed ? (
                            <div className="p-4 bg-purple-900/30 border border-purple-500 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.3)]">
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
                                        className="bg-gray-800/80 text-gray-200 px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] font-semibold"
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
            <div className="border-t border-gray-800 py-8 bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
                        <div className="mb-4 md:mb-0">
                            <p className="text-center md:text-left flex items-center justify-center md:justify-start">
                                <FaMapMarkerAlt className="text-purple-400 mr-2" />
                                1333 Trailside Ct, San Jose, CA 95131, USA
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="tel:+14155550123" className="hover:text-purple-400 transition-colors flex items-center">
                                <FaPhone className="mr-2" /> +1 (415) 555-0123
                            </a>
                            <a href="mailto:info@langiq.ai" className="hover:text-purple-400 transition-colors flex items-center">
                                <FaEnvelope className="mr-2" /> info@langiq.ai
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom copyright section */}
            <div className="border-t border-gray-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="font-handwritten text-xl text-gray-400 mb-4 md:mb-0 hover:text-purple-400 transition-all duration-300">
                            LangIQ © {new Date().getFullYear()}
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:space-x-6 text-sm text-gray-500">
                            <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-purple-400 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="hover:text-purple-400 transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
