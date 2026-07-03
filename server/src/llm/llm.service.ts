import { ollama } from './ollama'
export async function generateAnswer(prompt: string) {
  console.log("OLLAMA_HOST =", process.env.OLLAMA_HOST);

  const response = await fetch(`${process.env.OLLAMA_HOST}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OLLAMA_CHAT_MODEL,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const data = await response.json();

  return data.message.content;
}