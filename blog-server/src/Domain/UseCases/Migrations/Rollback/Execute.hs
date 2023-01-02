module Domain.UseCases.Migrations.Rollback.Execute
  ( executeRollback,
  )
where

import Data.Text
import Domain.Entities.Migration (Migration (..))
import Domain.UseCases.Migrations.Rollback.Persistent
  ( DeleteMigration,
    ReadLatestMigration,
    ReadRollbackFile,
    RunRawQuery,
  )

executeRollback :: ReadLatestMigration -> ReadRollbackFile -> RunRawQuery -> DeleteMigration -> IO (Either String String)
executeRollback readLatestMigration readRollbackFile runRawQuery deleteMigration = do
  migration <- readLatestMigration
  case migration of
    Nothing -> pure $ Left "No migrations to rollback"
    Just m -> do
      sql <- readRollbackFile $ migrationName m
      runRawQuery $ pack sql
      deleteMigration $ migrationId m
      pure $ Right $ "Rolled back migration " ++ migrationName m
