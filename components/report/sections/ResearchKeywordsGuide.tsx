import { Card } from "../../ui/Card";
import { Badge } from "../../ui/Badge";
import { ResearchKeywordsGuide as ResearchKeywordsGuideData } from "@/types/report";

interface PlatformInfo {
    hashtags?: string[];
    searchTerms?: string[];
    locationTags?: string[];
    marketplaceTerms?: string[];
    groups?: string[];
    tools?: string[];
    accountsToFollow?: string[];
    effects?: string[];
}

export const ResearchKeywordsGuide = ({ data }: { data: ResearchKeywordsGuideData }) => {
    const platforms = Object.entries(data) as [string, PlatformInfo][];

    return (
        <Card title="Research Keywords Guide">
            <div className="space-y-6">
                {platforms.map(([platform, info]) => (
                    <div key={platform} className="border-t pt-4 first:border-t-0 first:pt-0">
                        <h3 className="font-medium text-gray-900">{platform}</h3>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {info.hashtags && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">Hashtags</h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {info.hashtags.map((tag, i) => (
                                            <Badge key={i} variant="default">#{tag.replace('#', '')}</Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {info.searchTerms && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">Search Terms</h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {info.searchTerms.map((term, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                                                {term}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {info.locationTags && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">Location Tags</h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {info.locationTags.map((tag, i) => (
                                            <Badge key={i} variant="success">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};