import { motion } from "framer-motion";
import { useState } from "react";

interface Slide3Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
    scrollToSlide?: (slideNumber: number) => void;
}

export default function Slide3({ slideVariants, itemVariants, isActive, setRef, scrollToSlide }: Slide3Props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        previousExperience: "",
        questions: ""
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when field is edited
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        validateField(name, formData[name as keyof typeof formData]);
    };

    const validateField = (name: string, value: string) => {
        let errorMessage = "";

        switch (name) {
            case "name":
                if (!value.trim()) errorMessage = "Full name is required";
                break;
            case "email":
                if (!value) {
                    errorMessage = "Email is required";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    errorMessage = "Invalid email address";
                }
                break;
            default:
                break;
        }

        if (errorMessage) {
            setErrors(prev => ({ ...prev, [name]: errorMessage }));
            return false;
        }
        return true;
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        let isValid = true;

        // Validate required fields
        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
            isValid = false;
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'investor',
                    formData
                }),
            });

            const result = await response.json();

            if (result.success) {
                console.log("Investor form submitted successfully:", formData);
                // Navigate to thank you page
                if (scrollToSlide) {
                    scrollToSlide(4);
                }
            } else {
                throw new Error(result.message || 'Failed to send email');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("There was an error submitting your information. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            ref={setRef}
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-slate-50/10 px-4 md:px-12 relative"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <motion.h1
                className="text-3xl md:text-4xl font-normal mb-8 text-center text-gray-900"
                variants={itemVariants}
            >
                Investor Information
            </motion.h1>
            <motion.div
                className="w-full max-w-lg p-0"
                variants={itemVariants}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm text-gray-700 mb-2">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`w-full px-0 py-2 bg-transparent border-0 border-b ${errors.name ? 'border-red-300 text-gray-900' : 'border-gray-200 text-gray-900'} rounded-none focus:outline-none focus:border-gray-400 transition-colors`}
                            placeholder="Your full name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`w-full px-0 py-2 bg-transparent border-0 border-b ${errors.email ? 'border-red-300 text-gray-900' : 'border-gray-200 text-gray-900'} rounded-none focus:outline-none focus:border-gray-400 transition-colors`}
                            placeholder="Email address"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm text-gray-700 mb-2">Company/Organization</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-200 text-gray-900 rounded-none focus:outline-none focus:border-gray-400 transition-colors"
                            placeholder="Company or organization name (optional)"
                        />
                    </div>

                    <div>
                        <label htmlFor="previousExperience" className="block text-sm text-gray-700 mb-2">Previous Investment Experience</label>
                        <textarea
                            id="previousExperience"
                            name="previousExperience"
                            value={formData.previousExperience}
                            onChange={handleChange}
                            rows={2}
                            className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-200 text-gray-900 rounded-none focus:outline-none focus:border-gray-400 transition-colors resize-none"
                            placeholder="Please describe any relevant investment experience..."
                        />
                    </div>

                    <div>
                        <label htmlFor="questions" className="block text-sm text-gray-700 mb-2">Questions or Comments</label>
                        <textarea
                            id="questions"
                            name="questions"
                            value={formData.questions}
                            onChange={handleChange}
                            rows={2}
                            className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-200 text-gray-900 rounded-none focus:outline-none focus:border-gray-400 transition-colors resize-none"
                            placeholder="Any questions or specific areas of interest?"
                        />
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-48 border border-gray-300 text-gray-800 py-3 px-6 hover:bg-gray-50 transition-colors duration-300 text-sm flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing
                                </>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>

                    <div className="text-center text-xs text-gray-600">
                        <p>Fields marked with * are required</p>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
}