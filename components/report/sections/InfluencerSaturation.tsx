import { Card } from "../../ui/Card";
import { Badge } from "../../ui/Badge";
import { InfluencerSaturation as InfluencerSaturationData } from "@/types/report";

export const InfluencerSaturation = ({ data }: { data: InfluencerSaturationData }) => {
    const platforms = Object.entries(data.platformBreakdown) as [
        string,
        { relatedProductContentExistence: 'high' | 'medium' | 'low' }
    ][];

    return (
        <Card title="Influencer Saturation">
            <div className="space-y-4">
                {platforms.map(([platform, info]) => (
                    <div key={platform} className="flex items-center justify-between">
                        <span className="font-medium text-gray-800">{platform}</span>
                        <Badge variant={
                            info.relatedProductContentExistence === 'high' ? 'danger' :
                                info.relatedProductContentExistence === 'medium' ? 'warning' :
                                    'success'
                        }>
                            {info.relatedProductContentExistence}
                        </Badge>
                    </div>
                ))}
            </div>
        </Card>
    );
};