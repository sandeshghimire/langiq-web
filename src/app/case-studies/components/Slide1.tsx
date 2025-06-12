import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getMDXFiles } from "@/utils/mdxUtils";
import MDXCard from "@/components/MDXCard";
import type { MDXMetadata } from "@/utils/mdxUtils";

interface Slide1Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    scrollToSlide: (slideNumber: number) => void;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide1({ slideVariants, itemVariants, isActive, scrollToSlide, setRef }: Slide1Props) {
    const [mdxFiles, setMdxFiles] = useState<MDXMetadata[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMdxFiles() {
            try {
                const files = await getMDXFiles();
                setMdxFiles(files);
            } catch (error) {
                console.error('Failed to load MDX files:', error);
            } finally {
                setLoading(false);
            }
        }

        if (isActive) {
            loadMdxFiles();
        }
    }, [isActive]);

    return (
        <motion.div
            ref={setRef}
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-transparent backdrop-blur-sm px-4 md:px-12 relative border border-gray-200/20 overflow-y-auto py-12"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-center"
                variants={itemVariants}
            >
                Case Studies
            </motion.h1>
            <motion.p
                className="text-xl md:text-lg max-w-4xl text-center mb-12"
                variants={itemVariants}
            >
                Explore our collection of case studies and research papers.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mb-16"
                variants={itemVariants}
            >
                {loading ? (
                    <motion.div className="col-span-full flex justify-center" variants={itemVariants}>
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    </motion.div>
                ) : mdxFiles.length > 0 ? (
                    mdxFiles.map((mdx) => (
                        <MDXCard key={mdx.slug} mdx={mdx} variants={itemVariants} />
                    ))
                ) : (
                    <motion.p className="text-center col-span-full text-gray-400" variants={itemVariants}>
                        No case studies available at the moment.
                    </motion.p>
                )}
            </motion.div>

            {/* Bouncing down arrow */}
            <motion.div
                className="absolute bottom-10 cursor-pointer animate-bounce"
                onClick={() => scrollToSlide(2)}
                variants={itemVariants}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </motion.div>
        </motion.div>
    );
}
