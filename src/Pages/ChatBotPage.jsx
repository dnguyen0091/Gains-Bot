import ChatFeature from '../Components/ChatFeature';
import ProfileButton from '../Components/ProfileButton';
import SideBar from '../Components/SideBar';
export default function ChatBotPage()
{
    return(
        <div className="max-h-screen">
            <ProfileButton />
            <SideBar />
            <ChatFeature />
        </div>
    );
}