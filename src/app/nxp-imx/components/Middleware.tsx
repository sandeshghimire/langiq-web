export default function Middleware() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Middleware Solutions</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops tailored DDS middleware solutions optimized for NXP i.MX platforms, leveraging multi-core ARM Cortex-A processors and advanced security features for high-performance embedded applications requiring deterministic real-time communication.
            </p>
            <ul className="text-gray-700 space-y-2 ml-4">
                <li><strong>i.MX SoC Optimization</strong>: Eclipse Cyclone DDS with custom i.MX drivers, eProsima Fast DDS optimized for ARM Cortex-A cores, RTI Connext DDS Micro with GPU acceleration support</li>
                <li><strong>Real-Time Determinism</strong>: OpenDDS configured for zero-copy transport, DDS-XRCE for ultra-low latency, custom SOME/IP implementation with hardware timestamping</li>
                <li><strong>Hardware Acceleration</strong>: VPU-accelerated DDS video streaming, GPU-based packet filtering, CAAM-secured DDS communications with hardware encryption</li>
                <li><strong>ARM Cortex-A Integration</strong>: Yocto-based Linux with RT patches running Fast DDS, FreeRTOS with micro-ROS on Cortex-M cores, multi-core load balancing with OpenAMP</li>
                <li><strong>Industrial IoT Applications</strong>: OPC UA over DDS for factory networks, EtherCAT master with DDS bridge, Modbus-to-DDS protocol converters with TSN support</li>
                <li><strong>Edge Computing Enhancement</strong>: Apache Kafka Streams on i.MX clusters, Redis pub/sub with DDS interoperability, custom mesh networking with ZeroMQ transport and TrustZone security</li>
            </ul>
        </div>
    );
}
