import { Either, left, right } from "@/utils/either";
import { useEnv } from "@/utils/env";

import { APIError } from "./error";

interface CustomRequestInit extends RequestInit {
  resolver?: "json" | "text" | "blob" | "arrayBuffer" | "formData";
}

export const customFetch = async <T, E = any>(
  input: RequestInfo,
  init?: CustomRequestInit
): Promise<Either<APIError<E>, T>> => {
  const { APP_URL } = useEnv();
  const _input = (() => {
    if (typeof input === "string") {
      return `${APP_URL}${input}`;
    }
    return {
      ...input,
      url: `${APP_URL}${input.url}`,
    };
  })();

  const response = await fetch(_input, init);

  if (!response.ok) {
    return left(
      new APIError(response.statusText, await response.json(), response.status)
    );
  }

  return right((await response[init?.resolver || "json"]()) as T);
};
