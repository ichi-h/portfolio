import { fetchJson } from "../customFetch";

import type { Work } from "portfolio-works";

export const getAllLatestWorks = () =>
  fetchJson<Work[]>(`/api/works`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
