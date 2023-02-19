import { useState } from "react";

import { PRIMARY_TAGS } from "@/constants/tags";
import { WorkSummary } from "@/core/entities/work";

interface TagStatus {
  label: string;
  isPrimary: boolean;
  selected: boolean;
}

const unique = <T>(arr: T[]) => [...new Set(arr)];

export const useFilteredWorks = (init: WorkSummary[]) => {
  const tags = unique(init.flatMap((a) => a.tags))
    .filter((t) => !PRIMARY_TAGS.includes(t))
    .sort();
  const [searchText, setSearchText] = useState("");
  const [tagStatuses, setTagStatuses] = useState<TagStatus[]>(
    tags.concat(PRIMARY_TAGS).map((t) => ({
      label: t,
      isPrimary: PRIMARY_TAGS.includes(t),
      selected: false,
    }))
  );
  const filteredWorks = init.filter((a) => {
    const primarySelected = tagStatuses.filter(
      (t) => t.isPrimary && t.selected
    );
    const normalSelected = tagStatuses.filter(
      (t) => !t.isPrimary && t.selected
    );
    const hasPrimaryTag =
      primarySelected.length === 0 ||
      primarySelected.some((t) => a.tags.includes(t.label));
    const hasTag =
      normalSelected.length === 0 ||
      normalSelected.every((t) => a.tags.includes(t.label));
    const hasTitle = a.title.toLowerCase().includes(searchText.toLowerCase());
    const hasDescription = a.description
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return hasPrimaryTag && hasTag && (hasTitle || hasDescription);
  });
  return {
    filteredWorks,
    searchText,
    setSearchText,
    tagStatuses,
    setTagStatuses,
  };
};
