import { GitHubIcon } from "./github";
import { PageIcon } from "./page";
import { PublishIcon } from "./publish";
import { SearchIcon } from "./search";
import { UpdateIcon } from "./update";
import { XIcon } from "./x";

export * from "./github";
export * from "./icon";
export * from "./page";
export * from "./publish";
export * from "./search";
export * from "./x";
export * from "./update";

export type TIcon =
  | typeof GitHubIcon
  | typeof PageIcon
  | typeof PublishIcon
  | typeof SearchIcon
  | typeof XIcon
  | typeof UpdateIcon;
