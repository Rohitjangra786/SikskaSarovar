import 'dotenv/config';
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { COURSES } from '../constants';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

// Inline offline search functionality
function searchCourses(query: string, maxResults = 5) {
  const COURSES_DATA = [
    {
      id: 'html', title: 'HTML',
      lessons: [
        { id: 'h1', title: 'HTML Introduction', keywords: ['html', 'introduction', 'hypertext', 'markup', 'web', 'pages'], content: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages.', codeSnippet: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My First Heading</h1>\n</body>\n</html>' },
        { id: 'p1', title: 'Python Intro', keywords: ['python', 'introduction', 'programming'], content: 'Python is a popular programming language created by Guido van Rossum.', codeSnippet: 'print("Hello, World!")' },
        { id: 'p19', title: 'Python Functions', keywords: ['python', 'functions', 'def'], content: 'A function is a block of code which only runs when it is called.', codeSnippet: 'def my_function():\n  print("Hello")\n\nmy_function()' }
      ]
    }
  ];

  if (!query) return [];
  const queryTokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);
  if (queryTokens.length === 0) return [];

  const results: any[] = [];
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

function handleOfflineQuery(query: string) {
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

  response += `\n💡 This response is from the SikshaSarovar offline knowledge base.`;
  return response;
}

import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

// ... (searchCourses and handleOfflineQuery should be kept or assumed to be above)

// Streaming AI endpoint with offline fallback
app.post('/api/ai/stream', async (req, res) => {
  const { messages } = req.body || {};
  const lastMessage = messages && messages.length > 0 ? messages[messages.length - 1].content : '';

  let useOfflineMode = false;
  let offlineResponse = '';

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
            Keep answers concise, educational, and encouraging.`
      });

      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('X-AI-Mode', 'online');

      for await (const textPart of result.textStream) {
        res.write(textPart);
      }
      res.end();
      return;

    } catch (error) {
      console.error('AI SDK Error, falling back to offline mode:', error);
      useOfflineMode = true;
      offlineResponse = handleOfflineQuery(lastMessage);
    }
  }

  if (useOfflineMode) {
    try {
      if (!offlineResponse) {
        offlineResponse = handleOfflineQuery(lastMessage);
      }

      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('X-AI-Mode', 'offline');

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
        details: 'Both online and offline modes failed.'
      });
    }
  }
});

// Serve sitemap
app.get('/sitemap.xml', (req, res) => {
  try {
    const base = (process.env.FRONTEND_URL || 'https://www.sikshasarovar.com').replace(/\/$/, '');
    const urls: { loc: string; changefreq?: string; priority?: string }[] = [];
    urls.push({ loc: `${base}/`, changefreq: 'daily', priority: '1.0' });
    urls.push({ loc: `${base}/about`, changefreq: 'monthly', priority: '0.6' });

    // Add all courses and lessons
    if (Array.isArray(COURSES)) {
      for (const c of COURSES) {
        urls.push({ loc: `${base}/course/${c.id}`, changefreq: 'weekly', priority: '0.8' });
        if (Array.isArray(c.lessons)) {
          for (const l of c.lessons) {
            urls.push({ loc: `${base}/course/${c.id}/lesson/${l.id}`, changefreq: 'monthly', priority: '0.6' });
          }
        }
      }
    }

    const xml = [`<?xml version="1.0" encoding="UTF-8"?>`, `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`];
    for (const u of urls) {
      xml.push('  <url>');
      xml.push(`    <loc>${u.loc}</loc>`);
      if (u.changefreq) xml.push(`    <changefreq>${u.changefreq}</changefreq>`);
      if (u.priority) xml.push(`    <priority>${u.priority}</priority>`);
      xml.push('  </url>');
    }
    xml.push('</urlset>');

    res.setHeader('Content-Type', 'application/xml');
    return res.send(xml.join('\n'));
  } catch (err) {
    console.error('sitemap error', err);
    return res.status(500).send('');
  }
});

app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send(`User-agent: *\nAllow: /\nSitemap: ${process.env.FRONTEND_URL || 'https://www.sikshasarovar.com'}/sitemap.xml\n`);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

if (true) {
  const port = process.env.PORT ? Number(process.env.PORT) : 8080;
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}

if (process.env.API_KEY && process.env.API_KEY.length > 0) {
  console.log('GenAI API key found.');
} else {
  console.warn('No GenAI API key found.');
}

export default app;

