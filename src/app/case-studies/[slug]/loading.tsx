export default function Loading() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header skeleton */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="h-10 w-32 bg-gray-200 rounded mb-4 animate-pulse"></div>
                    <div className="h-12 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                    <div className="h-6 w-1/2 bg-gray-200 rounded mb-6 animate-pulse"></div>
                    <div className="flex gap-4">
                        <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Content skeleton */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="space-y-4">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="space-y-3">
                            <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-6 w-4/5 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
