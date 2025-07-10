import SideBar from "../Components/SideBar";

export default function HistoryPage() {
    return (
        <div className="max-h-screen">
            <SideBar />
            <h1 className="text-2xl font-bold text-center mt-4">History Page</h1>
            <p className="text-center mt-2">This page will display the history of your chats.</p>
            {/* Add more content here as needed */}
        </div>
    );
}