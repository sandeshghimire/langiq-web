export default function Home() {
  return (
    <div>

      {/* Professional Summary */}
      <div className="p-8 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">About LangIQ</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>At LangIQ, we provide comprehensive consulting and development services in AI and Large Language Models, delivering complete turnkey solutions encompassing strategic advisory, custom LLM application development, model training, and agentic systems. With deep expertise in modern AI technologies and enterprise-grade implementations, our team specializes in transforming organizations through intelligent automation, advanced AI workflows, and cutting-edge language model solutions across diverse industries and use cases.</strong>
        </p>

        <h3 className="text-lg font-semibold text-black mb-3 uppercase tracking-wide">Our Core Services:</h3>
        <ul className="text-gray-700 space-y-2 ml-4 mb-6">
          <li><strong><a href="/ai_llm_advisory" className="text-blue-600 hover:text-blue-800 underline">AI LLM Advisory:</a></strong> We provide strategic guidance and advisory services for executive teams navigating LLM adoption and integration. Our advisory approach combines deep technical expertise with strategic business insight to help leadership teams make informed decisions about LLM investments, implementation strategies, market intelligence, and performance optimization that drive innovation and competitive differentiation.</li>

          <li><strong><a href="/llm_app_development" className="text-blue-600 hover:text-blue-800 underline">LLM App Development:</a></strong> We develop production-ready LLM applications using cutting-edge technologies including Python, JavaScript/TypeScript, React, and FastAPI. Our expertise spans RAG (Retrieval Augmented Generation) systems, vector databases (Pinecone, Weaviate, Chroma), agent frameworks (LangChain, LangGraph, AutoGen), and cloud infrastructure (AWS, Azure) to deliver scalable, high-performance AI solutions.</li>

          <li><strong><a href="/model_training" className="text-blue-600 hover:text-blue-800 underline">Model Training & Fine-tuning:</a></strong> We specialize in custom model development, fine-tuning, and optimization using advanced techniques including instruction tuning, RLHF (Reinforcement Learning from Human Feedback), parameter-efficient tuning (LoRA, PEFT), and distributed training workflows. Our expertise includes model evaluation, bias mitigation, inference optimization, and deployment across various architectures and frameworks.</li>

          <li><strong><a href="/agentic_solution" className="text-blue-600 hover:text-blue-800 underline">Agentic Solutions:</a></strong> We design and implement sophisticated multi-agent systems and autonomous AI workflows that can perform complex tasks, make decisions, and interact with various tools and APIs. Our agentic solutions leverage advanced orchestration frameworks, tool-use capabilities, and intelligent reasoning to create AI systems that can operate independently while maintaining human oversight and control.</li>
        </ul>

        <h3 className="text-lg font-semibold text-black mb-3 uppercase tracking-wide">Technologies & Frameworks We Use:</h3>
        <div className="text-gray-700 mb-6">
          <p className="mb-3"><strong>Programming & Development:</strong> Python, JavaScript/TypeScript, Node.js, React, FastAPI, Flask, PyTorch, TensorFlow, HuggingFace</p>
          <p className="mb-3"><strong>LLM & AI Technologies:</strong> OpenAI GPT, Anthropic Claude, Cohere, Prompt Engineering, RAG Systems, Vector Databases, Semantic Search</p>
          <p className="mb-3"><strong>Agent & Orchestration:</strong> LangChain, LangGraph, AutoGen, Multi-agent Systems, Tool-use/Function-calling, Chain-of-thought</p>
          <p className="mb-3"><strong>Cloud & Infrastructure:</strong> AWS (SageMaker, Bedrock, Lambda, EC2, S3), Azure, Docker, Kubernetes, Serverless Architectures</p>
          <p className="mb-3"><strong>Data & Search:</strong> Vector Databases (Pinecone, Weaviate, Chroma, FAISS, Qdrant), OpenSearch, Elasticsearch, PostgreSQL</p>
        </div>

        <h3 className="text-lg font-semibold text-black mb-3 uppercase tracking-wide">Industries We Serve:</h3>
        <ul className="text-gray-700 space-y-2 ml-4">
          <li><strong>Healthcare & Medical:</strong> HIPAA-compliant AI solutions, medical device integration, clinical decision support systems, patient data analysis, and healthcare automation with strict privacy and security requirements.</li>
          <li><strong>Financial Services:</strong> Regulatory-compliant AI applications, fraud detection, risk assessment, automated trading systems, and financial document processing with enterprise-grade security.</li>
          <li><strong>Enterprise & Business:</strong> Intelligent automation, document processing, customer service automation, knowledge management systems, and workflow optimization for improved operational efficiency.</li>
          <li><strong>Technology & SaaS:</strong> AI-powered product features, intelligent APIs, automated content generation, user experience enhancement, and scalable AI infrastructure integration.</li>
          <li><strong>Research & Academia:</strong> Custom AI research tools, data analysis automation, academic writing assistance, research paper processing, and specialized domain-specific AI applications.</li>
          <li><strong>Government & Defense:</strong> Secure AI systems, threat intelligence, automated analysis, compliance monitoring, and mission-critical AI applications with advanced security requirements.</li>
        </ul>
      </div>
    </div>
  );
}


