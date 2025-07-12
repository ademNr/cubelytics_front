// Base types
export interface AdData {
    advertiser: string;
    adPreviewText: string;
    image?: string;
    videoSrc?: string;
    poster?: string;
}

export interface InputData {
    productTitle: string;
    targetCountry: string;
    keywords: string;
    imageUrl: string;
}

export interface PlatformBreakdown {
    relatedProductContentExistence: string;
}

export interface FollowerRanges {
    "<10k": number;
    "10k–100k": number;
    "100k+": number;
}

export interface PlatformBreakdownDetails {
    TikTok: string;
    Instagram: string;
}

export interface InfluencerSaturation {
    platformBreakdown: {
        TikTok: PlatformBreakdown;
        Instagram: PlatformBreakdown;
    };
    totalCreatorsRecentlyPosted: number;
    followerRanges: FollowerRanges;
    influencerActivityLevel: string;
    saturationVerdict: string;
    platformBreakdownDetails: PlatformBreakdownDetails;
}

export interface CostEstimate {
    CPM: string;
    CPC: string;
}

export interface CACProjection {
    conversionRate: string;
    estimatedCAC: string;
}

export interface ProductTrendInsights {
    googleTrendScore: number;
    regionalDemand: string[];
    risingSearches: string[];
    seasonality: string;
    idealLaunchWindow: string;
}

export interface KeywordData {
    keyword: string;
    searchVolume: string;
    lastMonthSearches: string;
    difficulty: string;
}

export interface SearchDemand {
    topKeywords: KeywordData[];
}

export interface MarketSaturation {
    ugcPresence: string;
    adPresence: string;
    saturationScore: number;
    verdict: string;
}

export interface AudienceProfile {
    personaName: string;
    interests: string[];
    platforms: string[];
    painPoints: string[];
}

export interface PricePositioning {
    suggestedPrice: string;
    marketAverage: string;
    psychologicalAdvice: string;
    estimatedCOGS: string;
    profitMargin: string;
}

export interface PlatformStrategies {
    bestChannelsToLaunch: string[];
    contentIdeas: string[];
    influencerStrategy: string;
    UGCStrategy: string;
}

export interface SocialMediaPlatformGuide {
    hashtags: string[];
    searchTerms: string[];
    locationTags?: string[];
    effects?: string[];
    marketplaceTerms?: string[];
    groups?: string[];
    tools?: string[];
    accountsToFollow?: string[];
}

export interface ResearchKeywordsGuide {
    metaAdLibraryKeywords: string[];
    instagram: SocialMediaPlatformGuide;
    tiktok: SocialMediaPlatformGuide;
    facebook: SocialMediaPlatformGuide;
    google: SocialMediaPlatformGuide;
    twitter: SocialMediaPlatformGuide;
}

export interface KPI {
    metric: string;
    target: string;
    timeframe: string;
}

export interface BudgetAllocation {
    legalConsultation: string;
    paidAds: string;
    contentCreation: string;
    influencerMarketing: string;
}

export interface BudgetSuggestion {
    totalLaunchBudget: string;
    allocation: BudgetAllocation;
}

export interface ActionPlan {
    timeToMarket: string;
    immediateSteps: string[];
    budgetSuggestion: BudgetSuggestion;
    kpis: KPI[];
}

export interface FinalVerdict {
    launchDecision: string;
    confidenceLevel: string;
    riskLevel: string;
    summaryReason: string;
}

// Main AI Analysis interface
export interface AiAnalysis {
    aiSummaryVerdict: string;
    influencerSaturation: InfluencerSaturation;
    costEstimates: {
        meta: CostEstimate;
        tiktok: CostEstimate;
        CACProjection: CACProjection[];
    };
    productTrendInsights: ProductTrendInsights;
    searchDemand: SearchDemand;
    marketSaturation: MarketSaturation;
    audienceProfile: AudienceProfile;
    pricePositioning: PricePositioning;
    platformStrategies: PlatformStrategies;
    researchKeywordsGuide: ResearchKeywordsGuide;
    actionPlan: ActionPlan;

    finalVerdict: FinalVerdict;
}

// Main Report interface
export interface Report {
    id: string;
    input: InputData;
    adsData: AdData[];
    aiAnalysis: AiAnalysis;
    createdAt: string;  // Add this field
    productTitle?: string; // Optional field from backend
    targetCountry?: string; // Optional field from backend
    keywords?: string[]; // Optional field from backend
    imageUrl?: string; // Optional field from backend
}