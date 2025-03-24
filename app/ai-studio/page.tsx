import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
});

export default function Home() {
  return (
    <div className={`min-h-screen ${montserrat.className}`}>
      {/* Hero section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-gray-900"></div>
        <div className="grid-bg absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-handwritten text-6xl md:text-7xl lg:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              AI Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              A powerful environment for designing, testing, and deploying advanced AI solutions with intuitive tools for prompt engineering, model fine-tuning, and application development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-studio/playground"
                className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-purple-500/30">
                Open Studio
              </Link>
              <Link href="/ai-studio/docs"
                className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg text-white font-medium transition-colors">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Studio Hero Image section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/msty-hero-image-light.webp"
              alt="AI Studio Visualization"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-handwritten text-4xl md:text-5xl text-center mb-16 text-purple-400">Studio Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { title: 'Prompt Playground', description: 'Interactive environment for crafting, testing, and refining prompts with real-time feedback and version control' },
              { title: 'Model Integration', description: 'Seamless connections to leading AI models including OpenAI, Anthropic, Cohere, and custom models with unified interface' },
              { title: 'Visual Prompt Builder', description: 'Drag-and-drop interface for creating complex prompt chains and workflows without writing code' },
              { title: 'Data Visualization', description: 'Rich visualizations of model outputs, performance metrics, and response patterns for deeper insights' },
              { title: 'Collaboration', description: 'Team workspaces with shared projects, commenting, and version history for effective team coordination' },
              { title: 'Testing & Evaluation', description: 'Automated testing suite for prompt robustness, model performance, and output quality assurance' },
              { title: 'Deployment Pipeline', description: 'One-click deployment to production environments with monitoring, scaling, and rollback capabilities' },
              { title: 'Templates Library', description: 'Pre-built templates for common AI use cases including chatbots, content generation, and data analysis' },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-750 p-6 rounded-xl transition-all hover:shadow-lg hover:shadow-purple-900/20 border border-gray-700"
              >
                <h3 className="font-handwritten text-2xl text-purple-400 mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-violet-950">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-handwritten text-5xl mb-6 text-white">Ready to Elevate Your AI Projects?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of AI developers who have accelerated their workflow and improved output quality with our comprehensive studio tools. From ideation to deployment, AI Studio provides everything you need in one place.
          </p>
          <Link
            href="/ai-studio/signup"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/30"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
