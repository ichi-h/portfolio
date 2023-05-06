module Domain.Entities.Tag (Tag (..), validate) where

import Data.Text
import Domain.Entities.Entity (Entity (..))

data Tag = Tag
  { _tagId :: Int,
    _tagName :: Text
  }
  deriving (Show)

instance Entity Tag where
  validate tag = Right tag -- TODO: implement
