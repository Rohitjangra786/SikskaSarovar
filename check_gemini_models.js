
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error('No API KEY found');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function checkModel(modelName) {
    try {
        console.log(`Checking ${modelName}...`);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("Hello");
        console.log(`SUCCESS: ${modelName} is working.`);
        return true;
    } catch (error) {
        console.log(`FAILED: ${modelName} - ${error.message}`);
        return false;
    }
}

async function main() {
    const modelsToTry = [
        "gemini-1.5-flash",
        "gemini-1.5-flash-001",
        "gemini-1.5-flash-latest",
        "gemini-pro",
        "gemini-1.0-pro",
        "models/gemini-1.5-flash"
    ];

    console.log("Testing models...");
    for (const m of modelsToTry) {
        await checkModel(m);
    }
}

main();
