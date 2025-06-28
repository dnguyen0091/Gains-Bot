import PropTypes from 'prop-types';
import { useState } from 'react';

// Closed Sidebar Component
const ClosedSidebar = ({ onExpand }) => {
  return (
    <div className="bg-[--primary] flex flex-col justify-between items-center h-[100vh] w-[4vw] fixed top-0 left-0 px-2 py-4 border-r transition-all duration-300 ease-in-out"
         style={{ borderColor: 'var(--border)' }}>
      {/* Logo and Expand Button */}
      <div className="flex flex-col items-center gap-4">
        <img src="src/assets/Logo.png" alt="Logo" className="w-8 h-8"/>
        <button 
          onClick={onExpand}
          className="p-2 rounded-md hover:bg-[--tertiary] transition-colors duration-200"
        >
          <img src="src/assets/Icons/sidebarExpand.svg" alt="Expand Sidebar" className="w-5 h-5"/>
        </button>
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col items-center gap-3">
        {/* Add your navigation icons here */}
        <button className="p-2 rounded-md hover:bg-[--tertiary] transition-colors duration-200">
          <div className="w-5 h-5 bg-[--text-secondary] rounded"></div>
        </button>
        <button className="p-2 rounded-md hover:bg-[--tertiary] transition-colors duration-200">
          <div className="w-5 h-5 bg-[--text-secondary] rounded"></div>
        </button>
      </div>

      {/* Footer Icons */}
      <div className="flex flex-col items-center gap-2">
        <a href="https://github.com/dnguyen0091" target="_blank" rel="noopener noreferrer"
           className="transition-transform duration-200 hover:scale-110">
          <img src="src/assets/github.png" alt="GitHub" className="w-6 h-6"/>
        </a>
      </div>
    </div>
  );
};

// PropTypes for ClosedSidebar
ClosedSidebar.propTypes = {
  onExpand: PropTypes.func.isRequired,
};

// Open Sidebar Component
const OpenSidebar = ({ onCollapse }) => {
  return (
    <div className="bg-[--primary] flex flex-col justify-between h-[100vh] w-[15vw] fixed top-0 left-0 px-4 py-4 border-r transition-all duration-300 ease-in-out"
         style={{ borderColor: 'var(--border)' }}>
      {/* Header */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="src/assets/Logo.png" alt="Logo" className="w-8 h-8"/>
            <span className="text-lg font-semibold text-[--text-primary]">GainsBot</span>
          </div>
          <button 
            onClick={onCollapse}
            className="p-2 rounded-md hover:bg-[--tertiary] transition-colors duration-200"
          >
            <img src="src/assets/Icons/sidebarCollapse.svg" alt="Collapse Sidebar" className="w-5 h-5"/>
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-[--tertiary] transition-colors duration-200 text-left">
            <div className="w-5 h-5 bg-[--text-secondary] rounded"></div>
            <span className="text-[--text-secondary]">New Chat</span>
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-[--tertiary] transition-colors duration-200 text-left">
            <div className="w-5 h-5 bg-[--text-secondary] rounded"></div>
            <span className="text-[--text-secondary]">Chat History</span>
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-[--tertiary] transition-colors duration-200 text-left">
            <div className="w-5 h-5 bg-[--text-secondary] rounded"></div>
            <span className="text-[--text-secondary]">Settings</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[--tertiary] transition-colors duration-200">
        <a href="https://github.com/dnguyen0091" target="_blank" rel="noopener noreferrer"
           className="transition-transform duration-200 hover:scale-110">
          <img src="src/assets/github.png" alt="GitHub" className="w-6 h-6"/>
        </a>
        <a href="https://github.com/dnguyen0091" target="_blank" rel="noopener noreferrer"
           className="text-xs text-[--text-primary] hover:text-[--accent] transition-colors duration-200">
          Created by dnguyen0091 ©
        </a>
      </div>
    </div>
  );
};

// PropTypes for OpenSidebar
OpenSidebar.propTypes = {
  onCollapse: PropTypes.func.isRequired,
};

// Main Sidebar Component
export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleExpand = () => setIsCollapsed(false);
  const handleCollapse = () => setIsCollapsed(true);

  return (
    <>
      {isCollapsed ? (
        <ClosedSidebar onExpand={handleExpand} />
      ) : (
        <OpenSidebar onCollapse={handleCollapse} />
      )}
    </>
  );
}