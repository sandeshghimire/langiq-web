import Link from 'next/link';
import Image from 'next/image';

export default function ApplicationDevelopment() {
    return (
        <div className="min-h-screen">
            {/* Hero section with increased padding */}
            <section className="py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-7xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400">
                            Application Development
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                            Build innovative, AI-powered applications that transform industries and user experiences
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content with improved spacing and added image */}
            <section className="py-24 bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h2 className="font-handwritten text-4xl text-pink-400 mb-6">AI-Powered Applications</h2>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                Modern applications increasingly leverage artificial intelligence to deliver more intuitive,
                                personalized, and efficient user experiences that were previously impossible.
                            </p>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                At LangIQ, we specialize in developing cutting-edge applications that harness the full potential
                                of language models, computer vision, and other AI technologies to create breakthrough solutions
                                for enterprises and startups alike.
                            </p>
                            <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-pink-800/30">
                                <h3 className="font-handwritten text-2xl text-pink-400 mb-4">LangIQ App Development Framework</h3>
                                <p className="text-gray-300 mb-5 leading-relaxed">
                                    Our Python libraries and development frameworks accelerate the creation of AI-powered applications
                                    with pre-built components, integration patterns, and best practices.
                                </p>
                                <a
                                    href="https://github.com/langiq/app-development"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-pink-400 hover:text-pink-300 text-lg"
                                >
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    Explore our GitHub Repository
                                </a>
                            </div>
                            <div className="mt-10">
                                <Link href="/contact" className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg">
                                    Discuss Your Project
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-10">
                            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                                <Image
                                    src="/images/app-development.jpg"
                                    alt="LangIQ Application Development"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
                                <h3 className="font-handwritten text-2xl text-pink-400 mb-6">Application Types</h3>
                                <ul className="space-y-4">
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
                    </div>

                    {/* Development process section with increased spacing */}
                    <div className="mt-28">
                        <h2 className="font-handwritten text-4xl text-pink-400 mb-10 text-center">Our Development Process</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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

            {/* Technology section with better spacing */}
            <section className="py-24 bg-gray-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-handwritten text-4xl text-pink-400 mb-12 text-center">Our Technology Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

            {/* CTA section with improved spacing */}
            <section className="py-24 bg-gradient-to-br from-gray-900 to-pink-950">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="font-handwritten text-5xl mb-8 text-white">Ready to Build Something Amazing?</h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Partner with us to develop innovative AI applications that drive business growth and user engagement
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-pink-600 hover:bg-pink-700 px-10 py-5 rounded-lg text-white font-medium text-xl transition-all shadow-lg hover:shadow-pink-500/30"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>
        </div>
    );
}
