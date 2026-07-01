import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import documentRoutes from "./documents/document.routes";
import chatRoutes from "./chat/chat.routes";

dotenv.config();

const app = express();
import { pool } from "./db/db";

pool.query("SELECT NOW()")
  .then((result) => {
    console.log("✅ Database Connected");
    console.log(result.rows[0]);
  })
  .catch(console.error);

app.use(cors());
app.use(express.json());
app.use("/documents", documentRoutes);
app.use("/chat", chatRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});