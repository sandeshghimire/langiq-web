export default function Projects() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Proven Track Record</h2>

            <div className="mb-6">
                <h3 className="text-lg font-semibold text-black mb-2">Automotive Solutions</h3>
                <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• <strong>Advanced Driver Assistance Systems (ADAS)</strong>: Complete sensor fusion and decision-making platforms</li>
                    <li>• <strong>LiDAR Systems</strong>: High-performance point cloud processing and object detection</li>
                    <li>• <strong>Vehicle Information Systems</strong>: Integrated dashboard and telematics solutions</li>
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold text-black mb-2">Aerospace & Defense</h3>
                <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• <strong>Flight Control Systems</strong>: Real-time flight management and navigation solutions</li>
                    <li>• <strong>Mission-Critical Applications</strong>: High-reliability systems for defense applications</li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-black mb-2">Medical Technology</h3>
                <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• <strong>Ophthalmic Equipment</strong>: Advanced eye examination and diagnostic systems</li>
                    <li>• <strong>Renal Care Systems</strong>: Kidney dialysis and monitoring equipment</li>
                    <li>• <strong>FDA Compliance</strong>: Medical device software development following industry standards</li>
                </ul>
            </div>
        </div>
    );
}
