
import { GoogleGenAI } from "@google/genai";
import { USER_BIO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askJarvis = async (query: string) => {
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
    console.error("JARVIS error:", error);
    return "Error accessing core systems. Please check back later.";
  }
};
