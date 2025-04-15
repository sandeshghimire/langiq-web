"use client";

import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
});

// Case studies data
const services = [
  { title: 'Agricultural Management', path: '/case-studies/agricultural-management', description: 'AI-powered solutions for optimizing crop yields, resource allocation, and sustainable farming practices' },
  { title: 'Ecommerce Chatbot', path: '/case-studies/ecommerce-chatbot', description: 'Intelligent customer service automation for online retailers, improving conversion rates and customer satisfaction' },
  { title: 'Government Assistant', path: '/case-studies/government-assistant', description: 'Streamlining citizen services and administrative processes through conversational AI interfaces' },
  { title: 'Legal Analysis', path: '/case-studies/legal-analysis', description: 'Advanced document processing and precedent analysis tools for law firms and legal departments' },
  { title: 'Predictive Maintenance', path: '/case-studies/predictive-maintenance', description: 'ML systems for anticipating equipment failures and optimizing maintenance schedules in manufacturing' },
  { title: 'Regulatory Reporting', path: '/case-studies/regulatory-reporting', description: 'Automated compliance solutions to streamline reporting processes and reduce regulatory risk' },
  { title: 'Telecom Optimization', path: '/case-studies/telecom-optimization', description: 'Network performance enhancement and customer experience improvements for telecommunications providers' },
  { title: 'Education Content', path: '/case-studies/education-content', description: 'Personalized learning materials and curriculum development assistance for educational institutions' },
  { title: 'Hospitality Feedback', path: '/case-studies/hospitality-feedback', description: 'AI-driven analysis of guest experiences to improve service quality in hotels and resorts' },
  { title: 'Media Curation', path: '/case-studies/media-curation', description: 'Content recommendation and personalization systems for digital media platforms' },
  { title: 'Real Estate Analysis', path: '/case-studies/real-estate-analysis', description: 'Market trend prediction and property valuation tools for real estate professionals' },
  { title: 'Sentiment Analysis', path: '/case-studies/sentiment-analysis', description: 'Social media and customer feedback monitoring to gauge brand perception and market trends' },
  { title: 'Travel Itinerary', path: '/case-studies/travel-itinerary', description: 'Personalized travel planning assistants for tourism companies and travel agencies' },
  { title: 'Cybersecurity', path: '/case-studies/cybersecurity', description: 'Threat detection and prevention systems using advanced pattern recognition and anomaly detection' },
  { title: 'Energy Forecasting', path: '/case-studies/energy-forecasting', description: 'Consumption prediction and optimization solutions for utility companies and energy producers' },
  { title: 'Insurance Claims', path: '/case-studies/insurance-claims', description: 'Automated claims processing and fraud detection systems for insurance providers' },
  { title: 'Medical Diagnostics', path: '/case-studies/medical-diagnostics', description: 'Clinical decision support and diagnostic assistance tools for healthcare professionals' },
  { title: 'Recruitment Analytics', path: '/case-studies/recruitment-analytics', description: 'Talent acquisition optimization and candidate matching for HR departments' },
  { title: 'Supply Chain', path: '/case-studies/supply-chain', description: 'Logistics optimization and inventory management solutions for global supply chains' },
  { title: 'Vehicle Analytics', path: '/case-studies/vehicle-analytics', description: 'Fleet management and performance monitoring systems for transportation companies' }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  return (
    <div className={`min-h-screen ${montserrat.className}`}>
      {/* Hero section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 to-gray-900/90"></div>
        <div className="grid-bg absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="font-handwritten text-6xl md:text-7xl lg:text-8xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
              variants={fadeIn}
            >
              Build Next-Gen LLM Applications
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl text-gray-200 mb-6 font-medium"
              variants={fadeIn}
            >
              The universal framework for AI-driven innovation
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-10"
              variants={fadeIn}
            >
              Empower your organization to create, deploy, and manage powerful language model applications. langiq's AI Studio bridges the gap between cutting-edge models and real-world business needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeIn}
            >
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
                <Link href="/ai-studio"
                  className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-white font-semibold text-lg transition-all shadow-lg hover:shadow-purple-500/40 inline-block focus:outline-none focus:ring-2 focus:ring-purple-400"
                  aria-label="Explore AI Studio"
                >
                  Get Started with AI Studio
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
                <Link href="/about"
                  className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg text-white font-semibold text-lg transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-purple-400"
                  aria-label="Learn more about langiq"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-16 bg-gray-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-handwritten text-4xl md:text-5xl text-center mb-6 text-purple-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Explore Our Case Studies
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See how organizations use langiq to accelerate AI adoption, streamline workflows, and unlock new business value across industries.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={cardVariant}>
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.25)",
                    borderColor: "#a78bfa"
                  }}
                  transition={{ duration: 0.18 }}
                >
                  <Link
                    href={service.path}
                    className="bg-gray-800 hover:bg-gray-750 p-6 rounded-xl transition-all border border-gray-700 block h-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                    aria-label={`Read case study: ${service.title}`}
                  >
                    <h3 className="font-handwritten text-2xl text-purple-400 mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-base">{service.description}</p>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/95 to-violet-950/95">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="font-handwritten text-5xl mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Our Mission & Vision
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="font-semibold text-purple-400">Mission:</span> Democratize AI application development for all organizations by providing a universal framework that bridges the gap between powerful language models and practical business solutions.
            </motion.p>
            <motion.p
              className="text-xl text-gray-300 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span className="font-semibold text-purple-400">Vision:</span> Empower every organization with custom AI capabilities through our intuitive AI Studio, enabling them to harness both frontier and open-source language models for their unique challenges.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="bg-gray-800/60 p-4 rounded-lg">
                <h3 className="text-purple-400 font-semibold mb-2">Collaborative Workspace</h3>
                <p className="text-gray-300">Work with your team on AI projects, track progress, and share insights in a secure, collaborative environment.</p>
              </div>
              <div className="bg-gray-800/60 p-4 rounded-lg">
                <h3 className="text-purple-400 font-semibold mb-2">Model Versatility</h3>
                <p className="text-gray-300">Integrate both frontier and open-source language models, combining their strengths for your business needs.</p>
              </div>
              <div className="bg-gray-800/60 p-4 rounded-lg">
                <h3 className="text-purple-400 font-semibold mb-2">End-to-End Development</h3>
                <p className="text-gray-300">Monitor, debug, and optimize your AI applications with our comprehensive graphical interface for all skill levels.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all shadow-lg hover:shadow-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Contact langiq to start building"
              >
                Start Building Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
