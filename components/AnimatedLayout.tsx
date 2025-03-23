'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedLayoutProps {
    children: ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.main
                className="min-h-screen"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.main>
        </AnimatePresence>
    );
}
