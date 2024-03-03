#!/usr/bin/sh

if [ "$1" = "dev" ]; then
  dbmate create
  dbmate migrate
  sqlite3 /db/portfolio.sqlite3 < seeds.sql
  while true; do
    sleep 1000
  done
elif [ "$1" = "prod" ]; then
  litestream restore -config ./litestream.yaml /db/portfolio.sqlite3
  dbmate migrate
  litestream replicate -config ./litestream.yaml
fi
