import { ErrorResponse } from "@/types/response";
import { right, left, Either } from "@/utils/either";
import { useEnv } from "@/utils/env";

export type OriginType = "proxy" | "container";

const customFetch =
  (input: RequestInfo, init?: RequestInit) =>
  async (originType: OriginType) => {
    const { APP_URL, BLOG_SERVER_URL } = useEnv();
    const origin = originType === "proxy" ? APP_URL : BLOG_SERVER_URL;
    if (typeof input === "string") {
      const url = `${origin}${input}`;
      return fetch(url, init);
    }
    const url = `${origin}${input.url}`;
    return fetch({ ...input, url }, init);
  };

export const fetchJson =
  <T>(input: RequestInfo, init?: RequestInit) =>
  async (originType: OriginType): Promise<Either<ErrorResponse, T>> => {
    const response = await customFetch(input, init)(originType);
    if (!response.ok) {
      const error: ErrorResponse = {
        status: response.status,
        message: response.body ? await response.text() : "Unknown error",
      };
      return left(error);
    }
    return right((await response.json()) as T);
  };
