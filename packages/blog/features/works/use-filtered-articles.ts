import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import type { Work } from "portfolio-works";

interface TagStatus {
  label: string;
  selected: boolean;
}

export interface WorkFilter {
  search?: string;
  tags?: string[];
}

const filterWorks = (works: Work[], filter?: WorkFilter) => {
  if (!filter) return works;
  const workFilter = {
    search: filter.search ?? "",
    tags: filter.tags ?? [],
  };
  if (workFilter.search === "" && workFilter.tags.length === 0) {
    return works;
  }
  const filteredWorks = works.filter((work) => {
    return (
      (workFilter.search && work.title.includes(workFilter.search)) ||
      (workFilter.search && work.description.includes(workFilter.search)) ||
      (workFilter.search && work.content.includes(workFilter.search)) ||
      (workFilter.tags.length !== 0 &&
        workFilter.tags.every((tag) => work.tags.includes(tag)))
    );
  });
  return filteredWorks;
};

export const useFilteredWorks = (works: Work[], tags: string[]) => {
  const [isQueryReady, setIsQueryReady] = useState(false);
  const router = useRouter();

  const [filteredWorks, setFilteredWorks] = useState<Work[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState<TagStatus[]>(
    tags.map((t) => ({
      label: t,
      selected: false,
    }))
  );

  const searchWorks = useCallback(() => {
    const tagLabels = selectedTags
      .filter((t) => t.selected)
      .map((t) => t.label);
    const result = filterWorks(works, { search: searchText, tags: tagLabels });
    setFilteredWorks(result);
  }, [searchText, selectedTags, works]);

  useEffect(() => {
    if (!isQueryReady && router.isReady) {
      setSelectedTags(
        tags.map((t) => ({
          label: t,
          selected: (router.query.tags ?? "").includes(t) ?? false,
        }))
      );
      setIsQueryReady(true);
    }
    searchWorks();
  }, [
    isQueryReady,
    router.isReady,
    router.query.tags,
    searchWorks,
    setSelectedTags,
    tags,
  ]);

  return {
    filteredWorks,
    searchText,
    setSearchText,
    selectedTags,
    setSelectedTags,
    searchWorks,
  };
};
