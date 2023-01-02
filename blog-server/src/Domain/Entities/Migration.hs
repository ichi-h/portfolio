module Domain.Entities.Migration (Migration (..)) where

data Migration = Migration
  { migrationId :: Int,
    migrationName :: String,
    migrationBatch :: Int
  }
