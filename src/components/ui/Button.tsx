"use client";
import React, { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
}

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
    const base = "inline-flex items-center gap-2 px-4 py-2 rounded-2xl shadow-sm transition-colors";
    const variants: Record<Variant, string> = {
        primary: "bg-sky-600 text-white hover:bg-sky-700",
        ghost: "bg-transparent text-slate-900 hover:bg-gray-100",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}