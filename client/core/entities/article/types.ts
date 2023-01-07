export interface Article {
  id: number;
  category: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  thumbnailUrl: string;
  revisedAt: string;
  publishedAt: string;
  tags: string[];
}

export type ArticleSummary = Omit<Article, "body">;
