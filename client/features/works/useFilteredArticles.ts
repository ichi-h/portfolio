import { useState } from "react";

import { ArticleSummary } from "@/core/entities/article";

export const useFilteredArticles = (init: ArticleSummary[]) => {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const baseTags = ["development", "music", "photograph", "thought"];
  const tags = [...new Set([...baseTags, ...init.flatMap((a) => a.tags)])];
  const filteredArticles = init.filter((a) => {
    const hasTag = selectedTags.length === 0 || selectedTags.every((t) => a.tags.includes(t));
    const hasTitle = a.title.toLowerCase().includes(searchText.toLowerCase());
    const hasDescription = a.description.toLowerCase().includes(searchText.toLowerCase());
    return hasTag && (hasTitle || hasDescription);
  });
  return { filteredArticles, searchText, setSearchText, selectedTags, setSelectedTags, tags };
};
