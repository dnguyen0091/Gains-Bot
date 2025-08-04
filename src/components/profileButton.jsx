import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Settings from './Settings.jsx';
export default function ProfileButton() {
    const [profileActive, setProfileActive] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setProfileActive(false);
            }
        }
        if (profileActive) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileActive]);

    const toggleProfile = () => setProfileActive((prev) => !prev);

    const logout = () => {
        // Add logout logic here
        setProfileActive(false);

        navigate('/'); // Redirect to home page after logout
    };
    return (
        <>
            <div ref={ref} className="absolute top-0 right-0 p-[3rem] z-100 flex flex-col">
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg" onClick={toggleProfile}>
                    <img src="src/assets/Icons/profilePlaceholder.svg" alt="ProfilePlaceholder" className="w-[3vw]" />
                </button>
                <div className={profileActive ? "relative" : "hidden"}>
                    <ul className="absolute right-0 mt-2 w-48 bg-[--primary] border border-[--border] rounded-xl shadow-lg overflow-hidden">
                        <li>
                            <button
                                className="w-full text-left px-4 py-3 text-[--text-primary] hover:bg-[--accent] hover:text-white transition-colors duration-200 focus:outline-none focus:bg-[--accent] focus:text-white font-medium first:rounded-t-xl"
                                onClick={() => { setSettingsOpen(true); setProfileActive(false); }}
                                aria-label="Open Settings"
                            >
                                <div className="flex items-center gap-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                    </svg>
                                    Settings
                                </div>
                            </button>
                        </li>
                        <li>
                            <hr className="border-[--border] border-t-0 mx-4" />
                        </li>
                        <li>
                            <button
                                className="w-full text-left px-4 py-3 text-[--text-primary] hover:bg-red-500 hover:text-white transition-colors duration-200 focus:outline-none focus:bg-red-500 focus:text-white font-medium last:rounded-b-xl"
                                onClick={() => { logout(); }}
                                aria-label="Logout"
                            >
                                <div className="flex items-center gap-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Logout
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {settingsOpen && <Settings onClose={() => setSettingsOpen(false)} />}
        </>
    );
}