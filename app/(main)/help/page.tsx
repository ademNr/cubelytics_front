import { HelpCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export default function HelpPage() {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Help Center</h2>
                <p className="text-gray-600">Get assistance with using Cubelytics</p>
            </div>

            <Card className="bg-white">
                <div className="p-12 text-center">
                    <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Help resources coming soon</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                        We're preparing comprehensive help documentation and FAQs to assist you with using Cubelytics effectively.
                    </p>
                </div>
            </Card>
        </div>
    );
}