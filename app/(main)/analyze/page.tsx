"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Target } from 'lucide-react';

export default function AnalyzePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        productTitle: '',
        targetCountry: '',
        keywords: '',
        exampleUrl: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('https://cubelytics-backend-lzji-gpjtnmayb-ademnrdevgmailcoms-projects.vercel.app/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productTitle: formData.productTitle,
                    targetCountry: formData.targetCountry,
                    keywords: formData.keywords,
                    imageUrl: formData.exampleUrl
                })
            });

            if (!response.ok) {
                throw new Error('Analysis failed');
            }

            const data = await response.json();
            router.push(`/history/${data.id}`);
        } catch (err) {
            console.error('Analysis error:', err);
            setError('Failed to analyze product. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Analyze Product</h2>
                <p className="text-gray-600">Enter your product details to get comprehensive market analysis</p>
            </div>

            {error && (
                <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
                    {error}
                </div>
            )}

            <Card className="bg-white">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Product Title</label>
                        <input
                            type="text"
                            name="productTitle"
                            value={formData.productTitle}
                            onChange={handleInputChange}
                            placeholder="e.g., Wireless Bluetooth Headphones"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800" // Added text-gray-800
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Target Country</label>
                        <select
                            name="targetCountry"
                            value={formData.targetCountry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800" // Added text-gray-800
                            required
                        >
                            <option value="" className="text-gray-500">Select target country</option>
                            <option value="Tunisia" className="text-gray-800">Tunisia</option>
                            <option value="France" className="text-gray-800">France</option>
                            <option value="Germany" className="text-gray-800">Germany</option>
                            <option value="UK" className="text-gray-800">United Kingdom</option>
                            <option value="Italy" className="text-gray-800">Italy</option>
                            <option value="Spain" className="text-gray-800">Spain</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                        <input
                            type="text"
                            name="keywords"
                            value={formData.keywords}
                            onChange={handleInputChange}
                            placeholder="e.g., wireless headphones, bluetooth, noise cancelling"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800" // Added text-gray-800
                            required
                        />
                        <p className="text-sm text-gray-500 mt-1">Separate keywords with commas</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Example Product URL</label>
                        <input
                            type="url"
                            name="exampleUrl"
                            value={formData.exampleUrl}
                            onChange={handleInputChange}
                            placeholder="https://example.com/product"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800" // Added text-gray-800
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-70"
                    >
                        <span className="flex items-center justify-center space-x-2">
                            <Target className="w-5 h-5" />
                            <span>
                                {isLoading ? 'Analyzing...' : 'Analyze Product'}
                            </span>
                        </span>
                    </button>
                </form>
            </Card>
        </div>
    );
}