import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
    id?: string;
    title: string;
    description?: React.ReactNode;
    icon?: LucideIcon;
    children?: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, description, icon: Icon, children, className = "" }) => {
    return (
        <div id={id} className={`py-12 border-t border-zinc-100 first:border-0 ${className}`}>
            <div className="flex items-center gap-4 mb-6">
                {Icon && (
                    <div className="p-3 bg-zinc-900 rounded-xl shadow-lg shadow-zinc-900/20">
                        <Icon size={24} className="text-amber-400" />
                    </div>
                )}
                <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">{title}</h2>
            </div>

            {description && (
                <div className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-4xl">
                    {description}
                </div>
            )}

            {children}
        </div>
    );
};

export default Section;
