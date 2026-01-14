
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error('No API_KEY or GEMINI_API_KEY found in .env');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
        // Checking if we can even instantiate it or if listModels is available on the client/genAI object
        // Actually listModels is likely unrelated to a specific model instance, but usually available via API.
        // The SDK might not expose listModels directly on the main class in all versions, 
        // but let's try a simple generation to see the specific error or if it works locally.

        console.log("Attempting to generate content with gemini-1.5-flash...");
        const result = await model.generateContent("Hello");
        console.log("Success! Response:", result.response.text());

    } catch (error) {
        console.error("Error with gemini-1.5-flash:", error.message);
    }
}

listModels();
