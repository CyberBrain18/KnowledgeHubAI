import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Source } from "@/types/chat";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import api from "@/services/api";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState<Source[]>([]);

  const handleAsk = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);

      const { data } = await api.post("/chat", {
        question,
      });

      setAnswer(data.answer.answer);
      setSources(data.answer.sources);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const suggestions = [
  "What is Karma Yoga?",
  "What is Atman?",
  "Compare Karma Yoga and Bhakti Yoga.",
  "What does the Katha Upanishad teach about death?",
];

  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20">
      {/* Hero */}
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-stone-900">
          KnowledgeHub AI
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-stone-600">
          Explore Indian spiritual wisdom using AI-powered semantic search
          across the Bhagavad Gita, Upanishads and the teachings of Swami
          Vivekananda.
        </p>
      </div>

      {/* Search */}
      <div className="relative mt-14 w-full max-w-3xl">

        <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />

        <Input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
          placeholder="Ask about Karma Yoga, Atman, Moksha..."
          className="h-14 rounded-2xl pl-12 pr-28 text-base shadow-sm"
        />

        <Button
          onClick={handleAsk}
          disabled={loading}
          className="absolute right-2 top-2 h-10 rounded-xl"
        >
          {loading ? "Thinking..." : "Ask"}
        </Button>

      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">

        {suggestions.map((item) => (

          <button
            key={item}
            onClick={() => {
              setQuestion(item);
            }}
            className="rounded-full border px-4 py-2 text-sm transition hover:bg-orange-50 hover:border-orange-300"
          >
            {item}
          </button>

        ))}

      </div>

      {/* Answer */}
      <div className="mt-12 w-full max-w-3xl">
        <div className="mb-4 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
          🤖
        </div>

        <div>
          <h2 className="font-semibold">
            KnowledgeHub AI
          </h2>

          <p className="text-sm text-muted-foreground">
            AI-powered answer
          </p>
        </div>

      </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            {answer ? (
              <div className="prose prose-stone max-w-none dark:prose-invert">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {answer}
              </ReactMarkdown>
            </div>
            ) : (
              <p className="text-gray-500">
                Ask a question to begin.
              </p>
            )}
          </div>
        </div>

      {/* Sources */}
      {sources.length > 0 && (
        <div className="mt-10 w-full max-w-3xl">
          <h2 className="mb-3 text-xl font-semibold">Sources</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {sources.map((source) => (
              <div
                key={`${source.title}-${source.author}`}
                className="rounded-xl border bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold">{source.title}</h3>

                <p className="text-sm text-gray-500">
                  {source.author}
                </p>

                <p className="text-sm text-gray-500">
                  {source.tradition}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}