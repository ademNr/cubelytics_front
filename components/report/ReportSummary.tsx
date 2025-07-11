import { Badge } from "@/components/ui/Badge";

export const ReportSummary = ({
    verdict,
    confidence
}: {
    verdict: string;
    confidence: string;
}) => {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
                <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
                        <Badge variant={confidence === "High" ? "success" : "warning"}>
                            {confidence} Confidence
                        </Badge>
                    </div>
                    <p className="text-gray-800">{verdict}</p>
                </div>
            </div>
        </div>
    );
};