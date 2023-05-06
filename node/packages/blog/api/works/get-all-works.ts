import { fetchJson } from "../customFetch";

import { WorkSummary } from "./types";

const _getAllWorks = fetchJson<WorkSummary[]>("/api/v1/works");

export const getAllWorks = () => _getAllWorks("proxy");

export const getAllWorksViaContainer = () => _getAllWorks("container");
