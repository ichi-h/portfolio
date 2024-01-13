import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { categorySchema } from "@/model/category";
import { Headline } from "@/ui/parts/text/headline";

import { init } from "./data";
import { useUpdate } from "./update";
import { WorksCategory } from "./works-category";
import { WorksContext } from "./works-context";
import { WorksList } from "./works-list";

export const WorksTemplate = () => {
  const [model, setModel] = useState(init);
  const [isFetched, setIsFetched] = useState(false);
  const send = useUpdate(model, setModel);

  const router = useRouter();

  useEffect(() => {
    if (isFetched) return;
    if (!router.isReady) return;
    const categoryRes = categorySchema.safeParse(router.query?.category);
    send({
      type: "setCategory",
      category: categoryRes.success ? categoryRes.data : null,
    });
    setIsFetched(true);
  }, [isFetched, setIsFetched, router, send, categorySchema]);

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
