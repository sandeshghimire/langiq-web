import { motion } from "framer-motion";
import Link from "next/link";
import { MDXMetadata } from "../utils/mdxUtils";

interface MDXCardProps {
    mdx: MDXMetadata;
    variants: any;
}

export default function MDXCard({ mdx, variants }: MDXCardProps) {
    return (
        <motion.div
            className="flex flex-col bg-gray-900/50 rounded-lg overflow-hidden border border-gray-200/20 hover:border-blue-500/50 transition-all duration-300"
            variants={variants}
        >
            <Link href={`/case-studies/${mdx.slug}`}>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                        {mdx.title || "Untitled Document"}
                    </h3>
                    {mdx.description && (
                        <p className="text-gray-300 text-sm mb-3">{mdx.description}</p>
                    )}
                    <div className="flex justify-between items-center text-xs text-gray-400 mt-4">
                        {mdx.date && (
                            <span>
                                {new Date(mdx.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </span>
                        )}
                        {mdx.author && <span>{mdx.author}</span>}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
