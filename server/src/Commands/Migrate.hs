{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}

module Commands.Migrate (migrate) where

import Control.Exception
import Database.Beam.Migrate.Simple (VerificationResult (..), createSchema, verifySchema)
import Database.Beam.Sqlite
import Database.Beam.Sqlite.Migrate (migrationBackend)
import Database.SQLite.Simple
import Domain.Infrastructures.Beam.PortfolioDB (portfolioDB)

migrate :: IO ()
migrate = bracket (open "./db/portfolio.db") close $ \conn ->
  runBeamSqliteDebug putStrLn conn $
    verifySchema migrationBackend portfolioDB >>= \case
      VerificationFailed _ -> createSchema migrationBackend portfolioDB
      VerificationSucceeded -> pure ()
