module Domain.Infrastructures.Fs.ReadMigrationFile
  ( MigrateOrRollback (..),
    readMigrationFile,
  )
where

data MigrateOrRollback = Migrate | Rollback

toMigrateType :: MigrateOrRollback -> String
toMigrateType Migrate = "up"
toMigrateType Rollback = "down"

readMigrationFile :: MigrateOrRollback -> String -> IO String
readMigrationFile migrateOrRollback target = do
  let migrateType = toMigrateType migrateOrRollback
  readFile $ "./db/migrations/" ++ target ++ "/" ++ migrateType ++ ".sql"
