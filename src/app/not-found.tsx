import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-8">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
                Go back home
            </Link>
        </div>
    );
}
