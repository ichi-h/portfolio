{-# LANGUAGE OverloadedStrings #-}

module Commands.Migrations.Down (down) where

import Commands.Migrations.Migrations (Migrations (..))
import Data.Text
import Database.SQLite.Simple
  ( Only (..),
    Query (..),
    close,
    execute,
    execute_,
    open,
    query_,
  )

-- TODO
down :: IO ()
down = do
  conn <- open "./db/portfolio.sqlite3"
  migrations <- query_ conn "SELECT * from migrations order by batch desc limit 1" :: IO [Migrations]
  case migrations of
    [] -> putStrLn "No migrations to rollback"
    (m : _) -> do
      sql <- readFile $ "./db/migrations/" ++ migrationName m ++ "/down.sql"
      execute_ conn Query {fromQuery = pack sql}
      execute conn "DELETE FROM migrations WHERE id = ?" (Only (migrationId m) :: Only Int)
      putStrLn $ "Rolled back migration " ++ migrationName m
  close conn
