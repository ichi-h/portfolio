-- migrate:up

CREATE TABLE work_language_relations (
  id TEXT NOT NULL PRIMARY KEY,
  language_name TEXT NOT NULL,
  work_slug TEXT NOT NULL,
  UNIQUE (`language_name`, `work_slug`),
  FOREIGN KEY (`language_name`) REFERENCES `languages` (`name`) ON DELETE CASCADE,
  FOREIGN KEY (`work_slug`) REFERENCES `works` (`slug`) ON DELETE CASCADE
);

-- migrate:down

DROP TABLE IF EXISTS work_language_relations;
