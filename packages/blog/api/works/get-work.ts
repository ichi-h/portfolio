import { fetchJson } from "../customFetch";

import type { Work } from "portfolio-works";

export const getWork = (slug: string) => fetchJson<Work>(`/api/works/${slug}`);
