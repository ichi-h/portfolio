create table tags (
  id integer primary key autoincrement,
  name text not null unique default ''
);
