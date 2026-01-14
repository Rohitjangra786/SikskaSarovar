
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        // ... (rest of the file content)
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    const { message, history } = req.body;

    if (!apiKey) {
        res.status(500).json({ error: 'Server Configuration Error: API_KEY is missing' });
        return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    try {
        const formattedHistory = (history || []).map(h => ({ role: h.role, parts: h.parts }));

        // FALLBACK TO gemini-pro WHICH IS USUALLY STABLE
        // If the user wants 1.5, we tried multiple and they failed (404).
        // gemini-pro is the safest bet for now.
        const model = genAI.getGenerativeModel({
            model: "gemini-pro",
            systemInstruction: `You are Siksha AI, the expert coding tutor for SikshaSarovar.com. 
        Your goal is to help students learn web development, programming, and computer science. 
        Keep answers concise, educational, and encouraging. 
        Use Markdown formatting for code snippets. 
        If a user asks about the platform, explain that SikshaSarovar is a premium e-learning destination featuring a sophisticated Dark Cyan themed workspace (#00828C).`
        });

        const chat = model.startChat({
            history: formattedHistory,
            // generationConfig defaults are usually fine
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        res.setHeader('Content-Type', 'text/plain; charset=utf-8');

        // Simple streaming simulation since SDK stream might differ or be simpler to just write all.
        // But let's try to stream properly if the SDK supports it, or just write chunks.
        // Actually, let's keep the previous valid logic which simulated streaming or used the result.
        // The previous code had a manual chunking loop, let's keep that for consistency.

        const chunkSize = 20;
        for (let i = 0; i < text.length; i += chunkSize) {
            res.write(text.slice(i, i + chunkSize));
            await new Promise(r => setTimeout(r, 10)); // simulate delay
        }
        res.end();

    } catch (error) {
        console.error('AI Error:', error);
        res.status(500).json({ error: 'AI Processing Failed', details: error.message });
    }
}
