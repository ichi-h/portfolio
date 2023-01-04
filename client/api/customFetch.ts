import { right, left, Either } from "@/utils/either";
import { useEnv } from "@/utils/env";

export interface ResponseError {
  status: number;
  statusText: string;
}

const customFetch = async (
  input: RequestInfo,
  init?: RequestInit,
) => {
  const { APP_URL } = useEnv();
  if (typeof input === "string") {
    return fetch(`${APP_URL}${input}`, init);
  }
  return fetch({ ...input, url: `${APP_URL}${input.url}` }, init);
};

export const fetchJson = async <T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<Either<ResponseError, T>> => {
  const response = await customFetch(input, init);
  if (!response.ok) {
    return left({
      status: response.status,
      statusText: response.statusText,
    });
  }
  return right(await response.json() as T);
};
