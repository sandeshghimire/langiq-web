import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
    items: Array<{
        label: string;
        href?: string;
    }>;
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link
                href="/"
                className="flex items-center hover:text-gray-900 transition-colors"
            >
                <Home className="h-4 w-4" />
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-gray-900 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-900 font-medium">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
}
