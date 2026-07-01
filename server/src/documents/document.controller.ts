import { Request, Response } from "express";
import { extractText } from "./document.service";
import { chunkText } from "../chunks/chunk.service";
import { generateEmbeddings } from "../embeddings/embedding.service";
import { storeEmbeddings } from "../retrieval/vector.service";
import { v4 as uuid } from "uuid";

export const uploadDocument = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const data = await extractText(req.file.buffer);

    const chunks = chunkText(data.text);

    const embeddings = await generateEmbeddings(chunks);

    const documentId = uuid();

    await storeEmbeddings(
        documentId,
        chunks,
        embeddings
    );

    return res.json({
      success: true,
      documentId,
      chunks: chunks.length
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to store embeddings",
    });
  }
};