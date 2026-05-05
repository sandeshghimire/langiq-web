"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
