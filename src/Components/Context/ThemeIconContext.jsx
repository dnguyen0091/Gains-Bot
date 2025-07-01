// src/components/ThemedIcon.jsx
import { useTheme } from '../contexts/ThemeContext';

export const ThemedIcon = ({ darkSrc, lightSrc, alt, className, ...props }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    return (
        <img 
        src={isDark ? darkSrc : lightSrc} 
        alt={alt} 
        className={className}
        {...props}
        />
    );
};

// Usage:
// <ThemedIcon 
//   darkSrc="src/assets/Icons/icon-dark.svg" 
//   lightSrc="src/assets/Icons/icon-light.svg"
//   alt="Icon"
//   className="w-6 h-6"
// />