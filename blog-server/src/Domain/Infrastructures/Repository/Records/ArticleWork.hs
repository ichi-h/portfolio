module Domain.Infrastructures.Repository.Records.ArticleWork (ArticleWorkR (..)) where

import Database.SQLite.Simple
  ( FromRow (..),
    ToRow (..),
  )
import Database.SQLite.Simple.FromRow (field)

data ArticleWorkR = ArticleWorkR
  { articleWorkRId :: Int,
    articleWorkRName :: String,
    articleWorkRBatch :: Int
  }

instance FromRow ArticleWorkR where
  fromRow = ArticleWorkR <$> field <*> field <*> field

instance ToRow ArticleWorkR where
  toRow (ArticleWorkR x y z) = toRow (x, y, z)
