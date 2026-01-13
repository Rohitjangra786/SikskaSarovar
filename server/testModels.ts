
import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("No API KEY found");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function list() {
    try {
        // The SDK structure might be different, let's try the generic way or handle error
        // For @google/genai, it's usually `ai.models.list()` or similar, but the SDK changes.
        // Let's try to just make a simple generation call to a known 'safe' model to test connectivity
        // or try to list if supported.

        // Actually, checking documentation or just trying 'gemini-1.5-flash-001' might be faster.
        // But let's try to list.

        console.log("Attempting to list models...");
        // Note: The specific method might vary by SDK version. 
        // If list() isn't standard in this specific minor version, we might fail.
        // Let's rely on standard 'gemini-pro' as a fallback test if list fails.

        // Using a generation test on multiple candidates
        const candidates = ['gemini-1.5-flash', 'gemini-1.5-flash-001', 'gemini-1.5-pro', 'gemini-pro'];

        for (const model of candidates) {
            console.log(`Testing model: ${model}`);
            try {
                const result = await ai.models.generateContent({
                    model: model,
                    contents: [{ role: 'user', parts: [{ text: 'Hello' }] }]
                });
                console.log(`SUCCESS: ${model} works!`);
                break;
            } catch (e) {
                console.log(`FAILED: ${model} - ${e.message.split('\n')[0]}`);
            }
        }
    } catch (err) {
        console.error("Script error:", err);
    }
}

list();
