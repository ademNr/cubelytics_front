"use client";

import Link from 'next/link';
import Image from 'next/image'; // Add this import
import {
    BarChart3, Target, Calendar, Settings, HelpCircle,
    X
} from 'lucide-react';


export default function Sidebar({
    isOpen,
    currentPath
}: {
    isOpen: boolean;
    currentPath: string;
}) {


    const navigation = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: BarChart3,
            current: currentPath === '/dashboard'
        },
        {
            name: 'Analyze Product',
            href: '/analyze',
            icon: Target,
            current: currentPath === '/analyze'
        },
        {
            name: 'History',
            href: '/history',
            icon: Calendar,
            current: currentPath.startsWith('/history')
        },
        {
            name: 'Settings',
            href: '/settings',
            icon: Settings,
            current: currentPath === '/settings'
        },
        {
            name: 'Help Center',
            href: '/help',
            icon: HelpCircle,
            current: currentPath === '/help'
        }
    ];

    return (
        <>
            {/* Mobile sidebar overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-2">
                                {/* Replace the icon div with your logo */}
                                <div className="w-8 h-8 relative">
                                    <Image
                                        src="/images/applogo.png" // Update this path to match your logo file
                                        alt="Cubelytics Logo"
                                        fill
                                        className="object-contain scale-180"
                                    />
                                </div>
                                <h1 className="text-xl font-bold text-gray-800">Cubelytics</h1>
                            </div>
                            <button
                                className="text-gray-500 lg:hidden"
                                onClick={() => isOpen}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${item.current
                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}