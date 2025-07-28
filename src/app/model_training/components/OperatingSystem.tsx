export default function OperatingSystem() {
    return (
        <div id="operating-system" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Core Fine-Tuning Frameworks & PEFT Technologies</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                LangIQ leverages cutting-edge parameter-efficient fine-tuning (PEFT) frameworks and advanced training libraries to deliver cost-effective, high-performance model adaptation solutions for enterprise applications.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Primary Fine-Tuning Frameworks:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Hugging Face Ecosystem</strong> - Advanced implementation of Transformers, PEFT library, TRL (Transformers Reinforcement Learning), and Datasets for comprehensive model fine-tuning workflows with custom implementations and optimizations</li>
                <li><strong>Specialized Training Platforms</strong> - Expert deployment of Axolotl for configuration-driven fine-tuning, Unsloth for 2-5x faster memory-efficient training, LLaMA-Factory for comprehensive LLaMA family optimization, and Lit-GPT for production-ready infrastructure</li>
                <li><strong>Parameter-Efficient Methods</strong> - Advanced implementation of LoRA (Low-Rank Adaptation), QLoRA with 4-bit precision, AdaLoRA adaptive rank allocation, IA3, Prefix Tuning, P-Tuning v2, and DoRA for memory-efficient fine-tuning</li>
                <li><strong>Reinforcement Learning Integration</strong> - Expert RLHF (Reinforcement Learning from Human Feedback), DPO (Direct Preference Optimization), ORPO, and Constitutional AI implementation for advanced model alignment and preference learning</li>
                <li><strong>Quantization & Optimization</strong> - Professional deployment of 4-bit/8-bit quantization using GPTQ, AWQ, bitsandbytes, and quantization-aware training for efficient model deployment and inference acceleration</li>
                <li><strong>Model Architecture Expertise</strong> - Deep understanding of Transformer architectures, LLaMA/Mistral/Qwen families, attention mechanisms (multi-head, grouped-query), position encodings (RoPE, ALiBi), and tokenization strategies</li>
                <li><strong>Distributed Training Libraries</strong> - Advanced implementation of DeepSpeed ZeRO stages, FSDP, FairScale, and custom distributed training solutions for large-scale model fine-tuning operations</li>
                <li><strong>Evaluation & Benchmarking</strong> - Comprehensive model evaluation using lm-evaluation-harness, MMLU, HellaSwag, HumanEval, and custom domain-specific benchmarks for performance validation</li>
            </ul>
        </div>
    );
}
