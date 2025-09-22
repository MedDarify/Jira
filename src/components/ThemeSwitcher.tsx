"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher({ className = "" }: { className?: string }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full border border-gray-300 dark:border-gray-700 
                  hover:bg-gray-200 dark:hover:bg-gray-800 transition ${className}`}
        >
            {theme === "dark" ? "🌙" : "☀️"}
        </button>
    );
}
