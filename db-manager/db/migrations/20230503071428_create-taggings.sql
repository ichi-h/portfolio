-- migrate:up

create table taggings (
  id integer primary key,
  tag_id integer not null,
  work_slug text not null,
  FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`work_slug`) REFERENCES `works` (`slug`) ON DELETE CASCADE
);

-- migrate:down

drop table if exists taggings;
