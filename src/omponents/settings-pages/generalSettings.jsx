import { useTheme } from '../Context/ThemeContext.jsx';

export default function GeneralSettings() {

    const {theme, setTheme} = useTheme();

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    }

    return (
        <>
            <h2 className="flex justify-start text-[1.25em] font-bold text-[--text-primary] mb-[1.5em] tracking-tight">Settings</h2>

                {/* Theme selection */}
                <div className="flex flex-row items-center justify-between w-full mb-[1.5em] gap-[1em]">
                    <label htmlFor="themeDropdown" className="text-[--text-primary] font-medium text-[1em]">Theme</label>
                    <select name="Select Theme" value={theme} id="themeDropdown" onChange={handleThemeChange} className="p-[0.5em] rounded-lg border-[0.07em] border-[--border] bg-[--primary] text-[--text-primary] focus:outline-none focus:ring-2 focus:ring-[--accent] transition-all duration-200 text-[1em]">
                        <option value="system">System</option>
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                    </select>
                </div>
        </>
        
    )

};