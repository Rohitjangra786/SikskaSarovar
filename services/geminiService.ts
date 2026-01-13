
import { GoogleGenAI } from "@google/genai";

export const chatWithSikshaAI = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey.length === 0) {
    throw new Error('GenAI API key is missing (process.env.API_KEY)');
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response: any = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `You are Siksha AI, the expert coding tutor for SikshaSarovar.com. 
      Your goal is to help students learn web development, programming, and computer science. 
      Keep answers concise, educational, and encouraging. 
      Use Markdown formatting for code snippets. 
      If a user asks about the platform, explain that SikshaSarovar is a premium e-learning destination featuring a sophisticated Dark Cyan themed workspace (#00828C).`,
        temperature: 0.7,
        topP: 0.95,
        topK: 40
      }
    });

    // Robustly extract text from common response shapes
    let text = '';
    if (!response) {
      throw new Error('Empty response from GenAI client');
    }
    if (typeof response === 'string') text = response;
    else if (response.text) text = response.text;
    else if (response.outputText) text = response.outputText;
    else if (response.candidates && response.candidates[0]) {
      text = response.candidates[0].content || response.candidates[0].text || '';
    } else if (response.outputs && response.outputs[0] && response.outputs[0].data) {
      const out = response.outputs[0].data;
      const found = out.find((d: any) => typeof d.text === 'string' || typeof d.content === 'string');
      if (found) text = found.text || found.content || '';
    }

    if (!text) text = JSON.stringify(response).slice(0, 4000);
    return text;
  } catch (err: any) {
    const msg = err?.message || String(err) || 'unknown GenAI error';
    throw new Error(`GenAI call failed: ${msg}`);
  }
};
