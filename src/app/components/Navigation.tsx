'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About me' },
        { href: '/amd-xilinx-zynq', label: 'AMD Xilinx Zynq' },
        { href: '/nvidia-jetson', label: 'NVIDIA Jetson' },
        { href: '/nxp-imx', label: 'NXP IMX' },
        { href: '/raspberry-pi', label: 'Raspberry Pi' },
    ];

    return (
        <nav className=" p-4 rounded-lg ">
            <div className="flex flex-wrap justify-center gap-6">
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
        </nav>
    );
};

export default Navigation;
