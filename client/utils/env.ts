export const useEnv = () => {
  const env = {
    APP_URL: process.env.APP_URL || '',
    NODE_ENV: process.env.NODE_ENV,
  } as const;
  return env;
};
