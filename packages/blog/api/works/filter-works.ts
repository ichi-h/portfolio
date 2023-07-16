import { fetchJson } from "../customFetch";

import { WorkSummary } from "./types";

const _filterWorks = (searchWord: string, tags: string[]) => {
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
  return fetchJson<WorkSummary[]>(`/blog/v1/works/filter${query}`);
};

export const filterWorks = (searchWord: string, tags: string[]) =>
  _filterWorks(searchWord, tags)("proxy");

export const filterWorksViaContainer = (searchWord: string, tags: string[]) =>
  _filterWorks(searchWord, tags)("container");
