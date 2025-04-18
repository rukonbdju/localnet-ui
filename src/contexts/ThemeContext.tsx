'use client';

import { createContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('system');

    useEffect(() => {
        const stored = localStorage.getItem('theme') as Theme | null;
        const initialTheme = stored || 'system';
        applyTheme(initialTheme);
    }, []);

    function applyTheme(newTheme: Theme) {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        const root = document.documentElement;
        if (newTheme === 'dark') {
            root.classList.add('dark');
        } else if (newTheme === 'light') {
            root.classList.remove('dark');
        } else {
            localStorage.removeItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) root.classList.add('dark');
            else root.classList.remove('dark');
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme: applyTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
