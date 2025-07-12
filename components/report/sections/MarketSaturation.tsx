import { Card } from "../../ui/Card";
import { Badge } from "../../ui/Badge";
import { MarketSaturation as MarketSaturationData } from "@/types/report"
export const MarketSaturation = ({ data }: { data: MarketSaturationData }) => (
    <Card title="Market Saturation">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3 className="text-sm font-medium text-gray-700">Saturation Score</h3>
                <div className="mt-1 relative">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold text-gray-700">{data.saturationScore}<span className="text-xl text-gray-700">/100</span></div>
                        <Badge variant={
                            data.verdict === 'High' ? 'danger' :
                                data.verdict === 'Moderate' ? 'warning' : 'success'
                        }>
                            {data.verdict} Saturation
                        </Badge>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="h-3 rounded-full bg-red-500"
                            style={{ width: `${data.saturationScore}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <h3 className="text-sm font-medium text-gray-700">UGC Presence</h3>
                    <Badge variant={
                        data.ugcPresence === 'High' ? 'danger' :
                            data.ugcPresence === 'Medium' ? 'warning' : 'success'
                    }>
                        {data.ugcPresence}
                    </Badge>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-gray-700">Ad Presence</h3>
                    <Badge variant={
                        data.adPresence === 'High' ? 'danger' :
                            data.adPresence === 'Medium' ? 'warning' : 'success'
                    }>
                        {data.adPresence}
                    </Badge>
                </div>
            </div>
        </div>
    </Card>
);