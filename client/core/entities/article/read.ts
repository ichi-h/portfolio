import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

import { Article, articleSchema } from "./schema";

const articlesDir = join(process.cwd(), "content/articles");
const indexMd = "index.md";

export const readAllArticleSlugs = () => {
  return fs
    .readdirSync(articlesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map(({ name }) => name);
};

export const readArticleBySlug = (slug: string): Article => {
  const path = join(articlesDir, slug, indexMd);
  const articleElement = fs.readFileSync(path, "utf8");
  const { data, content } = matter(articleElement);
  const {
    uid,
    title,
    description,
    thumbnail,
    createdAt,
    publishedAt,
    revisedAt,
    unpublishedAt,
    tags,
    isDraft,
  } = data;

  const article: Article = {
    uid,
    slug,
    title,
    content,
    description,
    thumbnail,
    createdAt,
    publishedAt,
    revisedAt,
    unpublishedAt,
    tags,
    isDraft,
  };
  const result = articleSchema.safeParse(article);
  if (!result.success) {
    throw new Error(result.error.message);
  }

  return result.data;
};

export const readAllArticles = () =>
  readAllArticleSlugs()
    .map((slug) => readArticleBySlug(slug))
    .sort((first, second) => {
      const firstDate = new Date(first.publishedAt);
      const secondDate = new Date(second.publishedAt);
      return secondDate.getTime() - firstDate.getTime();
    });
