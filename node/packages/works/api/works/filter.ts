import { Category } from "@/model/category";
import { LimitNumber } from "@/model/limitNumber";
import { Offset } from "@/model/offset";
import { SummarizedWork } from "@/model/work";
import { BaseMessage } from "@/utils/elmish";
import { joinQueryParams } from "@/utils/queryParams";

import { customFetch } from "../customFetch";
import { APIResult } from "../result";

export type GetFilteredWorksResponse = {
  total: number;
  works: SummarizedWork[];
};

export const getFilteredWorks = async <Msg extends BaseMessage>(
  query: {
    search?: string;
    category?: Category;
    offset: Offset;
    limit: LimitNumber;
  },
  receive: (work: APIResult<GetFilteredWorksResponse>) => Msg,
): Promise<Msg> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const work = await customFetch<GetFilteredWorksResponse>(
    `/works/filter${joinQueryParams(query)}`,
  );
  return receive(work);
};
