import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './components/context/themeContext.jsx';
import { AuthProvider } from './context/authContext.jsx';
import ChatBotPage from './pages/ChatBotPage.jsx';
import ExistingChat from './pages/existingChat.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import HomePage from './pages/homePage.jsx';
import NotFound from './pages/notFound.jsx';

function App() {
  
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<HomePage />} />
            
            {/* App Routes */}
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