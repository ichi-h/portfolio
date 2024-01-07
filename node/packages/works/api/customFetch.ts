import { ErrorResponse } from "@/types/response";
import { right, left, Either } from "@/utils/either";
import { useEnv } from "@/utils/env";

export const fetchJson = async <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<Either<ErrorResponse, T>> => {
  const { APP_URL } = useEnv();
  const origin = APP_URL;
  const _input = (() => {
    if (typeof input === "string") {
      return `${origin}${input}`;
    }
    return {
      ...input,
      url: `${origin}${input.url}`,
    };
  })();
  const response = await fetch(_input, init);
  if (!response.ok) {
    const error: ErrorResponse = {
      status: response.status,
      message: response.body ? await response.text() : "Unknown error",
    };
    return left(error);
  }
  return right((await response.json()) as T);
};
