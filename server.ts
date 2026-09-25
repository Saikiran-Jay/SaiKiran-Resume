import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { RESUME_DATA, SIDEBAR_SKILLS, PEOPLE_ALSO_ASK } from './constants';

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

  // Build authoritative portfolio knowledge dynamically from source data
  const portfolioKnowledge = {
    profile: {
      name: RESUME_DATA.name,
      headline: RESUME_DATA.title,
      about: RESUME_DATA.about,
      contact: RESUME_DATA.contact,
      stats: RESUME_DATA.stats,
      interests: RESUME_DATA.interests,
      certifications: RESUME_DATA.certifications,
    },
    workExperience: RESUME_DATA.experience,
    education: RESUME_DATA.education,
    skillsByCompetency: RESUME_DATA.skills,
    sidebarCategoriesAndTools: SIDEBAR_SKILLS,
    projectsAndBuilds: SIDEBAR_SKILLS.find(s => s.category.toLowerCase().includes('project'))?.items || [],
    portfolioProjects: RESUME_DATA.projects,
    caseStudies: RESUME_DATA.caseStudies,
    frequentlyAskedQuestions: PEOPLE_ALSO_ASK,
  };

  const systemInstruction = `
You are the interactive AI Overview assistant embedded in Sai Kiran Jabu's Google SERP-styled portfolio website.
Your role is to answer questions about Sai Kiran's professional background, work experience, skills, tools, certifications, projects, education, and contact details.

AUTHORITATIVE PORTFOLIO DATA (SOURCE OF TRUTH):
${JSON.stringify(portfolioKnowledge, null, 2)}

STRICT OPERATING RULES:
1. STRICT GROUNDING: Answer questions based ONLY on the portfolio data above. Do NOT assume, invent, or use generic internet assumptions about Sai Kiran.
2. UNKNOWN INFORMATION FALLBACK: If the question cannot be answered from the provided portfolio data (e.g. favorite food, personal life, unlisted companies, hobbies not in the data, or unrelated topics):
   DO NOT invent an answer or hallucinate.
   Respond with:
   "I don't have that information in Sai Kiran's portfolio. For more details, you can reach out to Sai directly."
   (You may optionally provide his contact email: ${RESUME_DATA.contact.email} or LinkedIn).
3. ACCURACY & HIGHLIGHTS:
   - Current Employer: FULL Creative Pvt. Ltd. (Sr. Performance Marketing Analyst, Feb 2026 – Present, Remote / Hyderabad, India).
   - Core Skills: Google Ads, Microsoft Advertising (Bing Ads), SA360, Meta Ads, GA4, GTM, Floodlight, campaign optimization, bidding strategies, audience targeting, lead generation, performance reporting, landing-page analysis, and Microsoft Clarity.
   - SA360 Experience: Advanced expertise in Search Ads 360, managing budget groups, bid strategies, Floodlight tags, and luxury hospitality client portfolios.
   - Projects & Builds: Explicitly mention the projects from the Projects & Builds section (such as "I Wish I Could Say", "AiGen Hub", "Janma Sutra", "CarLog", "PodRead", "Jay", and "Sai Kiran Jabu — Portfolio").
4. TONE & FORMAT:
   - Be clear, professional, concise, and structured like a Google AI Overview.
   - Use bold markdown (**term**) for key technologies, companies, and metrics.
   - Use bullet points ("• ") where a list is helpful.
   - Keep answers concise and direct (typically under 120 words).
`;

  // Candidate models with automated fallback to guard against temporary high-demand / 503 spikes
  const candidateModels = ['gemini-3.8-flash', 'gemini-2.5-flash', 'gemini-3.1-flash-lite'];
  let lastError: any = null;

  for (const model of candidateModels) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: query,
        config: {
          systemInstruction,
          temperature: 0.2,
        },
      });

      if (response && response.text) {
        return res.json({ text: response.text });
      }
    } catch (err: any) {
      console.warn(`Model ${model} request failed, attempting fallback:`, err?.status || err?.message || err);
      lastError = err;
    }
  }

  console.error('All Gemini candidate models failed. Last error:', lastError);
  return res.status(500).json({
    error: "I couldn't process that question right now. Please try again.",
  });
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
