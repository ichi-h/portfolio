module Domain.Entities.Article (Article (..)) where

import Data.Text
import Domain.Entities.Entity (Entity (..))

data Article = Article
  { _articleId :: Int,
    _articleBody :: Text
  }

instance Entity Article where
  validate article = Right article -- TODO: implement
