import ChatFeature from '../components/chatFeature.jsx';
import ProfileButton from '../components/profileButton.jsx';
import SideBar from '../components/sideBar.jsx';

export default function ChatBotPage() {
    console.log('ChatBotPage is rendering'); // Debug log
    
    return (
        <div className="max-h-screen bg-[--secondary]">
            <ProfileButton />
            <SideBar />
            <ChatFeature />
        </div>
    );
}