import { useEffect, useState } from "react";
import { BookOpen, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import { getDocuments } from "@/services/api";
import type { Document } from "@/types/document";

export default function Library() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadDocuments() {
      try {
        const data = await getDocuments();
        setDocuments(data.documents);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDocuments();
  }, []);

  const totalDocuments = documents.length;

  const totalAuthors = new Set(
    documents.map((doc) => doc.author).filter(Boolean)
  ).size;

  const totalTraditions = new Set(
    documents.map((doc) => doc.tradition).filter(Boolean)
  ).size;

  const filteredDocuments = documents.filter((doc) => {
    const query = search.toLowerCase();

    return (
      doc.title.toLowerCase().includes(query) ||
      (doc.author ?? "").toLowerCase().includes(query)
    );
  });

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-bold">Library</h1>

        <p className="mt-3 text-muted-foreground">
          Loading library...
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-6xl font-bold">
          Library

          <span className="ml-3 text-lg font-normal text-muted-foreground">
            ({totalDocuments} documents)
          </span>
        </h1>

        <p className="mt-3 text-muted-foreground">
          Browse the texts currently available in the KnowledgeHub AI
          knowledge base.
        </p>

      </div>

      {/* Stats */}

      <div className="mb-10 grid gap-4 md:grid-cols-3">

        <Card>
          <CardContent className="p-6">
            <p className="text-4xl font-bold">
              {totalDocuments}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Documents
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-4xl font-bold">
              {totalAuthors}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Authors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-4xl font-bold">
              {totalTraditions}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Traditions
            </p>
          </CardContent>
        </Card>

      </div>

      {/* Search */}

      <div className="relative mb-10">

        <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />

        <Input
          className="pl-10"
          placeholder="Search books or authors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Empty State */}

      {filteredDocuments.length === 0 ? (

        <div className="py-24 text-center">

          <BookOpen className="mx-auto mb-4 h-12 w-12 text-gray-400" />

          <h2 className="text-xl font-semibold">
            No documents found
          </h2>

          <p className="mt-2 text-muted-foreground">
            Try searching for another title or author.
          </p>

        </div>

      ) : (

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredDocuments.map((doc) => (

            <Card
              key={doc.id}
              className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <CardContent className="space-y-4 p-6">

                <BookOpen className="h-8 w-8 text-orange-600" />

                <div>

                  <h2 className="text-xl font-semibold">
                    {doc.title}
                  </h2>

                  <p className="text-sm text-muted-foreground">
                    {doc.author || "Unknown Author"}
                  </p>

                </div>

                <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                  {doc.tradition || "Unknown Tradition"}
                </span>

                <div className="space-y-2 text-sm text-muted-foreground">

                  <p>
                    <strong>Language:</strong>{" "}
                    {doc.language || "Unknown"}
                  </p>

                  {doc.translator && (
                    <p>
                      <strong>Translator:</strong>{" "}
                      {doc.translator}
                    </p>
                  )}

                  <div className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
                    🧩 {doc.chunks} Chunks
                  </div>

                </div>

                {doc.description && (

                  <p className="min-h-[72px] line-clamp-3 text-sm text-muted-foreground">
                    {doc.description}
                  </p>

                )}

              </CardContent>

            </Card>

          ))}

        </div>

      )}

    </main>
  );
}