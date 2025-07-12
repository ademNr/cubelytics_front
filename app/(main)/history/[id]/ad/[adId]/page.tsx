"use client";

import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export default function AdDetailPage() {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();

    // Safely extract parameters with fallbacks
    const reportId = params?.id as string;
    const adId = params?.adId as string;
    const encodedData = searchParams.get('data');

    // Decode and parse ad data
    const adData = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : null;

    // Handle back navigation
    const handleBack = () => {
        router.push(`/history/${reportId}`);
    };

    if (!adData || !reportId) {
        return (
            <div className="p-6 max-w-6xl mx-auto">
                <div className="mb-6">
                    <button
                        onClick={handleBack}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium py-2 px-4 rounded hover:bg-blue-50"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Report
                    </button>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <p className="text-red-700">Ad data not found. Please go back to the report.</p>
                </div>
            </div>
        );
    }

    // Extract ad information with fallbacks
    const {
        advertiser = 'Unknown Advertiser',
        adPreviewText = 'No ad text available',
        image,
        videoSrc,
        poster,


    } = adData;

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="mb-6">
                <button
                    onClick={handleBack}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium py-2 px-4 rounded hover:bg-blue-50"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Report
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Ad Media Section */}
                <div>
                    <Card className="mb-6">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Ad Creative</h2>

                            {videoSrc ? (
                                <div className="relative w-full h-96 bg-black rounded-lg overflow-hidden">
                                    <video
                                        src={videoSrc}
                                        controls
                                        autoPlay
                                        className="w-full h-full object-contain"
                                        poster={poster}
                                    />
                                </div>
                            ) : image ? (
                                <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <img
                                        src={image}
                                        alt={`Ad preview for ${advertiser}`}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <div className="text-gray-500">No media available</div>
                                </div>
                            )}
                        </div>
                    </Card>


                </div>

                {/* Ad Details Section */}
                <div>
                    <Card className="mb-6">
                        <div className="p-4">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                    <span className="text-lg font-bold text-blue-600">
                                        {advertiser.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-800">{advertiser}</h1>
                                    <p className="text-gray-600">Found in competitor analysis</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Ad Copy</h3>
                                <p className="text-gray-700 whitespace-pre-line">{adPreviewText}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Marketing Analysis</h3>
                                <p className="text-gray-700">
                                    This ad was identified during competitor research for the product analysis.
                                    It shows how similar products are being marketed in your target market.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Observations</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Ad position: {adId}</li>
                                    <li>Media type: {videoSrc ? 'Video' : image ? 'Image' : 'None'}</li>
                                    <li>Contains direct response elements</li>
                                    <li>Uses persuasive language techniques</li>
                                </ul>
                            </div>
                        </div>
                    </Card>


                </div>
            </div>
        </div>
    );
}