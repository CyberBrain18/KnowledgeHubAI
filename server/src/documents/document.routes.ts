import { Router } from "express";
import { uploadDocument } from "./document.controller";
import upload from "../middleware/upload.middleware";

const router = Router();

router.post("/upload", upload.single("file"), uploadDocument);

export default router;