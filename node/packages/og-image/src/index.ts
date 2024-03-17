import { Hono } from "hono";
import { cache } from "hono/cache";

import { ogpUseCase } from "./useCases/ogp";

const app = new Hono();

app.get(
  "/",
  cache({
    cacheName: "ogp",
    cacheControl: "public, max-age=86400",
  }),
  async (c) => {
    const title = c.req.query("title") || "";
    const imageUrl = `${c.env?.RESOURCE_SERVER_ORIGIN}/bg_ogp.jpg`;
    const svg = await ogpUseCase(title, imageUrl);
    c.status(200);
    c.header("Content-Type", "image/svg+xml");
    c.header("Vary", "Accept-Encoding");
    return c.body(svg);
  },
);

export default app;
