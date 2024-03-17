import { useEnv } from "@/utils/env";

export const WORKS_SERVER_URL = (() => useEnv().WORKS_SERVER_URL)();

export const OG_IMAGE_SERVER_URL = (() => useEnv().OG_IMAGE_SERVER_URL)();
