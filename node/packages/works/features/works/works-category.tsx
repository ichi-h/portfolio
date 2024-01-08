import { useRouter } from "next/router";

import { useCustomContext } from "@/hooks/use-custom-context";
import { THEME } from "@/ui/base";
import { TagCheckbox } from "@/ui/parts/form/tag-checkbox";
import { Stack } from "@/ui/parts/stack/stack";

import { WorksContext } from "./works-context";
import { CATEGORY, Category } from "@/model/category";

export const WorksCategory = () => {
  const router = useRouter();
  const {
    model: { category },
    send,
  } = useCustomContext(WorksContext);

  const categories = Object.values(CATEGORY);

  const check = categories.map((c) => {
    if (c === category) {
      return { label: c, selected: true };
    }
    return { label: c, selected: false };
  });

  const setCategory = (newCategory: Category) => {
    send({ type: "setCategory", category: newCategory });
  };

  return (
    <Stack justify="center" align="center" direction="column" width="100%">
      <Stack
        gap="xs2"
        wrap="wrap"
        maxWidth={`calc(${THEME.breakPoint.lg}px / 2)`}
      >
        <button onClick={() => setCategory("development")}>test</button>
        {check.map((c) => (
          <button key={c.label} onClick={() => setCategory(c.label)}>
            {c.label}
          </button>
        ))}
      </Stack>
    </Stack>
  );
};
