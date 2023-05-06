import { fetchJson } from "../customFetch";

import { WorkSummary } from "./types";

const _filterWorks = (
  searchWord: string,
  tags: string[],
  controller?: AbortController
) => {
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
  return fetchJson<WorkSummary[]>(`/api/v1/works/filter${query}`, {
    signal: controller?.signal,
  });
};

export const filterWorks = (
  searchWord: string,
  tags: string[],
  controller?: AbortController
) => _filterWorks(searchWord, tags, controller)("proxy");

export const filterWorksViaContainer = (
  searchWord: string,
  tags: string[],
  controller?: AbortController
) => _filterWorks(searchWord, tags, controller)("container");
