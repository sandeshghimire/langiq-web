import CaseStudyTemplate from '../case-study-template';

export default function PredictiveMaintenance() {
    return (
        <CaseStudyTemplate
            title="Predictive Maintenance in Industrial Manufacturing"
            description="IoT-enabled system that predicts equipment failures before they occur, minimizing downtime and extending machinery lifespan."
            challenge="A large manufacturing company was experiencing significant production losses due to unexpected equipment failures. Their reactive maintenance approach was causing an average of 200+ hours of unplanned downtime annually per production line, costing millions in lost production and emergency repair fees. Traditional scheduled maintenance wasn't addressing the unpredictable nature of equipment degradation."
            solution="We developed a comprehensive predictive maintenance system using langiq's AI Studio that integrates with the factory's IoT sensor network. The solution continuously monitors vibration patterns, temperature fluctuations, power consumption, and acoustic signatures across hundreds of machines and components. It identifies subtle anomalies that indicate potential failures days or weeks before they would be detectable by human operators. The system prioritizes maintenance needs, predicts optimal repair timing, and generates detailed diagnostic guides for technicians."
            results={[
                "Reduced unplanned downtime by 89%",
                "Extended average machine lifespan by 4.2 years",
                "Decreased maintenance costs by 37%",
                "Improved overall equipment effectiveness (OEE) by 23%",
                "Optimized spare parts inventory with 42% reduction in carrying costs",
                "Achieved ROI within 7 months of implementation"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "IoT Sensor Integration",
                "Anomaly Detection Algorithms",
                "Remaining Useful Life Prediction",
                "Digital Twin Modeling",
                "Maintenance Workflow Optimization"
            ]}
            testimonial={{
                quote: "The predictive maintenance system has completely transformed our manufacturing operations. We've gone from reactive firefighting to truly predictive maintenance, where we can plan repairs during scheduled downtime and prevent catastrophic failures. Our maintenance team now works proactively with production scheduling rather than interrupting it, creating harmony between departments that once conflicted.",
                author: "James Wilson",
                role: "Director of Manufacturing Operations, Global Industrial Corp"
            }}
        />
    );
}
