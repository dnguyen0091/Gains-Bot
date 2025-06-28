import ChatFeature from '../Components/ChatFeature';
import SideBar from '../Components/SideBar';

export default function ChatBotPage()
{
    return(
        <div className="max-h-screen">
            <SideBar />
            <ChatFeature />
        </div>
    );
}