'use client';

import { ThemeContext } from "@/contexts/ThemeContext";
import { use } from "react";

export function ToggleTheme() {
    const themeData = use(ThemeContext)

    if (!themeData) {
        return null; // or handle the error as needed
    }

    return (
        <div className="flex gap-2">
            <button
                onClick={() => themeData.setTheme('light')}
                className={themeData.theme === 'light' ? 'font-bold' : ''}
            >
                Light
            </button>
            <button
                onClick={() => themeData.setTheme('dark')}
                className={themeData.theme === 'dark' ? 'font-bold' : ''}
            >
                Dark
            </button>
            <button
                onClick={() => themeData.setTheme('system')}
                className={themeData.theme === 'system' ? 'font-bold' : ''}
            >
                System
            </button>
        </div>
    );
}
