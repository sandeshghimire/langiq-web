"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    /** Animate from below (default), left, or right */
    from?: "bottom" | "left" | "right";
}

function getInitial(from: "bottom" | "left" | "right") {
    if (from === "left") return { opacity: 0, x: -32, y: 0, filter: "blur(6px)" };
    if (from === "right") return { opacity: 0, x: 32, y: 0, filter: "blur(6px)" };
    return { opacity: 0, x: 0, y: 28, filter: "blur(6px)" };
}

export function Reveal({ children, className, delay = 0, from = "bottom" }: RevealProps) {
    return (
        <motion.div
            className={className}
            initial={getInitial(from)}
            whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{
                duration: 0.75,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

// ─── RevealGroup — staggered children ───────────────────────────────────────
const groupVariants = {
    hidden: {},
    show: (stagger: number) => ({
        transition: { staggerChildren: stagger },
    }),
};

const childVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] as const },
    },
};

interface RevealGroupProps {
    children: ReactNode;
    className?: string;
    stagger?: number;
    delay?: number;
}

export function RevealGroup({ children, className, stagger = 0.07, delay = 0 }: RevealGroupProps) {
    return (
        <motion.div
            className={className}
            custom={stagger}
            variants={groupVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}

export { childVariants as revealChildVariants };
