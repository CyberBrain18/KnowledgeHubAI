import { Ollama } from "ollama";

const ollama = new Ollama({
  host: process.env.OLLAMA_HOST,
});

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
  console.log("OLLAMA_HOST =", process.env.OLLAMA_HOST);

  return response.message.content;
}