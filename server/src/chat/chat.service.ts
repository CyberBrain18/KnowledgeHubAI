import { searchSimilarChunks } from "../retrieval/search.service";
import { buildPrompt } from "../prompts/prompt.service";
import { generateAnswer } from "../llm/llm.service";

export async function answerQuestion(question: string) {

        console.time("Search");
        const chunks = await searchSimilarChunks(question);
        console.timeEnd("Search");

        console.time("Prompt");
        const prompt = buildPrompt(question, chunks);
        console.timeEnd("Prompt");

        console.time("LLM");
        const answer = await generateAnswer(prompt);
        console.timeEnd("LLM");

    return answer;
}