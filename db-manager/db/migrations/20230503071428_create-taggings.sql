-- migrate:up

create table taggings (
  id integer primary key,
  tag_id integer not null,
  work_id integer not null,
  FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`work_id`) REFERENCES `works` (`id`) ON DELETE CASCADE
);

-- migrate:down

drop table if exists taggings;
