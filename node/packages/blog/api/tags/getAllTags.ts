import { fetchJson } from "../customFetch";

const _getAllTags = fetchJson<string[]>("/api/v1/tags");

export const getAllTags = () => _getAllTags("proxy");

export const getAllTagsViaContainer = () => _getAllTags("container");
