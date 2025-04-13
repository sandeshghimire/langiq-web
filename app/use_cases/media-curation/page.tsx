import CaseStudyTemplate from '../case-study-template';

export default function MediaCuration() {
    return (
        <CaseStudyTemplate
            title="Media Content Curation and Personalization"
            description="Content recommendation engine that delivers personalized entertainment options based on user preferences, viewing history, and behavioral patterns."
            challenge="A streaming media company was facing increasing subscriber churn and declining engagement metrics despite their growing content library. Users were struggling to discover relevant content among thousands of options, leading to 'choice paralysis' and dissatisfaction. Generic recommendation categories weren't effectively matching specific user tastes, and their legacy recommendation system couldn't capture the nuanced preferences of diverse viewer segments."
            solution="We developed a sophisticated content personalization engine using langiq's AI Studio that creates a multidimensional understanding of both content and user preferences. The system analyzes viewing patterns, engagement signals, content metadata, and contextual factors to generate highly personalized recommendations. It identifies subtle content attributes that drive individual engagement, adapts to evolving preferences, creates personalized content collections, and optimizes the timing and presentation of recommendations based on user behavior patterns."
            results={[
                "Increased average weekly viewing time by 42%",
                "Reduced subscriber churn rate by 38%",
                "Improved content discovery metrics with 67% more unique titles watched per user",
                "Boosted engagement with catalog content by 73%, not just new releases",
                "Enhanced user satisfaction scores from 3.2/5 to 4.7/5",
                "Generated 28% increase in advertising revenue through improved targeting"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Content Analysis Algorithms",
                "Collaborative Filtering",
                "Contextual Recommendation Engine",
                "Engagement Prediction Models",
                "A/B Testing Framework"
            ]}
            testimonial={{
                quote: "The personalization engine has completely transformed our platform's user experience. Subscribers are discovering content they love but would never have found on their own. We're seeing dramatic improvements in engagement across our entire content library, not just with popular titles. The system's ability to understand the nuanced preferences of each viewer has given us a significant competitive advantage in customer retention.",
                author: "Sophia Williams",
                role: "VP of Product, Global Streaming Media"
            }}
        />
    );
}
