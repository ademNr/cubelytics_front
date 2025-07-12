"use client";

import { FolderSearch, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from "@/components/ui/Badge";
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Scan {
    id: string;
    product: string;
    country: string;
    date: string;
    status: string;
    confidence: string;
}

const getBadgeVariant = (status: string): 'default' | 'success' | 'warning' | 'danger' => {
    const statusUpper = status.toUpperCase();

    if (statusUpper.includes('LAUNCH NOW')) return 'success';
    if (statusUpper.includes('LAUNCH WITH CHANGES')) return 'warning';
    if (statusUpper.includes('AVOID') || statusUpper.includes('POSTPONE')) return 'danger';
    if (statusUpper.includes('RESEARCH') || statusUpper.includes('MODIFY')) return 'warning';

    return 'default';
};

export default function HistoryPage() {
    const [scans, setScans] = useState<Scan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showAll, setShowAll] = useState(false); // State to control showing all scans

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await fetch('https://cubelytics-backend-lzji-gpjtnmayb-ademnrdevgmailcoms-projects.vercel.app/api/history');
                if (!response.ok) {
                    throw new Error('Failed to fetch history');
                }
                const data = await response.json();
                setScans(data);
            } catch (err) {
                console.error('Failed to fetch history:', err);
                setError('Failed to load history data');
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    // Determine which scans to display
    const displayedScans = showAll ? scans : scans.slice(0, 5);

    if (loading) {
        return (
            <div className="p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Analysis History</h2>
                    <p className="text-gray-600">Loading your analysis history...</p>
                </div>
                <Card className="bg-white">
                    <div className="p-12 text-center">
                        <Loader2 className="w-8 h-8 text-gray-400 mx-auto mb-4 animate-spin" />
                        <p className="text-gray-500">Loading your analysis reports...</p>
                    </div>
                </Card>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Analysis History</h2>
                    <p className="text-gray-600">Review your previous product analysis reports</p>
                </div>
                <Card className="bg-white">
                    <div className="p-12 text-center">
                        <FolderSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Error loading history</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            {error}. Please try again later.
                        </p>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Analysis History</h2>
                <p className="text-gray-600">Review your previous product analysis reports</p>
            </div>

            {scans.length > 0 ? (
                <>
                    <Card className="bg-white">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verdict</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {displayedScans.map((scan) => (
                                        <tr key={scan.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{scan.product}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{scan.country}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {scan.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Badge variant={getBadgeVariant(scan.status)}>
                                                    {scan.status}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {scan.confidence}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Link
                                                    href={`/history/${scan.id}`}
                                                    className="text-blue-600 hover:text-blue-900"
                                                >
                                                    View Report
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    {scans.length > 5 && (
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                {showAll ? 'Show Less' : 'Show All'}
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <Card className="bg-white">
                    <div className="p-12 text-center">
                        <FolderSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No analysis history yet</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            Start analyzing products to see your history here. Go to the Analyze Product page to get started.
                        </p>
                    </div>
                </Card>
            )}
        </div>
    );
}