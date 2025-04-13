import CaseStudyTemplate from '../case-study-template';

export default function RegulatoryReporting() {
    return (
        <CaseStudyTemplate
            title="Automated Regulatory Reporting in Banking"
            description="AI-powered solution that streamlines compliance processes for financial institutions, reducing manual work and ensuring accurate regulatory reporting."
            challenge="A multinational bank was struggling with their regulatory reporting processes, which required thousands of staff hours each month. Manual data collection and processing led to errors, delays, and compliance risks. The complexity of regulations across multiple jurisdictions made consistent reporting difficult."
            solution="Using langiq's AI Studio, we developed a custom solution that automated the bank's regulatory reporting workflow. The system integrates with their existing databases, uses machine learning to extract and validate required data, and generates compliant reports across multiple regulatory frameworks. Our RAG capabilities ensure the system stays current with changing regulations."
            results={[
                "Reduced report generation time by 85%",
                "Decreased compliance-related errors by 92%",
                "Saved approximately 3,500 staff hours per month",
                "Improved audit trails and documentation",
                "Enhanced ability to adapt to new regulatory requirements"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "NLP",
                "RAG",
                "Document Processing",
                "Fine-tuned LLMs",
                "Custom Data Connectors"
            ]}
            testimonial={{
                quote: "This solution transformed our compliance operations. What used to take a team of 20 people several weeks now happens automatically with greater accuracy. We can now focus on analyzing results rather than just generating them.",
                author: "Sarah Johnson",
                role: "Chief Compliance Officer, Global Financial Services"
            }}
        />
    );
}
