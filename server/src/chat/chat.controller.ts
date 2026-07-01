import { Request, Response } from "express";
import { answerQuestion } from "./chat.service";

export async function chat(req: Request, res: Response) {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    const answer = await answerQuestion(question);

    return res.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to answer question",
    });
  }
}