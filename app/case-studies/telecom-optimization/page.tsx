import CaseStudyTemplate from '../case-study-template';

export default function TelecomOptimization() {
    return (
        <CaseStudyTemplate
            title="Telecom Network Fault Detection and Optimization"
            description="Automated system that identifies network anomalies and performance issues, suggesting solutions to maintain service quality and reliability."
            challenge="A telecommunications provider was facing increasing customer complaints about service reliability while struggling to efficiently maintain their expanding network infrastructure. Their reactive maintenance approach meant service issues often impacted customers before being addressed. Manual monitoring couldn't effectively cover their complex network topology, and engineers were overwhelmed with false positives."
            solution="We implemented a comprehensive network intelligence system using langiq's AI Studio that continuously monitors data from thousands of network elements. The platform detects subtle patterns indicating developing issues, predicts potential failures before they affect service, recommends optimal configuration settings for performance improvement, and prioritizes maintenance activities based on customer impact predictions. It also identifies root causes of complex, intermittent issues that had previously eluded detection."
            results={[
                "Reduced network outages by 73% through preventative interventions",
                "Decreased mean time to repair by 62% with accurate fault diagnosis",
                "Improved overall network performance metrics by 28%",
                "Optimized bandwidth allocation during peak usage periods",
                "Reduced customer churn rate by 17% due to improved reliability",
                "Generated $3.8M annual savings in operational and maintenance costs"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Anomaly Detection",
                "Network Topology Analysis",
                "Predictive Maintenance Algorithms",
                "Root Cause Analysis",
                "Performance Optimization"
            ]}
            testimonial={{
                quote: "This system has revolutionized how we manage our network. We've gone from constantly fighting fires to preventing most issues before customers notice them. The ability to identify subtle patterns across thousands of network elements has helped us resolve long-standing issues that we couldn't previously diagnose. Our engineering team can now focus on strategic improvements rather than emergency repairs.",
                author: "Rajiv Patel",
                role: "Network Operations Director, Global Telecommunications"
            }}
        />
    );
}
