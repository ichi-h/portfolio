import { fetchJson } from "../customFetch";

export interface Work {
  id: number;
  category: string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  revisedAt: string;
  publishedAt: string;
  tags: string[];
  article?: {
    body: string;
  };
}

export const getWork = (slug: string) =>
  fetchJson<Work>(`/api/v1/works/${slug}`);
