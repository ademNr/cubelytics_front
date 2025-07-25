"use client";

import { FolderSearch, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from "@/components/ui/Badge";
import Link from 'next/link';
import { Scan } from '@/types/scan'; // Import the Scan interface



const getBadgeVariant = (status: string): 'default' | 'success' | 'warning' | 'danger' => {
    const statusUpper = status.toUpperCase();

    if (statusUpper.includes('LAUNCH NOW')) return 'success';
    if (statusUpper.includes('LAUNCH WITH CHANGES')) return 'warning';
    if (statusUpper.includes('AVOID') || statusUpper.includes('POSTPONE')) return 'danger';
    if (statusUpper.includes('RESEARCH') || statusUpper.includes('MODIFY')) return 'warning';

    return 'default';
};

interface HistoryTableProps {
    scans: Scan[];
    loading: boolean;
    error: string;
    limit?: number;
}

export const HistoryTable = ({ scans, loading, error, limit }: HistoryTableProps) => {
    const displayedScans = limit ? scans.slice(0, limit) : scans;

    if (loading) {
        return (
            <Card className="bg-white">
                <div className="p-12 text-center">
                    <Loader2 className="w-8 h-8 text-gray-400 mx-auto mb-4 animate-spin" />
                    <p className="text-gray-500">Loading your analysis reports...</p>
                </div>
            </Card>
        );
    }

    if (error) {
        return (
            <Card className="bg-white">
                <div className="p-12 text-center">
                    <FolderSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Error loading history</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                        {error}. Please try again later.
                    </p>
                </div>
            </Card>
        );
    }

    if (scans.length === 0) {
        return (
            <Card className="bg-white">
                <div className="p-12 text-center">
                    <FolderSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No analysis history yet</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                        Start analyzing products to see your history here. Go to the Analyze Product page to get started.
                    </p>
                </div>
            </Card>
        );
    }

    return (
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
    );
};