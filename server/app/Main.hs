{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}

module Main (main) where

import Control.Exception
import DB.PortfolioDB (portfolioDB)
import Database.Beam.Migrate.Simple (VerificationResult (..), createSchema, verifySchema)
import Database.Beam.Sqlite
import Database.Beam.Sqlite.Migrate (migrationBackend)
import Database.SQLite.Simple
import Lib

-- initializeTables :: IO ()
-- initializeTables = bracket (open "./db/portfolio.db") close $ \conn ->
--   runBeamSqliteDebug putStrLn conn $
--     verifySchema migrationBackend portfolioDB >>= \case
--       VerificationFailed _ -> createSchema migrationBackend portfolioDB
--       VerificationSucceeded -> pure ()

main :: IO ()
main = do
  -- conn <- open "./db/sample.db"
  -- runBeamSqliteDebug putStrLn conn $
  --   runInsert $
  --     insert (sampleCartUsers sampleDb) $
  --       insertValues
  --         [ User "james@example.com" "James" "Smith" "b4cc344d25a2efe540adbf2678e2304c" {- james -},
  --           User "betty@example.com" "Betty" "Jones" "82b054bd83ffad9b6cf8bdb98ce3cc2f" {- betty -},
  --           User "sam@example.com" "Sam" "Taylor" "332532dcfaa1cbf61e2a266bd723612c" {- sam -}
  --         ]
  -- putStrLn "done"
  -- initializeTables
  startApp
