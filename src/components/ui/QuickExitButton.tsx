"use client";
import React from "react";

export default function QuickExitButton() {
    const handleQuickExit = () => {
        // immediate navigation to a privacy-oriented site
        window.location.href = "https://duckduckgo.com/";
    };

    return (
        <button
            type="button"
            onClick={handleQuickExit}
            aria-label="Quick exit"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-2xl bg-red-600 text-white hover:bg-red-700 shadow-sm"
        >
            Quick Exit
        </button>
    );
}