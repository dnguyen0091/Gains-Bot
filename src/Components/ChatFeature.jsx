import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { API } from '../API/API.jsx';
import '../App.css';
import BackSvg from '../assets/muscleAssets/Back/fullBodyBack.svg?react';
import FrontSvg from '../assets/muscleAssets/Front/fullBodyFront.svg?react';

const ChatMessage = ({ message }) => {
  const isUser = message.sender === "user";
  
  // Debugging - Add more detailed console log
  console.log('Styles being applied:', {
    isUser,
    containerClass: `flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`,
    bubbleClass: `max-w-[70%] p-3 text-white ${
      isUser 
        ? 'bg-blue-500 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl'
        : 'bg-gray-700 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'
    }`
  });

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`chatBubble max-w-[70%] p-3 text-white ${
        isUser 
          ? 'rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl'
          : 'rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'
      }`}>
        {message.text}
      </div>
    </div>
  );
};



// Body component
export default function ChatFeature() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading,setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !loading) {
      handleSendClick();
    }
  };

  const handleSendClick = async () => {
    if (message.trim() && !loading) {
      const userMessage = { text: message, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      setMessage('');
      setLoading(true);
      try {
        const response = await API(userMessage.text);
        setMessages(prev => [...prev, { 
          text: response, 
          sender: 'api' 
        }]);
      } catch (error) {
        console.error('API Error:', error);
        setMessages(prev => [...prev, { 
          text: 'Sorry, I encountered an error. Please try again.', 
          sender: 'api' 
        }]);
      }
      finally
      {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bodyCont">
      {/* Muscle Anatomy Container */}
      <div className="muscleCont flex">
        <div className="muscleSvgCont">
          <FrontSvg className="frontSvg w-64 h-auto" />
          <BackSvg className="backSvg w-64 h-auto" />
        </div>
      </div>

      {/* Chat Container */}
      <div className="chatCont">
        <div ref={chatContainerRef} className="displayChat rounded p-4 w-full h-customBox mb-0 overflow-y-scroll scrollbar-container">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        
        <div className="w-full max-w-2xl flex items-center rounded-md p-0 mt-4">
          <input
            type="text"
            placeholder="Type a message"
            className="inputBar  border-none p-2 w-full rounded-l-md focus:outline-none color-white"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
          <button 
            className="bg-blue-500 p-2 rounded-r-md flex items-center" 
            onClick={handleSendClick}
            disabled={loading}
          >
            <img src="/src/assets/send.png" alt="send" className="w-10" />
          </button>
        </div>
      </div>
    </div>
  );
}



ChatMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired
  }).isRequired
};