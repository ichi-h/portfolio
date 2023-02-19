create table tags (
  id integer primary key,
  name text not null unique default ''
);
