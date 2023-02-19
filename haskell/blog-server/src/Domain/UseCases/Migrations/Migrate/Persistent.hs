module Domain.UseCases.Migrations.Migrate.Persistent
  ( ReadAllMigration,
    InsertMigration,
    ReadMigrateFile,
    RunRawQuery,
  )
where

import Data.Text
import Domain.Entities.Migration (Migration (..))

type ReadAllMigration = IO [Migration]

type InsertMigration = (String, Int) -> IO ()

type ReadMigrateFile = String -> IO String

type RunRawQuery = Text -> IO ()
