import Link from 'next/link';
import Image from 'next/image';

export default function Agents() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                            AI Agents
                        </h1>
                        <p className="text-xl text-gray-300 mb-10">
                            Create autonomous AI systems that reason, plan, and execute complex multi-step tasks
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-handwritten text-3xl text-green-400 mb-6">What Are AI Agents?</h2>
                            <p className="text-gray-300 mb-4">
                                AI agents are autonomous systems that can perceive their environment, make decisions,
                                and take actions to achieve specific goals without constant human guidance.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Unlike simple language models that respond to prompts, agents have memory, planning capabilities,
                                tool utilization, and can adapt their behavior based on feedback and changing conditions.
                            </p>
                            <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-green-800/30">
                                <h3 className="font-handwritten text-xl text-green-400 mb-2">LangIQ Agents Framework</h3>
                                <p className="text-gray-300 mb-3">
                                    Our open-source Python library provides a comprehensive framework for building autonomous AI agents.
                                    With built-in components for memory, planning, tool usage, and self-evaluation, you can quickly
                                    create powerful agents for diverse applications.
                                </p>
                                <a
                                    href="https://github.com/langiq/agents-framework"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-green-400 hover:text-green-300"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    Explore our GitHub Repository
                                </a>
                            </div>
                            <div className="mt-8">
                                <Link href="/contact" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-medium transition-all">
                                    Explore Agent Solutions
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/ai-agents-system.jpg"
                                    alt="LangIQ AI Agents Architecture"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <h3 className="font-handwritten text-2xl text-green-400 mb-4">Agent Capabilities</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Goal-oriented planning and execution",
                                        "Long-term memory and context retention",
                                        "Autonomous decision-making",
                                        "Tool and API utilization",
                                        "Self-improvement and learning",
                                        "Multi-step reasoning and problem-solving",
                                        "Task decomposition and management",
                                        "Adaptive behavior based on feedback"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-400 mr-2">•</span>
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="font-handwritten text-3xl text-green-400 mb-6">Agent Architecture Components</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Core Intelligence",
                                    description: "The foundational language model that powers reasoning, understanding, and generation."
                                },
                                {
                                    title: "Memory Systems",
                                    description: "Short and long-term memory mechanisms for maintaining context and learning from experience."
                                },
                                {
                                    title: "Planning Module",
                                    description: "Components for goal decomposition, strategy formulation, and task sequencing."
                                },
                                {
                                    title: "Tool Integration",
                                    description: "Mechanisms for utilizing external tools, APIs, and services to accomplish tasks."
                                },
                                {
                                    title: "Self-Evaluation",
                                    description: "Capabilities for monitoring performance, detecting errors, and adapting strategies."
                                },
                                {
                                    title: "Orchestration Layer",
                                    description: "Systems for coordinating multiple agent components and managing workflows."
                                }
                            ].map((component, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                    <h3 className="font-handwritten text-2xl text-green-400 mb-3">{component.title}</h3>
                                    <p className="text-gray-300">{component.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-16 bg-gradient-to-br from-gray-900 to-green-950">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="font-handwritten text-4xl mb-6 text-white">Automate Complex Tasks</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Discover how our AI agents can transform your business processes and customer experiences
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-green-500/30"
                    >
                        Request a Demo
                    </Link>
                </div>
            </section>
        </div>
    );
}
