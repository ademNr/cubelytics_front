"use client";

import { Card } from '@/components/ui/Card';
import { ReportSummary } from '@/components/report/ReportSummary';
import { AdPreviews } from '@/components/report/AdPreviews';
import { SearchDemand } from '@/components/report/SearchDemand';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

// Import all your section components
import { InfluencerSaturation } from '@/components/report/sections/InfluencerSaturation';
import { ProductTrendInsights } from '@/components/report/sections/ProductTrendInsights';
import { MarketSaturation } from '@/components/report/sections/MarketSaturation';
import { AudienceProfile } from '@/components/report/sections/AudienceProfile';
import { PricePositioning } from '@/components/report/sections/PricePositioning';
import { PlatformStrategies } from '@/components/report/sections/PlatformStrategies';
import { ResearchKeywordsGuide } from '@/components/report/sections/ResearchKeywordsGuide';
import { ActionPlan } from '@/components/report/sections/ActionPlan';
import { FinalVerdict } from '@/components/report/sections/FinalVerdict';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Report } from '@/types/report';

export default function ProductReportPage() {
    const { id } = useParams();
    const [reportData, setReportData] = useState<Report | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await fetch(`https://cubelytics-backend-lzji-gpjtnmayb-ademnrdevgmailcoms-projects.vercel.app/api/history/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch report');
                }
                const data = await response.json();
                setReportData(data.data); // Assuming the response has a data property containing the Report
            } catch (err) {
                console.error('Error fetching report:', err);
                setError('Failed to load report data');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchReport();
        }
    }, [id]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <div className="p-6">
                <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                    {error}
                </div>
            </div>
        );
    }

    if (!reportData) {
        return (
            <div className="p-6">
                <div className="bg-yellow-50 text-yellow-600 p-4 rounded-lg">
                    No report data available
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Product Viability Report</h1>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-600">
                        <span>Product: {reportData.input.productTitle}</span>
                        <span className="hidden md:inline">•</span>
                    </div>
                </div>
                <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Export PDF Report
                </button>
            </div>

            <ReportSummary
                verdict={reportData.aiAnalysis?.aiSummaryVerdict || "No summary available"}
                confidence={reportData.aiAnalysis?.finalVerdict?.confidenceLevel || "Unknown"}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-6">
                        <InfluencerSaturation data={reportData.aiAnalysis?.influencerSaturation} />
                        <ProductTrendInsights data={reportData.aiAnalysis?.productTrendInsights} />
                        <SearchDemand data={reportData.aiAnalysis?.searchDemand} />
                        <MarketSaturation data={reportData.aiAnalysis?.marketSaturation} />
                        <AudienceProfile data={reportData.aiAnalysis?.audienceProfile} />
                        <PricePositioning data={reportData.aiAnalysis?.pricePositioning} />
                        <PlatformStrategies data={reportData.aiAnalysis?.platformStrategies} />
                        <ResearchKeywordsGuide data={reportData.aiAnalysis?.researchKeywordsGuide} />
                        <ActionPlan data={reportData.aiAnalysis?.actionPlan} />
                    </div>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-6">
                    <Card title="Final Verdict">
                        <FinalVerdict data={reportData.aiAnalysis?.finalVerdict} />
                    </Card>
                    <AdPreviews
                        ads={reportData.adsData}
                        reportId={id as string}
                        reportData={{
                            productName: reportData.input.productTitle,
                            date: new Date().toISOString() // You might want to add a date field to your Report type
                        }}
                    />
                </div>
            </div>
        </div>
    );
}