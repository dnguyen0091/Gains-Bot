import ChatFeature from '../Components/ChatFeature';
import ProfileButton from '../Components/ProfileButton';
import SideBar from '../Components/SideBar';

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