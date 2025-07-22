export default function Projects() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-semibold text-black mb-8 uppercase tracking-wide">Key Projects</h1>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium text-black">Legal Document Intelligence Platform</h3>
                    <p className="text-gray-700 mb-2 font-normal">
                        Custom RAG system for law firm enabling automated contract analysis, legal research, and document summarization reducing research time by 70%.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">GPT-4</span>
                        <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">LangChain</span>
                        <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">Pinecone</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-black">Healthcare AI Assistant</h3>
                    <p className="text-gray-700 mb-2 font-normal">
                        HIPAA-compliant conversational AI for patient intake, appointment scheduling, and medical record summarization serving 50K+ patients monthly.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">Azure OpenAI</span>
                        <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">Fine-tuning</span>
                        <span className="bg-gray-100 text-black px-2 py-1 text-xs font-normal border border-gray-300">FHIR Integration</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
