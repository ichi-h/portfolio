import { useState } from "react";

import { useCustomContext } from "@/hooks/use-custom-context";
import { Work } from "@/markdown";
import { THEME } from "@/ui/base";
import { Radio, RadioItem } from "@/ui/parts/form/radio";
import { Grid } from "@/ui/parts/grid/grid";
import { Stack } from "@/ui/parts/stack/stack";
import { Text } from "@/ui/parts/text/text";

import { WorksCard } from "./works-card";
import { WorksContext } from "./works-context";

export const WorksList = () => {
  const provider = useCustomContext(WorksContext);
  const { filteredWorks } = provider;

  const items: RadioItem<keyof Pick<Work, "createdAt" | "updatedAt">>[] = [
    {
      label: "作成日順",
      value: "createdAt",
    },
    {
      label: "更新日順",
      value: "updatedAt",
    },
  ];
  const [order, setOrder] =
    useState<(typeof items)[number]["value"]>("createdAt");

  const sortedWorks = filteredWorks.sort((a, b) => {
    if (order === "createdAt") {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);
      return aDate > bDate ? -1 : 1;
    }
    if (order === "updatedAt") {
      const aDate = new Date(a.updatedAt);
      const bDate = new Date(b.updatedAt);
      return aDate > bDate ? -1 : 1;
    }
    return 0;
  });

  return (
    <Stack direction="column" gap="md">
      <Stack justify="end">
        <Radio name="order" items={items} value={order} onClick={setOrder} />
      </Stack>
      {sortedWorks.length === 0 && (
        <Text fontSize={THEME.size.lg} align="center">
          お探しのものは見つかりませんでした。
        </Text>
      )}
      {sortedWorks.length > 0 && (
        <Grid
          gridTemplateColumns="repeat(3, 1fr)"
          mdGridTemplateColumns="repeat(2, 1fr)"
          smGridTemplateColumns="repeat(1, 1fr)"
          gridTemplateRows="1fr"
          gap={THEME.size.xl2}
          width="100%"
        >
          {sortedWorks.map((work) => (
            <WorksCard key={work.slug} work={work} order={order} />
          ))}
        </Grid>
      )}
    </Stack>
  );
};
