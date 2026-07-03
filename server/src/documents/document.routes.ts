import { Router } from "express";
import { uploadDocument, listDocuments } from "./document.controller";
import upload from "../middleware/upload.middleware";

const router = Router();

router.get("/", listDocuments);
router.post("/upload", upload.single("file"), uploadDocument);


export default router;