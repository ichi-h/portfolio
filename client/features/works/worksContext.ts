import { createContext } from "react";

import { useFilteredWorks } from "./useFilteredArticles";

export const WorksContext = createContext<ReturnType<
  typeof useFilteredWorks
> | null>(null);
