import { Client } from "@notionhq/client";
import { Hono } from "hono";
import { NotionToMarkdown } from "notion-to-md";

const app = new Hono();

app.get("/pages", async (c) => {
  const secret = c.env?.NOTION_SECRET_KEY;
  const databaseId = c.env?.NOTION_DATABASE_ID;

  const notion = new Client({ auth: `${secret}` });
  const response = await notion.databases.query({
    database_id: `${databaseId}`,
  });
  const results = response.results.map((page: any) => ({
    id: page.id,
    updatedAt: page.properties.updatedAt.last_edited_time,
    description: page.properties.description.rich_text[0].plain_text,
    category: page.properties.category.select.name,
    unpublishedAt: page.properties.unpublishedAt.date
      ? page.properties.unpublishedAt.date.start
      : null,
    slug: page.properties.slug.rich_text[0].plain_text,
    thumbnailUrl: page.properties.thumbnailUrl.rich_text[0]
      ? page.properties.thumbnailUrl.rich_text[0].plain_text
      : "",
    publishedAt: page.properties.publishedAt.date
      ? page.properties.publishedAt.date.start
      : null,
    createdAt: page.properties.createdAt.created_time,
    title: page.properties.title.title[0].plain_text,
  }));
  return c.json(results);
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
