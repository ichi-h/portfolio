rm -f ./portfolio.sqlite3
litestream restore -config ./litestream.yaml ./portfolio.sqlite3
litestream replicate -config ./litestream.yaml
