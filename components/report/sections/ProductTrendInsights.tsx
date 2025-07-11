import { Card } from "../../ui/Card";
import { Badge } from "../../ui/Badge";

export const ProductTrendInsights = ({ data }: { data: any }) => (
    <Card title="Product Trend Insights">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h3 className="text-sm font-medium text-gray-700">Google Trend Score</h3>
                <p className="text-2xl font-bold text-gray-700">{data.googleTrendScore} <span className="text-lg text-gray-700">/100</span></p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="h-2 rounded-full bg-blue-600"
                        style={{ width: `${data.googleTrendScore}%` }}
                    ></div>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">Seasonality</h3>
                <Badge variant={
                    data.seasonality === 'High' ? 'warning' :
                        data.seasonality === 'Medium' ? 'default' : 'success'
                }>
                    {data.seasonality}
                </Badge>

                <h3 className="text-sm font-medium text-gray-700 mt-4">Ideal Launch Window</h3>
                <p className="font-medium text-gray-500">{data.idealLaunchWindow}</p>
            </div>

            <div className="md:col-span-2">
                <h3 className="text-sm font-medium text-gray-700">Regional Demand</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {data.regionalDemand.map((region: string, i: number) => (
                        <Badge key={i} variant="default">{region}</Badge>
                    ))}
                </div>
            </div>

            <div className="md:col-span-2">
                <h3 className="text-sm font-medium text-gray-700">Rising Searches</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {data.risingSearches.map((search: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                            {search}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </Card>
);