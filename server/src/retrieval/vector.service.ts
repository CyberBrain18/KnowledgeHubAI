import { pool } from "../db/db";
import { v4 as uuid } from "uuid";

export async function storeEmbeddings(
  documentId: string,
  chunks: string[],
  embeddings: number[][]
) {
  for (let i = 0; i < chunks.length; i++) {
    await pool.query(
      `
      INSERT INTO document_chunks (
        id,
        document_id,
        chunk_index,
        chunk_text,
        embedding
      )
      VALUES ($1, $2, $3, $4, $5)
      `,
      [
        uuid(),
        documentId,
        i,
        chunks[i],
        JSON.stringify(embeddings[i]),
      ]
    );
  }
}