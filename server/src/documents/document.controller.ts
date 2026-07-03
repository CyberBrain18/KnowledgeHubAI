import { Request, Response } from "express";
import { ingestDocument, getDocuments } from "./document.service";

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

    const result = await ingestDocument(req.file, {
      title: req.body.title || req.file.originalname.replace(".pdf", ""),
      author: req.body.author,
      tradition: req.body.tradition,
      language: req.body.language,
      translator: req.body.translator,
      description: req.body.description,
    });

    return res.status(200).json({
      success: true,
      ...result,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to ingest document",
    });
  }
};

export const listDocuments = async (
  req: Request,
  res: Response
) => {
  try {
    const documents = await getDocuments();

    return res.status(200).json({
      success: true,
      documents,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch documents",
    });
  }
};