"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Team() {
    // Add state for scroll-based animations
    const [isVisible, setIsVisible] = useState({
        hero: false,
        leaders: false,
        engineers: false,
        join: false
    });

    // Effect for scroll-based animations
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;

            // Update visibility state based on scroll position
            setIsVisible({
                hero: scrollPosition > 200,
                leaders: scrollPosition > 600,
                engineers: scrollPosition > 1200,
                join: scrollPosition > 1800
            });
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Team members data
    const leadershipTeam = [
        {
            name: "Dr. Sarah Chen",
            role: "Co-Founder & CEO",
            bio: "Former AI Research Lead at OpenAI with 15+ years of experience in machine learning and natural language processing.",
            image: "/team/sarah.jpg"
        },
        {
            name: "Michael Rodriguez",
            role: "Co-Founder & CTO",
            bio: "Previously led engineering teams at Google AI and contributed to the development of transformer architecture models.",
            image: "/team/michael.jpg"
        },
        {
            name: "Anika Patel",
            role: "Chief Product Officer",
            bio: "Product strategy expert with experience scaling AI products from zero to millions of users at Microsoft and Meta.",
            image: "/team/anika.jpg"
        }
    ];

    const engineeringTeam = [
        {
            name: "David Kim",
            role: "Lead ML Engineer",
            bio: "Specialist in model optimization and responsible AI practices with a background in computational linguistics.",
            image: "/team/david.jpg"
        },
        {
            name: "Sophia Wang",
            role: "Senior Frontend Engineer",
            bio: "Passionate about creating intuitive interfaces for complex AI systems with experience at top tech companies.",
            image: "/team/sophia.jpg"
        },
        {
            name: "Marcus Johnson",
            role: "Backend Engineer",
            bio: "Distributed systems expert focused on scaling language model infrastructure efficiently.",
            image: "/team/marcus.jpg"
        },
        {
            name: "Elena Kowalski",
            role: "Research Scientist",
            bio: "PhD in Computer Science with expertise in prompt engineering and few-shot learning techniques.",
            image: "/team/elena.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
            {/* Hero section with animated gradient */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-gray-900 animate-gradient-slow"></div>
                <div className="grid-bg absolute inset-0 opacity-10 animate-pulse-slower"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 transform ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="font-handwritten text-5xl md:text-7xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse-slow font-bold tracking-tight">
                            Meet Our Team
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed animate-slide-up delay-300 font-light max-w-2xl mx-auto">
                            We're a diverse group of AI researchers, engineers, and product specialists united by our mission to make advanced AI accessible and beneficial for everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Team Section */}
            <section className="py-16 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible.leaders ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="font-handwritten text-4xl text-purple-400 mb-6">Leadership Team</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our leadership brings decades of combined experience in AI research and product development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {leadershipTeam.map((member, index) => (
                            <div
                                key={member.name}
                                className="bg-gray-900/80 backdrop-blur-lg rounded-xl border border-purple-800/20 shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:border-purple-600/40 animate-fade-in-up group"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 relative">
                                    <h3 className="text-xl text-purple-300 font-medium mb-1">{member.name}</h3>
                                    <p className="text-gray-400 mb-4">{member.role}</p>
                                    <p className="text-gray-300">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Team Section */}
            <section className="py-16 bg-gradient-to-b from-gray-950 to-purple-950/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible.engineers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="font-handwritten text-4xl text-purple-400 mb-6">Engineering Team</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            The brilliant minds behind our technology and innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {engineeringTeam.map((member, index) => (
                            <div
                                key={member.name}
                                className="bg-gray-900/80 backdrop-blur-lg rounded-xl border border-purple-800/20 shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:border-purple-600/40 animate-fade-in-up group"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={300}
                                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4 relative">
                                    <h3 className="text-lg text-purple-300 font-medium mb-1">{member.name}</h3>
                                    <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                                    <p className="text-gray-300 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Team Section */}
            <section className="py-28 bg-gradient-to-br from-purple-950/30 to-gray-900">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className={`transition-all duration-1000 transform ${isVisible.join ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <h2 className="font-handwritten text-5xl mb-10 text-white animate-glow font-bold tracking-tight">Join Our Team</h2>
                        <p className="text-xl text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300 font-light">
                            We're looking for passionate people who are excited about pushing the boundaries of AI technology while ensuring it benefits humanity.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link
                            href="/careers"
                            className="inline-block bg-purple-700 hover:bg-purple-600 px-10 py-5 rounded-lg text-white font-medium text-lg transition-all shadow-xl hover:shadow-purple-500/20 hover:scale-105 animate-bounce-subtle relative group overflow-hidden"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <span className="relative z-10">View Open Positions</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
