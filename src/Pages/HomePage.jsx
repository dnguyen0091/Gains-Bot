import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthModal from '../Components/AuthModal.jsx';
import { useTheme } from '../Components/Context/ThemeContext.jsx';
import ThemeToggle from '../Components/ThemeToggle.jsx';

const HomePage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setAuthMode('register');
    setShowAuthModal(true);
  };

  const handleSignIn = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleTryDemo = () => {
    navigate('/chat');
  };

  return (
    <div className="h-[100vh] bg-gradient-to-br from-primary via-secondary to-tertiary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-accent-hover rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <div className="flex items-center space-x-3">
          <img 
            src={theme === 'dark' ? "/src/assets/Logo/Logo.png" : "/src/assets/Logo/LogoLightMode.webp"} 
            alt="GainsBot Logo" 
            className="h-12 w-12 rounded-lg shadow-lg"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
            Gains<span className="text-accent">Bot</span>
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={handleSignIn}
            className="px-4 py-2 text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-8 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Your AI-Powered
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                Fitness Coach
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              Get personalized workout recommendations, track your progress, and achieve your fitness goals with the power of artificial intelligence.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up animation-delay-300">
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-input-border hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-accent text-3xl mb-4">🎯</div>
              <h3 className="text-text-primary font-semibold mb-2">Personalized Plans</h3>
              <p className="text-text-tertiary">AI-generated workouts tailored to your goals and fitness level</p>
            </div>
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-input-border hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-accent text-3xl mb-4">📊</div>
              <h3 className="text-text-primary font-semibold mb-2">Progress Tracking</h3>
              <p className="text-text-tertiary">Monitor your gains and stay motivated with detailed analytics</p>
            </div>
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-input-border hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-accent text-3xl mb-4">💬</div>
              <h3 className="text-text-primary font-semibold mb-2">Smart Coaching</h3>
              <p className="text-text-tertiary">Get instant answers to your fitness questions anytime</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-accent to-accent-hover text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Get Started Free
            </button>
            <button
              onClick={handleTryDemo}
              className="px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-xl transition-all duration-300 text-lg"
            >
              Try Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-900">
            <div className="text-center">
              <div className="text-3xl font-bold text-text-primary mb-1">AI-Powered</div>
              <div className="text-text-tertiary">Smart Recommendations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text-primary mb-1">24/7</div>
              <div className="text-text-tertiary">Available Anytime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text-primary mb-1">Personalized</div>
              <div className="text-text-tertiary">Custom Workouts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text-primary mb-1">Free</div>
              <div className="text-text-tertiary">No Hidden Costs</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center text-text-tertiary">
        <p>&copy; 2025 GainsBot. Powered by AI for your fitness journey.</p>
      </footer>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          mode={authMode}
          onModeChange={setAuthMode}
        />
      )}
    </div>
  );
};

export default HomePage;
