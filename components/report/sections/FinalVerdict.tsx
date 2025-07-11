import { Badge } from "../../ui/Badge";

export const FinalVerdict = ({ data }: { data: any }) => (
    <div className="space-y-4">
        <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-gray-800">Launch Decision:</h3>
            <Badge variant={
                data.launchDecision === 'LAUNCH NOW' ? 'success' :
                    data.launchDecision === 'LAUNCH WITH CHANGES' ? 'warning' : 'danger'
            }>
                {data.launchDecision}
            </Badge>
        </div>
        <div>
            <h4 className="font-medium text-gray-700">Confidence Level</h4>
            <Badge variant={
                data.confidenceLevel === 'High' ? 'success' :
                    data.confidenceLevel === 'Medium' ? 'warning' : 'danger'
            }>
                {data.confidenceLevel}
            </Badge>
        </div>
        <div>
            <h4 className="font-medium text-gray-700">Risk Level</h4>
            <Badge variant={
                data.riskLevel === 'Low' ? 'success' :
                    data.riskLevel === 'Medium' ? 'warning' : 'danger'
            }>
                {data.riskLevel}
            </Badge>
        </div>
        <div>
            <h4 className="font-medium text-gray-700">Summary</h4>
            <p className="text-gray-800">{data.summaryReason}</p>
        </div>
    </div>
);