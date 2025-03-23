import React from 'react';

type SectionType = 'hero' | 'content' | 'alt' | 'cta';

interface PageSectionProps {
    children: React.ReactNode;
    type: SectionType;
    color?: string; // accent color
    className?: string;
}

export default function PageSection({
    children,
    type,
    color = 'purple',
    className = ''
}: PageSectionProps) {
    const baseClasses = "w-full relative";

    // Generate background styles based on section type
    const backgroundClasses = {
        hero: `py-28 relative overflow-hidden bg-gradient-to-br from-${color}-900/10 to-gray-900`,
        content: `py-24 bg-gray-900`,
        alt: `py-24 bg-gray-800`,
        cta: `py-24 bg-gradient-to-br from-gray-900 to-${color}-950`
    };

    // Generate container styles
    const containerClasses = {
        hero: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10',
        content: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
        alt: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
        cta: 'max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'
    };

    return (
        <section className={`${baseClasses} ${backgroundClasses[type]} ${className}`}>
            {type === 'hero' && (
                <>
                    <div className="grid-bg absolute inset-0 opacity-10"></div>
                    <div className={containerClasses[type]}>
                        {children}
                    </div>
                </>
            )}
            {type !== 'hero' && (
                <div className={containerClasses[type]}>
                    {children}
                </div>
            )}
        </section>
    );
}
