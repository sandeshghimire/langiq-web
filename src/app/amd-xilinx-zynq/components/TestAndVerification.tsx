import Section from '../../components/Section';
import CapabilityCard from '../../components/CapabilityCard';
import { ShieldCheck } from 'lucide-react';

export default function TestAndVerification() {
    return (
        <Section
            id="test-and-verification"
            title="Test and Verification"
            icon={ShieldCheck}
            description={
                <p>
                    Soccentric provides comprehensive test and verification suites for AMD Xilinx Zynq platforms, ensuring robust validation of hardware and software integration. Our open-source verification framework covers functional testing, performance validation, and compliance checks for embedded systems.
                    <br /><br />
                    <a href="https://github.com/soccentric/zynq-test-suite" className="text-amber-600 hover:text-amber-700 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">View our GitHub repository</a> for the complete test and verification suite.
                </p>
            }
        >
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-6">Key Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CapabilityCard
                    title="Automated test suites"
                    description="Comprehensive automated testing frameworks for Zynq devices, including unit tests, integration tests, and system-level validation covering FPGA logic, ARM cores, and peripheral interfaces."
                />
                <CapabilityCard
                    title="Performance benchmarking"
                    description="Detailed performance analysis tools for measuring throughput, latency, power consumption, and thermal characteristics of Zynq-based systems under various operating conditions."
                />
                <CapabilityCard
                    title="Compliance validation"
                    description="Verification suites ensuring compliance with industry standards, safety requirements, and regulatory guidelines for automotive, aerospace, and medical applications."
                />
                <CapabilityCard
                    title="Hardware-in-the-loop testing"
                    description="Advanced HIL testing environments for validating real-time system behavior, sensor integration, and control algorithms in simulated operational scenarios."
                />
                <CapabilityCard
                    title="Continuous integration pipelines"
                    description="CI/CD pipelines for automated building, testing, and deployment of firmware and software components targeting Zynq platforms."
                />
            </div>
        </Section>
    );
}