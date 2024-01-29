import { Category } from "@/model/category";
import { LimitNumber } from "@/model/limitNumber";
import { Offset } from "@/model/offset";
import { SummarizedWork } from "@/model/work";
import { joinQueryParams } from "@/utils/queryParams";

import { customFetch } from "../customFetch";

export type GetFilteredWorksResponse = {
  total: number;
  works: SummarizedWork[];
};

export const getFilteredWorks = (query: {
  search?: string;
  category?: Category;
  offset: Offset;
  limit: LimitNumber;
}) =>
  customFetch<GetFilteredWorksResponse>(
    `/works/filter${joinQueryParams(query)}`,
  );