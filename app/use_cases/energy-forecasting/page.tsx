import CaseStudyTemplate from '../case-study-template';

export default function EnergyForecasting() {
    return (
        <CaseStudyTemplate
            title="Energy Grid Demand Forecasting and Optimization"
            description="Predictive modeling for utility companies to anticipate energy demand patterns and optimize resource allocation for greater efficiency."
            challenge="A regional utility company was facing increasing pressure to balance fluctuating energy demand with renewable energy integration. Their legacy forecasting systems couldn't accurately predict demand patterns affected by weather events, renewable energy variability, and changing consumer behaviors. This led to either costly overproduction or risky underproduction of power."
            solution="We implemented an advanced forecasting and optimization system using langiq's AI Studio that integrates data from multiple sources including weather forecasts, historical usage patterns, planned community events, and real-time consumption. The system uses ensemble machine learning models to predict demand across different time horizons—from 15 minutes ahead to seasonal forecasts—while accounting for the intermittent nature of renewable sources. It recommends optimal resource allocation strategies to balance reliability, cost, and environmental impact."
            results={[
                "Improved demand forecasting accuracy by 37%",
                "Reduced peak power generation costs by 23%",
                "Decreased carbon emissions by 18% through optimal renewable utilization",
                "Enabled 26% higher integration of variable renewable energy sources",
                "Minimized frequency regulation requirements by 15%",
                "Created savings of $4.2M annually in operational costs"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Time Series Analysis",
                "Multi-variable Forecasting",
                "Weather Data Integration",
                "Reinforcement Learning for Optimization",
                "Real-time Grid Analytics"
            ]}
            testimonial={{
                quote: "This forecasting system has fundamentally changed how we plan and allocate energy resources. The accuracy of the predictions, even during extreme weather events, has enabled us to confidently integrate more renewable energy while maintaining grid reliability. It's been transformative for both our operations and our sustainability goals.",
                author: "Thomas Rivera",
                role: "Director of Grid Operations, Regional Energy Utility"
            }}
        />
    );
}
