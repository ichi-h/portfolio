import { useEnv } from "@/utils/env";

export const WORKS_SERVER_URL = (() => useEnv().WORKS_SERVER_URL)();

export const FRONT_API_SERVER_URL = (() => useEnv().FRONT_API_SERVER_URL)();
