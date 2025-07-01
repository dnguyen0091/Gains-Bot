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
        
        const applyTheme = (currentTheme) => {
            if (currentTheme === 'System') {
                if (mediaQuery.matches) {
                    setTheme("dark");
                } else {
                    setTheme("light");
                }
            }
        };

        applyTheme(theme);
        localStorage.setItem("theme", theme);

        const handleSystemThemeChange = (e) => {
            if (theme === "System") {
                applyTheme('System');
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