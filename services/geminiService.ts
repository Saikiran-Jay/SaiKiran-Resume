import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai && process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const generateAIResponse = async (query: string): Promise<string> => {
  const client = getAI();
  if (!client) {
    return "API Key not configured. Please add your Gemini API Key to use the AI features.";
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
    const response = await client.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please try again.";
  }
};