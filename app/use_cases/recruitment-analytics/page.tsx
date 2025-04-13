import CaseStudyTemplate from '../case-study-template';

export default function RecruitmentAnalytics() {
    return (
        <CaseStudyTemplate
            title="AI-Driven Recruitment and Talent Analytics"
            description="HR intelligence platform that improves hiring processes by matching candidate profiles with job requirements and predicting employment success."
            challenge="A rapidly growing technology company was struggling with their hiring process, facing high recruitment costs, lengthy time-to-fill metrics, and concerning turnover rates among new hires. Their HR team couldn't efficiently screen the volume of applications they received, and hiring managers lacked objective data to make consistent decisions. Unconscious bias was also affecting their diversity initiatives."
            solution="We created a comprehensive talent analytics platform using langiq's AI Studio that transforms the entire recruitment workflow. The system analyzes job descriptions to identify critical skills and attributes, screens resumes at scale while minimizing bias, evaluates candidate responses using natural language processing, and predicts job performance and retention likelihood based on validated success patterns. It provides hiring managers with objective comparison data while continuously learning from hiring outcomes."
            results={[
                "Reduced time-to-hire by 58% while improving quality of hires",
                "Decreased recruitment costs by 43% per successful placement",
                "Improved first-year retention rates by 34%",
                "Increased diversity in candidate pools and hiring outcomes",
                "Enhanced candidate experience through faster, more transparent processes",
                "Generated data-driven insights for long-term workforce planning"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Natural Language Processing",
                "Bias Reduction Algorithms",
                "Predictive Success Modeling",
                "Skill Semantic Analysis",
                "Candidate Matching Engine"
            ]}
            testimonial={{
                quote: "This platform has transformed how we approach talent acquisition. We're making better hiring decisions in less time, with measurably better outcomes. The system's ability to objectively evaluate skills and potential has helped us build more diverse teams while reducing turnover. It's now an essential part of our growth strategy.",
                author: "Priya Sharma",
                role: "Chief People Officer, TechInnovate Inc."
            }}
        />
    );
}
