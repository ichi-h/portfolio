import { useContext } from "react";

import { THEME } from "@/ui/base";
import { Box } from "@/ui/parts/box/box";
import { Grid } from "@/ui/parts/grid/grid";
import { Text } from "@/ui/parts/text/text";

import { WorksCard } from "./works-card";
import { WorksContext } from "./worksContext";

export const WorksList = () => {
  const provider = useContext(WorksContext);
  if (!provider) throw new Error("Provider is not found.");
  const { filteredArticles } = provider;

  if (filteredArticles.length === 0) {
    return (
      <Box width="100%" align="center">
        <Text fontSize={THEME.size.lg}>
          お探しのものは見つかりませんでした。
        </Text>
      </Box>
    );
  }

  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateRows="1fr"
      gap={THEME.size.xl2}
      width="100%"
    >
      {filteredArticles.map((article) => (
        <WorksCard key={article.id} article={article} />
      ))}
    </Grid>
  );
};
