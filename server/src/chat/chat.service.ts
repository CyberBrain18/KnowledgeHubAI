import { searchSimilarChunks } from "../retrieval/search.service";
import { buildPrompt } from "../prompts/prompt.service";
import { generateAnswer } from "../llm/llm.service";

export async function answerQuestion(question: string) {

        const chunks = await searchSimilarChunks(question);

        const prompt = buildPrompt(question, chunks);

        const answer = await generateAnswer(prompt);

        const sources = [
        ...new Map(
            chunks.map(chunk => [
            chunk.document_title,
            {
                title: chunk.document_title,
                author: chunk.author,
                tradition: chunk.tradition,
            },
            ])
        ).values(),
        ];

        return {
            answer,
            sources,
        };
}