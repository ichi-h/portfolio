{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module Migrations.Article (Article, ArticleT (..)) where

import Data.Int (Int32)
import Data.Text (Text)
import Data.Time (UTCTime)
import Database.Beam

data ArticleT f = Article
  { articleId :: Columnar f Int32,
    articleTitle :: Columnar f Text,
    articleCategoryId :: Columnar f Int32,
    articleThumbnailUrl :: Columnar f Text,
    articleContent :: Columnar f Text,
    articleCreatedAt :: Columnar f UTCTime,
    articleUpdatedAt :: Columnar f UTCTime,
    articlePublishedAt :: Columnar f UTCTime,
    articleUnpublishedAt :: Columnar f UTCTime
  }
  deriving (Generic, Beamable)

type Article = ArticleT Identity

instance Table ArticleT where
  data PrimaryKey ArticleT f = ArticleId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = ArticleId . articleId
