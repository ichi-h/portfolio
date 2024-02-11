import { Work } from "@/model/work";

import { WORKS_SERVER_URL } from "../baseUrl";
import { customFetch } from "../customFetch";

export const getWork = (slug: string) =>
  customFetch<Work>(`${WORKS_SERVER_URL}/works/${slug}`);
