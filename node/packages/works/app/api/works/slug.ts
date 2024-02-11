import { WORKS_SERVER_URL } from "../baseUrl";
import { customFetch } from "../customFetch";

export const getAllWorkSlugs = () =>
  customFetch<string[]>(`${WORKS_SERVER_URL}/works/slug`);
