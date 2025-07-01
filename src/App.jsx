import { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './Components/Context/ThemeContext.jsx';
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
    <ThemeProvider>
      <div className="App">
        <ChatBotPage />
      </div>
    </ThemeProvider>
  );
}
export default App;