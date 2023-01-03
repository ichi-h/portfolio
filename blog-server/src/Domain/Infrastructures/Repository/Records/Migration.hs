module Domain.Infrastructures.Repository.Records.Migration (MigrationR (..), migrationRToEntity) where

import Database.SQLite.Simple
  ( FromRow (..),
    ToRow (..),
  )
import Database.SQLite.Simple.FromRow (field)
import Domain.Entities.Migration (Migration (..))

data MigrationR = MigrationR
  { migrationRId :: Int,
    migrationRName :: String,
    migrationRBatch :: Int
  }

instance FromRow MigrationR where
  fromRow = MigrationR <$> field <*> field <*> field

instance ToRow MigrationR where
  toRow (MigrationR x y z) = toRow (x, y, z)

migrationRToEntity :: MigrationR -> Migration
migrationRToEntity m =
  Migration
    { migrationId = migrationRId m,
      migrationName = migrationRName m,
      migrationBatch = migrationRBatch m
    }
