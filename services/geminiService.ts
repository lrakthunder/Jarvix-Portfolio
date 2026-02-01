
import { GoogleGenAI } from "@google/genai";
import { USER_BIO } from "../constants";

const API_KEY = import.meta.env.VITE_API_KEY as string | undefined;
let ai: GoogleGenAI | null = null;

if (API_KEY && API_KEY.length > 0) {
  try {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
    ai = null;
  }
} else {
  console.warn('VITE_API_KEY is not set. Gemini API calls will be disabled in the client.');
}

export const askJarvis = async (query: string) => {
  if (!ai) {
    // Fail gracefully in the browser when no API key is present.
    console.warn('askJarvis called but GoogleGenAI client is not initialized.');
    return 'AI backend not configured. For local testing set VITE_API_KEY in a .env file or run a server-side proxy.';
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are JARVIX, a sophisticated AI assistant for a world-class engineer. 
        Use the following bio of the engineer to answer questions about them: ${USER_BIO}. 
        Keep your tone professional, slightly witty, and futuristic. Use short, efficient sentences. 
        Address the user as 'Sir' or 'User'. You are currently acting as the guide for their portfolio website.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error('JARVIS error:', error);
    return 'Error accessing core systems. Please check back later.';
  }
};
