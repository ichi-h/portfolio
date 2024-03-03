-- migrate:up

CREATE TABLE languages (
  name TEXT NOT NULL PRIMARY KEY
);

-- migrate:down

DROP TABLE IF EXISTS languages;
