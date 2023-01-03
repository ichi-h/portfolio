module Domain.Entities.Tag (Tag (..)) where

import Data.Text

data Tag = Tag
  { tagId :: Int,
    tagName :: Text
  }
