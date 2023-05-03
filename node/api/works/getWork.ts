import { Work } from "@/core/entities/work";

import { fetchJson } from "../customFetch";

export const getWork = (slug: string) =>
  fetchJson<Work>("container")(`/api/v1/works/${slug}`);
