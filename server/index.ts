import 'dotenv/config';
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { chatWithSikshaAI } from '../services/geminiService';
import path from 'path';
import { fileURLToPath } from 'url';
import { COURSES } from '../constants';

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

// AI chat endpoint
app.post('/api/ai/chat', async (req, res) => {
  const { message, history } = req.body || {};
  try {
    const reply = await chatWithSikshaAI(message, history || []);
    return res.json({ text: reply });
  } catch (err) {
    console.error('AI chat error', err);
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: 'ai_error', message });
  }
});

// Streaming AI endpoint
app.post('/api/ai/stream', async (req, res) => {
  const { message, history } = req.body || {};
  try {
    const fullReply = await chatWithSikshaAI(message, history || []);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    const chunkSize = 120;
    for (let i = 0; i < fullReply.length; i += chunkSize) {
      res.write(fullReply.slice(i, i + chunkSize));
      await new Promise((r) => setTimeout(r, 20));
    }
    res.end();
  } catch (err) {
    if (!res.headersSent) res.status(500).json({ error: 'ai_error' });
    else res.end();
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

