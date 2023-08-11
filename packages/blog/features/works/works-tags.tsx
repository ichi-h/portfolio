import { useRouter } from "next/router";
import { ChangeEvent } from "react";

import { useCustomContext } from "@/hooks/use-custom-context";
import { Category } from "@/markdown";
import { THEME } from "@/ui/base";
import { Stack } from "@/ui/parts/stack/stack";

import { WorksContext } from "./works-context";

export const WorksTags = () => {
  const router = useRouter();
  const { selectedCategory, setSelectedCategory } =
    useCustomContext(WorksContext);

  const selected = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value as Category;
    setSelectedCategory(category);
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        category: category,
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
        <select onChange={selected} value={selectedCategory}>
          <option value="development">Development</option>
          <option value="music">Music</option>
          <option value="philosophy">Philosophy</option>
          <option value="photograph">Photograph</option>
        </select>
      </Stack>
    </Stack>
  );
};
