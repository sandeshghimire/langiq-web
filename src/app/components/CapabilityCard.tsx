import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface CapabilityCardProps {
    title: string;
    description: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, description }) => {
    return (
        <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 group">
            <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white rounded-lg border border-zinc-100 group-hover:border-amber-200 group-hover:bg-amber-50 transition-colors">
                    <CheckCircle2 size={20} className="text-zinc-400 group-hover:text-amber-600 transition-colors" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-amber-700 transition-colors">{title}</h4>
                    <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CapabilityCard;
