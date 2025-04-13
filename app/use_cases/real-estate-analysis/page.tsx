import CaseStudyTemplate from '../case-study-template';

export default function RealEstateAnalysis() {
    return (
        <CaseStudyTemplate
            title="Real Estate Market Trend Analysis"
            description="Data-driven insights platform identifying emerging property trends and investment opportunities across different market segments and locations."
            challenge="A national real estate investment firm was struggling to identify emerging market opportunities before their competitors. Traditional analysis methods were too slow and relied heavily on lagging indicators, causing them to miss prime investment windows. Their analysts were overwhelmed by the volume of data from hundreds of markets nationwide."
            solution="We built a comprehensive real estate analytics platform using langiq's AI Studio that processes diverse data sources including property listings, sales histories, permit applications, social media sentiment, demographic shifts, and economic indicators. The system identifies early signals of neighborhood transformation, detects patterns that precede price movements, and quantifies risk factors across different property types and locations."
            results={[
                "Identified emerging market opportunities 7-9 months before industry consensus",
                "Increased ROI on new investments by 23.7%",
                "Reduced analysis time from weeks to hours for market assessments",
                "Enabled precise targeting of specific property categories with highest growth potential",
                "Created a sustainable competitive advantage through data-driven decisions"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Geospatial Analysis",
                "Multi-source Data Integration",
                "Trend Detection Algorithms",
                "Risk Assessment Modeling",
                "Interactive Visualization Dashboard"
            ]}
            testimonial={{
                quote: "This analytics platform has transformed our investment strategy. We're now able to identify opportunities months before our competitors and back our decisions with robust data. The ability to process so many different information sources simultaneously has given us insights that were previously impossible to attain.",
                author: "Jennifer Hayes",
                role: "Chief Investment Officer, National Property Investments"
            }}
        />
    );
}
