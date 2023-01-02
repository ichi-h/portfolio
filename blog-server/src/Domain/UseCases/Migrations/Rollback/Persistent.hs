module Domain.UseCases.Migrations.Rollback.Persistent
  ( ReadLatestMigration,
    ReadRollbackFile,
    RunRawQuery,
    DeleteMigration,
  )
where

import Data.Text
import Domain.Entities.Migration (Migration (..))

type ReadLatestMigration = IO (Maybe Migration)

type ReadRollbackFile = String -> IO String

type RunRawQuery = Text -> IO ()

type DeleteMigration = Int -> IO ()
