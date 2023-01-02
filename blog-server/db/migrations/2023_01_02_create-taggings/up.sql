create table taggings (
  id integer primary key autoincrement,
  tag_id integer not null,
  content_id integer not null,
  FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`content_id`) REFERENCES `contents` (`id`) ON DELETE CASCADE
);
