const keys = ["APP_URL", "WORKS_SERVER_URL", "OG_IMAGE_SERVER_URL"] as const;

export const useEnv = () => {
  const env = {
    APP_URL: import.meta.env.VITE_APP_URL,
    WORKS_SERVER_URL: import.meta.env.VITE_WORKS_SERVER_URL,
    OG_IMAGE_SERVER_URL: import.meta.env.VITE_OG_IMAGE_SERVER_URL,
  } as const;

  const missingEnv = Object.entries(env)
    .filter(([, value]) => value === undefined)
    .map(([key]) => key);

  if (missingEnv.length > 0) {
    throw new Error(`Missing environment variables: ${missingEnv.join(", ")}`);
  }

  return env as Record<(typeof keys)[number], string>;
};
