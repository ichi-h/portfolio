const keys = ["APP_URL", "BLOG_SERVER_URL", "NODE_ENV"] as const;

export const useEnv = () => {
  const env = {
    APP_URL: process.env.APP_URL,
    BLOG_SERVER_URL: process.env.BLOG_SERVER_URL,
    NODE_ENV: process.env.NODE_ENV,
  } as const;

  const missingEnv = Object.entries(env)
    .filter(([, value]) => value === undefined)
    .map(([key]) => key);

  if (missingEnv.length > 0) {
    throw new Error(`Missing environment variables: ${missingEnv.join(", ")}`);
  }

  return env as Record<(typeof keys)[number], string>;
};
