
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
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

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash-001",
            systemInstruction: `You are Siksha AI, the expert coding tutor for SikshaSarovar.com. 
        Your goal is to help students learn web development, programming, and computer science. 
        Keep answers concise, educational, and encouraging. 
        Use Markdown formatting for code snippets. 
        If a user asks about the platform, explain that SikshaSarovar is a premium e-learning destination featuring a sophisticated Dark Cyan themed workspace (#00828C).`
        });

        const chat = model.startChat({
            history: formattedHistory,
            generationConfig: {
                maxOutputTokens: 2000,
            },
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        const chunkSize = 20;
        for (let i = 0; i < text.length; i += chunkSize) {
            res.write(text.slice(i, i + chunkSize));
            await new Promise(r => setTimeout(r, 10));
        }
        res.end();

    } catch (error) {
        console.error('AI Error:', error);
        res.status(500).json({ error: 'AI Processing Failed', details: error.message });
    }
}
