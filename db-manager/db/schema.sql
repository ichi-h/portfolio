CREATE TABLE IF NOT EXISTS "schema_migrations" (version varchar(128) primary key);
CREATE TABLE taggings (
  id integer primary key,
  tag_id integer not null,
  work_slug text not null,
  FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`work_slug`) REFERENCES `works` (`slug`) ON DELETE CASCADE
);
CREATE TABLE tags (
  id integer primary key,
  name text not null unique default ''
);
CREATE TABLE works (
  slug text not null primary key,
  category text not null default '',
  title text not null default '',
  description text not null default '',
  thumbnail_url text not null default '',
  body text not null default '',
  created_at datetime not null default CURRENT_TIMESTAMP,
  updated_at datetime not null default CURRENT_TIMESTAMP,
  published_at datetime default null,
  unpublished_at datetime default null
);
-- Dbmate schema migrations
INSERT INTO "schema_migrations" (version) VALUES
  ('20230503071428'),
  ('20230503071637'),
  ('20230503071751');
