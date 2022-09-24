{-# LANGUAGE OverloadedStrings #-}

module Main (main) where

import Database.Beam
import Database.Beam.Sqlite
import Database.SQLite.Simple
import Lib
import Migrations.User (SampleDb (sampleCartUsers), UserT (User), sampleDb)

main :: IO ()
main = do
  conn <- open "./db/sample.db"
  runBeamSqliteDebug putStrLn conn $
    runInsert $
      insert (sampleCartUsers sampleDb) $
        insertValues
          [ User "james@example.com" "James" "Smith" "b4cc344d25a2efe540adbf2678e2304c" {- james -},
            User "betty@example.com" "Betty" "Jones" "82b054bd83ffad9b6cf8bdb98ce3cc2f" {- betty -},
            User "sam@example.com" "Sam" "Taylor" "332532dcfaa1cbf61e2a266bd723612c" {- sam -}
          ]
  putStrLn "done"
  startApp
