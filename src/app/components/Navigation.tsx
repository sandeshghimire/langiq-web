'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/ai_llm_advisory', label: 'AI LLM Advisory' },
        { href: '/llm_app_development', label: 'LLM App Development' },
        { href: '/model_training', label: 'Model Fine Tuning ' },
        { href: '/agentic_solution', label: 'Agentic Solution ' },
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
