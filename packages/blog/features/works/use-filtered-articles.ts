import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { CATEGORY, Category } from "@/constants/category";
import { Work } from "@/markdown";

interface CategoryStatus {
  label: Category;
  selected: boolean;
}

export interface WorkFilter {
  category: Category[];
}

const filterWorks = (works: Work[], filter: WorkFilter) => {
  if (filter.category.length === 0) return works;
  const filteredWorks = works.filter((work) =>
    filter.category.every((c) => work.category.includes(c))
  );
  return filteredWorks;
};

export const useFilteredWorks = (works: Work[]) => {
  const [isQueryReady, setIsQueryReady] = useState(false);
  const router = useRouter();

  const [filteredWorks, setFilteredWorks] = useState<Work[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryStatus[]>(
    CATEGORY.map((c) => ({
      label: c,
      selected: false,
    }))
  );

  const searchWorks = useCallback(() => {
    const labels = selectedCategory
      .filter((c) => c.selected)
      .map((c) => c.label);
    const result = filterWorks(works, {
      category: labels,
    }).sort((a, b) => {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);
      return aDate > bDate ? -1 : 1;
    });
    setFilteredWorks(result);
  }, [selectedCategory, works]);

  useEffect(() => {
    if (!isQueryReady && router.isReady) {
      setSelectedCategory(
        CATEGORY.map((c) => ({
          label: c,
          selected: (router.query.category ?? "").includes(c) ?? false,
        }))
      );
      setIsQueryReady(true);
    }
    searchWorks();
  }, [isQueryReady, router.isReady, router.query.category, searchWorks]);

  return {
    filteredWorks,
    searchWorks,
    selectedCategory,
    setSelectedCategory,
  };
};
