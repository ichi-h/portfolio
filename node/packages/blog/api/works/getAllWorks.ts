import { fetchJson } from "../customFetch";

export interface WorkSummary {
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

export const getAllWorks = () => fetchJson<WorkSummary[]>("/api/v1/works");
