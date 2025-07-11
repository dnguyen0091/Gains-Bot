import PropTypes from 'prop-types';
import { useState } from 'react';
import AccountSettings from './Settings Pages/AccountSettings.jsx';
import GeneralSettings from './Settings Pages/GeneralSettings.jsx';
import PrivacySettings from './Settings Pages/PrivacySettings.jsx';
export default function Settings({ onClose }) {
    const [activeTab, setActiveTab] = useState('general');
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Grey overlay */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />
            {/* Popup content */}
            <div className="relative bg-[--secondary] border-[0.07em] border-[--border] rounded-2xl shadow-2xl w-[50vw] max-w-[60em] min-h-[30em] flex flex-row overflow-hidden z-10 animate-fade-in">

                {/* Tab Sidebar - 40% width */}
                <div className="w-[40%] bg-[--primary] border-r border-[--border] flex flex-col">
                    {/* Close button */}
                    <div className="flex justify-end p-4 border-b border-[--border]">
                        <button 
                            onClick={onClose} 
                            aria-label="Close"
                            className="text-[--text-tertiary] hover:text-[--accent] text-xl font-bold p-2 rounded-lg hover:bg-[--tertiary] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[--accent]"
                        >
                            ×
                        </button>
                    </div>

                    {/* Settings Title */}
                    <div className="px-6 py-4 border-b border-[--border]">
                        <h2 className="text-lg font-semibold text-[--text-primary]">Settings</h2>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-col p-2 gap-1">
                        <button 
                            onClick={() => setActiveTab('general')}
                            className={`flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 font-medium ${
                                activeTab === 'general' 
                                    ? 'bg-[--accent] text-white shadow-md' 
                                    : 'text-[--text-secondary] hover:bg-[--tertiary] hover:text-[--text-primary]'
                            }`}
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                            </svg>
                            General
                        </button>
                        
                        <button 
                            onClick={() => setActiveTab('account')}
                            className={`flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 font-medium ${
                                activeTab === 'account' 
                                    ? 'bg-[--accent] text-white shadow-md' 
                                    : 'text-[--text-secondary] hover:bg-[--tertiary] hover:text-[--text-primary]'
                            }`}
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Account
                        </button>

                        <button 
                            onClick={() => setActiveTab('privacy')}
                            className={`flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 font-medium ${
                                activeTab === 'privacy' 
                                    ? 'bg-[--accent] text-white shadow-md' 
                                    : 'text-[--text-secondary] hover:bg-[--tertiary] hover:text-[--text-primary]'
                            }`}
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Privacy
                        </button>
                    </div>
                </div>

                {/* Content Area - 60% width */}
                <div className="w-[60%] bg-[--secondary] p-6 overflow-y-auto">
                    {activeTab === 'general' && <GeneralSettings />}
                    {activeTab === 'account' && (<AccountSettings />)}
                    {activeTab === 'privacy' && (<PrivacySettings />)}
                </div>
                
            </div>
        </div>
    );
}

Settings.propTypes = {
    onClose: PropTypes.func.isRequired,
};