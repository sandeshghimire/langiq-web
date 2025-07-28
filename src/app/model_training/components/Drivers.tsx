export default function Drivers() {
    return (
        <div id="drivers" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Advanced Training Techniques & Specializations</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                LangIQ provides cutting-edge training methodologies and specialized fine-tuning approaches tailored for diverse domain applications, from code generation to medical AI, ensuring optimal model performance and alignment with specific industry requirements.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Specialized Fine-Tuning Techniques:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Domain-Specific Code Models</strong> - Expert fine-tuning of Code Llama, StarCoder, and CodeT5 for programming language adaptation, code completion, debugging tasks, and repository-level context understanding with specialized tokenization</li>
                <li><strong>Medical & Scientific AI</strong> - Professional adaptation of BioBERT, ClinicalBERT, and PubMedBERT for medical text understanding, scientific paper analysis, regulatory compliance (HIPAA, FDA), and clinical decision support systems</li>
                <li><strong>Multilingual & Cross-Lingual Models</strong> - Advanced cross-lingual transfer learning, language-specific tokenizer adaptation, cultural bias mitigation, code-switching support, and multilingual reasoning optimization</li>
                <li><strong>Multi-Modal Fine-Tuning</strong> - Expert implementation of Vision-Language models (LLaVA, BLIP-2, InstructBLIP), Audio-Language models (Whisper variants), cross-modal alignment techniques, and multimodal instruction following</li>
                <li><strong>Continual Learning Strategies</strong> - Advanced catastrophic forgetting prevention using Elastic Weight Consolidation (EWC), progressive knowledge distillation, replay-based methods, and incremental learning architectures</li>
                <li><strong>Safety & Alignment Engineering</strong> - Professional Constitutional AI implementation, red-teaming and adversarial training, bias detection and mitigation, harmfulness reduction, and human preference learning integration</li>
                <li><strong>Reinforcement Learning Integration</strong> - Expert RLHF implementation, DPO (Direct Preference Optimization), value learning from demonstrations, interpretability methods, and robustness to distribution shifts</li>
            </ul>
        </div>
    );
}
