"use client";

import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
});

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
              LangIQ AI Hub
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
            Our Expertise
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { title: 'AI Studio', path: '/ai-studio', description: 'Collaborative graphical interface for AI application development with workspace sharing, performance monitoring, debugging capabilities, and progress tracking' },
              { title: 'Frontier LLM Integration', path: '/frontier-llm', description: 'Seamless integration with leading models from OpenAI, Google, Anthropic, DeepSeek, and XAI, optimized for your specific business challenges' },
              { title: 'Open-Source LLMs', path: '/open-source-llm', description: 'Access and deploy powerful open-source and open-weight models including Meta LLAMA, DeepSeek, Microsoft PI, Alibaba QWN, Gemma, and Phi' },
              { title: 'Retrieval-Augmented Generation', path: '/rag', description: 'Convert your data into vector databases with local and frontier embeddings, creating powerful knowledge bases tailored to your information' },
              { title: 'Model Augmentation', path: '/model-augmentation', description: 'Enhance model knowledge through state-of-the-art synthetic data generation based on your existing datasets' },
              { title: 'Fine Tuning', path: '/fine-tuning', description: 'Customize models for your specific requirements using Hugging Face transformer pipeline and advanced fine-tuning techniques' },
              { title: 'Agent Networks', path: '/agents', description: 'Deploy multiple specialized agents working in concert to solve complex business challenges and automate sophisticated workflows' },
              { title: 'Custom Solutions', path: '/custom-solutions', description: 'Personalize the AI Studio for your organization\'s unique needs, creating a bespoke environment for your team\'s AI development' },
            ].map((service, index) => (
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
