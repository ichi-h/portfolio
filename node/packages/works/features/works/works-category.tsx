import { useRouter } from "next/router";

import { useCustomContext } from "@/hooks/use-custom-context";
import { THEME } from "@/ui/base";
import { TagCheckbox } from "@/ui/parts/form/tag-checkbox";
import { Stack } from "@/ui/parts/stack/stack";

import { WorksContext } from "./works-context";

export const WorksCategory = () => {
  const router = useRouter();
  const { selectedCategory, setSelectedCategory } =
    useCustomContext(WorksContext);

  const toggleTag = (label: string) => () => {
    const newSelectedCategory = selectedCategory.map((t) =>
      t.label === label ? { ...t, selected: !t.selected } : t
    );
    setSelectedCategory(newSelectedCategory);
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        category: newSelectedCategory
          .filter((t) => t.selected)
          .map((t) => t.label)
          .join(","),
      },
    });
  };

  return (
    <Stack justify="center" align="center" direction="column" width="100%">
      <Stack
        gap="xs2"
        wrap="wrap"
        maxWidth={`calc(${THEME.breakPoint.lg}px / 2)`}
      >
        {selectedCategory.map((tag) => (
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
