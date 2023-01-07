import { useEffect, useState } from "react";

import { useCustomContext } from "@/lib/remark/react/useCustomContext";
import { THEME } from "@/ui/base";
import { TagCheckbox } from "@/ui/parts/form/tag-checkbox";
import { Stack } from "@/ui/parts/stack/stack";

import { WorksContext } from "./worksContext";

export const WorksTags = () => {
  const { tags, setSelectedTags } = useCustomContext(WorksContext);
  const [tagCheckboxes, setTagCheckboxes] = useState(
    tags.map((t) => ({ label: t, isChecked: false }))
  );
  const onChange = (label: string) => () => {
    setTagCheckboxes(
      tagCheckboxes.map((t) =>
        t.label === label ? { ...t, isChecked: !t.isChecked } : t
      )
    );
  };

  useEffect(() => {
    setSelectedTags(
      tagCheckboxes.filter((t) => t.isChecked).map((t) => t.label)
    );
  }, [tagCheckboxes, setSelectedTags]);

  return (
    <Stack gap={THEME.size.md} wrap="wrap" maxWidth="500px">
      {tagCheckboxes.map((tag) => (
        <TagCheckbox
          key={tag.label}
          isChecked={tag.isChecked}
          onChange={onChange(tag.label)}
        >
          {tag.label}
        </TagCheckbox>
      ))}
    </Stack>
  );
};
