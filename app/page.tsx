import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-gray-900"></div>
        <div className="grid-bg absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-handwritten text-6xl md:text-7xl lg:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Welcome to LangIQ
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Unlocking the future of AI language technologies for innovative enterprises
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prompt-engineering"
                className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-purple-500/30">
                Get Started
              </Link>
              <Link href="/about"
                className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg text-white font-medium transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-handwritten text-4xl md:text-5xl text-center mb-16 text-purple-400">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { title: 'Prompt Engineering', path: '/prompt-engineering', description: 'Master the art of effective prompt design' },
              { title: 'Retrieval-Augmented Generation', path: '/rag', description: 'Enhance AI responses with external knowledge' },
              { title: 'Tools and MCP', path: '/tools-mcp', description: 'Leverage powerful tools and methodologies' },
              { title: 'Model Augmentation', path: '/model-augmentation', description: 'Expand model capabilities beyond limits' },
              { title: 'Fine Tuning', path: '/fine-tuning', description: 'Customize models for your specific use cases' },
              { title: 'Agents', path: '/agents', description: 'Create autonomous AI agents for complex tasks' },
              { title: 'Application Development', path: '/app-dev', description: 'Build cutting-edge AI-powered applications' },
              { title: 'Consulting', path: '/consulting', description: 'Expert guidance for your AI transformation' },
            ].map((service, index) => (
              <Link
                href={service.path}
                key={index}
                className="bg-gray-800 hover:bg-gray-750 p-6 rounded-xl transition-all hover:shadow-lg hover:shadow-purple-900/20 border border-gray-700"
              >
                <h3 className="font-handwritten text-2xl text-purple-400 mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-violet-950">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-handwritten text-5xl mb-6 text-white">Ready to Transform Your AI Strategy?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join the leading organizations leveraging LangIQ to stay ahead in the AI revolution
          </p>
          <Link
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/30"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
