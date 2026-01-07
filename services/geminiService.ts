
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const chatWithSikshaAI = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  if (!API_KEY) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      ...history.map(h => ({ role: h.role, parts: h.parts })),
      { role: 'user', parts: [{ text: message }] }
    ],
    config: {
      systemInstruction: `You are Siksha AI, the expert coding tutor for SikshaSarovar.com. 
      Your goal is to help students learn web development, programming, and computer science. 
      Keep answers concise, educational, and encouraging. 
      Use Markdown formatting for code snippets. 
      If a user asks about the platform, explain that SikshaSarovar is a premium e-learning destination.`,
      temperature: 0.7,
      topP: 0.95,
      topK: 40
    }
  });

  return response.text;
};
