{-# LANGUAGE OverloadedStrings #-}

module Commands.Migrations.Down (down) where

import Commands.Migrations.Migrations (Migrations (..))
import Database.SQLite.Simple
  ( FromRow (..),
    Only (..),
    SQLError (..),
    ToRow (..),
    close,
    execute,
    execute_,
    open,
    query_,
  )
import Database.SQLite.Simple.FromRow (field)

-- TODO
down :: IO ()
down = do
  conn <- open "./db/portfolio.sqlite3"
  r <- query_ conn "SELECT * from migrations" :: IO [Migrations]
  mapM_ (\(Migrations _ name _) -> putStrLn name) r
  close conn
