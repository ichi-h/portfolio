{-# LANGUAGE OverloadedStrings #-}

module Commands.Migrations.Migrations (Migrations (..)) where

import Database.SQLite.Simple
  ( FromRow (..),
    ToRow (..),
  )
import Database.SQLite.Simple.FromRow (field)

data Migrations = Migrations
  { id :: Int,
    name :: String,
    batch :: Int
  }

instance FromRow Migrations where
  fromRow = Migrations <$> field <*> field <*> field

instance ToRow Migrations where
  toRow (Migrations x y z) = toRow (x, y, z)
