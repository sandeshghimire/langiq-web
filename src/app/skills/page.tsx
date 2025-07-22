export default function Skills() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-semibold text-black mb-8 uppercase tracking-wide">Technical Skills</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-medium text-black mb-3">Deep NLP Expertise</h3>
                    <div className="space-y-1">
                        {['Tokenization', 'Embeddings', 'Transformers', 'BERT/GPT Architectures', 'Attention Mechanisms'].map((skill) => (
                            <div key={skill} className="text-gray-700 text-sm font-normal">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-medium text-black mb-3">LLM Development</h3>
                    <div className="space-y-1">
                        {['LLAMA3', 'Model Training', 'Fine-tuning', 'RAG Systems', 'Scaling Architectures'].map((skill) => (
                            <div key={skill} className="text-gray-700 text-sm font-normal">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-medium text-black mb-3">Infrastructure & Scale</h3>
                    <div className="space-y-1">
                        {['Distributed Computing', 'Data Pipelines', 'Model Deployment', 'Performance Optimization', 'Large Dataset Handling'].map((skill) => (
                            <div key={skill} className="text-gray-700 text-sm font-normal">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-medium text-black mb-3">Leadership & Strategy</h3>
                    <div className="space-y-1">
                        {['AI Innovation', 'Technical Strategy', 'Cross-functional Teams', 'Product Development', 'Performance Metrics'].map((skill) => (
                            <div key={skill} className="text-gray-700 text-sm font-normal">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
