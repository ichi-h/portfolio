import { GitHubIcon } from "./github";
import { OpenInNewIcon } from "./openInNew";
import { PageIcon } from "./page";
import { PublishIcon } from "./publish";
import { SearchIcon } from "./search";
import { UpdateIcon } from "./update";
import { XIcon } from "./x";

export * from "./github";
export * from "./icon";
export * from "./openInNew";
export * from "./page";
export * from "./publish";
export * from "./search";
export * from "./x";
export * from "./update";

export type TIcon =
  | typeof GitHubIcon
  | typeof OpenInNewIcon
  | typeof PageIcon
  | typeof PublishIcon
  | typeof SearchIcon
  | typeof XIcon
  | typeof UpdateIcon;
