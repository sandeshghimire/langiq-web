'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiLineChart, BiCodeAlt, BiMicrochip, BiBot } from 'react-icons/bi';
import { BsCurrencyDollar, BsLightningCharge, BsPeople } from 'react-icons/bs';
import { toast } from 'react-hot-toast';

type TabType = 'client' | 'investor';

export default function Contact() {
    const [activeTab, setActiveTab] = useState<TabType>('client');
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

    const investorBenefits = [
        {
            icon: <BsCurrencyDollar className="w-10 h-10 text-purple-400" />,
            title: "High Growth Potential",
            description: "Join us in the rapidly expanding AI market with significant growth projections"
        },
        {
            icon: <BsLightningCharge className="w-10 h-10 text-purple-400" />,
            title: "Innovative Technology",
            description: "Our proprietary LLM optimization technologies offer a competitive edge in the AI landscape"
        },
        {
            icon: <BiLineChart className="w-10 h-10 text-purple-400" />,
            title: "Proven Traction",
            description: "With established enterprise clients and consistent growth quarter over quarter"
        },
        {
            icon: <BsPeople className="w-10 h-10 text-purple-400" />,
            title: "Expert Team",
            description: "Founded by AI researchers with prior exits and enterprise AI implementation experience"
        }
    ];

    const clientOfferings = [
        {
            icon: <BiCodeAlt className="w-10 h-10 text-purple-400" />,
            title: "Custom AI Solutions",
            description: "Tailored AI implementations designed specifically for your unique business challenges"
        },
        {
            icon: <BiMicrochip className="w-10 h-10 text-purple-400" />,
            title: "LLM Optimization",
            description: "Fine-tune and optimize large language models for enhanced performance and efficiency"
        },
        {
            icon: <BiBot className="w-10 h-10 text-purple-400" />,
            title: "Intelligent Agents",
            description: "Autonomous AI agents that handle complex tasks and workflows with minimal supervision"
        },
        {
            icon: <BsLightningCharge className="w-10 h-10 text-purple-400" />,
            title: "Rapid Deployment",
            description: "Get your AI solutions into production quickly with our streamlined implementation process"
        }
    ];

    // Tab navigation component
    const TabNavigation = () => (
        <div className="max-w-md mx-auto mb-12">
            <div className="flex rounded-lg bg-gray-800 p-1">
                {['client', 'investor'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as TabType)}
                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${activeTab === tab
                            ? 'bg-purple-600 text-white shadow-lg'
                            : 'text-gray-300 hover:text-white'
                            }`}
                    >
                        {tab === 'client' ? 'For Clients' : 'For Investors'}
                    </button>
                ))}
            </div>
        </div>
    );

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

            <section className="py-12 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <TabNavigation />

                    <AnimatePresence mode="wait">
                        {activeTab === 'investor' ? (
                            <motion.div
                                key="investor-tab"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="py-8 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-gray-800 z-0"></div>
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.7 }}
                                        viewport={{ once: true }}
                                        className="text-center mb-12"
                                    >
                                        <h2 className="font-handwritten text-4xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                                            Investor Opportunities
                                        </h2>
                                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                            Join us on our mission to revolutionize AI implementation for enterprises.
                                            We're seeking strategic partners who share our vision for the future of AI.
                                        </p>
                                    </motion.div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {investorBenefits.map((benefit, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ y: 20, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                                className="bg-gray-900/60 backdrop-blur p-6 rounded-xl border border-gray-700"
                                            >
                                                <div className="mb-4">{benefit.icon}</div>
                                                <h3 className="text-xl font-semibold text-purple-300 mb-2">{benefit.title}</h3>
                                                <p className="text-gray-400">{benefit.description}</p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.7, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className="mt-12 text-center"
                                    >
                                        <p className="text-gray-300 mb-6">
                                            Currently raising funds to accelerate growth and product development.
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="client-tab"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="py-8 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-gray-800 z-0"></div>
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.7 }}
                                        viewport={{ once: true }}
                                        className="text-center mb-12"
                                    >
                                        <h2 className="font-handwritten text-4xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                            Client Offerings
                                        </h2>
                                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                            We help businesses transform their operations with cutting-edge AI solutions.
                                            Our expertise allows you to implement AI effectively and see real results.
                                        </p>
                                    </motion.div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {clientOfferings.map((offering, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ y: 20, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                                className="bg-gray-900/60 backdrop-blur p-6 rounded-xl border border-gray-700"
                                            >
                                                <div className="mb-4">{offering.icon}</div>
                                                <h3 className="text-xl font-semibold text-blue-300 mb-2">{offering.title}</h3>
                                                <p className="text-gray-400">{offering.description}</p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.7, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className="mt-12 text-center"
                                    >
                                        <p className="text-gray-300 mb-6">
                                            Contact us to discuss how we can help you implement AI in your business.
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <section className="py-12 bg-gray-900" id="contact-form">
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
                                or explore {activeTab === 'investor' ? 'investment' : 'partnership'} opportunities, our team is here to help.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-handwritten text-2xl text-purple-400 mb-3">Email</h3>
                                    <p className="text-gray-300">{activeTab === 'investor' ? 'investors@langiq.ai' : 'info@langiq.ai'}</p>
                                </div>

                                <div>
                                    <h3 className="font-handwritten text-2xl text-purple-400 mb-3">Headquarters</h3>
                                    <p className="text-gray-300">
                                        1333 Trailside Ct<br />
                                        San Jose, CA 95138<br />
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
                                                {activeTab === 'investor' ? (
                                                    <option>Investment Opportunities</option>
                                                ) : (
                                                    <>
                                                        <option>General Inquiry</option>
                                                        <option>Prompt Engineering</option>
                                                        <option>Retrieval-Augmented Generation</option>
                                                        <option>Tools and MCP</option>
                                                        <option>Model Augmentation</option>
                                                        <option>Fine Tuning</option>
                                                        <option>Agents</option>
                                                        <option>Application Development</option>
                                                        <option>Partnership</option>
                                                    </>
                                                )}
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
                                                placeholder={activeTab === 'investor' ? 'Please tell us about your investment interests and any questions you have...' : 'How can we help you?'}
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
