export default function Hardware() {
    return (
        <div id="hardware" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Advanced Training Infrastructure & GPU Optimization</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                LangIQ provides enterprise-grade training infrastructure optimized for large-scale LLM fine-tuning, featuring multi-GPU clusters, distributed training expertise, and cutting-edge hardware optimization for models ranging from 1B to 70B+ parameters.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Core Training Infrastructure:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Multi-GPU Training Platforms</strong> - Expert deployment on NVIDIA A100, H100, and V100 clusters with optimized NVLink configurations, supporting distributed training across 4-8 GPU single-node and multi-node setups for maximum training efficiency.</li>
                <li><strong>Distributed Training Frameworks</strong> - Advanced implementation of DeepSpeed ZeRO (1/2/3), FSDP (Fully Sharded Data Parallel), FairScale, and Megatron-LM for memory-efficient training of large language models with optimal resource utilization.</li>
                <li><strong>Cloud Training Infrastructure</strong> - Comprehensive deployment across AWS (SageMaker, P4/P5 instances), Google Cloud (Vertex AI, TPU v4/v5), Azure (ML Studio, NDv4), and Lambda Labs with specialized GPU cloud optimization.</li>
                <li><strong>Memory Optimization Techniques</strong> - Expert implementation of gradient checkpointing, mixed precision training (FP16/BF16), CPU offloading, and model sharding to maximize training efficiency on available hardware resources.</li>
                <li><strong>High-Performance Storage & Networking</strong> - Optimized data pipelines using NVMe storage, parallel file systems, InfiniBand networking, and efficient checkpointing strategies for large-scale model training operations.</li>
                <li><strong>Container Orchestration</strong> - Production-ready deployment using Kubernetes, Docker, Slurm job scheduling, and Ray Cluster for scalable, reliable distributed training environments.</li>
            </ul>
        </div>
    );
}
