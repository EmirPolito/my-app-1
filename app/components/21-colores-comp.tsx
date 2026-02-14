"use client";

import { useState, useEffect } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/21-colores-ui";

type Theme = "light" | "dark" | "colorblind";
type ColorTheme = "orange" | "blue" | "green" | "violet" | "rose" | "yellow";

// Sun icon for light mode
const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
    </svg>
);

// Moon icon for dark mode
const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
);

// Eye icon for colorblind mode
const ColorblindIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 12 2 2" />
    </svg>
);

export function ThemeSwitcher() {
    // Get initial theme and color from localStorage synchronously to avoid flash
    let initialTheme: Theme = "light";
    let initialColor: ColorTheme | "neutro" = "neutro";
    if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const savedColor = localStorage.getItem("color") as ColorTheme | "neutro" | null;
        if (savedTheme) initialTheme = savedTheme;
        if (savedColor) initialColor = savedColor;
        else {
            // Set 'neutro' as the default color in localStorage and on the document
            localStorage.setItem("color", "neutro");
            document.documentElement.setAttribute("data-color", "neutro");
        }
    }
    const [theme, setTheme] = useState<Theme>(initialTheme);
    const [color, setColor] = useState<ColorTheme | "neutro">(initialColor);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const savedColor = localStorage.getItem("color") as ColorTheme | null;
        if (savedTheme) setTheme(savedTheme);
        if (savedColor) setColor(savedColor);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute("data-theme", theme);
            document.documentElement.setAttribute("data-color", color);
            localStorage.setItem("theme", theme);
            localStorage.setItem("color", color);
        }
    }, [theme, color, mounted]);

    // Don't render anything until mounted to avoid hydration mismatch
    if (!mounted) {
        return null;
    }

    // Cycle through themes: light -> dark -> colorblind -> light
    const cycleTheme = () => {
        const themeOrder: Theme[] = ["light", "dark", "colorblind"];
        const currentIndex = themeOrder.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themeOrder.length;
        setTheme(themeOrder[nextIndex]);
    };

    // Get current icon based on theme
    const getCurrentIcon = () => {
        switch (theme) {
            case "light":
                return <SunIcon />;
            case "dark":
                return <MoonIcon />;
            case "colorblind":
                return <ColorblindIcon />;
        }
    };

    // Get current theme label
    const getThemeLabel = () => {
        switch (theme) {
            case "light":
                return "Modo Claro";
            case "dark":
                return "Modo Oscuro";
            case "colorblind":
                return "Modo Daltónico";
        }
    };

    return (
        <div className="flex gap-3 items-center">
            {/* Theme Mode Button */}
            <button
                onClick={cycleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border-2 bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg hover:scale-110 active:scale-95"
                title={getThemeLabel()}
                aria-label={getThemeLabel()}
            >
                {getCurrentIcon()}
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-[var(--divider-color)]" />
            <Select value={color} onValueChange={(value) => setColor(value as ColorTheme)}>
                <SelectTrigger className="h-8 w-28 text-xs cursor-pointer">
                    <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent>
                     <SelectItem value="light" className="text-xs">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full" />
                            Neutro
                        </span>
                    </SelectItem>
                    <SelectItem value="orange" className="text-xs">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                            Naranja
                        </span>
                    </SelectItem>
                    <SelectItem value="blue" className="text-xs">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                            Azul
                        </span>
                    </SelectItem>
                    <SelectItem value="green" className="text-xs">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            Verde
                        </span>
                    </SelectItem>
                    <SelectItem value="violet" className="text-xs">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                            Violeta
                        </span>
                    </SelectItem>
                    <SelectItem value="rose" className="text-xs">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                            Rosa
                        </span>
                    </SelectItem>
                    <SelectItem value="yellow" className="text-xs">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                            Amarillo
                        </span>
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
