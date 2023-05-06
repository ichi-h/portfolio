import { useRouter } from "next/router";

import { useCustomContext } from "@/hooks/use-custom-context";
import { THEME } from "@/ui/base";
import { TagCheckbox } from "@/ui/parts/form/tag-checkbox";
import { Stack } from "@/ui/parts/stack/stack";

import { WorksContext } from "./works-context";

export const WorksTags = () => {
  const router = useRouter();
  const { selectedTags, setSelectedTags } = useCustomContext(WorksContext);

  const toggleTag = (label: string) => () => {
    const newSelectedTags = selectedTags.map((t) =>
      t.label === label ? { ...t, selected: !t.selected } : t
    );
    setSelectedTags(newSelectedTags);
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
        {selectedTags.map((tag) => (
          <TagCheckbox
            key={tag.label}
            isChecked={tag.selected}
            onChange={toggleTag(tag.label)}
          >
            {tag.label}
          </TagCheckbox>
        ))}
      </Stack>
    </Stack>
  );
};
