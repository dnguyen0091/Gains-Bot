import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    const context=useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        
        const applyThemeToDOM = (themeToApply) => {
            // Remove existing theme classes
            root.classList.remove('light', 'dark');
            
            // Apply the new theme class (but not for dark since it's the default)
            if (themeToApply === 'light') {
                root.classList.add('light');
            }
        };

        const determineTheme = (currentTheme) => {
            if (currentTheme === 'system') {
                return mediaQuery.matches ? 'dark' : 'light';
            }
            return currentTheme;
        };

        const effectiveTheme = determineTheme(theme);
        applyThemeToDOM(effectiveTheme);
        localStorage.setItem("theme", theme);

        const handleSystemThemeChange = (e) => {
            if (theme === "system") {
                const newEffectiveTheme = e.matches ? 'dark' : 'light';
                applyThemeToDOM(newEffectiveTheme);
            }
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
        };
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};