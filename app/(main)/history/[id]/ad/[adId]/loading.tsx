export default function Loading() {
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Media Loading */}
                    <div>
                        <div className="h-96 bg-gray-200 rounded-lg mb-6"></div>
                        <div className="h-40 bg-gray-200 rounded-lg"></div>
                    </div>

                    {/* Details Loading */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                            <div>
                                <div className="h-6 bg-gray-200 rounded w-48 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-32"></div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                        </div>

                        <div className="h-40 bg-gray-200 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}   