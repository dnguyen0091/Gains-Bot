import ChatFeature from '../Components/ChatFeature.jsx';
import ProfileButton from '../Components/ProfileButton.jsx';
import SideBar from '../Components/SideBar.jsx';

export default function existingChat() {
    return (
        <div className="max-h-screen">
            <ProfileButton />
            <SideBar />
            <ChatFeature />
        </div>
    );
}