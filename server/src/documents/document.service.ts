import { createDocument, findAllDocuments } from "./document.repository";
import { extractText } from "../pdf/pdf.service";
import { chunkText } from "../chunks/chunk.service";
import { generateEmbeddings } from "../embeddings/embedding.service";
import { storeEmbeddings } from "../retrieval/vector.service";

interface DocumentMetadata {
  title: string;
  author?: string;
  tradition?: string;
  language?: string;
  translator?: string;
  description?: string;
}

export async function ingestDocument(
  file: Express.Multer.File,
  metadata: DocumentMetadata
) {
  const document = await createDocument(metadata);

  const data = await extractText(file.buffer);
  console.log("Pages:", data.numpages);
  console.log("Characters:", data.text.length);
  console.log("First 500 chars:");
  console.log(data.text.slice(0, 500));

  const chunks = chunkText(data.text);
  console.log("Chunks:", chunks.length);

  const embeddings = await generateEmbeddings(chunks);

  await storeEmbeddings(
    document.id,
    chunks,
    embeddings
  );

  return {
    document,
    totalChunks: chunks.length,
  };
}

export async function getDocuments() {
  return await findAllDocuments();
}