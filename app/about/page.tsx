import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-gray-900"></div>
                <div className="grid-bg absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-handwritten text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                            About LangIQ
                        </h1>
                        <p className="text-xl text-gray-300 mb-10">
                            Pioneering the future of language AI technologies and applications
                        </p>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-handwritten text-3xl text-purple-400 mb-6">Our Story</h2>
                            <p className="text-gray-300 mb-4">
                                LangIQ was founded by a team of AI researchers, engineers, and industry experts
                                who recognized the transformative potential of large language models across industries.
                            </p>
                            <p className="text-gray-300 mb-4">
                                We observed that while powerful AI models were becoming increasingly accessible,
                                organizations struggled to effectively implement and optimize these technologies for
                                their specific needs. This gap between potential and practical application became our focus.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Today, LangIQ stands at the forefront of AI innovation, helping enterprises and startups
                                harness the full capabilities of language models through expert consulting, advanced
                                techniques, and custom application development.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            <h3 className="font-handwritten text-2xl text-purple-400 mb-4">Our Mission</h3>
                            <p className="text-gray-300 mb-6">
                                To empower organizations with the expertise, tools, and applications needed to transform
                                their operations and customer experiences through state-of-the-art AI language technologies.
                            </p>
                            <h3 className="font-handwritten text-2xl text-purple-400 mb-4">Our Vision</h3>
                            <p className="text-gray-300">
                                A world where AI language technologies are seamlessly integrated into every organization,
                                enhancing human capabilities, driving innovation, and creating unprecedented value across
                                all sectors of the economy.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="font-handwritten text-3xl text-purple-400 mb-6 text-center">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Innovation",
                                    description: "We constantly push the boundaries of what's possible with AI language technologies."
                                },
                                {
                                    title: "Excellence",
                                    description: "We maintain the highest standards in our research, development, and client solutions."
                                },
                                {
                                    title: "Responsibility",
                                    description: "We prioritize ethical AI practices and sustainable technological advancement."
                                },
                                {
                                    title: "Collaboration",
                                    description: "We work closely with clients and partners to achieve shared objectives."
                                },
                                {
                                    title: "Education",
                                    description: "We believe in democratizing AI knowledge and empowering through learning."
                                },
                                {
                                    title: "Impact",
                                    description: "We measure our success by the tangible value we create for our clients and society."
                                }
                            ].map((value, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                    <h3 className="font-handwritten text-2xl text-purple-400 mb-3">{value.title}</h3>
                                    <p className="text-gray-300">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team section (placeholder) */}
            <section className="py-16 bg-gray-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-handwritten text-3xl text-purple-400 mb-10">Our Leadership Team</h2>
                    <p className="text-gray-300 text-xl mb-10">
                        LangIQ is led by renowned experts in artificial intelligence,
                        natural language processing, and enterprise technology.
                    </p>
                    {/* Team grid would go here in a real implementation */}
                    <Link
                        href="/team"
                        className="inline-block bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg text-white font-medium transition-all"
                    >
                        Meet Our Team
                    </Link>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-16 bg-gradient-to-br from-gray-900 to-violet-950">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="font-handwritten text-4xl mb-6 text-white">Join Us on Our Journey</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Whether as a client, partner, or team member, be part of the AI revolution with LangIQ
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/30"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/careers"
                            className="inline-block bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all"
                        >
                            Careers
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
