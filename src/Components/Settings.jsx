

export default function Settings({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Grey overlay */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            />
            {/* Popup content */}
            <div className="relative bg-[--secondary] rounded-xl shadow-2xl p-8 min-w-[320px] flex flex-col items-center z-10">
                <button className="absolute top-3 right-3 text-[--text-tertiary] hover:text-[--accent] text-xl" onClick={onClose} aria-label="Close" >×</button>
                <div>
                    <p className="mb-2 text-[--text-primary] font-semibold">Select Theme</p>
                    <select name="Select Theme" id="themeDropdown" className="p-2 rounded border bg-[--primary] text-[--text-primary] border-[--border] focus:outline-none">
                        <option value="system">System</option>
                        <option value="Dark">Dark</option>
                        <option value="Light">Light</option>
                    </select>
                </div>
            </div>
        </div>
    );
}