'use client';

import dynamic from 'next/dynamic';

// Dynamically import the background component with no SSR
const NotebookBackground = dynamic(
    () => import('./NotebookBackground'),
    { ssr: false }
);

export default function BackgroundWrapper() {
    return <NotebookBackground />;
}
