import { Ollama } from "ollama";

const ollama = new Ollama({
  host: process.env.OLLAMA_HOST,
});

export async function generateEmbeddings(chunks: string[]) {
  const embeddings: number[][] = [];

  for (const chunk of chunks) {
    const response = await ollama.embeddings({
      model: process.env.OLLAMA_EMBEDDING_MODEL!,
      prompt: chunk,
    });

    embeddings.push(response.embedding);
  }

  return embeddings;
}
