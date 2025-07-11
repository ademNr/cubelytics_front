import React from 'react';

export const Card = ({
    title,
    children,
    className = ''
}: {
    title?: string;
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden ${className}`}>
            {title && (
                <div className="border-b border-gray-200 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                </div>
            )}
            <div className="p-6">{children}</div>
        </div>
    );
};