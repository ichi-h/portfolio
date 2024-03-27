#!/usr/bin/sh

if [ "$1" = "dev" ]; then
  dbmate create
  dbmate migrate
  sqlite3 /db/portfolio.sqlite3 < seeds.sql
elif [ "$1" = "prod" ]; then
  dbmate migrate
fi

sqlite_web /db/portfolio.sqlite3 --password -H 0.0.0.0 -p 5432 --url-prefix /db
