
import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyAYp06Lmc8Sij3jPB62_ETppT-LssNa2wU"; // Hardcoded for immediate testing

const ai = new GoogleGenAI({ apiKey });

const models = [
    'gemini-1.5-flash',
    'gemini-1.5-flash-001',
    'gemini-1.5-pro',
    'gemini-1.5-pro-001',
    'gemini-pro',
    'gemini-1.0-pro'
];

async function check() {
    console.log("Checking models with key: " + apiKey.slice(0, 5) + "...");

    for (const model of models) {
        process.stdout.write(`Testing ${model}... `);
        try {
            const response = await ai.models.generateContent({
                model: model,
                contents: [{ role: 'user', parts: [{ text: 'Hi' }] }]
            });
            console.log("SUCCESS ✅");
            console.log("Response snippet:", JSON.stringify(response).slice(0, 50));
            // Ensure logic allows us to see all working models, or stop at first? 
            // Let's stop at first working one to give user a quick fix.
            process.exit(0);
        } catch (e) {
            console.log("FAILED ❌");
            console.log(`  Error: ${e.message.split('\n')[0]}`);
        }
    }
    console.log("All models failed.");
}

check();
