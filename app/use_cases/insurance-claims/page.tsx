import CaseStudyTemplate from '../case-study-template';

export default function InsuranceClaims() {
  return (
    <CaseStudyTemplate
      title="Automated Insurance Claim Assessment"
      description="Intelligent processing system that evaluates insurance claims for accuracy, fraud detection, and expedited resolution for better customer experiences."
      challenge="A major insurance provider was experiencing processing backlogs of over 3 weeks for standard claims, leading to customer dissatisfaction and high operational costs. Their manual review process was inconsistent across different offices, vulnerable to both fraudulent claims and legitimate claim denials. Customer service ratings were declining as policyholders waited for resolution."
      solution="We implemented an automated claims processing system using langiq's AI Studio that analyzes submitted claims, supporting documentation, policy details, and historical data. The system categorizes claims by complexity and risk, automatically approves straightforward claims, flags potential fraud indicators, and provides adjusters with detailed analysis for complex cases. It extracts key information from unstructured documents and images, compares claims against similar historical cases, and recommends settlement amounts."
      results={[
        "Reduced average claim processing time from 23 days to 3 days",
        "Automatically adjudicated 67% of straightforward claims without human review",
        "Improved fraud detection by 41% while reducing false positives by 35%",
        "Increased consistency in claim settlements across all offices",
        "Boosted customer satisfaction ratings by 48%",
        "Reduced claims processing operational costs by 31%"
      ]}
      technologies={[
        "LangIQ AI Studio",
        "Document Processing",
        "Image Analysis",
        "Fraud Detection Algorithms",
        "Case-based Reasoning",
        "Process Automation"
      ]}
      testimonial={{
        quote: "The automated claims system has revolutionized our operations. Not only are we processing claims faster than ever, but we're also making better decisions with greater consistency. Our customers appreciate the quick resolutions, and our adjusters can focus their expertise on complex claims that truly need human judgment.",
        author: "Robert Mendez",
        role: "VP of Claims Operations, National Insurance Group"
      }}
    />
  );
}
