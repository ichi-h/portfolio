import { createContext } from "react";

import { useFilteredWorks } from "./use-filtered-articles";

export const WorksContext = createContext<ReturnType<
  typeof useFilteredWorks
> | null>(null);
