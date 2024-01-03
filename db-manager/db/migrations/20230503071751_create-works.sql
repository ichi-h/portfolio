-- migrate:up

create table works (
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

-- migrate:down

drop table if exists works;
