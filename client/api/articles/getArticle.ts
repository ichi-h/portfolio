import { Article } from "@/core/entities/article";

import { fetchJson } from "../customFetch";

export const getArticle = (slug: string) =>
  fetchJson<Article>(`/api/v1/works/articles/${slug}`);
