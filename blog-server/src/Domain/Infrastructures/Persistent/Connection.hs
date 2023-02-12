{-# LANGUAGE OverloadedStrings #-}

module Domain.Infrastructures.Persistent.Connection (connectDB, closeDB) where

import Database.SQLite.Simple (Connection, close, open)
import System.Environment (getEnv)

connectDB :: IO Connection
connectDB = do
  conn <- open =<< getEnv "DB_PATH"
  pure conn

closeDB :: Connection -> IO ()
closeDB conn = close conn
