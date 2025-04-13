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
      <section className="py-20 relative overflow-hidden">
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
              className="font-handwritten text-6xl md:text-7xl lg:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
              variants={fadeIn}
            >
              framework for LLM Application
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-10"
              variants={fadeIn}
            >
              A universal framework for LLM application development, designed for organizations of all sizes to adopt AI and language model workflows. Our state-of-the-art AI Studio empowers you to build powerful applications with frontier and open-source language models, customized for your unique challenges.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeIn}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/ai-studio"
                  className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-purple-500/30 inline-block">
                  Explore AI Studio
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/about"
                  className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg text-white font-medium transition-colors inline-block">
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
            className="font-handwritten text-4xl md:text-5xl text-center mb-16 text-purple-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Case Studies
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how organizations are leveraging langiq's powerful framework to transform their AI capabilities and solve real-world challenges.
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
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
                    borderColor: "#a78bfa"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={service.path}
                    className="bg-gray-800 hover:bg-gray-750 p-6 rounded-xl transition-all border border-gray-700 block h-full"
                  >
                    <h3 className="font-handwritten text-2xl text-purple-400 mb-3">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
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
              <span className="font-semibold text-purple-400">Mission:</span> To democratize AI application development by providing organizations of all sizes with a universal framework that bridges the gap between powerful language models and practical business solutions.
            </motion.p>
            <motion.p
              className="text-xl text-gray-300 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span className="font-semibold text-purple-400">Vision:</span> To empower every organization with customized AI capabilities through our intuitive AI Studio, enabling them to harness both frontier and open-source language models for their unique challenges.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="bg-gray-800/60 p-4 rounded-lg">
                <h3 className="text-purple-400 font-semibold mb-2">Powerful Collaboration</h3>
                <p className="text-gray-300">Work together with colleagues on your AI projects, tracking progress and sharing insights through our collaborative workspace environment.</p>
              </div>
              <div className="bg-gray-800/60 p-4 rounded-lg">
                <h3 className="text-purple-400 font-semibold mb-2">Model Versatility</h3>
                <p className="text-gray-300">Seamlessly integrate both frontier and open-source language models, combining their strengths for your specific business requirements.</p>
              </div>
              <div className="bg-gray-800/60 p-4 rounded-lg">
                <h3 className="text-purple-400 font-semibold mb-2">End-to-End Development</h3>
                <p className="text-gray-300">Monitor, debug, and optimize your AI applications through our comprehensive graphical interface designed for developers of all skill levels.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/30"
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
