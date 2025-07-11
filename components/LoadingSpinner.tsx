export default function LoadingSpinner() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-700">Analyzing your product...</p>
                <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
            </div>
        </div>
    );
}