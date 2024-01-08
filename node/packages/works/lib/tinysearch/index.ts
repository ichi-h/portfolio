import { search } from "tinysearch-engine";

export interface TinySearchResult {
  title: string;
  url: string;
}

export const customSearch = (
  word: string,
  limit: number,
): TinySearchResult[] => {
  const result = search(word, limit) as string[][];
  return result.map(([title, url]) => ({
    title: title.replace(/\s+/g, "").replace(/SPACE/g, " "),
    url,
  }));
};
