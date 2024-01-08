import { Category } from "@/model/category";
import { LimitNumber } from "@/model/limitNumber";
import { Offset } from "@/model/offset";
import { SummarizedWork } from "@/model/work";
import { joinQueryParams } from "@/utils/queryParams";

import { customFetch } from "../customFetch";
import { APIResult } from "../result";

export const getFilteredWorks = async (
  query: {
    search?: string;
    category?: Category;
    offset: Offset;
    limit: LimitNumber;
  },
  receive: (work: APIResult<SummarizedWork[]>) => void,
): Promise<void> => {
  const work = await customFetch<SummarizedWork[]>(
    `/api/works/filter${joinQueryParams(query)}`,
  );
  receive(work);
};
