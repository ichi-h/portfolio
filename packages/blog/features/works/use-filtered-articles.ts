import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { Category, Work } from "@/markdown";

export interface WorkFilter {
  search: string;
  category: Category;
}

const filterWorks = (works: Work[], filter: WorkFilter) => {
  const filteredWorks = works.filter((work) => {
    return (
      (filter.search && work.title.includes(filter.search)) ||
      (filter.search && work.description.includes(filter.search)) ||
      (filter.search && work.content.includes(filter.search)) ||
      work.category === filter.category
    );
  });
  return filteredWorks;
};

export const useFilteredWorks = (works: Work[]) => {
  const [isQueryReady, setIsQueryReady] = useState(false);
  const router = useRouter();

  const [filteredWorks, setFilteredWorks] = useState<Work[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    String(router.query.category ?? "development") as Category
  );

  const searchWorks = useCallback(() => {
    const result = filterWorks(works, {
      search: searchText,
      category: selectedCategory,
    });
    setFilteredWorks(result);
  }, [searchText, selectedCategory, works]);

  useEffect(() => {
    if (!isQueryReady && router.isReady) {
      setSelectedCategory((router.query.category ?? "development") as Category);
      setIsQueryReady(true);
    }
    searchWorks();
  }, [
    isQueryReady,
    router.isReady,
    router.query.category,
    router.query.tags,
    searchWorks,
  ]);

  return {
    filteredWorks,
    searchText,
    setSearchText,
    searchWorks,
    selectedCategory,
    setSelectedCategory,
  };
};
