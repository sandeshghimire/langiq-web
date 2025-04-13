import CaseStudyTemplate from '../case-study-template';

export default function Cybersecurity() {
    return (
        <CaseStudyTemplate
            title="Cybersecurity Incident Detection and Response"
            description="Advanced threat detection system identifying potential security breaches and automating initial response protocols to minimize damage."
            challenge="A financial services organization was struggling to effectively monitor their expanding digital infrastructure for security threats. Their security operations center was overwhelmed with alerts, leading to alert fatigue and delayed responses to genuine threats. Traditional rule-based systems were generating too many false positives, while sophisticated attacks were evading detection. The shortage of experienced security analysts made scaling operations difficult."
            solution="We implemented an intelligent security monitoring system using langiq's AI Studio that continuously analyzes network traffic, log data, user behavior patterns, and external threat intelligence. The platform identifies subtle patterns indicating potential breaches, correlates events across different systems to detect coordinated attacks, prioritizes alerts based on risk assessment, and automates initial containment responses for common threat types. It also provides detailed investigation guidance for security analysts."
            results={[
                "Reduced average breach detection time from 107 hours to 4.3 hours",
                "Decreased false positive alerts by 84%",
                "Automated initial response actions for 67% of detected threats",
                "Improved analyst productivity by 3.2x through better alert prioritization",
                "Enhanced visibility across previously siloed security systems",
                "Prevented an estimated $3.7M in potential breach damages in the first year"
            ]}
            technologies={[
                "LangIQ AI Studio",
                "Behavioral Analytics",
                "Anomaly Detection",
                "Threat Intelligence Integration",
                "Automated Response Orchestration",
                "Risk Scoring Algorithms"
            ]}
            testimonial={{
                quote: "This system has transformed our security operations from reactive to proactive. We're detecting threats earlier, responding faster, and our analysts are now focusing on sophisticated investigations rather than drowning in alerts. The platform's ability to correlate events across our entire infrastructure has exposed attack patterns we would never have identified manually. It's like having an elite security team that never sleeps.",
                author: "Marcus Johnson",
                role: "Chief Information Security Officer, Global Financial Services"
            }}
        />
    );
}
