import { Outlet } from 'react-router-dom';
import SideBar from '../Components/SideBar.jsx';

export default function Layout() {
    return (
        <div className="flex min-h-screen bg-[--secondary]">
            <SideBar />
            <main className="flex-1 overflow-hidden">
                <Outlet />
            </main>
        </div>
    );
}
