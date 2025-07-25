import { Card } from "../../ui/Card";
import { Badge } from "../../ui/Badge";
import { AudienceProfile as AudienceProfileData } from "@/types/report"; // Import from your types




interface AudienceProfileProps {
    data: AudienceProfileData;
}

export const AudienceProfile = ({ data }: AudienceProfileProps) => (
    <Card title="Audience Profile">
        <div className="space-y-4">
            <div>
                <h3 className="text-sm font-medium text-gray-700">Persona</h3>
                <p className="font-medium text-gray-700">{data.personaName}</p>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">Platforms</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {data.platforms.map((platform, i) => (
                        <Badge key={i} variant="default">{platform}</Badge>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">Interests</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {data.interests.map((interest, i) => (
                        <Badge key={i} variant="success">{interest}</Badge>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700">Pain Points</h3>
                <ul className="mt-2 space-y-1">
                    {data.painPoints.map((point, i) => (
                        <li key={i} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span className="text-gray-700">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Card>
);