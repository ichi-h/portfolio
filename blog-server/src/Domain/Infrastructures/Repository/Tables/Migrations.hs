module Domain.Infrastructures.Repository.Tables.Migrations (MigrationT (..)) where

import Database.SQLite.Simple
  ( FromRow (..),
    ToRow (..),
  )
import Database.SQLite.Simple.FromRow (field)

data MigrationT = MigrationT
  { migrationTId :: Int,
    migrationTName :: String,
    migrationTBatch :: Int
  }

instance FromRow MigrationT where
  fromRow = MigrationT <$> field <*> field <*> field

instance ToRow MigrationT where
  toRow (MigrationT x y z) = toRow (x, y, z)
