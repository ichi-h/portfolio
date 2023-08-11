import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { filterWorks } from "@/api/works";
import { isLeft } from "@/utils/either";

import type { Work } from "portfolio-works";

interface TagStatus {
  label: string;
  selected: boolean;
}

export const useFilteredWorks = (tags: string[]) => {
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

  const searchWorks = useCallback(async () => {
    const tagLabels = selectedTags
      .filter((t) => t.selected)
      .map((t) => t.label);
    const res = await filterWorks(searchText, tagLabels);
    if (isLeft(res)) return;
    setFilteredWorks(res.value);
  }, [searchText, selectedTags]);

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
