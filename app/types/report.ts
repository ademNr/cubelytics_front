export type PlatformBreakdown = {
    [key: string]: {
        relatedProductContentExistence: "low" | "medium" | "high";
    };
};

export type CACProjection = {
    conversionRate: string;
    estimatedCAC: string;
};

export type CostEstimates = {
    meta: { CPM: string; CPC: string };
    tiktok: { CPM: string; CPC: string };
    CACProjection: CACProjection[];
};

// Define similar interfaces for all response sections
// ...

export type AnalysisReport = {
    aiSummaryVerdict: string;
    influencerSaturation: {
        platformBreakdown: PlatformBreakdown;
    };
    costEstimates: CostEstimates;
    productTrendInsights: { /* ... */ };
    // ... other sections
    adPreviews: {
        adPreviewText: string;
        videoSrc?: string;
        poster?: string;
        image?: string;
    }[];
};