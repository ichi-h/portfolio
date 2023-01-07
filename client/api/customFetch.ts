import { right, left, Either } from "@/utils/either";
import { useEnv } from "@/utils/env";

const customFetch = async (
  input: RequestInfo,
  init?: RequestInit,
) => {
  const { APP_URL } = useEnv();
  const url = `${APP_URL}${input}`;
  if (typeof input === "string") {
    return fetch(url, init);
  }
  return fetch({ ...input, url }, init);
};

export const fetchJson = async <E, T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<Either<E, T>> => {
  const response = await customFetch(input, init);
  if (!response.ok) {
    return left(await response.json() as E);
  }
  return right(await response.json() as T);
};
