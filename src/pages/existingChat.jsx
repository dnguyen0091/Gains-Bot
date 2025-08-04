import ChatFeature from '../components/chatFeature.jsx';
import ProfileButton from '../components/profileButton.jsx';
import SideBar from '../components/sideBar.jsx';

export default function existingChat() {
    return (
        <div className="max-h-screen">
            <ProfileButton />
            <SideBar />
            <ChatFeature />
        </div>
    );
}