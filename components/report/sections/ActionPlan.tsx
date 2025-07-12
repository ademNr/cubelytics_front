import { Card } from "../../ui/Card";

interface KPI {
    metric: string;
    target: string;
    timeframe: string;
}

interface BudgetAllocation {
    [key: string]: string;
    legalConsultation: string;
    paidAds: string;
    contentCreation: string;
    influencerMarketing: string;
}

interface BudgetSuggestion {
    totalLaunchBudget: string;
    allocation: BudgetAllocation;
}

interface ActionPlanData {
    timeToMarket: string;
    immediateSteps: string[];
    budgetSuggestion: BudgetSuggestion;
    kpis: KPI[];
}

interface ActionPlanProps {
    data: ActionPlanData;
}

export const ActionPlan = ({ data }: ActionPlanProps) => (
    <Card title="Action Plan">
        <div className="space-y-6">
            <div>
                <h3 className="text-sm font-medium text-gray-700">Time to Market</h3>
                <p className="font-medium text-lg text-gray-900">{data.timeToMarket}</p>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">Immediate Steps</h3>
                <ul className="mt-2 space-y-2">
                    {data.immediateSteps.map((step, i) => (
                        <li key={i} className="flex items-start">
                            <span className="flex-shrink-0 mt-1.5 h-2 w-2 rounded-full bg-blue-500"></span>
                            <span className="ml-2 text-gray-800">{step}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">Budget Suggestion</h3>
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Total Budget:</span>
                        <span className="font-bold text-lg text-gray-900">{data.budgetSuggestion.totalLaunchBudget}</span>
                    </div>

                    <div className="mt-4 space-y-3">
                        {Object.entries(data.budgetSuggestion.allocation).map(([category, percentage]) => (
                            <div key={category}>
                                <div className="flex justify-between text-sm">
                                    <span className="capitalize text-gray-700">{category}:</span>
                                    <span className="text-gray-900">{percentage}</span>
                                </div>
                                <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="h-2 rounded-full bg-green-500"
                                        style={{ width: percentage }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">KPIs to Track</h3>
                <div className="mt-2 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Metric</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Target</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Timeframe</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.kpis.map((kpi, i) => (
                                <tr key={i}>
                                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">{kpi.metric}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-gray-800">{kpi.target}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-gray-800">{kpi.timeframe}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Card>
);