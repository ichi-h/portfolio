{-# LANGUAGE OverloadedStrings #-}

module Commands.Migrations.Migration (Migration (..)) where

import Database.SQLite.Simple
  ( FromRow (..),
    ToRow (..),
  )
import Database.SQLite.Simple.FromRow (field)

data Migration = Migration
  { migrationId :: Int,
    migrationName :: String,
    migrationBatch :: Int
  }

instance FromRow Migration where
  fromRow = Migration <$> field <*> field <*> field

instance ToRow Migration where
  toRow (Migration x y z) = toRow (x, y, z)
