import { ArticleSummary } from "@/core/entities/article";

import { fetchJson } from "../customFetch";

export const getAllArticles = () =>
  fetchJson<ArticleSummary[]>("/api/v1/works/articles");
