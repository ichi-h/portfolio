const keys = [
  "APP_URL",
  "WORKS_SERVER_URL",
  "FRONT_API_SERVER_URL",
  "ENVIRONMENT",
] as const;

export const useEnv = () => {
  const env = {
    APP_URL,
    WORKS_SERVER_URL,
    FRONT_API_SERVER_URL,
    ENVIRONMENT,
  } as const;

  const missingEnv = Object.entries(env)
    .filter(([, value]) => value === undefined)
    .map(([key]) => key);

  if (missingEnv.length > 0) {
    throw new Error(`Missing environment variables: ${missingEnv.join(", ")}`);
  }

  return env as Record<(typeof keys)[number], string>;
};