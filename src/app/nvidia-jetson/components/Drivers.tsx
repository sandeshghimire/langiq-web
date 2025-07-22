export default function Drivers() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Driver Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Soccentric develops custom device drivers for NVIDIA Jetson platform peripherals using JetPack SDK integration. Driver development covers communication interfaces (SPI, I2C, UART, Ethernet), camera systems (MIPI CSI-2, USB3), AI accelerators (GPU, DLA, PVA), sensors (IMU, temperature, ADC), GPIO control, PCIe connectivity, and specialized hardware including AI inference engines and computer vision pipelines for edge AI applications.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key Driver Development Areas:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Communication Protocol Drivers</strong> - Custom SPI, I2C, UART, CAN, and Gigabit Ethernet drivers with interrupt handling and DMA support for high-performance data transfer</li>
                <li><strong>Camera & Vision Drivers</strong> - MIPI CSI-2, USB3 Vision, and GigE Vision camera drivers integrated with ISP pipeline and CUDA-accelerated image processing</li>
                <li><strong>AI Accelerator Drivers</strong> - GPU compute drivers, Deep Learning Accelerator (DLA) interfaces, and Programmable Vision Accelerator (PVA) drivers for optimized AI inference</li>
                <li><strong>GPIO & Pin Management</strong> - Jetson GPIO drivers supporting dynamic pin multiplexing, interrupt handling, and real-time control for robotics applications</li>
                <li><strong>High-Speed Interface Drivers</strong> - PCIe Gen4 drivers for NVMe storage, high-speed networking cards, and custom AI accelerator cards</li>
                <li><strong>System Monitor & Power Drivers</strong> - Tegra system monitoring drivers for temperature/power management, fan control, and thermal throttling with integration to Jetson power modes</li>
            </ul>
        </div>
    );
}
