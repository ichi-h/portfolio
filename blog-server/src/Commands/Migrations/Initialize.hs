{-# LANGUAGE OverloadedStrings #-}

module Commands.Migrations.Initialize (initialize) where

import Database.SQLite.Simple
  ( close,
    execute_,
    open,
  )

initialize :: IO ()
initialize = do
  conn <- open "./db/portfolio.sqlite3"
  execute_ conn "CREATE TABLE IF NOT EXISTS migrations (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, batch INTEGER)"
  close conn
