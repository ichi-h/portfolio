module Domain.Entities.Article (Article (..)) where

import Data.Text

data Article = Article
  { articleId :: Int,
    articleBody :: Text
  }
