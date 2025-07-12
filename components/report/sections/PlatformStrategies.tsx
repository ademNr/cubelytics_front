import { Card } from "../../ui/Card";
import { Badge } from "../../ui/Badge";
import { PlatformStrategies as PlatformStrategiesData } from "@/types/report"
export const PlatformStrategies = ({ data }: { data: PlatformStrategiesData }) => (
    <Card title="Platform Strategies">
        <div className="space-y-4">
            <div>
                <h3 className="text-sm font-medium text-gray-700">Best Channels to Launch</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {data.bestChannelsToLaunch.map((channel: string, i: number) => (
                        <Badge key={i} variant="success">{channel}</Badge>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">Content Ideas</h3>
                <ul className="mt-2 space-y-1">
                    {data.contentIdeas.map((idea: string, i: number) => (
                        <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{idea}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">Influencer Strategy</h3>
                <p className="mt-2 text-gray-700">{data.influencerStrategy}</p>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">UGC Strategy</h3>
                <p className="mt-2 text-gray-700">{data.UGCStrategy}</p>
            </div>
        </div>
    </Card>
);