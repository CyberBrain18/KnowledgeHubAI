export interface Source {
    title: string;
    author: string;
    tradition: string;
}

export interface ChatResponse {
    answer: string;
    sources: Source[];
}