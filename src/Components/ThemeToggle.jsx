// Example ThemeToggle.jsx
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        const root = document.getElementById('root');
        if (isLight) {
        root.classList.add('light');
        } else {
        root.classList.remove('light');
        }
    }, [isLight]);

    return (
        <button
        onClick={() => setIsLight((v) => !v)}
        className="p-2 rounded bg-[--button-primary] text-[--button-text] hover:bg-[--button-primary-hover] transition"
        >
        {isLight ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}