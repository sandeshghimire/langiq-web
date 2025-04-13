import CaseStudyTemplate from '../case-study-template';

export default function MedicalDiagnostics() {
    return (
        <CaseStudyTemplate
            title="AI-Enhanced Medical Image Diagnostics"
            description="Advanced image processing algorithms that assist healthcare professionals in detecting anomalies and making more accurate diagnoses from medical imagery."
            challenge="A leading hospital network was dealing with increasing volumes of medical imagery that required expert analysis. Radiologists were overwhelmed, leading to delays in diagnosis and treatment. There was also concern about inconsistency in interpretations between different specialists and facilities."
            solution="We implemented an AI-assisted diagnostic system using langiq's AI Studio that processes X-rays, MRIs, and CT scans to identify potential anomalies. The system was trained on hundreds of thousands of images with verified diagnoses and fine-tuned with the hospital's own historical data. It highlights areas of concern for radiologists, providing a second opinion and risk assessment to support clinical decision-making."
            results={[
                "Reduced image analysis time by 43%",
                "Increased detection rate of early-stage anomalies by 28%",
                "Improved consistency of diagnoses across the hospital network",
                "Enhanced documentation and explainability of diagnostic decisions",
                "Radiologists reported higher job satisfaction by focusing on complex cases"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Computer Vision",
                "Medical Image Processing",
                "Multi-modal LLMs",
                "Fine-tuning",
                "Explainable AI"
            ]}
            testimonial={{
                quote: "This tool has become indispensable to our radiology department. It catches things we might miss during busy periods and gives us more confidence in our assessments. Most importantly, it helps us deliver better care to our patients.",
                author: "Dr. Michael Chen",
                role: "Chief of Radiology, Northeast Medical Center"
            }}
        />
    );
}
