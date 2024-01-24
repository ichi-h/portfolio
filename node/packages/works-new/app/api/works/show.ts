import { Work } from "@/model/work";

import { customFetch } from "../customFetch";

export const getWork = (slug: string) => customFetch<Work>(`/works/${slug}`);
