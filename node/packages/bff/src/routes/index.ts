import { Hono } from "hono";
import { cache } from "hono/cache";
import { remark } from "remark";
import html from "remark-html";

import { ogpUseCase } from "../useCases/ogp";
import { parseUseCase } from "../useCases/parse";

const routes = new Hono();

type ParseRequest = {
  markdown: string;
};

routes.post("/parse", async (c) => {
  const mdToHtml = async (md: string) =>
    (await remark().use(html).process(md)).toString();
  const body = await c.req.json<ParseRequest>();
  const res = await parseUseCase(body.markdown, mdToHtml);
  return c.json({ html: res });
});

routes.get(
  "/ogp",
  cache({
    cacheName: "ogp",
    cacheControl: "public, max-age=86400",
  }),
  async (c) => {
    const title = c.req.query("title") || "";
    const imageUrl = `${c.env?.FRONT_URL}/bg_ogp.jpg`;
    const svg = await ogpUseCase(title, imageUrl);
    c.status(200);
    c.header("Content-Type", "image/svg+xml");
    c.header("Vary", "Accept-Encoding");
    return c.body(svg);
  },
);

export default routes;
