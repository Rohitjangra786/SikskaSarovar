
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error('No API_KEY or GEMINI_API_KEY found in .env');
    process.exit(1);
}

const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

async function listModels() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Available Models:");
        if (data.models) {
            data.models.forEach(model => {
                // Filter for models that likely support generation
                if (model.supportedGenerationMethods && model.supportedGenerationMethods.includes('generateContent')) {
                    console.log(`- ${model.name} (${model.displayName})`);
                }
            });
        } else {
            console.log("No models property in response:", data);
        }
    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
