{-# LANGUAGE OverloadedStrings #-}

module Domain.Infrastructures.Repository.Operators.Migrations
  ( insertMigration_,
    deleteMigration_,
    readAllMigrations_,
    readLatestMigration_,
  )
where

import Database.SQLite.Simple (Connection, Only (..), execute, query_)
import Domain.Entities.Migration (Migration (..))
import Domain.Infrastructures.Repository.Records.Migration (MigrationR (..))

insertMigration_ :: Connection -> (String, Int) -> IO ()
insertMigration_ conn (target, nextBatch) = execute conn "INSERT INTO migrations (name, batch) VALUES (?, ?)" (target :: String, nextBatch :: Int)

deleteMigration_ :: Connection -> Int -> IO ()
deleteMigration_ conn id' = execute conn "DELETE FROM migrations WHERE id = ?" (Only (id' :: Int))

readAllMigrations_ :: Connection -> IO [Migration]
readAllMigrations_ conn = do
  migrationRecords <- query_ conn "SELECT * from migrations" :: IO [MigrationR]
  let migrations =
        Prelude.map
          ( \m ->
              Migration
                { migrationId = migrationRId m,
                  migrationName = migrationRName m,
                  migrationBatch = migrationRBatch m
                }
          )
          migrationRecords
  pure migrations

readLatestMigration_ :: Connection -> IO (Maybe Migration)
readLatestMigration_ conn = do
  migrations <- query_ conn "SELECT * from migrations order by batch desc limit 1" :: IO [MigrationR]
  case migrations of
    [] -> pure Nothing
    (m : _) ->
      pure $
        Just
          ( Migration
              { migrationId = migrationRId m,
                migrationName = migrationRName m,
                migrationBatch = migrationRBatch m
              }
          )
