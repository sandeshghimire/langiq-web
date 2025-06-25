import { motion } from "framer-motion";
import { useState } from "react";

interface Slide2Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    setRef: (el: HTMLDivElement | null) => void;
    scrollToSlide?: (slideNumber: number) => void;
}

type FormErrors = {
    [key: string]: string;
};

export default function Slide2({ slideVariants, itemVariants, isActive, setRef, scrollToSlide }: Slide2Props) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: ""
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        validateField(name, formData[name as keyof typeof formData]);
    };

    const validateField = (name: string, value: string) => {
        let errorMessage = "";

        switch (name) {
            case "firstName":
            case "lastName":
                if (!value.trim()) errorMessage = "This field is required";
                break;
            case "email":
                if (!value) {
                    errorMessage = "Email is required";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    errorMessage = "Invalid email address";
                }
                break;
            case "phone":
                if (value && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(value)) {
                    errorMessage = "Please enter a valid phone number";
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
        const newErrors: FormErrors = {};
        let isValid = true;

        // Validate required fields
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
            isValid = false;
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
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
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log("Client form submitted:", formData);
            // Here you would typically send this data to your backend

            // Navigate to thank you page
            if (scrollToSlide) {
                scrollToSlide(4);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("There was an error submitting the form. Please try again.");
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
                Client Information
            </motion.h1>
            <motion.div
                className="w-full max-w-lg p-0"
                variants={itemVariants}
            >                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">First Name *</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className={`w-full px-0 py-2 bg-transparent border-0 border-b ${errors.firstName ? 'border-red-300 text-gray-900' : 'border-gray-200 text-gray-900'} rounded-none focus:outline-none focus:border-gray-400 transition-colors`}
                                placeholder="First name"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">Last Name *</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className={`w-full px-0 py-2 bg-transparent border-0 border-b ${errors.lastName ? 'border-red-300 text-gray-900' : 'border-gray-200 text-gray-900'} rounded-none focus:outline-none focus:border-gray-400 transition-colors`}
                                placeholder="Last name"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Email Address *</label>
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
                        <label htmlFor="company" className="block text-sm text-gray-700 mb-2">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-200 text-gray-900 rounded-none focus:outline-none focus:border-gray-400 transition-colors"
                            placeholder="Company name (optional)"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-0 py-2 bg-transparent border-0 border-b ${errors.phone ? 'border-red-300 text-gray-900' : 'border-gray-200 text-gray-900'} rounded-none focus:outline-none focus:border-gray-400 transition-colors`}
                            placeholder="Phone number (optional)"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm text-gray-700 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-200 text-gray-900 rounded-none focus:outline-none focus:border-gray-400 transition-colors resize-none"
                            placeholder="Tell us how we can help you..."
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
