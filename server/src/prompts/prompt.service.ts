export function buildPrompt(
  question: string,
  chunks: { chunk_text: string }[]
) {
  const context = chunks.map((chunk) => chunk.chunk_text).join("\n\n");

  return `
You are a helpful AI assistant.

Answer the user's question using ONLY the provided context.

If the answer is not found in the context, say:
"I couldn't find that information in the uploaded documents."

Context:
${context}

Question:
${question}

Answer:
`;
}