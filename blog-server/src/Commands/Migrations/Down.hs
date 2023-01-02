{-# LANGUAGE OverloadedStrings #-}

module Commands.Migrations.Down (main) where

import Commands.Migrations.Migration (Migration (..))
import Configuration.Dotenv (defaultConfig, loadFile)
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
import System.Environment (getEnv)

main :: IO ()
main = do
  _ <- loadFile defaultConfig
  dbPath <- getEnv "DB_PATH"
  conn <- open dbPath
  migrations <- query_ conn "SELECT * from migrations order by batch desc limit 1" :: IO [Migration]
  case migrations of
    [] -> putStrLn "No migrations to rollback"
    (m : _) -> do
      sql <- readFile $ "./db/migrations/" ++ migrationName m ++ "/down.sql"
      execute_ conn Query {fromQuery = pack sql}
      execute conn "DELETE FROM migrations WHERE id = ?" (Only (migrationId m) :: Only Int)
      putStrLn $ "Rolled back migration " ++ migrationName m
  close conn
