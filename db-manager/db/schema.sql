CREATE TABLE IF NOT EXISTS "schema_migrations" (version varchar(128) primary key);
CREATE TABLE articles (
  id integer primary key,
  work_id integer not null,
  body text not null default '',
  FOREIGN KEY (`work_id`) REFERENCES `works` (`id`) ON DELETE CASCADE
);
CREATE TABLE taggings (
  id integer primary key,
  tag_id integer not null,
  work_id integer not null,
  FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`work_id`) REFERENCES `works` (`id`) ON DELETE CASCADE
);
CREATE TABLE tags (
  id integer primary key,
  name text not null unique default ''
);
CREATE TABLE works (
  id integer primary key,
  category text not null default '',
  slug text not null unique default '',
  title text not null default '',
  description text not null default '',
  thumbnail_url text not null default '',
  created_at datetime not null default CURRENT_TIMESTAMP,
  revised_at datetime not null default CURRENT_TIMESTAMP,
  published_at datetime default null,
  unpublished_at datetime default null
);
-- Dbmate schema migrations
INSERT INTO "schema_migrations" (version) VALUES
  ('20230503071236'),
  ('20230503071428'),
  ('20230503071637'),
  ('20230503071751');
