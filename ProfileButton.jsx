import { useEffect, useRef, useState } from 'react';
import '../index.css';
import Settings from './Settings.jsx';

export default function ProfileButton() {
    const [profileActive, setProfileActive] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const ref = useRef(null);

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

    return (
        <>
            <div ref={ref} className="absolute top-0 right-0 p-[3rem] z-100 flex flex-col">
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg" onClick={toggleProfile}>
                    <img src="src/assets/Icons/profilePlaceholder.svg" alt="ProfilePlaceholder" className="w-[3vw]" />
                </button>
                <div className={profileActive ? "relative" : "hidden"}>
                    <ul className="absolute right-0 mt-2 w-48 bg-[--primary] rounded-md shadow-lg">
                        <li
                            className="px-4 py-2 hover:bg-[--accent] cursor-pointer"
                            onClick={() => { setSettingsOpen(true); setProfileActive(false); }}
                        >
                            Settings
                        </li>
                        <li className="px-4 py-2 hover:bg-[--accent] cursor-pointer">Logout</li>
                    </ul>
                </div>
            </div>

            {settingsOpen && <Settings onClose={() => setSettingsOpen(false)} />}
        </>
    );
}