import { Work } from "@/model/work";
import { BaseMessage } from "@/utils/elmish";

import { customFetch } from "../customFetch";
import { APIResult } from "../result";

export const getWork = async <Msg extends BaseMessage>(
  slug: string,
  receive: (work: APIResult<Work>) => Msg,
): Promise<Msg> => {
  const work = await customFetch<Work>(`/works/${slug}`);
  return receive(work);
};
