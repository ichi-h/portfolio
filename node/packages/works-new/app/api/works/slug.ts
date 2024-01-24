import { customFetch } from "../customFetch";

export const getAllWorkSlugs = () => customFetch<string[]>("/works/slug");
