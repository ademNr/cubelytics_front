import { Card } from "../../ui/Card";

export const CostEstimates = ({ data }: { data: any }) => (
    <Card title="Cost Estimates">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PlatformCostCard
                platform="Meta"
                cpm={data.meta.CPM}
                cpc={data.meta.CPC}
            />
            <PlatformCostCard
                platform="TikTok"
                cpm={data.tiktok.CPM}
                cpc={data.tiktok.CPC}
            />
            <CACProjectionCard projections={data.CACProjection} />
        </div>
    </Card>
);

const PlatformCostCard = ({ platform, cpm, cpc }: any) => (
    <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">{platform} Ads</h3>
        <div className="space-y-2">
            <div className="flex justify-between">
                <span className="text-gray-700">CPM:</span>
                <span className="font-medium text-gray-900">{cpm}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-700">CPC:</span>
                <span className="font-medium text-gray-900">{cpc}</span>
            </div>
        </div>
    </div>
);

const CACProjectionCard = ({ projections }: any) => (
    <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">CAC Projections</h3>
        <div className="space-y-3">
            {projections.map((proj: any, i: number) => (
                <div key={i}>
                    <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{proj.conversionRate} CR:</span>
                        <span className="font-medium text-gray-900">{proj.estimatedCAC}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className={`h-2 rounded-full ${i === 0 ? 'bg-red-400 w-1/3' :
                                i === 1 ? 'bg-yellow-400 w-2/3' :
                                    'bg-green-400 w-full'
                                }`}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);