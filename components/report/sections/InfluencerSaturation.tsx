import { Card } from "../../ui/Card";
import { Badge } from "../../ui/Badge";

export const InfluencerSaturation = ({ data }: { data: any }) => {
    const platforms = Object.entries(data.platformBreakdown);

    return (
        <Card title="Influencer Saturation">
            <div className="space-y-4">
                {platforms.map(([platform, info]: [string, any]) => (
                    <div key={platform} className="flex items-center justify-between">
                        <span className="font-medium text-gray-800">{platform}</span> {/* Changed to text-gray-800 */}
                        <Badge variant={
                            info.relatedProductContentExistence === 'high' ? 'danger' :
                                info.relatedProductContentExistence === 'medium' ? 'warning' : 'success'
                        }>
                            {info.relatedProductContentExistence}
                        </Badge>
                    </div>
                ))}
            </div>
        </Card>
    );
};