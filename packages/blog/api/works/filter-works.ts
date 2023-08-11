import { fetchJson } from "../customFetch";

import type { Work } from "portfolio-works";

export const filterWorks = (searchWord: string, tags: string[]) => {
  const searchWordQuery = searchWord ? `search_word=${searchWord}` : "";
  const tagsQuery = tags.length ? `tags=${tags.join(",")}` : "";
  const query = (() => {
    if (searchWordQuery && tagsQuery) {
      return `?${searchWordQuery}&${tagsQuery}`;
    }
    if (searchWordQuery) {
      return `?${searchWordQuery}`;
    }
    if (tagsQuery) {
      return `?${tagsQuery}`;
    }
    return "";
  })();
  return fetchJson<Work[]>(`/api/works${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
