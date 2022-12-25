import { Article } from "./schema";

export type ReadAllArticleSlugs = () => string[];
export type ReadAllArticles = () => Article[];
export type ReadArticleBySlug = (slug: string) => Article;
