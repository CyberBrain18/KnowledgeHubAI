import { randomUUID } from "crypto";
import { pool } from "../db/db";

interface CreateDocumentInput {
  title: string;
  author?: string;
  tradition?: string;
  language?: string;
  translator?: string;
  description?: string;
}

export async function createDocument(data: CreateDocumentInput) {
  const id = randomUUID();

  const query = `
    INSERT INTO documents (
      id,
      title,
      author,
      tradition,
      language,
      translator,
      description
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;

  const values = [
    id,
    data.title,
    data.author ?? null,
    data.tradition ?? null,
    data.language ?? null,
    data.translator ?? null,
    data.description ?? null,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
}

export async function findAllDocuments() {
  const query = `
    SELECT
      d.id,
      d.title,
      d.author,
      d.tradition,
      d.language,
      d.translator,
      d.description,
      d.uploaded_at,
      COUNT(c.id)::int AS chunks
    FROM documents d
    LEFT JOIN document_chunks c
      ON d.id = c.document_id
    GROUP BY
      d.id,
      d.title,
      d.author,
      d.tradition,
      d.language,
      d.translator,
      d.description,
      d.uploaded_at
    ORDER BY d.uploaded_at DESC;
  `;

  const result = await pool.query(query);

  return result.rows;
}