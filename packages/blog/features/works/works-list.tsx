import { useCustomContext } from "@/hooks/use-custom-context";
import { THEME } from "@/ui/base";
import { Grid } from "@/ui/parts/grid/grid";
import { Stack } from "@/ui/parts/stack/stack";
import { Text } from "@/ui/parts/text/text";

import { WorksCard } from "./works-card";
import { WorksContext } from "./works-context";

export const WorksList = () => {
  const provider = useCustomContext(WorksContext);
  const { filteredWorks } = provider;

  return (
    <Stack direction="column" gap="md">
      {filteredWorks.length === 0 && (
        <Text fontSize={THEME.size.lg} align="center">
          お探しのものは見つかりませんでした。
        </Text>
      )}
      {filteredWorks.length > 0 && (
        <Grid
          gridTemplateColumns="repeat(3, 1fr)"
          mdGridTemplateColumns="repeat(2, 1fr)"
          smGridTemplateColumns="repeat(1, 1fr)"
          gridTemplateRows="1fr"
          gap={THEME.size.xl2}
          width="100%"
        >
          {filteredWorks.map((work) => (
            <WorksCard key={work.slug} work={work} />
          ))}
        </Grid>
      )}
    </Stack>
  );
};
