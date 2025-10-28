"use client";
import React from "react";
import Button from "./Button";

export default function QuickExitButton() {
    const handleQuickExit = () => {
        // immediate navigation to a privacy-oriented search (fast safe page)
        window.location.href = "https://duckduckgo.com/";
    };

    return (
        <Button variant="danger" onClick={handleQuickExit} aria-label="Quick exit">
            Quick Exit
        </Button>
    );
}