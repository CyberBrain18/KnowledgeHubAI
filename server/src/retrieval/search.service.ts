import ollama from "ollama";
import { pool } from "../db/db";

export async function searchSimilarChunks(question: string) {
  const response = await ollama.embeddings({
    model: process.env.OLLAMA_EMBEDDING_MODEL!,
    prompt: question,
  });

  const embedding = response.embedding;

  const result = await pool.query(
    `
    SELECT chunk_text
    FROM document_chunks
    ORDER BY embedding <=> $1
    LIMIT 5;
    `,
    [JSON.stringify(embedding)]
  );

  return result.rows;
}