import CaseStudyTemplate from '../case-study-template';

export default function LegalAnalysis() {
    return (
        <CaseStudyTemplate
            title="Legal Contract Review and Risk Analysis"
            description="AI-powered document analysis that identifies potential risks, inconsistencies, and opportunities in legal contracts, saving valuable time for legal teams."
            challenge="A corporate legal department was struggling to efficiently review and analyze thousands of contracts each month. The manual review process was time-consuming and prone to human error, often missing critical clauses or inconsistencies between documents. This created potential legal and financial risks for the company."
            solution="We developed a specialized contract analysis system using langiq's AI Studio that automatically processes, categorizes, and analyzes legal documents. The solution identifies key provisions, flags unusual terms, extracts critical dates and obligations, and compares new contracts against the company's standard templates. The system also highlights potential compliance issues and risks based on jurisdiction-specific regulations."
            results={[
                "Reduced contract review time by 73%",
                "Identified 31% more potential risk factors than manual review alone",
                "Standardized contract language across departments",
                "Created a searchable database of all contract provisions",
                "Enabled the legal team to focus on strategic work rather than routine reviews"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "NLP",
                "Document Analysis",
                "Pattern Recognition",
                "RAG",
                "Knowledge Graph"
            ]}
            testimonial={{
                quote: "This solution transformed how our legal department operates. We can analyze and understand complex contracts in a fraction of the time it used to take, with greater accuracy and consistency. Our attorneys can now focus on providing strategic counsel rather than spending hours reviewing standard agreements.",
                author: "David Thornton",
                role: "General Counsel, Global Manufacturing Corp"
            }}
        />
    );
}
