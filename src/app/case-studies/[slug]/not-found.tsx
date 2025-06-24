import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileX, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-4">
            <div className="text-center max-w-lg mx-auto">
                <FileX className="mx-auto h-16 w-16 text-gray-400 mb-6" />
                <h1 className="text-4xl font-bold mb-4 text-gray-900">Case Study Not Found</h1>
                <p className="text-gray-600 mb-8">
                    The case study you're looking for doesn't exist or has been moved.
                    This might happen if you're using an old bookmark or link.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                    <h3 className="text-blue-800 font-semibold mb-2 flex items-center justify-center">
                        <Search className="mr-2 h-4 w-4" />
                        Looking for something specific?
                    </h3>
                    <p className="text-blue-700 text-sm">
                        Browse all our case studies to find what you need, or check if the URL has the correct format.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/case-studies">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            View All Case Studies
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button variant="outline" className="border-gray-300 hover:border-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                            Go to Homepage
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
