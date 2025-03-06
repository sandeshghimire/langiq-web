import { motion } from 'framer-motion';
import Link from 'next/link';
import { Application } from '@/lib/applications';

interface ApplicationCardProps {
    application: Application;
    index: number;
    isCompact?: boolean;
}

const difficultyIcons = {
    'Beginner': '🔰',
    'Intermediate': '🔄',
    'Advanced': '⭐'
};

export default function ApplicationCard({ application, index, isCompact = false }: ApplicationCardProps) {
    // Make sure keywords is always an array
    const keywords = Array.isArray(application.keywords) ? application.keywords :
        typeof application.keywords === 'string' ? application.keywords.split(',').map(k => k.trim()) : [];

    return (
        <motion.div
            key={application.slug}
            className="content-box p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="flex items-center justify-between mb-3">
                <div className="text-2xl" title={application.difficulty}>
                    {difficultyIcons[application.difficulty] || '📄'}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${application.difficulty === 'Beginner' ? 'bg-green-700/50 text-green-300' :
                    application.difficulty === 'Intermediate' ? 'bg-yellow-700/50 text-yellow-300' :
                        'bg-red-700/50 text-red-300'
                    }`}>
                    {application.difficulty}
                </span>
            </div>

            <h2 className="text-xl font-semibold mb-2 handwriting">{application.title}</h2>
            <p className="handwriting-alt mb-4 text-gray-300 line-clamp-3">
                {application.description}
            </p>

            {!isCompact && keywords && keywords.length > 0 && (
                <div className="mb-4">
                    <h3 className="text-sm font-medium mb-2 text-blue-400 handwriting">Keywords:</h3>
                    <div className="flex flex-wrap gap-2">
                        {keywords.slice(0, 3).map(keyword => (
                            <span key={keyword} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                                {keyword}
                            </span>
                        ))}
                        {keywords.length > 3 && (
                            <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                                +{keywords.length - 3} more
                            </span>
                        )}
                    </div>
                </div>
            )}

            <div className="flex justify-between items-center mt-4">
                <div className="text-xs text-gray-400">
                    {application.estimatedTime && (
                        <span className="mr-3">⏱️ {application.estimatedTime}</span>
                    )}
                </div>

                <Link href={`/applications/${application.difficulty.toLowerCase()}/${application.slug}`} passHref>
                    <button className="handwriting text-sm border border-blue-500 hover:bg-blue-500/20 text-blue-300 rounded-full px-4 py-1 transition-all">
                        Learn More →
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}
