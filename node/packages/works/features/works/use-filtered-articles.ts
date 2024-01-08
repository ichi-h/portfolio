import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { CATEGORY, Category } from "@/model/category";
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
    filter.category.every((c) => work.category.includes(c)),
  );
  return filteredWorks;
};

export const useFilteredWorks = (works: Work[]) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  const categories = Object.values(CATEGORY);

  const [filteredWorks, setFilteredWorks] = useState<Work[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryStatus[]>(
    categories.map((c) => ({
      label: c,
      selected: false,
    })),
  );

  const searchWorks = useCallback(
    (status: CategoryStatus[]) => {
      const labels = status.filter((c) => c.selected).map((c) => c.label);
      const result = filterWorks(works, {
        category: labels,
      }).sort((a, b) => {
        const aDate = new Date(a.createdAt);
        const bDate = new Date(b.createdAt);
        return aDate > bDate ? -1 : 1;
      });
      setFilteredWorks(result);
    },
    [works],
  );

  useEffect(() => {
    if (!router.isReady) return;

    if (!isFiltered) {
      const newStatus = categories.map((c) => ({
        label: c,
        selected: (router.query.category ?? "").includes(c) ?? false,
      }));
      setSelectedCategory(newStatus);
      searchWorks(newStatus);
      setIsFiltered(true);
    } else if (isFiltered && !isReady) {
      setIsReady(true);
    } else {
      searchWorks(selectedCategory);
    }
  }, [
    isFiltered,
    isReady,
    router.isReady,
    router.query.category,
    searchWorks,
    selectedCategory,
  ]);

  return {
    isReady,
    filteredWorks,
    selectedCategory,
    setSelectedCategory,
  };
};
