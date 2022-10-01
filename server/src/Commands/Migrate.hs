{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}

import Control.Exception
import Domain.Infrastructures.Beam.PortfolioDB (portfolioDB)
import Database.Beam.Migrate.Simple (VerificationResult (..), createSchema, verifySchema)
import Database.Beam.Sqlite
import Database.Beam.Sqlite.Migrate (migrationBackend)
import Database.SQLite.Simple

migrate :: IO ()
migrate = bracket (open "./db/portfolio.db") close $ \conn ->
  runBeamSqliteDebug putStrLn conn $
    verifySchema migrationBackend portfolioDB >>= \case
      VerificationFailed _ -> createSchema migrationBackend portfolioDB
      VerificationSucceeded -> pure ()
