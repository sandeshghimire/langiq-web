import React from 'react';

const Projects = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">LLM Advisory Consulting Business</h2>

            {/* Business Concept */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Business Concept</h3>
                <p className="text-gray-700 leading-relaxed">
                    Position yourself as an independent advisor helping organizations navigate LLM adoption by cutting through vendor hype and providing honest, practical assessments of capabilities, limitations, and real-world applications.
                </p>
            </div>

            {/* Current LLM State */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Current LLM State (July 2025)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Mature Models</h4>
                        <p className="text-sm text-gray-700">GPT-4o, Claude Sonnet 4, Gemini Pro offer strong reasoning and multimodal capabilities.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Emerging</h4>
                        <p className="text-sm text-gray-700">Specialized models for code, math, and domain-specific tasks.</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">Infrastructure</h4>
                        <p className="text-sm text-gray-700">API costs dropping, local deployment options expanding, but still computationally expensive for high-volume use.</p>
                    </div>
                </div>
            </div>

            {/* Pros and Cons */}
            <div className="mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Pros */}
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-green-700 mb-3">Honest Pros</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                Exceptional at content generation, analysis, and structured data extraction
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                Handles complex reasoning tasks that previously required human expertise
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                Rapid prototyping and automation of knowledge work
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                24/7 availability with consistent quality
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                Multilingual capabilities surpass most human translators
                            </li>
                        </ul>
                    </div>

                    {/* Cons */}
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-red-700 mb-3">Critical Cons</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Hallucinations remain unpredictable, especially with factual claims
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Training data cutoffs create knowledge gaps
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Inconsistent performance on edge cases
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                High computational costs for enterprise-scale deployment
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Regulatory uncertainty around data privacy and AI governance
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                Cannot learn or remember between sessions without custom implementation
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Practical Applications */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Practical Applications That Actually Work</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Document Processing</h4>
                        <p className="text-sm text-gray-600">Contract analysis, report summarization, compliance checking</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Customer Service</h4>
                        <p className="text-sm text-gray-600">Tier-1 support, FAQ automation, multilingual chat</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Content Operations</h4>
                        <p className="text-sm text-gray-600">Marketing copy, technical documentation, translation</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Code Assistance</h4>
                        <p className="text-sm text-gray-600">Debugging, documentation, routine programming tasks</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Data Analysis</h4>
                        <p className="text-sm text-gray-600">Pattern recognition in unstructured text, survey analysis</p>
                    </div>
                </div>
            </div>

            {/* Service Offerings */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Service Offerings</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-1">Assessment</h4>
                        <p className="text-sm text-gray-700">Audit current processes to identify high-ROI LLM opportunities</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-1">Pilot Design</h4>
                        <p className="text-sm text-gray-700">Structure limited trials with clear success metrics</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-1">Vendor Evaluation</h4>
                        <p className="text-sm text-gray-700">Compare models for specific use cases with actual testing</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-1">Implementation Strategy</h4>
                        <p className="text-sm text-gray-700">Phased rollout plans with risk mitigation</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-1">Training</h4>
                        <p className="text-sm text-gray-700">Prompt engineering and responsible AI practices for internal teams</p>
                    </div>
                </div>
            </div>

            {/* Target Market & Competitive Advantage */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">Target Market</h3>
                    <p className="text-gray-700 text-sm">
                        Mid-to-large enterprises (500+ employees) in professional services, healthcare, finance, and technology who need objective guidance beyond vendor sales pitches.
                    </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-700 mb-3">Competitive Advantage</h3>
                    <p className="text-gray-700 text-sm">
                        No vendor relationships, hands-on technical testing, focus on practical ROI rather than theoretical capabilities, and honest assessment of what doesn't work well.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
