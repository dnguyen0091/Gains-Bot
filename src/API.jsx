// Import necessary libraries
import OpenAI from 'openai';
import Key from './APIKey';
// Store the API key securely (Note: It's better to use environment variables for security)
const apiKey = Key();

// Initialize OpenAI with the API key
const openai = new OpenAI(apiKey);

// Function to call the OpenAI API
export async function API(prompt) {
    try {
        // Make a request to the OpenAI API
        const response = await openai.completions.create({
            model: "gpt-4o-mini", // Specify the model to use
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
        return response.data.choices[0].message.content;
    } catch (error) {
        // Handle any errors that occur during the API call
        console.error('OpenAI API Error:', error);
        throw new Error('Failed to get response from OpenAI');
    }
}




function input(string)
{

}


function recolor(svg,svg2)
{

}

