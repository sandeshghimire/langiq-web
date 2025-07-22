export default function OperatingSystem() {
    return (
        <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">Operating System Development</h2>
            <p className="text-gray-700 leading-relaxed font-normal mb-4">
                Our Linux expertise includes:
            </p>
            <ul className="text-gray-700 space-y-2 ml-4">
                <li>• <strong>Custom Linux OS Development</strong>: Yocto-based build environments tailored to your hardware</li>
                <li>• <strong>Kernel Optimization</strong>: Architecture-specific kernel tuning for maximum performance</li>
                <li>• <strong>Real-Time Systems</strong>: PREEMPT_RT implementation for time-critical applications</li>
            </ul>
        </div>
    );
}
