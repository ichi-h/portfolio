#!/usr/bin/sh

if [ "$1" = "dev" ]; then
  dbmate create
  dbmate migrate
  sqlite3 portfolio.sqlite3 < seeds.sql
elif [ "$1" = "prod" ]; then
  litestream restore -config ./litestream.yaml ./portfolio.sqlite3
  dbmate migrate
  litestream replicate -config ./litestream.yaml
fi
