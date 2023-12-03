-- migrate:up

create table tags (
  id integer primary key,
  name text not null unique default ''
);

-- migrate:down

drop table if exists tags;
