import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { RESUME_DATA } from './constants';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Server-side Gemini initialization
const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

app.post('/api/ai/ask', async (req, res) => {
  const { query } = req.body;
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Query is required' });
  }

  const ai = getAI();
  if (!ai) {
    return res.status(500).json({
      error: 'Gemini API key is not configured on the server. Please configure GEMINI_API_KEY in your secrets.',
    });
  }

  const systemInstruction = `
    You are an AI assistant representing ${RESUME_DATA.name}, a ${RESUME_DATA.title}.
    You are currently embedded in ${RESUME_DATA.name}'s "SERP-style" resume website.
    Your goal is to answer questions about ${RESUME_DATA.name}'s professional background, skills, and experience based STRICTLY on the provided JSON data.
    
    Data: ${JSON.stringify(RESUME_DATA)}
    
    Rules:
    1. Be concise, professional, and persuasive, like a high-end recruiter or ${RESUME_DATA.name} himself.
    2. If the user asks about something not in the data, politely say you don't have that information but suggest contacting ${RESUME_DATA.name} directly.
    3. Format your response with simple markdown if needed (bolding key metrics).
    4. Keep answers under 100 words unless asked for a detailed breakdown.
    5. Emphasize metrics (ROAS, Budget managed, etc.) whenever relevant.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: query,
      config: {
        systemInstruction,
      },
    });

    return res.json({ text: response.text || "I couldn't generate a response at this time." });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({
      error: 'Sorry, I encountered an error while processing your request. Please try again.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
