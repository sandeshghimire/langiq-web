import Link from 'next/link';

export default function ApplicationDevelopment() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400">
                            Application Development
                        </h1>
                        <p className="text-xl text-gray-300 mb-10">
                            Build innovative, AI-powered applications that transform industries and user experiences
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-handwritten text-3xl text-pink-400 mb-6">AI-Powered Applications</h2>
                            <p className="text-gray-300 mb-4">
                                Modern applications increasingly leverage artificial intelligence to deliver more intuitive,
                                personalized, and efficient user experiences that were previously impossible.
                            </p>
                            <p className="text-gray-300 mb-4">
                                At LangIQ, we specialize in developing cutting-edge applications that harness the full potential
                                of language models, computer vision, and other AI technologies to create breakthrough solutions
                                for enterprises and startups alike.
                            </p>
                            <div className="mt-8">
                                <Link href="/contact" className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-white font-medium transition-all">
                                    Discuss Your Project
                                </Link>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            <h3 className="font-handwritten text-2xl text-pink-400 mb-4">Application Types</h3>
                            <ul className="space-y-3">
                                {[
                                    "Intelligent assistants and chatbots",
                                    "Content generation and optimization tools",
                                    "Document analysis and processing systems",
                                    "Knowledge management platforms",
                                    "Customer experience solutions",
                                    "Creative and design applications",
                                    "Decision support systems",
                                    "Industry-specific vertical applications"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-pink-400 mr-2">•</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="font-handwritten text-3xl text-pink-400 mb-6">Our Development Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Discovery",
                                    description: "Deep exploration of your business needs, user requirements, and technological opportunities."
                                },
                                {
                                    title: "Design",
                                    description: "Comprehensive application architecture and user experience design with AI integration points."
                                },
                                {
                                    title: "Development",
                                    description: "Agile implementation with iterative testing and continuous refinement of AI capabilities."
                                },
                                {
                                    title: "Deployment",
                                    description: "Production launch with ongoing monitoring, optimization, and enhancement strategies."
                                }
                            ].map((phase, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                    <h3 className="font-handwritten text-2xl text-pink-400 mb-3">{phase.title}</h3>
                                    <p className="text-gray-300">{phase.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology section */}
            <section className="py-16 bg-gray-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-handwritten text-3xl text-pink-400 mb-10 text-center">Our Technology Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "NextJS", "React", "Python", "Node.js",
                            "TensorFlow", "PyTorch", "OpenAI API", "Langchain",
                            "Vector Databases", "MongoDB", "PostgreSQL", "Redis",
                            "AWS", "Google Cloud", "Azure", "Vercel"
                        ].map((tech, index) => (
                            <div key={index} className="bg-gray-900 p-4 rounded-lg text-center border border-gray-700">
                                <p className="text-gray-300">{tech}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-16 bg-gradient-to-br from-gray-900 to-pink-950">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="font-handwritten text-4xl mb-6 text-white">Ready to Build Something Amazing?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Partner with us to develop innovative AI applications that drive business growth and user engagement
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-pink-500/30"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>
        </div>
    );
}
