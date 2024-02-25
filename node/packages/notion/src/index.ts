import { Client } from "@notionhq/client";
import { Hono } from "hono";
import { NotionToMarkdown } from "notion-to-md";

const app = new Hono();

app.get("/pages/ids", async (c) => {
  const secret = c.env?.NOTION_SECRET_KEY;
  const databaseId = c.env?.NOTION_DATABASE_ID;

  const notion = new Client({ auth: `${secret}` });
  const response = await notion.databases.query({
    database_id: `${databaseId}`,
  });
  const pageIds = response.results.map((page) => page.id);
  return c.json(pageIds);
});

app.get("/blocks/:pageId", async (c) => {
  const pageId = c.req.param("pageId");
  const secret = c.env?.NOTION_SECRET_KEY;
  const notion = new Client({ auth: `${secret}` });
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdBlocks).parent;
  return c.json({ text: mdString });
});

export default app;
