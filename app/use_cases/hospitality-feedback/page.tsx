import CaseStudyTemplate from '../case-study-template';

export default function HospitalityFeedback() {
    return (
        <CaseStudyTemplate
            title="Hospitality Guest Experience Feedback Analysis"
            description="Sentiment analysis platform processing guest feedback across multiple channels to identify improvement opportunities in hospitality services."
            challenge="A global hotel chain was struggling to effectively analyze and act upon the massive volume of guest feedback coming from surveys, review sites, social media, and direct communications. Their manual review process couldn't scale across hundreds of properties, feedback insights weren't reaching operational teams quickly enough, and they lacked a systematic way to identify patterns affecting guest satisfaction across their portfolio."
            solution="We implemented a comprehensive guest experience analytics platform using langiq's AI Studio that aggregates and analyzes feedback from all channels in real-time. The system identifies specific operational issues affecting satisfaction, detects emerging trends before they become widespread problems, pinpoints high-impact improvement opportunities at both property and chain levels, and creates actionable insights tailored for different operational teams. It also enables personalized recovery actions for dissatisfied guests."
            results={[
                "Improved overall guest satisfaction scores by 23%",
                "Reduced negative reviews by 37% through rapid issue identification and resolution",
                "Increased guest retention rate by 18% through personalized recovery initiatives",
                "Prioritized renovation investments based on impact on guest experience",
                "Identified and resolved systemic service issues across multiple properties",
                "Achieved positive ROI within 5 months through operational improvements"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Multi-channel Data Integration",
                "Sentiment Analysis",
                "Topic Modeling",
                "Trend Detection",
                "Operational Insight Generation"
            ]}
            testimonial={{
                quote: "The feedback analysis platform has transformed how we understand and improve the guest experience. We're now able to identify specific issues across hundreds of properties in real-time and take immediate action. The system's ability to detect emerging problems before they affect many guests has been particularly valuable. We're making smarter operational decisions and seeing the results in our guest satisfaction metrics and repeat bookings.",
                author: "Michael Sanchez",
                role: "Chief Guest Experience Officer, Global Hospitality Group"
            }}
        />
    );
}
