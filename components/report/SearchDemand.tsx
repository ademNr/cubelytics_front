import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

interface KeywordData {
    keyword: string;
    searchVolume: string;
    lastMonthSearches: string;
    difficulty: 'High' | 'Medium' | 'Low';
}

interface SearchDemandProps {
    data: {
        topKeywords: KeywordData[];
    };
}

export const SearchDemand = ({ data }: SearchDemandProps) => (
    <Card title="Search Demand">
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Keyword</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Volume</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Last Month</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Difficulty</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.topKeywords.map((keyword, i) => (
                        <tr key={i}>
                            <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">{keyword.keyword}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-gray-700">{keyword.searchVolume}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-gray-700">{keyword.lastMonthSearches}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                <Badge variant={
                                    keyword.difficulty === 'High' ? 'danger' :
                                        keyword.difficulty === 'Medium' ? 'warning' : 'success'
                                }>
                                    {keyword.difficulty}
                                </Badge>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Card>
);