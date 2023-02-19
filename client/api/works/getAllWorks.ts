import { WorkSummary } from "@/core/entities/work";

import { fetchJson } from "../customFetch";

export const getAllWorks = () =>
  fetchJson<WorkSummary[]>("container")("/api/v1/works");
