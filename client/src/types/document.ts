export interface Document {
  id: string;
  title: string;
  author: string | null;
  tradition: string | null;
  language: string | null;
  translator: string | null;
  description: string | null;
  uploaded_at: string;
  chunks: number;
}

export interface DocumentsResponse {
  success: boolean;
  documents: Document[];
}