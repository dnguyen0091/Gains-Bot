import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { API } from '../API/API.jsx';
import '../App.css';
import BackSvg from '../assets/muscleAssets/Back/fullBodyBack.svg?react';
import FrontSvg from '../assets/muscleAssets/Front/fullBodyFront.svg?react';

const ChatMessage = ({ message }) => {
  const isUser = message.sender === "user";
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}>
      <div 
        className={`
          max-w-[75%] p-4 shadow-lg transform transition-all duration-300 ease-out hover:scale-[1.02]
          rounded-[20px] ${isUser ? 'rounded-br-[5px] ml-4' : 'rounded-bl-[5px] mr-4'}
          ${isUser ? 'animate-slide-in-right' : 'animate-slide-in-left'}
        `}
        style={{
          background: isUser 
            ? 'var(--gradient-primary)' 
            : 'linear-gradient(135deg, var(--tertiary), var(--secondary))',
          color: 'var(--text-primary)',
          borderColor: 'var(--border)'
        }}
      >
        <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {message.text}
        </div>
        {/* Message timestamp indicator */}
        <div 
          className={`text-xs mt-1 ${isUser ? 'text-right' : 'text-left'}`}
          style={{ color: 'var(--text-tertiary)' }}
        >
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

// Typing indicator component
const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div 
        className="rounded-[20px] rounded-bl-[5px] mr-4 p-4 shadow-lg border"
        style={{
          background: 'linear-gradient(135deg, var(--tertiary), var(--secondary))',
          borderColor: 'var(--border)'
        }}
      >
        <div className="flex items-center space-x-1">
          <div 
            className="text-sm mr-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            AI is typing
          </div>
          <div className="flex space-x-1">
            <div 
              className="w-2 h-2 rounded-full typing-indicator"
              style={{ backgroundColor: 'var(--text-tertiary)' }}
            ></div>
            <div 
              className="w-2 h-2 rounded-full typing-indicator"
              style={{ backgroundColor: 'var(--text-tertiary)' }}
            ></div>
            <div 
              className="w-2 h-2 rounded-full typing-indicator"
              style={{ backgroundColor: 'var(--text-tertiary)' }}
            ></div>
          </div>
        </div>
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
    <div className="flex space-between flex-row align-center mt-[20vh] overflow-hidden">
      {/* Muscle Anatomy Container */}
      <div className="w-[15vw]">
        <div className="muscleSvgCont">
          <FrontSvg className="frontSvg w-64 h-auto" />
          <BackSvg className="backSvg w-64 h-auto" />
        </div>
      </div>

      {/* Chat Container */}
      <div className="min-w-[25vw] flex flex-col items-center justify-center">        
        <div 
          ref={chatContainerRef} 
          className="h-[50vh] rounded-lg p-4 w-full mb-0 overflow-y-scroll scrollbar-container backdrop-blur-sm border"
          style={{
            background: 'linear-gradient(to bottom, var(--secondary), var(--tertiary))',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow)'
          }}
        >
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {loading && <TypingIndicator />}
        </div>
        <div 
          className="w-full max-w-2xl flex items-center rounded-xl p-0 mt-4 shadow-lg border"
          style={{
            background: 'linear-gradient(to right, var(--tertiary), var(--secondary))',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow)'
          }}
        >          <input 
            type="text" 
            placeholder="Type your message..." 
            className="rounded-xl border-none p-4 w-full focus:outline-none transition-all duration-200"
            style={{
              backgroundColor: 'var(--input-bg)',
              color: 'var(--input-text)',
              '::placeholder': { color: 'var(--text-tertiary)' }
            }}
            value={message} 
            onChange={handleInputChange} 
            onKeyPress={handleKeyPress} 
            disabled={loading}
          />
          <button 
            className="p-3 m-1 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            style={{
              background: 'var(--gradient-primary)',
              color: 'var(--button-text)'
            }}
            onClick={handleSendClick} 
            disabled={loading}
          >
            <img src="/src/assets/send.png" alt="send" className="w-6 h-6" />
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