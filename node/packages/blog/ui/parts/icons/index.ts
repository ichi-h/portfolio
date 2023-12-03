import { GitHubIcon } from "./github";
import { PageIcon } from "./page";
import { PublishIcon } from "./publish";
import { SearchIcon } from "./search";
import { TwitterIcon } from "./twitter";
import { UpdateIcon } from "./update";

export * from "./github";
export * from "./page";
export * from "./publish";
export * from "./search";
export * from "./twitter";
export * from "./update";

export type TIcon =
  | typeof GitHubIcon
  | typeof PageIcon
  | typeof PublishIcon
  | typeof SearchIcon
  | typeof TwitterIcon
  | typeof UpdateIcon;
