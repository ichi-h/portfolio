module Domain.Entities.Article (Article (..)) where

import Data.Text

data Article = Article
  { articleId :: Int,
    articleWorkId :: Int,
    articleBody :: Text
  }
