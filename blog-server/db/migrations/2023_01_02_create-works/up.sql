create table works (
  id integer primary key,
  category text not null default '',
  slug text not null unique default '',
  title text not null default '',
  description text not null default '',
  thumbnail_url text not null default '',
  is_draft integer not null default 0,
  created_at datetime not null default CURRENT_TIMESTAMP,
  revised_at datetime not null default CURRENT_TIMESTAMP,
  published_at datetime default null,
  unpublished_at datetime default null
);
