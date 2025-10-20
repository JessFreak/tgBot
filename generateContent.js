import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KAY });

const GEMINI_MODEL = 'gemini-2.5-flash';

export async function generateContent(userPrompt) {
  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: userPrompt,
    config: {
      systemInstruction: "Ти корисний помічник, який відповідає українською мовою. Відповідай ввічливо та по суті запиту користувача. Надавай переважно короткі, швидкі відповіді. Використовуй Markdown для форматування."
    }
  });

  return response.text;
}