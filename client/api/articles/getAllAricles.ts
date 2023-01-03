import { useEnv } from "@/utils/env";

import { customFetch } from "../customFetch";

export interface Article {
  id: number;
  category: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  thumbnailUrl: string;
  isDraft: boolean;
  createdAt: string;
  revisedAt: string;
  publishedAt: string | null;
  unpublishedAt: string | null;
  tags: string[];
}

export type GetAllArticlesResponse = Article[]

export const getAllArticles = async (): Promise<GetAllArticlesResponse> => {
  const { APP_URL } = useEnv();
  const data = await customFetch<GetAllArticlesResponse>(`${APP_URL}/api/v1/works/articles`);
  return data;
};
