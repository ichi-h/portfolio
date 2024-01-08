import { Either } from "@/utils/either";

import { APIError } from "./error";

export type APIResult<T, E = any> = Either<APIError<E>, T>;
