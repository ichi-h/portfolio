{-# LANGUAGE MultiParamTypeClasses #-}

module Domain.Infrastructures.Persistent.Records.Tag (TagR (..), toEntity) where

import Data.Text (Text)
import Database.SQLite.Simple
  ( FromRow (..),
    ToRow (..),
  )
import Database.SQLite.Simple.FromRow (field)
import Domain.Entities.Tag (Tag (..))
import Domain.Infrastructures.Persistent.Records.Record
import Prelude

data TagR = TagR
  { tagRId :: Int,
    tagRName :: Text
  }

instance FromRow TagR where
  fromRow = TagR <$> field <*> field

instance ToRow TagR where
  toRow (TagR a b) = toRow (a, b)

instance Record TagR Tag where
  toEntity tags = map (\r -> Tag (tagRId r) (tagRName r)) tags
