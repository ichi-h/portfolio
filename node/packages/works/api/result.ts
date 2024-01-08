import { Result } from "@/utils/result";

import { APIError } from "./error";

export type APIResult<T, E = any> = Result<T, APIError<E>>;
