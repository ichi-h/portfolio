import { ErrorResponse } from "@/types/response";
import { right, left, Either } from "@/utils/either";
import { useEnv } from "@/utils/env";

const customFetch = async (input: RequestInfo, init?: RequestInit) => {
  const { APP_URL } = useEnv();
  const url = `${APP_URL}${input}`;
  if (typeof input === "string") {
    return fetch(url, init);
  }
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
