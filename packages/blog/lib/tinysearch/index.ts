import { search } from "tinysearch-engine";

export const customSearch = (word: string, limit: number) => {
  const result = search(word, limit) as string[][];
  return result.map(([title, url]) => ({
    title: title.replace(/\s+/g, "").replace(/SPACE/g, " "),
    url,
  }));
};
