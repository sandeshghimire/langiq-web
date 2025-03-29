'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '', email: '', company: '', message: '', interest: 'General Inquiry'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFocus = (fieldName: string) => setFocusedField(fieldName);
    const handleBlur = () => setFocusedField(null);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error('Please fill all required fields correctly');
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            toast.success('Message sent successfully!');
            setSubmitted(true);

            setTimeout(() => {
                setFormData({ name: '', email: '', company: '', message: '', interest: 'General Inquiry' });
                setSubmitted(false);
            }, 5000);
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = (fieldName: string) => `
        w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 
        text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500
        transition-all duration-300 ease-in-out
        ${focusedField === fieldName ? 'border-purple-500 shadow-lg shadow-purple-500/20' : ''}
        ${errors[fieldName] ? 'border-red-500' : ''}
    `;

    const socialLinks = [
        { name: 'Twitter', icon: <FaTwitter className="w-6 h-6" />, url: '#' },
        { name: 'LinkedIn', icon: <FaLinkedin className="w-6 h-6" />, url: '#' },
        { name: 'GitHub', icon: <FaGithub className="w-6 h-6" />, url: '#' },
        { name: 'YouTube', icon: <FaYoutube className="w-6 h-6" />, url: '#' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen"
        >
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Contact Us</h1>
                        <p className="text-xl text-gray-300 mb-10">Reach out to discuss how LangIQ can help transform your AI strategy</p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        <div className="transform hover:scale-[1.01] transition-transform duration-300">
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
                                    <div className="flex space-x-6">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
                                                aria-label={social.name}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 transition-all duration-300"
                        >
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="font-handwritten text-2xl text-green-400 mb-4">Message Sent!</h3>
                                        <p className="text-gray-300">Thank you for reaching out. We'll get back to you shortly.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <motion.div layout>
                                            <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('name')}
                                                onBlur={handleBlur}
                                                required
                                                className={inputClasses('name')}
                                            />
                                            {errors.name && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-red-400 text-sm mt-1"
                                                >
                                                    {errors.name}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.div layout>
                                            <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('email')}
                                                onBlur={handleBlur}
                                                required
                                                className={inputClasses('email')}
                                            />
                                            {errors.email && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-red-400 text-sm mt-1"
                                                >
                                                    {errors.email}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.div layout>
                                            <label htmlFor="company" className="block text-gray-300 mb-2">Company (Optional)</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('company')}
                                                onBlur={handleBlur}
                                                className={inputClasses('company')}
                                            />
                                        </motion.div>

                                        <motion.div layout>
                                            <label htmlFor="interest" className="block text-gray-300 mb-2">I'm interested in</label>
                                            <select
                                                id="interest"
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('interest')}
                                                onBlur={handleBlur}
                                                className={inputClasses('interest')}
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
                                        </motion.div>

                                        <motion.div layout>
                                            <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('message')}
                                                onBlur={handleBlur}
                                                required
                                                rows={5}
                                                className={inputClasses('message')}
                                            ></textarea>
                                            {errors.message && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-red-400 text-sm mt-1"
                                                >
                                                    {errors.message}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg 
                                                text-white font-medium transition-all flex items-center justify-center 
                                                space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting && <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />}
                                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                        </motion.button>
                                    </form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}
