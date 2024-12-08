// API.jsx
import OpenAI from 'openai';
import { Key } from './APIKey'; // Ensure correct import

// Initialize OpenAI with the API key
const openai = new OpenAI({ apiKey: Key() , dangerouslyAllowBrowser: true});

// Function to call the OpenAI API
export async function API(prompt) {
    try {
        // Make a request to the OpenAI API
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Specify the model to use
            messages: [
                {
                    role: "system",
                    content: "You are a helpful fitness trainer who focuses on muscle hypertrophy techniques."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7 // Optional parameter to control the randomness of the output
        });

        // Return the response content
        return response.choices[0].message.content;
    } catch (error) {
        // Handle any errors that occur during the API call
        console.error('OpenAI API Error:', error);
        throw new Error('Failed to get response from OpenAI');
    }
}





// function recolor(svg, muscleGroups) {
//     // Assuming muscleGroups is an array of muscle names to highlight
//     const muscleColors = {
//         primary: "#ff0000",    // Red for primary muscles
//         secondary: "#ff9999"   // Light red for secondary muscles
//     };

//     try {
//         // Get all muscle group paths within the SVG
//         const musclePaths = svg.querySelectorAll('path[data-muscle]');
        
//         // Reset all muscles to default color
//         musclePaths.forEach(path => {
//             path.style.fill = "#cccccc"; // Default gray
//         });

//         // Highlight specified muscle groups
//         muscleGroups.forEach(muscle => {
//             const musclePath = svg.querySelector(`path[data-muscle="${muscle.name}"]`);
//             if (musclePath) {
//                 musclePath.style.fill = muscle.isPrimary ? muscleColors.primary : muscleColors.secondary;
//             }
//         });
//     } catch (error) {
//         console.error('Error recoloring SVG:', error);
//     }
// }

// // Usage example:
// const muscleGroups = [
//     { name: "biceps", isPrimary: true },
//     { name: "forearms", isPrimary: false }
// ];



