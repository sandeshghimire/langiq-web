export default function Middleware() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Middleware Solutions</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops tailored DDS middleware solutions optimized for Raspberry Pi CM4/CM5 platforms, leveraging quad-core ARM Cortex-A72/A76 processors and VideoCore GPU acceleration for high-performance embedded applications requiring deterministic real-time communication and edge computing capabilities.
            </p>
            <ul className="text-gray-700 space-y-2 ml-4">
                <li><strong>CM4/CM5 SoM Optimization</strong>: Eclipse Cyclone DDS with ARM NEON optimizations, eProsima Fast DDS configured for Cortex-A72/A76, RTI Connext DDS Micro with GPU memory acceleration</li>
                <li><strong>Real-Time Edge Computing</strong>: OpenDDS with zero-copy shared memory transport, DDS-XRCE for IoT device integration, custom MQTT-DDS bridge with hardware timestamping</li>
                <li><strong>VideoCore GPU Integration</strong>: Hardware-accelerated video streaming over DDS, GPU-based data filtering and transformation, OpenMAX IL integration for multimedia applications</li>
                <li><strong>ARM Cortex-A72/A76 Utilization</strong>: Quad-core load balancing with DDS domains, real-time Linux patches for deterministic performance, container-based DDS deployments with Docker/Podman</li>
                <li><strong>Industrial IoT Connectivity</strong>: OPC UA over DDS for Industry 4.0 applications, Modbus TCP/RTU to DDS gateways, LoRaWAN integration with DDS data distribution</li>
                <li><strong>Edge AI Enhancement</strong>: TensorFlow Lite integration with DDS data pipelines, OpenCV GPU acceleration for computer vision, Apache Kafka Streams for real-time analytics</li>
            </ul>
        </div>
    );
}
