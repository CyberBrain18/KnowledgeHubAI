import { ollama } from './ollama'

  export async function generateAnswer(prompt: string) {
  const response = await ollama.chat({
    model: process.env.OLLAMA_CHAT_MODEL!,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.message.content;
}