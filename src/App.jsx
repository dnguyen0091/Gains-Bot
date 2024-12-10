import React, { useState } from 'react';
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


//header component
function Header()
{
  return(
    <div className="bg-darkGrey2 flex justify-center items-center h-auto w-full fixed top-0 left-0 right-0">
      <img src="src/assets/Logo.webp" alt="Logo" id="logo" />
      {/* <h1 className="text-center text-white">GainsBot</h1> */}
    </div>
  );
}

function Body()
{

  
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  //Function to handle input change
  const handleInputChange = (event) =>
  {
    setMessage(event.target.value);  //Update the message state with the input value
  };


  //Function handles the send button being clicked
  const handleSendClick = () =>
    {
    
    //Checks for empty input
    if (message.trim()) 
    {
      //Set the input to a new message object
      const newestMessage = { text: message, sender: 'user' };

      // Update the state with the user's message
      setMessages(prevMessages => [...prevMessages, newestMessage]);


      // Clear the input field
      setMessage('');


      // Call the API with the user's message
      API(newestMessage.text).then((response) =>
      {
        // Update the state with the API's response
        setMessages(prevMessages => [...prevMessages, { text: response, sender: 'api' }]);
      }).catch((error) =>
      {
        // Error alert if API fails
        console.error('API Error:', error);
      });


      //Debugging message for API response
      setTimeout(() =>
      {
        setMessages(prevMessages => [...prevMessages, { text: 'This is a response from the API', sender: 'api' }]);
      }, 1000);
    }
  };

  //Handles the enter key being pressed
  const handleKeyPress = (event) =>
  {
    if (event.key === 'Enter')
    {
      handleSendClick();
    }
  };

  return (
    //Body component container
    <div className="flex justify-center items-center h-full w-full mt-16 mb-16 p-4">

      {/* Container holding Muscle Anatomy SVGS */}
      <div className="flex flex-col items-center w-full">
        <div className="flex w-full">
          <img src="src/assets/front.svg" alt="frontMuscleGroups" className="border-none" />
          <img src="src/assets/back.svg" alt="backMuscleGroups" className="border-none" />
        </div>
      </div>

      {/* Container Holding various chat parts */}
      <div className="flex flex-col items-center h-full p-4 w-full">

        {/* Chat Display */}
        <div className="displayChat border-2 border-solid border-gray-700 p-4 w-customBox h-customBox mb-0">
          <h1 className="text-xl text-center">Body</h1>
          {/* helps map inputs users make to chat */}
          <div className="messages items-end">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.text}
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat Input */}
        <div className="w-customBox max-w-2xl flex items-center border-2 border-solid border-gray-800 rounded-md p-0">
          <input
            type="text"
            placeholder="Type a message"
            className="border-none p-2 w-full rounded-l-md focus:outline-none"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          {/* Send Button */}
          <button className="bg-blue-500 text-white p-2 rounded-r-md flex items-center" onClick={handleSendClick}>
            <img src="src/assets/send.svg" alt="send" className="w-10" />
          </button>
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

export default App;
