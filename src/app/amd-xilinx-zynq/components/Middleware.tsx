export default function Middleware() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Middleware Solutions</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops tailored DDS middleware solutions optimized for AMD Xilinx Zynq platforms, leveraging dual-core ARM Cortex-A9 processors and integrated FPGA fabric for high-performance embedded applications requiring deterministic real-time communication.
            </p>
            <ul className="text-gray-700 space-y-2 ml-4">
                <li><strong>Zynq SoC Optimization</strong>: Eclipse Cyclone DDS with custom Zynq drivers, eProsima Fast DDS optimized for ARM Cortex-A9, RTI Connext DDS Micro with FPGA acceleration hooks</li>
                <li><strong>Real-Time Determinism</strong>: OpenDDS configured for zero-copy transport, DDS-XRCE for ultra-low latency, custom SOME/IP implementation with hardware timestamping</li>
                <li><strong>FPGA Hardware Acceleration</strong>: Hardware-accelerated DDS packet filters in Vivado, custom UDP/IP stack in programmable logic, FPGA-based QoS enforcement engines</li>
                <li><strong>ARM Cortex-A9 Integration</strong>: Yocto-based Linux with RT patches running Fast DDS, bare-metal FreeRTOS with micro-ROS, dual-core load balancing with OpenAMP</li>
                <li><strong>Industrial IoT Applications</strong>: OPC UA over DDS for factory networks, EtherCAT master with DDS bridge, Modbus-to-DDS protocol converters</li>
                <li><strong>Edge Computing Enhancement</strong>: Apache Kafka Streams on Zynq clusters, Redis pub/sub with DDS interoperability, custom mesh networking with ZeroMQ transport</li>
            </ul>
        </div>
    );
}
