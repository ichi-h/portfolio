{-# LANGUAGE OverloadedStrings #-}

module Commands.Migrations.Up (up) where

import Commands.Migrations.Migrations (Migrations (..))
import Data.Text
import Database.SQLite.Simple
  ( Query (..),
    close,
    execute,
    execute_,
    open,
    query_,
  )

include :: Eq a => a -> [a] -> Bool
include _ [] = False
include x (y : ys) = x == y || include x ys

up :: String -> IO ()
up migrationName = do
  if migrationName == ""
    then putStrLn "No migration name provided"
    else do
      conn <- open "./db/portfolio.sqlite3"
      migrations <- query_ conn "SELECT * from migrations" :: IO [Migrations]
      if include migrationName (Prelude.map (\m -> name m) migrations)
        then putStrLn "Migration already exists"
        else do
          sql <- readFile $ "./db/migrations/" ++ migrationName ++ "/up.sql"
          execute_ conn Query {fromQuery = pack sql}
          let next = (+) 1 $ Prelude.maximum (Prelude.map (\m -> batch m) migrations)
          execute conn "INSERT INTO migrations (name, batch) VALUES (?, ?)" (migrationName :: String, next :: Int)
      close conn
