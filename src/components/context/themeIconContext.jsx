import { useTheme } from './ThemeContext';

//Function to render an icon that changes based on the current theme
const ThemedIcon = ({ darkSrc, lightSrc, alt, className, ...props }) => {

    //check for the current theme and set the appropriate icon source
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Return the appropriate icon based on the current theme
    return (
        <img 
        src={isDark ? darkSrc : lightSrc} 
        alt={alt} 
        className={className}
        {...props}
        />
    );
};

export default ThemedIcon;

// Usage:
// <ThemedIcon 
//   darkSrc="src/assets/Icons/icon-dark.svg" 
//   lightSrc="src/assets/Icons/icon-light.svg"
//   alt="Icon"
//   className="w-6 h-6"
// />