
import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

// ... (previous functions remain)

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    const { messages } = req.body;
    const lastMessage = messages && messages.length > 0 ? messages[messages.length - 1].content : '';

    let useOfflineMode = false;
    let offlineResponse = '';

    // Check for API Keys (Google specific)
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY || process.env.VITE_API_KEY;

    if (!apiKey) {
        console.warn('No Google API key found, using offline mode');
        useOfflineMode = true;
    }

    if (!useOfflineMode) {
        try {
            const google = createGoogleGenerativeAI({
                apiKey: apiKey,
            });

            const result = streamText({
                model: google('gemini-1.5-pro-latest'),
                messages: messages,
                system: `You are Siksha AI, the expert coding tutor for SikshaSarovar.com. 
                Your goal is to help students learn web development, programming, and computer science. 
                Keep answers concise, educational, and encouraging. 
                Use Markdown formatting for code snippets. 
                If a user asks about the platform, explain that SikshaSarovar is a premium e-learning destination featuring a sophisticated Dark Cyan themed workspace (#00828C).`
            });

            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('X-AI-Mode', 'online');

            for await (const textPart of result.textStream) {
                res.write(textPart);
            }
            res.end();
            return;

        } catch (error) {
            console.error('AI SDK Error, falling back to offline mode:', error.message);
            useOfflineMode = true;
            offlineResponse = handleOfflineQuery(lastMessage);
        }
    }
    // ... (offline fallback remains)
    // Offline mode fallback
    if (useOfflineMode) {
        try {
            if (!offlineResponse) {
                offlineResponse = handleOfflineQuery(lastMessage);
            }

            // Add headers to indicate offline mode
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('X-AI-Mode', 'offline');

            // Stream the offline response
            const chunkSize = 20;
            for (let i = 0; i < offlineResponse.length; i += chunkSize) {
                res.write(offlineResponse.slice(i, i + chunkSize));
                await new Promise(r => setTimeout(r, 10));
            }
            res.end();

        } catch (offlineError) {
            console.error('Offline mode error:', offlineError);
            res.status(500).json({
                error: 'AI Processing Failed',
                details: 'Both online and offline modes failed. Please try again.'
            });
        }
    }
}
