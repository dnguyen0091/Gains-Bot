import { useEffect } from 'react';
import './App.css';
import ChatBotPage from './Pages/ChatBotPage.jsx';

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
      <ChatBotPage />
  );
}
export default App;