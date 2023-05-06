module Domain.Entities.Article (Article (..)) where

import Data.Text
import Domain.Entities.Entity (Entity (..))

data Article = Article
  { _articleId :: Int,
    _articleBody :: Text
  }
  deriving (Show)

instance Entity Article where
  validate article = Right article -- TODO: implement
