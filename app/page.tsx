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
              LangIQ AI Studio
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-10"
              variants={fadeIn}
            >
              A universal framework for LLM application development, designed for organizations of all sizes to build powerful AI solutions with frontier and open-source models
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
              { title: 'AI Studio', path: '/ai-studio', description: 'State-of-the-art graphical interface for building AI applications with collaborative workspaces, performance monitoring, and debugging capabilities' },
              { title: 'Prompt Engineering', path: '/prompt-engineering', description: 'Interface with frontier LLMs from OpenAI, Google, Anthropic, DeepSeek, XAI and optimize prompts for your specific use cases' },
              { title: 'Retrieval-Augmented Generation', path: '/rag', description: 'Convert your data into vector databases to work with local and frontier embeddings, creating powerful knowledge bases for your applications' },
              { title: 'Tools and MCP', path: '/tools-mcp', description: 'Comprehensive toolkit for integrating with open-source and open-weight LLMs such as Meta LLAMA, DeepSeek, Microsoft PI, and Alibaba QWN' },
              { title: 'Model Augmentation', path: '/model-augmentation', description: 'Enhance model knowledge by generating synthetic data based on your existing datasets, creating custom knowledge tailored to your needs' },
              { title: 'Fine Tuning', path: '/fine-tuning', description: 'State-of-the-art fine-tuning capabilities using Hugging Face transformer pipeline to customize models for your specific requirements' },
              { title: 'Agents', path: '/agents', description: 'Develop agentic solutions with multiple specialized agents working together to solve your unique business challenges and automate complex workflows' },
              { title: 'Application Development', path: '/app-dev', description: 'Universal framework for LLM application development designed for startups and organizations of all sizes to adopt AI, ML, and LLM workflows' },
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
              Create Your Own Custom AI Studio
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Customize LangIQ AI Studio for your unique needs. Graphically develop applications, collaborate with colleagues, access frontier and open-source models, convert your data into knowledge bases, and deploy agentic solutions—all from one unified platform.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
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
