import ChatFeature from '../Components/ChatFeature';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function ChatBotPage()
{
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <ChatFeature />
            <Footer />
        </div>
    );
}