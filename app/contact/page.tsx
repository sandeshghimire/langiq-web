'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        interest: 'General Inquiry'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulating form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);

            // Reset form after showing success message
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: '',
                    interest: 'General Inquiry'
                });
                setSubmitted(false);
            }, 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-300 mb-10">
                            Reach out to discuss how LangIQ can help transform your AI strategy
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact form section */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-handwritten text-3xl text-purple-400 mb-6">Get in Touch</h2>
                            <p className="text-gray-300 mb-8">
                                Whether you're looking to discuss a specific project, learn more about our services,
                                or explore partnership opportunities, our team is here to help.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-handwritten text-2xl text-purple-400 mb-3">Email</h3>
                                    <p className="text-gray-300">info@langiq.ai</p>
                                </div>

                                <div>
                                    <h3 className="font-handwritten text-2xl text-purple-400 mb-3">Headquarters</h3>
                                    <p className="text-gray-300">
                                        101 Innovation Drive<br />
                                        San Francisco, CA 94105<br />
                                        United States
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-handwritten text-2xl text-purple-400 mb-3">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social, index) => (
                                            <a
                                                key={index}
                                                href="#"
                                                className="text-gray-400 hover:text-purple-400 transition-colors"
                                            >
                                                {social}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            {submitted ? (
                                <div className="text-center py-8">
                                    <h3 className="font-handwritten text-2xl text-green-400 mb-4">Message Sent!</h3>
                                    <p className="text-gray-300">
                                        Thank you for reaching out. We'll get back to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-gray-300 mb-2">Company (Optional)</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="interest" className="block text-gray-300 mb-2">I'm interested in</label>
                                        <select
                                            id="interest"
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Prompt Engineering</option>
                                            <option>Retrieval-Augmented Generation</option>
                                            <option>Tools and MCP</option>
                                            <option>Model Augmentation</option>
                                            <option>Fine Tuning</option>
                                            <option>Agents</option>
                                            <option>Application Development</option>
                                            <option>Partnership</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-medium transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
