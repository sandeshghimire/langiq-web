import CaseStudyTemplate from '../case-study-template';

export default function EcommerceBot() {
    return (
        <CaseStudyTemplate
            title="E-commerce Customer Support Chatbot"
            description="Intelligent virtual assistants providing 24/7 customer support for online retailers, handling inquiries and personalized shopping recommendations."
            challenge="A rapidly growing e-commerce company was struggling to scale their customer support operations during peak shopping seasons. Customer satisfaction was declining due to long wait times, and hiring additional temporary staff led to inconsistent service quality and high training costs."
            solution="We developed a conversational AI assistant using langiq's platform that integrates with the retailer's product database, order management system, and customer profiles. The chatbot handles common inquiries like order tracking, returns, and product questions, while offering personalized product recommendations based on browsing history and preferences. Complex issues are seamlessly escalated to human agents with full conversation context."
            results={[
                "Successfully resolved 78% of customer inquiries without human intervention",
                "Reduced average response time from 15 minutes to under 30 seconds",
                "Increased customer satisfaction scores by 32%",
                "Generated 18% additional revenue through personalized recommendations",
                "Scaled to handle 5x normal volume during holiday shopping peaks"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Conversational AI",
                "Natural Language Processing",
                "Recommendation Engine",
                "Integration APIs",
                "Sentiment Analysis"
            ]}
            testimonial={{
                quote: "Our AI assistant has become our most valuable team member. It handles the routine questions that previously consumed our support team's time, allowing them to focus on complex customer needs. Even better, it's turned our support channel into a revenue generator through smart product suggestions.",
                author: "Alex Rivera",
                role: "Customer Experience Director, StyleMart"
            }}
        />
    );
}
