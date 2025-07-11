import { Card } from "../../ui/Card";
import { Badge } from "../../ui/Badge";

export const PricePositioning = ({ data }: { data: any }) => (
    <Card title="Price Positioning">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3 className="text-sm font-medium text-gray-700">Suggested Price</h3>
                <p className="text-2xl font-bold text-gray-700">{data.suggestedPrice}</p>

                <h3 className="text-sm font-medium text-gray-700 mt-4">Market Average</h3>
                <p className="text-lg text-gray-700">{data.marketAverage}</p>

                <h3 className="text-sm font-medium text-gray-700 mt-4">Profit Margin</h3>
                <Badge variant={
                    data.profitMargin === 'High' ? 'success' :
                        data.profitMargin === 'Medium' ? 'warning' : 'danger'
                }>
                    {data.profitMargin}
                </Badge>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">Psychological Advice</h3>
                <p className="bg-green-50 p-3 rounded-lg border border-green-100 mt-2 text-green-800" >
                    {data.psychologicalAdvice}
                </p>

                <h3 className="text-sm font-medium text-gray-700 mt-4">Estimated COGS</h3>
                <p className="text-gray-700">{data.estimatedCOGS}</p>
            </div>
        </div>
    </Card>
);