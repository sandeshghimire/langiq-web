'use client';

import { useState } from "react";

export default function RightSidebar() {
    const [isRightSidebarExpanded, setIsRightSidebarExpanded] = useState(true);

    return (
        <aside className={`${isRightSidebarExpanded ? 'w-64' : 'w-12'} bg-gray-900 border-l border-gray-700 p-4 transition-all duration-300 ease-in-out flex flex-col`}>
            <div className="flex items-start justify-between mb-4">
                {isRightSidebarExpanded && (
                    <h2 className="text-lg font-semibold text-white transition-opacity duration-300 uppercase ">Quick Links</h2>
                )}
                <button
                    onClick={() => setIsRightSidebarExpanded(!isRightSidebarExpanded)}
                    className="text-gray-300 hover:text-white focus:outline-none transition-colors duration-200 ml-auto"
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                        <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isRightSidebarExpanded ? 'rotate-45 translate-y-0' : 'translate-y-1.5'}`}></span>
                        <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isRightSidebarExpanded ? 'opacity-0' : 'opacity-100'} mt-1`}></span>
                        <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isRightSidebarExpanded ? '-rotate-45 -translate-y-2' : '-translate-y-1.5'} mt-1`}></span>
                    </div>
                </button>
            </div>
            {isRightSidebarExpanded && (
                <div className="flex-1 flex items-center justify-center">
                    <ul className="space-y-0 text-center uppercase">
                        <li><a href="#" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 block py-2">Home</a></li>
                        <li><a href="#" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 block py-2">About</a></li>
                        <li><a href="#" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 block py-2">Services</a></li>
                        <li><a href="#" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 block py-2">Contact</a></li>
                    </ul>
                </div>
            )}
        </aside>
    );
}
