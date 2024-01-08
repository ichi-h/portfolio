import { Headline } from "@/ui/parts/text/headline";

import { WorksCategory } from "./works-category";
import { WorksList } from "./works-list";
import { useUpdate } from "./update";
import { useEffect, useState } from "react";
import { init } from "./data";
import { WorksContext } from "./works-context";

export const WorksTemplate = () => {
  const [model, setModel] = useState(init);
  const send = useUpdate(model, setModel);

  useEffect(() => {
    send({ type: "getFilteredWorks" });
  }, []);

  return (
    <WorksContext.Provider
      value={{
        model,
        send,
      }}
    >
      <Headline level={1}>Works</Headline>
      <WorksCategory />
      <WorksList />
    </WorksContext.Provider>
  );
};
