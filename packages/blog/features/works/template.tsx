import { Headline } from "@/ui/parts/text/headline";

import { WorksCategory } from "./works-category";
import { WorksList } from "./works-list";

export const WorksTemplate = () => {
  return (
    <>
      <Headline level={1}>Works</Headline>
      <WorksCategory />
      <WorksList />
    </>
  );
};
