import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useCustomContext } from "@/lib/react/useCustomContext";
import { THEME } from "@/ui/base";
import { TagCheckbox } from "@/ui/parts/form/tag-checkbox";
import { Stack } from "@/ui/parts/stack/stack";

import { WorksContext } from "./worksContext";

export const WorksTags = () => {
  const [isQueryReady, setIsQueryReady] = useState(false);
  const { tagStatuses, setTagStatuses } = useCustomContext(WorksContext);

  const updateTagStatuses = (label: string) => () => {
    const newSelectedTags = tagStatuses.map((t) =>
      t.label === label ? { ...t, selected: !t.selected } : t
    );
    setTagStatuses(newSelectedTags);
  };

  const router = useRouter();
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
    <>
      <Stack
        gap={THEME.size.md}
        wrap="wrap"
        maxWidth={`calc(${THEME.size.pcMaxWidth} / 2)`}
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
        gap={THEME.size.md}
        wrap="wrap"
        maxWidth={`calc(${THEME.size.pcMaxWidth} / 2)`}
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
    </>
  );
};
