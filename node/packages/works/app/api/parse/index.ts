import { BFF_SERVER_URL } from "../baseUrl";
import { customFetch } from "../customFetch";

export type ParseMdToHtmlResponse = {
  html: string;
};

export const parseMdToHtml = (markdown: string) =>
  customFetch<ParseMdToHtmlResponse>(`${BFF_SERVER_URL}/parse`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ markdown }),
  });
