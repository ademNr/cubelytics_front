import { Settings } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export default function SettingsPage() {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Settings</h2>
                <p className="text-gray-600">Manage your account preferences</p>
            </div>

            <Card className="bg-white">
                <div className="p-12 text-center">
                    <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Settings panel coming soon</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                        We're working on bringing you a comprehensive settings panel where you can configure your analysis preferences.
                    </p>
                </div>
            </Card>
        </div>
    );
}