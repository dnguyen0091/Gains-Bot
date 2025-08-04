import { useRef, useState } from 'react';

export default function PrivacySettings() {

    const [confirming, setConfirming] = useState(false);
    const timerRef = useRef(null);

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

    return (
        <>
            <div>
                <h2 className="flex justify-start text-[1.25em] font-bold text-[--text-primary] mb-[1.5em] tracking-tight">Privacy Settings</h2>
                {/* Clear Chat History */}
                    <div className="flex flex-row items-center justify-between w-full gap-[1em]">
                        <span className="text-[--text-primary] font-medium text-[1em]">Clear Chat History</span>
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
        </>
        
    );
};