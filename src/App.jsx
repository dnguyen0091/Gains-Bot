import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './Components/Context/ThemeContext.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';
import ChatBotPage from './Pages/ChatBotPage.jsx';
import ExistingChat from './Pages/ExistingChat.jsx';
import HistoryPage from './Pages/HistoryPage.jsx';
import NotFound from './Pages/NotFound.jsx';

function App() {
  // useEffect(() => {
  //   const frontSvg = document.querySelector(".frontSvg");
  //   const backSvg = document.querySelector(".backSvg");

  //   frontSvg.addEventListener('load', () => {
  //     checkMusclesUsed();
  //   });

  //   backSvg.addEventListener('load', () => {
  //     checkMusclesUsed();
  //   });
  // }, []);

  // const checkMusclesUsed = () => {
  //   // Define the logic for checking muscles used
  //   console.log('Checking muscles used...');
  // };

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Direct routes without layout wrapper */}
            <Route path="/" element={<ChatBotPage />} />
            <Route path="/chat" element={<ChatBotPage />} />
            <Route path="/chat/:chatId" element={<ExistingChat />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/existing-chat" element={<ExistingChat />} />
            
            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;