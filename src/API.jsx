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
                    content: "You are a helpful fitness trainer who focuses on muscle hypertrophy techniques. You simplify complex fitness concepts for your clients."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7 // Optional parameter to control the randomness of the output
        });

        
        checkMusclesUsed();
        // Return the response content
        return response.choices[0].message.content;
    } catch (error) {
        // Handle any errors that occur during the API call
        console.error('OpenAI API Error:', error);
        throw new Error('Failed to get response from OpenAI');
    }
}

async function checkMusclesUsed() {
    const muscleList = {
        "biceps": "biceps",
        "gluteusmedius": "GluteusMedius",
        "lowerabsupper": "LowerAbsUpper",
        "peroneuslongus": "PeroneusLongus",
        "soleus": "Soleus",
        "calvesmedialhead": "CalvesMedialHead",
        "outerquads": "OuterQuads",
        "innerquads": "InnerQuads",
        "midquad": "MidQuad",
        "sartoriusinnerleg": "SartoriusInnerLeg",
        "pectiniusinnergroinmuscle": "PectiniusInnerGroinMuscle",
        "extensorforearmlower": "ExtensorForearmLower",
        "flexordigitoriumunderarm": "FlexorDigitoriumUnderArm",
        "brachioradialisforarmupper": "BrachioradialisForArmUpper",
        "forearmupper": "ForearmUpper",
        "upperabs": "UpperAbs",
        "lowerabs": "LowerAbs",
        "serratusanterior": "SerratusAnterior",
        "obliquesexternal": "ObliquesExternal",
        "bicepsbrachialis": "BicepsBrachialis",
        "sternocleids": "Sternocleids",
        "scm": "Scm",
        "fronttraps": "FrontTraps",
        "tricepslonghead": "TricepsLongHead",
        "bicepsbrachii": "BicepsBrachii",
        "deltoidsfront": "DeltoidsFront",
        "pecs": "Pecs",
        "tricepslateralhead": "TricepsLateralHead",
        "rhomboidmajor": "RhomboidMajor",
        "semimembranosis": "Semimembranosis",
        "traps": "Traps",
        "calves": "Calves",
        "delts": "Delts",
        "middleandlowertraps": "MiddleAndLowerTraps",
        "infraspinatus": "Infraspinatus",
        "teresmajor": "TeresMajor",
        "lats": "Lats",
        "triceps": "Triceps",
        "obliques": "Obliques",
        "upperoblilques": "UpperOblilques",
        "extensorcarpi": "ExtensorCarpi",
        "extensordigitorum": "ExtensorDigitorum",
        "extensorcarpiulnaris": "ExtensorCarpiUlnaris",
        "gluteusmaximus": "GluteusMaximus",
        "semitedinosis": "SemiTedinosis",
        "upperinnerhamstring": "UpperInnerHamstring",
        "bicepsfemoris": "BicepsFemoris",
    };

    const prompt = `Based on the last question, list the muscles used as follows:
    Primary: [muscle names]
    Secondary: [muscle names]
    Only use muscles from this list: ${Object.keys(muscleList).join(', ')}`;

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
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
        temperature: 0.7
    });

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

    const primary = primaryMuscles.map(muscle => muscleList[muscle]);
    const secondary = secondaryMuscles.map(muscle => muscleList[muscle]);

    console.log('Primary:', primary);
    console.log('Secondary:', secondary);
    recolor(primary, secondary);
}


function recolor(primary, secondary) {
    try {
        const frontSvg = document.querySelector(".frontSvg");
        const backSvg = document.querySelector(".backSvg");

        if (frontSvg && backSvg) {
            // Reset all paths to default class (st0)
            document.querySelectorAll('[class^="st"]').forEach(path => {
                path.setAttribute("class", "st0");
            });

            // Color primary muscles with st1 class
            primary.forEach(muscle => {
                // Front view
                const frontElement = frontSvg.querySelector(`#${muscle}`);
                if (frontElement) {
                    frontElement.setAttribute("class", "st1");
                }

                // Back view
                const backElement = backSvg.querySelector(`#${muscle}`);
                if (backElement) {
                    backElement.setAttribute("class", "st1");
                }
            });

            // Color secondary muscles with st2 class
            secondary.forEach(muscle => {
                // Front view
                const frontElement = frontSvg.querySelector(`#${muscle}`);
                if (frontElement) {
                    frontElement.setAttribute("class", "st2");
                }

                // Back view
                const backElement = backSvg.querySelector(`#${muscle}`);
                if (backElement) {
                    backElement.setAttribute("class", "st2");
                }
            });
        }
    } catch (err) {
        console.error('Error recoloring muscles:', err);
    }
}
