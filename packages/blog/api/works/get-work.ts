import { fetchJson } from "../customFetch";

import { Work } from "./types";

const _getWork = (slug: string) => fetchJson<Work>(`/blog/v1/works/${slug}`);

export const getWork = (slug: string) => _getWork(slug)("proxy");

export const getWorkViaContainer = (slug: string) =>
  _getWork(slug)("container");
