import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Brain,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Authentic Sources",
      description:
        "Every response is grounded in trusted spiritual texts, encouraging deeper exploration and confidence in the original teachings.",
    },
    {
      icon: Brain,
      title: "Semantic Search",
      description:
        "Find ideas by meaning rather than exact keywords, making discovery more natural and intuitive.",
    },
    {
      icon: Sparkles,
      title: "Instant Exploration",
      description:
        "Receive thoughtful, source-backed responses in seconds while discovering related concepts.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Responses",
      description:
        "Every answer is accompanied by the sources used, helping you continue your own journey of learning.",
    },
  ];

  const collections = [
    "Bhagavad Gita",
    "Upanishads",
    "Swami Vivekananda",
    "More collections coming soon",
  ];

  const roadmap = [
    "Conversation History",
    "Expanded Library",
    "Multi-language Support",
    "Personal Collections",
    "Voice Interaction",
    "Community Contributions",
  ];

  return (
    <main className="mx-auto max-w-7xl px-8 py-20">

      <section className="text-center">
        <h1 className="text-6xl font-bold tracking-tight text-stone-900">
          KnowledgeHub AI
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-stone-600">
          Explore timeless Indian spiritual wisdom through intelligent
          semantic search. Discover authentic teachings using natural language
          and continue your journey through trusted sources.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" onClick={() => navigate("/")}>
            Start Exploring
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/library")}
          >
            Browse Library
          </Button>
        </div>
      </section>

      <section className="mt-28">
        <h2 className="text-4xl font-bold text-stone-900">
          Our Mission
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-9 text-stone-600">
          KnowledgeHub AI exists to make India's rich spiritual literature
          easier to explore in the age of artificial intelligence.
          Instead of navigating hundreds of pages or relying on keyword
          searches, readers can ask meaningful questions in natural language
          and receive grounded answers backed by authentic texts.
          Every interaction is designed to encourage curiosity,
          learning and deeper understanding.
        </p>
      </section>

      <section className="mt-28">
        <h2 className="mb-10 text-4xl font-bold text-stone-900">
          Why KnowledgeHub AI?
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title} className="transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-8">
                  <Icon className="mb-5 h-10 w-10 text-amber-700" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-4 leading-7 text-stone-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mt-28">
        <h2 className="mb-10 text-4xl font-bold text-stone-900">
          How It Works
        </h2>

        <Card>
          <CardContent className="p-10">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center text-lg font-medium">
              {["Documents","Knowledge Index","Semantic Search","AI Understanding","Source-backed Response"].map((step,index,arr)=>(
                <div key={step} className="flex items-center gap-4">
                  <div className="rounded-xl bg-amber-50 px-5 py-3 text-amber-700">
                    {step}
                  </div>
                  {index < arr.length-1 && <ArrowRight className="text-stone-400" />}
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-stone-600">
              KnowledgeHub AI combines intelligent retrieval with modern language
              models to answer questions while remaining grounded in authentic
              spiritual sources.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-28 grid gap-10 md:grid-cols-2">

        <div>
          <h2 className="mb-8 text-4xl font-bold text-stone-900">
            Current Collections
          </h2>

          <div className="space-y-4">
            {collections.map((item)=>(
              <Card key={item}>
                <CardContent className="flex items-center gap-4 p-6">
                  <BookOpen className="h-6 w-6 text-amber-700"/>
                  <span className="text-lg">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-4xl font-bold text-stone-900">
            Looking Ahead
          </h2>

          <div className="space-y-4">
            {roadmap.map((item)=>(
              <Card key={item}>
                <CardContent className="flex items-center gap-4 p-6">
                  <Sparkles className="h-6 w-6 text-amber-700"/>
                  <span className="text-lg">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </section>

      <section className="mt-32 rounded-3xl bg-stone-100 px-10 py-16 text-center">
        <h2 className="text-4xl font-bold">
          Begin Your Journey
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
          Ask meaningful questions, discover timeless teachings and
          explore authentic spiritual literature through a modern,
          intuitive experience.
        </p>

        <Button
          size="lg"
          className="mt-8"
          onClick={() => navigate("/")}
        >
          Start Exploring
        </Button>
      </section>

    </main>
  );
}