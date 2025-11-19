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
                    Soccentric delivers comprehensive testing and verification solutions for NVIDIA Jetson platforms, focusing on AI/ML workloads, computer vision applications, and edge computing validation. Our verification suite ensures optimal performance and reliability for Jetson-based systems.
                    <br /><br />
                    <a href="https://github.com/soccentric/jetson-test-suite" className="text-amber-600 hover:text-amber-700 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">View our GitHub repository</a> for the complete test and verification suite.
                </p>
            }
        >
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-6">Key Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CapabilityCard
                    title="AI model validation"
                    description="Specialized testing frameworks for validating deep learning models, neural network inference performance, and AI pipeline optimization on Jetson devices."
                />
                <CapabilityCard
                    title="Computer vision testing"
                    description="Comprehensive test suites for camera pipelines, image processing algorithms, object detection, and real-time video analytics applications."
                />
                <CapabilityCard
                    title="Performance profiling"
                    description="Advanced profiling tools for GPU utilization, memory bandwidth, power consumption, and thermal management in Jetson-based edge computing systems."
                />
                <CapabilityCard
                    title="Edge computing validation"
                    description="End-to-end validation of edge AI applications, including data preprocessing, model inference, and post-processing pipelines for real-world deployment."
                />
                <CapabilityCard
                    title="Integration testing"
                    description="Automated integration tests for Jetson modules with sensors, actuators, and external systems, ensuring seamless operation in production environments."
                />
            </div>
        </Section>
    );
}