import { APIResult } from "@/api/result";
import { Work } from "@/model/work";

export type Model = {
  work: Work;
  status: "ok" | "error";
};

export const init: Model = {
  work: {
    slug: "",
    category: "philosophy",
    title: "",
    description: "",
    body: "",
    thumbnailUrl: "",
    publishedAt: "",
    updatedAt: "",
  },
  status: "ok",
} as const;

export type Message =
  | { type: "getWork"; slug: string }
  | { type: "getWorkResp"; resp: APIResult<Work> }
  | { type: "parseMdToHtml"; body: string }
  | { type: "parseMdToHtmlResult"; result: string };
