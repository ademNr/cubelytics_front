"use client";

import { useState, useEffect } from 'react';
import { Target, Globe, Eye, Zap, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { HistoryTable } from '@/components/history/HistoryTable';

interface Metric {
    title: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
}

export default function DashboardPage() {
    const [metrics, setMetrics] = useState<Metric[]>([]);
    const [scans, setScans] = useState<any[]>([]);
    const [scansLoading, setScansLoading] = useState(true);
    const [scansError, setScansError] = useState<string | null>(null);
    const [metricsLoading, setMetricsLoading] = useState(true);
    const [metricsError, setMetricsError] = useState<string | null>(null);

    // Fetch metrics
    useEffect(() => {
        const fetchDashboardMetrics = async () => {
            try {
                const response = await fetch('https://cubelytics-backend-lzji-gpjtnmayb-ademnrdevgmailcoms-projects.vercel.app/api/dashboard-metrics');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                setMetrics([
                    {
                        title: "Products Analyzed",
                        value: data.productsAnalyzed?.toString() || "0",
                        icon: Target,
                        color: "bg-blue-100 text-blue-600"
                    },
                    {
                        title: "Markets Covered",
                        value: data.marketsCovered?.toString() || "0",
                        icon: Globe,
                        color: "bg-green-100 text-green-600"
                    },
                    {
                        title: "Ads Monitored",
                        value: data.adsMonitored >= 1000
                            ? `${(data.adsMonitored / 1000).toFixed(1)}K`
                            : data.adsMonitored?.toString() || "0",
                        icon: Eye,
                        color: "bg-purple-100 text-purple-600"
                    },
                    {
                        title: "Accuracy Rate",
                        value: `${Math.max(85, data.accuracyRate || 85)}%`,
                        icon: Zap,
                        color: "bg-orange-100 text-orange-600"
                    }
                ]);
            } catch (err) {
                console.error('Failed to fetch metrics:', err);
                setMetricsError('Failed to load live data. Showing sample metrics.');
                setMetrics([
                    {
                        title: "Products Analyzed",
                        value: "247",
                        icon: Target,
                        color: "bg-blue-100 text-blue-600"
                    },
                    {
                        title: "Markets Covered",
                        value: "12",
                        icon: Globe,
                        color: "bg-green-100 text-green-600"
                    },
                    {
                        title: "Ads Monitored",
                        value: "1.2K",
                        icon: Eye,
                        color: "bg-purple-100 text-purple-600"
                    },
                    {
                        title: "Accuracy Rate",
                        value: "89%",
                        icon: Zap,
                        color: "bg-orange-100 text-orange-600"
                    }
                ]);
            } finally {
                setMetricsLoading(false);
            }
        };

        fetchDashboardMetrics();
    }, []);

    // Fetch history for the dashboard
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
                setScansError('Failed to load history data');
            } finally {
                setScansLoading(false);
            }
        };

        fetchHistory();
    }, []);

    if (metricsLoading) {
        return (
            <div className="p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h2>
                    <p className="text-gray-600">Loading live metrics...</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[...Array(4)].map((_, i) => (
                        <Card key={i} className="bg-white">
                            <div className="animate-pulse">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                                </div>
                                <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Recent Analyses</h2>
                    <Card className="bg-white">
                        <div className="p-12 text-center">
                            <Loader2 className="w-8 h-8 text-gray-400 mx-auto mb-4 animate-spin" />
                            <p className="text-gray-500">Loading recent analyses...</p>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h2>
                {metricsError && (
                    <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded">
                        {metricsError}
                    </div>
                )}
                <p className="text-gray-600">Analyze your product&apos;s market potential with AI-powered market insights</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric, index) => (
                    <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 ${metric.color} rounded-lg flex items-center justify-center`}>
                                <metric.icon className="w-5 h-5" />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
                        <p className="text-sm text-gray-600">{metric.title}</p>
                    </Card>
                ))}
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Recent Analyses</h2>
                <HistoryTable
                    scans={scans}
                    loading={scansLoading}
                    error={scansError || ''}
                    limit={5}
                />
            </div>
        </div>
    );
}