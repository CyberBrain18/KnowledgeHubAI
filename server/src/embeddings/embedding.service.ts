import ollama from "ollama";

export async function generateEmbeddings(chunks: string[]) {
  const embeddings: number[][] = [];

  for (const chunk of chunks) {
    const response = await ollama.embeddings({
      model: "nomic-embed-text",
      prompt: chunk,
    });

    embeddings.push(response.embedding);
  }

  return embeddings;
}

