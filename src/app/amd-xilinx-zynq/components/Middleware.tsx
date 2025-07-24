export default function Middleware() {
    return (
        <div id="middleware" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Middleware Solutions</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops tailored middleware solutions optimized for AMD Xilinx Zynq platforms, leveraging dual-core ARM Cortex-A9 processors and integrated FPGA fabric for high-performance embedded applications requiring deterministic real-time communication.
            </p>
            <ul className="text-gray-700 space-y-2 ml-4">
                <li><strong>DDS (Data Distribution Service)</strong>: Eclipse Cyclone DDS with custom Zynq drivers, eProsima Fast DDS optimized for ARM Cortex-A9, RTI Connext DDS Micro with FPGA acceleration hooks, OpenDDS configured for zero-copy transport</li>
                <li><strong>ROS (Robot Operating System)</strong>: ROS2 with Fast DDS backend on Yocto Linux, micro-ROS on bare-metal FreeRTOS, dual-core load balancing with OpenAMP, hardware-accelerated ROS message filtering in FPGA</li>
                <li><strong>MQTT</strong>: Eclipse Mosquitto broker optimized for Zynq, hands-on with AWS IoT Core, Azure IoT Hub, or GCP IoT Core integration with hardware security, MQTT-SN for low-power sensors, custom MQTT-to-DDS bridge implementations</li>
                <li><strong>OPC UA</strong>: Open62541 stack with Zynq optimizations, OPC UA over DDS for factory networks, hardware-accelerated security protocols, real-time capable OPC UA server implementations</li>
                <li><strong>Industrial Protocols</strong>: EtherCAT master with DDS bridge, Modbus-to-DDS protocol converters, SOME/IP implementation with hardware timestamping, CAN-FD gateway solutions</li>
                <li><strong>Edge Computing Frameworks</strong>: Apache Kafka Streams on Zynq clusters, Redis pub/sub with DDS interoperability, custom mesh networking with ZeroMQ transport, FPGA-accelerated stream processing</li>
            </ul>
        </div>
    );
}
