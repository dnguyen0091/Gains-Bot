import { useState } from 'react';

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Sidebar width for animation
  const sidebarWidth = isCollapsed ? 'w-[4vw]' : 'w-[15vw]';

  return (
    <div
      className={`bg-[--primary] flex flex-col justify-between h-[100vh] fixed top-0 left-0 px-2 py-4 border-r transition-[width] duration-500 ease-in-out overflow-hidden ${sidebarWidth}`}
      style={{ borderColor: 'var(--border)', minWidth: isCollapsed ? '4vw' : '15vw', maxWidth: isCollapsed ? '4vw' : '15vw' }}
    >
      {/* Header */}
      <div className='flex flex-col'>
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} transition-all duration-500`}>
            <div className={`flex items-center gap-3 transition-all duration-500 ${isCollapsed ? 'justify-center w-full' : ''}`}>
              <img src="src/assets/Logo.png" alt="Logo" className="w-[4vw]" />
              <span className={`text-lg font-semibold text-[--text-primary] transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto ml-2'}`}>GainsBot</span>
            </div>
            <button
              onClick={() => setIsCollapsed((prev) => !prev)}
              className={`p-2 rounded-md hover:bg-[--tertiary] transition-colors duration-200 ml-2 ${isCollapsed ? '' : ''}`}
            >
              <img
                src={isCollapsed ? 'src/assets/Icons/sidebarExpand.svg' : 'src/assets/Icons/sidebarCollapse.svg'}
                alt={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
                className={`w-[2vw] transition-transform duration-300 ${isCollapsed ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </div>
          
          {/* Navigation */}
        <div className={`flex flex-col items-center gap-2 transition-all duration-500 ${isCollapsed ? 'space-y-4' : 'items-stretch'}`}>
          {/* Example nav items */}
          <button className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} p-2 rounded-lg hover:bg-[--tertiary] transition-all duration-200`}>
            <img src="src/assets/Icons/newChat.svg" alt="New Chat" className="w-[2vw]" />
            <span className={`text-[--text-secondary] transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto ml-2'}`}>New Chat</span>
          </button>
          <button className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} p-2 rounded-lg hover:bg-[--tertiary] transition-all duration-200`}>
            <img src="src/assets/Icons/history.svg" alt="History" className="w-[2vw]" />
            <span className={`text-[--text-secondary] transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto ml-2'}`}>Chat History</span>
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <div className={`flex items-center gap-2 p-2 transition-all duration-500 ${isCollapsed ? 'justify-center' : ''}`}>
        <a href="https://github.com/dnguyen0091" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110">
          <img src="src/assets/github.png" alt="GitHub" className="w-[2vw]" />
        </a>
        <a
          href="https://github.com/dnguyen0091"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xs text-[--text-primary] hover:text-[--accent] transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto ml-2'}`}
        >
          Created by dnguyen0091 ©
        </a>
      </div>
    </div>
  );
}