import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useCustomContext } from "@/hooks/use-custom-context";
import { THEME } from "@/ui/base";
import { TagCheckbox } from "@/ui/parts/form/tag-checkbox";
import { Stack } from "@/ui/parts/stack/stack";

import { WorksContext } from "./works-context";

export const WorksTags = () => {
  const router = useRouter();
  const [isQueryReady, setIsQueryReady] = useState(false);
  const { tagStatuses, setTagStatuses } = useCustomContext(WorksContext);

  const updateTagStatuses = (label: string) => () => {
    const newSelectedTags = tagStatuses.map((t) =>
      t.label === label ? { ...t, selected: !t.selected } : t
    );
    setTagStatuses(newSelectedTags);
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        tags: newSelectedTags
          .filter((t) => t.selected)
          .map((t) => t.label)
          .join(","),
      },
    });
  };

  useEffect(() => {
    if (!isQueryReady && router.isReady) {
      const initialTags = ((router.query.tags as string) || "").split(",");
      setTagStatuses(
        tagStatuses.map((t) =>
          initialTags.includes(t.label) ? { ...t, selected: true } : t
        )
      );
      setIsQueryReady(true);
    }
  }, [router.isReady, router.query, setTagStatuses, tagStatuses, isQueryReady]);

  return (
    <Stack
      justify="center"
      align="center"
      direction="column"
      gap="md"
      width="100%"
    >
      <Stack
        gap="md"
        wrap="wrap"
        maxWidth={`calc(${THEME.breakPoint.lg}px / 2)`}
      >
        {tagStatuses
          .filter((t) => t.isPrimary)
          .map((tag) => (
            <TagCheckbox
              key={tag.label}
              isChecked={tag.selected}
              onChange={updateTagStatuses(tag.label)}
            >
              {tag.label}
            </TagCheckbox>
          ))}
      </Stack>
      <Stack
        gap="md"
        wrap="wrap"
        maxWidth={`calc(${THEME.breakPoint.lg}px / 2)`}
      >
        {tagStatuses
          .filter((t) => !t.isPrimary)
          .map((tag) => (
            <TagCheckbox
              key={tag.label}
              isChecked={tag.selected}
              onChange={updateTagStatuses(tag.label)}
            >
              {tag.label}
            </TagCheckbox>
          ))}
      </Stack>
    </Stack>
  );
};
