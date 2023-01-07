import { fetchJson } from "../customFetch";

export interface Article {
  id: number;
  category: string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  revisedAt: string;
  publishedAt: string;
  tags: string[];
}

export const getAllArticles = () => fetchJson<Article[]>("/api/v1/works/articles");
