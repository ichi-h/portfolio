{-# LANGUAGE OverloadedStrings #-}

module Commands.Migrations.Up (main) where

import Commands.Migrations.Migrations (Migrations (..))
import Configuration.Dotenv (defaultConfig, loadFile)
import Data.Text
import Database.SQLite.Simple
  ( Query (..),
    close,
    execute,
    execute_,
    open,
    query_,
  )
import System.Environment (getArgs, getEnv)

include :: Eq a => a -> [a] -> Bool
include _ [] = False
include x (y : ys) = x == y || include x ys

nextBatch :: [Migrations] -> Int
nextBatch [] = 1
nextBatch migrations = (+) 1 $ Prelude.maximum (Prelude.map (\m -> migrationBatch m) migrations)

main :: IO ()
main = do
  (target : _) <- getArgs
  _ <- loadFile defaultConfig
  dbPath <- getEnv "DB_PATH"
  if target == ""
    then putStrLn "No migration name provided"
    else do
      conn <- open dbPath
      migrations <- query_ conn "SELECT * from migrations" :: IO [Migrations]
      if include target (Prelude.map (\m -> migrationName m) migrations)
        then putStrLn "Migration already exists"
        else do
          sql <- readFile $ "./db/migrations/" ++ target ++ "/up.sql"
          execute_ conn Query {fromQuery = pack sql}
          execute conn "INSERT INTO migrations (name, batch) VALUES (?, ?)" (target :: String, nextBatch migrations :: Int)
      close conn
