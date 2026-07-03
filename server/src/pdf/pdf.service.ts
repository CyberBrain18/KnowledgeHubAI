import pdfParse from "pdf-parse";

export async function extractText(buffer: Buffer) {
    const data = await pdfParse(buffer);
    return data;
}