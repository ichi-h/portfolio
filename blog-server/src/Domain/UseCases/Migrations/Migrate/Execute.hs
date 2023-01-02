module Domain.UseCases.Migrations.Migrate.Execute
  ( executeMigrate,
  )
where

import Data.Text
import Domain.Entities.Migration (Migration (..))
import Domain.UseCases.Migrations.Migrate.Persistent
  ( InsertMigration,
    ReadAllMigration,
    ReadMigrateFile,
    RunRawQuery,
  )

nextBatch :: [Migration] -> Int
nextBatch [] = 1
nextBatch migrations = (+) 1 $ Prelude.maximum (Prelude.map (\m -> migrationBatch m) migrations)

executeMigrate :: String -> InsertMigration -> ReadAllMigration -> ReadMigrateFile -> RunRawQuery -> IO (Either String String)
executeMigrate target insertMigration readAllMigrations readMigrateFile runRawQuery = do
  migrations <- readAllMigrations
  if Prelude.elem target (Prelude.map (\m -> migrationName m) migrations)
    then pure $ Left $ "Migration already exists"
    else do
      sql <- readMigrateFile target
      runRawQuery $ pack sql
      insertMigration (target :: String, nextBatch migrations :: Int)
      pure $ Right $ "Migrated " ++ target
