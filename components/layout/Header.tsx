"use client";

import {
    Search, Bell, User, Menu
} from 'lucide-react';

export default function Header({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) {
    return (
        <header className="sticky top-0 z-40  ">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <button
                        type="button"
                        className="text-gray-500 lg:hidden mr-4"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Menu className="w-6 h-6" />
                    </button>


                </div>

                <div className="flex items-center space-x-4">
                    <button
                        type="button"
                        className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <span className="sr-only">View notifications</span>
                        <Bell className="w-6 h-6" />
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
                    </button>

                    <div className="relative">
                        <button className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <span className="sr-only">Open user menu</span>
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <User className="w-5 h-5 text-white" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}