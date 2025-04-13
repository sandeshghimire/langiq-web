import CaseStudyTemplate from '../case-study-template';

export default function TravelItinerary() {
    return (
        <CaseStudyTemplate
            title="Personalized Travel Itinerary Generation"
            description="AI-powered travel planning assistant creating customized trip itineraries based on user preferences, budget constraints, and real-time availability."
            challenge="A leading online travel agency was losing customers to competitors offering more personalized experiences. Their standard package tours didn't meet the growing demand for tailored travel experiences, while creating custom itineraries manually was too labor-intensive and slow. Customers were overwhelmed by too many choices without sufficient guidance for their specific interests."
            solution="We created an intelligent travel planning assistant using langiq's AI Studio that generates fully personalized itineraries based on travelers' interests, preferences, previous trips, budget constraints, and seasonality factors. The system curates destination recommendations, suggests logical day-by-day activities accounting for geographic proximity and opening hours, identifies unique experiences matching user interests, adjusts recommendations based on real-time availability and weather forecasts, and learns from customer feedback to improve future suggestions."
            results={[
                "Increased conversion rate from browsing to booking by 47%",
                "Boosted average order value by 32% through personalized experience suggestions",
                "Improved customer satisfaction scores to 4.8/5 from 3.6/5",
                "Reduced itinerary planning time from hours to minutes",
                "Decreased booking abandonment rate by 39%",
                "Generated 28% increase in repeat customer bookings"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Recommendation Engine",
                "Natural Language Processing",
                "Real-time Availability Integration",
                "Geographic Optimization",
                "Preference Learning Algorithms"
            ]}
            testimonial={{
                quote: "This planning assistant has completely transformed our business model. Our customers are thrilled with the personalized itineraries that perfectly match their interests and preferences. We're seeing significant growth in both customer satisfaction and revenue per booking. The system's ability to create complex, multi-stop itineraries in seconds has given us a major competitive advantage in the market.",
                author: "Emma Lawson",
                role: "Chief Digital Officer, Global Adventures Travel"
            }}
        />
    );
}
