export default function Hardware() {
    return (
        <div id="hardware" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">AI/ML Infrastructure & Frameworks</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                LangIQ delivers comprehensive AI/ML infrastructure solutions from local model deployment to cloud-native architectures, optimized for performance, security, and scalability across diverse computing environments.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Core AI/ML Frameworks:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Deep Learning Frameworks</strong> - Advanced proficiency in PyTorch, TensorFlow, and Hugging Face Transformers for model development, fine-tuning, and deployment across diverse AI applications.</li>
                <li><strong>LLM Deployment Platforms</strong> - Expert implementation using Ollama, vLLM, LM Studio, and llama.cpp for optimized local model inference and production-ready LLM hosting solutions.</li>
                <li><strong>Cloud AI Services</strong> - Comprehensive integration with AWS SageMaker, Azure OpenAI, GCP Vertex AI, and specialized services like AWS Bedrock for enterprise-scale AI deployment.</li>
                <li><strong>GPU Computing Architecture</strong> - Specialized expertise in CUDA programming, NVIDIA Triton Inference Server, and high-performance GPU clusters for accelerated model training and inference.</li>
                <li><strong>Containerized AI Environments</strong> - Production-ready deployment using Docker, Kubernetes, and specialized AI container orchestration for scalable, reliable AI service delivery.</li>
                <li><strong>Edge AI Solutions</strong> - Optimized model deployment for edge computing, including quantization, pruning, and specialized inference engines for resource-constrained environments.</li>
            </ul>
        </div>
    );
}
