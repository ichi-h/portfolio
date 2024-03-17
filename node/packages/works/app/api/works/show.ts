import { Work } from "@/model/work";

import { WORKS_SERVER_URL } from "../baseUrl";
import { BasicAuth, customFetch } from "../customFetch";

export const getWork = (auth: BasicAuth) => (slug: string) =>
  customFetch(auth)<Work>(`${WORKS_SERVER_URL}/works/${slug}`);
