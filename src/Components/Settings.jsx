import { useRef, useState } from 'react';
import { useTheme } from './Context/ThemeContext';

export default function Settings({ onClose }) {
    const [confirming, setConfirming] = useState(false);
    const timerRef = useRef(null);
    const {theme, setTheme} = useTheme();

    const handleClearClick = () => {
        if (!confirming) {
            setConfirming(true);
            timerRef.current = setTimeout(() => setConfirming(false), 2000);
        } else {
            clearTimeout(timerRef.current);
            setConfirming(false);
            // TODO: Add your clear chat logic here
            alert('Chat logs cleared! \n REMOVE THIS AFTER IMPLEMENTATION');
        }
    };


    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Grey overlay */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />
            {/* Popup content */}
            <div className="relative bg-[--secondary] border-[0.07em] border-[--border] rounded-2xl shadow-2xl p-[2.5em] min-w-[18em] w-[90vw] max-w-[25em] flex flex-col items-center z-10 animate-fade-in">
                <button className="absolute top-[1em] right-[1em] text-[--text-tertiary] hover:text-[--accent] text-[1.5em] font-bold p-[0.25em] rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[--accent]" onClick={onClose} aria-label="Close" >×</button>

                <h2 className="text-[1.25em] font-bold text-[--text-primary] mb-[1.5em] tracking-tight">Settings</h2>

                {/* Theme selection */}
                <div className="flex flex-row items-center justify-between w-full mb-[1.5em] gap-[1em]">
                    <label htmlFor="themeDropdown" className="text-[--text-primary] font-medium text-[1em]">Theme</label>
                    <select name="Select Theme" value={theme} id="themeDropdown" onChange={handleThemeChange} className="p-[0.5em] rounded-lg border-[0.07em] border-[--border] bg-[--primary] text-[--text-primary] focus:outline-none focus:ring-2 focus:ring-[--accent] transition-all duration-200 text-[1em]">
                        <option value="system">System</option>
                        <option value="Dark">Dark</option>
                        <option value="Light">Light</option>
                    </select>
                </div>

                {/* Clear Chat */}
                <div className="flex flex-row items-center justify-between w-full gap-[1em]">
                    <span className="text-[--text-primary] font-medium text-[1em]">Clear Chat</span>
                    <button
                        className={`min-w-[7em] flex items-center justify-center gap-2 py-[0.5em] px-[1.2em] rounded-lg border-[0.07em] font-semibold shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-[1em]
                            ${confirming
                                ? 'bg-red-600 text-white border-red-700 hover:bg-red-700'
                                : 'bg-[--primary] text-[--text-primary] border-[--border] hover:bg-red-600 hover:text-white border-red-600'}
                        `}
                        onClick={handleClearClick}
                        aria-live="polite"
                        aria-pressed={confirming}
                    >
                        {confirming ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[1em] w-[1em]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Confirm
                            </>
                        ) : (
                            'Clear'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}