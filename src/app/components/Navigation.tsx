'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/amd-xilinx-zynq', label: 'AMD Xilinx Zynq' },
        { href: '/nvidia-jetson', label: 'NVIDIA Jetson' },
        { href: '/nxp-imx', label: 'NXP IMX ' },
        { href: '/raspberry-pi', label: 'Raspberry Pi' },
    ];

    return (
        <nav className="bg-white   ">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-center space-x-8 py-4 font-bold">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-bold tracking-wide uppercase transition-colors ${pathname === item.href
                                ? 'text-black border-b-2 border-black pb-1'
                                : 'text-gray-600 hover:text-black'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
