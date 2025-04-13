import CaseStudyTemplate from '../case-study-template';

export default function SupplyChain() {
    return (
        <CaseStudyTemplate
            title="Dynamic Supply Chain Inventory Management"
            description="Predictive analytics system that optimizes inventory levels across complex supply chains, reducing costs while ensuring product availability."
            challenge="A global consumer goods manufacturer was struggling with inventory management across their international supply chain. They faced frequent stockouts of critical components alongside excess inventory of others, resulting in production delays, increased costs, and lost sales. Traditional inventory forecasting wasn't adapting to rapidly changing market conditions or accounting for global supply disruptions."
            solution="Using langiq's AI Studio, we built a dynamic inventory optimization system that integrates data from across the supply chain including historical sales, supplier reliability, transportation times, and external factors like weather events and global disruptions. The system continuously learns from new data to predict optimal inventory levels for thousands of SKUs across multiple warehouses, and automatically adjusts ordering patterns to minimize costs while maintaining high service levels."
            results={[
                "Reduced overall inventory holding costs by 24%",
                "Decreased stockout incidents by 67%",
                "Improved inventory turnover ratio by 31%",
                "Reduced safety stock requirements by adaptive forecasting",
                "Created early warning system for potential supply disruptions",
                "Achieved ROI within 4 months of implementation"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Predictive Analytics",
                "Time Series Forecasting",
                "Multi-agent System",
                "Real-time Data Processing",
                "Dashboard Visualization"
            ]}
            testimonial={{
                quote: "The system langiq built for us has transformed our inventory management approach. We're now able to anticipate issues before they happen and adapt quickly to changing conditions. The reduction in both stockouts and excess inventory has had a direct impact on our bottom line.",
                author: "Maria Rodriguez",
                role: "VP of Supply Chain Operations, Global Consumer Goods"
            }}
        />
    );
}
