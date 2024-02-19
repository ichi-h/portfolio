import { useEnv } from "@/utils/env";

export const WORKS_SERVER_URL = (() => useEnv().WORKS_SERVER_URL)();

export const BFF_SERVER_URL = (() => useEnv().BFF_SERVER_URL)();
