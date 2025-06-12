import { motion } from "framer-motion";
import { useState } from "react";

interface Slide3Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide3({ slideVariants, itemVariants, isActive, setRef }: Slide3Props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        investmentInterest: "",
        investmentRange: "",
        previousExperience: "",
        questions: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Investor form submitted:", formData);
        // Here you would typically send this data to your backend
        alert("Thank you for your interest! Our team will contact you soon.");
    };

    return (
        <motion.div
            ref={setRef}
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-transparent backdrop-blur-sm px-4 md:px-12 relative border border-gray-200/20"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <motion.h1
                className="text-3xl md:text-4xl font-bold mb-4 text-center"
                variants={itemVariants}
            >
                Investor Information
            </motion.h1>
            <motion.div
                className="w-full max-w-md"
                variants={itemVariants}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1">Company/Organization</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="investmentInterest" className="block text-sm font-medium mb-1">Investment Interest</label>
                        <select
                            id="investmentInterest"
                            name="investmentInterest"
                            value={formData.investmentInterest}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                            <option value="">Select your interest</option>
                            <option value="equity">Equity Investment</option>
                            <option value="venture">Venture Capital</option>
                            <option value="angel">Angel Investor</option>
                            <option value="partnership">Strategic Partnership</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="investmentRange" className="block text-sm font-medium mb-1">Investment Range</label>
                        <select
                            id="investmentRange"
                            name="investmentRange"
                            value={formData.investmentRange}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                            <option value="">Select range</option>
                            <option value="< $100K">Less than $100,000</option>
                            <option value="$100K-$500K">$100,000 - $500,000</option>
                            <option value="$500K-$1M">$500,000 - $1 million</option>
                            <option value="> $1M">Over $1 million</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="previousExperience" className="block text-sm font-medium mb-1">Previous Investment Experience</label>
                        <textarea
                            id="previousExperience"
                            name="previousExperience"
                            value={formData.previousExperience}
                            onChange={handleChange}
                            rows={2}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="questions" className="block text-sm font-medium mb-1">Questions or Comments</label>
                        <textarea
                            id="questions"
                            name="questions"
                            value={formData.questions}
                            onChange={handleChange}
                            rows={2}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors font-medium"
                    >
                        Submit
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
}
