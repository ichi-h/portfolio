import { ArticleSummary } from "@/core/entities/article";

import { fetchJson } from "../customFetch";

export interface ArticleError {
  message: string;
}

export const getAllArticles = () => fetchJson<ArticleError, ArticleSummary[]>(
  "/api/v1/works/articles"
);
