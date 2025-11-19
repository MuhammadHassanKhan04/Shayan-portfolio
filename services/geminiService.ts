import { GoogleGenAI, ChatSession, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

let chatSession: ChatSession | null = null;

const getAIInstance = () => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing. AI features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const initializeChat = () => {
  const ai = getAIInstance();
  if (!ai) return null;

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: AI_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "I'm sorry, I can't connect to the AI service right now. Please check if the API key is configured.";
  }

  try {
    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Re-initialize session on error in case it expired or broke
    initializeChat();
    return "I encountered a temporary error. Please try asking again.";
  }
};
