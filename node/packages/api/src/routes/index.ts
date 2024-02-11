import { Hono } from "hono";
import { remark } from "remark";
import html from "remark-html";

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

export default routes;
