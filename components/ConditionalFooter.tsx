'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
    const pathname = usePathname();

    // Hide footer on home page to prevent conflicts with scroll snap behavior
    if (pathname === '/') {
        return null;
    }

    return <Footer />;
}
