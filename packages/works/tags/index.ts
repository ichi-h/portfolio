export * from "./primary";
export * from "./secondary";

import { PRIMARY_TAGS } from "./primary";
import { SECONDARY_TAGS } from "./secondary";

export const TAGS = [...PRIMARY_TAGS, ...SECONDARY_TAGS] as const;
