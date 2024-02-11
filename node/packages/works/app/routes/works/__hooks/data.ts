import { APIResult } from "@/api/result";
import { GetFilteredWorksResponse } from "@/api/works/filter";
import { Category } from "@/model/category";
import { LimitNumber } from "@/model/limitNumber";
import { Offset } from "@/model/offset";
import { SummarizedWork } from "@/model/work";

export type Model = {
  offset: Offset;
  limit: LimitNumber;
  search: string;
  category: Category | null;
  works: SummarizedWork[];
  total: number;
  worksLoader: "idle" | "loading" | "error";
  error: string;
};

export const init: Model = {
  offset: 0,
  limit: 18,
  search: "",
  category: null,
  works: [],
  total: 0,
  worksLoader: "loading",
  error: "",
} as const;

export type Message =
  | { type: "setOffset"; offset: Offset }
  | { type: "setSearch"; search: string }
  | { type: "setCategory"; category: Category | null }
  | { type: "getFilteredWorks" }
  | { type: "getFilteredWorksResp"; resp: APIResult<GetFilteredWorksResponse> };
