
import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY || process.env.API_KEY;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    const { message, history } = req.body;

    if (!apiKey) {
        res.status(500).json({ error: 'Server Configuration Error: API_KEY/OPENAI_API_KEY is missing' });
        return;
    }

    const openai = new OpenAI({
        apiKey: apiKey,
    });

    try {
        const formattedHistory = (history || []).map(h => ({
            role: h.role === 'model' ? 'assistant' : h.role,
            content: h.parts
        }));

        const systemMessage = {
            role: "system",
            content: `You are Siksha AI, the expert coding tutor for SikshaSarovar.com. 
        Your goal is to help students learn web development, programming, and computer science. 
        Keep answers concise, educational, and encouraging. 
        Use Markdown formatting for code snippets. 
        If a user asks about the platform, explain that SikshaSarovar is a premium e-learning destination featuring a sophisticated Dark Cyan themed workspace (#00828C).`
        };

        const messages = [systemMessage, ...formattedHistory, { role: "user", content: message }];

        const stream = await openai.chat.completions.create({
            model: "gpt-4o-mini", // Cost effective and fast
            messages: messages,
            stream: true,
            max_tokens: 2000,
        });

        res.setHeader('Content-Type', 'text/plain; charset=utf-8');

        for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || "";
            if (content) {
                res.write(content);
            }
        }
        res.end();

    } catch (error) {
        console.error('AI Error:', error);
        res.status(500).json({ error: 'AI Processing Failed', details: error.message });
    }
}
