import React, { useEffect, useRef, useState } from 'react';
import { API } from './API.jsx';
import './App.css'; // Ensure this file is correctly imported

function App() {
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
      <div className={`max-w-[70%] p-3 text-white ${
        isUser 
          ? 'bg-gray-700 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'
          : 'bg-gray-700 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'
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
    if (event.key === 'Enter') {
      handleSendClick();
    }
  };

  const handleSendClick = async () => {
    if (message.trim()) {
      const userMessage = { text: message, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      setMessage('');

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
    }
  };

  return (
    
    <div className="flex flex-row">

      <div className="flex justify-center items-center h-full w-full mt-16 mb-16 p-4">
        {/* Container holding Muscle Anatomy SVGS */}
        <div className="flex flex-col items-center w-full">
          <div className="flex w-full">
            <img src="src/assets/front.svg" alt="frontMuscleGroups" className="border-none" />
            <img src="src/assets/back.svg" alt="backMuscleGroups" className="border-none" />
          </div>
      </div>
      {/* Add a container for the chat messages */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div ref={chatContainerRef} className="displayChat border-2 border-solid border-gray-700 p-4 w-customBox h-customBox mb-0 overflow-y-scroll scrollbar-container">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        
        <div className="w-customBox max-w-2xl flex items-center border-2 border-solid border-gray-800 rounded-md p-0 mt-4">
          <input
            type="text"
            placeholder="Type a message"
            className="bg-lightGrey border-none p-2 w-full rounded-l-md focus:outline-none text-white"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="bg-blue-500 p-2 rounded-r-md flex items-center" onClick={handleSendClick}>
            <img src="src/assets/send.png" alt="send" className="w-10" />
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

// Footer component
function Footer() {
  return (
    <div className="bg-darkGrey2 flex justify-center items-center h-16 w-full fixed bottom-0 left-0 right-0">
      {/* container for the credits perhaps change it to a link to GitHub profile */}
      <div className="flex items-center gap-4">
        <img src="src/assets/github.png" alt="github" id="githubLogo" />
        <p className="text-white">Created by dnguyen0091</p>
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
