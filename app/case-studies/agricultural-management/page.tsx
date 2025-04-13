import CaseStudyTemplate from '../case-study-template';

export default function AgriculturalManagement() {
    return (
        <CaseStudyTemplate
            title="Smart Agricultural Irrigation Management"
            description="Precision farming solution using weather data and soil sensors to deliver optimal irrigation schedules, conserving water while maximizing yields."
            challenge="A large agricultural operation was facing challenges balancing water conservation requirements with optimal crop yields. Their traditional irrigation approach led to either water waste during wet periods or yield reductions during dry spells. With water costs increasing and regulatory pressures mounting, they needed a more precise approach to water management across diverse field conditions."
            solution="We developed an intelligent irrigation management system using langiq's AI Studio that integrates data from soil moisture sensors, weather forecasts, satellite imagery, and crop-specific growth models. The system creates dynamic irrigation schedules tailored to specific field zones, predicts water needs based on crop development stages, adjusts for weather events before they occur, and optimizes water distribution for uniform crop development while minimizing runoff and evaporation losses."
            results={[
                "Reduced water consumption by 37% while maintaining or improving yields",
                "Decreased energy costs for pumping by 28%",
                "Improved crop quality and uniformity across fields",
                "Minimized fertilizer runoff through precise water management",
                "Achieved compliance with water conservation regulations",
                "Generated annual savings of $425,000 in water and energy costs"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "IoT Sensor Integration",
                "Weather Prediction",
                "Satellite Image Analysis",
                "Hydrological Modeling",
                "Precision Control Systems"
            ]}
            testimonial={{
                quote: "The irrigation management system has transformed our approach to farming. We're using significantly less water while actually improving our crop yields and quality. The system's ability to adapt to changing conditions and predict weather impacts has given us a level of precision we never thought possible. It's good for our business and good for the environment.",
                author: "Carlos Rodriguez",
                role: "Operations Director, Valley Agricultural Enterprises"
            }}
        />
    );
}
