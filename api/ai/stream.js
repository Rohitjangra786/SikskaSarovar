
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    const { message, history } = req.body;

    if (!apiKey) {
        res.status(500).json({ error: 'Server Configuration Error: API_KEY is missing' });
        return;
    }

    const ai = new GoogleGenAI({ apiKey });

    try {
        const formattedHistory = (history || []).map(h => ({ role: h.role, parts: h.parts }));
        // Add User Message
        const contents = [
            ...formattedHistory,
            { role: 'user', parts: [{ text: message }] }
        ];

        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash-001',
            contents,
            config: {
                systemInstruction: `You are Siksha AI, the expert coding tutor for SikshaSarovar.com. 
        Your goal is to help students learn web development, programming, and computer science. 
        Keep answers concise, educational, and encouraging. 
        Use Markdown formatting for code snippets. 
        If a user asks about the platform, explain that SikshaSarovar is a premium e-learning destination featuring a sophisticated Dark Cyan themed workspace (#00828C).`,
                temperature: 0.7,
            }
        });

        // Handle Response
        let text = '';
        if (typeof response === 'string') text = response;
        // @ts-ignore
        else if (response?.text) text = response.text;
        // @ts-ignore
        else if (response?.outputText) text = response.outputText;
        // @ts-ignore
        else if (response?.candidates && response.candidates[0]) {
            // @ts-ignore
            text = response.candidates[0].content || response.candidates[0].text || '';
        } else {
            text = JSON.stringify(response);
        }

        // Stream the text back (simulated stream for compatibility)
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
