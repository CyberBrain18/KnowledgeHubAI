export function chunkText(
  text: string,
  chunkSize = 1000,
  overlap = 200
): string[] {
  // Clean extracted PDF text
  text = text
    .replace(/\0/g, "")          // Remove NULL bytes
    .replace(/\r/g, "")
    .replace(/\t/g, " ")
    .replace(/\u00A0/g, " ")     // Non-breaking spaces
    .replace(/\s+/g, " ")
    .trim();

  const chunks: string[] = [];

  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);

    chunks.push(text.slice(start, end).trim());

    start += chunkSize - overlap;
  }

  return chunks;
}
