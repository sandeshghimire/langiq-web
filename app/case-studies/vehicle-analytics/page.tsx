import CaseStudyTemplate from '../case-study-template';

export default function VehicleAnalytics() {
    return (
        <CaseStudyTemplate
            title="Autonomous Vehicle Diagnostic Analytics"
            description="Integrated monitoring system for self-driving vehicles analyzing performance data to ensure safety standards and optimal operation."
            challenge="An autonomous vehicle manufacturer was struggling to effectively analyze the massive volumes of sensor data generated during testing and real-world operation. Their manual analysis processes couldn't scale to evaluate millions of driving scenarios, identify edge cases, or detect subtle patterns indicating potential safety concerns. Regulatory compliance required comprehensive performance validation across diverse conditions."
            solution="We developed an advanced autonomous vehicle analytics platform using langiq's AI Studio that processes and analyzes terabytes of multi-sensor data from test vehicles. The system automatically identifies unusual driving scenarios, detects potential safety issues before they cause incidents, evaluates decision-making performance across different environments and conditions, simulates variations of real-world scenarios to test edge cases, and continuously improves vehicle behavior through identified learning opportunities."
            results={[
                "Accelerated safety validation process by 87%",
                "Identified 342 previously undetected edge cases requiring attention",
                "Improved autonomous driving performance in complex environments by 31%",
                "Enhanced regulatory compliance reporting with comprehensive data analysis",
                "Reduced development iteration cycles from months to days",
                "Created a data advantage that improved model training effectiveness by 47%"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Multi-sensor Data Processing",
                "Computer Vision Analysis",
                "Scenario Classification",
                "Anomaly Detection",
                "Simulation Integration"
            ]}
            testimonial={{
                quote: "This analytics platform has become the backbone of our autonomous vehicle development program. The system's ability to process and derive insights from massive amounts of sensor data has accelerated our development timeline while significantly improving safety validation. We're identifying and addressing edge cases that would have taken years to discover through traditional methods.",
                author: "Dr. Alan Zhang",
                role: "Director of Autonomous Systems, Next Generation Vehicles"
            }}
        />
    );
}
