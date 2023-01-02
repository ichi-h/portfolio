create table articles (
  id integer primary key autoincrement,
  content_id integer not null,
  body text not null default '',
  FOREIGN KEY (`content_id`) REFERENCES `contents` (`id`) ON DELETE CASCADE
);
