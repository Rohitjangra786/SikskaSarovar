
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
                
                **Platform Overview:**
                SikshaSarovar is a premium e-learning destination featuring a sophisticated Dark Cyan themed workspace (#00828C).
                
                **Available Courses & Curriculum:**
                You have access to the following courses. Use this context to answer student queries accurately.

                1. **Foundation of C & C++**:
                   - Covers C basics, Syntax, Pointers, Memory Management.
                   - Transition to C++ with OOPs (Classes, Objects, Inheritance, Polymorphism).
                
                2. **HTML (HyperText Markup Language)**:
                   - Web Structure, Semantic Tags, Forms, Tables, Media integration.
                   - SEO best practices and Accessibility.

                3. **CSS (Cascading Style Sheets)** - *Newly Added!*:
                   - **34 Detailed Modules**: From Zero to Hero.
                   - Topics: Selectors, Box Model, Colors, Fonts, Flexbox, Grid, Animations, Transitions, Responsive Design (Media Queries), and Printing.

                4. **Basics of Python**:
                   - Modern syntax, Data Structures (Lists, Dicts), Automation.
                   - Intro to Libraries (NumPy, Pandas) and Scripting.

                5. **Java Full Course**:
                   - Core Java, OOPs, Exception Handling, Collections Framework.
                   - Multi-reading and Advanced concepts.

                6. **PHP**:
                   - Server-side scripting, Form handling, Database connectivity (SQL).
                
                7. **Artificial Intelligence (AI)**:
                   - Core concepts, Neural Networks, Ethics, Future trends.

                8. **Machine Learning (ML)**:
                   - Algorithms (Regression, Classification), Model Training, Data Analysis.

                **College Specific Courses:**
                9. **Disaster Management (DMP)**: Disaster cycles, Mitigation strategies, Case studies.
                10. **Web Based Programming (WBP)**: Advanced Web Architecture, PHP Deep Dives.
                11. **Data Visualization (DVA)**: Charts, Graphs, Visual storytelling with data.

                **Guidelines:**
                - Keep answers concise, educational, and encouraging.
                - ALWAYS use Markdown formatting for code snippets.
                - If asked about a specific course, refer to the topics listed above.
                - Be friendly and professional.
                `
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
