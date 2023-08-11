import { fetchJson } from "../customFetch";

export const getAllTags = () => fetchJson<string[]>("/api/tags");
