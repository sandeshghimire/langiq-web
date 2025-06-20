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
            className="flex flex-col bg-gray-900/50 rounded-lg overflow-hidden border border-gray-200/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105"
            variants={variants}
            whileHover={{ y: -5 }}
        >
            <Link href={`/case-studies/${mdx.slug}`} className="h-full">
                <div className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-white hover:text-blue-400 transition-colors">
                        {mdx.title || "Untitled Document"}
                    </h3>
                    {mdx.description && (
                        <p className="text-gray-300 text-sm mb-3 flex-grow">{mdx.description}</p>
                    )}
                    <div className="flex justify-between items-center text-xs text-gray-400 mt-4 pt-3 border-t border-gray-700/50">
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
                    <div className="mt-3 text-xs text-blue-400 font-medium">
                        Read more →
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
