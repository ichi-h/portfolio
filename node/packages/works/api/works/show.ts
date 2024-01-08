import { Work } from "@/model/work";

import { customFetch } from "../customFetch";
import { APIResult } from "../result";

export const getWork = async (
  slug: string,
  receive: (work: APIResult<Work>) => void,
): Promise<void> => {
  const work = await customFetch<Work>(`/api/works/${slug}`);
  receive(work);
};
