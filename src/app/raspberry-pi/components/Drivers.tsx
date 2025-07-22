export default function Drivers() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Driver Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                We create robust, custom Linux drivers for diverse hardware components:
            </p>
            <ul className="text-gray-700 space-y-2 ml-4">
                <li>• <strong>Sensor Integration</strong>: IMU, camera, and display drivers</li>
                <li>• <strong>Motor Control Systems</strong>: Precision motor control and feedback systems</li>
                <li>• <strong>Peripheral Interfaces</strong>: USB, SPI, I2C, and custom communication protocols</li>
            </ul>
        </div>
    );
}
