import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getMDXFiles } from "@/utils/mdxUtils";
import MDXCard from "@/components/MDXCard";
import type { MDXMetadata } from "@/utils/mdxUtils";

interface Slide4Props {
    slideVariants: any;
    itemVariants: any;
    isActive: boolean;
    scrollToSlide: (slideNumber: number) => void;
    setRef: (el: HTMLDivElement | null) => void;
}

export default function Slide4({ slideVariants, itemVariants, isActive, scrollToSlide, setRef }: Slide4Props) {
    const [mdxFiles, setMdxFiles] = useState<MDXMetadata[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMdxFiles() {
            try {
                const files = await getMDXFiles('case-studies-4');
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
            className="flex flex-col items-center justify-center h-screen w-full snap-start bg-transparent px-4 md:px-12 relative border border-gray-300 overflow-y-auto py-12"
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900"
                variants={itemVariants}
            >
                Case Studies - Financial Services
            </motion.h1>
            <motion.p
                className="text-xl md:text-lg max-w-7xl text-center mb-12 text-gray-700"
                variants={itemVariants}
            >
                Institutions that manage money and provide financial products, including banks like JPMorgan Chase, investment firms, insurance companies, credit unions, and newer fintech companies offering digital payment solutions.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mb-16 [&>*]:bg-transparent [&>*]:border-gray-200 [&>*]:shadow-sm hover:[&>*]:shadow-md [&>*]:transition-shadow [&>*]:text-gray-800 [&_*]:text-gray-800"
                variants={itemVariants}
            >
                {loading ? (
                    <motion.div className="col-span-full flex justify-center" variants={itemVariants}>
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
                    </motion.div>
                ) : mdxFiles.length > 0 ? (
                    mdxFiles.map((mdx) => (
                        <MDXCard key={mdx.slug} mdx={mdx} variants={itemVariants} />
                    ))
                ) : (
                    <motion.p className="text-center col-span-full text-gray-500" variants={itemVariants}>
                        No case studies available at the moment.
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    );
}
