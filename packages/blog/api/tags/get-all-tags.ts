import { fetchJson } from "../customFetch";

const _getAllTags = fetchJson<string[]>("/blog/v1/tags");

export const getAllTags = () => _getAllTags("proxy");

export const getAllTagsViaContainer = () => _getAllTags("container");
