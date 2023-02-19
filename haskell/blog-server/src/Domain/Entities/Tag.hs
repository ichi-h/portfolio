module Domain.Entities.Tag (Tag (..)) where

import Data.Text

data Tag = Tag
  { _tagId :: Int,
    _tagName :: Text
  }
