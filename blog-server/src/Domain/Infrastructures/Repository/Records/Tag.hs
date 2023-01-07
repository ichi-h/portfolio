module Domain.Infrastructures.Repository.Records.Tag (TagR, tagRToEntity) where

import Data.Text (Text)
import Database.SQLite.Simple
  ( FromRow (..),
    ToRow (..),
  )
import Database.SQLite.Simple.FromRow (field)
import Domain.Entities.Tag (Tag (..))
import Prelude

data TagR = TagR
  { tagRId :: Int,
    tagRName :: Text
  }

instance FromRow TagR where
  fromRow = TagR <$> field <*> field

instance ToRow TagR where
  toRow (TagR a b) = toRow (a, b)

tagRToEntity :: [TagR] -> [Tag]
tagRToEntity records = map (\r -> Tag (tagRId r) (tagRName r)) records
