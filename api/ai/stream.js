
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

// Inline offline search functionality to avoid module import issues
function searchCourses(query, maxResults = 5) {
    const COURSES_DATA = [
        {
            id: 'html',
            title: 'HTML',
            lessons: [
                { id: 'h1', title: 'HTML Introduction', keywords: ['html', 'introduction', 'hypertext', 'markup', 'web', 'pages'], content: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages. HTML describes the structure of a Web page semantically.', codeSnippet: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My First Heading</h1>\n  <p>My first paragraph.</p>\n</body>\n</html>' },
                { id: 'h3', title: 'HTML Basic Examples', keywords: ['html', 'basic', 'examples', 'doctype', 'headings', 'paragraphs', 'links'], content: 'Every HTML document must start with <!DOCTYPE html>. HTML headings are defined with <h1> to <h6> tags. HTML paragraphs are defined with the <p> tag.', codeSnippet: '<h1>This is a heading</h1>\n<p>This is a paragraph.</p>' },
                { id: 'h21', title: 'HTML Forms', keywords: ['html', 'forms', 'form', 'input', 'submit'], content: 'HTML forms are used to collect user input. The <form> element defines the form. The action attribute defines where to send the form data.', codeSnippet: '<form action="/submit">\n  <input type="text" name="name">\n  <input type="submit">\n</form>' }
            ]
        },
        {
            id: 'python',
            title: 'Python',
            lessons: [
                { id: 'p1', title: 'Python Intro', keywords: ['python', 'introduction', 'programming', 'language'], content: 'Python is a popular programming language created by Guido van Rossum. It is used for web development, software development, mathematics, and system scripting.', codeSnippet: 'print("Hello, World!")' },
                { id: 'p5', title: 'Python Variables', keywords: ['python', 'variables', 'storing', 'data'], content: 'Variables are containers for storing data values. Python has no command for declaring a variable. A variable is created when you assign a value to it.', codeSnippet: 'x = 5\ny = "Hello"\nprint(x)\nprint(y)' },
                { id: 'p19', title: 'Python Functions', keywords: ['python', 'functions', 'def', 'define', 'call'], content: 'A function is a block of code which only runs when it is called. You can pass data (parameters) into a function. In Python a function is defined using the def keyword.', codeSnippet: 'def my_function():\n  print("Hello from a function")\n\nmy_function()' }
            ]
        },
        {
            id: 'java',
            title: 'Java',
            lessons: [
                { id: 'j1', title: 'Java Intro', keywords: ['java', 'introduction', 'programming', 'oracle'], content: 'Java is a popular programming language created in 1995. It is owned by Oracle and used for mobile apps, desktop apps, web apps, and more.', codeSnippet: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}' },
                { id: 'j5', title: 'Java Variables', keywords: ['java', 'variables', 'string', 'int', 'float'], content: 'Variables are containers for storing data values. In Java, there are different types: String, int, float, char, and boolean.', codeSnippet: 'String name = "John";\nint myNum = 15;' }
            ]
        }
    ];

    if (!query) return [];
    const queryTokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);
    if (queryTokens.length === 0) return [];

    const results = [];
    COURSES_DATA.forEach(course => {
        course.lessons.forEach(lesson => {
            let score = 0;
            queryTokens.forEach(qToken => {
                if (lesson.title.toLowerCase().includes(qToken)) score += 10;
                if (lesson.keywords.some(k => k.includes(qToken))) score += 5;
                if (lesson.content.toLowerCase().includes(qToken)) score += 2;
            });
            if (score > 0) {
                results.push({ score, course: course.title, title: lesson.title, content: lesson.content, codeSnippet: lesson.codeSnippet });
            }
        });
    });

    return results.sort((a, b) => b.score - a.score).slice(0, maxResults);
}

function handleOfflineQuery(query) {
    const lowerQuery = query.toLowerCase();

    if (/^(hi|hello|hey)/i.test(lowerQuery)) {
        return "Hello! I'm SikshaSarovar AI. I'm here to help you learn web development, programming, and computer science. What would you like to learn about today?";
    }

    const results = searchCourses(query, 5);

    if (!results || results.length === 0) {
        return `I couldn't find specific information about "${query}" in the course library. Try asking about HTML, Python, Java, or other programming topics!`;
    }

    const topResult = results[0];
    let response = `Great question! Let me help you with that.\n\n**${topResult.title}** (from ${topResult.course} course)\n\n${topResult.content}\n\n`;

    if (topResult.codeSnippet) {
        response += `Here's an example:\n\`\`\`\n${topResult.codeSnippet}\n\`\`\`\n\n`;
    }

    if (results.length > 1) {
        response += `**Related Topics:**\n`;
        results.slice(1, 4).forEach((r, i) => {
            response += `${i + 1}. ${r.title} (${r.course})\n`;
        });
    }

    response += `\n💡 This response is from the SikshaSarovar offline knowledge base.`;
    return response;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    const { message, history } = req.body;

    // Try Gemini API first, fall back to offline if it fails
    let useOfflineMode = false;
    let offlineResponse = '';

    if (!apiKey) {
        console.warn('No API key found, using offline mode');
        useOfflineMode = true;
    }

    if (!useOfflineMode) {
        const genAI = new GoogleGenerativeAI(apiKey);

        try {
            const formattedHistory = (history || []).map(h => ({ role: h.role, parts: h.parts }));

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
            });

            const result = await chat.sendMessage(message);
            const response = await result.response;
            const text = response.text();

            // Add header to indicate online mode
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('X-AI-Mode', 'online');

            // Stream the response
            const chunkSize = 20;
            for (let i = 0; i < text.length; i += chunkSize) {
                res.write(text.slice(i, i + chunkSize));
                await new Promise(r => setTimeout(r, 10));
            }
            res.end();
            return;

        } catch (error) {
            console.error('Gemini API Error, falling back to offline mode:', error.message);
            useOfflineMode = true;
            offlineResponse = handleOfflineQuery(message);
        }
    }

    // Offline mode fallback
    if (useOfflineMode) {
        try {
            if (!offlineResponse) {
                offlineResponse = handleOfflineQuery(message);
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
