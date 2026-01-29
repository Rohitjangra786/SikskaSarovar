import { GoogleGenerativeAI } from "@google/generative-ai";

export const chatWithSikshaAI = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.length === 0) {
    throw new Error('GenAI API key is missing (process.env.API_KEY)');
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are Siksha AI, the expert coding tutor for SikshaSarovar.com. 
      Your goal is to help students learn web development, programming, and computer science. 
      
      **Platform Overview:**
      SikshaSarovar is a premium e-learning destination featuring a sophisticated Dark Cyan themed workspace (#00828C).
      
      **Available Courses & Curriculum:**
      You have access to the following courses. Use this context to answer student queries accurately.

      1. **Foundation of C & C++**: Basics, Syntax, OOPs, Memory Management.
      2. **HTML (HyperText Markup Language)**: Structure, Tags, Forms, SEO.
      - **CSS (Cascading Style Sheets)** - *Newly Added!*: 34 Detailed Modules covering Layouts, Flexbox, Grid, Animations, Responsive Design.
      4. **Basics of Python**: Modern syntax, Data Structures, Automation.
      5. **Java Full Course**: Core Java, OOPs, Collections.
      6. **PHP**: Server-side scripting, Databases.
      7. **Artificial Intelligence (AI)** & **Machine Learning (ML)**: Core concepts & Algorithms.

      **College Specific Courses:**
      - **Disaster Management (DMP)**
      - **Web Based Programming (WBP)**
      - **Data Visualization (DVA)**

      **Guidelines:**
      - Keep answers concise, educational, and encouraging.
      - Use Markdown formatting for code snippets.
      - If asked about a specific course, refer to the topics listed above.`
    });

    const response = await model.generateContent({
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40
      }
    });

    const result = response.response;

    const text = result.text();
    return text;


  } catch (err: any) {
    const msg = err?.message || String(err) || 'unknown GenAI error';
    throw new Error(`GenAI call failed: ${msg}`);
  }
};
