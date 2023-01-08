import { createContext } from "react";

import { useFilteredArticles } from "./useFilteredArticles";

export const WorksContext = createContext<ReturnType<
  typeof useFilteredArticles
> | null>(null);
