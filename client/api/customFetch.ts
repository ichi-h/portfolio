import { ErrorResponse } from "@/types/response";
import { right, left, Either } from "@/utils/either";
import { useEnv } from "@/utils/env";

export type FetchOrigin = "proxy" | "container";

const customFetch = (originType: FetchOrigin) => async (input: RequestInfo, init?: RequestInit) => {
  const { APP_URL, BLOG_SERVER_URL } = useEnv();
  const origin = originType === "proxy" ? APP_URL : BLOG_SERVER_URL;
  if (typeof input === "string") {
    const url = `${origin}${input}`;
    return fetch(url, init);
  }
  const url = `${origin}${input.url}`;
  return fetch({ ...input, url }, init);
};

export const fetchJson = <T>(originType: FetchOrigin) => async (
  input: RequestInfo,
  init?: RequestInit
): Promise<Either<ErrorResponse, T>> => {
  const response = await customFetch(originType)(input, init);
  if (!response.ok) {
    const error: ErrorResponse = {
      status: response.status,
      message: response.body ? await response.text() : "Unknown error",
    };
    return left(error);
  }
  return right((await response.json()) as T);
};
