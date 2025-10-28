"use client";
import React, { useEffect } from "react";

export default function Sheet({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (open) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex">
            {/* overlay */}
            <button
                aria-hidden
                onClick={onClose}
                className="absolute inset-0 bg-black/40"
                tabIndex={-1}
            />
            {/* panel */}
            <aside className="ml-auto w-full max-w-md bg-white p-4 shadow-lg rounded-tl-2xl rounded-bl-2xl">
                {children}
            </aside>
        </div>
    );
}