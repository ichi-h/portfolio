module Domain.Entities.Article (Article (..)) where

import Data.Text

data Article = Article
  { _articleId :: Int,
    _articleBody :: Text
  }
