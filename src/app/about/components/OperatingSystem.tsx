export default function OperatingSystem() {
    return (
        <div id="operating-system" className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Operating System Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                LangIQ specializes in embedded operating system development and customization across various platforms. We work with Linux-based systems, real-time operating systems (RTOS), and bare-metal applications, ensuring optimal performance, security, and reliability. Our expertise includes kernel development, device driver implementation, system integration, and middleware development for diverse embedded applications.
            </p>
            <h3 className="text-lg font-semibold text-black mb-3 mt-6">Key OS Development Activities:</h3>
            <ul className="text-gray-700 space-y-3 ml-4">
                <li><strong>Linux Kernel Development</strong> - Custom kernel configuration, driver development, and system optimization for specific hardware platforms.</li>
                <li><strong>Embedded Linux Distributions</strong> - Build system development using Yocto, Buildroot, and custom distributions for production deployment.</li>
                <li><strong>Real-Time Systems</strong> - RTOS implementation with FreeRTOS, Zephyr, and custom real-time kernels for time-critical applications.</li>
                <li><strong>Bootloader Development</strong> - U-Boot customization, secure boot implementation, and firmware update mechanisms.</li>
                <li><strong>System Integration</strong> - Hardware abstraction layers, board support packages, and platform-specific optimizations.</li>
                <li><strong>Security Hardening</strong> - Secure boot, trusted execution environments, and system security enhancements.</li>
            </ul>
        </div>
    );
}
