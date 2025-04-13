import CaseStudyTemplate from '../case-study-template';

export default function EducationContent() {
    return (
        <CaseStudyTemplate
            title="Personalized Educational Content Recommendation"
            description="Adaptive learning platform that delivers customized educational resources based on individual learning styles, progress, and goals."
            challenge="A major online education provider was experiencing low completion rates and student engagement despite having a vast library of high-quality content. Their one-size-fits-all approach to course materials wasn't addressing the diverse learning needs, styles, and knowledge gaps of their global student base. They needed a way to dynamically personalize the learning experience at scale."
            solution="We developed an adaptive learning platform using langiq's AI Studio that analyzes each student's learning style, pace, strengths, and weaknesses. The system continuously evaluates learner interactions, assessment results, and engagement patterns to create personalized learning pathways. It recommends content in formats that match individual learning preferences, automatically adjusts difficulty levels, and generates supplementary materials for concepts where students struggle."
            results={[
                "Increased course completion rates by 58%",
                "Improved student assessment scores by 32% on average",
                "Boosted student engagement metrics by 47%",
                "Reduced average time to skill mastery by 41%",
                "Increased student satisfaction ratings from 3.4/5 to 4.7/5",
                "Enabled data-driven curriculum improvements based on learning patterns"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Adaptive Learning Algorithms",
                "Content Recommendation Engine",
                "Learning Analytics",
                "Custom Content Generation",
                "Multi-modal Learning Assessment"
            ]}
            testimonial={{
                quote: "The personalization platform has completely transformed our educational offerings. Students are now receiving exactly what they need, when they need it, in the format that works best for them. We're seeing dramatic improvements in both learning outcomes and student satisfaction across all our courses.",
                author: "Dr. Emily Chang",
                role: "Chief Learning Officer, Global Education Platform"
            }}
        />
    );
}
