export default function Firmware() {
    return (
        <div id="firmware" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Firmware Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric delivers comprehensive firmware solutions for NXP i.MX9 M series processors, specializing in RTOS implementation, inter-processor communication, and real-time system development for mission-critical applications with heterogeneous multicore architectures.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Capabilities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>RTOS Implementation</strong> - Deploy and customize real-time operating systems including FreeRTOS, Zephyr, and ThreadX for deterministic task scheduling and resource management on Cortex-M7 and Cortex-M33 processors in i.MX9 M series.</li>
                <li><strong>OpenAMP Framework</strong> - Implement OpenAMP (Open Asymmetric Multi-Processing) framework for seamless communication between APU (Application Processing Unit) and RPU (Real-time Processing Unit) cores in NXP i.MX9 heterogeneous multicore systems.</li>
                <li><strong>Inter-Processor Communication</strong> - Design and develop efficient IPC mechanisms using shared memory, message queues, and remoteproc framework for coordinated processing between ARM Cortex-A55 and Cortex-M7/M33 cores.</li>
                <li><strong>Bare-Metal Development</strong> - Create optimized bare-metal firmware for real-time critical applications requiring minimal latency and deterministic response times on M7 and M33 processors.</li>
                <li><strong>Device Driver Development</strong> - Develop custom device drivers for peripheral interfaces including CAN-FD, FlexSPI, LPI2C, LPUART, and GPIO on i.MX9 M series platforms.</li>
                <li><strong>Real-Time Safety Systems</strong> - Implement safety-critical firmware compliant with ISO 26262 and IEC 61508 standards for automotive and industrial applications requiring functional safety on i.MX9 M series processors.</li>
            </ul>
        </div>
    );
}
