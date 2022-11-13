module Domain.Entities.ArticleT where

import Domain.Entities.Entity (Entity, validate)

data ArticleT = ArticleT
  { articleId :: Int,
    articleTitle :: String,
    articleCategoryId :: Int,
    articleThumbnailUrl :: String,
    articleContent :: String,
    articleCreatedAt :: String,
    articleUpdatedAt :: String,
    articlePublishedAt :: Maybe String,
    articleUnpublishedAt :: Maybe String
  }
  deriving (Show)

instance Entity ArticleT where
  validate a = Right a
