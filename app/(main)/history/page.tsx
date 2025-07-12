"use client";

import { useState, useEffect } from 'react';
import { HistoryTable } from '@/components/history/HistoryTable';
import { Scan } from '@/types/scan'; // Import the Scan interface

export default function HistoryPage() {
    const [scans, setScans] = useState<Scan[]>([]); // Use Scan interface
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await fetch('https://cubelytics-backend-lzji-gpjtnmayb-ademnrdevgmailcoms-projects.vercel.app/api/history');
                if (!response.ok) {
                    throw new Error('Failed to fetch history');
                }
                const data = await response.json();
                setScans(data);
            } catch (err) {
                console.error('Failed to fetch history:', err);
                setError('Failed to load history data');
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Analysis History</h2>
                <p className="text-gray-600">Review your previous product analysis reports</p>
            </div>

            <HistoryTable
                scans={scans}
                loading={loading}
                error={error}
            />
        </div>
    );
}