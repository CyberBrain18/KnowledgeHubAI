import { ollama } from "../llm/ollama";
import { pool } from "../db/db";

export async function searchSimilarChunks(question: string) {
  console.log("Embedding host:", process.env.OLLAMA_HOST);

  const response = await ollama.embeddings({
    model: process.env.OLLAMA_EMBEDDING_MODEL!,
    prompt: question,
  });

  const embedding = response.embedding;

  const result = await pool.query(
    `
    SELECT
        dc.chunk_text,
        dc.chunk_index,
        d.title AS document_title,
        d.author,
        d.tradition
    FROM document_chunks dc
    JOIN documents d
        ON dc.document_id = d.id
    ORDER BY dc.embedding <=> $1
    LIMIT 5;
    `,
    [JSON.stringify(embedding)]
  );

  return result.rows;
}