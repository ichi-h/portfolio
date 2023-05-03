import { HorizonRole } from "@/ui/parts/horizon-role";
import { Headline } from "@/ui/parts/text/headline";

import { WorksList } from "./works-list";
import { WorksSearch } from "./works-search";
import { WorksTags } from "./works-tags";

export const WorksTemplate = () => {
  return (
    <>
      <Headline level={1}>Works</Headline>
      <WorksTags />
      <WorksSearch />
      <HorizonRole />
      <WorksList />
    </>
  );
};
