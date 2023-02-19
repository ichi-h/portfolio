create table articles (
  id integer primary key,
  work_id integer not null,
  body text not null default '',
  FOREIGN KEY (`work_id`) REFERENCES `works` (`id`) ON DELETE CASCADE
);
