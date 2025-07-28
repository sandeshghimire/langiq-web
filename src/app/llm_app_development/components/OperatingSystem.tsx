export default function OperatingSystem() {
    return (
        <div id="operating-system" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">AI/ML Platform Engineering</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                LangIQ specializes in comprehensive AI/ML platform engineering across cloud and on-premises environments, focusing on scalable model deployment, MLOps automation, and enterprise-grade infrastructure. Our expertise spans containerized AI workloads, GPU cluster management, and secure, compliant AI platform architectures for mission-critical applications.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Core Platform Capabilities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Cloud AI Platform Architecture</strong> - Design and implement scalable AI platforms on AWS SageMaker, Azure ML, and GCP Vertex AI with auto-scaling, cost optimization, and multi-region deployment strategies</li>
                <li><strong>MLOps & CI/CD Pipeline Development</strong> - Automated model training, testing, and deployment pipelines using tools like MLflow, Kubeflow, and custom GitOps workflows for continuous AI model delivery</li>
                <li><strong>Container Orchestration for AI</strong> - Advanced Kubernetes deployment for AI workloads with GPU scheduling, model serving optimization, and resource management for high-throughput inference systems</li>
                <li><strong>GPU Cluster Management</strong> - CUDA-optimized computing environments, multi-GPU training orchestration, and distributed computing frameworks for large-scale model training and inference</li>
                <li><strong>Security & Compliance Frameworks</strong> - Zero-trust AI architectures, DoD RMF compliance, HIPAA-compliant data processing, secure API gateways, and audit-ready AI governance systems</li>
                <li><strong>Edge AI Deployment</strong> - Lightweight model deployment for edge computing, model quantization and optimization, offline-capable AI systems, and DDIL (Denied, Degraded, Intermittent, Limited) survivability</li>
                <li><strong>Monitoring & Observability</strong> - Comprehensive AI model monitoring, performance analytics, drift detection, and real-time alerting systems for production AI applications</li>
                <li><strong>Data Pipeline Architecture</strong> - High-performance data ingestion, real-time processing with Apache Kafka, vector database optimization, and ETL pipelines for large-scale AI training datasets</li>
            </ul>
        </div>
    );
}
