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

export type WorkSummary = Omit<Work, "article">;
