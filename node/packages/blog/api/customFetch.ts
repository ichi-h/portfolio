import { ErrorResponse } from "@/types/response";
import { right, left, Either } from "@/utils/either";
import { useEnv } from "@/utils/env";

export type FetchOrigin = "proxy" | "container";

const customFetch = async (input: RequestInfo, init?: RequestInit) => {
  const { BLOG_SERVER_URL } = useEnv();
  if (typeof input === "string") {
    const url = `${BLOG_SERVER_URL}${input}`;
    return fetch(url, init);
  }
  const url = `${origin}${input.url}`;
  return fetch({ ...input, url }, init);
};

export const fetchJson = async <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<Either<ErrorResponse, T>> => {
  const response = await customFetch(input, init);
  if (!response.ok) {
    const error: ErrorResponse = {
      status: response.status,
      message: response.body ? await response.text() : "Unknown error",
    };
    return left(error);
  }
  return right((await response.json()) as T);
};
