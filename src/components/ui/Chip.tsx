import React from "react";

export default function Chip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-gray-100 shadow-sm ${className}`}>
            {children}
        </span>
    );
}