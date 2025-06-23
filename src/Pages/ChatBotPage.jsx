import ChatFeature from '../Components/ChatFeature';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function ChatBotPage()
{
    return(
        <div className="max-h-screen">
            <Header />
            <ChatFeature />
            <Footer />
        </div>
    );
}