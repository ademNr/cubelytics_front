import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/Card";
import Link from 'next/link';
import { Report, AdData } from '@/types/report';

interface AdPreviewsProps {
    ads: AdData[];
    reportId: string;
    reportData: {
        productName: string;
        date: string;
    };
}

export const AdPreviews = ({
    ads,
    reportId,
    reportData
}: AdPreviewsProps) => {
    const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);
    const [isMuted, setIsMuted] = useState(true);

    // Function to encode ad data for URL
    const encodeAdData = (ad: AdData) => {
        return encodeURIComponent(JSON.stringify({
            ...ad,
            reportId,
            productName: reportData.productName,
            date: reportData.date
        }));
    };

    // Stop all videos when component unmounts
    useEffect(() => {
        return () => {
            setPlayingVideoIndex(null);
        };
    }, []);

    const handleVideoClick = (index: number) => {
        if (playingVideoIndex === index) {
            setPlayingVideoIndex(null); // Pause if clicking the same video
        } else {
            setPlayingVideoIndex(index); // Play new video
        }
    };

    return (
        <Card title="Similar Products Running Ads">
            <div className="sticky top-4 h-[calc(100vh-2rem)] overflow-hidden flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-1">
                    {ads.map((ad, index) => (
                        <Link
                            key={index}
                            href={{
                                pathname: `/history/${reportId}/ad/${index}`,
                                query: { data: encodeAdData(ad) }
                            }}
                            className="block"
                        >
                            <div
                                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Video Preview */}
                                {ad.videoSrc && (
                                    <div
                                        className="relative w-full h-48 bg-gray-100 cursor-pointer video-control"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleVideoClick(index);
                                        }}
                                    >
                                        {playingVideoIndex === index ? (
                                            <video
                                                src={ad.videoSrc}
                                                controls
                                                autoPlay
                                                muted={isMuted}
                                                className="w-full h-full object-contain bg-black"
                                                onEnded={() => setPlayingVideoIndex(null)}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        ) : (
                                            <>
                                                {ad.poster ? (
                                                    <img
                                                        src={ad.poster}
                                                        alt={`Ad preview for ${ad.advertiser}`}
                                                        className="w-full h-full object-contain"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                        <div className="bg-blue-500 text-white p-2 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity">
                                                    <div className="bg-white bg-opacity-80 rounded-full p-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}

                                {/* Image Preview */}
                                {!ad.videoSrc && ad.image && (
                                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                                        <img
                                            src={ad.image}
                                            alt={`Ad preview for ${ad.advertiser}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                )}

                                {/* Placeholder for ads without media */}
                                {!ad.videoSrc && !ad.image && (
                                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                                        <div className="bg-gray-300 text-gray-600 p-2 rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                {/* Advertiser and Text */}
                                <div className="p-3 bg-gray-50 border-t border-gray-100">
                                    <div className="flex items-center mb-1">
                                        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                                            <span className="text-xs font-medium text-gray-700">
                                                {ad.advertiser ? ad.advertiser.charAt(0) : 'A'}
                                            </span>
                                        </div>
                                        <p className="text-xs font-medium text-gray-800 truncate">
                                            {ad.advertiser || 'Unknown Advertiser'}
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-600 line-clamp-3">
                                        {ad.adPreviewText}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Video Controls */}
            {playingVideoIndex !== null && (
                <div className="mt-3 p-2 bg-gray-50 border-t border-gray-200 flex items-center justify-end">
                    <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="flex items-center text-xs text-gray-600 hover:text-gray-800 video-control"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 mr-1 ${isMuted ? 'text-red-500' : 'text-green-500'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMuted ? (
                                <>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m0 0l-2-2m2 2l-2 2" />
                                </>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12m-4.5-9.5L12 3l4.5 4.5M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            )}
                        </svg>
                        {isMuted ? 'Unmute' : 'Mute'}
                    </button>
                </div>
            )}
        </Card>
    );
};