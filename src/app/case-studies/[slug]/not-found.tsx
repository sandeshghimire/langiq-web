import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileX } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
            <div className="text-center max-w-md mx-auto px-4">
                <FileX className="mx-auto h-16 w-16 text-gray-400 mb-6" />
                <h1 className="text-4xl font-bold mb-4 text-gray-900">Case Study Not Found</h1>
                <p className="text-gray-600 mb-8">
                    The case study you're looking for doesn't exist or has been moved.
                </p>
                <Link href="/case-studies">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Case Studies
                    </Button>
                </Link>
            </div>
        </div>
    );
}
