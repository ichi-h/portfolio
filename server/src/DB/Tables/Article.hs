{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.Article (ArticleT (..)) where

import DB.Tables.ArticleCategory (ArticleCategoryT)
import Data.Int (Int32)
import Data.Text (Text)
import Database.Beam

data ArticleT f = Article
  { articleId :: Columnar f Int32,
    articleTitle :: Columnar f Text,
    articleForCategory :: PrimaryKey ArticleCategoryT f,
    articleThumbnailUrl :: Columnar f Text,
    articleContent :: Columnar f Text,
    articleCreatedAt :: Columnar f Text,
    articleUpdatedAt :: Columnar f Text,
    articlePublishedAt :: Columnar f (Maybe Text),
    articleUnpublishedAt :: Columnar f (Maybe Text)
  }
  deriving (Generic, Beamable)

type Article = ArticleT Identity

instance Table ArticleT where
  data PrimaryKey ArticleT f = ArticleId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = ArticleId . articleId
