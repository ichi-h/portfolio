export {};

// cloudflare/workers-types
// https://github.com/cloudflare/workers-types#using-bindings
declare global {
  const __STATIC_CONTENT: KVNamespace;

  const SESSION_SECRET: string;

  const APP_URL: string;
  const WORKS_SERVER_URL: string;
  const BFF_SERVER_URL: string;
}
