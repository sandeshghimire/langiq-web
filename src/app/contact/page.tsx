"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        subject: 'General Inquiry'
    });
    const [submitStatus, setSubmitStatus] = useState({
        submitting: false,
        submitted: false,
        error: false,
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setSubmitStatus({
            ...submitStatus,
            submitting: true,
            error: false,
            message: ''
        });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit form');
            }

            setSubmitStatus({
                submitting: false,
                submitted: true,
                error: false,
                message: 'Thanks for your message! We will get back to you soon.'
            });

            // Clear the form
            setFormState({
                name: '',
                email: '',
                company: '',
                message: '',
                subject: 'General Inquiry'
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                submitting: false,
                submitted: false,
                error: true,
                message: 'Failed to submit form. Please try again.'
            });
        }
    };

    const officeLocations = [
        { city: "San Francisco Bay Area", address: "1333 Trailside Ct, San Jose, CA 95138", phone: "+1 (415) 555-0123" },
        { city: "Ann Arbor, Michigan", address: "1252 Timmins dr, Ann Arbor, MI 48103", phone: "+1 (212) 555-0456" },
        { city: "London", address: "78 Innovation Lane, London, UK EC1V 9BP", phone: "+44 20 7123 4567" }
    ];

    return (
        <main className="min-h-[calc(100vh-4rem)] math-paper-bg text-white p-6 pt-32">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-3 handwriting text-center">Contact Us</h1>
                <p className="handwriting-alt text-center mb-10 max-w-2xl mx-auto">
                    Have questions or need assistance? We'd love to hear from you.
                </p>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* Contact Form */}
                    <motion.div
                        className="content-box p-6 w-full md:w-2/3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold mb-6 handwriting">Send Us a Message</h2>

                        {submitStatus.submitted ? (
                            <div className="bg-green-600/20 border border-green-500 text-white p-4 rounded-lg mb-6">
                                <p className="handwriting-alt">{submitStatus.message}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {submitStatus.error && (
                                    <div className="bg-red-600/20 border border-red-500 text-white p-4 rounded-lg">
                                        <p className="handwriting-alt">{submitStatus.message}</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block mb-2 handwriting-alt text-gray-300">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-lg handwriting-alt focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 handwriting-alt text-gray-300">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-lg handwriting-alt focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block mb-2 handwriting-alt text-gray-300">Company (Optional)</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formState.company}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-lg handwriting-alt focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 handwriting-alt text-gray-300">Subject</label>
                                        <select
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-lg handwriting-alt focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Technical Support">Technical Support</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="Pricing">Pricing</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 handwriting-alt text-gray-300">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-lg handwriting-alt focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={submitStatus.submitting}
                                        className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 handwriting-alt disabled:opacity-70"
                                    >
                                        {submitStatus.submitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="content-box p-6 w-full md:w-1/3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold mb-6 handwriting">Our Offices</h2>

                        <div className="space-y-6">
                            {officeLocations.map((office, index) => (
                                <div key={index} className="border-b border-gray-700 pb-4 last:border-0">
                                    <h3 className="text-xl font-semibold handwriting mb-2">{office.city}</h3>
                                    <p className="handwriting-alt text-gray-300 mb-2">{office.address}</p>
                                    <p className="handwriting-alt text-gray-300">{office.phone}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold handwriting mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </main>
    );
}