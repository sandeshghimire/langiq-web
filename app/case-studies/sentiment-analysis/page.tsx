import CaseStudyTemplate from '../case-study-template';

export default function SentimentAnalysis() {
    return (
        <CaseStudyTemplate
            title="Marketing Campaign Sentiment Analysis"
            description="Real-time monitoring of customer reactions to marketing initiatives across multiple channels, enabling rapid campaign optimization."
            challenge="A consumer brand was investing millions in multi-channel marketing campaigns without clear visibility into audience reactions until sales data came in weeks later. They couldn't identify which creative elements resonated with customers or detect negative sentiment early enough to make adjustments. Campaign optimization was largely guesswork based on limited focus group feedback."
            solution="We developed a comprehensive sentiment analysis platform using langiq's AI Studio that monitors and analyzes customer reactions across social media, review sites, customer service interactions, and direct feedback channels. The system identifies specific elements of campaigns that drive positive or negative reactions, tracks sentiment evolution over time, detects emerging issues before they become widespread, and provides actionable insights for real-time campaign adjustments."
            results={[
                "Enabled real-time campaign optimization, increasing ROI by 37%",
                "Identified problematic messaging within hours rather than weeks",
                "Improved ad creative performance through element-level sentiment analysis",
                "Reduced negative brand sentiment incidents by 64% through early detection",
                "Created a positive feedback loop between customer reactions and marketing strategy",
                "Generated detailed emotional response profiles for different customer segments"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Multi-channel Sentiment Analysis",
                "Emotion Detection",
                "Natural Language Processing",
                "Social Media Monitoring",
                "Real-time Analytics Dashboard"
            ]}
            testimonial={{
                quote: "The sentiment analysis platform has transformed our marketing approach. We now have immediate insight into how our campaigns are resonating emotionally with customers. Being able to adjust messaging in real-time has not only improved campaign effectiveness but also helped us avoid potential PR issues by catching negative reactions immediately.",
                author: "Lisa Montgomery",
                role: "Chief Marketing Officer, Consumer Goods Brand"
            }}
        />
    );
}
