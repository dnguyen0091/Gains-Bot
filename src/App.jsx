import React, { useEffect, useRef, useState } from 'react';
import { API } from './API.jsx';
import './App.css';
import BackSvg from './assets/muscleAssets/Back/fullBodyBack.svg?react';
import FrontSvg from './assets/muscleAssets/Front/fullBodyFront.svg?react';

function App() {
  useEffect(() => {
    const frontSvg = document.querySelector(".frontSvg");
    const backSvg = document.querySelector(".backSvg");

    frontSvg.addEventListener('load', () => {
      checkMusclesUsed();
    });

    backSvg.addEventListener('load', () => {
      checkMusclesUsed();
    });
  }, []);

  const checkMusclesUsed = () => {
    // Define the logic for checking muscles used
    console.log('Checking muscles used...');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

// Header component
function Header() {
  return (
    <div className="bg-darkGrey2 flex justify-center items-center h-auto w-full fixed top-0 left-0 right-0">
      <img src="src/assets/Logo.png" alt="Logo" id="logo" />
      {/* <h1 className="text-center text-white">GainsBot</h1> */}
    </div>
  );
}

import PropTypes from 'prop-types';

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
function Body() {
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

// Footer component
function Footer() {
  return (
    <div className="bg-darkGrey2 flex justify-center items-center h-20 w-full fixed bottom-0 left-0 right-0">
      {/* container for the credits perhaps change it to a link to GitHub profile */}
      <div className="flex items-center gap-4">
        <img src="src/assets/github.png" alt="github" id="githubLogo" />
        <p className="text-white">Created by dnguyen0091©</p>
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



export default App;
