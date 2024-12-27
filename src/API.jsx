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

        resetMuscleColor();
        checkMusclesUsed();
        // Return the response content
        return response.choices[0].message.content;
    } catch (error) {
        // Handle any errors that occur during the API call
        console.error('OpenAI API Error:', error);
        throw new Error('Failed to get response from OpenAI');
    }
}

async function checkMusclesUsed()
{
    //List of all muscle groups in the body

    const muscleList = {
        "biceps": "biceps", //mapping keyword to muscle group ID


    };
    //Check which are being used in the prompt
    const prompt = `Based on the last question, list the muscles used as follows:
    Primary: [muscle names]
    Secondary: [muscle names]
    Only use muscles from this list: ${muscleList}`;
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Specify the model to use

        messages: [
            {
                role: "system",
                content: "You are a helpful fitness trainer. Respond only with Primary and Secondary muscle lists."
            },
            {
                role: "user",
                content: prompt
            }
        ],
        temperature: 0.7 // Optional parameter to control the randomness of the output
        });

        //If a muscle is used, add it to an array
        const primaryMuscles = [];
        const secondaryMuscles = [];
        const musclesUsed = response.choices[0].message.content;
        
        const primaryMatch = musclesUsed.match(/Primary:\s*(.*?)(?=\n|$)/i);
        const secondaryMatch = musclesUsed.match(/Secondary:\s*(.*?)(?=\n|$)/i);

        if (primaryMatch) {
            const primaryList = primaryMatch[1].split(',').map(m => m.trim().toLowerCase());
            primaryMuscles.push(...primaryList.filter(muscle => muscleList[muscle]));
          }
        
          if (secondaryMatch) {
            const secondaryList = secondaryMatch[1].split(',').map(m => m.trim().toLowerCase());
            secondaryMuscles.push(...secondaryList.filter(muscle => muscleList[muscle]));
          }

        const primary= primaryMuscles.map(muscle => muscleList);
        const secondary= secondaryMuscles.map(muscle => muscleList);
        

        recolor(primary, secondary);
        
        //Call recolor function with the array of muscles
    

    


}


function recolor(primary,secondary)
{
    // Recolor the muscles in the image

    // Get the muscle images

    // Recolor the primary muscles

    // Recolor the secondary muscles


}


function resetMuscleColor()
{
    // Reset the muscle colors to the default

    // Get the muscle images

    // Reset the muscle colors
}
