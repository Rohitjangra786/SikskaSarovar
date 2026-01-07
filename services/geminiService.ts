
import { GoogleGenAI } from "@google/genai";

export const chatWithSikshaAI = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  // Always initialize GoogleGenAI with a named parameter using process.env.API_KEY directly.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Using 'gemini-3-pro-preview' as this is a complex coding/reasoning task.
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
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

  // Directly access the .text property from the GenerateContentResponse object.
  return response.text;
};
