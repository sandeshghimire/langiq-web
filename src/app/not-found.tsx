import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen math-paper-bg text-white flex flex-col items-center justify-center p-6">
            <div className="text-6xl mb-6">🔎</div>
            <h1 className="handwriting text-4xl font-bold mb-4">404 - Not Found</h1>
            <p className="handwriting-alt mb-8 text-xl">The page you're looking for doesn't exist.</p>
            <Link href="/" className="handwriting bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-6 rounded-full shadow-lg transition-all">
                Return Home
            </Link>
        </div>
    );
}
