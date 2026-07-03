import { Ollama } from "ollama";
export async function generateAnswer(prompt: string) {
  console.log("OLLAMA_HOST =", process.env.OLLAMA_HOST);

  const ollama = new Ollama({
    host: process.env.OLLAMA_HOST!,
  });

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